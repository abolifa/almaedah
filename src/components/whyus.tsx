"use client";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import {
  CheckCircle,
  Package,
  Star,
  Truck,
  Shield,
  Utensils,
} from "lucide-react";

const whyPoints = [
  {
    icon: <Shield className="w-10 h-10 text-[#d8a547]" />,
    title: "whyus.item1.title",
    text: "whyus.item1.text",
  },
  {
    icon: <Star className="w-10 h-10 text-[#d8a547]" />,
    title: "whyus.item2.title",
    text: "whyus.item2.text",
  },
  {
    icon: <Package className="w-10 h-10 text-[#d8a547]" />,
    title: "whyus.item3.title",
    text: "whyus.item3.text",
  },
  {
    icon: <Truck className="w-10 h-10 text-[#d8a547]" />,
    title: "whyus.item4.title",
    text: "whyus.item4.text",
  },
  {
    icon: <Utensils className="w-10 h-10 text-[#d8a547]" />,
    title: "whyus.item5.title",
    text: "whyus.item5.text",
  },
  {
    icon: <CheckCircle className="w-10 h-10 text-[#d8a547]" />,
    title: "whyus.item6.title",
    text: "whyus.item6.text",
  },
];

const WhyUs = () => {
  const { t } = useTranslation();

  return (
    <section id="whyus" className="relative w-full py-28 bg-[#fffdf5]">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <motion.h2
          className="text-4xl font-black text-[#6a4a2d] mb-4"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
        >
          {t("whyus.title")}{" "}
          <span className="text-[#d8a547]">{t("whyus.highlight")}</span>
        </motion.h2>

        <motion.p
          className="text-lg text-[#5c4a35] mb-12 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          {t("whyus.subtitle")}
        </motion.p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mt-10">
          {whyPoints.map((point, i) => (
            <motion.div
              key={i}
              className="rounded-3xl p-8 backdrop-blur-sm bg-white/70 shadow-[0_0_40px_rgba(255,215,0,0.25)] hover:shadow-[0_0_55px_rgba(255,215,0,0.45)] transition-all duration-300"
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: i * 0.1 }}
            >
              <div className="flex justify-center mb-4">{point.icon}</div>
              <h3 className="text-2xl font-bold text-[#6a4a2d] mb-2">
                {t(point.title)}
              </h3>
              <p className="text-[#5c4a35] text-sm leading-relaxed">
                {t(point.text)}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
