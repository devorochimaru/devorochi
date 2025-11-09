// src/App.tsx
import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Education } from './components/Education';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { Toaster } from 'sonner@2.0.3';

export default function App() {
  return (
    <div className="relative w-full min-h-screen overflow-x-hidden overflow-y-auto bg-slate-950 text-white">
      {/* Toast Notifications */}
      <Toaster
        position="top-right"
        theme="dark"
        toastOptions={{
          style: {
            background: 'rgba(15, 23, 42, 0.9)',
            backdropFilter: 'blur(16px)',
            border: '1px solid rgba(139, 92, 246, 0.2)',
            color: 'white',
          },
        }}
      />

      {/* Navigation */}
      <Navigation />

      {/* Main Content */}
      <main className="relative flex flex-col w-full min-h-screen overflow-visible">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Education />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
