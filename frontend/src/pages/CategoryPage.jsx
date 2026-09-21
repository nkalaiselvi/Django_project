import { Link, useParams } from 'react-router-dom';
import anniversaryCard3 from '../assets/10th anniv.png';
import anniversaryCard1 from '../assets/1stanniversary.png';
import anniversaryCard4 from '../assets/25thanniv.png';
import anniversaryCard2 from '../assets/5thanniv.png';
import saveTheDateCard3 from '../assets/animatesavedate.png';
import whatsappAnimated from '../assets/animatewhatapp.png';
import whatsappAudio from '../assets/audiowhatappcard.png';
import birthdayCard1 from '../assets/birthday_invitation _1.png';
import birthdayCard2 from '../assets/Birthday_invitation_2.png';
import birthdayCard3 from '../assets/birthday_invitation_3.png';
import birthdayCard4 from '../assets/birthday_invitation_4.png';
import boxCard1 from '../assets/boxcard1.png';
import boxCard2 from '../assets/boxcard2.png';
import boxCard3 from '../assets/boxcard3.png';
import boxCard4 from '../assets/boxcard4.png';
import bridalCard1 from '../assets/bridal.png';
import bridalCard4 from '../assets/bridal_haldi.png';
import bridalCard2 from '../assets/bridalmehandi.png';
import bridalCard3 from '../assets/bridalsangeet.png';
import saveTheDateCard1 from '../assets/calssic savedate.png';
import earCard4 from '../assets/earfamily.png';
import earCard2 from '../assets/earmodern.png';
import earCard3 from '../assets/earprecing.png';
import earCard1 from '../assets/eartamil.png';
import houseWarmingCard1 from '../assets/gireha.png';
import pubertyCard3 from '../assets/halfsaree_puberty.png';
import luxuryCard4 from '../assets/luxdesigner.png';
import luxuryCard1 from '../assets/luxgoldfoil.png';
import luxuryCard3 from '../assets/luxgoldsilk.png';
import luxuryCard2 from '../assets/luxlasercut.png';
import saveTheDateCard4 from '../assets/minimal savedate.png';
import houseWarmingCard3 from '../assets/modern housewarming.png';
import engagementCard4 from '../assets/modern.png';
import beachCard3 from '../assets/nautical.png';
import saveTheDateCard2 from '../assets/photosavedate.png';
import pubertyCard2 from '../assets/puberty_1.png';
import engagementCard1 from '../assets/ring.png';
import pubertyCard4 from '../assets/ritukala_puberty.png';
import engagementCard2 from '../assets/roka.png';
import engagementCard3 from '../assets/sagai.png';
import traditionalScrollCard from '../assets/samll2.png';
import houseWarmingCard2 from '../assets/satya.png';
import beachCard4 from '../assets/seashell.png';
import singleSheetCard1 from '../assets/singlesheet_1.png';
import singleSheetCard2 from '../assets/singlesheet_2.png';
import singleSheetCard3 from '../assets/singlesheet_3.png';
import singleSheetCard4 from '../assets/singlesheet_4.png';
import classicScrollCard from '../assets/small1.png';
import minimalScrollCard from '../assets/small3.png';
import fabricScrollCard from '../assets/small4.png';
import beachCard2 from '../assets/sunset.png';
import pubertyCard1 from '../assets/traditional_puberty.png';
import houseWarmingCard4 from '../assets/traditionalhouse warming.png';
import beachCard1 from '../assets/Tropicalbeach.png';
import whatsappVideo from '../assets/whatappvideo.png';
import whatsappStatic from '../assets/whatsappstatic.png';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import './CategoryPage.css';

