/** Formats seconds as `m:ss.t`, e.g. 8.94 -> "0:08.9". */
export function formatTimecode(seconds: number): string {
  const safe = Number.isFinite(seconds) && seconds > 0 ? seconds : 0
  const minutes = Math.floor(safe / 60)
  const rest = safe - minutes * 60
  const whole = Math.floor(rest)
  const tenths = Math.floor((rest - whole) * 10)
  return `${minutes}:${String(whole).padStart(2, '0')}.${tenths}`
}

/** Clamps a 0..1 ratio, tolerating NaN from an unloaded video. */
export function clampRatio(value: number): number {
  if (!Number.isFinite(value)) return 0
  return Math.min(1, Math.max(0, value))
}
