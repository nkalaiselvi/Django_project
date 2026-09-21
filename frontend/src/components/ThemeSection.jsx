import beachImg from '../assets/Beach_Theme.png';
import birdsImg from '../assets/Brids_theme.png';
import palaceImg from '../assets/Palace_theme.png';
import './ThemeSection.css';

function ThemeSection() {
  const themes = [
    { id: 1, name: 'Beach Theme Cards', image: beachImg },
    { id: 2, name: 'Birds Theme Cards', image: birdsImg },
    { id: 3, name: 'Palace Theme Cards', image: palaceImg },
  ];

  return (
    <section className="theme-section">
      <h2 className="theme-title">Theme Based Invitation</h2>
      <p className="theme-subtitle">Theme Based Invitation</p>

      <div className="theme-grid">
        {themes.map((item) => (
          <div key={item.id} className="theme-card">
            <img src={item.image} alt={item.name} />
            <p className="theme-name">{item.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ThemeSection;