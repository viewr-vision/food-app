import { Link } from 'react-router-dom';
import './Footer.css';

export function Footer() {
    return (
        <footer className="site-footer">
            <div className="footer-inner">
                <div className="footer-brand">Mr. Food</div>
                <div className="footer-grid">
                    <div className="footer-block">
                        <span className="footer-label">Address</span>
                        <a
                            href="https://maps.app.goo.gl/hMK6E7spHsCqUzpA9"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="footer-address-link"
                        >
                            <p>
                                Floors 1&amp;2
                                <br />
                                501 Folsom St
                                <br />
                                San Francisco, CA 94105
                                <br />
                                USA
                            </p>
                        </a>
                    </div>
                    <div className="footer-block">
                        <span className="footer-label">Phone</span>
                        <a href="tel:+12518108030">+1 (251) 810-8030</a>
                    </div>
                    <div className="footer-block">
                        <span className="footer-label">Email</span>
                        <a href="mailto:help@mrfood.ai">help@mrfood.ai</a>
                    </div>
                    <div className="footer-block">
                        <span className="footer-label">Legal</span>
                        <div className="footer-links">
                            <Link to="/privacy">Privacy Policy</Link>
                            <Link to="/terms">Terms of Service</Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
