import './OffersBanner.css';

function OffersBanner() {
  return (
    <section className="offers-section">
      <div className="offers-row">

        {/* Left Banner — light purple */}
        <div className="offer-card offer-light">
          <h3 className="offer-heading">
            Join our love-letters list and enjoy
            <br />
            <span>20% off your first set of wedding invitations.</span>
          </h3>
          <p className="offer-sub">
            Simple, beautiful, and easy on your budget.
          </p>
        </div>

        {/* Right Banner — dark brown */}
        <div className="offer-card offer-dark">
          <div className="offer-badge">Get 20% Off Your First Order!</div>
          <div className="offer-badge offer-badge-small">Early Bird Bonus</div>
          <p className="offer-sub offer-sub-light">
            Planning ahead pays off! Book your order 60+ days in advance and
            get a free set of 20 extra invites for last-minute guests.
          </p>
        </div>

      </div>
    </section>
  );
}

export default OffersBanner;