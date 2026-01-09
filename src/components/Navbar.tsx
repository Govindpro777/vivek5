import { useState } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo.jpeg";

const navLinks = [
  { name: "GALLERY", href: "#gallery" },
  // { name: "WHY LIFE MATTER", href: "#why-life-matters" },
  // { name: "WHITE PAPER", href: "#whitepaper" },
  { name: "HOW TO BUY", href: "#how-to-buy" },
  { name: "ROADMAP", href: "#roadmap" },
  { name: "TOKENOMICS", href: "#tokenomics" },
  { name: "TOKEN DISTRIBUTION", href: "#token-distribution" },
  { name: "WARZONE", href: "#warzone" },
  { name: "ANNOUNCEMENT", href: "#announcement" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/30"
    >
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo with scale animation */}
        <motion.a
          href="#"
          className="flex items-center gap-2"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <motion.img
            src={logo}
            alt="Brat kissing millhouse"
            className="h-10 w-auto md:h-12 lg:h-14"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1, delay: 0.8, ease: "easeOut" }}
          />
        </motion.a>

        {/* Desktop nav links */}
        <div className="hidden md:flex items-center gap-6 lg:gap-8">
          {navLinks.map((link, index) => (
            <motion.a
              key={link.name}
              href={link.href}
              className="font-display text-sm md:text-base lg:text-lg text-muted-foreground hover:text-foreground transition-colors"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * index, duration: 0.4 }}
              whileHover={{ scale: 1.05 }}
            >
              {link.name}
            </motion.a>
          ))}
        </div>

        {/* Desktop CTA */}
        <motion.a
          href="#"
          className="hidden md:inline-block px-4 md:px-6 py-2 md:py-2.5 bg-secondary text-secondary-foreground font-display text-sm md:text-lg rounded-lg glow-blue hover:bg-secondary/90 transition-all"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4, duration: 0.4 }}
        >
          BUY ON BRAT KISSING MILLHOUSE
        </motion.a>

        {/* Mobile menu button */}
        <button
          className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-foreground"
          onClick={() => setOpen((p) => !p)}
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile menu panel */}
      {open && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2 }}
          className="md:hidden border-t border-border/30 bg-background/95 backdrop-blur-md"
        >
          <div className="container mx-auto px-4 py-3 space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setOpen(false)}
                className="block font-display text-sm text-muted-foreground hover:text-foreground"
              >
                {link.name}
              </a>
            ))}
            <a
              href="#"
              className="mt-2 block w-full text-center px-4 py-2 bg-secondary text-secondary-foreground font-display text-sm rounded-lg"
              onClick={() => setOpen(false)}
            >
              BUY ON BRAT KISSING MILLHOUSE
            </a>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;
