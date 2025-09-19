
import React from 'react';
import type { Lang } from '../types';

interface HeaderProps {
  lang: Lang;
}

const subtitles = {
  en: 'Craft your perfect portrait. Use the controls and let AI bring your vision to life.',
  zh: '精心打造您的完美肖像。使用控制选项，让 AI 将您的想象变为现实。'
}

export const Header: React.FC<HeaderProps> = ({ lang }) => {
  return (
    <header className="text-left">
      <h1 className="text-4xl sm:text-5xl font-light text-gray-800 dark:text-gray-100">
        🍌 BananaFace｜ZHO
      </h1>
      <p className="mt-2 text-base font-light text-gray-500 dark:text-gray-400">
        {subtitles[lang]}
      </p>
    </header>
  );
};
