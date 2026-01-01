import { motion } from "motion/react";
import { useRef } from "react";
import useInView from "../hooks/useInView"; // <-- JS version
import { ExternalLink, Github, Sparkles } from "lucide-react";
import ImageWithFallback from "./figma/ImageWithFallback";

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const projects = [
    {
      title: "E-Commerce Platform",
      description:
        "Full-stack e-commerce solution with user authentication, product management, cart functionality, and payment integration.",
      image:
        "https://images.unsplash.com/photo-1658297063569-162817482fb6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
      tags: ["React", "Node.js", "MongoDB", "Stripe"],
      gradient: "from-pink-500/20 to-rose-500/20 border-pink-500/30",
    },
    {
      title: "Analytics Dashboard",
      description:
        "Real-time data visualization dashboard with interactive charts, graphs, and custom filtering options for business insights.",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
      tags: ["React", "D3.js", "Express", "PostgreSQL"],
      gradient: "from-cyan-500/20 to-blue-500/20 border-cyan-500/30",
    },
    {
      title: "Modern Web App",
      description:
        "Progressive web application with offline capabilities, push notifications, and responsive design for seamless user experience.",
      image:
        "https://images.unsplash.com/photo-1717996563514-e3519f9ef9f7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
      tags: ["React", "PWA", "Firebase", "Tailwind"],
      gradient: "from-purple-500/20 to-indigo-500/20 border-purple-500/30",
    },
    {
      title: "Mobile App UI",
      description:
        "Beautiful mobile-first interface with smooth animations, gesture controls, and modern design patterns.",
      image:
        "https://images.unsplash.com/photo-1609921212029-bb5a28e60960?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
      tags: ["React Native", "Expo", "Redux", "Animations"],
      gradient: "from-emerald-500/20 to-teal-500/20 border-emerald-500/30",
    },
    {
      title: "Task Management System",
      description:
        "Collaborative task management tool with real-time updates, team collaboration, and project tracking features.",
      image:
        "https://images.unsplash.com/photo-1566915896913-549d796d2166?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
      tags: ["React", "Socket.io", "MongoDB", "Express"],
      gradient: "from-orange-500/20 to-amber-500/20 border-orange-500/30",
    },
    {
      title: "Social Media Platform",
      description:
        "Feature-rich social networking platform with posts, likes, comments, real-time messaging, and user profiles.",
      image:
        "https://images.unsplash.com/photo-1717996563514-e3519f9ef9f7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
      tags: ["MERN Stack", "WebSocket", "AWS", "Redis"],
      gradient: "from-violet-500/20 to-purple-500/20 border-violet-500/30",
    },
  ];

  return (
    <section id="projects" className="py-20 px-6" ref={ref}>
      <div className="container mx-auto">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 border border-cyan-500/30 rounded-full text-cyan-400 mb-4">
            My Work
          </span>

          <h2 className="mb-4 bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">
            Featured Projects
          </h2>

          <div className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-purple-600 mx-auto rounded-full"></div>

          <p className="mt-6 text-slate-400 max-w-2xl mx-auto">
            Here are some of my recent projects showcasing skills in full-stack
            development, UI/UX design, and modern web applications.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="group"
            >
              <div className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg border border-white/20 rounded-3xl overflow-hidden hover:border-cyan-500/50 transition-all h-full">
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <ImageWithFallback
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent"></div>

                  {/* Badge */}
                  <div className="absolute top-4 right-4">
                    <div
                      className={`px-3 py-1 bg-gradient-to-r ${project.gradient} border backdrop-blur-md rounded-full flex items-center gap-1`}
                    >
                      <Sparkles size={14} className="text-cyan-400" />
                      <span className="text-xs text-white">Featured</span>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="mb-3 text-slate-200 group-hover:text-cyan-400 transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-slate-400 mb-4">{project.description}</p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs text-slate-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Buttons */}
                  <div className="flex gap-3">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex-1 px-4 py-2 bg-gradient-to-r from-cyan-500 to-indigo-600 rounded-xl text-white text-sm flex items-center justify-center gap-2 shadow-lg shadow-cyan-500/20"
                    >
                      <ExternalLink size={16} />
                      View Project
                    </motion.button>

                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="px-4 py-2 bg-white/5 border border-white/10 rounded-xl text-slate-300 hover:bg-white/10 transition-all"
                    >
                      <Github size={16} />
                    </motion.button>
                  </div>
                </div>

                {/* Hover glow */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 blur-xl"></div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View More */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-12"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-sm border border-white/20 rounded-full text-white hover:border-cyan-500/50 transition-all flex items-center gap-2 mx-auto"
          >
            View All Projects <ExternalLink size={18} />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
