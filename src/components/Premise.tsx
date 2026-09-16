import { premise } from '../content/site'
import './Premise.css'

export function Premise() {
  return (
    <section className="section premise">
      <div className="premise__pitch">
        <h2 className="premise__title">{premise.headline}</h2>
      </div>
      <div className="premise__side">
        {premise.paragraphs.map((text) => (
          <p key={text} className="premise__text">{text}</p>
        ))}
      </div>
    </section>
  )
}
