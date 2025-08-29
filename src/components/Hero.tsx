import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowDown, Download, Github, Linkedin, Mail } from 'lucide-react';
import ThreeScene from './ThreeScene';

// Placeholder data - replace with your actual details
const heroData = {
  name: "Rokkam Tejaswi",
  title: "Software Developer | AI/ML Engineer",
  description: "I'm a final-year B.Tech student in Artificial Intelligence and Data Science at Shri Vishnu Engineering College for Women (2022–2026). I build intelligent, real-world solutions using AI and full stack technologies, with a passion for continuous learning and impactful software development.",
  email: "rokkamtejaswi10@gmail.com",
  github: "https://github.com/tejaswiRokkam",
  linkedin: "https://linkedin.com/in/tejaswi-rokkam-55b089259"
};

export default function Hero() {
  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* 3D Background */}
      <ThreeScene />
      
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-background/90 via-background/40 to-background/90" />
      
      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-8"
        >
          {/* Name and Title */}
          <div className="space-y-4">
            <motion.h1 
              className="text-7xl md:text-9xl font-bold text-cosmic text-glow leading-none"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
            >
              {heroData.name}
            </motion.h1>
            
            <motion.p 
              className="text-2xl md:text-4xl font-light text-primary-glow"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              {heroData.title}
            </motion.p>
            
            <motion.p 
              className="text-lg md:text-xl text-accent font-mono"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              {heroData.subtitle}
            </motion.p>
          </div>

          {/* Description */}
          <motion.p 
            className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            {heroData.description}
          </motion.p>

          {/* Action Buttons */}
          <motion.div 
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            <Button 
              size="lg" 
              className="bg-cosmic text-primary-foreground hover:scale-105 transition-all duration-300 cosmic-glow px-8 py-6 text-lg font-semibold rounded-xl"
              onClick={scrollToAbout}
            >
              Explore My Work
              <ArrowDown className="ml-2 h-5 w-5" />
            </Button>
            
            <Button 
              variant="outline" 
              size="lg"
              className="border-accent text-accent hover:bg-accent hover:text-accent-foreground transition-all duration-300 px-8 py-6 text-lg rounded-xl backdrop-blur-sm"
            >
              <a href="/Tejaswi_Rokkam_resume__Copy_.pdf" download>
                Download CV
                <Download className="ml-2 h-5 w-5" />
              </a>
            </Button>
          </motion.div>

          {/* Social Links */}
          <motion.div 
            className="flex gap-6 justify-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
          >
            <a 
              href={heroData.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 rounded-full bg-card/50 hover:bg-accent hover:scale-110 transition-all duration-300 backdrop-blur-sm accent-glow"
            >
              <Github className="h-6 w-6" />
            </a>
            <a 
              href={heroData.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 rounded-full bg-card/50 hover:bg-accent hover:scale-110 transition-all duration-300 backdrop-blur-sm accent-glow"
            >
              <Linkedin className="h-6 w-6" />
            </a>
            <a 
              href={`mailto:${heroData.email}`}
              className="p-4 rounded-full bg-card/50 hover:bg-accent hover:scale-110 transition-all duration-300 backdrop-blur-sm accent-glow"
            >
              <Mail className="h-6 w-6" />
            </a>
          </motion.div>
        </motion.div>

        {/* Floating scroll indicator */}
        <motion.div 
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
        >
          <div className="flex flex-col items-center space-y-2 animate-bounce">
            <span className="text-sm text-muted-foreground font-mono">Scroll to explore</span>
            <ArrowDown className="h-4 w-4 text-accent" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
