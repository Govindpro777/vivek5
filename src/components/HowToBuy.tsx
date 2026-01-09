import { motion } from "framer-motion";
import { Wallet, Coins, ArrowRightLeft } from "lucide-react";

const steps = [
  {
    icon: Wallet,
    title: "1. CREATE A WALLET",
    description: "Download a crypto wallet like MetaMask or Trust Wallet. Keep your seed phrase safer than a high score on Pac-Man.",
  },
  {
    icon: Coins,
    title: "2. GET SOME SOL",
    description: "You'll need some SOL in your wallet to swap for FLOKI Coin. Get it from a centralized exchange or a friend who owes you one.",
  },
  {
    icon: ArrowRightLeft,
    title: "3. SWAP FOR FLOKI Coin",
    description: "Go to PancakeSwap, paste the FLOKI Coin contract address, and swap your SOL. Welcome to the mainframe.",
  },
];

const HowToBuy = () => {
  return (
    <section id="how-to-buy" className="py-20 relative overflow-hidden">
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.h2
          className="font-display text-4xl md:text-6xl text-center text-secondary text-shadow-blue mb-4"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          HOW DO I BUY FLOKI COIN
        </motion.h2>

        <motion.p
          className="font-display text-xl text-muted-foreground text-center mb-16 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Get started with FLOKI Coin in three simple steps
        </motion.p>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              className="relative group"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <motion.div
                className="bg-card/80 backdrop-blur-sm border border-border rounded-2xl p-8 h-full relative overflow-hidden"
                whileHover={{ scale: 1.02, borderColor: "hsl(var(--secondary))" }}
                transition={{ duration: 0.3 }}
              >
                {/* Glow effect on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-secondary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Icon */}
                <motion.div
                  className="w-16 h-16 rounded-full bg-secondary/20 flex items-center justify-center mb-6 mx-auto"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <step.icon className="w-8 h-8 text-secondary" />
                </motion.div>

                {/* Title */}
                <h3 className="font-display text-xl text-secondary text-center mb-4">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="font-body text-muted-foreground text-center leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* CTA Button */}
        <motion.div
          className="flex justify-center mt-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <motion.a
            href="#"
            className="px-10 py-4 bg-secondary text-secondary-foreground font-display text-xl rounded-lg glow-blue hover:bg-secondary/90 transition-all inline-block"
            whileHover={{ scale: 1.05, boxShadow: "0 0 40px hsl(200 80% 70% / 0.8)" }}
            whileTap={{ scale: 0.95 }}
          >
            BUY FLOKI NOW
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default HowToBuy;
