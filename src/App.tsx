import { useEffect, useRef, useState } from 'react';
import type { CSSProperties } from 'react';
import type { LucideIcon } from 'lucide-react';
import { ArrowRight, Clock3, DollarSign, Network } from 'lucide-react';
import heroImage from '../assets/Gemini_Generated_Image_gee2dggee2dggee2.png';
import fallbackImage from './assets/dashboard_full.jpg';
import packagingImage from '../assets/packaging_image.jpg';
import humanInLoopImage from '../assets/human_in_the_loop.jpg';
import curefoodsLogo from '../assets/curefoods.png';
import rebelFoodsLogo from '../assets/rebel_foods.png';
import saladDaysLogo from '../assets/salad_days.jpg';
import './App.css';

const metrics: Array<{ label: string; description?: string; icon: LucideIcon }> = [
    {
        label: '24/7 uptime',
        icon: Clock3
    },
    {
        label: '45% lower cost',
        icon: DollarSign
    },
    {
        label: 'Consistent reliability & scalability',
        icon: Network
    }
];

const offerings = [
    {
        title: 'Robotic Food Preparation',
        summary:
            'Autonomous food preparation (cutting, cooking, plating) for your kitchen, your recipes, and your ingredients.',
        highlights: [],
        image: heroImage
    },
    {
        title: 'Automated Packaging',
        summary: 'Secure, tamper-proof, and labeled packaging ready for delivery.',
        highlights: [],
        image: packagingImage
    },
    {
        title: 'Operational Monitoring',
        summary: 'Real-time visibility into output, uptime, and performance across shifts and locations.',
        highlights: [],
        image: fallbackImage
    },
    {
        title: 'Human-in-the-Loop Fallback',
        summary: 'Built-in human supervision for edge cases, ensuring uninterrupted service and consistent output.',
        highlights: [],
        image: humanInLoopImage
    }
];

const performanceSignals = [
    {
        title: 'Speed',
        detail: 'Coordinated robotics compress prep, cook, and pack-out windows without sacrificing control.'
    },
    {
        title: 'Reliability',
        detail: 'Unified analytics watch every line, so uptime, quality, and compliance stay on pace.'
    },
    {
        title: 'Scalability',
        detail: 'The system expands as you add kitchens, maintaining output across formats.'
    },
    {
        title: 'Learns your kitchen',
        detail: 'Feedback loops refine cycles as the platform adapts to your menus and cadence.'
    }
];

const testimonials = [
    {
        brand: 'Curefoods',
        quote: '“New menu launches now sync across sites automatically.”',
        role: 'Director of Automation',
        logo: curefoodsLogo
    },
    {
        brand: 'Rebel Foods',
        quote: '“Cloud kitchens hit service marks faster without losing control.”',
        role: 'Head of Culinary Systems',
        logo: rebelFoodsLogo
    },
    {
        brand: 'Salad Days',
        quote: '“Prep-to-dispatch flows stay tight thanks to realtime alerts.”',
        role: 'Operations Lead',
        logo: saladDaysLogo
    }
];

