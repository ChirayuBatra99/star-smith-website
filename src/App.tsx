import { useEffect } from 'react';
import AppRoutes from '@/routes';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { useThemeStore } from '@/lib/store/useThemeStore';
import { useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { useScrollToTop } from '@/lib/hooks/useScrollToTop';

export default function App() {
  const { theme, initTheme } = useThemeStore();
  const location = useLocation();
  useScrollToTop();

  useEffect(() => {
    initTheme();
    document.documentElement.classList.toggle('dark', theme === 'dark');
  }, [theme, initTheme]);

  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100">
      <Navbar />
      <AnimatePresence mode="wait">
        <motion.main
          key={location.pathname}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.2 }}
          className="flex-1"
        >
          <AppRoutes />
        </motion.main>
      </AnimatePresence>
      <Footer />
    </div>
  );
}
