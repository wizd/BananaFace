
export type Lang = 'en' | 'zh';
export type Theme = 'light' | 'dark';
export type Mode = 'text-to-image' | 'image-to-image';

export interface BilingualLabel {
  en: string;
  zh: string;
}

export interface ControlOption {
  label: BilingualLabel;
  value: string;
}

export interface ControlCategory {
  id: string;
  name: BilingualLabel;
  options: ControlOption[];
}

export interface ControlGroup {
  name: BilingualLabel;
  controls: ControlCategory[];
}

export type PromptOptions = Record<string, string>;

export interface UploadedImage {
  base64: string;
  mimeType: string;
  url: string;
  width: number;
  height: number;
}

export interface HistoryItem {
  id: number;
  imageUrl: string;
  options: PromptOptions;
  mode: Mode;
  originalImageBase64?: string;
  originalImageMimeType?: string;
}