const pageData = {
  // ===== SPECIAL OCCASIONS =====
  birthday: {
    title: 'Birthday Invitations',
    items: [
      { name: 'Kids Birthday', image: birthdayCard1 },
      { name: 'Milestone Birthday', image: birthdayCard2 },
      { name: 'Surprise Party', image: birthdayCard3 },
      { name: 'Themed Birthday', image: birthdayCard4 },
    ],
  },
  puberty: {
    title: 'Puberty Cards',
    items: [
      { name: 'Traditional Puberty', image: pubertyCard1 },
      { name: 'Modern Puberty', image: pubertyCard2 },
      { name: 'Half Saree Function', image: pubertyCard3 },
      { name: 'Ritu Kala Samskara', image: pubertyCard4 },
    ],
  },
  luxury: {
    title: 'Luxury Invitations',
    items: [
      { name: 'Gold Foil', image: luxuryCard1 },
      { name: 'Laser Cut', image: luxuryCard2 },
      { name: 'Silk Card', image: luxuryCard3 },
      { name: 'Designer Edition', image: luxuryCard4 },
    ],
  },
  'ear-boring': {
    title: 'Ear Boring Cards',
    items: [
      { name: 'Traditional', image: earCard1 },
      { name: 'Modern', image: earCard2 },
      { name: 'Baby Ceremony', image: earCard3 },
      { name: 'Family Function', image: earCard4 },
    ],
  },
  engagement: {
    title: 'Engagement Cards',
    items: [
      { name: 'Ring Ceremony', image: engagementCard1 },
      { name: 'Roka Ceremony', image: engagementCard2 },
      { name: 'Sagai Invitation', image: engagementCard3 },
      { name: 'Modern Engagement', image: engagementCard4 },
    ],
  },
  'house-warming': {
    title: 'House Warming',
    items: [
      { name: 'Griha Pravesh', image: houseWarmingCard1 },
      { name: 'Satyanarayan Pooja', image: houseWarmingCard2 },
      { name: 'Modern Housewarming', image: houseWarmingCard3 },
      { name: 'Traditional', image: houseWarmingCard4 },
    ],
  },
  anniversary: {
    title: 'Anniversary Cards',
    items: [
      { name: '1st Anniversary', image: anniversaryCard1 },
      { name: '5th Anniversary', image: anniversaryCard2 },
      { name: '10th Anniversary', image: anniversaryCard3 },
      { name: '25th Anniversary', image: anniversaryCard4 },
    ],
  },

  // ===== THEME CARDS =====
  beach: {
    title: 'Beach Theme Cards',
    items: [
      { name: 'Tropical Beach', image: beachCard1 },
      { name: 'Sunset Beach', image: beachCard2 },
      { name: 'Nautical Theme', image: beachCard3 },
      { name: 'Seashell Design', image: beachCard4 },
    ],
  },
  bride: {
    title: 'Bride Theme Cards',
    items: [
      { name: 'Floweral Function', image: bridalCard1 },
      { name: 'Mehendi', image: bridalCard2 },
      { name: 'Sangeet', image: bridalCard3 },
      { name: 'Haldi', image: bridalCard4 },
    ],
  },
  box: {
    title: 'Box Cards',
    items: [
      { name: 'Premium Box', image: boxCard1 },
      { name: 'Gift Box Card', image: boxCard2 },
      { name: 'Wooden Box', image: boxCard3 },
      { name: 'Luxury Box', image: boxCard4 },
    ],
  },
  'single-sheet': {
    title: 'Single Sheet Cards',
    items: [
      { name: 'Minimal Design', image: singleSheetCard1 },
      { name: 'Classic Single', image: singleSheetCard2 },
      { name: 'Modern Sheet', image: singleSheetCard3 },
      { name: 'Premium Sheet', image: singleSheetCard4 },
    ],
  },

  // ===== SCROLL INVITATION =====
  'small-size': {
    title: 'Small Size Scroll',
    items: [
      { name: 'Classic', image: classicScrollCard },
      { name: 'Traditional', image: traditionalScrollCard },
      { name: 'Minimal', image: minimalScrollCard },
      { name: 'Fabric', image: fabricScrollCard },
    ],
  },
  'scroll-box': {
    title: 'Box Scroll',
    items: [
      { name: 'Wooden Box Scroll', emoji: '📦', color: '#F5E5D9' },
      { name: 'Gift Box Scroll', emoji: '🎁', color: '#FFE5F0' },
      { name: 'Premium Box', emoji: '👑', color: '#FFF0D9' },
      { name: 'Luxury Box Scroll', emoji: '💎', color: '#E5F5FF' },
    ],
  },
  only: {
    title: 'Only Scroll',
    items: [
      { name: 'Traditional Scroll', emoji: '📜', color: '#FFF5E0' },
      { name: 'Modern Scroll', emoji: '📃', color: '#F0F5FF' },
      { name: 'Classic Scroll', emoji: '🗞️', color: '#F5F5F5' },
      { name: 'Elegant Scroll', emoji: '✨', color: '#FFF0F5' },
    ],
  },
  'high-end': {
    title: 'High End Scroll',
    items: [
      { name: 'Royal Scroll', emoji: '👑', color: '#FFF0D9' },
      { name: 'Designer Scroll', emoji: '💎', color: '#E5F5FF' },
      { name: 'Premium Silk Scroll', emoji: '🧵', color: '#F5E5FF' },
      { name: 'Gold Scroll', emoji: '✨', color: '#FFF5D9' },
    ],
  },

  // ===== DIGITAL INVITATION =====
  whatsapp: {
    title: 'Whatsapp Cards',
    items: [
      { name: 'Animated WhatsApp Card', image: whatsappAnimated },
      { name: 'Static WhatsApp Card', image: whatsappStatic },
      { name: 'Video WhatsApp Invite', image: whatsappVideo },
      { name: 'Audio WhatsApp Card', image: whatsappAudio },
    ],
  },
    'save-the-date': {
    title: 'Save the Date Cards',
    items: [
        { name: 'Classic Save the Date', image: saveTheDateCard1 },
        { name: 'Photo Save the Date', image: saveTheDateCard2 },
        { name: 'Animated Save the Date', image: saveTheDateCard3 },
        { name: 'Minimal Save the Date', image: saveTheDateCard4 },
    ],
  },
};

function CategoryPage() {
  const { slug } = useParams();
  const page = pageData[slug] || pageData['small-size'];

  return (
    <div>
      <Navbar />
      <main className="cat-section">
        <h1 className="cat-title">{page?.title || 'Invitation Cards'}</h1>

        {page ? (
          <div className="cat-grid">
            {page.items.map((item) => (
<article className="cat-card" key={item.name}>
  {item.image ? (
    <img src={item.image} alt={item.name} className="cat-card-img" />
  ) : (
    <div
      className="cat-card-emoji"
      style={{ backgroundColor: item.color }}
      aria-hidden="true"
    >
      {item.emoji}
    </div>
  )}
  <p className="cat-card-name">{item.name}</p>
</article>
            ))}
          </div>
        ) : (
          <p className="cat-empty">Choose an invitation category to continue.</p>
        )}

        <div className="cat-back">
          <Link to="/">Back to Home</Link>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default CategoryPage;