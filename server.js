import express from 'express';
import { GoogleGenAI, Modality } from "@google/genai";
import dotenv from "dotenv";
import path from 'path';
import { fileURLToPath } from 'url';

dotenv.config();

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const apiKey = process.env.GEMINI_API_KEY;
if (!apiKey) {
    throw new Error("GEMINI_API_KEY is not set in environment variables");
}

const ai = new GoogleGenAI({ apiKey });

async function createServer() {
    const app = express();

    // API 路由处理 - 必须在 Vite 中间件之前注册
    app.post('/api/generate-portrait', express.json(), async (req, res) => {
        try {
            const { prompt } = req.body;

            if (!prompt) {
                return res.status(400).json({ error: "Prompt is required" });
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
                return res.json({
                    imageBytes: response.generatedImages[0].image.imageBytes,
                });
            }

            return res.status(500).json({
                error: "No image was generated. The model may have refused the request due to safety policies.",
            });
        } catch (error) {
            console.error("Error in generate-portrait:", error);
            return res.status(500).json({
                error: error instanceof Error ? error.message : "Unknown error",
            });
        }
    });

    app.post('/api/edit-portrait', express.json(), async (req, res) => {
        try {
            const { base64ImageData, mimeType, prompt } = req.body;

            if (!base64ImageData || !mimeType || !prompt) {
                return res.status(400).json({
                    error: "base64ImageData, mimeType, and prompt are required",
                });
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
                    return res.json({
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

            return res.status(500).json({ error: errorMessage });
        } catch (error) {
            console.error("Error in edit-portrait:", error);
            return res.status(500).json({
                error: error instanceof Error ? error.message : "Unknown error",
            });
        }
    });

    if (process.env.NODE_ENV === 'production') {
        app.use(express.static(path.resolve(__dirname, 'dist')));

        // SPA 路由处理
        app.get('*', (req, res) => {
            res.sendFile(path.resolve(__dirname, 'dist/index.html'));
        });
    } else {
        // 创建 Vite 服务器用于开发环境
        const { createServer: createViteServer } = await import('vite');
        const vite = await createViteServer({
            server: { middlewareMode: true },
            appType: 'spa'
        });

        // 使用 Vite 中间件处理前端文件
        app.use(vite.middlewares);
    }

    const port = process.env.PORT || 3000;
    app.listen(port, () => {
        console.log(`Server running on port ${port}`);
    });
}

createServer().catch(console.error);
