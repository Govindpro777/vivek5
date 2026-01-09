// import { motion } from "framer-motion";
// import { CheckCircle2, Circle } from "lucide-react";

// const phases = [
//   {
//     title: "PHASE 1: THE LAUNCH",
//     items: [
//       { text: "PUMP.FUN FAIR LAUNCH", completed: true },
//       { text: "COMMUNITY BUILDING ON X & TELEGRAM", completed: true },
//       { text: "WEBSITE & SOCIALS SETUP", completed: true },
//       { text: "INITIAL MEME CAMPAIGN", completed: true },
//     ],
//   },
//   {
//     title: "PHASE 2: THE GROWTH",
//     items: [
//       { text: "REACH RAYDIUM", completed: false },
//       { text: "COINGECKO & COINMARKETCAP LISTINGS", completed: false },
//       { text: "INFLUENCER MARKETING PUSH", completed: false },
//       { text: "FIRST SHELTER DONATION", completed: false },
//     ],
//   },
//   {
//     title: "PHASE 3: THE TAKEOVER",
//     items: [
//       { text: "CEX LISTING APPLICATIONS", completed: false },
//       { text: "PUMPKIN MERCH STORE", completed: false },
//       { text: "MAJOR CHARITY PARTNERSHIPS", completed: false },
//       { text: "WORLD DOMINATION", completed: false },
//     ],
//   },
// ];

// const Roadmap = () => {
//   return (
//     <section id="roadmap" className="relative py-20 overflow-hidden">
//       {/* Background */}

//       <div className="container mx-auto px-4 relative z-10">
//         <motion.h2
//           className="font-display text-5xl md:text-6xl text-secondary text-shadow-blue text-center mb-16"
//           initial={{ opacity: 0, y: 50 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.6 }}
//         >
//           ROADMAP
//         </motion.h2>

//         <div className="grid md:grid-cols-3 gap-6">
//           {phases.map((phase, phaseIndex) => (
//             <motion.div
//               key={phase.title}
//               className="glass-card rounded-2xl p-6 space-y-6"
//               initial={{ opacity: 0, y: 50 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.6, delay: 0.2 * phaseIndex }}
//               whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
//             >
//               <motion.h3
//                 className="font-display text-2xl text-secondary  text-center"
//                 initial={{ opacity: 0 }}
//                 whileInView={{ opacity: 1 }}
//                 viewport={{ once: true }}
//                 transition={{ delay: 0.3 + 0.2 * phaseIndex }}
//               >
//                 {phase.title}
//               </motion.h3>

//               <div className="space-y-4">
//                 {phase.items.map((item, itemIndex) => (
//                   <motion.div
//                     key={item.text}
//                     className="flex items-center gap-3"
//                     initial={{ opacity: 0, x: -20 }}
//                     whileInView={{ opacity: 1, x: 0 }}
//                     viewport={{ once: true }}
//                     transition={{ delay: 0.4 + 0.1 * itemIndex + 0.2 * phaseIndex }}
//                   >
//                     {item.completed ? (
//                       <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0" />
//                     ) : (
//                       <Circle className="w-5 h-5 text-orange-accent flex-shrink-0" />
//                     )}
//                     <span className="font-display text-sm text-muted-foreground">
//                       {item.text}
//                     </span>
//                   </motion.div>
//                 ))}
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Roadmap;


import { motion } from "framer-motion";
import { CheckCircle2, Circle } from "lucide-react";

const phases = [
  {
    title: "PHASE 1 – PREPARATION & LAUNCH",
    items: [
      { text: "Create the token on the Solana network", completed: true },
      { text: "Develop the smart contract with security limits (max buy, max wallet)", completed: true },
      { text: "Build the official website", completed: true },
      { text: "Create the Telegram and Twitter communities", completed: true },
      { text: "Launch on Raydium with locked liquidity", completed: true },
    ],
  },
  {
    title: "PHASE 2 – PRE-SALE & CEX LISTING",
    items: [
      { text: "Conduct a private pre-sale (with limits for participants)", completed: false },
      { text: "Add liquidity to Raydium", completed: false },
      { text: "Apply for initial listing on a CEX (centralized exchange)", completed: false },
      { text: "Continue growing and verifying the community", completed: false },
    ],
  },
  {
    title: "PHASE 3 – MARKETING & DEVELOPMENT",
    items: [
      { text: "Partner with influencers", completed: false },
      { text: "Run marketing campaigns on social media & crypto platforms", completed: false },
      { text: "Update the website (live chart, token tracker)", completed: false },
      { text: "Add staking or mini-game to engage the community", completed: false },
    ],
  },
  {
    title: "PHASE 4 – EXPANSION & LONGEVITY",
    items: [
      { text: "Get listed on more CEXs", completed: false },
      { text: "Launch NFTs or an interactive FlokiPumpFun game", completed: false },
      { text: "Create a DAO (decentralized voting) for the community", completed: false },
      { text: "Continue building and adding new features", completed: false },
    ],
  },
];

const Roadmap = () => {
  return (
    <section id="roadmap" className="relative py-20 overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <motion.h2
          className="font-display text-5xl md:text-6xl text-secondary text-shadow-blue text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          FlokiPumpFun ROADMAP
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-6">
          {phases.map((phase, phaseIndex) => (
            <motion.div
              key={phase.title}
              className="glass-card rounded-2xl p-6 space-y-6"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 * phaseIndex }}
              whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
            >
              <motion.h3
                className="font-display text-2xl text-secondary text-center"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + 0.2 * phaseIndex }}
              >
                {phase.title}
              </motion.h3>

              <div className="space-y-4">
                {phase.items.map((item, itemIndex) => (
                  <motion.div
                    key={item.text}
                    className="flex items-center gap-3"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 + 0.1 * itemIndex + 0.2 * phaseIndex }}
                  >
                    {item.completed ? (
                      <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0" />
                    ) : (
                      <Circle className="w-5 h-5 text-orange-accent flex-shrink-0" />
                    )}
                    <span className="font-display text-sm text-muted-foreground">
                      {item.text}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Roadmap;
