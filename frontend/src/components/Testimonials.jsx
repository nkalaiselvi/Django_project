import './Testimonial.css';

function Testimonials() {
  const reviews = [
    {
      id: 1,
      name: 'James',
      avatar: '👨',
      message:
        'Absolutely beautiful invites! We were blown away by the quality and elegance of our wedding invitations. The paper felt luxurious, and the printing was flawless. Everyone keeps asking where we got them from!',
    },
    {
      id: 2,
      name: 'Harshitha',
      avatar: '👩',
      message:
        'Customized to perfection. We wanted something simple but unique, and they absolutely nailed it. Colors, fonts, wording — everything was exactly how we imagined. Fast turnaround too!',
    },
    {
      id: 3,
      name: 'Santhosh',
      avatar: '🧑',
      message:
        'Great quality at a great price. We were on a tight budget, but didn\u2019t want to compromise on style. These invites were not only affordable but looked premium. Arrived quickly and packaged beautifully.',
    },
  ];

  return (
    <section className="testimonials-section">
      <h2 className="testimonials-title">WHAT CLIENT SAY ABOUT US</h2>

      <div className="testimonials-grid">
        {reviews.map((review) => (
          <div key={review.id} className="testimonial-card">
            <div className="testimonial-avatar">{review.avatar}</div>
            <h3 className="testimonial-name">{review.name}</h3>
            <p className="testimonial-message">{review.message}</p>
            <div className="testimonial-stars">★★★★★</div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Testimonials;