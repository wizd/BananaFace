import path from 'path';
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import fs from "fs";
import { GoogleGenAI, Modality } from "@google/genai";
import dotenv from "dotenv";

dotenv.config();

const apiKey = process.env.GEMINI_API_KEY;
if (!apiKey) {
  throw new Error("GEMINI_API_KEY is not set in environment variables");
}

const ai = new GoogleGenAI({ apiKey });

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, ".", "");
  return {
    plugins: [
      react(),
      {
        name: "api-routes",
        configureServer(server) {
          server.middlewares.use(
            "/api/generate-portrait",
            async (req, res, next) => {
              if (req.method !== "POST") return next();

              try {
                let body = "";
                req.on("data", (chunk) => {
                  body += chunk.toString();
                });

                req.on("end", async () => {
                  try {
                    const { prompt } = JSON.parse(body);

                    if (!prompt) {
                      res.statusCode = 400;
                      res.setHeader("Content-Type", "application/json");
                      res.end(JSON.stringify({ error: "Prompt is required" }));
                      return;
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

                    if (
                      response.generatedImages &&
                      response.generatedImages.length > 0
                    ) {
                      res.setHeader("Content-Type", "application/json");
                      res.end(
                        JSON.stringify({
                          imageBytes:
                            response.generatedImages[0].image.imageBytes,
                        })
                      );
                      return;
                    }

                    res.statusCode = 500;
                    res.setHeader("Content-Type", "application/json");
                    res.end(
                      JSON.stringify({
                        error:
                          "No image was generated. The model may have refused the request due to safety policies.",
                      })
                    );
                  } catch (error) {
                    console.error("Error in generate-portrait:", error);
                    res.statusCode = 500;
                    res.setHeader("Content-Type", "application/json");
                    res.end(
                      JSON.stringify({
                        error:
                          error instanceof Error
                            ? error.message
                            : "Unknown error",
                      })
                    );
                  }
                });
              } catch (error) {
                next(error);
              }
            }
          );

          server.middlewares.use(
            "/api/edit-portrait",
            async (req, res, next) => {
              if (req.method !== "POST") return next();

              try {
                let body = "";
                req.on("data", (chunk) => {
                  body += chunk.toString();
                });

                req.on("end", async () => {
                  try {
                    const { base64ImageData, mimeType, prompt } =
                      JSON.parse(body);

                    if (!base64ImageData || !mimeType || !prompt) {
                      res.statusCode = 400;
                      res.setHeader("Content-Type", "application/json");
                      res.end(
                        JSON.stringify({
                          error:
                            "base64ImageData, mimeType, and prompt are required",
                        })
                      );
                      return;
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
                        res.setHeader("Content-Type", "application/json");
                        res.end(
                          JSON.stringify({
                            imageBytes: part.inlineData.data,
                          })
                        );
                        return;
                      }
                      if (part.text) {
                        textResponse += part.text;
                      }
                    }

                    const errorMessage = textResponse
                      ? `Model returned text instead of an image: "${textResponse}"`
                      : "No image was returned from the edit request. The model may have refused the request.";

                    res.statusCode = 500;
                    res.setHeader("Content-Type", "application/json");
                    res.end(JSON.stringify({ error: errorMessage }));
                  } catch (error) {
                    console.error("Error in edit-portrait:", error);
                    res.statusCode = 500;
                    res.setHeader("Content-Type", "application/json");
                    res.end(
                      JSON.stringify({
                        error:
                          error instanceof Error
                            ? error.message
                            : "Unknown error",
                      })
                    );
                  }
                });
              } catch (error) {
                next(error);
              }
            }
          );
        },
      },
    ],
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "."),
      },
    },
  };
});
