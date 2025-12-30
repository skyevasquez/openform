'use client'

import Link from 'next/link'
import { cn } from '@/lib/utils'

interface LogoProps {
  href?: string
  size?: 'sm' | 'md' | 'lg'
  className?: string
}

export function Logo({ href = '/', size = 'md', className }: LogoProps) {
  const sizes = {
    sm: 'text-lg',
    md: 'text-xl',
    lg: 'text-2xl',
  }

  const content = (
    <span
      className={cn(
        sizes[size],
        'font-bold tracking-tight bg-gradient-to-r from-violet-600 to-blue-500 bg-clip-text text-transparent',
        'hover:from-violet-500 hover:to-blue-400 transition-all',
        className
      )}
    >
      Open
      <span className="font-extrabold">Form</span>
    </span>
  )

  if (href) {
    return (
      <Link href={href} className="focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-500 rounded">
        {content}
      </Link>
    )
  }

  return content
}
