'use client'

import { useScrollAnimation } from '@/hooks/useScrollAnimation'

interface ScrollAnimatedTextProps {
  children: React.ReactNode
  className?: string
  delay?: number
}

export default function ScrollAnimatedText({ 
  children, 
  className = '', 
  delay = 0 
}: ScrollAnimatedTextProps) {
  const { ref, isVisible } = useScrollAnimation(0.2)

  return (
    <div 
      ref={ref}
      className={`transition-all duration-1000 ease-out ${
        isVisible 
          ? 'opacity-100 transform translate-y-0' 
          : 'opacity-0 transform translate-y-8'
      } ${className}`}
      style={{
        transitionDelay: `${delay}ms`
      }}
    >
      {children}
    </div>
  )
}