
import React from 'react';
import { HistoryIcon } from './icons/HistoryIcon';
import type { Lang, Theme } from '../types';

interface SettingsBarProps {
  lang: Lang;
  onLangChange: (lang: Lang) => void;
  theme: Theme;
  onThemeChange: (theme: Theme) => void;
  isHistoryVisible: boolean;
  onHistoryToggle: () => void;
}

const ToggleSwitch: React.FC<{
  options: { value: string, text: string }[];
  currentValue: string;
  onToggle: (value: string) => void;
}> = ({ options, currentValue, onToggle }) => {
  const isFirstOptionActive = currentValue === options[0].value;
  return (
    <div className="relative flex w-[80px] h-8 items-center rounded-full bg-gray-200 dark:bg-gray-800 p-1 cursor-pointer" onClick={() => onToggle(isFirstOptionActive ? options[1].value : options[0].value)}>
        <div
          className="absolute top-1 bottom-1 w-[calc(50%-4px)] rounded-full bg-white dark:bg-black transition-transform duration-300 ease-in-out"
          style={{ transform: `translateX(${isFirstOptionActive ? '4px' : '100%'})` }}
        ></div>
        {options.map(opt => (
             <div
                key={opt.value}
                className={`relative z-10 w-1/2 text-center text-xs font-bold transition-colors duration-300 ${currentValue === opt.value ? 'text-gray-800 dark:text-gray-100' : 'text-gray-400 dark:text-gray-500'}`}
            >
                {opt.text}
            </div>
        ))}
    </div>
  );
};


export const SettingsBar: React.FC<SettingsBarProps> = ({ lang, onLangChange, theme, onThemeChange, isHistoryVisible, onHistoryToggle }) => {
  return (
    <div className="flex items-center gap-4 sm:gap-6">
      <button 
        onClick={onHistoryToggle} 
        title={lang === 'en' ? 'Toggle History Panel' : '切换历史面板'}
        className={`p-2 rounded-full transition-colors ${isHistoryVisible ? 'bg-pink-accent text-white' : 'bg-gray-200 text-gray-600 hover:bg-gray-300 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700'}`}
      >
        <HistoryIcon />
      </button>
      <ToggleSwitch
        options={[{value: 'zh', text: '中'}, {value: 'en', text: 'EN'}]}
        currentValue={lang}
        onToggle={(value) => onLangChange(value as Lang)}
      />
       <ToggleSwitch
        options={[{value: 'light', text: '☀️'}, {value: 'dark', text: '🌙'}]}
        currentValue={theme}
        onToggle={(value) => onThemeChange(value as Theme)}
      />
    </div>
  );
};
