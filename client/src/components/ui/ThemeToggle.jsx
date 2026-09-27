// src/components/ui/ThemeToggle.jsx
import { Moon, Sun } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label="Toggle visual theme"
      className="inline-flex items-center justify-center rounded-xl border border-stone-200 bg-stone-100 p-2.5 text-stone-700 transition-colors hover:bg-stone-200 active:scale-95 dark:border-[#272B33] dark:bg-[#16181D] dark:text-stone-200 dark:hover:bg-[#1E222A]"
    >
      {theme === 'dark' ? (
        <Sun size={18} className="text-amber-400" />
      ) : (
        <Moon size={18} className="text-stone-700" />
      )}
    </button>
  );
}