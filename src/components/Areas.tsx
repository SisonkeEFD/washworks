import { motion } from "framer-motion";
import { MapPin, Calendar } from "lucide-react";

const areas = [
  "Centurion", "Wierdapark", "Eldoraigne", "Rooihuiskraal",
  "Highveld", "Midstream", "Lyttelton", "Wierda Valley",
  "Centurion CBD", "The Reeds", "Doringkloof", "Irene",
];

const Areas = () => (
  <section id="areas" className="section-padding px-4 bg-white">
    <div className="max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.6 }}>
          <p className="section-label mb-3">SERVICE AREAS</p>
          <h2 className="font-display text-text-dark tracking-[1.5px] leading-[1.05]" style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)" }}>
            Laundry Collection & Delivery Across All of Centurion
          </h2>
          <p className="mt-4 text-text-muted font-body leading-relaxed">
            Whether you're in Wierdapark, Eldoraigne, Midstream or anywhere in greater Centurion, we come to you. Our laundry collection and delivery service covers the full Centurion area, making professional laundry genuinely convenient for your community. Not sure if we cover your street? Just WhatsApp us.
          </p>
          <button
            onClick={() => document.querySelector("#booking")?.scrollIntoView({ behavior: "smooth" })}
            className="mt-6 inline-flex items-center gap-2 bg-blue-bright text-white font-body font-bold px-7 py-[14px] rounded-lg hover:bg-[#1d4ed8] hover:-translate-y-[2px] hover:shadow-[0_8px_24px_rgba(37,99,235,0.35)] transition-all"
          >
            <Calendar size={18} /> Check Your Area
          </button>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.6, delay: 0.2 }}>
          <div className="grid grid-cols-2 gap-3">
            {areas.map((area) => (
              <div
                key={area}
                className="bg-white border border-black/[0.08] rounded-[10px] px-[18px] py-[13px] font-body font-semibold text-[0.88rem] text-text-dark flex items-center gap-2 hover:border-blue-primary hover:text-blue-primary hover:translate-x-1 transition-all cursor-default"
              >
                <MapPin size={14} className="text-blue-primary flex-shrink-0" /> {area}
              </div>
            ))}
          </div>

          <div className="mt-6 rounded-xl overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3593.2!2d28.189!3d-25.854!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2z113+1st+Ave%2C+Gerhardsville%2C+Centurion!5e0!3m2!1sen!2sza!4v1"
              width="100%"
              height="220"
              style={{ border: 0, borderRadius: 12 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="The Wash Works Location"
            />
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

export default Areas;
