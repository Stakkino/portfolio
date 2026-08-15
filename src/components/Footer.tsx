"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import GithubIcon from "@/components/icons/GithubIcon";
import { Mail } from "lucide-react";

const GITHUB = "https://github.com/Stakkino";
const EMAIL = "jhenstakkino@gmail.com";

export default function Footer() {
  const { t } = useLanguage();
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-neutral-800 mt-12">
      <div className="max-w-6xl mx-auto px-3 md:px-4 py-10 flex flex-col items-center gap-4 text-center">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-white font-medium"
        >
          {t.footer.thanks}
        </motion.p>

        <div className="flex items-center gap-4">
          <a
            href={GITHUB}
            target="_blank"
            rel="noopener noreferrer"
            className="w-9 h-9 rounded-full bg-neutral-900 border border-neutral-800 flex items-center justify-center text-neutral-400 hover:text-blue-400 hover:border-blue-500/50 transition-colors"
            aria-label="GitHub"
          >
            <GithubIcon size={16} />
          </a>
          <a
            href={`mailto:${EMAIL}`}
            className="w-9 h-9 rounded-full bg-neutral-900 border border-neutral-800 flex items-center justify-center text-neutral-400 hover:text-blue-400 hover:border-blue-500/50 transition-colors"
            aria-label="Email"
          >
            <Mail size={16} />
          </a>
        </div>

        <p className="text-neutral-600 text-xs">
          © {year} Stakkino — {t.footer.rights}
        </p>
      </div>
    </footer>
  );
}