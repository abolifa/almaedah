"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin } from "lucide-react";
import { useTranslation } from "react-i18next";
import { FaWhatsapp } from "react-icons/fa";

const Contact = () => {
  const { t } = useTranslation();

  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setLoading(true);
    setSent(false);
    setError("");

    const formData = new FormData(e.target);
    formData.append("to", "info@almaedah.com.ly");

    try {
      const res = await fetch("https://eratech.com.ly/send-form.php", {
        method: "POST",
        body: formData,
      });

      const text = await res.text();

      if (res.ok && text.trim() === "OK") {
        setSent(true);
        e.target.reset();
      } else {
        setError(t("contact.errorSend"));
      }
    } catch {
      setError(t("contact.errorServer"));
    }

    setLoading(false);
  };

  return (
    <section id="contact" className="relative w-full py-24 bg-[#ffffff]">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-stretch">
        {/* LEFT SIDE */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="flex flex-col gap-6"
        >
          <h2 className="text-4xl font-black text-[#6a4a2d]">
            {t("contact.title")}
          </h2>

          <p className="text-[#5c4a35] text-lg leading-relaxed">
            {t("contact.subtitle")}
          </p>

          <div className="bg-white backdrop-blur-sm p-6 rounded-3xl border border-black/5 flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <Mail className="text-[#d8a547]" size={22} />
              <a
                className="text-[#5c4a35] font-medium underline"
                href="mailto:info@almaidaarraqia.com"
              >
                info@almaidaarraqia.com
              </a>
            </div>

            <div className="flex items-center gap-3">
              <Phone className="text-[#d8a547]" size={22} />
              <a
                dir="ltr"
                className="text-[#5c4a35] font-medium underline"
                href="tel:+218912090026"
              >
                +218 91 209 0026
              </a>
            </div>

            <div className="flex items-center gap-3">
              <FaWhatsapp className="text-[#d8a547]" size={22} />
              <a
                dir="ltr"
                className="text-[#5c4a35] font-medium underline"
                href="https://wa.me/218926136522"
              >
                +218 92 613 6522
              </a>
            </div>

            <div className="flex items-center gap-3">
              <MapPin className="text-[#d8a547]" size={22} />
              <span className="text-[#5c4a35] font-medium">
                {t("contact.location")}
              </span>
            </div>
          </div>

          {/* MAP */}
          <div className="rounded-3xl overflow-hidden shadow-lg h-64">
            <iframe
              width="100%"
              height="100%"
              style={{ border: 0 }}
              loading="lazy"
              allowFullScreen
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d11064.694081005601!2d14.539897267530726!3d32.463156183057365!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzLCsDI3JzQ0LjMiTiAxNMKwMzInMjMuNiJF!5e0!3m2!1sar!2sly!4v1731500000000"
            ></iframe>
          </div>
        </motion.div>

        {/* RIGHT SIDE – FORM */}
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="bg-white/90 p-8 rounded-3xl shadow-xl border border-black/5 flex flex-col gap-5"
        >
          <input
            name="name"
            placeholder={t("contact.form.name")}
            required
            className="p-4 rounded-xl border bg-white focus:ring-2 focus:ring-[#d8a547] outline-none"
          />

          <input
            name="email"
            type="email"
            placeholder={t("contact.form.email")}
            required
            className="p-4 rounded-xl border bg-white focus:ring-2 focus:ring-[#d8a547] outline-none"
          />

          <input
            name="phone"
            placeholder={t("contact.form.phone")}
            className="p-4 rounded-xl border bg-white focus:ring-2 focus:ring-[#d8a547] outline-none"
          />

          <textarea
            name="message"
            placeholder={t("contact.form.message")}
            rows={5}
            required
            className="p-4 rounded-xl border bg-white focus:ring-2 focus:ring-[#d8a547] outline-none"
          ></textarea>

          <button
            disabled={loading}
            className="px-6 py-4 rounded-xl bg-[#d8a547] text-white font-semibold hover:bg-[#b78c34] transition shadow-lg"
          >
            {loading ? t("contact.form.sending") : t("contact.form.send")}
          </button>

          {sent && (
            <p className="text-green-600 font-bold mt-2 text-center">
              {t("contact.success")}
            </p>
          )}
          {error && (
            <p className="text-red-600 font-bold mt-2 text-center">{error}</p>
          )}
        </motion.form>
      </div>
    </section>
  );
};

export default Contact;
