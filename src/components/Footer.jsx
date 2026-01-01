import { motion } from "motion/react";
import { Heart, ArrowUp } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const currentYear = new Date().getFullYear();

  const footerLinks = [
    {
      title: "Quick Links",
      links: ["About", "Skills", "Projects", "Experience"],
    },
    {
      title: "Connect",
      links: ["GitHub", "LinkedIn", "Twitter", "Email"],
    },
  ];

  return (
    <footer className="relative py-12 px-6 bg-slate-900/50 border-t border-white/10">
      <div className="container mx-auto">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent mb-4"
            >
              {"<MG />"}
            </motion.div>

            <p className="text-slate-400 max-w-md mb-4">
              Full Stack MERN Developer passionate about creating beautiful,
              functional web applications. Let's build something amazing
              together!
            </p>

            <div className="flex items-center gap-2 text-slate-400">
              <span>Made with</span>
              <Heart className="text-red-500 fill-current animate-pulse" size={16} />
              <span>by Manthan Gedam</span>
            </div>
          </div>

          {/* Links Sections */}
          {footerLinks.map((section, index) => (
            <div key={index}>
              <h4 className="mb-4 text-slate-200">{section.title}</h4>
              <ul className="space-y-2">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a
                      href={`#${link.toLowerCase()}`}
                      className="text-slate-400 hover:text-cyan-400 transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-400 text-sm text-center md:text-left">
            © {currentYear} Manthan Gedam. All rights reserved.
          </p>

          {/* Scroll to Top Button */}
          <motion.button
            onClick={scrollToTop}
            whileHover={{ scale: 1.1, y: -5 }}
            whileTap={{ scale: 0.9 }}
            className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-indigo-600 rounded-full flex items-center justify-center shadow-lg shadow-cyan-500/50 hover:shadow-cyan-500/70 transition-all"
          >
            <ArrowUp className="text-white" size={20} />
          </motion.button>
        </div>
      </div>

      {/* Background Decoration */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-50"></div>
    </footer>
  );
}
