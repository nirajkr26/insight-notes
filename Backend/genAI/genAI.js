const { GoogleGenAI } = require("@google/genai");
require('dotenv').config();

const GEMINI_API_KEY = process.env.GEMINI_API_KEY;
// The client gets the API key from the environment variable `GEMINI_API_KEY`.
const ai = new GoogleGenAI({});

const prompt=` `;


async function main() {
  const response = await ai.models.generateContent({
    model: "gemini-2.5-flash",
    contents: prompt,
  });
  console.log(response.text);
}

main();