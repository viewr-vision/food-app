import { Link } from 'react-router-dom'
import { hiring, roles } from '../content/site'
import { ArrowIcon } from './icons/ArrowIcon'
import './JoinUs.css'

export function JoinUs() {
  return (
    <section id="join" className="section join">
      <div className="join__pitch">
        <h2 className="join__title">{hiring.headline}</h2>
      </div>
      <div className="join__side">
        {hiring.paragraphs.map((text) => (
          <p key={text} className="join__text">{text}</p>
        ))}
        <Link to="/careers" className="join__cta">
          <span className="join__cta-label">See the {roles.length} open roles</span>
          <span className="join__cta-arrow" aria-hidden="true">
            <ArrowIcon size={28} strokeWidth={1.75} />
          </span>
        </Link>
      </div>
    </section>
  )
}
