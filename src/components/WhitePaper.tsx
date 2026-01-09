import { motion } from "framer-motion";
import { Download, ExternalLink } from "lucide-react";
import WhitePDF from "@/assets/LIFE Protocol - White Paper 2025.pdf";

const WhitePaperSection = () => {
  const handleOpen = () => {
    window.open(WhitePDF, "_blank", "noopener,noreferrer");
  };

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = WhitePDF;
    link.download = "LIFE-Protocol-White-Paper-2025.pdf";
    document.body.appendChild(link);
    link.click();
    link.remove();
  };

  return (
    <section
      id="whitepaper"
      className="relative overflow-hidden py-20"
    >
      <div className="container mx-auto px-4 relative z-10">
        <motion.h2
          className="font-display text-4xl md:text-6xl text-center text-secondary text-shadow-blue mb-12"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          White Paper
        </motion.h2>

        <motion.div
          className="max-w-3xl mx-auto glass-card rounded-2xl border border-border/60 bg-card/80 backdrop-blur-md px-6 sm:px-8 py-8 sm:py-10 shadow-xl"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <motion.p
            className="font-body text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed text-center mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            The Brat kissing millhouse White Paper explains how LIFE is designed as a
            predictable, liquidity‑backed digital asset with a built‑in price
            growth model and a transparent USDT reserve on Binance Smart Chain.[file:210]
          </motion.p>

          <motion.p
            className="font-body text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            Inside, you&apos;ll find the core mechanics, tokenomics, security
            assumptions, and long‑term vision for building a fair, sustainable
            DeFi ecosystem that grows with participation, not speculation.[file:210]
          </motion.p>

          <motion.div
            className="mt-8 flex flex-wrap items-center justify-center gap-4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <button
              onClick={handleOpen}
              className="px-6 sm:px-7 py-2.5 sm:py-3 bg-secondary text-secondary-foreground font-display text-sm sm:text-base md:text-lg rounded-lg glow-blue hover:bg-secondary/90 transition-all inline-flex items-center gap-2"
            >
              <ExternalLink className="w-4 h-4 sm:w-5 sm:h-5" />
              Open White Paper
            </button>

            <button
              onClick={handleDownload}
              className="px-6 sm:px-7 py-2.5 sm:py-3 bg-card border border-border text-foreground font-display text-sm sm:text-base md:text-lg rounded-lg hover:bg-card/80 transition-all inline-flex items-center gap-2"
            >
              <Download className="w-4 h-4 sm:w-5 sm:h-5" />
              Download PDF
            </button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhitePaperSection;
