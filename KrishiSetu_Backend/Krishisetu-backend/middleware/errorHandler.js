// Centralized fallback error handler.
//
// This is a SAFETY NET, not a replacement for the try/catch blocks already
// present in every controller. Those existing blocks continue to handle
// their own errors and send their own responses exactly as before — this
// middleware never overrides them.
//
// It only fires for errors that slip past that per-controller handling:
//   - a synchronous throw inside a route handler
//   - a rejected promise passed to next(err) instead of being caught
//   - errors thrown by Express/body-parser itself (e.g. malformed JSON body)
//   - any error forwarded via next(err) from future code
//
// Must be registered LAST, after notFound and after all routes, per
// Express's error-handling middleware convention (4 arguments).
const errorHandler = (err, req, res, next) => {
  // If a response has already been sent, delegate to Express's default
  // handler instead of trying to send a second response.
  if (res.headersSent) {
    return next(err);
  }

  console.error("Unhandled Error:", err);

  // Malformed JSON body from express.json()
  if (err.type === "entity.parse.failed") {
    return res.status(400).json({
      success: false,
      message: "Invalid JSON in request body",
    });
  }

  // Mongoose invalid ObjectId (CastError) — matches the 400 pattern
  // already used throughout the controllers for bad input.
  if (err.name === "CastError") {
    return res.status(400).json({
      success: false,
      message: `Invalid value for ${err.path}`,
    });
  }

  // Mongoose validation error, same shape controllers already use.
  if (err.name === "ValidationError") {
    return res.status(400).json({
      success: false,
      message: Object.values(err.errors)[0]?.message || "Invalid input",
    });
  }

  // Duplicate key error
  if (err.code === 11000) {
    return res.status(409).json({
      success: false,
      message: "Duplicate value entered",
    });
  }

  const statusCode = err.statusCode && err.statusCode >= 400 ? err.statusCode : 500;

  res.status(statusCode).json({
    success: false,
    message: statusCode === 500 ? "Server Error" : err.message,
  });
};

module.exports = errorHandler;
