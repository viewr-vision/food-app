import { useRef } from 'react'
import type { Clip } from '../content/site'
import { useVideoProgress } from '../hooks/useVideoProgress'
import { formatTimecode } from '../utils/format'
import './ClipPanel.css'

interface ClipPanelProps {
  clip: Clip
  /** Highlights the panel with the accent colour. */
  accent?: boolean
  /** Label under the progress bar, e.g. "Autonomous". */
  caption: string
  /** Shows the progress bar and timecode row. */
  withProgress?: boolean
  aspect?: string
}

export function ClipPanel({
  clip,
  accent = false,
  caption,
  withProgress = true,
  aspect = '4 / 3',
}: ClipPanelProps) {
  const videoRef = useRef<HTMLVideoElement | null>(null)
  const progress = useVideoProgress(videoRef, clip.completeAt)

  const className = ['clip', accent ? 'clip--accent' : ''].join(' ').trim()

  return (
    <figure className={className}>
      <div className="clip__frame" style={{ aspectRatio: aspect }}>
        <video
          ref={videoRef}
          className="clip__video"
          src={clip.src}
          poster={clip.poster}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          onTimeUpdate={progress.onTimeUpdate}
        />
        <span className="clip__corner clip__corner--tl" />
        <span className="clip__corner clip__corner--tr" />
        <span className="clip__corner clip__corner--bl" />
        <span className="clip__corner clip__corner--br" />
        <div className="clip__tags">
          <span className="mono clip__tag">{clip.label}</span>
          {clip.tag && <span className="mono clip__tag clip__tag--accent">{clip.tag}</span>}
        </div>
      </div>
      {withProgress && (
        <figcaption className="clip__meta">
          <div className="clip__track" aria-hidden="true">
            <div className="clip__bar" style={{ width: `${progress.ratio * 100}%` }} />
          </div>
          <div className="clip__row">
            <span className="mono">{caption}</span>
            <span className="mono">
              {progress.complete
                ? `Hand-over complete · ${clip.completeAt.toFixed(1)} s`
                : formatTimecode(progress.elapsed)}
            </span>
          </div>
        </figcaption>
      )}
    </figure>
  )
}
