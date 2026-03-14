import { motion } from "framer-motion";

const reviews = [
  { text: "Absolutely impressed and a highly satisfied customer. The service was exceptional from start to finish.", name: "Luthando Mapisa", tag: "Centurion · Google Review" },
  { text: "Very good and fast service. I would definitely recommend trying it out. Reliable, professional and worth every rand.", name: "Drehan Snyman", tag: "Centurion · Google Review" },
  { text: "The team is reliable and the quality is consistently great. Exactly the kind of local service Centurion needed.", name: "Happy Customer", tag: "Centurion · Google Review" },
];

const Reviews = () => (
  <section id="reviews" className="py-20 px-4 bg-blue-ice">
    <div className="max-w-6xl mx-auto text-center">
      <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
        <p className="section-label mb-3">COMMUNITY TRUST</p>
        <h2 className="font-display font-black text-text-dark" style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)" }}>
          What Centurion Customers Say
        </h2>
        <p className="mt-4 text-text-muted font-body max-w-xl mx-auto">
          Every order treated with the same care. Here's what our community has to say.
        </p>
      </motion.div>

      <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
        {reviews.map((r, i) => (
          <motion.div
            key={r.name}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="bg-white rounded-2xl p-[30px] border border-black/[0.06] text-left"
          >
            <div className="text-gold text-base">★★★★★</div>
            <p className="mt-3 font-body text-[0.9rem] text-text-muted italic leading-[1.75]">"{r.text}"</p>
            <div className="mt-5 flex items-center gap-3">
              <div className="w-[42px] h-[42px] bg-blue-primary rounded-full flex items-center justify-center text-white font-bold font-body text-sm">
                {r.name[0]}
              </div>
              <div>
                <p className="font-body font-bold text-[0.88rem] text-text-dark">{r.name}</p>
                <p className="font-body text-[0.75rem] text-text-muted">{r.tag}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="mt-10">
        <p className="font-body text-text-dark">
          <span className="text-gold">⭐⭐⭐⭐⭐</span>{" "}
          <strong>5.0</strong> · 4 Reviews on Google
        </p>
        <a href="#" className="text-blue-bright font-body font-medium text-sm mt-2 inline-block hover:underline">
          Leave Us a Google Review →
        </a>
      </div>
    </div>
  </section>
);

export default Reviews;
