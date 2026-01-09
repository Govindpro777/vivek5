import { motion } from "framer-motion";
import { Clock, Calendar } from "lucide-react";

const PreSale = () => {
  return (
    <section id="presale" className="relative py-20 overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="max-w-4xl mx-auto text-center glass-card rounded-3xl p-12 md:p-20 space-y-8"
          initial={{ opacity: 0, scale: 0.9, y: 50 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
        >
          {/* Main Heading */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <motion.h2
              className="font-display text-5xl md:text-7xl text-secondary text-shadow-blue mb-6"
            >
              FLOKI PRE-SALE
            </motion.h2>
            <motion.div className="flex items-center justify-center gap-3 mb-8">
              <div className="w-20 h-1 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full" />
              <Clock className="w-8 h-8 text-orange-accent" />
              <div className="w-20 h-1 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full" />
            </motion.div>
          </motion.div>

          {/* Date Announcement */}
          <motion.p
            className="font-display text-2xl md:text-3xl text-muted-foreground mb-2"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            LIVE ON
          </motion.p>
          <motion.div
            className="flex items-center justify-center gap-4 mb-8"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <Calendar className="w-12 h-12 text-secondary" />
            <span className="font-display text-5xl md:text-7xl text-secondary font-bold tracking-tight">
              13 JAN
            </span>
          </motion.div>

          {/* Stay Tuned */}
          <motion.h3
            className="font-display text-3xl md:text-4xl text-secondary mb-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            STAY TUNED
          </motion.h3>

          {/* Decorative elements */}
          <motion.div
            className="flex flex-wrap gap-4 justify-center opacity-60"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 0.6 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 1 }}
          >
            <div className="w-3 h-3 bg-yellow-400 rounded-full animate-pulse" />
            <div className="w-3 h-3 bg-orange-500 rounded-full animate-pulse" style={{ animationDelay: '0.2s' }} />
            <div className="w-3 h-3 bg-yellow-400 rounded-full animate-pulse" style={{ animationDelay: '0.4s' }} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default PreSale;
