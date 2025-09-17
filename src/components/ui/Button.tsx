import { ButtonHTMLAttributes, forwardRef } from 'react';
import { cn } from '@/utils/cn';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'ghost' | 'outline';
}

const Button = forwardRef<HTMLButtonElement, Props>(({ className, variant = 'primary', ...props }, ref) => {
  const base = 'inline-flex items-center justify-center rounded-xl text-sm font-medium transition focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 disabled:opacity-50 disabled:pointer-events-none';
  const variants = {
    primary: 'bg-brand-600 text-white hover:bg-brand-700 px-4 py-2',
    ghost: 'hover:bg-zinc-100 dark:hover:bg-zinc-800 px-3 py-2',
    outline: 'border border-zinc-300 dark:border-zinc-700 hover:bg-zinc-50 dark:hover:bg-zinc-800 px-4 py-2'
  } as const;

  return (
    <button ref={ref} className={cn(base, variants[variant], className)} {...props} />
  );
});

export default Button;
