import { Link } from 'react-router-dom';
import { ArrowUpRight, Linkedin, Mail, MapPin, Phone } from 'lucide-react';
import './Footer.css';

const CALENDLY_URL = 'https://calendly.com/deepanshu-mrfood/30min';

export function Footer() {
    const year = new Date().getFullYear();

    return (
        <footer className="site-footer">
            <div className="footer-inner">
                <div className="footer-top">
                    <div className="footer-brand-col">
                        <div className="footer-brand">Mr. Food</div>
                        <p className="footer-tagline">
                            Robotic prep and cleaning that mounts to existing stations and
                            delivers predictable throughput without adding headcount.
                        </p>
                        <a
                            className="footer-cta"
                            href={CALENDLY_URL}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Book a free demo
                            <ArrowUpRight className="footer-cta-icon" aria-hidden="true" />
                        </a>
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
                                <Link to="/faq">FAQ</Link>
                            </div>
                        </div>
                        <div className="footer-block">
                            <span className="footer-label">Get started</span>
                            <div className="footer-links">
                                <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer">
                                    Request Demo
                                </a>
                                <Link to="/#contact">Book a demo</Link>
                                <a href="mailto:help@mrfood.ai">Contact sales</a>
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
                                    href="https://maps.app.goo.gl/hMK6E7spHsCqUzpA9"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="footer-contact-item"
                                >
                                    <MapPin aria-hidden="true" />
                                    <span>
                                        Floors 1&amp;2, 501 Folsom St
                                        <br />
                                        San Francisco, CA 94105
                                    </span>
                                </a>
                                <a href="tel:+12518108030" className="footer-contact-item">
                                    <Phone aria-hidden="true" />
                                    <span>+1 (251) 810-8030</span>
                                </a>
                                <a href="mailto:help@mrfood.ai" className="footer-contact-item">
                                    <Mail aria-hidden="true" />
                                    <span>help@mrfood.ai</span>
                                </a>
                            </div>
                        </div>
                    </nav>
                </div>

                <div className="footer-bottom">
                    <p className="footer-copy">© {year} Mr. Food, Inc. All rights reserved.</p>
                    <div className="footer-backed">
                        <span className="footer-backed-dot" aria-hidden="true" />
                        <span className="footer-backed-text">Backed by</span>
                        <span className="footer-backed-name">Entrepreneurs First</span>
                    </div>
                </div>
            </div>
        </footer>
    );
}
