import { motion } from "framer-motion";

const flokipumpTokenData = [
  {
    name: "Presale",
    percentage: 32,
    color: "#FACC15",
    description: "1,600,000,000 FLOKIPUMPFUN – To raise funds for development and marketing.",
  },
  {
    name: "DEX Liquidity (Raydium)",
    percentage: 20,
    color: "#22C55E",
    description: "1,000,000,000 FLOKIPUMPFUN – Locked 6–12 months to secure the project.",
  },
  {
    name: "Team & Development",
    percentage: 16,
    color: "#EF4444",
    description: "800,000,000 FLOKIPUMPFUN – Vested 6–12 months, no immediate access.",
  },
  {
    name: "Marketing & Partnerships",
    percentage: 12,
    color: "#3B82F6",
    description: "600,000,000 FLOKIPUMPFUN – For promotion and strategic partners.",
  },
  {
    name: "CEX Listings & Liquidity",
    percentage: 10,
    color: "#A855F7",
    description: "500,000,000 FLOKIPUMPFUN – Locked 6 months for CEX listings.",
  },
  {
    name: "Community Rewards / Airdrops",
    percentage: 6,
    color: "#F97316",
    description: "300,000,000 FLOKIPUMPFUN – Rewards for early supporters and community.",
  },
  {
    name: "Reserve / Future Use",
    percentage: 4,
    color: "#64748B",
    description: "200,000,000 FLOKIPUMPFUN – For future development and opportunities.",
  },
];

const TokenDistribution = () => {
  return (
    <section
      id="token-distribution"
      className="relative py-20 overflow-hidden "
    >
      <div className="container mx-auto px-4 relative z-10">
        {/* Heading */}
        <motion.div
          className="text-center mb-10"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.h2
            className="font-display text-4xl md:text-5xl text-secondary text-shadow-blue drop-shadow-[0_0_15px_rgba(0,0,0,0.8)] tracking-[0.25em] mb-2"
            initial={{ opacity: 0, scale: 0.85 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            TOKEN DISTRIBUTION
          </motion.h2>

          <motion.p
            className="font-display text-sm md:text-base text-gray-200/80 tracking-[0.25em]"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.25 }}
          >
            TOTAL SUPPLY: 5,000,000,000 FLOKIPUMPFUN
          </motion.p>
        </motion.div>

        <div className="gap-12 items-center">
          <div className="grid sm:grid-cols-2 gap-12 max-w-3xl mx-auto">
            {flokipumpTokenData.map((item, index) => (
              <motion.div
                key={item.name}
                className="relative rounded-2xl bg-card/80 border border-border shadow-[0_0_25px_rgba(0,0,0,0.9)] px-3 py-10 w-full"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.08 * index }}
              >
                <div className="absolute inset-[1px] rounded-2xl border border-secondary pointer-events-none" />
                <div className="relative flex flex-col gap-2">
                  <div className="flex items-center justify-between gap-2">
                    <p className="font-display text-sm text-gray-300 uppercase tracking-wide">
                      {item.name}
                    </p>
                    <span className="font-display text-base text-yellow-300">
                      {item.percentage}%
                    </span>
                  </div>
                  <p className="text-sm text-gray-400 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TokenDistribution;
