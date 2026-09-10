import { Link } from 'react-router-dom'
import { site } from '../content/site'
import { Logo } from './Logo'
import './Footer.css'

export function Footer() {
  return (
    <footer className="footer">
      <div className="footer__brand">
        <Logo size={18} wordmark={false} />
        <span className="mono footer__copy">© {site.year} {site.name}</span>
      </div>
      <nav className="footer__links" aria-label="Footer">
        <Link to="/careers" className="mono">Join us</Link>
        <a href={`mailto:${site.email}`} className="mono">{site.email}</a>
      </nav>
    </footer>
  )
}
