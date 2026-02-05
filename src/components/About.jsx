import { useRef } from "react";
import { motion } from "motion/react";
import { Sparkles, Target, Heart } from "lucide-react";
import useInView from "../hooks/useInView"; // Make sure your hook exports default OR adjust import

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const features = [
    {
      icon: Sparkles,
      title: "Creative Problem Solver",
      description: "Love tackling complex challenges with elegant solutions",
    },
    {
      icon: Target,
      title: "Detail Oriented",
      description: "Focused on pixel-perfect implementations and clean code",
    },
    {
      icon: Heart,
      title: "Passionate Learner",
      description: "Constantly exploring new technologies and best practices",
    },
  ];

  return (
    <section id="about" className="py-20 px-6" ref={ref}>
      <div className="container mx-auto">
        {/* Heading Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 border border-cyan-500/30 rounded-full text-cyan-400 mb-4">
            Get to know me
          </span>
          <h2 className="mb-4 bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-purple-600 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg border border-white/20 rounded-3xl p-8">
              <h3 className="mb-4 text-slate-200">
                Hello! I'm Manthan Gedam 👋
              </h3>
              <p className="text-slate-400 mb-4">
                I'm a{" "}
                <span className="text-cyan-400">
                  B.Tech graduate in Computer Science Engineering
                </span>
                . As a MERN Stack Developer, I have experience building modern,
                scalable web applications and working across both frontend and
                backend technologies.
              </p>

              <p className="text-slate-400 mb-4">
                My journey in web development started with a curiosity about how
                websites work, which gradually turned into a strong passion for
                crafting clean, high-performing interfaces. I’m especially
                focused on{" "}
                <span className="text-purple-400">modern UI/UX design</span> and
                <span className="text-cyan-400">
                  {" "}
                  smooth, interactive animations
                </span>{" "}
                that elevate the overall user experience.
              </p>

              <p className="text-slate-400">
                Currently working as a{" "}
                <span className="text-indigo-400">
                  Frontend Developer (Shopify) at VowelWeb
                </span>
                , where I build and customize Shopify storefronts, develop
                reusable components, and collaborate closely with teams to
                deliver visually engaging and responsive e-commerce solutions.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4">
              {[
                { value: "20+", label: "Projects" },
                { value: "1+", label: "Years Exp" },
                { value: "10+", label: "Technologies" },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={
                    isInView
                      ? { opacity: 1, scale: 1 }
                      : { opacity: 0, scale: 0.8 }
                  }
                  transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                  className="bg-gradient-to-br from-cyan-500/10 to-purple-500/10 backdrop-blur-sm border border-white/10 rounded-2xl p-6 text-center"
                >
                  <div className="text-3xl bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent mb-2">
                    {stat.value}
                  </div>
                  <div className="text-slate-400 text-sm">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Section - Features */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-6"
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={
                  isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
                }
                transition={{ duration: 0.5, delay: 0.4 + index * 0.15 }}
                whileHover={{ scale: 1.03, x: 10 }}
                className="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg border border-white/20 rounded-2xl p-6 hover:border-cyan-500/50 transition-all"
              >
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                    <feature.icon className="text-cyan-400" size={28} />
                  </div>
                  <div>
                    <h4 className="mb-2 text-slate-200">{feature.title}</h4>
                    <p className="text-slate-400">{feature.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}

            {/* Fun Fact */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={
                isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }
              }
              transition={{ duration: 0.5, delay: 0.8 }}
              className="bg-gradient-to-r from-indigo-500/20 via-purple-500/20 to-pink-500/20 backdrop-blur-lg border border-purple-500/30 rounded-2xl p-6"
            >
              <div className="flex items-center gap-3 mb-3">
                <span className="text-2xl">💡</span>
                <h4 className="text-slate-200">Fun Fact</h4>
              </div>
              <p className="text-slate-300">
                When I'm not coding, you'll find me exploring the latest design
                trends, watching tech videos, or experimenting with new
                frameworks!
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
