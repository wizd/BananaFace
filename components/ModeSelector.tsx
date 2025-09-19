import React from 'react';
import type { Mode, Lang } from '../types';

interface ModeSelectorProps {
  mode: Mode;
  onModeChange: (mode: Mode) => void;
  lang: Lang;
}

const labels = {
  'text-to-image': { en: 'Text-to-Image', zh: '文生图' },
  'image-to-image': { en: 'Image-to-Image', zh: '图生图' },
};

export const ModeSelector: React.FC<ModeSelectorProps> = ({ mode, onModeChange, lang }) => {
  const baseClasses = 'flex-1 py-2 px-1 text-sm font-medium rounded-md transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-pink-accent focus:ring-offset-2 dark:focus:ring-offset-black';
  const activeClasses = 'bg-pink-accent text-white';
  const inactiveClasses = 'bg-gray-100 text-gray-700 hover:bg-gray-200 dark:bg-gray-900 dark:text-gray-200 dark:hover:bg-gray-800';

  return (
    <div className="w-full flex p-1 bg-gray-100 dark:bg-gray-900 rounded-lg">
      <button
        onClick={() => onModeChange('text-to-image')}
        className={`${baseClasses} ${mode === 'text-to-image' ? activeClasses : inactiveClasses}`}
        aria-pressed={mode === 'text-to-image'}
      >
        {labels['text-to-image'][lang]}
      </button>
      <button
        onClick={() => onModeChange('image-to-image')}
        className={`${baseClasses} ${mode === 'image-to-image' ? activeClasses : inactiveClasses}`}
        aria-pressed={mode === 'image-to-image'}
      >
        {labels['image-to-image'][lang]}
      </button>
    </div>
  );
};