import { useEffect, useRef, type FormEvent } from 'react'
import { paper } from '../content/site'
import { useNotifySignup } from '../hooks/useNotifySignup'
import { ArrowIcon } from './icons/ArrowIcon'
import './NotifyModal.css'

interface NotifyModalProps {
  open: boolean
  onClose: () => void
}

export function NotifyModal({ open, onClose }: NotifyModalProps) {
  const { email, status, setEmail, submit, reset } = useNotifySignup()
  const inputRef = useRef<HTMLInputElement | null>(null)
  const copy = paper.notify

  useEffect(() => {
    if (!open) return
    const previous = document.activeElement as HTMLElement | null
    document.body.style.overflow = 'hidden'
    inputRef.current?.focus()
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', onKey)
    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
      previous?.focus()
      reset()
    }
  }, [open, onClose, reset])

  if (!open) return null

  const onSubmit = (event: FormEvent) => {
    event.preventDefault()
    void submit()
  }

  return (
    <div className="notify" role="presentation" onClick={onClose}>
      <div
        className="notify__panel"
        role="dialog"
        aria-modal="true"
        aria-labelledby="notify-title"
        onClick={(event) => event.stopPropagation()}
      >
        <button type="button" className="notify__close" onClick={onClose} aria-label="Close">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden="true">
            <path d="M6 6l12 12M18 6L6 18" />
          </svg>
        </button>

        {status === 'done' ? (
          <div className="notify__done">
            <h2 id="notify-title" className="notify__title">{copy.done}</h2>
            <p className="notify__body">{copy.doneBody}</p>
          </div>
        ) : (
          <>
            <h2 id="notify-title" className="notify__title">{copy.headline}</h2>
            <p className="notify__body">{copy.body}</p>
            <form className="notify__form" onSubmit={onSubmit} noValidate>
              <label className="notify__field">
                <span className="sr-only">Email address</span>
                <input
                  ref={inputRef}
                  type="email"
                  name="email"
                  autoComplete="email"
                  placeholder={copy.placeholder}
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  aria-invalid={status === 'invalid'}
                  disabled={status === 'sending'}
                />
              </label>
              <button type="submit" className="notify__submit" disabled={status === 'sending'}>
                {status === 'sending' ? 'Sending' : copy.button}
                <ArrowIcon size={16} stroke="var(--bg)" />
              </button>
            </form>
            {status === 'invalid' && <p className="mono notify__error">{copy.invalid}</p>}
            {status === 'error' && <p className="mono notify__error">{copy.error}</p>}
          </>
        )}
      </div>
    </div>
  )
}
