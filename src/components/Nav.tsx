import { Link, NavLink } from 'react-router-dom'
import { Logo } from './Logo'
import './Nav.css'

export function Nav() {
  return (
    <header className="nav">
      <Link to="/" className="nav__brand" aria-label="Novum home">
        <Logo />
      </Link>
      <nav className="nav__links" aria-label="Primary">
        <Link to="/#research" className="mono">Research</Link>
        <NavLink to="/careers" className="mono">Join us</NavLink>
      </nav>
    </header>
  )
}
