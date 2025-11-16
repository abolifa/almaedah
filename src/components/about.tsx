"use client";
import { useRef } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { useTranslation } from "react-i18next";

const linePath =
  "M400 0 C450 300 200 500 400 900 C600 1300 200 1600 450 2000 C700 2400 300 2800 600 3200 C900 3600 200 4000 500 4400 C800 4800 300 5200 550 5600 C800 6000 200 6400 400 6800 C600 7200 300 7600 450 8000";

const timelineItems = [
  {
    top: 400,
    side: "left",
    title: "about.item1.title",
    text: "about.item1.text",
    image: "/images/nuts.png",
  },
  {
    top: 1150,
    side: "right",
    title: "about.item2.title",
    text: "about.item2.text",
    image: "/images/dried-fruits.png",
  },
  {
    top: 1900,
    side: "left",
    title: "about.item3.title",
    text: "about.item3.text",
    image: "/images/spices.webp",
  },
  {
    top: 2650,
    side: "right",
    title: "about.item4.title",
    text: "about.item4.text",
    image: "/images/bleila.png",
  },
  {
    top: 3400,
    side: "left",
    title: "about.item5.title",
    text: "about.item5.text",
    image: "/images/seeds.png",
  },
  {
    top: 4200,
    side: "right",
    title: "about.item6.title",
    text: "about.item6.text",
    image: "/images/ghee.png",
  },
  {
    top: 5000,
    side: "left",
    title: "about.item7.title",
    text: "about.item7.text",
    image: "/images/horeca.png",
  },
  {
    top: 5800,
    side: "right",
    title: "about.item8.title",
    text: "about.item8.text",
    image: "/images/quality.png",
  },
  {
    top: 6600,
    side: "left",
    title: "about.item9.title",
    text: "about.item9.text",
    image: "/images/sail.png",
  },
  {
    top: 7400,
    side: "right",
    title: "about.item10.title",
    text: "about.item10.text",
    image: "/images/vision.png",
  },
];

const About = () => {
  const ref = useRef<HTMLDivElement | null>(null);
  const { t } = useTranslation();

  // 🟢 الحل — استخدام scrollYProgress بدون هدف
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const pathLength = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    mass: 0.4,
  });

  return (
    <section
      ref={ref}
      className="relative w-full min-h-[8000px] bg-[#f8f4f0] overflow-hidden"
      id="about"
    >
      {/* 🟥 الخط */}
      <motion.svg
        className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[8000px]"
        viewBox="0 0 800 8000"
        preserveAspectRatio="xMidYMin slice"
      >
        <motion.path
          d={linePath}
          stroke="#d01717"
          strokeWidth={10}
          strokeLinecap="round"
          strokeLinejoin="round"
          style={{ pathLength }}
          fill="none"
        />
      </motion.svg>

      <div className="relative max-w-6xl mx-auto">
        {timelineItems.map((item, _) => (
          <motion.div
            key={item.title}
            className={`absolute max-w-md ${
              item.side === "left" ? "left-[6%]" : "right-[6%]"
            }`}
            style={{ top: item.top }}
            initial={{ opacity: 0, x: item.side === "left" ? -120 : 120 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{
              duration: 1.2,
              ease: "easeOut",
            }}
            viewport={{ amount: 0.4, once: false }}
          >
            {/* Floating container (no card) */}
            <div className="flex flex-col items-center gap-4">
              {/* Image */}
              {item.image && (
                <motion.img
                  src={item.image}
                  alt={item.title}
                  className="max-h-48 object-contain drop-shadow-[0_10px_25px_rgba(0,0,0,0.25)]"
                  initial={{ scale: 0.9, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 1.2, ease: "easeOut" }}
                  viewport={{ once: false }}
                />
              )}

              {/* Text */}
              <motion.div
                className="text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.0, ease: "easeOut", delay: 0.2 }}
              >
                <h3 className="text-2xl font-extrabold text-[#6a4a2d] mb-2">
                  {t(item.title)}
                </h3>
                <p className="text-sm md:text-base text-[#5c4a35] leading-relaxed">
                  {t(item.text)}
                </p>
              </motion.div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default About;
