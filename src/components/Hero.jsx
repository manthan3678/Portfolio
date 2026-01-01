import { motion } from "motion/react";
import {
  Download,
  ArrowRight,
  Github,
  Linkedin,
  Mail,
  Code2,
} from "lucide-react";
import MyImage from "../assets/heroimage.png";
import ImageWithFallback from "./figma/ImageWithFallback";

export default function Hero() {
  const socialLinks = [
    {
      icon: Github,
      url: "https://github.com/manthan3678",
      color: "hover:text-purple-400",
      label: "GitHub Profile",
    },
    {
      icon: Linkedin,
      url: "https://www.linkedin.com/in/manthan-gedam/",
      color: "hover:text-cyan-400",
      label: "LinkedIn Profile",
    },
    {
      icon: Mail,
      url: "manthangedam198@gmail.com",
      color: "hover:text-indigo-400",
      label: "Send Email",
    },
  ];

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center pt-20 px-6"
    >
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-block mb-4 px-4 py-2 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 border border-cyan-500/30 rounded-full backdrop-blur-sm"
            >
              <span className="text-cyan-400">👋 Welcome to my portfolio</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="mb-4 bg-gradient-to-r from-white via-cyan-200 to-purple-300 bg-clip-text text-transparent"
            >
              Hi, I'm{" "}
              <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                Manthan Gedam
              </span>
            </motion.h1>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="mb-6 text-slate-300"
            >
              {/* Full Stack MERN Developer | Frontend Specialist */}
              Full Stack MERN Developer
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="mb-8 text-slate-400 max-w-lg"
            >
              Passionate about creating modern, responsive web applications with
              cutting-edge technologies. Specializing in React, Node.js, and
              creating seamless user experiences with beautiful animations and
              UI/UX design.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-wrap gap-4 mb-8"
            >
              <motion.a
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 0 30px rgba(6, 182, 212, 0.5)",
                }}
                href="https://www.linkedin.com/in/manthan-gedam/"
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-indigo-600 rounded-full text-white flex items-center gap-2 shadow-lg shadow-cyan-500/50"
              >
                Hire Me <ArrowRight size={20} />
              </motion.a>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 bg-white/5 backdrop-blur-sm border border-white/20 rounded-full text-white flex items-center gap-2 hover:bg-white/10 transition-all"
              >
                <Download size={20} /> Download Resume
              </motion.button>
            </motion.div>
            {/* CTA Buttons END */}
            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="flex gap-4"
            >
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                  href={social.url}
                  className={`w-12 h-12 flex items-center justify-center bg-white/5 backdrop-blur-sm border border-white/10 rounded-full text-slate-400 ${social.color} transition-all`}
                >
                  <social.icon size={20} />
                </motion.a>
              ))}
            </motion.div>
            {/* Social Links */}
          </motion.div>

          {/* Right Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative">
              {/* Floating Cyan Glass Box */}
              <motion.div
                animate={{ y: [0, -20, 0] }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute -top-10 -left-10 w-32 h-32 bg-gradient-to-br from-cyan-500/20 to-transparent border border-cyan-500/30 rounded-3xl backdrop-blur-sm rotate-12 z-10"
              >
                <div className="flex items-center justify-center h-full">
                  <Code2 className="text-cyan-400" size={48} />
                </div>
              </motion.div>

              {/* Floating Purple Glass Box */}
              <motion.div
                animate={{ y: [0, 20, 0] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1,
                }}
                className="absolute -bottom-10 right-0 w-40 h-40 bg-gradient-to-br from-purple-500/20 to-transparent border border-purple-500/30 rounded-3xl backdrop-blur-sm -rotate-12 z-10"
              >
                <div className="flex items-center justify-center h-full text-4xl">
                  ⚡
                </div>
              </motion.div>

              {/* Main Profile Card */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg border border-white/20 rounded-3xl p-8 shadow-2xl"
              >
                <div className="relative aspect-square rounded-2xl overflow-hidden mb-6">
                  <ImageWithFallback
                    src={MyImage}
                    alt="Manthan Gedam"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent"></div>
                </div>

                {/* Status Badge */}
                <div className="flex items-center justify-center gap-2 px-4 py-2 bg-green-500/20 border border-green-500/30 rounded-full backdrop-blur-sm">
                  <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                  <span className="text-green-400">Available for work</span>
                </div>
              </motion.div>

              {/* Decorative Code Window */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1 }}
                className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 w-64 bg-slate-900/90 backdrop-blur-xl border border-cyan-500/30 rounded-lg shadow-2xl p-4"
              >
                <div className="flex gap-2 mb-3">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>

                <div className="space-y-2 font-mono text-xs">
                  <div className="text-purple-400">
                    const <span className="text-cyan-400">developer</span> ={" "}
                    {"{"}
                  </div>
                  <div className="text-slate-400 pl-4">
                    name: <span className="text-green-400">'Manthan'</span>,
                  </div>
                  <div className="text-slate-400 pl-4">
                    skills: <span className="text-yellow-400">['MERN']</span>,
                  </div>
                  <div className="text-slate-400 pl-4">
                    passion: <span className="text-cyan-400">∞</span>
                  </div>
                  <div className="text-purple-400">{"}"}</div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
