import Hero from "../components/home/Hero";
import PrincipalMessage from "../components/home/PrincipalMessage";
import Highlights from "../components/home/Highlights";
import WhyChooseUs from "../components/home/WhyChooseUs";
import Facilities from "../components/home/Facilities";
import Achievements from "../components/home/Achievements";
import GalleryPreview from "../components/home/GalleryPreview";
import NewsSection from "../components/home/NewsSection";
import EventsSection from "../components/home/EventsSection";
import Testimonials from "../components/home/Testimonials";
import AdmissionCTA from "../components/home/AdmissionCTA";


const Home = () => {
  return (
    <>
      <Hero />
      <PrincipalMessage />
      <Highlights />
      <WhyChooseUs />
      <Facilities />
      <Achievements />
      <GalleryPreview />
      <NewsSection />
      <EventsSection />
      <Testimonials />
      <AdmissionCTA />
    </>
  );
};

export default Home;