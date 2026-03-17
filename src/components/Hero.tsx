import { motion } from "framer-motion";
import { Star, Calendar, MessageCircle, CheckCircle2, ChevronDown } from "lucide-react";

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay },
});

const slideRight = (delay: number) => ({
  initial: { opacity: 0, x: 60 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.6, delay },
});

const trustBadges = [
  "Collection & Delivery Available",
  "Transparent Flat Pricing",
  "Hygienic Cleaning Process",
  "Serving All of Centurion",
];

const stats = [
  { value: "100%", label: "5-STAR REVIEWS" },
  { value: "4+", label: "SERVICES OFFERED" },
  { value: "R80", label: "STARTING PRICE" },
];

const Hero = () => {
  const scrollToBooking = () => {
    document.querySelector("#booking")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{
        background: `
          radial-gradient(ellipse 70% 70% at 80% 50%, rgba(26,58,143,0.25) 0%, transparent 60%),
          radial-gradient(ellipse 50% 80% at 10% 80%, rgba(37,99,235,0.1) 0%, transparent 50%),
          hsl(var(--navy-dark))
        `,
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-[rgba(13,27,42,0.62)]" />

      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-[5%] pt-32 pb-20 flex items-center">
        {/* Left content */}
        <div className="max-w-[700px] max-lg:mx-auto max-lg:text-center">
          <motion.div {...fadeUp(0.1)}>
            <span className="inline-flex items-center gap-2 bg-[rgba(37,99,235,0.15)] border border-[rgba(37,99,235,0.35)] px-4 py-[7px] rounded-full text-[0.78rem] font-body font-semibold tracking-[1px] text-blue-light uppercase">
              <Star size={14} fill="hsl(var(--gold))" stroke="hsl(var(--gold))" /> Centurion's 5-Star Rated Laundromat
            </span>
          </motion.div>

          <motion.h1
            {...fadeUp(0.2)}
            className="font-display mt-6 tracking-[2px]"
            style={{ fontSize: "clamp(3rem, 5.5vw, 5rem)", lineHeight: 1.0 }}
          >
            <span className="text-white">Centurion's Trusted</span>
            <br />
            <span className="text-white">Laundromat &</span>
            <br />
            <span className="text-blue-light">Sneaker Care</span>
          </motion.h1>

          <motion.p
            {...fadeUp(0.3)}
            className="mt-6 text-white/[0.65] text-[1.05rem] leading-[1.7] max-w-[560px] font-body max-lg:mx-auto"
          >
            Professional wash and fold, ironing, sneaker cleaning and carpet cleaning, with convenient collection and delivery throughout Centurion, Wierdapark, Eldoraigne, Rooihuiskraal, Midstream and surrounding areas.
          </motion.p>

          <motion.div {...fadeUp(0.4)} className="mt-8 flex flex-wrap gap-4 max-lg:justify-center max-sm:flex-col">
            <button
              onClick={scrollToBooking}
              className="inline-flex items-center justify-center gap-2 bg-blue-bright text-white font-body font-bold px-8 py-4 rounded-lg shadow-[0_8px_30px_rgba(37,99,235,0.4)] hover:-translate-y-[2px] hover:shadow-[0_12px_40px_rgba(37,99,235,0.5)] transition-all"
            >
              <Calendar size={18} /> Schedule My Pickup
            </button>
            <a
              href="https://wa.me/27796388572"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 border-[1.5px] border-white/30 text-white font-body font-bold px-8 py-4 rounded-lg hover:border-blue-light hover:text-blue-light transition-colors"
            >
              <MessageCircle size={18} /> WhatsApp Us
            </a>
          </motion.div>

          <motion.div {...fadeUp(0.5)} className="mt-8 flex flex-wrap gap-4 max-lg:justify-center">
            {trustBadges.map((badge) => (
              <div key={badge} className="flex items-center gap-2">
                <CheckCircle2 size={16} className="text-blue-light" />
                <span className="text-white/[0.55] text-[0.82rem] font-body">{badge}</span>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Right stat cards - desktop only */}
        <div className="hidden lg:flex flex-col gap-4 absolute right-[5%] top-1/2 -translate-y-1/2">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              {...slideRight(0.3 + i * 0.15)}
              className="bg-white/[0.06] backdrop-blur-[10px] border border-white/[0.1] rounded-[14px] p-5 px-6 text-center min-w-[140px]"
            >
              <div className="font-display text-[2.5rem] text-blue-light leading-none tracking-[1px]">{stat.value}</div>
              <div className="text-white/50 text-[0.72rem] font-body mt-2 uppercase tracking-[1px]">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce-scroll">
        <ChevronDown size={24} className="text-white/40" />
      </div>
    </section>
  );
};

export default Hero;
