const { getModel } = require("../config/groq");

const generateResponse = async (prompt, language = "en") => {
  try {
    const groq = getModel();

    const languageInstructions = {
  en: "Respond completely in English.",
  hi: "Respond completely in Hindi using Devanagari script only. Do not use Roman Hindi or English words unless they are unavoidable technical terms.",
  mr: "Respond completely in Marathi using Devanagari script only.",
  ta: "Respond completely in Tamil script.",
  bn: "Respond completely in Bengali script.",
  te: "Respond completely in Telugu script.",
};

    const fullPrompt = `${languageInstructions[language] || languageInstructions.en}

${prompt}

IMPORTANT: Return ONLY valid JSON. No markdown, no explanations outside the JSON.`;

    const completion = await groq.chat.completions.create({
      messages: [
        {
          role: "user",
          content: fullPrompt,
        },
      ],
      model: "llama-3.3-70b-versatile",
      temperature: 0.3,
    });

    const text = completion.choices[0].message.content;

    const cleanedText = text
      .replace(/```json\n?/g, "")
      .replace(/```\n?/g, "")
      .trim();

    return JSON.parse(cleanedText);

  } catch (error) {
    console.error("Groq API Error:", error);
    throw new Error("Failed to generate AI response");
  }
};

module.exports = { generateResponse };