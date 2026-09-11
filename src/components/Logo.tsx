import type { CSSProperties } from 'react'
import './Logo.css'

interface LogoProps {
  size?: number
  wordmark?: boolean
}

/** Argon mark: an accent A with a cut through the crossbar, plus "rgon". */
export function Logo({ size = 30, wordmark = true }: LogoProps) {
  return (
    <span className="logo" style={{ '--logo-size': `${size}px` } as CSSProperties}>
      <svg width={size} height={size} viewBox="0 0 32 32" fill="none" aria-hidden="true">
        <path
          d="M2 29L12.6 3h6.8L30 29h-6.4l-2.7-6.8H11.1L8.4 29Zm11-16.2h6L16 8.8Z"
          fill="var(--accent)"
          fillRule="evenodd"
        />
        <path d="M9.2 24.6l13.6-3.8" stroke="var(--bg)" strokeWidth="2.4" />
      </svg>
      {wordmark && <span className="logo__word">rgon</span>}
      <span className="sr-only">Argon Robotics</span>
    </span>
  )
}
