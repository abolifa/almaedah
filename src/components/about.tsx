"use client";
import { useRef } from "react";
import { motion, useScroll, useSpring } from "framer-motion";

const linePath =
  "M400 0 C450 300 200 500 400 900 C600 1300 200 1600 450 2000 C700 2400 300 2800 600 3200 C900 3600 200 4000 500 4400 C800 4800 300 5200 550 5600 C800 6000 200 6400 400 6800 C600 7200 300 7600 450 8000";

const timelineItems = [
  {
    top: 400,
    side: "left",
    title: "من الحقول تبدأ الحكاية",
    text: "نختار أفضل أنواع المكسرات والفستق والكاكاوية من حقول عالمية موثوقة لنقدّم لكم بداية نقية لكل منتج.",
    image: "/images/nuts.png",
  },
  {
    top: 1150,
    side: "right",
    title: "ثمار مجففة… بطعم الحياة",
    text: "قمر الدين والتين المجفف نختارها بعناية لتصل إليكم بطعم أصيل وجودة عالية.",
    image: "/images/dried-fruits.png",
  },
  {
    top: 1900,
    side: "left",
    title: "نكهات عربية أصيلة",
    text: "من النعناع المجفف إلى الكمون والفلفل والبهارات… نقدم لكم نكهات تضيف للمطبخ لمسة تراثية مميزة.",
    image: "/images/spices.webp",
  },
  {
    top: 2650,
    side: "right",
    title: "البليلة… دفء يجمع العائلة",
    text: "البليلة الغنية والمختارة بعناية، تُقدَّم لكم بجودة عالية لتكون جزءًا من طقوس السهرات والشتاء.",
    image: "/images/bleila.png",
  },
  {
    top: 3400,
    side: "left",
    title: "بذور دوار الشمس والصحة",
    text: "نستورد بذور دوار الشمس عالية الجودة لتكون وجبة خفيفة صحية ومغذية لكم ولعائلتكم.",
    image: "/images/seeds.png",
  },
  {
    top: 4200,
    side: "right",
    title: "السمن العربي… نكهة البيت",
    text: "سمن عربي أصلي نستورده بجودة عالية ليمنحكم نكهة بيتية أصيلة في كل وصفة.",
    image: "/images/ghee.png",
  },
  {
    top: 5000,
    side: "left",
    title: "حلول غذائية للمطاعم والمخابز",
    text: "نوفر المكسرات، البهارات، السمن، والبذور بكميات كبيرة لتلبية احتياجات المطاعم والمخابز.",
    image: "/images/horeca.png",
  },
  {
    top: 5800,
    side: "right",
    title: "جودة تُفحص بعناية",
    text: "تمر كل منتجات المائدة بمراحل فحص دقيقة لضمان الطعم والجودة والنظافة قبل وصولها إليكم.",
    image: "/images/quality.png",
  },
  {
    top: 6600,
    side: "left",
    title: "شبكة استيراد عالمية",
    text: "نتعامل مع كبار الموردين حول العالم لضمان استمرارية التوريد وثبات الجودة.",
    image: "/images/sail.png",
  },
  {
    top: 7400,
    side: "right",
    title: "رؤية شركة المائدة",
    text: "أن نكون الشريك الأول في ليبيا لاستيراد المواد الغذائية بجودة عالية وموثوقية مستمرة.",
    image: "/images/vision.png",
  },
];

const About = () => {
  const ref = useRef<HTMLDivElement | null>(null);

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
                  {item.title}
                </h3>
                <p className="text-sm md:text-base text-[#5c4a35] leading-relaxed">
                  {item.text}
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
