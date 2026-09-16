import { site } from '../content/site'
import './Hero.css'

export function Hero() {
  return (
    <section id="top" className="hero">
      <h1 className="hero__title rise rise-1">{site.tagline}</h1>
    </section>
  )
}
