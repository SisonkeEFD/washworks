import { motion } from "framer-motion";
import { Star, ExternalLink } from "lucide-react";

const reviews = [
  { text: "Impressed and a highly satisfied customer. The service was exceptional from start to finish.", name: "Luthando Mapisa", tag: "Centurion · Google Review" },
  { text: "Very good and fast service. I would definitely recommend trying it out. Reliable, professional and worth every rand.", name: "Drehan Snyman", tag: "Centurion · Google Review" },
];

const Reviews = () => (
  <section id="reviews" className="py-20 max-sm:py-12 px-4 bg-blue-ice">
    <div className="max-w-6xl mx-auto text-center">
      <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.6 }}>
        <p className="section-label mb-3">COMMUNITY TRUST</p>
        <h2 className="font-display text-text-dark tracking-[1.5px]" style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)" }}>
          What Centurion Customers Say
        </h2>
        <p className="mt-4 text-text-muted font-body max-w-xl mx-auto">
          Every order treated with the same care. Here's what our community has to say.
        </p>
      </motion.div>

      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6 max-w-[800px] mx-auto">
        {reviews.map((r, i) => (
          <motion.div
            key={r.name}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="bg-white rounded-2xl p-8 border border-black/[0.06] text-left"
          >
            <div className="flex gap-1">
              {[...Array(5)].map((_, j) => (
                <Star key={j} size={16} fill="hsl(var(--gold))" stroke="hsl(var(--gold))" />
              ))}
            </div>
            <p className="mt-3 font-body text-[0.9rem] text-text-muted italic leading-[1.75]">"{r.text}"</p>
            <div className="mt-5 flex items-center gap-3">
              <div className="w-11 h-11 bg-blue-primary rounded-full flex items-center justify-center text-white font-display text-lg">
                {r.name[0]}
              </div>
              <div>
                <p className="font-body font-bold text-[0.88rem] text-navy-dark">{r.name}</p>
                <p className="font-body text-[0.75rem] text-text-muted">{r.tag}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="mt-10">
        <p className="font-body text-text-dark inline-flex items-center gap-2">
          <span className="inline-flex gap-0.5">
            {[...Array(5)].map((_, j) => (
              <Star key={j} size={16} fill="hsl(var(--gold))" stroke="hsl(var(--gold))" />
            ))}
          </span>
          <strong>5.0</strong> · 4 Reviews on Google
        </p>
        <a href="#" className="flex items-center justify-center gap-1.5 text-blue-bright font-body font-medium text-sm mt-2 hover:underline">
          Leave Us a Google Review <ExternalLink size={14} />
        </a>
      </div>
    </div>
  </section>
);

export default Reviews;