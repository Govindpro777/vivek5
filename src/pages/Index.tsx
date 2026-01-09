import { useEffect, useRef, useState } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import WhyLifeMatters from "@/components/WhyLifeMatters";
import HowToBuy from "@/components/HowToBuy";
import Gallery from "@/components/Gallery";
import Roadmap from "@/components/Roadmap";
import LiveChart from "@/components/LiveChart";
import Announcement from "@/components/Announcement";
import Footer from "@/components/Footer";
import WhitePaper from "@/components/WhitePaper";
import bgVideo from "@/assets/bgVideo.mp4";
import bgMobile from "@/assets/bgVideo.mp4";
import Audio from "@/assets/song.mp3";
import Tokenomics from "@/components/Tokenomics";
import TokenDistribution from "@/components/TokenDistibuton";
import PreSale from "@/components/PreSale"

const Index = () => {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [showModal, setShowModal] = useState(false);
  const [isMusicOn, setIsMusicOn] = useState(false);


  useEffect(() => {
    setShowModal(true);
  }, []);

  const handlePlayMusic = async () => {
    if (!audioRef.current) return;
    try {
      await audioRef.current.play();
      setIsMusicOn(true);
      setShowModal(false);
    } catch {
      setIsMusicOn(false);
    }
  };

  const handleMute = () => {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }
    setIsMusicOn(false);
    setShowModal(false);
  };

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Background videos */}
      <video
        src={bgVideo}
        autoPlay
        loop
        muted
        playsInline
        className="fixed inset-0 hidden sm:block w-full h-full object-cover -z-10"
      />
      <video
        src={bgMobile}
        autoPlay
        loop
        muted
        playsInline
        className="fixed inset-0 block sm:hidden w-full h-full object-cover -z-10"
      />
      <div className="fixed inset-0 bg-background/60 -z-10" />

      <audio ref={audioRef} src={Audio} loop />

      {/* Music popup */}
      {showModal && (
        <div className="fixed inset-0 z-40 flex items-center justify-center bg-black/30 backdrop-blur-sm">
          <div className="w-full max-w-lg mx-4 rounded-2xl bg-[#050505]/95 border border-border/60 shadow-2xl px-6 py-6 sm:px-8 sm:py-8">
            <h2 className="font-display text-2xl sm:text-3xl text-foreground mb-3">
              Welcome to Brat kissing millhouse
            </h2>
            <p className="font-body text-sm sm:text-base text-muted-foreground mb-6 leading-relaxed">
              Would you like to enable background music for the full experience?
            </p>

            <div className="flex flex-wrap items-center justify-end gap-3 sm:gap-4">
              {/* Mute button (default-style) */}
              <button
                onClick={handleMute}
                className="px-5 py-2 sm:px-6 sm:py-2.5 rounded-full border border-border bg-black/80 text-sm sm:text-base font-display text-foreground shadow-inner hover:bg-black transition-colors"
              >
                Mute
              </button>

              {/* Play Music button */}
              <button
                onClick={handlePlayMusic}
                className="px-5 py-2 sm:px-7 sm:py-2.5 rounded-full bg-secondary text-secondary-foreground text-sm sm:text-base font-display shadow-lg hover:bg-secondary/90 transition-colors"
              >
                Play Music
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Scrollable content */}
      <div className="relative z-10">
        <Navbar />
        <HeroSection />
        <Gallery />
        {/* <WhyLifeMatters /> */}
        {/* <WhitePaper /> */}
        <HowToBuy />
        <PreSale />
        <Tokenomics />
        <TokenDistribution />
        <Roadmap />
        <LiveChart />
        <Announcement />
        <Footer />
      </div>
    </div>
  );
};

export default Index;
