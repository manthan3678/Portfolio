// import { motion } from "framer-motion";
import { motion } from "motion/react";
import { useRef } from "react";
import useInView from "../hooks/useInView";
import { GraduationCap, Award, BookOpen, Trophy } from "lucide-react";

export default function Education() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const education = {
    degree: "Bachelor of Technology",
    major: "Computer Science Engineering",
    year: "2021 - 2025 (4th Year)",
    university: "Leading University, India",
    achievements: [
      "Maintaining strong academic performance",
      "Active participant in coding competitions",
      "Member of technical clubs and societies",
      "Worked on multiple academic and personal projects",
    ],
  };

  const certifications = [
    {
      name: "Full Stack Web Development",
      issuer: "Online Platform",
      icon: Award,
    },
    {
      name: "React - The Complete Guide",
      issuer: "Udemy",
      icon: BookOpen,
    },
    {
      name: "Node.js & MongoDB",
      issuer: "Course Provider",
      icon: Trophy,
    },
  ];

  return (
    <section id="education" className="py-20 px-6" ref={ref}>
      <div className="container mx-auto">
        {/* Title Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 border border-cyan-500/30 rounded-full text-cyan-400 mb-4">
            Learning Path
          </span>

          <h2 className="mb-4 bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">
            Education & Certifications
          </h2>

          <div className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-purple-600 mx-auto rounded-full"></div>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Main Education Card */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:col-span-2"
            >
              <div className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg border border-white/20 rounded-3xl p-8 md:p-10 overflow-hidden">
                {/* Background pattern */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-cyan-500/10 to-purple-500/10 rounded-full blur-3xl"></div>

                <div className="relative z-10 flex flex-col md:flex-row gap-8">
                  {/* Icon */}
                  <div className="flex-shrink-0">
                    <motion.div
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.6 }}
                      className="w-20 h-20 bg-gradient-to-br from-cyan-500 to-indigo-600 rounded-3xl flex items-center justify-center shadow-lg shadow-cyan-500/50"
                    >
                      <GraduationCap className="text-white" size={40} />
                    </motion.div>
                  </div>

                  {/* Content Section */}
                  <div className="flex-1">
                    <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                      <div>
                        <h3 className="text-slate-200 mb-2">
                          {education.degree}
                        </h3>
                        <h4 className="text-cyan-400 mb-1">
                          {education.major}
                        </h4>
                        <p className="text-slate-400">{education.university}</p>
                      </div>

                      <div className="px-4 py-2 bg-gradient-to-r from-purple-500/20 to-indigo-500/20 border border-purple-500/30 rounded-full backdrop-blur-sm">
                        <span className="text-purple-300">
                          {education.year}
                        </span>
                      </div>
                    </div>

                    {/* Achievements */}
                    <div className="mt-6">
                      <h5 className="text-slate-300 mb-4 flex items-center gap-2">
                        <span className="w-2 h-2 bg-cyan-400 rounded-full"></span>
                        Key Highlights
                      </h5>

                      <div className="grid md:grid-cols-2 gap-3">
                        {education.achievements.map((achievement, index) => (
                          <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -10 }}
                            animate={
                              isInView
                                ? { opacity: 1, x: 0 }
                                : { opacity: 0, x: -10 }
                            }
                            transition={{
                              duration: 0.4,
                              delay: 0.4 + index * 0.1,
                            }}
                            className="flex items-start gap-2 text-slate-400"
                          >
                            <span className="text-cyan-400 mt-1">✓</span>
                            {achievement}
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Certifications Section */}
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={
                  isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
                }
                transition={{ duration: 0.5, delay: 0.6 + index * 0.15 }}
              >
                <motion.div
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="h-full bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg border border-white/20 rounded-2xl p-6 hover:border-cyan-500/50 transition-all"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-500/20 to-indigo-500/20 border border-purple-500/30 rounded-xl flex items-center justify-center">
                      <cert.icon className="text-purple-400" size={24} />
                    </div>

                    <div>
                      <h4 className="text-slate-200 mb-1">{cert.name}</h4>
                      <p className="text-slate-400 text-sm">{cert.issuer}</p>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>

          {/* Timeline Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 1 }}
            className="mt-8 bg-gradient-to-r from-white/5 to-white/0 backdrop-blur-sm border border-white/10 rounded-3xl p-8"
          >
            <h4 className="mb-6 text-slate-200 text-center">
              Continuous Learning Journey
            </h4>

            <div className="flex flex-wrap justify-center gap-4">
              {[
                { year: "2021", milestone: "Started Web Development" },
                { year: "2022", milestone: "Mastered MERN Stack" },
                { year: "2023", milestone: "Professional Experience" },
                { year: "2024", milestone: "Advanced UI/UX & Animations" },
                { year: "2025", milestone: "Ready for Industry" },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={
                    isInView
                      ? { opacity: 1, scale: 1 }
                      : { opacity: 0, scale: 0.8 }
                  }
                  transition={{ duration: 0.4, delay: 1.2 + index * 0.1 }}
                  whileHover={{ scale: 1.1, y: -5 }}
                  className="px-6 py-4 bg-gradient-to-br from-cyan-500/10 to-purple-500/10 border border-cyan-500/30 rounded-2xl text-center cursor-default"
                >
                  <div className="text-xl text-cyan-400 mb-1">{item.year}</div>
                  <div className="text-slate-400 text-sm">{item.milestone}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
