import React, { useCallback } from 'react';
import { UploadIcon } from './icons/UploadIcon';
import type { Lang } from '../types';

interface ImageUploaderProps {
  onImageChange: (file: File | null) => void;
  lang: Lang;
}

const labels = {
  click: { en: 'Click to upload', zh: '点击上传' },
  drag: { en: 'or drag and drop', zh: '或拖放文件' },
  formats: { en: 'PNG, JPG, or WEBP', zh: '支持 PNG, JPG, WEBP 格式' },
}

export const ImageUploader: React.FC<ImageUploaderProps> = ({ onImageChange, lang }) => {
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      onImageChange(e.target.files[0]);
    }
  };
  
  const onDragOver = useCallback((e: React.DragEvent<HTMLLabelElement>) => {
    e.preventDefault();
  }, []);

  const onDrop = useCallback((e: React.DragEvent<HTMLLabelElement>) => {
    e.preventDefault();
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      onImageChange(e.dataTransfer.files[0]);
      e.dataTransfer.clearData();
    }
  }, [onImageChange]);

  return (
    <div className="w-full h-full flex items-center justify-center">
      <label 
        htmlFor="image-upload" 
        className="relative flex flex-col items-center justify-center w-full h-full min-h-[300px] border-2 border-dashed border-pink-accent/50 rounded-lg cursor-pointer bg-gray-50 dark:bg-black/20 hover:bg-gray-100 dark:hover:bg-black/40 transition-colors"
        onDragOver={onDragOver}
        onDrop={onDrop}
      >
        <div className="flex flex-col items-center justify-center pt-5 pb-6 text-center">
          <UploadIcon />
          <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
            <span className="font-semibold text-pink-accent">{labels.click[lang]}</span> {labels.drag[lang]}
          </p>
          <p className="text-xs text-gray-500 dark:text-gray-400">{labels.formats[lang]}</p>
        </div>
        <input id="image-upload" type="file" className="hidden" accept="image/png, image/jpeg, image/webp" onChange={handleFileChange} />
      </label>
    </div>
  );
};