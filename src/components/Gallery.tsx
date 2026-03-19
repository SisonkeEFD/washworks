import { useState, useRef, useCallback } from "react";
import { motion } from "framer-motion";
import { ArrowLeftRight, ArrowRight, Calendar } from "lucide-react";

import sneakerBefore from "@/assets/Sneaker_Cleaning_in_Centurion_1.jpg";
import sneakerAfter from "@/assets/Sneaker_Cleaning_in_Centurion_2.jpg";
import leatherBefore from "@/assets/Leather_Shoe_Treatment_1.jpg";
import leatherAfter from "@/assets/Leather_Shoe_Treatment_2.jpg";

const galleryItems = [
  { before: sneakerBefore, after: sneakerAfter, caption: "Sneaker Cleaning in Centurion", cta: "Book Sneaker Cleaning" },
  { before: leatherBefore, after: leatherAfter, caption: "Leather Shoe Treatment", cta: "Book Leather Shoe Treatment" },
  { before: "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=600&q=80", after: "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=600&q=80", caption: "Kids Sneaker Wash", cta: "Book Kids Sneaker Wash" },
  { before: "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=600&q=80", after: "https://images.unsplash.com/photo-1600585152220-90363fe7e115?w=600&q=80", caption: "Carpet Cleaning Centurion", cta: "Book Carpet Cleaning" },
  { before: "https://images.unsplash.com/photo-1582735689369-4fe89db7114c?w=600&q=80", after: "https://images.unsplash.com/photo-1489274495757-95c7c837b101?w=600&q=80", caption: "Wash, Dry & Fold", cta: "Book a Laundry Pickup" },
  { before: "https://images.unsplash.com/photo-1629140727571-9b5c6f6267b4?w=600&q=80", after: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=600&q=80", caption: "Duvet & Blanket Wash", cta: "Book Duvet Cleaning" },
];

const BeforeAfterSlider = ({ before, after, caption, cta }: { before: string; after: string; caption: string; cta: string }) => {
  const [pos, setPos] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);
  const dragging = useRef(false);

  const updatePos = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    setPos((x / rect.width) * 100);
  }, []);

  const onMouseDown = () => { dragging.current = true; };
  const onMouseUp = () => { dragging.current = false; };
  const onMouseMove = (e: React.MouseEvent) => { if (dragging.current) updatePos(e.clientX); };
  const onTouchMove = (e: React.TouchEvent) => { updatePos(e.touches[0].clientX); };

  return (
    <div className="group">
      <div
        ref={containerRef}
        className="relative w-full aspect-[4/3] sm:aspect-[4/3] max-sm:aspect-[3/4] rounded-[16px] overflow-hidden cursor-col-resize select-none"
        onMouseDown={onMouseDown}
        onMouseUp={onMouseUp}
        onMouseLeave={onMouseUp}
        onMouseMove={onMouseMove}
        onTouchMove={onTouchMove}
        onTouchStart={onMouseDown}
        onTouchEnd={onMouseUp}
      >
        {/* After image (full, behind) */}
        <img src={after} alt="After" className="absolute inset-0 w-full h-full object-cover object-center" />

        {/* Before image (clipped from left) */}
        <div className="absolute inset-0" style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}>
          <img src={before} alt="Before" className="w-full h-full object-cover object-center" />
        </div>

        {/* Labels - z-20 so always visible */}
        <span className="absolute top-3 left-3 z-20 bg-black/55 text-white text-[0.68rem] font-bold uppercase px-[10px] py-1 rounded font-body">Before</span>
        <span className="absolute top-3 right-3 z-20 bg-black/55 text-white text-[0.68rem] font-bold uppercase px-[10px] py-1 rounded font-body">After</span>

        {/* Divider line */}
        <div className="absolute top-0 bottom-0 w-[2px] bg-white/80 z-10" style={{ left: `${pos}%` }} />

        {/* Drag handle */}
        <div
          className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-[44px] h-[44px] bg-white rounded-full flex items-center justify-center z-10"
          style={{ left: `${pos}%`, boxShadow: "0 2px 12px rgba(0,0,0,0.2)" }}
        >
          <ArrowLeftRight size={18} className="text-blue-primary" />
        </div>
      </div>

      <p className="mt-3 font-display text-[1.1rem] text-navy-dark tracking-[1px]">{caption}</p>
      <button
        onClick={() => document.querySelector("#booking")?.scrollIntoView({ behavior: "smooth" })}
        className="group/cta inline-flex items-center gap-1.5 text-blue-bright text-[0.82rem] font-body font-semibold mt-1 hover:text-blue-primary transition-colors"
      >
        {cta} <ArrowRight size={14} className="group-hover/cta:translate-x-1 transition-transform" />
      </button>
    </div>
  );
};

const Gallery = () => (
  <section id="gallery" className="section-padding px-4 bg-blue-ice">
    <div className="max-w-7xl mx-auto text-center">
      <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.6 }}>
        <p className="section-label mb-3">THE RESULTS</p>
        <h2 className="font-display text-text-dark tracking-[1.5px] leading-[1.05]" style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)" }}>
          The Results Speak for Themselves
        </h2>
        <p className="mt-4 text-text-muted font-body max-w-xl mx-auto">
          Drag the slider to see the transformation.
        </p>
      </motion.div>

      <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
        {galleryItems.map((item, i) => (
          <motion.div
            key={item.caption}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
          >
            <BeforeAfterSlider {...item} />
          </motion.div>
        ))}
      </div>

      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mt-12">
        <button
          onClick={() => document.querySelector("#booking")?.scrollIntoView({ behavior: "smooth" })}
          className="inline-flex items-center gap-2 bg-blue-bright text-white font-body font-bold px-8 py-4 rounded-lg shadow-[0_8px_30px_rgba(37,99,235,0.4)] hover:bg-[#1d4ed8] hover:-translate-y-[2px] hover:shadow-[0_8px_24px_rgba(37,99,235,0.35)] transition-all"
        >
          <Calendar size={18} /> Book Your Transformation Today
        </button>
      </motion.div>
    </div>
  </section>
);

export default Gallery;
