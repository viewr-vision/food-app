import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

export function Navbar() {
    const location = useLocation();

    return (
        <nav className="navbar">
            <Link to="/" className="navbar-brand">
                Mr. Food
            </Link>
            <div className="navbar-links">
                <Link to="/blog" className={`navbar-link ${location.pathname === '/blog' ? 'active' : ''}`}>
                    Blogs
                </Link>
                <Link to="/careers" className={`navbar-link ${location.pathname === '/careers' ? 'active' : ''}`}>
                    Careers
                </Link>
                <a
                    className="navbar-button"
                    href="https://calendly.com/deepanshu-mrfood/30min"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Request Demo
                </a>
            </div>
        </nav>
    );
}
