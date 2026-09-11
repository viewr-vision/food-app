import { clips } from '../content/site'
import { ClipPanel } from './ClipPanel'
import './Comparison.css'

export function Comparison() {
  return (
    <section className="section comparison">
      <div className="section-head">
        <h2 className="section-title comparison__title">
          Same robot. Same task.
          <br />
          <span className="comparison__line">Human controlled vs. our model.</span>
        </h2>
      </div>
      <div className="comparison__grid">
        <ClipPanel clip={clips.teleop} caption="Teleoperated" />
        <ClipPanel clip={clips.autonomous} caption="Autonomous" accent />
      </div>
    </section>
  )
}
