const supportedLanguages = ["en", "hi", "mr", "ta", "bn", "te"];

const detectLanguage = (req, res, next) => {
  const acceptLanguage = req.headers["accept-language"];
  const bodyLanguage = req.body?.language;

  let language = "en";

  if (bodyLanguage && supportedLanguages.includes(bodyLanguage)) {
    language = bodyLanguage;
  } else if (acceptLanguage) {
    const preferredLanguage = acceptLanguage.split(",")[0].split("-")[0];
    if (supportedLanguages.includes(preferredLanguage)) {
      language = preferredLanguage;
    }
  }

  req.language = language;
  next();
};

module.exports = { detectLanguage };
