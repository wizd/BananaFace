import { GoogleGenAI, Modality } from "@google/genai";
import dotenv from "dotenv";

dotenv.config();

const apiKey = process.env.GEMINI_API_KEY;
if (!apiKey) {
  throw new Error("GEMINI_API_KEY is not set in environment variables");
}

const ai = new GoogleGenAI({ apiKey });

export async function POST(request: Request) {
  try {
    const { base64ImageData, mimeType, prompt } = await request.json();

    if (!base64ImageData || !mimeType || !prompt) {
      return Response.json(
        {
          error: "base64ImageData, mimeType, and prompt are required",
        },
        { status: 400 }
      );
    }

    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash-image-preview",
      contents: {
        parts: [
          {
            inlineData: {
              data: base64ImageData,
              mimeType: mimeType,
            },
          },
          { text: prompt },
        ],
      },
      config: {
        responseModalities: [Modality.IMAGE, Modality.TEXT],
      },
    });

    let textResponse = "";
    for (const part of response.candidates[0].content.parts) {
      if (part.inlineData) {
        return Response.json({
          imageBytes: part.inlineData.data,
        });
      }
      if (part.text) {
        textResponse += part.text;
      }
    }

    const errorMessage = textResponse
      ? `Model returned text instead of an image: "${textResponse}"`
      : "No image was returned from the edit request. The model may have refused the request.";

    return Response.json({ error: errorMessage }, { status: 500 });
  } catch (error) {
    console.error("Error in edit-portrait:", error);
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
