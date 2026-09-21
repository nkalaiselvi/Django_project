import christianImg from '../assets/Chirstian-wedding.png';
import hinduImg from '../assets/Hindu-wedding.png';
import interfaithImg from '../assets/Interfaith-wedding.png';
import muslimImg from '../assets/Muslim-wedding.png';
import './PromoSection.css';

function PromoSection() {
  const collections = [
    { id: 1, name: 'Hindu Invitation Collections', image: hinduImg },
    { id: 2, name: 'Christian Invitation Collections', image: christianImg },
    { id: 3, name: 'Muslim Invitation Collections', image: muslimImg },
    { id: 4, name: 'Interfaith Invitation Collections', image: interfaithImg },
  ];

  return (
    <section className="promo-section">

      <div className="promo-summer">
        <div className="promo-summer-overlay">
          <div className="promo-summer-left">
            <h2 className="promo-summer-title">Summer</h2>
          </div>

          <div className="promo-summer-right">
            <ul className="promo-tiers">
              <li><strong>100 cards</strong> – 10% Off</li>
              <li><strong>200 cards</strong> – 15% Off</li>
              <li><strong>300 cards</strong> – 20% Off</li>
              <li><strong>400 cards</strong> – 25% Off</li>
              <li><strong>500 cards</strong> – 30% Off</li>
            </ul>

            <button className="promo-stock-btn">
              Stock Clearance – 40% to 60% off
            </button>

            <p className="promo-note">
              This offer is not applicable on customized card, E-cards and Luxury boxes.
            </p>
          </div>
        </div>
      </div>

      <div className="promo-collections">
        {collections.map((item) => (
          <div key={item.id} className="promo-collection-card">
            <img src={item.image} alt={item.name} />
            <p className="promo-collection-name">{item.name}</p>
            <button className="promo-buy-btn">Buy Now</button>
          </div>
        ))}
      </div>

    </section>
  );
}

export default PromoSection;