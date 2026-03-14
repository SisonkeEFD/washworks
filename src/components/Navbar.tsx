import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
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
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      {/* Top bar */}
      <div className="hidden lg:block fixed top-0 left-0 right-0 z-[1001] h-8 bg-blue-primary text-white text-center text-xs font-body font-medium leading-8">
        <a href="tel:+27796388572" className="hover:underline">📞 079 638 8572</a>
        <span className="mx-2">|</span>
        <a href="mailto:info@thewashworks.co.za" className="hover:underline">✉️ info@thewashworks.co.za</a>
        <span className="mx-2">|</span>
        <span>Mon–Fri: 8am–6pm · Sat: 9am–2pm</span>
      </div>

      {/* Navbar */}
      <nav
        className={`fixed left-0 right-0 z-[1000] h-[70px] flex items-center transition-all duration-300 ${
          scrolled
            ? "bg-white shadow-[0_2px_20px_rgba(0,0,0,0.08)]"
            : "bg-[rgba(13,27,42,0.96)] backdrop-blur-[12px] border-b border-white/[0.08]"
        }`}
        style={{ top: "var(--nav-top, 0px)" }}
      >
        <div className="w-full max-w-7xl mx-auto px-4 flex items-center justify-between">
          {/* Logo */}
          <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
            <img src={logoBlue} alt="The Wash Works" className="w-[130px] lg:w-[160px]" />
          </button>

          {/* Desktop links */}
          <div className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollTo(link.href)}
                className={`font-body font-medium text-[0.85rem] tracking-[0.5px] transition-colors hover:opacity-80 ${
                  scrolled ? "text-blue-primary" : "text-white"
                }`}
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* Desktop CTA */}
          <button
            onClick={() => scrollTo("#booking")}
            className="hidden lg:block bg-blue-bright text-white font-body font-bold text-sm px-[22px] py-[10px] rounded-lg hover:-translate-y-[1px] transition-transform"
          >
            📅 Book a Pickup
          </button>

          {/* Mobile hamburger */}
          <button
            className="lg:hidden flex flex-col gap-[5px]"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {[0, 1, 2].map((i) => (
              <span
                key={i}
                className={`block w-6 h-[2px] transition-all ${scrolled ? "bg-blue-primary" : "bg-white"}`}
              />
            ))}
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
                className="text-white font-body font-medium text-base text-left"
              >
                {link.label}
              </button>
            ))}
            <button
              onClick={() => scrollTo("#booking")}
              className="bg-blue-bright text-white font-body font-bold text-sm px-6 py-3 rounded-lg mt-2"
            >
              📅 Book a Pickup
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

// Set nav top offset based on top bar
if (typeof window !== "undefined") {
  const updateNavTop = () => {
    document.documentElement.style.setProperty(
      "--nav-top",
      window.innerWidth >= 1024 ? "32px" : "0px"
    );
  };
  updateNavTop();
  window.addEventListener("resize", updateNavTop);
}

export default Navbar;
