import { motion, useInView } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
import { ExternalLink, Github } from 'lucide-react';
import { Button } from './ui/button';
import { ImageWithFallback } from './figma/ImageWithFallback';

const projects = [
  {
    id: 1,
    title: 'Analytics Dashboard',
    description:
      'A modern analytics dashboard with real-time data visualization, interactive charts, and responsive design.',
    image:
      'https://images.unsplash.com/photo-1665470909939-959569b20021?auto=format&fit=crop&w=1080&q=80',
    tech: ['React', 'TypeScript', 'Recharts'],
    demo: '#',
    github: '#',
  },
  {
    id: 2,
    title: 'Mobile Banking App',
    description:
      'Sleek mobile banking interface with smooth animations, secure transactions, and intuitive navigation.',
    image:
      'https://images.unsplash.com/photo-1605108222700-0d605d9ebafe?auto=format&fit=crop&w=1080&q=80',
    tech: ['React Native', 'Framer Motion', 'TailwindCSS'],
    demo: '#',
    github: '#',
  },
  {
    id: 3,
    title: 'E-Commerce Platform',
    description:
      'Full-featured online store with product catalog, shopping cart, and seamless checkout experience.',
    image:
      'https://images.unsplash.com/photo-1694599048261-a1de00f0117e?auto=format&fit=crop&w=1080&q=80',
    tech: ['Next.js', 'Redux', 'Stripe API'],
    demo: '#',
    github: '#',
  },
];

export function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.3 });
  const [active, setActive] = useState(false);
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  // 👇 Trigger animations both when entering & leaving viewport
  useEffect(() => {
    setActive(isInView);
  }, [isInView]);

  return (
    <section
      id="projects"
      ref={ref}
      className="relative w-full py-24 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      {/* Background layers */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900/50 to-slate-950 pointer-events-none" />
      <motion.div
        className="absolute top-1/4 left-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"
        animate={{
          x: [0, 100, 0],
          y: [0, 50, 0],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute bottom-1/4 right-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"
        animate={{
          x: [0, -100, 0],
          y: [0, -50, 0],
        }}
        transition={{ duration: 25, repeat: Infinity, ease: 'easeInOut' }}
      />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          animate={active ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <h2 className="text-4xl sm:text-5xl text-center mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-center text-gray-400 mb-16 max-w-2xl mx-auto">
            A showcase of my recent work and creative experiments
          </p>
        </motion.div>

        {/* Project Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              animate={active ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{
                duration: 0.7,
                delay: active ? index * 0.15 : 0,
                ease: 'easeOut',
              }}
              onHoverStart={() => setHoveredId(project.id)}
              onHoverEnd={() => setHoveredId(null)}
            >
              <motion.div
                className="group relative backdrop-blur-xl bg-white/5 rounded-2xl overflow-hidden border border-white/10 cursor-pointer h-full"
                whileHover={{
                  y: -10,
                  rotateX: 5,
                  rotateY: 5,
                  transition: { duration: 0.4, ease: 'easeOut' },
                }}
                style={{
                  transformStyle: 'preserve-3d',
                  perspective: '1000px',
                }}
              >
                {/* Hover Glow */}
                <motion.div
                  className="absolute -inset-1 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-2xl opacity-0 group-hover:opacity-40 blur-xl transition-opacity duration-500"
                  animate={
                    hoveredId === project.id
                      ? { opacity: [0.3, 0.5, 0.3] }
                      : { opacity: 0 }
                  }
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                />

                {/* Card Content */}
                <div className="relative z-10">
                  {/* Project Image */}
                  <div className="relative h-48 sm:h-56 overflow-hidden">
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.7, ease: 'easeOut' }}
                    >
                      <ImageWithFallback
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover"
                      />
                    </motion.div>
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/50 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-300" />
                  </div>

                  {/* Text Content */}
                  <div className="p-6">
                    <h3 className="text-xl mb-2 text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400 group-hover:bg-clip-text transition-all duration-300">
                      {project.title}
                    </h3>

                    <p className="text-gray-400 mb-4 text-sm">
                      {project.description}
                    </p>

                    {/* Tech Tags */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 text-xs rounded-full bg-purple-500/10 text-purple-300 border border-purple-500/20"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Buttons */}
                    <div className="flex gap-3">
                      <Button
                        size="sm"
                        className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 border-0 transition-all duration-300 group/btn"
                      >
                        <ExternalLink className="w-4 h-4 mr-2 group-hover/btn:rotate-12 transition-transform duration-300" />
                        Live Demo
                      </Button>
                      <Button
                        size="sm"
                        variant="outline"
                        className="flex-1 border-purple-500/50 hover:border-purple-400 hover:bg-purple-500/10 transition-all duration-300 group/btn"
                      >
                        <Github className="w-4 h-4 mr-2 group-hover/btn:rotate-12 transition-transform duration-300" />
                        GitHub
                      </Button>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
