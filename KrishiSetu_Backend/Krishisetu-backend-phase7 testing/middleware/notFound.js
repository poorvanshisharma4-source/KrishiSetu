// Catch-all handler for any request that doesn't match a defined route.
// Mounted AFTER all app.use("/api/...") route registrations in server.js,
// so it only ever fires for genuinely unmatched paths.
// Uses the same { success, message } response shape as the rest of the API.
const notFound = (req, res, next) => {
  res.status(404).json({
    success: false,
    message: `Route not found: ${req.method} ${req.originalUrl}`,
  });
};

module.exports = notFound;
