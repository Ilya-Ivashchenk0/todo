import type { FC } from 'react'
import type { InputProps } from './types'

export const Input: FC<InputProps> = ({ className = '', ...props }) => (
  <input
    {...props}
    className={`rounded-lg border border-slate-300 bg-white px-3 py-2 text-slate-900 shadow-sm placeholder:text-slate-400 focus:border-blue-500 focus:ring-blue-500/30 focus:outline-none ${className}`}
  />
)
