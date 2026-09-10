import { ArrowRight, Leaf, Play } from 'lucide-react';
import dennysLogo from '../assets/dennys.svg';
import applebeesLogo from '../assets/applebees.svg';
import '../App.css';
import './Home.css';

// Videos are served from a CDN/bucket (set VITE_MEDIA_URL), not bundled into the
// build, so the JS stays light. Falls back to the GCS bucket if the env is unset.
const MEDIA_URL =
    import.meta.env.VITE_MEDIA_URL ?? 'https://storage.googleapis.com/astral-hold-499011-g6-media';
const media = (file: string) => `${MEDIA_URL}/${file}`;

const CALENDLY_URL = 'https://calendly.com/deepanshu-mrfood/30min';

const offerings = [
    { category: 'Cleaning', title: 'Loading the dishwasher', video: media('three.mp4') },
    { category: 'Dexterity', title: 'Dexterous manipulation', video: media('two.mp4') },
    { category: 'Cleaning', title: 'Unloading dish racks', video: media('one.mp4') },
    { category: 'Service', title: 'Item Handover', video: media('dishwasher.mp4') },
];

const tickerLine =
    'loads the dishwasher  ·  unloads dish racks  ·  grips every shape  ·  hands items over  ·  every hour of every shift  ·  ';

// One seamless-loop wave, two repeats wide; the track drifts by one repeat.
function WaveLine() {
    return (
        <div className="wave-divider" aria-hidden="true">
            <div className="wave-divider-track">
                <svg width="2880" height="24" viewBox="0 0 2880 24" fill="none">
                    <path
                        d="M0 12 C 60 2, 120 22, 180 12 S 300 2, 360 12 S 480 22, 540 12 S 660 2, 720 12 S 840 22, 900 12 S 1020 2, 1080 12 S 1200 22, 1260 12 S 1380 2, 1440 12 S 1560 22, 1620 12 S 1740 2, 1800 12 S 1920 22, 1980 12 S 2100 2, 2160 12 S 2280 22, 2340 12 S 2460 2, 2520 12 S 2640 22, 2700 12 S 2820 2, 2880 12"
                        stroke="var(--accent)"
                        strokeWidth="2"
                        strokeLinecap="round"
                        opacity="0.5"
                    />
                </svg>
            </div>
        </div>
    );
}

export function Home() {
    return (
        <div className="page">
            <header className="home-hero">
                <h1 className="home-hero-title">
                    Kitchens were built for hands, <em>get the ones that don&apos;t quit.</em>
                </h1>
                <div className="home-hero-cta">
                    <a
                        className="home-button home-button--accent"
                        href={CALENDLY_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Request Demo
                        <ArrowRight className="home-button-icon" aria-hidden="true" />
                    </a>
                    <p className="home-hero-backed">
                        Backed by <span>Entrepreneurs First</span>
                    </p>
                </div>
            </header>

            <main className="home-main">
                <section className="home-frame-section" aria-label="Robot at work">
                    <div className="home-frame">
                        <video
                            src={media('one.mp4')}
                            autoPlay
                            loop
                            muted
                            playsInline
                            preload="auto"
                        />
                        <span className="home-frame-chip">
                            <Play aria-hidden="true" />
                            Unloading dish racks &mdash; real footage
                        </span>
                    </div>
                </section>

                <section className="adopters" aria-label="Kitchens using MrFood">
                    <span className="adopters-intro">Already on shift at</span>
                    <div className="adopters-logos">
                        <img src={dennysLogo} alt="Denny's" className="adopters-logo--solid" />
                        <img src={applebeesLogo} alt="Applebee's" />
                        <span className="adopters-wordmark">
                            <Leaf aria-hidden="true" />
                            Homegrown
                        </span>
                    </div>
                </section>

                <WaveLine />

                <div className="ticker" aria-hidden="true">
                    <div className="ticker-track">
                        <span>{tickerLine + tickerLine}</span>
                        <span>{tickerLine + tickerLine}</span>
                    </div>
                </div>

                <section className="showcase-section" aria-label="Offerings">
                    <div className="showcase-block">
                        <div className="showcase-heading">
                            <span className="showcase-eyebrow">What it does</span>
                            <h2>
                                See our robots <em>in action.</em>
                            </h2>
                        </div>
                        <div className="showcase-grid">
                            {offerings.map((offering) => (
                                <article className="showcase-card" key={offering.title}>
                                    <div className="showcase-card-media">
                                        <video
                                            src={offering.video}
                                            autoPlay
                                            loop
                                            muted
                                            playsInline
                                            preload="metadata"
                                        />
                                        <span className="showcase-card-chip" aria-hidden="true">
                                            <Play />
                                        </span>
                                    </div>
                                    <div className="showcase-card-body">
                                        <span className="showcase-card-tag">{offering.category}</span>
                                        <h3>{offering.title}</h3>
                                    </div>
                                </article>
                            ))}
                        </div>
                    </div>
                </section>

                <section className="home-cta" id="contact" aria-label="Request a demo">
                    <h2 className="home-cta-title">
                        Book a free <em>demo.</em>
                    </h2>
                    <div className="home-cta-buttons">
                        <a
                            className="home-button home-button--ink"
                            href={CALENDLY_URL}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Request Demo
                            <ArrowRight className="home-button-icon" aria-hidden="true" />
                        </a>
                        <a className="home-button home-button--ghost" href="mailto:help@mrfood.ai">
                            Talk to sales
                        </a>
                    </div>
                </section>
            </main>
        </div>
    );
}
