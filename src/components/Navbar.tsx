import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, Mail, Clock, Menu, X } from "lucide-react";
import logoWhite from "@/assets/TWWL-06.png";
import logoBlue from "@/assets/TWWL-01.png";

const navLinks = [
  { label: "Services", href: "#services" },
  { label: "Pricing", href: "#pricing" },
  { label: "Areas", href: "#areas" },
  { label: "Reviews", href: "#reviews" },
  { label: "Corporate", href: "#corporate" },
  { label: "FAQ", href: "#faq" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    let ticking = false;
    let lastScrolled = false;
    const update = () => {
      const next = window.scrollY > 80;
      if (next !== lastScrolled) {
        lastScrolled = next;
        setScrolled(next);
      }
      ticking = false;
    };
    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        window.requestAnimationFrame(update);
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (href: string) => {
    setMobileOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      {/* Top bar - desktop only */}
      <div className="hidden md:flex fixed top-0 left-0 right-0 z-[1001] h-9 bg-blue-primary text-white items-center justify-center gap-4 font-body font-medium text-[0.78rem]">
        <a href="tel:+27796388572" className="inline-flex items-center gap-1.5 hover:opacity-80 transition-opacity">
          <Phone size={12} /> 079 638 8572
        </a>
        <span className="text-white/40">·</span>
        <a href="mailto:thewashworkslaundry@gmail.com" className="inline-flex items-center gap-1.5 hover:opacity-80 transition-opacity">
          <Mail size={12} /> thewashworkslaundry@gmail.com
        </a>
        <span className="text-white/40">·</span>
        <span className="inline-flex items-center gap-1.5">
          <Clock size={12} /> Mon-Fri: 8am-6pm · Sat: 9am-2pm
        </span>
      </div>

      {/* Navbar */}
      <nav
        className={`fixed left-0 right-0 z-[1000] h-[70px] flex items-center transition-all duration-300 md:top-9 top-0 ${
          scrolled
            ? "bg-white shadow-[0_2px_20px_rgba(0,0,0,0.08)]"
            : "bg-[rgba(13,27,42,0.96)] backdrop-blur-[12px] border-b border-white/[0.08]"
        }`}
      >
        <div className="w-full max-w-7xl mx-auto px-[5%] flex items-center justify-between">
          <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} className="flex-shrink-0">
            <img
              src={scrolled ? logoBlue : logoWhite}
              alt="The Wash Works"
              className={`w-auto max-lg:h-11 ${scrolled ? "h-[52px]" : "h-14"} transition-all duration-300`}
            />
          </button>

          {/* Desktop links */}
          <div className="hidden lg:flex items-center gap-8 ml-10">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollTo(link.href)}
                className={`font-body font-semibold text-[0.85rem] tracking-[0.5px] transition-colors hover:opacity-80 ${
                  scrolled ? "text-navy-dark" : "text-white"
                }`}
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* Desktop CTA */}
          <button
            onClick={() => scrollTo("#booking")}
            className="hidden lg:block bg-blue-bright text-white font-body font-bold text-[0.85rem] px-[22px] py-[10px] rounded-lg hover:bg-[#1d4ed8] hover:-translate-y-[1px] transition-all"
          >
            Book a Pickup
          </button>

          {/* Mobile hamburger */}
          <button
            className="lg:hidden"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? (
              <X size={22} className={scrolled ? "text-navy-dark" : "text-white"} />
            ) : (
              <Menu size={22} className={scrolled ? "text-navy-dark" : "text-white"} />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="fixed top-[70px] left-0 right-0 z-[999] bg-navy-dark p-6 flex flex-col gap-4 lg:hidden"
          >
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollTo(link.href)}
                className="text-white font-body font-semibold text-base text-left min-h-[48px] flex items-center"
              >
                {link.label}
              </button>
            ))}
            <button
              onClick={() => scrollTo("#booking")}
              className="bg-blue-bright text-white font-body font-bold text-sm px-6 py-3 rounded-lg mt-2 w-full"
            >
              Book a Pickup
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
