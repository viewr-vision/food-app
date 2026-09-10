import { roles, site } from '../content/site'
import { ArrowIcon } from './icons/ArrowIcon'
import './RoleList.css'

export function RoleList() {
  return (
    <div className="roles">
      {roles.map((role) => (
        <a key={role.title} href={role.href} className="role">
          <div className="role__body">
            <div className="role__title">{role.title}</div>
            <div className="role__blurb">{role.blurb}</div>
            <div className="mono role__meta">{role.meta}</div>
          </div>
          <ArrowIcon size={24} stroke="var(--accent)" strokeWidth={1.75} />
        </a>
      ))}
      <div className="roles__contact">
        <span className="mono roles__contact-label">Do not see your role? Write to</span>
        <a href={`mailto:${site.careersEmail}`} className="mono roles__contact-link">{site.careersEmail}</a>
      </div>
    </div>
  )
}
