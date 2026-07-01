import { ArrowRight, Play } from 'lucide-react';
import { useState, useRef } from 'react';
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
        category: 'Dexterity',
        title: 'Dexterous manipulation',
        summary: 'Grips and places tableware of every shape, from spoons and forks to bowls, with the precision to handle varied items reliably.',
        video: media('two.mp4')
    },
    {
        category: 'Cleaning',
        title: 'Loading the dishwasher',
        summary: 'Sorts and loads items back into dish racks, keeping the wash cycle flowing and racks ready for the next load.',
        video: media('three.mp4')
    },
    {
        category: 'Service',
        title: 'Item Handover',
        summary: 'Picks finished items and hands them directly to kitchen staff, keeping the pass moving during a busy service.',
        video: media('dishwasher.mp4')
    },
    {
        category: 'Cold storage',
        title: 'Refrigerator handling',
        summary: 'Reaches into cold storage to retrieve and place items, bringing chilled ingredients into the prep workflow.',
        video: media('fridge.mp4')
    },
];

export function Home() {
    const [active, setActive] = useState(0);
    const [progress, setProgress] = useState(0);
    const videoRef = useRef<HTMLVideoElement>(null);

    const goTo = (index: number) => {
        setActive(index);
        setProgress(0);
    };

    // The progress line is driven by the actual clip playback, so it matches the
    // video length and keeps moving on hover. Advance when the clip finishes.
    const handleTimeUpdate = () => {
        const v = videoRef.current;
        if (!v || !v.duration) return;
        setProgress((v.currentTime / v.duration) * 100);
    };

    const handleEnded = () => goTo((active + 1) % offerings.length);

    return (
        <div className="page">
            <header className="hero">
                <video className="hero-media" autoPlay loop muted playsInline preload="auto">
                    <source src={media('hero.mp4')} type="video/mp4" />
                </video>
                <div className="hero-overlay" />
                <div className="hero-content">
                    <h1 className="hero-title">Kitchens were built for hands</h1>
                    <p className="hero-sub">
                        Get the ones that don't quit.
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

                    <div className="showcase">
                        <div className="showcase-list" role="tablist" aria-label="Capabilities">
                            {offerings.map((offering, index) => (
                                <button
                                    key={index}
                                    type="button"
                                    role="tab"
                                    aria-selected={index === active}
                                    className={`showcase-item ${index === active ? 'is-active' : ''}`}
                                    onClick={() => goTo(index)}
                                >
                                    <span className="showcase-index">
                                        {String(index + 1).padStart(2, '0')}
                                    </span>
                                    <span className="showcase-item-body">
                                        <span className="showcase-item-tag">{offering.category}</span>
                                        <span className="showcase-item-title">{offering.title}</span>
                                    </span>
                                </button>
                            ))}
                        </div>

                        <div className="showcase-stage">
                            <div className="showcase-frame">
                                <video
                                    key={active}
                                    ref={videoRef}
                                    className="showcase-video"
                                    src={offerings[active].video}
                                    autoPlay
                                    muted
                                    playsInline
                                    preload="auto"
                                    onTimeUpdate={handleTimeUpdate}
                                    onEnded={handleEnded}
                                />
                                <div className="showcase-dots">
                                    {offerings.map((_, index) => (
                                        <button
                                            key={index}
                                            type="button"
                                            className={`showcase-dot ${index === active ? 'is-active' : ''}`}
                                            onClick={() => goTo(index)}
                                            aria-label={`Show ${offerings[index].title}`}
                                        />
                                    ))}
                                </div>
                            </div>
                            <div className="showcase-progress" aria-hidden="true">
                                <span
                                    className="showcase-progress-bar"
                                    style={{ transform: `scaleX(${progress / 100})` }}
                                />
                            </div>
                            <div className="showcase-caption">
                                <span className="showcase-stage-tag">
                                    <Play className="showcase-stage-tag-icon" aria-hidden="true" />
                                    {offerings[active].category}
                                </span>
                                <h3>{offerings[active].title}</h3>
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
                                results for yourself.
                            </p>
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
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
}
