import { PropsWithChildren } from 'react';
import { cn } from '@/utils/cn';

export default function Card({ children, className }: PropsWithChildren<{ className?: string }>) {
  return (
    <div className={cn('card p-6', className)}>
      {children}
    </div>
  );
}
