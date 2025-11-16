"use client";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0 },
};

const products = [
  {
    title: "products.item1.title",
    description: "products.item1.description",
    image: "/products/p-1.png",
    inverted: false,
    color: "#b91c1c",
  },
  {
    title: "products.item2.title",
    description: "products.item2.description",
    image: "/products/p-2.png",
    inverted: true,
    color: "#d97706",
  },
  {
    title: "products.item3.title",
    description: "products.item3.description",
    image: "/products/p-3.png",
    inverted: false,
    color: "#6b21a8",
  },
  {
    title: "products.item4.title",
    description: "products.item4.description",
    image: "/products/p-4.png",
    inverted: true,
    color: "#ca8a04",
  },
];

export default function ProductsSection() {
  const { t } = useTranslation();

  return (
    <section id="products" className="w-full bg-white overflow-hidden">
      <div className="w-full h-[60vh] md:h-[70vh] flex flex-col items-center justify-center text-center px-6">
        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-4xl md:text-6xl font-extrabold text-gray-900 mb-6"
        >
          {t("products.title")}
        </motion.h2>

        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="text-lg md:text-xl text-gray-600 max-w-2xl"
        >
          {t("products.subtitle")}
        </motion.p>
      </div>

      {products.map((p, index) => (
        <div
          key={index}
          className="relative grid grid-cols-1 md:grid-cols-2 h-[90vh] md:h-screen"
        >
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 0.25 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2 }}
            animate={{ y: [0, -20, 0] }}
            className="absolute inset-0 pointer-events-none"
          >
            <div
              className="absolute rounded-full blur-[140px]"
              style={{
                backgroundColor: p.color + "55",
                width: "420px",
                height: "420px",
                top: "10%",
                left: p.inverted ? "65%" : "5%",
              }}
            ></div>

            <div
              className="absolute rounded-full blur-[180px]"
              style={{
                backgroundColor: p.color + "33",
                width: "320px",
                height: "320px",
                bottom: "10%",
                left: p.inverted ? "10%" : "60%",
              }}
            ></div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: p.inverted ? 40 : -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className={`relative w-full h-full ${
              p.inverted ? "md:order-2" : "md:order-1"
            }`}
          >
            <div
              className="absolute inset-0"
              style={{
                background: `linear-gradient(135deg, ${p.color}18 0%, ${p.color}40 100%)`,
              }}
            ></div>

            <img
              src={p.image}
              className="absolute inset-0 w-full h-full object-contain md:object-cover z-10 drop-shadow-2xl"
            />

            <div className="absolute inset-0 bg-black/10 z-20"></div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: p.inverted ? -40 : 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className={`relative flex flex-col justify-center px-8 md:px-16 z-30 ${
              p.inverted ? "md:order-1" : "md:order-2"
            }`}
          >
            <motion.h3
              animate={{ y: [0, -4, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="text-3xl md:text-4xl font-extrabold mb-4"
              style={{ color: p.color }}
            >
              {t(p.title)}
            </motion.h3>

            <motion.p
              animate={{ opacity: [0.85, 1, 0.85] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="text-gray-700 text-lg leading-relaxed"
            >
              {t(p.description)}
            </motion.p>

            <div
              className="mt-6 w-20 h-1 rounded-full"
              style={{ backgroundColor: p.color }}
            ></div>
          </motion.div>
        </div>
      ))}
    </section>
  );
}
