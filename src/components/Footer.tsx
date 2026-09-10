import { Link } from 'react-router-dom';
import { Linkedin, Mail } from 'lucide-react';
import './Footer.css';

export function Footer() {
    return (
        <footer className="site-footer">
            <div className="footer-inner">
                <div className="footer-main">
                    <Link to="/" className="footer-brand">
                        Mr. Food
                    </Link>
                    <nav className="footer-links" aria-label="Footer">
                        <Link to="/">Home</Link>
                        <Link to="/blog">Blog</Link>
                        <Link to="/privacy">Privacy</Link>
                        <Link to="/terms">Terms</Link>
                    </nav>
                    <div className="footer-socials" aria-label="Social links">
                        <a
                            href="https://www.linkedin.com/company/mrfood-ai/posts/?feedView=all"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="LinkedIn"
                        >
                            <Linkedin aria-hidden="true" />
                        </a>
                        <a href="mailto:help@mrfood.ai" aria-label="Email">
                            <Mail aria-hidden="true" />
                        </a>
                    </div>
                </div>
                <div className="footer-meta">
                    <a
                        href="https://www.google.com/maps/search/?api=1&query=Urban+Vault+65%2C+11th+Main+Road%2C+Bengaluru%2C+Karnataka+560102"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        11th Main Road, 4th Floor, Urban Vault 65, Bengaluru 560102
                    </a>
                    <span className="footer-sep" aria-hidden="true">
                        &middot;
                    </span>
                    <a href="tel:+919013651651">+91 90136 51651</a>
                    <span className="footer-sep" aria-hidden="true">
                        &middot;
                    </span>
                    <a href="mailto:help@mrfood.ai">help@mrfood.ai</a>
                </div>
            </div>
        </footer>
    );
}
