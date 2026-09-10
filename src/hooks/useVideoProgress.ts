import { useCallback, useState, type RefObject, type SyntheticEvent } from 'react'
import { clampRatio } from '../utils/format'

export interface VideoProgress {
  /** Seconds elapsed in the current loop. */
  elapsed: number
  /** 0..1 fraction of the clip's completion point reached. */
  ratio: number
  /** True once playback has passed the completion point. */
  complete: boolean
  onTimeUpdate: (event: SyntheticEvent<HTMLVideoElement>) => void
}

/**
 * Tracks a looping video's playback against a task-completion time so the
 * UI can show an honest progress bar tied to the real footage.
 */
export function useVideoProgress(
  videoRef: RefObject<HTMLVideoElement | null>,
  completeAt: number,
): VideoProgress {
  const [elapsed, setElapsed] = useState(0)

  const onTimeUpdate = useCallback(() => {
    const video = videoRef.current
    if (!video) return
    setElapsed(video.currentTime)
  }, [videoRef])

  const ratio = clampRatio(elapsed / completeAt)
  return { elapsed, ratio, complete: elapsed >= completeAt, onTimeUpdate }
}
