import { useParams, Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { blogPosts } from '../data';
import '../App.css';
import './BlogPost.css';

export function BlogPost() {
    const { id } = useParams<{ id: string }>();
    const post = blogPosts.find((p) => p.id === parseInt(id || '0', 10));

    if (!post) {
        return (
            <div className="page">
                <div className="page-content">
                    <div className="blog-post-container">
                        <h1>Post not found</h1>
                        <Link to="/blog">Back to Blog</Link>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="page">
            <div className="page-content">
                <div className="blog-post-container">
                    <Link to="/blog" className="blog-post-back">
                        <ArrowLeft className="back-icon" />
                        Back to Blog
                    </Link>

                    <article className="blog-post">
                        <header className="blog-post-header">
                            <span className="blog-post-category">{post.category}</span>
                            <h1 className="blog-post-title">{post.title}</h1>
                            <div className="blog-post-meta">
                                <span className="blog-post-date">{post.date}</span>
                                <span className="blog-post-separator">•</span>
                                <span className="blog-post-read-time">{post.readTime}</span>
                            </div>
                        </header>

                        <div className="blog-post-content">
                            <p className="blog-post-lead">
                                {post.excerpt}
                            </p>

                            {post.content?.map((block, index) => {
                                if (block.type === 'heading') {
                                    return <h2 key={index}>{block.text}</h2>;
                                }
                                if (block.type === 'subheading') {
                                    return <h3 key={index}>{block.text}</h3>;
                                }
                                return <p key={index}>{block.text}</p>;
                            })}
                        </div>
                    </article>
                </div>
            </div>
        </div>
    );
}
