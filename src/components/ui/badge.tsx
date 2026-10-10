import * as React from 'react';
import { cn } from '@/lib/utils';

type Variant = 'default' | 'success' | 'gold' | 'outline' | 'danger' | 'info';

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: Variant;
}

const variants: Record<Variant, string> = {
  default: 'bg-navy-100 text-navy-700',
  success: 'bg-accent-soft text-accent-hover',
  gold: 'bg-gold-soft text-amber-700 border border-amber-200',
  outline: 'border border-navy-200 text-navy-700',
  danger: 'bg-red-100 text-red-700',
  info: 'bg-blue-100 text-blue-700',
};

export function Badge({
  className,
  variant = 'default',
  ...props
}: BadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center gap-1 rounded-full px-2.5 py-0.5 text-xs font-medium',
        variants[variant],
        className
      )}
      {...props}
    />
  );
}
