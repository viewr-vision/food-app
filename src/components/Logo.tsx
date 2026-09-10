import type { CSSProperties } from 'react'
import './Logo.css'

interface LogoProps {
  size?: number
  wordmark?: boolean
}

/** Novum mark: an accent N with a cut through the diagonal, plus "ovum". */
export function Logo({ size = 30, wordmark = true }: LogoProps) {
  return (
    <span className="logo" style={{ '--logo-size': `${size}px` } as CSSProperties}>
      <svg width={size} height={size} viewBox="0 0 32 32" fill="none" aria-hidden="true">
        <path d="M3 29V3h6.2L23 21.6V3H29v26h-6.2L9 10.4V29z" fill="var(--accent)" />
        <path d="M13.5 15.2l5 6.6" stroke="var(--bg)" strokeWidth="2.4" />
      </svg>
      {wordmark && <span className="logo__word">ovum</span>}
      <span className="sr-only">Novum</span>
    </span>
  )
}
