import './Hero.css';

function Hero() {
  return (
    <section className="hero">
      <div className="hero-decor">
        <span className="leaf leaf-1">🌿</span>
        <span className="leaf leaf-2">🌿</span>
        <span className="leaf leaf-3">🍃</span>
        <span className="leaf leaf-4">🍃</span>
      </div>

      <div className="hero-card-wrapper">
        <div className="hero-card-back"></div>
        <div className="hero-card">
          <h1>Your Love Story Begins Here</h1>
          <p>
            Create stunning wedding invitations that capture the essence of your
            special day. Elegant designs, heartfelt words, and everything you
            need to make your first impression unforgettable.
          </p>
          <button className="hero-btn">Get your style</button>
        </div>
      </div>
    </section>
  );
}

export default Hero;