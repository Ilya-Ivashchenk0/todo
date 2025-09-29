import type { FC, PropsWithChildren } from 'react'
import type { ButtonProps, ButtonSize, ButtonVariant } from './types'

export const Button: FC<PropsWithChildren<ButtonProps>> = ({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  ...props
}) => {
  const variantClasses: Record<ButtonVariant, string> = {
    primary:
      'bg-blue-600 text-white hover:bg-blue-700 active:bg-blue-800 focus-visible:ring-4 focus-visible:ring-blue-500/30',
    secondary:
      'bg-slate-100 text-slate-900 hover:bg-slate-200 active:bg-slate-300 focus-visible:ring-4 focus-visible:ring-slate-400/30',
    success:
      'bg-green-600 text-white hover:bg-green-700 active:bg-green-800 focus-visible:ring-4 focus-visible:ring-green-500/30',
    warning:
      'bg-amber-500 text-white hover:bg-amber-600 active:bg-amber-700 focus-visible:ring-4 focus-visible:ring-amber-500/30',
    danger:
      'bg-rose-600 text-white hover:bg-rose-700 active:bg-rose-800 focus-visible:ring-4 focus-visible:ring-rose-500/30',
    ghost:
      'bg-transparent text-slate-900 hover:bg-slate-100 active:bg-slate-200 focus-visible:ring-4 focus-visible:ring-slate-400/30'
  }

  const sizeClasses: Record<ButtonSize, string> = {
    sm: 'h-6 px-2 text-sm rounded-md',
    md: 'h-10 px-4 rounded-lg',
    lg: 'h-12 px-6 text-lg rounded-lg'
  }

  return (
    <button
      {...props}
      className={[
        'inline-flex items-center justify-center font-medium shadow-sm disabled:opacity-60 disabled:shadow-none',
        variantClasses[variant],
        sizeClasses[size],
        props.disabled ? 'cursor-not-allowed' : 'cursor-pointer',
        className
      ]
        .join(' ')
        .trim()}
    >
      {children}
    </button>
  )
}
