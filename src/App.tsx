import { useEffect, useRef, useState } from 'react';
import type { CSSProperties, FormEvent } from 'react';
import type { LucideIcon } from 'lucide-react';
import { Clock3, Coins, Network } from 'lucide-react';
import heroImage from '../assets/Gemini_Generated_Image_gee2dggee2dggee2.png';
import sopImage from '../assets/SOP_adherence.png';
import roboticsImage from '../assets/Robotics_adherence.png';
import './App.css';

const metrics: Array<{ label: string; description?: string; icon: LucideIcon }> = [
    {
        label: '24/7 uptime',
        icon: Clock3
    },
    {
        label: '45% lower cost',
        icon: Coins
    },
    {
        label: 'Consistent reliability & scalability',
        icon: Network
    }
];

const offerings = [
    {
        title: 'SOP Adherence',
        summary: 'Real-time AI monitoring ensures your kitchen meets every USDA–FSIS compliance metric, 24/7.',
        highlights: [],
        image: sopImage
    },
    {
        title: 'Robotic Food Preparation',
        summary: 'Precision cooking and assembly for consistent quality and faster throughput.',
        highlights: [],
        image: roboticsImage
    },
    {
        title: 'Automated Packaging',
        summary: 'Secure, tamper-proof, and labeled packaging ready for delivery.',
        highlights: [],
        image: heroImage
    }
];

const performanceSignals = [
    {
        title: 'Speed',
        detail: 'Coordinated robotics compress prep, cook, and pack-out windows without sacrificing control.'
    },
    {
        title: 'Reliability',
        detail: 'Built-in monitoring locks in SOP adherence to keep every service predictable.'
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
        brand: 'Pure Foods',
        quote: '“Every site runs like it is staffed by the same disciplined crew, regardless of shift.”',
        role: 'Operations Director, Pure Foods',
        initials: 'PF'
    },
    {
        brand: 'Revel Food',
        quote: '“The automation scales with our concepts and protects quality when volumes spike.”',
        role: 'Head of Culinary Systems, Revel Food',
        initials: 'RF'
    },
    {
        brand: 'Kitchen One',
        quote: '“AI oversight closed our compliance gaps in under a week and keeps every audit simple.”',
        role: 'Compliance Lead, Kitchen One',
        initials: 'KO'
    },
    {
        brand: 'Urban Provisions',
        quote: '“Prep throughput jumped without adding labor, and packaging errors dropped to zero.”',
        role: 'VP Operations, Urban Provisions',
        initials: 'UP'
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
    const handleDemoSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        window.location.href = 'mailto:help@mrfood.ai?subject=Demo%20request&body=I%27d%20like%20to%20schedule%20a%20demo%20with%20Mr.%20Food.';
    };

    return (
        <div className="page">
            <div className="brand-pill">Mr. Food</div>
            <a className="demo-pill" href="#contact">
                Request Demo
            </a>
            <header className="hero">
                <img className="hero-media" src={heroImage} alt="Automation system background" />
                <div className="hero-overlay" />
                <div className="hero-content">
                    <h1 className="hero-title">
                        <span className="hero-type" role="text" aria-label="Your kitchen. Automated">
                            <span>Your kitchen. Automated</span>
                        </span>
                    </h1>
                    <p className="hero-sub">
                        AI-Enabled precision robotics and smart automation, built for modern kitchens.
                    </p>
                </div>
            </header>

            <main>
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
                                        <span>{testimonial.initials}</span>
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
                        <form className="cta-form" onSubmit={handleDemoSubmit}>
                            <label>
                                <span>Full name</span>
                                <input type="text" name="name" placeholder="Jamie Garcia" required />
                            </label>
                            <label>
                                <span>Work email</span>
                                <input type="email" name="email" placeholder="chef@yourbrand.com" required />
                            </label>
                            <label>
                                <span>Kitchen count</span>
                                <input type="text" name="kitchenCount" placeholder="Multi-site, single site, or virtual" />
                            </label>
                            <label>
                                <span>Focus areas</span>
                                <textarea name="focus" placeholder="SOP adherence, prep automation, packaging..."></textarea>
                            </label>
                            <button type="submit">Request a demo</button>
                        </form>
                    </div>
                </section>
            </main>
        </div>
    );
}

export default App;
