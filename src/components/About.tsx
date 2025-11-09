import { motion, useInView } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: '-150px', amount: 0.3 });
  const [visible, setVisible] = useState(false);

  // ✅ Handle desktop + mobile visibility
  useEffect(() => {
    if (isInView) setVisible(true);
    else if (window.innerWidth < 768) setVisible(true);
    else setVisible(false);
  }, [isInView]);

  // ✅ Animation variants for better reuse
  const fadeUp = (delay = 0) => ({
    initial: { opacity: 0, y: 40 },
    animate: visible ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 },
    transition: { duration: 0.8, delay, ease: [0.25, 0.1, 0.25, 1] },
  });

  return (
    <section id="about" className="relative w-full py-24 px-4 sm:px-6 lg:px-8">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900/50 to-slate-950 pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto" ref={ref}>
        {/* Heading */}
        <motion.div {...fadeUp(0)}>
          <h2 className="text-4xl sm:text-5xl text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            About Me
          </h2>
        </motion.div>

        {/* Card */}
        <motion.div
          className="relative backdrop-blur-xl bg-white/5 rounded-3xl p-8 sm:p-12 border border-white/10 shadow-2xl overflow-hidden"
          {...fadeUp(0.1)}
        >
          {/* Glow */}
          <div className="absolute -top-24 -right-24 w-48 h-48 bg-purple-500/20 rounded-full blur-3xl" />
          <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-blue-500/20 rounded-full blur-3xl" />

          <div className="relative z-10 flex flex-col items-center">
            {/* Profile Image */}
            <motion.div
              className="relative mb-8"
              initial={{ opacity: 0, scale: 0.85 }}
              animate={visible ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.85 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
            >
              <div className="relative">
                <ImageWithFallback
                  src="https://files.catbox.moe/xhmhj4.jpg"
                  alt="Orochi Profile"
                  className="w-32 h-32 sm:w-40 sm:h-40 rounded-full object-cover border-4 border-purple-500/30 shadow-2xl"
                />

                {/* Orbit Ring */}
                <motion.div
                  className="absolute inset-0 -m-4 rounded-full border-2 border-transparent"
                  style={{
                    borderImage: 'linear-gradient(90deg, rgba(139,92,246,0.8), rgba(59,130,246,0.8), rgba(236,72,153,0.8)) 1',
                  }}
                  animate={{ rotate: 360 }}
                  transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
                >
                  <div className="w-full h-full rounded-full border-2 border-dashed border-purple-400/40" />
                </motion.div>

                {/* Orbit Dot */}
                <motion.div
                  className="absolute top-0 left-1/2 w-3 h-3 bg-blue-400 rounded-full shadow-[0_0_10px_rgba(59,130,246,0.8)]"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
                  style={{ originX: 0.5, originY: '80px' }}
                />
              </div>
            </motion.div>

            {/* Text Sections with staggered fade-up */}
            {[
              `I'm a passionate BCA student with a deep fascination for crafting beautiful, intuitive, and futuristic web experiences. My journey in frontend development started with curiosity and evolved into a relentless pursuit of perfection in user interface design.`,
              `I specialize in modern web technologies including HTML5, CSS3, JavaScript, and React. I believe in writing clean, maintainable code and creating interfaces that feel like they belong in the future.`,
              `When I'm not coding, you'll find me exploring cutting-edge design systems, experimenting with new animation libraries, or contributing to open-source projects. My goal is to bridge the gap between stunning design and flawless functionality.`,
            ].map((text, i) => (
              <motion.div key={i} {...fadeUp(0.3 + i * 0.1)} className="text-center max-w-2xl">
                <p className="text-gray-300 mb-4">{text}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
