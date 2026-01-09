import { motion } from "framer-motion";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

const tokenData = [
  { name: "Pump.Fun Tokens", percentage: 77, color: "#4A9BD9", description: "Available during the fair launch" },
  { name: "Burned", percentage: 7, color: "#4CAF50", description: "Tokens removed from circulation forever" },
  { name: "Humane Society / Cat Shelters", percentage: 5, color: "#FF9800", description: "Donations to help our furry friends" },
  { name: "Dev Team", percentage: 4, color: "#E74C3C", description: "Vested to ensure long-term commitment" },
  { name: "Marketing", percentage: 3, color: "#9E9E9E", description: "To spread the word of Pumpkin" },
  { name: "Airdrops", percentage: 2, color: "#8BC34A", description: "Rewards for the community" },
  { name: "Pumpkin The Cat", percentage: 1, color: "#FFC107", description: "For food, treats, and litter" },
];

const Tokenomics = () => {
  return (
    <section id="tokenomics" className="relative py-20 overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.h2
            className="font-display text-5xl md:text-6xl text-secondary text-shadow-blue mb-4"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            TOKENOMICS
          </motion.h2>
          <motion.p
            className="font-display text-xl text-muted-foreground"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            PUMP.FUN FAIR LAUNCH - NO PRESALE, NO DRAMA.
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Pie Chart */}
          <motion.div
            className="h-80 md:h-96"
            initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={tokenData}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={140}
                  paddingAngle={2}
                  dataKey="percentage"
                >
                  {tokenData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} stroke="transparent" />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
          </motion.div>

          {/* Legend */}
          <div className="space-y-4">
            {tokenData.map((item, index) => (
              <motion.div
                key={item.name}
                className="flex items-start gap-4"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
              >
                <div
                  className="w-4 h-4 rounded-full flex-shrink-0 mt-1"
                  style={{ backgroundColor: item.color }}
                />
                <div>
                  <p className="font-display text-lg text-foreground">
                    {item.name.toUpperCase()} ({item.percentage}%)
                  </p>
                  <p className="font-body text-sm text-muted-foreground uppercase tracking-wide">
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

export default Tokenomics;
