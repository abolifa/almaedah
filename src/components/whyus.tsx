"use client";
import { motion } from "framer-motion";
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
    title: "جودة نختبرها بعناية",
    text: "نطبّق معايير صارمة لفحص المنتجات قبل وصولها إليكم لضمان الطعم، النظافة والقيمة الغذائية.",
  },
  {
    icon: <Star className="w-10 h-10 text-[#d8a547]" />,
    title: "موردون عالميون موثوقون",
    text: "نتعامل مع أفضل الموردين من تركيا وسوريا ومصر والأردن لضمان ثبات الجودة والاستمرارية.",
  },
  {
    icon: <Package className="w-10 h-10 text-[#d8a547]" />,
    title: "تنوع كبير في المنتجات",
    text: "مكسرات، فواكه مجففة، سمن، بهارات، بليلة وبذور… كلها بجودة ممتازة وتناسب جميع الاستخدامات.",
  },
  {
    icon: <Truck className="w-10 h-10 text-[#d8a547]" />,
    title: "توريد سريع وتوفير دائم",
    text: "نضمن وصول المنتجات بشكل منتظم دون انقطاع عبر شبكات لوجستية فعالة.",
  },
  {
    icon: <Utensils className="w-10 h-10 text-[#d8a547]" />,
    title: "حلول خاصة للمطاعم والمخابز",
    text: "نوفر أسعار خاصة وكميات كبيرة للقطاعات المهنية مع متابعة مستمرة.",
  },
  {
    icon: <CheckCircle className="w-10 h-10 text-[#d8a547]" />,
    title: "أسعار تنافسية",
    text: "نقدّم أفضل جودة مقابل سعر مناسب يلائم السوق الليبي.",
  },
];

const WhyUs = () => {
  return (
    <section className="relative w-full py-28 bg-[#fff df5f0]">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <motion.h2
          className="text-4xl font-black text-[#6a4a2d] mb-4"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
        >
          لماذا تختار <span className="text-[#d8a547]">شركة المائدة؟</span>
        </motion.h2>

        <motion.p
          className="text-lg text-[#5c4a35] mb-12 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          نوفّر لكم المواد الغذائية بجودة عالية ومن مصادر موثوقة، مع خدمات توريد
          تلائم الأفراد والمحلات والمطاعم.
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
                {point.title}
              </h3>
              <p className="text-[#5c4a35] text-sm leading-relaxed">
                {point.text}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
