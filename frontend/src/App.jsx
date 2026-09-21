import CategoryGrid from './components/Categorygrid';
import Footer from './components/Footer';
import Hero from './components/Hero';
import HowItWorks from './components/HowItWorks';
import Navbar from './components/Navbar';
import OffersBanner from './components/OffersBanner';
import PromoSection from './components/PromoSection';
import Testimonials from './components/Testimonials';
import ThemeSection from './components/ThemeSection';

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <CategoryGrid />
      <ThemeSection />
      <OffersBanner />
      <PromoSection />
      <Testimonials />
      <HowItWorks />
      <Footer />
    </div>
  );
}

export default App;