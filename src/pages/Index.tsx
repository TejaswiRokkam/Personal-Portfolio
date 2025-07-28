import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Experience from '@/components/Experience';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';

const Index = () => {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Navigation />
      <main>
        <section id="hero">
          <Hero />
        </section>
        <About />
        <Experience />
        <Projects />
        <Contact />
      </main>
      
      {/* Footer */}
      <footer className="py-8 border-t border-border/30 bg-card/30">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-muted-foreground">
            © 2025 Rokkam Tejaswi. Built using React, Three.js & Tailwind CSS
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
