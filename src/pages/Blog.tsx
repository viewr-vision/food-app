import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { blogPosts } from '../data';
import '../App.css';

export function Blog() {
    return (
        <div className="page">
            <div className="page-content">
                <section className="blog" aria-label="Blog">
                    <div className="section-heading">
                        <h1>Insights and updates from our team.</h1>
                    </div>
                    <div className="blog-list">
                        {blogPosts.map((post) => (
                            <Link key={post.id} to={`/blog/${post.id}`} className="blog-item-link">
                                <article className="blog-item">
                                    <div className="blog-item-header">
                                        <span className="blog-category">{post.category}</span>
                                        <span className="blog-date">{post.date}</span>
                                    </div>
                                    <div className="blog-item-content">
                                        <h3 className="blog-title">{post.title}</h3>
                                        <p className="blog-excerpt">{post.excerpt}</p>
                                    </div>
                                    <div className="blog-item-footer">
                                        <span className="blog-read-time">{post.readTime}</span>
                                        <ArrowRight className="blog-arrow" aria-hidden="true" />
                                    </div>
                                </article>
                            </Link>
                        ))}
                    </div>
                </section>
            </div>
        </div>
    );
}
