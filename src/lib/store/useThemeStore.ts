import { create } from 'zustand';

export type Theme = 'light' | 'dark';

type ThemeState = {
  theme: Theme;
  setTheme: (t: Theme) => void;
  toggle: () => void;
  initTheme: () => void;
};

export const useThemeStore = create<ThemeState>((set, get) => ({
  theme: 'light',
  setTheme: (t) => set({ theme: t }),
  toggle: () => set({ theme: get().theme === 'dark' ? 'light' : 'dark' }),
  initTheme: () => {
    const saved = localStorage.getItem('starsmith:theme') as Theme | null;
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const theme = saved ?? (prefersDark ? 'dark' : 'light');
    document.documentElement.classList.toggle('dark', theme === 'dark');
    set({ theme });
  },
}));

useThemeStore.subscribe((state) => localStorage.setItem('starsmith:theme', state.theme));
