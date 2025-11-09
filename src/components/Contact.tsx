import { motion, useInView } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import { Mail, Github, Linkedin, Instagram, Send } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { toast } from 'sonner@2.0.3';

const socialLinks = [
  { name: 'GitHub', icon: Github, url: 'https://github.com/devorochimaru', color: 'hover:text-purple-400' },
  { name: 'LinkedIn', icon: Linkedin, url: 'https://linkedin.com', color: 'hover:text-blue-400' },
  { name: 'Instagram', icon: Instagram, url: 'https://www.instagram.com/unlucky_ruh?igsh=ZmpseXNodG81NmN1', color: 'hover:text-pink-400' },
  { name: 'Email', icon: Mail, url: 'mailto:orochimaru6381@gmail.com', color: 'hover:text-cyan-400' },
];

export function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.25 });
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Message sent! I'll get back to you soon.");
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  return (
    <section
      id="contact"
      ref={ref}
      className="relative w-full py-24 px-4 sm:px-6 lg:px-8 overflow-hidden will-change-transform transform-gpu"
    >
      {/* Background Glow */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900/40 to-slate-950 pointer-events-none" />
      <motion.div
        className="absolute top-1/3 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"
        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      />

      <div className="relative z-10 max-w-4xl mx-auto">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <h2 className="text-4xl sm:text-5xl text-center mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Get In Touch
          </h2>
          <p className="text-center text-gray-400 mb-16 max-w-2xl mx-auto">
            Have a project in mind or just want to say hi? Feel free to reach out!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
          >
            <div className="backdrop-blur-xl bg-white/5 rounded-2xl p-8 border border-white/10 relative overflow-hidden hover:shadow-[0_0_40px_rgba(139,92,246,0.3)] transition-all duration-500">
              <form onSubmit={handleSubmit} className="relative z-10 space-y-6">
                <Input
                  name="name"
                  type="text"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="bg-white/5 border-white/10 focus:border-purple-500 focus:ring-purple-500/50 text-white placeholder:text-gray-500"
                />
                <Input
                  name="email"
                  type="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="bg-white/5 border-white/10 focus:border-purple-500 focus:ring-purple-500/50 text-white placeholder:text-gray-500"
                />
                <Textarea
                  name="message"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="bg-white/5 border-white/10 focus:border-purple-500 focus:ring-purple-500/50 text-white placeholder:text-gray-500 resize-none"
                />
                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 border-0 transition-all duration-300 group"
                >
                  <motion.div
                    className="flex items-center gap-2"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                    Send Message
                  </motion.div>
                </Button>
              </form>
            </div>
          </motion.div>

          {/* Info + Socials */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="space-y-8"
          >
            {/* Info Card */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
              transition={{ duration: 0.7, delay: 0.1, ease: 'easeOut' }}
              className="backdrop-blur-xl bg-white/5 rounded-2xl p-8 border border-white/10 hover:translate-y-[-6px] hover:shadow-[0_0_30px_rgba(59,130,246,0.3)] transition-all duration-500"
            >
              <h3 className="text-2xl mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Let's Connect
              </h3>
              <p className="text-gray-300 mb-6">
                I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
              </p>
              <p className="text-gray-400">
                Whether you need a website, want to collaborate, or just want to chat about tech and design — I'd love to hear from you!
              </p>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
              transition={{ duration: 0.7, delay: 0.3, ease: 'easeOut' }}
              className="backdrop-blur-xl bg-white/5 rounded-2xl p-8 border border-white/10 hover:translate-y-[-6px] hover:shadow-[0_0_30px_rgba(139,92,246,0.3)] transition-all duration-500"
            >
              <h3 className="text-xl mb-6 text-white">Find Me Online</h3>
              <div className="grid grid-cols-2 gap-4">
                {socialLinks.map((social, i) => {
                  const Icon = social.icon;
                  return (
                    <motion.a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center gap-3 p-4 rounded-xl bg-white/5 border border-white/10 text-gray-300 ${social.color} transition-all duration-300 group`}
                      whileHover={{
                        y: -5,
                        boxShadow: '0 0 20px rgba(139,92,246,0.3)',
                      }}
                      transition={{ delay: 0.4 + i * 0.1, duration: 0.4 }}
                    >
                      <Icon className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                      <span className="text-sm">{social.name}</span>
                    </motion.a>
                  );
                })}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
