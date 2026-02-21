import { GoogleGenAI } from "@google/genai";

const apiKey = process.env.API_KEY || '';
const ai = new GoogleGenAI({ apiKey });

export const getTravelAdvice = async (prompt: string): Promise<string> => {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: prompt,
      config: {
        systemInstruction: "You are a luxury travel consultant for AWU Travels. Your tone is sophisticated, knowledgeable, and inviting. Focus on high-end experiences, hidden gems, and personalized itineraries. Keep responses concise (under 100 words).",
      }
    });
    return response.text || "I'm currently unable to access the luxury database. Please try again shortly.";
  } catch (error) {
    console.error("Error fetching travel advice:", error);
    return "I apologize, but I'm unable to provide advice at the moment. Please try again later.";
  }
};