import { ArrowRight, Check, Play } from 'lucide-react';
import { useState, useEffect } from 'react';
import '../App.css';

// Videos are served from a CDN/bucket (set VITE_MEDIA_URL), not bundled into the
// build, so the JS stays light. Falls back to the GCS bucket if the env is unset.
const MEDIA_URL =
    import.meta.env.VITE_MEDIA_URL ?? 'https://storage.googleapis.com/astral-hold-499011-g6-media';
const media = (file: string) => `${MEDIA_URL}/${file}`;

const offerings = [
    {
        category: 'Cleaning',
        title: 'Unloading dish racks',
        summary:
            'The robot uses its arms to unload dish racks piece by piece, clearing the washer and resetting the station without extra hands.',
        video: media('one.mp4')
    },
    {
        category: 'Service',
        title: 'Handing over items',
        summary: 'Picks finished items and hands them directly to kitchen staff, keeping the pass moving during a busy service.',
        video: media('dishwasher.mp4')
    },
    {
        category: 'Dexterity',
        title: 'Dexterous manipulation',
        summary: 'Grips and places tableware of every shape, from spoons and forks to bowls, with the precision to handle varied items reliably.',
        video: media('two.mp4')
    },
    {
        category: 'Cold storage',
        title: 'Refrigerator handling',
        summary: 'Reaches into cold storage to retrieve and place items, bringing chilled ingredients into the prep workflow.',
        video: media('coke.mp4')
    },
    {
        category: 'Cleaning',
        title: 'Reracking',
        summary: 'Sorts and loads items back into dish racks, keeping the wash cycle flowing and racks ready for the next load.',
        video: media('three.mp4')
    }
];

const DWELL_MS = 6000;

export function Home() {
    const [active, setActive] = useState(0);
    const [paused, setPaused] = useState(false);

    // Auto-advance through the offerings; pause while the user is interacting.
    useEffect(() => {
        if (paused) return;
        const id = window.setTimeout(() => {
            setActive((current) => (current + 1) % offerings.length);
        }, DWELL_MS);
        return () => window.clearTimeout(id);
    }, [active, paused]);

    return (
        <div className="page">
            <header className="hero">
                <video className="hero-media" autoPlay loop muted playsInline preload="auto">
                    <source src={media('dishwasher.mp4')} type="video/mp4" />
                </video>
                <div className="hero-overlay" />
                <div className="hero-content">
                    <h1 className="hero-title">
                        Reduce labor, control cost,<br />
                        fits your kitchen
                    </h1>
                    <p className="hero-sub">
                        Robotic prep and cleaning that mounts to existing stations and delivers predictable throughput without adding headcount.
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
                        <div className="backed-by-pill">
                            <span className="backed-by-dot"></span>
                            <span className="backed-by-text">Backed by</span>
                            <span className="backed-by-name">Entrepreneurs First</span>
                        </div>
                    </div>
                </div>
            </header>

            <main>
                <section className="panels" aria-label="Offerings">
                    <div className="section-heading">
                        <span className="eyebrow">What it does</span>
                        <h2>
                            Built to fit your kitchen<br />
                            and your <span className="accent-word">P&amp;L</span>
                        </h2>
                        <p className="section-copy">
                            A closer look at the tasks our robots handle day to day. Pick one to
                            watch it in action.
                        </p>
                    </div>

                    <div
                        className={`showcase ${paused ? 'is-paused' : ''}`}
                        onMouseEnter={() => setPaused(true)}
                        onMouseLeave={() => setPaused(false)}
                    >
                        <div className="showcase-list" role="tablist" aria-label="Capabilities">
                            {offerings.map((offering, index) => (
                                <button
                                    key={index}
                                    type="button"
                                    role="tab"
                                    aria-selected={index === active}
                                    className={`showcase-item ${index === active ? 'is-active' : ''}`}
                                    onClick={() => setActive(index)}
                                >
                                    <span className="showcase-index">
                                        {String(index + 1).padStart(2, '0')}
                                    </span>
                                    <span className="showcase-item-body">
                                        <span className="showcase-item-tag">{offering.category}</span>
                                        <span className="showcase-item-title">{offering.title}</span>
                                        <span className="showcase-item-summary">{offering.summary}</span>
                                        <span className="showcase-progress" aria-hidden="true">
                                            <span className="showcase-progress-bar" />
                                        </span>
                                    </span>
                                </button>
                            ))}
                        </div>

                        <div className="showcase-stage">
                            <video
                                key={active}
                                className="showcase-video"
                                src={offerings[active].video}
                                autoPlay
                                loop
                                muted
                                playsInline
                                preload="auto"
                            />
                            <div className="showcase-stage-scrim" aria-hidden="true" />
                            <div className="showcase-stage-caption">
                                <span className="showcase-stage-tag">
                                    <Play className="showcase-stage-tag-icon" aria-hidden="true" />
                                    {offerings[active].category}
                                </span>
                                <h3>{offerings[active].title}</h3>
                            </div>
                            <div className="showcase-dots" aria-hidden="true">
                                {offerings.map((_, index) => (
                                    <button
                                        key={index}
                                        type="button"
                                        className={`showcase-dot ${index === active ? 'is-active' : ''}`}
                                        onClick={() => setActive(index)}
                                        aria-label={`Show ${offerings[index].title}`}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                <section className="cta" id="contact" aria-label="Request a demo">
                    <div className="cta-card">
                        <div className="cta-text">
                            <span className="cta-eyebrow">Get started</span>
                            <h2 className="cta-title">
                                Book a free <span className="accent-text">demo</span>
                            </h2>
                            <p className="cta-copy">
                                We deploy our robots in your environment so you can see the
                                results for yourself, at no cost and with no commitment.
                            </p>
                            <ul className="cta-features">
                                <li>
                                    <Check aria-hidden="true" />
                                    Deployed in your own kitchen
                                </li>
                                <li>
                                    <Check aria-hidden="true" />
                                    Real throughput, measured on site
                                </li>
                                <li>
                                    <Check aria-hidden="true" />
                                    No upfront cost or commitment
                                </li>
                            </ul>
                        </div>
                        <div className="cta-aside">
                            <a
                                className="cta-button cta-button--primary"
                                href="https://calendly.com/deepanshu-mrfood/30min"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Request Demo
                                <ArrowRight className="button-icon" aria-hidden="true" />
                            </a>
                            <a className="cta-button cta-button--ghost" href="mailto:help@mrfood.ai">
                                Talk to sales
                            </a>
                            <p className="cta-note">
                                Typically a 30-minute call. We reply within one business day.
                            </p>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
}
