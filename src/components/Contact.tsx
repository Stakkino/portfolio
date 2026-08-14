"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";

const CONTACT_EMAIL = "[ton-email@exemple.com]";

export default function Contact() {
  const { t } = useLanguage();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Message de ${name}`);
    const body = encodeURIComponent(`${message}\n\n— ${name} (${email})`);
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="max-w-5xl mx-auto px-6 py-24 border-t border-neutral-800">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-3xl font-bold text-white mb-2"
      >
        {t.contact.title}<span className="text-orange-500">.</span>
      </motion.h2>
      <p className="text-neutral-500 mb-8">{t.contact.subtitle}</p>

      <form onSubmit={handleSubmit} className="max-w-lg space-y-4">
        <input
          type="text"
          required
          placeholder={t.contact.name}
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full bg-neutral-900 border border-neutral-800 rounded-lg px-4 py-3 text-white placeholder-neutral-500 focus:border-orange-500 outline-none"
        />
        <input
          type="email"
          required
          placeholder={t.contact.email}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full bg-neutral-900 border border-neutral-800 rounded-lg px-4 py-3 text-white placeholder-neutral-500 focus:border-orange-500 outline-none"
        />
        <textarea
          required
          rows={4}
          placeholder={t.contact.message}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="w-full bg-neutral-900 border border-neutral-800 rounded-lg px-4 py-3 text-white placeholder-neutral-500 focus:border-orange-500 outline-none"
        />
        <button
          type="submit"
          className="px-6 py-3 rounded-full bg-orange-500 text-black font-semibold hover:bg-orange-400 transition-colors"
        >
          {t.contact.send}
        </button>
      </form>

      <div className="flex gap-4 mt-8 text-neutral-400">
        <a href="https://github.com/Stakkino" target="_blank" rel="noopener noreferrer" className="hover:text-orange-400">
          GitHub
        </a>
      </div>
    </section>
  );
}