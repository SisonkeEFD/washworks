import { motion } from "framer-motion";

const services = [
  { icon: "👕", title: "Wash, Dry & Ironing in Centurion", desc: "Your everyday laundry done properly. We wash, dry and iron your clothing using quality detergents — returned clean, pressed, and ready to wear. Perfect for busy households across Centurion.", price: "From R120 per basket" },
  { icon: "🫧", title: "Wash & Dry in Centurion", desc: "Our everyday care basket — washed and dried to a fresh finish. No ironing, just clean, fresh clothing ready for folding. Great value for regular household laundry.", price: "From R80 per basket" },
  { icon: "👟", title: "Sneaker Cleaning in Centurion", desc: "Specialist cleaning for takkies, leather shoes, Crocs, and leather bags. Kids and adult sizes handled with care. Heavily soiled shoes welcome — we've seen worse.", price: "From R50 per pair" },
  { icon: "🏠", title: "Carpet Cleaning in Centurion", desc: "Professional deep-clean using specialist carpet washing machines. Standard household rugs to premium wool, Oriental and delicate floor coverings — all treated with expert care.", price: "From R50 per m²" },
  { icon: "🚗", title: "Laundry Collection & Delivery Centurion", desc: "Too busy to drop off? We come to you. Schedule a collection, we clean everything properly, and return it fresh directly to your door. Centurion-wide service.", price: "Flexible scheduling" },
  { icon: "🏢", title: "Corporate & Monthly Packages", desc: "Tailored laundry solutions for offices, guest houses, clinics, and families. Discounted rates, scheduled pickups, and a professional service your team or guests will appreciate.", price: "Custom pricing" },
];

const Services = () => (
  <section id="services" className="py-20 px-4 bg-blue-ice">
    <div className="max-w-7xl mx-auto text-center">
      <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
        <p className="section-label mb-3">WHAT WE DO</p>
        <h2 className="font-display font-black text-text-dark" style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)" }}>
          Every Clean You'll Ever Need, Right Here in Centurion
        </h2>
        <p className="mt-4 text-text-muted font-body max-w-2xl mx-auto">
          From everyday laundry to specialist cleaning — we handle it all with care, consistency, and a smile. Pickup and delivery available across Centurion and surrounding suburbs.
        </p>
      </motion.div>

      <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((s, i) => (
          <motion.div
            key={s.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="group bg-white rounded-2xl p-9 px-[30px] border border-black/[0.06] hover:-translate-y-[6px] hover:shadow-[0_20px_50px_rgba(0,0,0,0.09)] transition-all duration-300 text-left relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 right-0 h-1 bg-blue-primary scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
            <span className="text-[2.2rem] block mb-[18px]">{s.icon}</span>
            <h3 className="font-display font-bold text-[1.25rem] text-text-dark">{s.title}</h3>
            <p className="mt-3 text-text-muted font-body text-sm leading-relaxed">{s.desc}</p>
            <p className="mt-4 font-body font-bold text-blue-primary text-sm">{s.price}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Services;
