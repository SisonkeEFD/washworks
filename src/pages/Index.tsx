import { lazy, Suspense } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TickerStrip from "@/components/TickerStrip";
import Services from "@/components/Services";

// Defer below-the-fold sections to reduce initial JS payload
const Pricing = lazy(() => import("@/components/Pricing"));
const HowItWorks = lazy(() => import("@/components/HowItWorks"));
const Gallery = lazy(() => import("@/components/Gallery"));
const Areas = lazy(() => import("@/components/Areas"));
const Reviews = lazy(() => import("@/components/Reviews"));
const Booking = lazy(() => import("@/components/Booking"));
const Corporate = lazy(() => import("@/components/Corporate"));
const FAQ = lazy(() => import("@/components/FAQ"));
const Footer = lazy(() => import("@/components/Footer"));
const FloatingButtons = lazy(() => import("@/components/FloatingButtons"));

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <TickerStrip />
      <Services />
      <Suspense fallback={null}>
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
      </Suspense>
    </div>
  );
};

export default Index;
