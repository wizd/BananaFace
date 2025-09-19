import React from 'react';
import type { HistoryItem, Lang } from '../types';

interface HistoryPanelProps {
  history: HistoryItem[];
  onRestore: (item: HistoryItem) => void;
  lang: Lang;
}

const labels = {
  title: { en: 'History', zh: '历史记录' },
  empty: { en: 'Your generated images will appear here.', zh: '您生成的图片将显示在这里。' },
  restore: { en: 'Click to restore settings', zh: '点击恢复设置' },
}

export const HistoryPanel: React.FC<HistoryPanelProps> = ({ history, onRestore, lang }) => {
  return (
    <div className="flex flex-col h-full">
      <h2 className="text-lg font-light mb-4 text-gray-800 dark:text-gray-100">{labels.title[lang]}</h2>
      {history.length === 0 ? (
        <div className="flex-grow flex items-center justify-center text-center text-gray-400 dark:text-gray-600 text-sm font-light">
          <p>{labels.empty[lang]}</p>
        </div>
      ) : (
        <div className="flex-grow overflow-y-auto pr-2 -mr-2">
          <div className="grid grid-cols-2 gap-3">
            {history.map((item) => (
              <div 
                key={item.id} 
                className="relative aspect-square cursor-pointer group"
                onClick={() => onRestore(item)}
                title={labels.restore[lang]}
              >
                <img
                  src={item.imageUrl}
                  alt="Generated portrait"
                  className="w-full h-full object-cover rounded-md"
                />
                <div className="absolute inset-0 bg-pink-accent/70 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center rounded-md">
                   <p className="text-white text-xs text-center p-1 font-medium">
                      {labels.restore[lang]}
                   </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};