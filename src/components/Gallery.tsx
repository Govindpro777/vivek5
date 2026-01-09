import { motion } from "framer-motion";
import gallery1 from "@/assets/gallery1.jpeg";
import gallery2 from "@/assets/gallery2.jpeg";
import gallery3 from "@/assets/gallery3.jpeg";
import gallery4 from "@/assets/gallery4.jpeg";
import gallery5 from "@/assets/gallery5.jpeg";
import gallery6 from "@/assets/gallery6.jpeg";

const galleryImages = [
  { src: gallery1 , alt: "Pumpkin King", title: "THE KING" },
  { src: gallery2 , alt: "Pumpkin Badge", title: "THE BADGE" },
  { src: gallery3 , alt: "Pumpkin Throne", title: "THE THRONE" },
  { src: gallery4, alt: "Pumpkin Crew", title: "THE CREW" },
  { src: gallery5, alt: "Pumpkin Crew", title: "THE CREW" },
  { src: gallery6, alt: "Pumpkin Crew", title: "THE CREW" },
];

const Gallery = () => {
  return (
    <section id="gallery" className="relative pb-20 pt-10 overflow-hidden">
      {/* Background */}
      <div className="container mx-auto px-4 relative z-10">
        <motion.h2
          className="font-display text-5xl md:text-6xl text-secondary text-shadow-blue text-center mb-12"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
         Brat kissing millhouse GALLERY
        </motion.h2>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {galleryImages.map((image, index) => (
            <motion.div
              key={index}
              className="group relative max-h-[530px] rounded-2xl overflow-hidden glass-card cursor-pointer"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-fit  transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center p-4">
                <motion.span
                  className="font-display text-xl text-secondary text-shadow-blue"
                  initial={{ y: 20, opacity: 0 }}
                  whileHover={{ y: 0, opacity: 1 }}
                >
                  {image.title}
                </motion.span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
