import { careerOpenings } from '../data';
import '../App.css';

export function Careers() {
    return (
        <div className="page">
            <div className="page-content">
                <section className="careers" aria-label="Careers">
                    <div className="section-heading">
                        <h1>Join our team</h1>
                        <p className="section-copy">
                            Help us build the future of automated food preparation.
                        </p>
                    </div>
                    <div className="careers-list">
                        {careerOpenings.map((job) => (
                            <article key={job.id} className="career-item">
                                <div className="career-item-header">
                                    <div className="career-item-title-section">
                                        <h3 className="career-title">{job.title}</h3>
                                        <div className="career-meta">
                                            <span className="career-department">{job.department}</span>
                                            <span className="career-separator">•</span>
                                            <span className="career-location">{job.location}</span>
                                        </div>
                                    </div>
                                    <span className="career-type">{job.type}</span>
                                </div>
                                <p className="career-description">{job.description}</p>
                                <div className="career-item-footer">
                                    <a
                                        href={`mailto:help@mrfood.ai?subject=${encodeURIComponent(`[Application]: Role: ${job.title}`)}`}
                                        className="career-apply"
                                    >
                                        Apply
                                    </a>
                                </div>
                            </article>
                        ))}
                    </div>
                </section>
            </div>
        </div>
    );
}
