import { premise } from '../content/site'
import './Premise.css'

export function Premise() {
  return (
    <section className="section premise">
      <p className="premise__text">
        {premise.body}
        <span className="premise__close">{premise.close}</span>
      </p>
    </section>
  )
}
