import { motion } from 'motion/react';
import { Rocket } from 'lucide-react';
import { useState } from 'react';

export function Footer() {
  const [isLaunching, setIsLaunching] = useState(false);

  const scrollToTop = () => {
    setIsLaunching(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setTimeout(() => setIsLaunching(false), 1000);
  };

  return (
    <footer className="relative w-full py-12 px-4 sm:px-6 lg:px-8">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-purple-950/20 to-transparent" />
      
      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent mb-8" />

        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          {/* Copyright */}
          <motion.p
            className="text-gray-400 text-center sm:text-left"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
          >
            © 2025 Orochi — Crafted for the Cosmos
          </motion.p>

          {/* Scroll to Top Button */}
          <motion.button
            onClick={scrollToTop}
            className="group relative p-4 rounded-full bg-gradient-to-r from-blue-600/20 to-purple-600/20 border border-purple-500/30 hover:border-purple-400 transition-all duration-300 hover:shadow-[0_0_30px_rgba(139,92,246,0.4)]"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
          >
            <motion.div
              animate={isLaunching ? {
                y: -100,
                opacity: 0,
                transition: { duration: 0.8, ease: [0.4, 0, 0.2, 1] }
              } : {
                y: 0,
                opacity: 1,
              }}
            >
              <Rocket className="w-5 h-5 text-purple-400 group-hover:text-purple-300 transition-colors duration-300" />
            </motion.div>
            
            {/* Rocket Trail Effect */}
            {isLaunching && (
              <motion.div
                className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1 h-20 bg-gradient-to-t from-purple-500 to-transparent"
                initial={{ opacity: 1, height: 0 }}
                animate={{ 
                  opacity: [1, 0.5, 0],
                  height: [0, 80, 80],
                }}
                transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
              />
            )}
          </motion.button>
        </div>

        {/* Additional Footer Info */}
        <motion.div
          className="mt-8 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.4, 0, 0.2, 1] }}
        >
          <p className="text-gray-500 text-sm">
            Built with React, TypeScript, Tailwind CSS & Framer Motion
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
