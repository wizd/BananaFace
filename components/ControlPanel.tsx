
import React, { useState, useEffect, useRef, useMemo } from 'react';
import { CONTROL_GROUPS } from '../constants';
import type { PromptOptions, ControlCategory as ControlCategoryType, Lang } from '../types';

interface ControlPanelProps {
  options: PromptOptions;
  onOptionsChange: (newOptions: PromptOptions) => void;
  onClearOptions: () => void;
  lang: Lang;
}

const ControlCategory: React.FC<{
    category: ControlCategoryType;
    isOpen: boolean;
    onToggle: () => void;
    selectedValue: string;
    onValueChange: (value: string) => void;
    lang: Lang;
}> = ({ category, isOpen, onToggle, selectedValue, onValueChange, lang }) => {
    const [searchTerm, setSearchTerm] = useState('');
    const selectedOption = category.options.find(opt => opt.value === selectedValue) || category.options[0];
    const displayLabel = selectedOption?.value ? selectedOption.label[lang] : category.options[0].label[lang];

    useEffect(() => {
        if (isOpen) {
            setSearchTerm('');
        }
    }, [isOpen]);

    const filteredOptions = useMemo(() => {
        if (!searchTerm) return category.options;
        const lowercasedFilter = searchTerm.toLowerCase();
        return category.options.filter(option =>
            option.label.en.toLowerCase().includes(lowercasedFilter) ||
            option.label.zh.toLowerCase().includes(lowercasedFilter)
        );
    }, [searchTerm, category.options]);
    
    const showSearch = category.options.length > 20;

    return (
        <div className="relative border-b border-gray-100 dark:border-gray-800 last:border-b-0">
            <button
                onClick={onToggle}
                className="w-full flex justify-between items-center p-3 sm:p-4 text-left font-light text-gray-800 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-black/20 transition-colors"
                aria-haspopup="listbox"
                aria-expanded={isOpen}
            >
                <span className="truncate pr-4 text-sm sm:text-base">{category.name[lang]}</span>
                <div className="flex items-center flex-shrink-0">
                    <span className="text-gray-500 dark:text-gray-400 font-light text-right truncate pl-2 max-w-[100px] sm:max-w-[150px] text-sm sm:text-base">
                        {displayLabel}
                    </span>
                    <span className={`transform transition-transform duration-200 ml-2 ${isOpen ? 'rotate-180' : ''}`}>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                    </span>
                </div>
            </button>
            {isOpen && (
                 <div className="absolute top-full left-0 right-0 z-20 bg-white dark:bg-black border-x border-b border-gray-200 dark:border-gray-800 rounded-b-md">
                    {showSearch && (
                        <div className="p-2 border-b border-gray-200 dark:border-gray-800">
                             <input
                                type="text"
                                placeholder={lang === 'en' ? 'Search...' : '搜索...'}
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className="w-full px-3 py-2 text-sm bg-gray-100 dark:bg-gray-900 border-gray-300 dark:border-gray-700 rounded-md focus:outline-none focus:ring-1 focus:ring-pink-accent"
                            />
                        </div>
                    )}
                    <ul role="listbox" className="max-h-60 overflow-y-auto">
                        {filteredOptions.map((option) => (
                            <li key={option.value}>
                                <button
                                    onClick={() => onValueChange(option.value)}
                                    className={`w-full text-left px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-pink-accent hover:text-white dark:hover:bg-pink-accent transition-colors text-sm sm:text-base ${option.value === selectedValue ? 'bg-pink-accent text-white' : ''}`}
                                    role="option"
                                    aria-selected={option.value === selectedValue}
                                >
                                    {option.label[lang]}
                                </button>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
};


export const ControlPanel: React.FC<ControlPanelProps> = ({ options, onOptionsChange, onClearOptions, lang }) => {
  const [activeGroupIndex, setActiveGroupIndex] = useState(0);
  const [openMenuId, setOpenMenuId] = useState<string | null>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  const handleTabChange = (index: number) => {
    setActiveGroupIndex(index);
    setOpenMenuId(null); // Close any open menu when switching tabs
  };

  const handleToggle = (categoryId: string) => {
    setOpenMenuId(prevId => (prevId === categoryId ? null : categoryId));
  };

  const handleValueChange = (categoryId: string, value: string) => {
    onOptionsChange({ ...options, [categoryId]: value });
    setOpenMenuId(null);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (panelRef.current && !panelRef.current.contains(event.target as Node)) {
        setOpenMenuId(null);
      }
    };
    if (openMenuId) document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [openMenuId]);
  
  const activeGroup = CONTROL_GROUPS[activeGroupIndex];

  return (
    <div className="flex-grow flex flex-col">
       <div className="flex justify-between items-center mb-4 px-2 sm:px-0">
        <h2 className="text-lg font-light text-gray-800 dark:text-gray-100">{lang === 'en' ? 'Customization Panel' : '自定义面板'}</h2>
        <button
          onClick={onClearOptions}
          className="text-xs sm:text-sm font-light text-gray-500 dark:text-gray-400 hover:text-pink-accent dark:hover:text-pink-accent transition-colors"
        >
          {lang === 'en' ? 'Clear All' : '全部清除'}
        </button>
      </div>
      
      {/* Tabs */}
      <div className="flex border-b border-gray-200 dark:border-gray-800 mb-[-1px] overflow-x-auto">
        {CONTROL_GROUPS.map((group, index) => (
          <button
            key={group.name.en}
            onClick={() => handleTabChange(index)}
            className={`flex-shrink-0 px-3 sm:px-4 py-2 text-sm font-medium transition-colors focus:outline-none -mb-px ${
              activeGroupIndex === index
                ? 'border-b-2 border-pink-accent text-pink-accent'
                : 'border-b-2 border-transparent text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200'
            }`}
            aria-current={activeGroupIndex === index ? 'page' : undefined}
          >
            {group.name[lang]}
          </button>
        ))}
      </div>

      <div ref={panelRef} className="overflow-visible rounded-b-lg rounded-tr-lg bg-white dark:bg-black border border-gray-200 dark:border-gray-800">
        {activeGroup.controls.map((category) => (
          <ControlCategory
            key={category.id}
            category={category}
            isOpen={openMenuId === category.id}
            onToggle={() => handleToggle(category.id)}
            selectedValue={options[category.id] || ''}
            onValueChange={(value) => handleValueChange(category.id, value)}
            lang={lang}
          />
        ))}
      </div>
    </div>
  );
};