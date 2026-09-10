import { paper } from '../content/site'
import { ArrowIcon } from './icons/ArrowIcon'
import './Floater.css'

export function Floater() {
  return (
    <div className="floater-wrap rise rise-1">
      <a href="#research" className="floater">
        <span className="floater__dot" aria-hidden="true" />
        <span className="mono floater__status">{paper.status}</span>
        <span className="floater__text">{paper.floater}</span>
        <ArrowIcon />
      </a>
    </div>
  )
}
