import type { CSSProperties } from 'react'
import './Logo.css'

interface LogoProps {
  size?: number
  wordmark?: boolean
}

/** Argon mark: a thin chevron A whose crossbar stops short of the right leg, plus "rgon". */
export function Logo({ size = 30, wordmark = true }: LogoProps) {
  return (
    <span className="logo" style={{ '--logo-size': `${size}px` } as CSSProperties}>
      <svg width={size} height={size} viewBox="0 0 32 32" fill="none" aria-hidden="true">
        <path
          d="M4.5 28L16 4l11.5 24"
          stroke="var(--accent)"
          strokeWidth="2.9"
          strokeLinejoin="miter"
          strokeMiterlimit="6"
        />
        <path d="M8.6 20.6h10.2" stroke="var(--accent)" strokeWidth="2.9" />
      </svg>
      {wordmark && <span className="logo__word">rgon</span>}
      <span className="sr-only">Argon Robotics</span>
    </span>
  )
}
