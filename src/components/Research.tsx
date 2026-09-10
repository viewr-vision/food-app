import { useCallback, useState } from 'react'
import { paper } from '../content/site'
import { NotifyModal } from './NotifyModal'
import './Research.css'

export function Research() {
  const [notifyOpen, setNotifyOpen] = useState(false)
  const closeNotify = useCallback(() => setNotifyOpen(false), [])

  return (
    <section id="research" className="section research">
      <div className="section-head">
        <h2 className="research__title">The fastest models in the world.</h2>
        <p className="mono section-note">Research · 01</p>
      </div>

      <article className="paper">
        <div className="paper__badges">
          <span className="mono paper__badge">{paper.status}</span>
          <span className="mono paper__meta">{paper.meta}</span>
        </div>
        <h3 className="paper__title">{paper.title}</h3>
        <p className="paper__text">{paper.body}</p>
        <div className="paper__actions">
          <span className="btn-disabled" aria-disabled="true">Read the paper · coming soon</span>
          <button type="button" className="btn-ghost" onClick={() => setNotifyOpen(true)}>
            Get notified
          </button>
        </div>
      </article>

      <NotifyModal open={notifyOpen} onClose={closeNotify} />
    </section>
  )
}
