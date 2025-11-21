import { GoogleGenAI } from "@google/genai";

// Note: In a real production app, keys should be proxied through a backend.
// This simulation allows the user to input a key if process.env is missing.
let aiClient: GoogleGenAI | null = null;

export const initializeGemini = (apiKey: string) => {
  aiClient = new GoogleGenAI({ apiKey });
};

export const analyzeSatelliteImage = async (
  base64Image: string, 
  mimeType: string,
  promptText: string = "Analyze this remote sensing imagery. Identify land cover types, man-made structures, and any notable features. Provide the output in a structured technical format suitable for a remote sensing report."
): Promise<string> => {
  if (!aiClient) {
    throw new Error("API Key not initialized. Please provide a key.");
  }

  try {
    const response = await aiClient.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: {
        parts: [
          {
            inlineData: {
              mimeType: mimeType,
              data: base64Image,
            },
          },
          {
            text: promptText,
          },
        ],
      },
      config: {
        systemInstruction: "You are TerraSense-Base, an advanced 8B parameter remote sensing foundation model. Your output should be highly technical, focusing on spectral characteristics, object detection, and segmentation description. Use terms like 'Vegetation Index', 'Built-up Area', 'Water Body', etc.",
      }
    });

    return response.text || "No analysis could be generated.";
  } catch (error) {
    console.error("Gemini Analysis Error:", error);
    throw error;
  }
};
