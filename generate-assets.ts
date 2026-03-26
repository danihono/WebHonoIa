import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

async function generateAndSave(prompt: string, filename: string) {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash-image',
      contents: {
        parts: [{ text: `Minimalist monochrome (pure black and white) style. ${prompt}. High contrast, professional, clean lines.` }],
      },
      config: { imageConfig: { aspectRatio: "1:1" } },
    });

    const base64 = response.candidates?.[0]?.content?.parts?.find(p => p.inlineData)?.inlineData?.data;
    if (base64) {
      console.log(`GENERATED_${filename}:${base64}`);
    }
  } catch (e) {
    console.error(`Error generating ${filename}:`, e);
  }
}

async function main() {
  await generateAndSave("A minimalist monochrome portrait of a young person for a professional avatar. Studio lighting, dark background.", "avatar-1.png");
  await generateAndSave("A minimalist monochrome portrait of a mature person for a professional avatar. Studio lighting, dark background.", "avatar-2.png");
  await generateAndSave("A minimalist monochrome portrait of a creative person for a professional avatar. Studio lighting, dark background.", "avatar-3.png");
  await generateAndSave("A minimalist, monochrome (white on black) icon of the ChatGPT logo.", "icon-chatgpt.png");
  await generateAndSave("A minimalist, monochrome (white on black) icon of the Perplexity AI logo.", "icon-perplexity.png");
  await generateAndSave("A minimalist, monochrome (white on black) icon of a Google-style AI spark or logo.", "icon-google.png");
}

main();
