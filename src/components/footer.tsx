"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="relative bg-[#f8f4f0] pt-20 pb-10 border-t border-[#e0d4c4]">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-12 text-right">
        {/* LOGO & BRAND */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center gap-4"
        >
          <img
            src="/meta/logo-icon.png"
            alt="شركة المائدة"
            className="w-24 drop-shadow-[0_0_20px_rgba(255,215,0,0.35)]"
          />

          <p className="text-[#5c4a35] leading-relaxed text-sm">
            شركة المائدة لاستيراد المواد الغذائية نختار لكم أجود الأصناف من
            مصادر موثوقة حول العالم.
          </p>
        </motion.div>

        {/* QUICK LINKS */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="flex flex-col gap-3"
        >
          <h3 className="text-xl font-bold text-[#6a4a2d] mb-2">روابط سريعة</h3>

          <a
            href="#hero"
            className="text-[#5c4a35] hover:text-[#d8a547] transition"
          >
            الرئيسية
          </a>
          <a
            href="#about"
            className="text-[#5c4a35] hover:text-[#d8a547] transition"
          >
            من نحن
          </a>
          <a
            href="#whyus"
            className="text-[#5c4a35] hover:text-[#d8a547] transition"
          >
            لماذا نحن
          </a>
          <a
            href="#contact"
            className="text-[#5c4a35] hover:text-[#d8a547] transition"
          >
            تواصل معنا
          </a>
        </motion.div>

        {/* CONTACT INFO */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-col gap-4"
        >
          <h3 className="text-xl font-bold text-[#6a4a2d] mb-2">
            معلومات الاتصال
          </h3>

          <div className="flex items-center gap-3">
            <Mail className="text-[#d8a547]" size={20} />
            <a
              href="mailto:info@almaedah.com.ly"
              className="text-[#5c4a35] hover:text-[#d8a547] transition underline"
            >
              info@almaedah.com.ly
            </a>
          </div>

          <div className="flex items-center gap-3">
            <Phone className="text-[#d8a547]" size={20} />
            <a
              href="tel:+218912090026"
              dir="ltr"
              className="text-[#5c4a35] hover:text-[#d8a547] transition underline"
            >
              +218 912 090 026
            </a>
          </div>

          <div className="flex items-center gap-3">
            <Phone className="text-[#d8a547]" size={20} />
            <a
              href="tel:+218926136522"
              dir="ltr"
              className="text-[#5c4a35] hover:text-[#d8a547] transition underline"
            >
              +218 926 136 522
            </a>
          </div>

          <div className="flex items-center gap-3">
            <MapPin className="text-[#d8a547]" size={20} />
            <span className="text-[#5c4a35]">زليتن - ليبيا</span>
          </div>
        </motion.div>

        {/* WHATSAPP BOX */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex flex-col gap-4"
        >
          <h3 className="text-xl font-bold text-[#6a4a2d] mb-2">تواصل سريع</h3>

          <a
            href="https://wa.me/218912090026"
            target="_blank"
            className="w-full py-4 rounded-2xl bg-[#25D366] text-white font-bold text-center shadow-[0_0_25px_rgba(37,211,102,0.4)] hover:shadow-[0_0_40px_rgba(37,211,102,0.6)] transition"
          >
            واتساب الآن
          </a>
        </motion.div>
      </div>

      {/* COPYRIGHT */}
      <div className="mt-14 text-center text-sm text-[#846a55]">
        © {new Date().getFullYear()} شركة المائدة لاستيراد المواد الغذائية —
        جميع الحقوق محفوظة.
      </div>
    </footer>
  );
};

export default Footer;
