import { hiring } from '../content/site'
import { RoleList } from '../components/RoleList'
import './Careers.css'

export function Careers() {
  return (
    <section className="careers">
      <div className="careers__head">
        <h1 className="careers__title">{hiring.careersHeadline}</h1>
        <p className="careers__intro">{hiring.careersIntro}</p>
      </div>
      <div className="careers__bar">
        <h2 className="careers__bar-title">{hiring.headline}</h2>
        {hiring.paragraphs.map((text) => (
          <p key={text} className="careers__text">{text}</p>
        ))}
      </div>
      <RoleList />
    </section>
  )
}
