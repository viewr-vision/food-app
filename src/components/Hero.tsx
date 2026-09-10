import { site } from '../content/site'
import { Floater } from './Floater'
import './Hero.css'

export function Hero() {
  return (
    <section id="top" className="hero">
      <Floater />
      <div className="hero__body">
        <h1 className="hero__title rise rise-2">{site.tagline}</h1>
        <p className="hero__vision rise rise-3">{site.visionLead}</p>
      </div>
    </section>
  )
}
