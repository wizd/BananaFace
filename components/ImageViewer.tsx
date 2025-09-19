
import React, { useState, useEffect } from 'react';
import { SpinnerIcon } from './icons/SpinnerIcon';
import { DownloadIcon } from './icons/DownloadIcon';
import type { Lang, Mode } from '../types';

interface ImageViewerProps {
  generatedImageUrl: string | null;
  originalImageUrl?: string | null;
  imageDimensions?: { w: number, h: number } | null;
  isLoading: boolean;
  mode: Mode;
  lang: Lang;
}

const labels = {
  generating: { en: 'Generating masterpiece...', zh: '正在生成杰作...' },
  placeholder: { en: 'Your generated portrait will appear here.', zh: '您生成的肖像将显示在此处。' },
  getStarted: { en: 'Select some options and click "Generate".', zh: '请选择一些选项，然后点击“生成”。' },
  original: { en: 'Original', zh: '原图' },
  generated: { en: 'Generated', zh: '生成图' },
  download: { en: 'Download Image', zh: '下载图片' },
}

export const ImageViewer: React.FC<ImageViewerProps> = ({ 
  generatedImageUrl, 
  originalImageUrl,
  imageDimensions,
  isLoading, 
  mode,
  lang 
}) => {
  const [generatedImageDims, setGeneratedImageDims] = useState<{w: number, h: number} | null>(null);

  useEffect(() => {
    if (generatedImageUrl) {
      const img = new Image();
      img.onload = () => {
        setGeneratedImageDims({ w: img.naturalWidth, h: img.naturalHeight });
      };
      img.src = generatedImageUrl;
    } else {
      setGeneratedImageDims(null);
    }
  }, [generatedImageUrl]);

  const originalAspectRatioStyle = imageDimensions ? { aspectRatio: `${imageDimensions.w} / ${imageDimensions.h}` } : { aspectRatio: '3 / 4' };
  
  const generatedAspectRatioStyle = generatedImageDims 
    ? { aspectRatio: `${generatedImageDims.w} / ${generatedImageDims.h}` }
    : originalAspectRatioStyle;

  const showTwoUp = mode === 'image-to-image' && originalImageUrl && generatedImageUrl;

  const handleDownload = () => {
    if (!generatedImageUrl) return;
    const link = document.createElement('a');
    link.href = generatedImageUrl;
    link.download = `bananaface-portrait-${Date.now()}.png`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const renderContent = () => {
    if (isLoading) {
      return (
        <div className="flex flex-col items-center text-gray-600 dark:text-gray-400">
          <SpinnerIcon />
          <p className="mt-2 font-light">{labels.generating[lang]}</p>
        </div>
      );
    }
    if (generatedImageUrl) {
      return (
        <>
          <img src={generatedImageUrl} alt="Generated Portrait" className="w-full h-full object-contain" />
          <button 
            onClick={handleDownload}
            title={labels.download[lang]}
            className="absolute top-3 right-3 p-2 bg-pink-accent/80 text-white rounded-full hover:bg-pink-accent transition-colors focus:outline-none focus:ring-2 focus:ring-white"
            aria-label={labels.download[lang]}
          >
            <DownloadIcon />
          </button>
        </>
      );
    }
    if (mode === 'text-to-image' || !originalImageUrl) {
      return (
        <div className="text-center text-gray-400 dark:text-gray-500 p-4 font-light">
          <p>{labels.placeholder[lang]}</p>
          <p className="text-sm mt-2">{labels.getStarted[lang]}</p>
        </div>
      );
    }
    // Fallback for image-to-image before generation
    return <img src={originalImageUrl} alt="Original" className="w-full h-full object-contain" />;
  };

  return (
    <div className="w-full h-full flex flex-col items-center justify-center">
      <div className={`w-full max-w-full grid ${showTwoUp ? 'grid-cols-2 gap-4' : 'grid-cols-1'} items-center justify-center`}>
        {showTwoUp && (
          <div className="relative w-full flex flex-col items-center">
             <div className="w-full rounded-lg bg-gray-100 dark:bg-gray-900 flex items-center justify-center overflow-hidden" style={originalAspectRatioStyle}>
                <img src={originalImageUrl!} alt="Original" className="w-full h-auto object-contain" />
             </div>
             <p className="mt-2 text-sm font-light text-gray-500 dark:text-gray-400">{labels.original[lang]}</p>
          </div>
        )}

        <div className={`relative w-full flex flex-col items-center ${showTwoUp ? '' : 'mx-auto'}`}>
            <div 
                className="relative w-full rounded-lg bg-gray-100 dark:bg-gray-900 flex items-center justify-center overflow-hidden"
                style={generatedAspectRatioStyle}
            >
                {renderContent()}
            </div>
            {showTwoUp && <p className="mt-2 text-sm font-light text-gray-500 dark:text-gray-400">{labels.generated[lang]}</p>}
        </div>
      </div>
    </div>
  );
};
