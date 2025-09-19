
import { GoogleGenAI, Modality } from "@google/genai";

const apiKey = process.env.API_KEY as string;
const ai = new GoogleGenAI({ apiKey });

const handleError = (error: unknown, context: string): never => {
    console.error(`Error in ${context}:`, error);
    if (error instanceof Error) {
        throw new Error(`An error occurred with the Gemini API: ${error.message}`);
    }
    throw new Error("An unknown error occurred while communicating with the Gemini API.");
};

export const generatePortrait = async (prompt: string): Promise<string> => {
    try {
        const response = await ai.models.generateImages({
            model: 'imagen-4.0-generate-001',
            prompt: prompt,
            config: {
                numberOfImages: 1,
                outputMimeType: 'image/png',
                aspectRatio: '3:4',
            },
        });

        if (response.generatedImages && response.generatedImages.length > 0) {
            return response.generatedImages[0].image.imageBytes;
        }

        throw new Error("No image was generated. The model may have refused the request due to safety policies.");

    } catch (error) {
        handleError(error, "generatePortrait");
    }
};

export const editPortrait = async (base64ImageData: string, mimeType: string, prompt: string): Promise<string> => {
    try {
        const response = await ai.models.generateContent({
            model: 'gemini-2.5-flash-image-preview',
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
        
        let textResponse = '';
        for (const part of response.candidates[0].content.parts) {
            if (part.inlineData) {
                return part.inlineData.data;
            }
            if (part.text) {
                textResponse += part.text;
            }
        }
        
        const errorMessage = textResponse 
            ? `Model returned text instead of an image: "${textResponse}"`
            : "No image was returned from the edit request. The model may have refused the request.";

        throw new Error(errorMessage);

    } catch (error) {
        handleError(error, "editPortrait");
    }
};
