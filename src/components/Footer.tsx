import { Link } from 'react-router-dom';
import { Linkedin, Mail, MapPin, Phone } from 'lucide-react';
import './Footer.css';

export function Footer() {
    return (
        <footer className="site-footer">
            <div className="footer-inner">
                <div className="footer-top">
                    <div className="footer-brand-col">
                        <div className="footer-brand">Mr. Food</div>
                        <div className="footer-socials" aria-label="Social links">
                            <a
                                href="https://www.linkedin.com/company/mrfood-ai/posts/?feedView=all"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="LinkedIn"
                            >
                                <Linkedin aria-hidden="true" />
                            </a>
                            {/* <a
                                href="https://x.com/mrfood"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="X (Twitter)"
                            >
                                <Twitter aria-hidden="true" />
                            </a> */}
                            {/* <a
                                href="https://www.youtube.com/@mrfood"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="YouTube"
                            >
                                <Youtube aria-hidden="true" />
                            </a> */}
                            <a href="mailto:help@mrfood.ai" aria-label="Email">
                                <Mail aria-hidden="true" />
                            </a>
                        </div>
                    </div>

                    <nav className="footer-nav" aria-label="Footer">
                        <div className="footer-block">
                            <span className="footer-label">Company</span>
                            <div className="footer-links">
                                <Link to="/">Home</Link>
                                <Link to="/blog">Blog</Link>
                            </div>
                        </div>
                        <div className="footer-block">
                            <span className="footer-label">Legal</span>
                            <div className="footer-links">
                                <Link to="/privacy">Privacy Policy</Link>
                                <Link to="/terms">Terms of Service</Link>
                            </div>
                        </div>
                        <div className="footer-block">
                            <span className="footer-label">Contact</span>
                            <div className="footer-contact">
                                <a
                                    href="https://www.google.com/maps/search/?api=1&query=Urban+Vault+65%2C+11th+Main+Road%2C+Bengaluru%2C+Karnataka+560102"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="footer-contact-item"
                                >
                                    <MapPin aria-hidden="true" />
                                    <span>
                                        11th Main Road, 4th Floor, Urban Vault 65
                                        <br />
                                        Bengaluru, Karnataka 560102, India
                                    </span>
                                </a>
                                <a href="tel:+919013651651" className="footer-contact-item">
                                    <Phone aria-hidden="true" />
                                    <span>+91 90136 51651</span>
                                </a>
                                <a href="mailto:help@mrfood.ai" className="footer-contact-item">
                                    <Mail aria-hidden="true" />
                                    <span>help@mrfood.ai</span>
                                </a>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
        </footer>
    );
}
