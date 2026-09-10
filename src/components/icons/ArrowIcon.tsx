interface ArrowIconProps {
  size?: number
  stroke?: string
  strokeWidth?: number
}

export function ArrowIcon({ size = 16, stroke = 'currentColor', strokeWidth = 2 }: ArrowIconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={stroke}
      strokeWidth={strokeWidth}
      aria-hidden="true"
      style={{ flexShrink: 0 }}
    >
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  )
}
