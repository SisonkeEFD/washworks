import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

const faqs = [
  { q: "Do you offer laundry collection and delivery in Centurion?", a: "Yes! We serve Centurion and all surrounding suburbs including Riversands, Riverside View, Raslouw, Laudium, Christoburg, Laezonia, Doornrandje, Copperleaf and Eldoraigne. Simply book a pickup and we'll come to you." },
  { q: "How long does laundry take from pickup to delivery?", a: "Most standard laundry orders are turned around within 24 to 48 hours. We'll confirm your delivery window when we collect. For urgent requests, WhatsApp us directly." },
  { q: "Do you clean white sneakers and delicate shoes?", a: "Absolutely. We clean all types of sneakers including white takkies, leather shoes, Crocs and leather bags using specialist products. Heavily soiled shoes carry a small R20 additional charge." },
  { q: "What areas in Centurion do you service?", a: "Centurion plus the surrounding suburbs we're closest to: Riversands, Riverside View, Raslouw, Laudium, Christoburg, Laezonia, Doornrandje, Copperleaf, Eldoraigne, The Reeds, Gerhardsville and surrounding areas." },
  { q: "Do you offer same-day laundry service in Centurion?", a: "Same-day is subject to availability and order volume. Please WhatsApp us on 079 638 8572 to check if same-day is available on your preferred date." },
  { q: "Are your detergents safe for sensitive skin?", a: "We use quality, trusted detergents. If you have specific sensitivities or allergies, please note this in your booking and we'll accommodate accordingly." },
  { q: "Can I set up a monthly family laundry package?", a: "Yes! Our monthly family packages include scheduled weekly pickups and deliveries tailored to your household size. Contact us to build a custom plan that fits your routine and budget." },
  { q: "How do I know which basket size I need?", a: "XSmall = 1 to 2 outfits · Small = a couple of days of clothing · Medium = a full week for 1 to 2 people · Large = a family's weekly wash. Not sure? We're happy to advise via WhatsApp." },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="section-padding px-4 bg-blue-ice">
      <div className="max-w-6xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.6 }} className="text-center mb-12">
          <p className="section-label mb-3">COMMON QUESTIONS</p>
          <h2 className="font-display text-text-dark tracking-[1.5px] leading-[1.05]" style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)" }}>
            Frequently Asked Questions About Our Laundromat in Centurion
          </h2>
          <p className="mt-4 text-text-muted font-body max-w-xl mx-auto">
            Everything you need to know before booking your first pickup.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="bg-white rounded-[14px] border border-black/[0.06] overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between p-5 px-6 text-left min-h-[56px]"
              >
                <span className="font-body font-bold text-[0.9rem] text-navy-dark pr-4">{faq.q}</span>
                <span className="text-blue-primary flex-shrink-0">
                  {openIndex === i ? <Minus size={20} /> : <Plus size={20} />}
                </span>
              </button>
              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <p className="px-6 pb-5 font-body text-[0.85rem] text-text-muted leading-[1.75]">
                      {faq.a}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
