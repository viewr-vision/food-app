import { ArrowRight } from 'lucide-react';
import { useRef, useCallback } from 'react';
import platformVideo from '../assets/platform.mp4';
import dishwasherVideo from '../assets/dishwasher.mp4';
import refrigeratorVideo from '../assets/refrigerator.mp4';
import cokeVideo from '../assets/coke.mp4';
import '../App.css';
import '../components/Carousel.css';

const offerings = [
    {
        title: 'Dishwasher loading',
        summary:
            'Automated and precise loading of dishwashers to maximize space, efficiency, and consistent cleaning results.',
        highlights: [],
        video: dishwasherVideo
   
    },
    {
        title: 'Omnidirectional Platform Movement',
        summary: 'Allows the robot to easily move in any direction along the kitchen floor, enabling flexible navigation and seamless integration into existing workflows.',
        highlights: [],
        video: platformVideo
    },
    {
        title: 'Refrigerator Opening',
        summary: 'Automates refrigerator door handling, enabling the robot to access cold storage for ingredient handling and improved kitchen workflow integration.',
        highlights: [],
        video: refrigeratorVideo
    },
    {
        title: 'Taking items out and handing over',
        summary: 'Automated retrieval of items and seamless handoff to kitchen staff, streamlining food prep and delivery processes.',
        highlights: [],
        video: cokeVideo
   
    }
];

export function Home() {
    const offeringsTrackRef = useRef<HTMLDivElement>(null);

    const scrollCarousel = useCallback((trackRef: React.RefObject<HTMLDivElement | null>, direction: 'left' | 'right') => {
        const track = trackRef.current;
        if (!track) return;

        const cards = Array.from(track.querySelectorAll('[role="listitem"]')) as HTMLElement[];
        if (cards.length === 0) return;

        // Get the first card to calculate dimensions
        const firstCard = cards[0];
        const cardRect = firstCard.getBoundingClientRect();
        const cardWidth = cardRect.width;
        
        // Get computed gap from CSS (check track's gap)
        const trackStyles = window.getComputedStyle(track);
        const gapValue = trackStyles.gap || '32px';
        const gap = parseFloat(gapValue) || 32;
        
        // Calculate scroll distance: card width + gap
        const scrollDistance = cardWidth + gap;

        // Scroll by the calculated distance
        track.scrollBy({
            left: direction === 'left' ? -scrollDistance : scrollDistance,
            behavior: 'smooth'
        });
    }, []);

    return (
        <div className="page">
            <header className="hero">
                <video className="hero-media" autoPlay loop muted playsInline preload="auto">
                    <source src={dishwasherVideo} type="video/mp4" />
                </video>
                <div className="hero-overlay" />
                <div className="hero-content">
                    <h1 className="hero-title">
                        Reduce labor, control cost,<br />
                        fit your kitchen
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
                        <h2>Automation that fits your kitchen and P&L</h2>
                    </div>
                    <div className="offerings-carousel">
                        <button
                            className="carousel-nav"
                            aria-label="Previous offering"
                            onClick={() => scrollCarousel(offeringsTrackRef, 'left')}
                        >
                            ‹
                        </button>
                        <div className="offerings-track" id="offerings-track" ref={offeringsTrackRef} role="list">
                            {offerings.map((offering) => (
                                <article key={offering.title} className="panel-card" role="listitem">
                                    <div className="panel-media" aria-hidden="true">
                                        <video
                                            src={offering.video}
                                            autoPlay
                                            loop
                                            muted
                                            playsInline
                                            preload="metadata"
                                        />
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
                        <button
                            className="carousel-nav"
                            aria-label="Next offering"
                            onClick={() => scrollCarousel(offeringsTrackRef, 'right')}
                        >
                            ›
                        </button>
                    </div>
                </section>

                <section className="cta" id="contact" aria-label="Request a demo">
                    <div className="cta-card">
                        <div className="section-heading">
                            <h2>Book a free <span style={{ color: '#C6FE1E', fontStyle: 'italic' }}>demo</span></h2>
                            <p className="section-copy">
                                We will deploy our robots in your environment and you can see the results for yourself for free.
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
        </div>
    );
}
