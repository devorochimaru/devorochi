import { motion, useInView } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
import {
  Code2,
  Palette,
  Database,
  GitBranch,
  Figma as FigmaIcon,
  Terminal,
} from 'lucide-react';

const skills = [
  { name: 'HTML5', icon: Code2, color: 'from-orange-500 to-red-500', delay: 0 },
  { name: 'CSS3', icon: Palette, color: 'from-blue-500 to-cyan-500', delay: 0.1 },
  { name: 'JavaScript', icon: Terminal, color: 'from-yellow-500 to-amber-500', delay: 0.2 },
  { name: 'React.js', icon: Code2, color: 'from-cyan-500 to-blue-500', delay: 0.3 },
  { name: 'Node.js', icon: Database, color: 'from-green-500 to-emerald-500', delay: 0.4 },
  { name: 'Git', icon: GitBranch, color: 'from-red-500 to-orange-500', delay: 0.5 },
  { name: 'Figma', icon: FigmaIcon, color: 'from-purple-500 to-pink-500', delay: 0.6 },
];

export function Skills() {
  const ref = useRef(null);
  const inView = useInView(ref, { amount: 0.3 });
  const [active, setActive] = useState(false);

  // 👇 Trigger animation every time section enters/leaves viewport
  useEffect(() => {
    setActive(inView);
  }, [inView]);

  return (
    <section
      id="skills"
      ref={ref}
      className="relative w-full py-24 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      {/* Animated Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-purple-950/20 to-slate-950 pointer-events-none" />
      <motion.div
        className="absolute top-1/3 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          animate={active ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <h2 className="text-4xl sm:text-5xl text-center mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Technical Skills
          </h2>
          <p className="text-center text-gray-400 mb-16 max-w-2xl mx-auto">
            A collection of technologies I use to bring ideas to life
          </p>
        </motion.div>

        {/* Skill Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {skills.map((skill) => {
            const Icon = skill.icon;
            return (
              <motion.div
                key={skill.name}
                animate={active ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{
                  duration: 0.6,
                  delay: active ? skill.delay : 0,
                  ease: 'easeOut',
                }}
              >
                <motion.div
                  className="group relative backdrop-blur-xl bg-white/5 rounded-2xl p-6 border border-white/10 cursor-pointer overflow-hidden"
                  whileHover={{
                    y: -8,
                    transition: { duration: 0.4, ease: 'easeOut' },
                  }}
                >
                  {/* Glow Effect */}
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-br ${skill.color} opacity-0 group-hover:opacity-20 transition-opacity duration-500`}
                  />
                  {/* Animated Border Glow */}
                  <motion.div
                    className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    animate={{
                      boxShadow: [
                        'inset 0 0 0 rgba(139,92,246,0)',
                        'inset 0 0 30px rgba(139,92,246,0.3)',
                        'inset 0 0 0 rgba(139,92,246,0)',
                      ],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: 'easeInOut',
                    }}
                  />

                  <div className="relative z-10 flex flex-col items-center text-center">
                    {/* Icon */}
                    <motion.div
                      className={`mb-4 p-4 rounded-xl bg-gradient-to-br ${skill.color} bg-opacity-10`}
                      whileHover={{ rotate: [0, -10, 10, -10, 0] }}
                      transition={{ duration: 0.6 }}
                    >
                      <Icon className="w-8 h-8 text-white" />
                    </motion.div>

                    {/* Skill Name */}
                    <h3
                      className="text-lg text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text transition-all duration-300"
                      style={{
                        backgroundImage: `linear-gradient(135deg, var(--tw-gradient-stops))`,
                      }}
                    >
                      {skill.name}
                    </h3>
                  </div>
                </motion.div>
              </motion.div>
            );
          })}
        </div>

        {/* Additional Skills Text */}
        <motion.div
          className="mt-12 text-center"
          animate={active ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{
            duration: 0.8,
            delay: active ? 0.8 : 0,
            ease: 'easeOut',
          }}
        >
          <p className="text-gray-400">
            Also experienced with:{' '}
            <span className="text-purple-400">Tailwind CSS</span>,
            <span className="text-blue-400"> TypeScript</span>,
            <span className="text-pink-400"> Framer Motion</span>,
            <span className="text-green-400"> REST APIs</span>, and more...
          </p>
        </motion.div>
      </div>
    </section>
  );
}
