import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AuthorityStrip from "@/components/AuthorityStrip";
import AboutSection from "@/components/AboutSection";
import SpeakingTopics from "@/components/SpeakingTopics";
import Testimonials from "@/components/Testimonials";
import AudienceImpact from "@/components/AudienceImpact";
import WhoHiresMe from "@/components/WhoHiresMe";
import BookingSection from "@/components/BookingSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <AuthorityStrip />
      <AboutSection />
      <SpeakingTopics />
      <Testimonials />
      <AudienceImpact />
      <WhoHiresMe />
      <BookingSection />
      <Footer />
    </div>
  );
};

export default Index;
