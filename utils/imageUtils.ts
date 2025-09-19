
export const fileToBase64 = (file: File): Promise<{ base64: string; mimeType: string }> => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      const result = reader.result as string;
      const [header, data] = result.split(',');
      const mimeType = header?.split(';')[0]?.split(':')[1];
      
      if (data && mimeType) {
        resolve({ base64: data, mimeType });
      } else {
        reject(new Error("Failed to parse file and convert to base64."));
      }
    };
    reader.onerror = (error) => reject(error);
  });
};
