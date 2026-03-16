import { motion } from "framer-motion";

const steps = [
  { num: 1, title: "Book Your Pickup", desc: "Schedule online or via WhatsApp. Choose your date, time slot, and basket size." },
  { num: 2, title: "We Collect in Centurion", desc: "We arrive at your door at your scheduled time and collect your laundry with care." },
  { num: 3, title: "Expert Cleaning", desc: "Your items are cleaned using quality detergents and hygienic processes. Every item treated with respect." },
  { num: 4, title: "Delivered Fresh", desc: "We return your laundry clean, folded and fresh to your door — ready to use." },
];

const HowItWorks = () => (
  <section id="how-it-works" className="py-20 max-sm:py-12 px-4 bg-navy-dark">
    <div className="max-w-6xl mx-auto text-center">
      <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.6 }}>
        <p className="section-label mb-3 !text-blue-light">SIMPLE PROCESS</p>
        <h2 className="font-display text-white tracking-[1.5px]" style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)" }}>
          Fresh Laundry in 4 Easy Steps
        </h2>
        <p className="mt-4 text-white/50 font-body max-w-xl mx-auto">
          Getting started is effortless. Here's how it works from booking to delivery.
        </p>
      </motion.div>

      <div className="mt-16 relative grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Connector line — desktop only */}
        <div className="hidden md:block absolute top-[30px] left-[12.5%] right-[12.5%] h-0 border-t border-dashed border-[rgba(37,99,235,0.3)]" />

        {steps.map((step, i) => (
          <motion.div
            key={step.num}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="relative text-center px-5"
          >
            <div className="relative z-10 w-[60px] h-[60px] bg-blue-bright rounded-full flex items-center justify-center mx-auto">
              <span className="font-display text-white text-[1.8rem] leading-none">{step.num}</span>
            </div>
            <h3 className="font-display text-white text-[1.3rem] mt-[22px] tracking-[1px]">{step.title}</h3>
            <p className="text-white/[0.45] font-body text-[0.85rem] leading-[1.7] mt-2">{step.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default HowItWorks;