import { Moon, Sun } from 'lucide-react';
import { useThemeStore } from '@/lib/store/useThemeStore';

export default function ThemeToggle() {
  const { theme, toggle } = useThemeStore();
  return (
    <button
      onClick={toggle}
      aria-label="Toggle theme"
      className="p-2 rounded-lg hover:bg-zinc-100 dark:hover:bg-zinc-800"
    >
      {theme === 'dark' ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
    </button>
  );
}
