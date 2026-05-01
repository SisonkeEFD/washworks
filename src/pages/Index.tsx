import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TickerStrip from "@/components/TickerStrip";
import Services from "@/components/Services";
import Pricing from "@/components/Pricing";
import HowItWorks from "@/components/HowItWorks";
import Gallery from "@/components/Gallery";
import Areas from "@/components/Areas";
import Reviews from "@/components/Reviews";
import Booking from "@/components/Booking";
import Corporate from "@/components/Corporate";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <TickerStrip />
      <Services />
      <Pricing />
      <HowItWorks />
      <Gallery />
      <Areas />
      <Reviews />
      <Booking />
      <Corporate />
      <FAQ />
      <Footer />
      <FloatingButtons />
    </div>
  );
};

export default Index;
