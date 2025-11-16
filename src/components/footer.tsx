"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();

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
            src="/meta/logo-icon.webp"
            alt={t("footer.brand.alt")}
            className="w-24 drop-shadow-[0_0_20px_rgba(255,215,0,0.35)]"
          />

          <p className="text-[#5c4a35] leading-relaxed text-sm text-center">
            {t("footer.brand.description")}
          </p>
        </motion.div>

        {/* QUICK LINKS */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="flex flex-col items-start gap-3"
        >
          <h3 className="text-xl font-bold text-[#6a4a2d] mb-2">
            {t("footer.links.title")}
          </h3>

          <a
            href="#hero"
            className="text-[#5c4a35] hover:text-[#d8a547] transition"
          >
            {t("footer.links.home")}
          </a>
          <a
            href="#about"
            className="text-[#5c4a35] hover:text-[#d8a547] transition"
          >
            {t("footer.links.about")}
          </a>
          <a
            href="#whyus"
            className="text-[#5c4a35] hover:text-[#d8a547] transition"
          >
            {t("footer.links.whyus")}
          </a>
          <a
            href="#contact"
            className="text-[#5c4a35] hover:text-[#d8a547] transition"
          >
            {t("footer.links.contact")}
          </a>
        </motion.div>

        {/* CONTACT INFO */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-col items-start gap-4"
        >
          <h3 className="text-xl font-bold text-[#6a4a2d] mb-2">
            {t("footer.contact.title")}
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
              +218 91 209 0026
            </a>
          </div>

          <div className="flex items-center gap-3">
            <Phone className="text-[#d8a547]" size={20} />
            <a
              href="tel:+218926136522"
              dir="ltr"
              className="text-[#5c4a35] hover:text-[#d8a547] transition underline"
            >
              +218 92 613 6522
            </a>
          </div>

          <div className="flex items-center gap-3">
            <MapPin className="text-[#d8a547]" size={20} />
            <span className="text-[#5c4a35]">
              {t("footer.contact.location")}
            </span>
          </div>
        </motion.div>

        {/* WHATSAPP BOX */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex flex-col gap-4"
        >
          <h3 className="text-xl font-bold text-[#6a4a2d] mb-2">
            {t("footer.whatsapp.title")}
          </h3>

          <a
            href="https://wa.me/218912090026"
            target="_blank"
            className="w-full py-4 rounded-2xl bg-[#25D366] text-white font-bold text-center shadow-[0_0_25px_rgba(37,211,102,0.4)] hover:shadow-[0_0_40px_rgba(37,211,102,0.6)] transition"
          >
            {t("footer.whatsapp.button")}
          </a>
        </motion.div>
      </div>

      {/* COPYRIGHT */}
      <div className="mt-14 text-center text-sm text-[#846a55]">
        © {new Date().getFullYear()} {t("footer.copy")}
      </div>
    </footer>
  );
};

export default Footer;
