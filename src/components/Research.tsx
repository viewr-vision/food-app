import { Link } from 'react-router-dom'
import { post } from '../content/post'
import { ArrowIcon } from './icons/ArrowIcon'
import './Research.css'

export function Research() {
  return (
    <section id="research" className="section research">
      <div className="section-head">
        <h2 className="research__title">The fastest models in the world.</h2>
        <p className="mono section-note">Research · 01</p>
      </div>

      <Link to={post.slug} className="paper">
        <h3 className="paper__title">{post.title}</h3>
        <p className="paper__text">{post.lede}</p>
        <span className="paper__cta">
          Read the post
          <ArrowIcon size={18} stroke="var(--accent)" />
        </span>
      </Link>
    </section>
  )
}