function App() {
    const [metricsVisible, setMetricsVisible] = useState(false);
    const metricsRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const node = metricsRef.current;
        if (!node) {
            return;
        }

        const observer = new IntersectionObserver(
            (entries, metricsObserver) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setMetricsVisible(true);
                        metricsObserver.disconnect();
                    }
                });
            },
            {
                threshold: 0.35
            }
        );

        observer.observe(node);

        return () => observer.disconnect();
    }, []);
    return (
        <div className="page">
            <div className="brand-pill">Mr. Food</div>
            <a
                className="demo-pill hero-button"
                href="https://calendly.com/deepanshu-mrfood/30min"
                target="_blank"
                rel="noopener noreferrer"
            >
                Request Demo
            </a>
            <header className="hero">
                <img className="hero-media" src={heroImage} alt="Automation system background" />
                <div className="hero-overlay" />
                <div className="hero-content">
                    <h1 className="hero-title">Your kitchen. Automated</h1>
                    <p className="hero-sub">
                        AI-Enabled precision robotics and smart automation, built for modern kitchens.
                    </p>
                    <div className="hero-cta">
                        <a
                            className="hero-button hero-button--primary"
                            href="https://calendly.com/deepanshu-mrfood/30min"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Request Demo
                            <ArrowRight className="button-icon" aria-hidden="true" />
                        </a>
                    </div>
                </div>
            </header>

            <main>
                <section className="panels" aria-label="Offerings">
                    <div className="section-heading">
                        <h2>Automation that spans prep, cook, and pack.</h2>
                    </div>
                    <div className="panel-track" role="list">
                        {offerings.map((offering) => (
                            <article key={offering.title} className="panel-card" role="listitem">
                                <div className="panel-media" aria-hidden="true">
                                    <img src={offering.image} alt={`${offering.title} visual`} />
                                </div>
                                <div className="panel-body">
                                    <h3>{offering.title}</h3>
                                    <p>{offering.summary}</p>
                                    {offering.highlights.length > 0 && (
                                        <ul>
                                            {offering.highlights.map((item) => (
                                                <li key={item}>{item}</li>
                                            ))}
                                        </ul>
                                    )}
                                </div>
                            </article>
                        ))}
                    </div>
                </section>

                <section className="metrics" aria-label="Key metrics">
                    <div className="section-heading centered">
                        <h2>Operational guarantees</h2>
                    </div>
                    <div
                        className={`metrics-grid ${metricsVisible ? 'metrics-visible' : ''}`}
                        ref={metricsRef}
                    >
                        {metrics.map((metric, index) => {
                            const delayStyle = {
                                '--type-delay': `${index * 0.35 + 0.25}s`
                            } as CSSProperties;
                            const Icon = metric.icon;

                            return (
                                <article key={metric.label} className="metric-card" style={delayStyle}>
                                    <div className="metric-icon" aria-hidden="true">
                                        <Icon />
                                    </div>
                                    <h3>
                                        <span className="metric-type">
                                            <span>{metric.label}</span>
                                        </span>
                                    </h3>
                                </article>
                            );
                        })}
                    </div>
                </section>

                <section className="performance" aria-label="Performance signals">
                    <div className="section-heading centered">
                        <h2>Better pacing with every service.</h2>
                    </div>
                    <div className="performance-track">
                        {performanceSignals.map((signal) => (
                            <article key={signal.title} className="performance-card">
                                <h3>{signal.title}</h3>
                                <p>{signal.detail}</p>
                            </article>
                        ))}
                    </div>
                </section>

                <section className="testimonials" aria-label="Testimonials">
                    <div className="section-heading">
                        <h2>Reliability proven inside active kitchens.</h2>
                    </div>
                    <div className="testimonial-carousel">
                        <button
                            className="testimonial-nav"
                            aria-label="Previous testimonials"
                            onClick={() => {
                                document.getElementById('testimonial-track')?.scrollBy({ left: -360, behavior: 'smooth' });
                            }}
                        >
                            ‹
                        </button>
                        <div className="testimonial-track" id="testimonial-track" role="list">
                            {testimonials.map((testimonial) => (
                                <article key={testimonial.brand} className="testimonial-card" role="listitem">
                                    <div className="testimonial-media" aria-hidden="true">
                                        {testimonial.logo ? (
                                            <img src={testimonial.logo} alt={`${testimonial.brand} logo`} />
                                        ) : (
                                            <span>{testimonial.brand.slice(0, 2).toUpperCase()}</span>
                                        )}
                                    </div>
                                    <blockquote>{testimonial.quote}</blockquote>
                                    <p className="testimonial-role">{testimonial.role}</p>
                                </article>
                            ))}
                        </div>
                        <button
                            className="testimonial-nav"
                            aria-label="Next testimonials"
                            onClick={() => {
                                document.getElementById('testimonial-track')?.scrollBy({ left: 360, behavior: 'smooth' });
                            }}
                        >
                            ›
                        </button>
                    </div>
                </section>

                <section className="cta" id="contact" aria-label="Request a demo">
                    <div className="cta-card">
                        <div className="section-heading">
                            <h2>Book an automation briefing.</h2>
                            <p className="section-copy">
                                Share your kitchen footprint and we will align a session focused on compliance, prep, and packaging workflows.
                            </p>
                        </div>
                        <div className="cta-actions">
                            <a
                                className="cta-button"
                                href="https://calendly.com/deepanshu-mrfood/30min"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Request Demo
                                <ArrowRight className="button-icon" aria-hidden="true" />
                            </a>
                        </div>
                    </div>
                </section>
            </main>
            <footer className="site-footer">
                <div className="footer-inner">
                    <div className="footer-brand">Mr. Food</div>
                    <div className="footer-grid">
                        <div className="footer-block">
                            <span className="footer-label">Address</span>
                            <p>
                                Floors 1&amp;2
                                <br />
                                501 Folsom St
                                <br />
                                San Francisco, CA 94105
                                <br />
                                USA
                            </p>
                        </div>
                        <div className="footer-block">
                            <span className="footer-label">Phone</span>
                            <a href="tel:+12518108030">+1 (251) 810-8030</a>
                        </div>
                        <div className="footer-block">
                            <span className="footer-label">Email</span>
                            <a href="mailto:help@mrfood.ai">help@mrfood.ai</a>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}

export default App;
