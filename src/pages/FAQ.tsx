import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { faqs } from '../data';
import '../App.css';

export function FAQ() {
    const [openItems, setOpenItems] = useState<Set<number>>(new Set());

    const toggleItem = (id: number) => {
        const newOpenItems = new Set(openItems);
        if (newOpenItems.has(id)) {
            newOpenItems.delete(id);
        } else {
            newOpenItems.add(id);
        }
        setOpenItems(newOpenItems);
    };

    return (
        <div className="page">
            <div className="page-content">
                <section className="faq" aria-label="Frequently Asked Questions">
                    <div className="section-heading">
                        <h1>Frequently Asked Questions</h1>
                    </div>
                    <div className="faq-list">
                        {faqs.map((faq) => (
                            <article key={faq.id} className="faq-item">
                                <button
                                    className="faq-question"
                                    onClick={() => toggleItem(faq.id)}
                                    aria-expanded={openItems.has(faq.id)}
                                    aria-controls={`faq-answer-${faq.id}`}
                                >
                                    <span className="faq-question-text">{faq.question}</span>
                                    <ChevronDown
                                        className={`faq-chevron ${openItems.has(faq.id) ? 'faq-chevron-open' : ''}`}
                                        aria-hidden="true"
                                    />
                                </button>
                                <div
                                    id={`faq-answer-${faq.id}`}
                                    className={`faq-answer ${openItems.has(faq.id) ? 'faq-answer-open' : ''}`}
                                    aria-hidden={!openItems.has(faq.id)}
                                >
                                    <p>{faq.answer}</p>
                                </div>
                            </article>
                        ))}
                    </div>
                </section>
            </div>
        </div>
    );
}
