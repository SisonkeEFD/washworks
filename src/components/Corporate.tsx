import { motion } from "framer-motion";

const features = [
  { icon: "🏢", title: "Employee Wellness & EVP", desc: "Offer staff laundry as part of your Employee Value Proposition. A practical, appreciated workplace benefit that sets you apart as an employer of choice." },
  { icon: "🏨", title: "Guest Houses & Lodges", desc: "Professional linen, towel and bedding laundry for hospitality businesses. Reliable turnaround and hygienic standards your guests will notice." },
  { icon: "🏥", title: "Clinics & Medical Practices", desc: "High-hygiene laundry solutions tailored to the strict cleanliness standards required by healthcare environments." },
  { icon: "📦", title: "Flexible Scheduling", desc: "Custom collection and delivery schedules that work around your business hours — no disruptions, no stress." },
];

const Corporate = () => (
  <section id="corporate" className="py-20 px-4 bg-warm-bg">
    <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
      {/* Left */}
      <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
        <p className="section-label mb-3">BUSINESS SOLUTIONS</p>
        <h2 className="font-display font-black text-text-dark" style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)" }}>
          Corporate Laundry Services in Centurion
        </h2>
        <p className="mt-4 text-text-muted font-body leading-relaxed">
          We support modern businesses, office parks, guest houses, clinics, and medical practices with reliable, professional laundry solutions.
        </p>

        <div className="mt-8 space-y-4">
          {features.map((f) => (
            <div key={f.title} className="bg-blue-ice rounded-xl p-5 flex gap-4">
              <span className="text-2xl flex-shrink-0">{f.icon}</span>
              <div>
                <h4 className="font-display font-bold text-text-dark text-sm">{f.title}</h4>
                <p className="font-body text-text-muted text-sm mt-1 leading-relaxed">{f.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Right CTA box */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="bg-navy-dark rounded-[20px] p-11"
      >
        <h3 className="font-display font-bold text-white text-[1.6rem]">Get a Custom Corporate Quote</h3>
        <p className="mt-4 text-white/50 font-body leading-relaxed">
          We build tailored packages with discounted staff rates, dedicated collection schedules, and a service level built around your business. Every business is different — your laundry solution should be too.
        </p>
        <a
          href="https://wa.me/27796388572?text=Hi,%20I'd%20like%20to%20enquire%20about%20corporate%20laundry%20services%20in%20Centurion."
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 block w-full text-center bg-blue-bright text-white font-body font-bold py-4 rounded-lg hover:-translate-y-[2px] transition-transform"
        >
          💬 WhatsApp for a Quote
        </a>
        <a href="tel:+27796388572" className="block text-center text-blue-light font-body text-[0.82rem] mt-3 hover:underline">
          Or call us on 079 638 8572
        </a>
      </motion.div>
    </div>
  </section>
);

export default Corporate;
