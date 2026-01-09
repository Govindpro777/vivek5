
import { motion } from "framer-motion";
import { Twitter, Send, Music2, Instagram } from "lucide-react";
import { FaXTwitter } from "react-icons/fa6";
import Rock1 from "@/assets/X.png";
import Rock2 from "@/assets/Telegram.png";
import Rock3 from "@/assets/bom.png";
import Rock4 from "@/assets/DEX.png";
import Rock5 from "@/assets/CA.png";
import Sword from "@/assets/sword.png";

const socialLinks = [
  { icon: FaXTwitter, href: "https://x.com/flokipump_fun", label: "X" },
  { icon: Send, href: "https://t.me/flokipum", label: "Telegram" },
  { icon: Music2, href: "#", label: "TikTok" },
  { icon: Instagram, href: "#", label: "Instagram" },
];

const HeroSection = () => {
  const rocks = [
    { src: Rock1, href: "https://x.com/flokipump_fun", label: "X", side: "left" },
    { src: Rock2, href: "https://t.me/flokipum", label: "Telegram", side: "left" },
    { 
      src: Rock3, 
      side: "center", 
      scale: 1.7, 
      href: "#warzone",
      label: "BOM → Warzone" 
    },
    { src: Rock4, side: "right" },
    { 
      src: Rock5, 
      side: "right", 
      href: "#sword",
      label: "CA → Sword" 
    },
  ];

  return (
    <section className="relative min-h-[calc(100vh-4rem)] flex items-center pt-24 pb-10 sm:pb-16 lg:pt-28">
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-8 items-center">
          {/* Left Content */}
          <div className="space-y-6 text-center lg:text-left">
            <motion.h1
              className="font-display text-3xl md:text-7xl text-secondary text-shadow-blue leading-tight"
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

        {/* Rocks Row */}
        <motion.div
          className="w-full mt-36 mb-8 flex items-center justify-between px-8 sm:px-12 lg:px-20"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          {rocks.map((rock, index) => (
            rock.href ? (
              <motion.a
                key={index}
                href={rock.href}
                target={rock.href.startsWith('#') ? '_self' : '_blank'}
                rel={rock.href.startsWith('http') ? 'noopener noreferrer' : ''}
                className="block"
              >
                <motion.img
                  src={rock.src}
                  alt={rock.label}
                  className={`w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 object-contain transition-all duration-300 cursor-pointer ${
                    rock.side === "center" ? "scale-125 shadow-2xl" : "hover:scale-110"
                  }`}
                  initial={{ opacity: 1, y: 50 }}
                  animate={
                    rock.side === "center"
                      ? {
                          opacity: 1,
                          y: [0, -25, 0],
                          transition: {
                            duration: 2.5,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: 1 + index * 0.15,
                          },
                        }
                      : { opacity: 1, y: 0 }
                  }
                  transition={
                    rock.side !== "center"
                      ? {
                          duration: 0.6,
                          delay: 1 + index * 0.15,
                        }
                      : {}
                  }
                  whileHover={{ 
                    scale: rock.side === "center" ? 1.3 : 1.15,
                    rotate: index % 2 === 0 ? -5 : 5,
                    y: -10 
                  }}
                />
              </motion.a>
            ) : (
              <motion.img
                key={index}
                src={rock.src}
                alt={`Rock ${index + 1}`}
                className={`w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 object-contain transition-all duration-300 ${
                  rock.side === "center" ? "scale-125 shadow-2xl" : "hover:scale-110"
                }`}
                initial={{ opacity: 1, y: 50 }}
                animate={
                  rock.side === "center"
                    ? {
                        opacity: 1,
                        y: [0, -25, 0],
                        transition: {
                          duration: 2.5,
                          repeat: Infinity,
                          ease: "easeInOut",
                          delay: 1 + index * 0.15,
                        },
                      }
                    : { opacity: 1, y: 0 }
                }
                transition={
                  rock.side !== "center"
                    ? {
                        duration: 0.6,
                        delay: 1 + index * 0.15,
                      }
                    : {}
                }
                whileHover={{ 
                  scale: rock.side === "center" ? 1.3 : 1.15,
                  rotate: index % 2 === 0 ? -5 : 5,
                  y: -10 
                }}
              />
            )
          ))}
        </motion.div>

        

        <div className="mt-16 sm:mt-28">
  <motion.div
    className="flex justify-center items-center py-4"
    initial={{ opacity: 1, x: 0 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
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
