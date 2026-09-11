import { clips } from '../content/site'
import { ClipPanel } from './ClipPanel'
import './Comparison.css'

export function Comparison() {
  return (
    <section className="section comparison">
      <div className="section-head">
        <h2 className="section-title">
          Same robot. Same task.
          <br />
          Human controlled vs. our model.
        </h2>
      </div>
      <div className="comparison__grid">
        <ClipPanel clip={clips.teleop} caption="Teleoperated" />
        <ClipPanel clip={clips.autonomous} caption="Autonomous" accent />
      </div>
    </section>
  )
}
