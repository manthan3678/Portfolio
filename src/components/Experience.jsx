import { motion } from 'motion/react';
import { useRef } from 'react';
import useInView from '../hooks/useInView';
import { Briefcase, Calendar, MapPin } from 'lucide-react';

export default function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const experiences = [
    {
      role: "Frontend Developer",
      company: "VowelWeb",
      period: "2023 - Present",
      location: "Remote",
      description:
        "Developing modern, responsive web applications using React and cutting-edge frontend technologies. Collaborating with cross-functional teams to deliver high-quality user experiences.",
      highlights: [
        "Built and maintained 15+ responsive web applications",
        "Improved application performance by 40% through optimization",
        "Implemented modern UI/UX designs with smooth animations",
        "Collaborated with design and backend teams for seamless integration"
      ],
      color: "from-cyan-500 to-indigo-600"
    },
    {
      role: "MERN Stack Developer",
      company: "Freelance Projects",
      period: "2022 - 2023",
      location: "Remote",
      description:
        "Worked on various full-stack projects, building end-to-end web applications with modern tech stack. Delivered scalable solutions for clients across different industries.",
      highlights: [
        "Developed 10+ full-stack web applications",
        "Integrated RESTful APIs and third-party services",
        "Implemented secure authentication and authorization systems",
        "Provided ongoing maintenance and feature enhancements"
      ],
      color: "from-purple-500 to-pink-600"
    }
  ];

  return (
    <section id="experience" className="py-20 px-6 bg-slate-900/30" ref={ref}>
      <div className="container mx-auto">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 border border-cyan-500/30 rounded-full text-cyan-400 mb-4">
            My Journey
          </span>
          <h2 className="mb-4 bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">
            Work Experience
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-purple-600 mx-auto rounded-full"></div>
        </motion.div>

        <div className="max-w-4xl mx-auto">

          {/* Timeline */}
          <div className="relative">

            {/* Center Vertical Line */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-500 via-purple-500 to-indigo-600 transform -translate-x-1/2"></div>

            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={
                  isInView
                    ? { opacity: 1, x: 0 }
                    : { opacity: 0, x: index % 2 === 0 ? -50 : 50 }
                }
                transition={{ duration: 0.6, delay: index * 0.3 }}
                className={`relative mb-12 md:mb-20 ${
                  index % 2 === 0
                    ? "md:mr-auto md:pr-8"
                    : "md:ml-auto md:pl-8"
                } md:w-1/2`}
              >

                {/* Timeline Dot */}
                <div className="hidden md:block absolute top-8 right-0 md:right-auto md:left-full w-6 h-6 transform md:-translate-x-1/2">
                  <div
                    className={`w-full h-full bg-gradient-to-r ${exp.color} rounded-full border-4 border-slate-900 shadow-lg shadow-cyan-500/50`}
                  >
                    <div className="w-full h-full rounded-full bg-white/20 animate-ping"></div>
                  </div>
                </div>

                {/* Card */}
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg border border-white/20 rounded-3xl p-6 md:p-8 hover:border-cyan-500/50 transition-all"
                >

                  {/* Header */}
                  <div className="flex items-start gap-4 mb-4">
                    <div
                      className={`w-14 h-14 bg-gradient-to-r ${exp.color} rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg`}
                    >
                      <Briefcase className="text-white" size={28} />
                    </div>

                    <div className="flex-1">
                      <h3 className="text-slate-200 mb-1">{exp.role}</h3>
                      <h4 className="text-cyan-400 mb-2">{exp.company}</h4>

                      <div className="flex flex-wrap gap-3 text-sm text-slate-400">
                        <div className="flex items-center gap-1">
                          <Calendar size={16} />
                          <span>{exp.period}</span>
                        </div>

                        <div className="flex items-center gap-1">
                          <MapPin size={16} />
                          <span>{exp.location}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-slate-400 mb-4">{exp.description}</p>

                  {/* Highlights */}
                  <div className="space-y-2">
                    <h5 className="text-slate-300 text-sm mb-3">
                      Key Achievements:
                    </h5>
                    <ul className="space-y-2">
                      {exp.highlights.map((highlight, hIndex) => (
                        <motion.li
                          key={hIndex}
                          initial={{ opacity: 0, x: -10 }}
                          animate={
                            isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }
                          }
                          transition={{
                            duration: 0.4,
                            delay: index * 0.3 + hIndex * 0.1
                          }}
                          className="flex items-start gap-2 text-slate-400 text-sm"
                        >
                          <span className="text-cyan-400 mt-1">▹</span>
                          <span>{highlight}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>

          {/* Current Status */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mt-12 bg-gradient-to-r from-green-500/10 via-cyan-500/10 to-purple-500/10 backdrop-blur-lg border border-green-500/30 rounded-3xl p-8 text-center"
          >
            <div className="flex items-center justify-center gap-2 mb-4">
              <span className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></span>
              <span className="text-green-400">Currently Available</span>
            </div>

            <h3 className="mb-2 text-slate-200">Open to New Opportunities</h3>

            <p className="text-slate-400 max-w-2xl mx-auto mb-6">
              I'm actively looking for exciting full-stack development roles where I can contribute my skills and continue growing as a developer.
            </p>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-indigo-600 rounded-full text-white shadow-lg shadow-cyan-500/50"
            >
              Let's Connect
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
