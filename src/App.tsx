import { useState, useEffect } from 'react';
import './App.css';
import logo from './assets/mr_food_logo_v2.png';
import complianceImg from './assets/compliance_dashboard.jpg';
import dashboardFullImg from './assets/dashboard_full.jpg';

function App() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className="app">
            {/* Navigation */}
            <nav className={`navbar ${scrolled ? 'scrolled' : ''} `}>
                <div className="container nav-container">
                    <a href="#" className="logo">
                        <img src={logo} alt="Mr. Food" />
                        <span>Mr. Food</span>
                    </a>
                    <ul className="nav-links">
                        <li><a href="#standards">Standards</a></li>
                        <li><a href="#features">Features</a></li>
                        <li><a href="#dashboard">Dashboard</a></li>
                        <li><a href="#sops">SOPs</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                </div>
            </nav>

            {/* Hero Section */}
            <section className="hero">
                <div className="container hero-content">
                    <h1>The Standard in <br /><span className="text-gradient">Food Surveillance SOPs</span></h1>
                    <p className="hero-sub">Automated compliance for U.S. cloud kitchens and food markets. Built strictly on USDA–FSIS standards.</p>
                    <div className="cta-group">
                        <a href="mailto:help@mrfood.ai" className="btn btn-primary">Get in Touch</a>
                        <a href="#standards" className="btn btn-secondary">View Standards</a>
                    </div>
                </div>
            </section>

            {/* Standards Section */}
            <section id="standards" className="standards">
                <div className="container">
                    <div className="section-header">
                        <span className="section-label">Compliance</span>
                        <h2>USDA–FSIS Certified</h2>
                        <p>Our SOPs are rigorously aligned with the United States Department of Agriculture Food Safety and Inspection Service guidelines.</p>
                    </div>
                </div>
            </section>

            {/* Features Section (Safety by Design) */}
            <section id="features" className="features">
                <div className="container">
                    <div className="feature-row">
                        <div className="feature-content">
                            <span className="section-label">Technology</span>
                            <h2>Safety by Design</h2>
                            <p>Real-time AI monitoring ensures your kitchen meets every compliance metric, every second of the day.</p>
                            <ul className="feature-list">
                                <li>Real-time Adherence Monitoring</li>
                                <li>Automated SOP Checklists</li>
                                <li>Instant Violation Alerts</li>
                            </ul>
                        </div>
                        <div className="feature-visual">
                            <img src={complianceImg} alt="AI Kitchen Compliance Dashboard" className="dashboard-img" />
                        </div>
                    </div>
                </div>
            </section>

            {/* Dashboard Section */}
            <section id="dashboard" className="dashboard-section">
                <div className="container">
                    <div className="section-header">
                        <span className="section-label">Analytics</span>
                        <h2>Enterprise Overview</h2>
                        <p>Track compliance across multiple locations with our centralized command center.</p>
                    </div>
                    <div className="dashboard-visual">
                        <img src={dashboardFullImg} alt="Enterprise Dashboard" className="dashboard-full-img" />
                    </div>
                </div>
            </section>

            {/* Top 3 SOPs Section */}
            <section id="sops" className="sops">
                <div className="container">
                    <div className="section-header">
                        <span className="section-label">Core Protocols</span>
                        <h2>Top 3 SOP Adherence</h2>
                    </div>
                    <div className="sop-grid">
                        <div className="sop-card">
                            <div className="sop-visual placeholder-visual ppe-visual">
                                <span>PPE Compliance</span>
                            </div>
                            <h3>1. PPE Compliance</h3>
                            <p>Automated detection of hair nets, gloves, and masks for every staff member.</p>
                        </div>
                        <div className="sop-card">
                            <div className="sop-visual placeholder-visual storage-visual">
                                <span>Storage Safety</span>
                            </div>
                            <h3>2. Storage Safety</h3>
                            <p>Verifying proper food storage and temperature controls at closing.</p>
                        </div>
                        <div className="sop-card">
                            <div className="sop-visual placeholder-visual hygiene-visual">
                                <span>Hygiene Maintenance</span>
                            </div>
                            <h3>3. "It's All Nice"</h3>
                            <p>Ensuring pristine cleanliness and organization across all workstations.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <section id="contact" className="contact">
                <div className="container">
                    <h2>Ready to elevate your food safety?</h2>
                    <div className="contact-details">
                        <div className="contact-item">
                            <span className="label">Email</span>
                            <a href="mailto:help@mrfood.ai">help@mrfood.ai</a>
                        </div>
                        <div className="contact-item">
                            <span className="label">Phone</span>
                            <a href="tel:+12518108030">+1 (251) 810-8030</a>
                        </div>
                        <div className="contact-item">
                            <span className="label">Address</span>
                            <address>548 Market Street, #62411<br />San Francisco, CA 94104<br />United States</address>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer>
                <div className="container footer-content">
                    <div className="footer-logo">Mr. Food</div>
                    <div className="footer-links">
                        <a href="/privacy.html">Privacy Policy</a>
                        <a href="/terms.html">Terms & Conditions</a>
                    </div>
                    <div className="copyright">
                        &copy; 2025 Mr. Food. All rights reserved.
                    </div>
                </div>
            </footer>
        </div>
    );
}

export default App;
