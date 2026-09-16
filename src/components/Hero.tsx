import { site } from '../content/site'
import { Floater } from './Floater'
import './Hero.css'

export function Hero() {
  return (
    <section id="top" className="hero">
      <Floater />
      <h1 className="hero__title rise rise-2">{site.tagline}</h1>
    </section>
  )
}
