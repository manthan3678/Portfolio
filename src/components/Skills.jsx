import { motion } from "motion/react";
import { useRef } from "react";
import useInView from "../hooks/useInView";

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const skillCategories = [
    {
      category: "Frontend",
      skills: [
        { name: "React", level: 90, icon: "⚛️" },
        { name: "JavaScript", level: 85, icon: "📜" },
        { name: "HTML5", level: 95, icon: "🌐" },
        { name: "CSS3", level: 90, icon: "🎨" },
        { name: "Tailwind", level: 88, icon: "💨" },
        { name: "Bootstrap", level: 80, icon: "🅱️" },
      ],
    },
    {
      category: "Backend",
      skills: [
        { name: "Node.js", level: 85, icon: "🟢" },
        { name: "Express.js", level: 82, icon: "🚂" },
        { name: "MongoDB", level: 80, icon: "🍃" },
        { name: "REST APIs", level: 85, icon: "🔌" },
      ],
    },
    {
      category: "Tools & Others",
      skills: [
        { name: "Git/GitHub", level: 88, icon: "🐙" },
        { name: "C++", level: 75, icon: "⚙️" },
        { name: "Responsive Design", level: 92, icon: "📱" },
        { name: "UI/UX Design", level: 80, icon: "✨" },
      ],
    },
  ];

  return (
    <section id="skills" className="py-20 px-6 bg-slate-900/30" ref={ref}>
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 border border-cyan-500/30 rounded-full text-cyan-400 mb-4">
            My Expertise
          </span>
          <h2 className="mb-4 bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">
            Skills & Technologies
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-purple-600 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.2 }}
            >
              <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg border border-white/20 rounded-3xl p-8 h-full hover:border-cyan-500/50 transition-all">
                <h3 className="mb-6 text-slate-200 flex items-center gap-3">
                  <span className="w-10 h-10 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 rounded-lg flex items-center justify-center">
                    {categoryIndex === 0
                      ? "💻"
                      : categoryIndex === 1
                      ? "⚡"
                      : "🛠️"}
                  </span>
                  {category.category}
                </h3>

                <div className="space-y-6">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, x: -20 }}
                      animate={
                        isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }
                      }
                      transition={{
                        duration: 0.4,
                        delay: categoryIndex * 0.2 + skillIndex * 0.1,
                      }}
                    >
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center gap-2">
                          <span className="text-xl">{skill.icon}</span>
                          <span className="text-slate-300">{skill.name}</span>
                        </div>
                        <span className="text-cyan-400">{skill.level}%</span>
                      </div>

                      <div className="h-2 bg-slate-800 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={
                            isInView
                              ? { width: `${skill.level}%` }
                              : { width: 0 }
                          }
                          transition={{
                            duration: 1,
                            delay: categoryIndex * 0.2 + skillIndex * 0.1 + 0.3,
                          }}
                          className="h-full bg-gradient-to-r from-cyan-500 via-indigo-500 to-purple-600 rounded-full relative"
                        >
                          <div className="absolute right-0 top-0 w-2 h-full bg-white/50 blur-sm"></div>
                        </motion.div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-12"
        >
          <div className="bg-gradient-to-br from-white/5 to-white/0 backdrop-blur-sm border border-white/10 rounded-3xl p-8">
            <h4 className="mb-6 text-center text-slate-300">
              Tech Stack Highlights
            </h4>
            <div className="flex flex-wrap justify-center gap-3">
              {[
                {
                  name: "React",
                  color:
                    "from-cyan-500/20 to-cyan-600/20 border-cyan-500/50 text-cyan-400",
                },
                {
                  name: "Node.js",
                  color:
                    "from-green-500/20 to-green-600/20 border-green-500/50 text-green-400",
                },
                {
                  name: "MongoDB",
                  color:
                    "from-emerald-500/20 to-emerald-600/20 border-emerald-500/50 text-emerald-400",
                },
                {
                  name: "Express",
                  color:
                    "from-slate-500/20 to-slate-600/20 border-slate-500/50 text-slate-400",
                },
                {
                  name: "JavaScript",
                  color:
                    "from-yellow-500/20 to-yellow-600/20 border-yellow-500/50 text-yellow-400",
                },
                {
                  name: "Tailwind CSS",
                  color:
                    "from-blue-500/20 to-blue-600/20 border-blue-500/50 text-blue-400",
                },
                {
                  name: "Git",
                  color:
                    "from-orange-500/20 to-orange-600/20 border-orange-500/50 text-orange-400",
                },
                {
                  name: "C++",
                  color:
                    "from-indigo-500/20 to-indigo-600/20 border-indigo-500/50 text-indigo-400",
                },
              ].map((tech, index) => (
                <motion.div
                  key={tech.name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={
                    isInView
                      ? { opacity: 1, scale: 1 }
                      : { opacity: 0, scale: 0.8 }
                  }
                  transition={{ duration: 0.3, delay: 0.9 + index * 0.05 }}
                  whileHover={{ scale: 1.1, y: -5 }}
                  className={`px-6 py-3 bg-gradient-to-r ${tech.color} border backdrop-blur-sm rounded-full shadow-lg cursor-default`}
                >
                  {tech.name}
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
