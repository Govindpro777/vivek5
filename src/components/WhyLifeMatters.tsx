import { motion } from "framer-motion";
import whyLifeImage from "@/assets/why.jpg";

const WhyLifeMatters = () => {
  return (
    <section
      id="why-life-matters"
      className="relative overflow-hidden py-20"
    >
      {/* Foreground content */}
      <div className="container mx-auto px-4 relative z-10">
        <motion.h2
          className="font-display text-4xl md:text-6xl text-center text-secondary text-shadow-blue mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Why LIFE Matters
        </motion.h2>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            className="flex justify-center"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              className="relative w-72 h-72 md:w-96 md:h-96"
              style={{ perspective: 1000 }}
              initial={{ rotateY: 0 }}
              whileInView={{ rotateY: 360 }}
              viewport={{ once: true }}
              transition={{
                duration: 6,          
                ease: "easeInOut"
              }}
            >
              <div className="absolute inset-0 rounded-full bg-secondary/20 blur-3xl" />
              <img
                src={whyLifeImage}
                alt="Why LIFE Matters"
                className="w-full h-full object-contain relative z-10 drop-shadow-2xl rounded-2xl"
                style={{ backfaceVisibility: "visible" }}
              />
            </motion.div>
          </motion.div>


          {/* Content */}
          <div className="space-y-6">
            <motion.p
              className="font-body text-lg md:text-xl text-muted-foreground leading-relaxed"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              The current economic system often operates like a jungle, where
              the losses of many create the gains of a few. LIFE offers a path
              that changes that dynamic. It's not about replacing the current
              system—it's about offering a reliable, transparent alternative
              that provides people with something they can trust.
            </motion.p>

            <motion.p
              className="font-body text-lg md:text-xl text-muted-foreground leading-relaxed"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              With LIFE, you have the opportunity to participate in a financial
              ecosystem where value isn't driven by speculation or luck. It's
              driven by a community-driven design, transparency, and the belief
              that value can be predicted and grown over time.
            </motion.p>

            <motion.div
              className="flex flex-wrap gap-4 pt-4"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <div className="px-6 py-3 bg-card border border-border rounded-lg">
                <span className="font-display text-secondary text-lg">
                  Community Driven
                </span>
              </div>
              <div className="px-6 py-3 bg-card border border-border rounded-lg">
                <span className="font-display text-secondary text-lg">
                  Transparent
                </span>
              </div>
              <div className="px-6 py-3 bg-card border border-border rounded-lg">
                <span className="font-display text-secondary text-lg">
                  Predictable Growth
                </span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyLifeMatters;
