
const API_BASE_URL =
  process.env.NODE_ENV === "production"
    ? "https://your-production-api-url.com" // 请替换为你的生产环境API URL
    : "";

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
