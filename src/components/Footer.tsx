import { motion } from "framer-motion";
import { Twitter, Send, Music2, Instagram, Cat } from "lucide-react";
import { FaXTwitter } from "react-icons/fa6";
import logo from "@/assets/hero-right.jpg";

const socialLinks = [
  { icon: FaXTwitter, href: "https://x.com/L1FEProtocol", label: "Twitter" },
  { icon: Send, href: "#", label: "Telegram" },
  { icon: Music2, href: "#", label: "TikTok" },
  { icon: Instagram, href: "#", label: "Instagram" },
];

const Footer = () => {
  return (
    <footer className="relative py-12 bg-background border-t border-border/30">
      <div className="container mx-auto px-4">
        <motion.div
          className="flex flex-col md:flex-row items-center justify-between gap-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Logo */}
          <div className="flex items-center gap-2">
           <img src={logo} alt="" className="w-14 h-14 cursor-pointer"  />
          </div>

          {/* Social Links */}
          <div className="flex gap-4">
            {socialLinks.map((social, index) => (
              <motion.a
                key={social.label}
                href={social.href}
                className="w-10 h-10 rounded-full bg-muted/50 flex items-center justify-center text-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
                whileHover={{ scale: 1.2, rotate: 10 }}
                whileTap={{ scale: 0.9 }}
              >
                <social.icon className="w-5 h-5" />
              </motion.a>
            ))}
          </div>

          {/* Copyright */}
          <p className="font-body text-sm text-muted-foreground">
            © Brat kissing millhouse The P. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
