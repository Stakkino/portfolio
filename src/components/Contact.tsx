"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, CheckCircle2, XCircle } from "lucide-react";
import GithubIcon from "@/components/icons/GithubIcon";

// 1. Crée un compte gratuit sur https://formspree.io
// 2. Crée un formulaire, copie son "endpoint" (ex: https://formspree.io/f/xxxxxxx)
// 3. Colle-le ci-dessous à la place de l'URL exemple
const FORMSPREE_ENDPOINT = "https://formspree.io/f/REMPLACE_MOI";

const PHONE = "+261 38 80 865 33";
const EMAIL = "jhenstakkino@gmail.com";
const CITY = "Antananarivo, Madagascar";
const GITHUB = "https://github.com/Stakkino";

type Status = "idle" | "loading" | "success" | "error";

export default function Contact() {
  const [status, setStatus] = useState<Status>("idle");
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: JSON.stringify(form),
      });

      if (res.ok) {
        setStatus("success");
        setForm({ name: "", email: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  const infos = [
    { icon: Phone, label: PHONE, href: `tel:${PHONE.replace(/\s/g, "")}` },
    { icon: Mail, label: EMAIL, href: `mailto:${EMAIL}` },
    { icon: MapPin, label: CITY, href: undefined },
    { icon: GithubIcon, label: "github.com/Stakkino", href: GITHUB },
  ];

  return (
    <section id="contact" className="max-w-6xl mx-auto px-3 md:px-4 py-24">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-3xl font-bold text-white mb-2"
      >
        Contact
        <span className="text-blue-500">.</span>
      </motion.h2>
      <p className="text-neutral-500 mb-10">
        Une opportunité, une question, un projet ? Écris-moi.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-[1fr_1.3fr] gap-6">
        {/* Coordonnées */}
        <div className="grid grid-cols-1 gap-3">
          {infos.map((info, i) => {
            const Icon = info.icon;
            const content = (
              <>
                <span className="shrink-0 w-9 h-9 rounded-full bg-blue-500/10 border border-blue-500/20 flex items-center justify-center">
                  <Icon className="text-blue-400" size={16} />
                </span>
                <span className="text-neutral-300 text-sm truncate">{info.label}</span>
              </>
            );
            const cardClass =
              "flex items-center gap-3 bg-neutral-900/60 border border-neutral-800 rounded-xl px-4 py-3.5 hover:border-blue-500/50 hover:bg-neutral-900 transition-colors";

            return info.href ? (
              <motion.a
                key={info.label}
                href={info.href}
                target={info.href.startsWith("http") ? "_blank" : undefined}
                rel={info.href.startsWith("http") ? "noopener noreferrer" : undefined}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                whileHover={{ x: 4 }}
                className={cardClass}
              >
                {content}
              </motion.a>
            ) : (
              <motion.div
                key={info.label}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className={cardClass}
              >
                {content}
              </motion.div>
            );
          })}
        </div>

        {/* Formulaire */}
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="relative bg-neutral-900/60 border border-neutral-800 rounded-2xl p-6 md:p-8 overflow-hidden"
        >
          <div className="pointer-events-none absolute -top-24 -right-24 w-64 h-64 bg-blue-600/20 rounded-full blur-3xl" />

          <div className="relative flex flex-col gap-4">
            <input
              type="text"
              name="name"
              placeholder="Ton nom"
              required
              value={form.name}
              onChange={handleChange}
              className="bg-neutral-950 border border-neutral-800 rounded-lg px-4 py-3 text-sm text-white placeholder:text-neutral-600 focus:outline-none focus:border-blue-500 transition-colors"
            />
            <input
              type="email"
              name="email"
              placeholder="Ton email"
              required
              value={form.email}
              onChange={handleChange}
              className="bg-neutral-950 border border-neutral-800 rounded-lg px-4 py-3 text-sm text-white placeholder:text-neutral-600 focus:outline-none focus:border-blue-500 transition-colors"
            />
            <textarea
              name="message"
              placeholder="Ton message"
              required
              rows={5}
              value={form.message}
              onChange={handleChange}
              className="bg-neutral-950 border border-neutral-800 rounded-lg px-4 py-3 text-sm text-white placeholder:text-neutral-600 focus:outline-none focus:border-blue-500 transition-colors resize-none"
            />

            <motion.button
              type="submit"
              disabled={status === "loading"}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-linear-to-r from-blue-600 to-slate-800 text-white text-sm font-semibold shadow-lg shadow-blue-950/40 hover:shadow-blue-900/60 transition-shadow disabled:opacity-60"
            >
              {status === "loading" ? (
                "Envoi en cours..."
              ) : (
                <>
                  <Send size={15} />
                  Envoyer le message
                </>
              )}
            </motion.button>

            {status === "success" && (
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="flex items-center gap-2 text-sm text-blue-400"
              >
                <CheckCircle2 size={16} />
                Message envoyé, merci !
              </motion.p>
            )}
            {status === "error" && (
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="flex items-center gap-2 text-sm text-red-400"
              >
                <XCircle size={16} />
                Une erreur est survenue, réessaie ou écris-moi directement par email.
              </motion.p>
            )}
          </div>
        </motion.form>
      </div>
    </section>
  );
}