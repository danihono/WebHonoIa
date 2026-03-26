import { GoogleGenAI } from "@google/genai";

export async function generateSpaceBackground() {
  const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
  const response = await ai.models.generateContent({
    model: 'gemini-2.5-flash-image',
    contents: {
      parts: [
        {
          text: 'space background with deep navy blue nebula, glowing blue gas clouds, scattered small stars, subtle light bloom, gradient from black to blue, cinematic depth, realistic space photography, soft diffusion, ultra detailed, 4k, minimal noise',
        },
      ],
    },
    config: {
      imageConfig: {
            aspectRatio: "16:9",
            imageSize: "1K"
        },
    },
  });
  
  for (const part of response.candidates[0].content.parts) {
    if (part.inlineData) {
      return `data:image/png;base64,${part.inlineData.data}`;
    }
  }
  return null;
}
