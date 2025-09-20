
// 使用相对路径，服务器会处理 API 路由
const API_BASE_URL = "";

const handleError = (error: unknown, context: string): never => {
  console.error(`Error in ${context}:`, error);
  if (error instanceof Error) {
    throw new Error(`An error occurred: ${error.message}`);
  }
  throw new Error("An unknown error occurred.");
};

export const generatePortrait = async (prompt: string): Promise<string> => {
  try {
    const response = await fetch("/api/generate-portrait", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ prompt }),
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.error || "Failed to generate portrait");
    }

    return data.imageBytes;
  } catch (error) {
    handleError(error, "generatePortrait");
  }
};

export const editPortrait = async (
  base64ImageData: string,
  mimeType: string,
  prompt: string
): Promise<string> => {
  try {
    const response = await fetch("/api/edit-portrait", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        base64ImageData,
        mimeType,
        prompt,
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.error || "Failed to edit portrait");
    }

    return data.imageBytes;
  } catch (error) {
    handleError(error, "editPortrait");
  }
};
