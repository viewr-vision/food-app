import { Link } from 'react-router-dom';
import '../App.css';

export function NotFound() {
    return (
        <div className="page">
            <div className="page-content">
                <div style={{ textAlign: 'center', padding: '120px 24px', maxWidth: '600px', margin: '0 auto' }}>
                    <h1 style={{ fontSize: '4rem', marginBottom: '24px', fontWeight: 600 }}>404</h1>
                    <h2 style={{ fontSize: '1.5rem', marginBottom: '16px', color: 'var(--muted)' }}>
                        Page Not Found
                    </h2>
                    <p style={{ marginBottom: '32px', color: 'var(--muted)', lineHeight: 1.7 }}>
                        The page you're looking for doesn't exist or has been moved.
                    </p>
                    <Link
                        to="/"
                        style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '8px',
                            padding: '12px 24px',
                            background: 'var(--white)',
                            color: 'var(--black)',
                            borderRadius: '8px',
                            textDecoration: 'none',
                            fontWeight: 600,
                            transition: 'transform 0.2s ease, box-shadow 0.2s ease'
                        }}
                    >
                        Go to Home
                    </Link>
                </div>
            </div>
        </div>
    );
}
