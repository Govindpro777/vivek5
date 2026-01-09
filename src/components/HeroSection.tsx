
import { motion } from "framer-motion";
import { Twitter, Send, Music2, Instagram } from "lucide-react";
import { FaXTwitter } from "react-icons/fa6";
import Sword from "@/assets/sword.png";

const socialLinks = [
  { icon: FaXTwitter, href: "https://x.com/flokipump_fun", label: "X" },
  { icon: Send, href: "https://t.me/flokipum", label: "Telegram" },
  { icon: Music2, href: "#", label: "TikTok" },
  { icon: Instagram, href: "#", label: "Instagram" },
];

const HeroSection = () => {


  return (
    <section className="relative min-h-[calc(100vh-4rem)] flex items-center pt-24 pb-10 sm:pb-16 lg:pt-28">
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-8 items-center">
          {/* Left Content */}
          <div className="space-y-6 text-center lg:text-left">
            <motion.h1
              className="font-display text-3xl md:text-6xl text-secondary text-shadow-blue leading-tight"
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              Brat kissing millhouse
            </motion.h1>

            <motion.p
              className="font-display text-base sm:text-lg md:text-xl text-muted-foreground max-w-xl mx-auto lg:mx-0 leading-relaxed"
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            >
             Fuck utility. fuck ai. fuck claude. fuck allat. bart fucking milhouse. why? because it's funny. 2026 needs dumb memes that rip, not another “product”. $BFM
            </motion.p>

            <motion.div
              className="flex flex-wrap gap-4 justify-center lg:justify-start"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <motion.a
                href="#"
                className="px-6 sm:px-8 py-2.5 sm:py-3 bg-secondary text-secondary-foreground font-display text-base sm:text-lg rounded-lg glow-blue hover:bg-secondary/90 transition-all inline-block"
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 0 40px hsl(200 80% 70% / 0.8)",
                }}
                whileTap={{ scale: 0.95 }}
              >
                BUY ON Brat kissing millhouse
              </motion.a>
            </motion.div>

            {/* Social Links */}
            <motion.div
              className="flex gap-3 sm:gap-4 pt-3 sm:pt-4 justify-center lg:justify-start"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-muted/50 flex items-center justify-center text-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
                  whileHover={{ scale: 1.2, rotate: 10 }}
                  whileTap={{ scale: 0.9 }}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.7 + index * 0.1 }}
                >
                  <social.icon className="w-4 h-4 sm:w-5 sm:h-5" />
                </motion.a>
              ))}
            </motion.div>
          </div>
        </div>
        

<div className="mt-16 sm:mt-28">
  <motion.div
    className="flex justify-center items-center py-4"
    initial={{ opacity: 0, x: "-100%" }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 1.2, ease: "easeOut" }}
  >
    <img
      src={Sword}
      alt="Sword"
      id="sword"
      className="w-full max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl h-auto object-contain"
    />
  </motion.div>
</div>


      </div>
    </section>
  );
};

export default HeroSection;
