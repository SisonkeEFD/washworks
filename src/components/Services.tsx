import { motion } from "framer-motion";
import { Shirt, Waves, Footprints, Home, Truck, Building2, ArrowRight } from "lucide-react";

const services = [
  { icon: Shirt, title: "Wash, Dry & Ironing in Centurion", desc: "Your everyday laundry done properly. We wash, dry and iron your clothing using quality detergents — returned clean, pressed, and ready to wear. Perfect for busy households across Centurion.", price: "From R120 per basket", cta: "Book a Wash & Iron Pickup" },
  { icon: Waves, title: "Wash & Dry in Centurion", desc: "Our everyday care basket — washed and dried to a fresh finish. No ironing, just clean, fresh clothing ready for folding. Great value for regular household laundry.", price: "From R80 per basket", cta: "Book a Wash & Dry Pickup" },
  { icon: Footprints, title: "Sneaker Cleaning in Centurion", desc: "Specialist cleaning for takkies, leather shoes, Crocs, and leather bags. Kids and adult sizes handled with care. Heavily soiled shoes welcome — we've seen worse.", price: "From R50 per pair", cta: "Book Sneaker Cleaning" },
  { icon: Home, title: "Carpet Cleaning in Centurion", desc: "Professional deep-clean using specialist carpet washing machines. Standard household rugs to premium wool, Oriental and delicate floor coverings — all treated with expert care.", price: "From R50 per m²", cta: "Book Carpet Cleaning" },
  { icon: Truck, title: "Laundry Collection & Delivery Centurion", desc: "Too busy to drop off? We come to you. Schedule a collection, we clean everything properly, and return it fresh directly to your door. Centurion-wide service.", price: "Flexible scheduling", cta: "Schedule a Pickup" },
  { icon: Building2, title: "Corporate & Monthly Packages", desc: "Tailored laundry solutions for offices, guest houses, clinics, and families. Discounted rates, scheduled pickups, and a professional service your team or guests will appreciate.", price: "Custom pricing", cta: "Get a Custom Quote" },
];

const Services = () => (
  <section id="services" className="py-20 max-sm:py-12 px-4 bg-blue-ice">
    <div className="max-w-7xl mx-auto text-center">
      <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.6 }}>
        <p className="section-label mb-3">WHAT WE DO</p>
        <h2 className="font-display text-text-dark tracking-[1.5px]" style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)" }}>
          Every Clean You'll Ever Need, Right Here in Centurion
        </h2>
        <p className="mt-4 text-text-muted font-body max-w-2xl mx-auto">
          From everyday laundry to specialist cleaning — we handle it all with care, consistency, and a smile. Pickup and delivery available across Centurion and surrounding suburbs.
        </p>
      </motion.div>

      <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((s, i) => {
          const Icon = s.icon;
          return (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group bg-white rounded-2xl p-8 px-7 border border-black/[0.06] hover:-translate-y-[6px] hover:shadow-[0_20px_50px_rgba(0,0,0,0.09)] transition-all duration-300 text-left relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 right-0 h-1 bg-blue-primary scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300" />
              <div className="w-16 h-16 bg-[rgba(26,58,143,0.08)] rounded-[14px] flex items-center justify-center mb-5">
                <Icon size={32} className="text-blue-primary" />
              </div>
              <h3 className="font-display text-[1.6rem] text-navy-dark tracking-[1px] mb-2">{s.title}</h3>
              <p className="text-text-muted font-body text-[0.88rem] leading-[1.75] mb-4">{s.desc}</p>
              <p className="font-body font-bold text-blue-primary text-[0.88rem] mb-3">{s.price}</p>
              <button
                onClick={() => document.querySelector("#booking")?.scrollIntoView({ behavior: "smooth" })}
                className="group/cta inline-flex items-center gap-1.5 font-body font-semibold text-[0.82rem] text-blue-bright hover:text-blue-primary transition-colors"
              >
                {s.cta}
                <ArrowRight size={14} className="group-hover/cta:translate-x-1 transition-transform" />
              </button>
            </motion.div>
          );
        })}
      </div>
    </div>
  </section>
);

export default Services;