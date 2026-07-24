const Groq = require("groq-sdk");

const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY,
});

const getModel = () => {
  return groq;
};

module.exports = { getModel };