import { GoogleGenAI } from "@google/genai";
import dotenv from "dotenv";

dotenv.config();

const apiKey = process.env.GEMINI_API_KEY;
if (!apiKey) {
  throw new Error("GEMINI_API_KEY is not set in environment variables");
}

const ai = new GoogleGenAI({ apiKey });

export async function POST(request: Request) {
  try {
    const { prompt } = await request.json();

    if (!prompt) {
      return Response.json({ error: "Prompt is required" }, { status: 400 });
    }

    const response = await ai.models.generateImages({
      model: "imagen-4.0-generate-001",
      prompt: prompt,
      config: {
        numberOfImages: 1,
        outputMimeType: "image/png",
        aspectRatio: "3:4",
      },
    });

    if (response.generatedImages && response.generatedImages.length > 0) {
      return Response.json({
        imageBytes: response.generatedImages[0].image.imageBytes,
      });
    }

    return Response.json(
      {
        error:
          "No image was generated. The model may have refused the request due to safety policies.",
      },
      { status: 500 }
    );
  } catch (error) {
    console.error("Error in generate-portrait:", error);
    if (error instanceof Error) {
      return Response.json(
        { error: `An error occurred with the Gemini API: ${error.message}` },
        { status: 500 }
      );
    }
    return Response.json(
      {
        error:
          "An unknown error occurred while communicating with the Gemini API.",
      },
      { status: 500 }
    );
  }
}
