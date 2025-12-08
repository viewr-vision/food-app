import { useEffect, useState } from 'react';
import './App.css';
import logo from './assets/logo.png';
import complianceDashboard from './assets/compliance_dashboard.jpg';
import prepImage from './assets/prep.jpeg';
import packageImage from './assets/package.jpeg';

const offerings = [
    {
        id: 'sop',
        number: '01',
        title: 'SOP Adherence & Compliance',
        summary: 'Real-time AI monitoring ensures your kitchen meets every USDA–FSIS compliance metric, 24/7.',
        features: [
            'PPE and hygiene compliance checks in real time',
            'Storage safety validation with temperature awareness',
            'Workstation cleanliness monitoring and alerts'
        ],
        image: complianceDashboard
    },
    {
        id: 'prep',
        number: '02',
        title: 'Robotic Food Preparation',
        summary: 'Precision cooking and assembly for consistent quality and faster throughput.',
        features: [
            'Automated ingredient dispensing with exact portions',
            'Precision temperature control throughout cooking',
            'Recipe-level consistency across every location'
        ],
        image: prepImage
    },
    {
        id: 'packaging',
        number: '03',
        title: 'Automated Packaging',
        summary: 'Secure, tamper-proof, and labeled packaging ready for delivery.',
        features: [
            'High-speed sealing tuned for delivery volume',
            'Smart labeling and allergen callouts on pack',
            'Tamper-proof verification with audit trail'
        ],
        image: packageImage
    }
];

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
            <nav className={`navbar ${scrolled ? 'scrolled' : ''} `}>
                <div className="container nav-container">
                    <a href="#" className="logo">
                        <img src={logo} alt="Mr. Food" />
                        <span>Mr. Food</span>
                    </a>
                    <ul className="nav-links">
                        <li><a href="#sop">SOP Adherence</a></li>
                        <li><a href="#prep">Food Prep</a></li>
                        <li><a href="#packaging">Packaging</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                </div>
            </nav>

            <section className="hero">
                <div className="container hero-content">
                    <h1>The Future of <br /><span className="text-gradient">Robotic Restaurant Automation</span></h1>
                    <p className="hero-sub">Automating the core of your kitchen: SOP Adherence, Food Preparation, and Packaging.</p>
                    <div className="cta-group">
                        <a href="mailto:help@mrfood.ai" className="btn btn-primary">Get in Touch</a>
                        <a href="#offerings" className="btn btn-secondary">Explore Offerings</a>
                    </div>
                </div>
            </section>

            <section id="offerings" className="offerings-overview">
                <div className="container">
                    <div className="section-header">
                        <span className="section-label">Offerings</span>
                        <h2>Automation across your kitchen</h2>
                        <p>Review the three areas we automate end-to-end, then dive into the details for each.</p>
                    </div>
                    <div className="offerings-grid">
                        {offerings.map((offering) => (
                            <a key={offering.id} href={`#${offering.id}`} className="offering-card">
                                <div className="offering-card-body">
                                    <span className="section-label">Offering {offering.number}</span>
                                    <h3>{offering.title}</h3>
                                    <p>{offering.summary}</p>
                                </div>
                                <div className="offering-card-cta">View details →</div>
                            </a>
                        ))}
                    </div>
                </div>
            </section>

            {offerings.map((offering, index) => (
                <section key={offering.id} id={offering.id} className="offering offering-detail">
                    <div className={`container offering-layout ${index % 2 !== 0 ? 'reverse' : ''}`}>
                        <div className="offering-image">
                            <img src={offering.image} alt={offering.title} />
                        </div>
                        <div className="offering-content">
                            <span className="section-label">Offering {offering.number}</span>
                            <h2>{offering.title}</h2>
                            <p>{offering.summary}</p>
                            <ul className="feature-list">
                                {offering.features.map((feature) => (
                                    <li key={feature}>{feature}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </section>
            ))}

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
