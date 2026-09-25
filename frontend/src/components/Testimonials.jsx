import { useEffect, useState } from 'react';
import { fetchReviews } from '../api/client';
import './Testimonials.css';

function Testimonials() {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchReviews()
      .then((data) => {
        setReviews(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setError('Failed to load reviews');
        setLoading(false);
      });
  }, []);

  if (loading)
    return (
      <section className="testimonials-section">
        <p style={{ textAlign: 'center', padding: '40px' }}>Loading...</p>
      </section>
    );

  if (error)
    return (
      <section className="testimonials-section">
        <p style={{ textAlign: 'center', padding: '40px', color: 'red' }}>{error}</p>
      </section>
    );

  return (
    <section className="testimonials-section">
      <h2 className="testimonials-title">WHAT CLIENT SAY ABOUT US</h2>
      <div className="testimonials-grid">
        {reviews.map((review) => (
          <div key={review.id} className="testimonial-card">
            <div className="testimonial-avatar">👤</div>
            <h3 className="testimonial-name">{review.name}</h3>
            <p className="testimonial-message">{review.message}</p>
            <div className="testimonial-stars">{'★'.repeat(review.rating)}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Testimonials;