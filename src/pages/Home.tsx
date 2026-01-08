import { ArrowRight } from 'lucide-react';
import { useRef, useCallback } from 'react';
import curefoodsLogo from '../../assets/curefoods.png';
import rebelFoodsLogo from '../../assets/rebel_foods.png';
import saladDaysLogo from '../../assets/salad_days.jpg';
import saffronLogo from '../../assets/saffron.png';
import sandwichVideo from '../assets/sandwich.mp4';
import sink1Video from '../assets/sink-1.mp4';
import sink2Video from '../assets/sink-2.mp4';
import areaCleanVideo from '../assets/area-clean.mp4';
import '../App.css';
import '../components/Carousel.css';

const offerings = [
    {
        title: 'Robotic Food Preparation',
        summary:
            'Autonomous food preparation (cutting, cooking, plating) for your kitchen, your recipes, and your ingredients.',
        highlights: [],
        video: sandwichVideo
    },
    {
        title: 'Adapting to existing infra',
        summary: 'Seamless integration with your current kitchen layout and equipment, minimizing retrofit costs and downtime.',
        highlights: [],
        video: sink1Video
    },
    {
        title: 'Cleaning Utensils after use',
        summary: 'Automated sanitation cycles ensure tools are washed, sterilized, and returned to service instantly, maintaining hygiene without manual labor.',
        highlights: [],
        video: sink2Video
    },
    {
        title: 'Process Area Cleaning',
        summary: 'Automated cleaning of work surfaces, preparation areas, and equipment ensures consistent hygiene standards and compliance with food safety regulations throughout your kitchen operations.',
        highlights: [],
        video: areaCleanVideo
    }
];

const researchPapers = [
    {
        id: 1,
        title: 'Robix: A Unified Model for Robot Interaction, Reasoning and Planning',
        authors: 'Huang Fang, Mengxi Zhang, Heng Dong, Wei Li, Zixuan Wang, Qifeng Zhang, Xueyun Tian, Yucheng Hu, Hang Li',
        url: 'https://arxiv.org/abs/2509.01106',
        abstract: 'A unified model that integrates robot reasoning, task planning, and natural language interaction within a single vision-language architecture.'
    },
    {
        id: 2,
        title: 'VLASH: Real-Time VLAs via Future-State-Aware Asynchronous Inference',
        authors: 'Jiaming Tang, Yufei Sun, Yilong Zhao, Shang Yang, Yujun Lin, Zhuoyang Zhang, James Hou, Yao Lu, Zhijian Liu, Song Han',
        url: 'https://arxiv.org/abs/2512.01031',
        abstract: 'A general asynchronous inference framework for Vision-Language-Action models that delivers smooth, accurate, and fast reaction control.'
    },
    {
        id: 3,
        title: 'Hand-Object Interaction Pretraining from Videos',
        authors: 'Himanshu Gaurav Singh, Antonio Loquercio, Carmelo Sferrazza, Jane Wu, Haozhi Qi, Pieter Abbeel, Jitendra Malik',
        url: 'https://arxiv.org/abs/2409.08273',
        abstract: 'An approach to learn general robot manipulation priors from 3D hand-object interaction trajectories.'
    }
];

const testimonials = [
    {
        brand: 'Curefoods',
        quote: '"MrFood solved the problem of staff unavailability"',
        role: 'Director of Automation',
        logo: curefoodsLogo
    },
    {
        brand: 'Rebel Foods',
        quote: '"Taste and quality consistency is unmatched with MrFood"',
        role: 'Head of Culinary Systems',
        logo: rebelFoodsLogo
    },
    {
        brand: 'Salad Days',
        quote: '"I use the robot arm to prepare food during day time and cleaning and maintenance during night time"',
        role: 'Operations Lead',
        logo: saladDaysLogo
    },
    {
        brand: 'Saffron',
        quote: '"I am able to run my factory outlet 24/7 with these robots doing late night shifts with the store operator"',
        role: 'Regional Manager',
        logo: saffronLogo
    }
];

export function Home() {
    const offeringsTrackRef = useRef<HTMLDivElement>(null);
    const researchTrackRef = useRef<HTMLDivElement>(null);
    const testimonialTrackRef = useRef<HTMLDivElement>(null);

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
            <a
                className="demo-pill hero-button"
                href="https://calendly.com/deepanshu-mrfood/30min"
                target="_blank"
                rel="noopener noreferrer"
            >
                Request Demo
            </a>
            <header className="hero">
                <video className="hero-media" autoPlay loop muted playsInline preload="auto">
                    <source src={sink2Video} type="video/mp4" />
                </video>
                <div className="hero-overlay" />
                <div className="hero-content">
                    <h1 className="hero-title">
                        Designed for real<br />
                        kitchen workflows
                    </h1>
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
                        <h2>Kitchens Powered by Physical Intelligence Models</h2>
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

                <section className="testimonials" aria-label="Testimonials">
                    <div className="section-heading">
                        <h2>Hear from our <span style={{ color: '#C6FE1E' }}>customers</span></h2>
                    </div>
                    <div className="testimonial-carousel">
                        <button
                            className="testimonial-nav"
                            aria-label="Previous testimonials"
                            onClick={() => scrollCarousel(testimonialTrackRef, 'left')}
                        >
                            ‹
                        </button>
                        <div className="testimonial-track" id="testimonial-track" ref={testimonialTrackRef} role="list">
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
                                    <div className="testimonial-role">
                                        <p className="testimonial-role-text">{testimonial.role}</p>
                                        <p className="testimonial-brand">{testimonial.brand}</p>
                                    </div>
                                </article>
                            ))}
                        </div>
                        <button
                            className="testimonial-nav"
                            aria-label="Next testimonials"
                            onClick={() => scrollCarousel(testimonialTrackRef, 'right')}
                        >
                            ›
                        </button>
                    </div>
                </section>

                <section className="research" aria-label="Key AI Research">
                    <div className="section-heading">
                        <h2>Key AI <span style={{ color: '#C6FE1E' }}>Research</span></h2>
                    </div>
                    <div className="research-carousel">
                        <button
                            className="research-nav"
                            aria-label="Previous research papers"
                            onClick={() => scrollCarousel(researchTrackRef, 'left')}
                        >
                            ‹
                        </button>
                        <div className="research-track" id="research-track" ref={researchTrackRef} role="list">
                            {researchPapers.map((paper) => (
                                <article key={paper.id} className="research-card" role="listitem">
                                    <a
                                        href={paper.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="research-link"
                                    >
                                        <h3 className="research-title">{paper.title}</h3>
                                        <p className="research-authors">{paper.authors}</p>
                                        <p className="research-abstract">{paper.abstract}</p>
                                        <div className="research-footer">
                                            <span className="research-link-text">Read Paper</span>
                                            <ArrowRight className="research-arrow" aria-hidden="true" />
                                        </div>
                                    </a>
                                </article>
                            ))}
                        </div>
                        <button
                            className="research-nav"
                            aria-label="Next research papers"
                            onClick={() => scrollCarousel(researchTrackRef, 'right')}
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
