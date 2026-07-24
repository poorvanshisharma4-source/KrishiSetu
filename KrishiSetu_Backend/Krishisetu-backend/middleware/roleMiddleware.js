const authorizeRoles = (...allowedRoles) => {
  return (req, res, next) => {
    if (!allowedRoles.includes(req.user.role)) {
      return res.status(403).json({
        success: false,
        message: "Access denied. You do not have permission.",
      });
    }

    next();
  };
};

// Convenience role-specific middleware built on top of authorizeRoles.
// Attached to the same export so existing usages of
// `const authorizeRoles = require("../middleware/roleMiddleware")`
// continue to work unchanged.
authorizeRoles.isAdmin = authorizeRoles("admin");
authorizeRoles.isFarmer = authorizeRoles("farmer");
authorizeRoles.isBuyer = authorizeRoles("buyer");

module.exports = authorizeRoles;