import { motion, useInView } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
import { GraduationCap, Award, Calendar } from 'lucide-react';

const educationData = [
  {
    degree: 'Bachelor of Computer Applications',
    institution: 'University of Technology',
    period: '2022 - 2025',
    achievements: [
      'CGPA: 8.5/10',
      "Dean's List - 3 semesters",
      'Led Web Development Club',
    ],
  },
];

const achievements = [
  {
    icon: Award,
    title: 'Hackathon Winner',
    description: 'First place in State-level Web Dev Hackathon 2024',
  },
  {
    icon: Award,
    title: 'Best UI/UX Design',
    description: 'College Tech Fest 2023 - Design Competition',
  },
  {
    icon: Award,
    title: 'Open Source Contributor',
    description: 'Active contributor to popular React libraries',
  },
];

export function Education() {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.3 });
  const [active, setActive] = useState(false);

  // 👇 Toggle visibility every time the section enters/leaves viewport
  useEffect(() => {
    setActive(isInView);
  }, [isInView]);

  return (
    <section
      id="education"
      ref={ref}
      className="relative w-full py-24 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-purple-950/10 to-slate-950 pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Section Title */}
        <motion.div
          animate={active ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <h2 className="text-4xl sm:text-5xl text-center mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Education & Achievements
          </h2>
          <p className="text-center text-gray-400 mb-16 max-w-2xl mx-auto">
            Academic journey and recognitions
          </p>
        </motion.div>

        {/* Education Timeline */}
        <div className="mb-16">
          {educationData.map((edu, index) => (
            <motion.div
              key={index}
              className="relative"
              animate={active ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
            >
              {/* Timeline Line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500" />

              {/* Timeline Node */}
              <div className="absolute left-8 top-8 transform -translate-x-1/2">
                <motion.div
                  className="w-4 h-4 rounded-full bg-purple-500"
                  animate={{
                    boxShadow: [
                      '0 0 0 0 rgba(168, 85, 247, 0.7)',
                      '0 0 0 10px rgba(168, 85, 247, 0)',
                      '0 0 0 0 rgba(168, 85, 247, 0)',
                    ],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                />
              </div>

              {/* Content Card */}
              <div className="ml-20">
                <motion.div
                  className="backdrop-blur-xl bg-white/5 rounded-2xl p-8 border border-white/10 overflow-hidden"
                  whileHover={{
                    y: -5,
                    boxShadow: '0 0 30px rgba(139, 92, 246, 0.3)',
                    transition: { duration: 0.4, ease: 'easeOut' },
                  }}
                >
                  <div className="absolute -top-24 -right-24 w-48 h-48 bg-purple-500/10 rounded-full blur-3xl" />

                  <div className="relative z-10">
                    <div className="flex items-start justify-between mb-4 flex-wrap gap-4">
                      <div className="flex items-center gap-3">
                        <div className="p-3 rounded-xl bg-gradient-to-br from-blue-600 to-purple-600">
                          <GraduationCap className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <h3 className="text-xl text-white mb-1">{edu.degree}</h3>
                          <p className="text-purple-300">{edu.institution}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2 text-gray-400">
                        <Calendar className="w-4 h-4" />
                        <span>{edu.period}</span>
                      </div>
                    </div>

                    <div className="space-y-2 mt-6">
                      {edu.achievements.map((achievement, idx) => (
                        <motion.div
                          key={idx}
                          className="flex items-center gap-2 text-gray-300"
                          animate={active ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
                          transition={{
                            duration: 0.6,
                            delay: active ? 0.4 + idx * 0.1 : 0,
                            ease: 'easeOut',
                          }}
                        >
                          <div className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                          {achievement}
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Achievements Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {achievements.map((achievement, index) => {
            const Icon = achievement.icon;
            return (
              <motion.div
                key={index}
                animate={active ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{
                  duration: 0.7,
                  delay: active ? 0.6 + index * 0.1 : 0,
                  ease: 'easeOut',
                }}
              >
                <div className="backdrop-blur-xl bg-white/5 rounded-2xl p-6 border border-white/10 h-full hover:translate-y-[-8px] transition-transform duration-300">
                  <div className="inline-flex p-3 rounded-xl bg-gradient-to-br from-blue-600 to-purple-600 mb-4">
                    <Icon className="w-6 h-6 text-white" />
                  </div>

                  <h3 className="text-lg text-white mb-2">{achievement.title}</h3>
                  <p className="text-gray-400 text-sm">{achievement.description}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
