"use client";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

const mediaSequence = [
  { type: "video", src: "/videos/hero-3.mp4", duration: 4 },
  { type: "video", src: "/videos/hero-2.mp4", duration: 10 },
];

const Hero = () => {
  const [index, setIndex] = useState(0);
  const [scrolled, setScrolled] = useState(false);
  const { t } = useTranslation();

  // Rotate slides
  useEffect(() => {
    const timer = setTimeout(
      () => setIndex((p) => (p + 1) % mediaSequence.length),
      mediaSequence[index].duration * 1000
    );
    return () => clearTimeout(timer);
  }, [index]);

  // Scroll detector
  useEffect(() => {
    const f = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", f);
    return () => window.removeEventListener("scroll", f);
  }, []);

  const current = mediaSequence[index];

  return (
    <section
      id="hero"
      className="relative w-full h-screen flex items-center justify-center overflow-hidden bg-black"
    >
      {/* Background video with POSTER (instant paint) */}
      <AnimatePresence mode="wait">
        {current.type === "video" ? (
          <motion.video
            key={current.src}
            src={current.src}
            autoPlay
            muted
            playsInline
            preload="none"
            poster="/images/hero-poster.jpg" // ADD a good poster!!!
            className="absolute inset-0 w-full h-full object-cover"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
          />
        ) : (
          <motion.img
            key={current.src}
            src={current.src}
            alt="Hero Background"
            className="absolute inset-0 w-full h-full object-contain"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
          />
        )}
      </AnimatePresence>

      {/* Overlays */}
      <div className="absolute inset-0 bg-black/70" />
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at center, rgba(255,255,255,0.15) 0%, transparent 70%)",
        }}
      />

      {/* CONTENT */}
      <div className="relative z-10 w-full text-center px-6">
        <motion.img
          src="/meta/logo-icon.webp"
          className="mx-auto w-44 md:w-48 h-auto mb-3"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        />

        <motion.h1
          className="text-2xl md:text-4xl font-extrabold text-white"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          {t("hero.title")}
        </motion.h1>

        <motion.p
          className="mt-3 text-lg md:text-xl text-white/90"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {t("hero.subtitle")}
        </motion.p>

        <motion.a
          href="#about"
          className="inline-block mt-6 px-10 py-3 rounded-full font-semibold text-white bg-[#ec7212]"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="flex items-center gap-1">
            <span>{t("hero.cta")}</span>
            <ChevronDown />
          </div>
        </motion.a>
      </div>

      {/* Scroll Indicator */}
      <AnimatePresence>
        {!scrolled && (
          <motion.div
            key="scroll"
            className="absolute bottom-10 w-full flex justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              className="relative w-7 h-12 rounded-full border-2 border-white/70 flex justify-center items-start"
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ repeat: Infinity, duration: 2 }}
            >
              <motion.div
                className="absolute top-2 w-1.5 h-1.5 bg-white rounded-full"
                animate={{ y: [0, 10, 0] }}
                transition={{ repeat: Infinity, duration: 2 }}
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Hero;
