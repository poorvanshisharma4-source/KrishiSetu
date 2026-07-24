const { body, validationResult } = require("express-validator");

// Runs after the rule chains below; returns a 400 with the same
// response shape used across the rest of the API if validation fails.
const handleValidationErrors = (req, res, next) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).json({
      success: false,
      message: errors.array()[0].msg,
      errors: errors.array().map((e) => ({
        field: e.path,
        message: e.msg,
      })),
    });
  }

  next();
};

const registerValidationRules = [
  body("name")
    .trim()
    .notEmpty()
    .withMessage("Name is required")
    .isLength({ min: 2 })
    .withMessage("Name must be at least 2 characters long"),

  body("phone")
    .trim()
    .notEmpty()
    .withMessage("Phone number is required")
    .matches(/^[0-9]{10}$/)
    .withMessage("Phone number must be a valid 10-digit number"),

  body("password")
    .notEmpty()
    .withMessage("Password is required")
    .isLength({ min: 6 })
    .withMessage("Password must be at least 6 characters long"),

  // Note: "admin" is intentionally excluded here. It now exists as a
  // valid role on the User model (for the admin middleware), but the
  // public /register endpoint should not let anyone self-assign it.
  body("role")
    .trim()
    .notEmpty()
    .withMessage("Role is required")
    .isIn(["farmer", "buyer"])
    .withMessage("Role must be one of: farmer, buyer"),

  body("village").optional().trim(),
  body("district").optional().trim(),
  body("state").optional().trim(),

  handleValidationErrors,
];

const loginValidationRules = [
  body("phone")
    .trim()
    .notEmpty()
    .withMessage("Phone number is required")
    .matches(/^[0-9]{10}$/)
    .withMessage("Phone number must be a valid 10-digit number"),

  body("password").notEmpty().withMessage("Password is required"),

  handleValidationErrors,
];

module.exports = {
  registerValidationRules,
  loginValidationRules,
};
