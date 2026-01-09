import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { Crown, Volume2, VolumeX, Pause, Play } from "lucide-react";
import AnnouncementVideo from "@/assets/Announcement.mp4";

const Announcement = () => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isMuted, setIsMuted] = useState(true);
  const [isPlaying, setIsPlaying] = useState(true);

  const toggleMute = () => {
    if (!videoRef.current) return;
    const next = !isMuted;
    videoRef.current.muted = next;
    setIsMuted(next);
  };

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
    setIsPlaying((p) => !p);
  };

  return (
    <section id="announcement" className="relative py-20 overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="text-center mb-8"
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
            ANNOUNCEMENT
          </motion.h2>
        </motion.div>

        {/* Crown Icon */}
        <motion.div
          className="flex justify-center mb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <motion.div
            animate={{ y: [0, -10, 0], rotate: [0, 5, -5, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <Crown className="w-16 h-16 text-primary" />
          </motion.div>
        </motion.div>

        {/* Video Container */}
        <motion.div
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <div className="glass-card rounded-2xl overflow-hidden glow-gold">
            <div className="relative aspect-video w-full bg-gradient-to-br from-pink-500/20 via-cyan-500/20 to-green-500/20 flex items-center justify-center">
              <video
                ref={videoRef}
                className="w-full h-full object-cover"
                autoPlay
                loop
                muted={isMuted}
                playsInline
              >
                <source src={AnnouncementVideo} type="video/mp4" />
              </video>

              {/* Controls overlay */}
              <div className="absolute bottom-4 right-4 flex gap-3">
                <button
                  onClick={togglePlay}
                  className="p-2 rounded-full bg-black/60 hover:bg-black/80 text-white flex items-center justify-center"
                >
                  {isPlaying ? (
                    <Pause className="w-5 h-5" />
                  ) : (
                    <Play className="w-5 h-5" />
                  )}
                </button>
                <button
                  onClick={toggleMute}
                  className="p-2 rounded-full bg-black/60 hover:bg-black/80 text-white flex items-center justify-center"
                >
                  {isMuted ? (
                    <VolumeX className="w-5 h-5" />
                  ) : (
                    <Volume2 className="w-5 h-5" />
                  )}
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Announcement;

