import { cn } from '@/utils/cn';
import { PropsWithChildren } from 'react';

export default function Container({ children, className }: PropsWithChildren<{ className?: string }>) {
  return (
    <div className={cn('container-px max-w-content', className)}>{children}</div>
  );
}
