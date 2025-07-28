import { useState } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, Github, Play } from 'lucide-react';

const projectsData = [
  {
    title: "SmartNotes: AI Meeting Minutes Generator",
    description:
      "AI-powered web app that transcribes and summarizes meeting audio/video files into structured bullet-point minutes using OpenAI Whisper and Cohere APIs.",
    technologies: ["Python", "Streamlit", "Whisper", "Cohere", "FFmpeg", "Torchaudio"],
    features: [
      "Audio/video file upload",
      "AI transcription using Whisper",
      "Bullet-point summarization with Cohere",
      "Streamlit UI and offline-ready"
    ],
    githubUrl: "https://github.com/TejaswiRokkam/SmartNotes",
    category: "AI Application"
  },
  {
    title: "Bangalore House Price Prediction",
    description:
      "Machine learning web app to predict Bangalore real estate prices based on features like location, BHK, square footage, and bathrooms.",
    technologies: ["Python", "Flask", "Streamlit", "NumPy", "pandas", "scikit-learn"],
    features: [
      "User input for location & size",
      "Real-time prediction",
      "Streamlit-based interface",
      "Preprocessed real-world data"
    ],
    githubUrl: "https://github.com/TejaswiRokkam/Bangalore-House-Price-Prediction",
    liveUrl: "https://bengaluru-house-price-prediction-nkcgebtcs4yz2xugafecrz.streamlit.app/",
    category: "ML Web App"
  },
  {
    title: "AutiVoyage: Game-Based Learning Website",
    description:
      "A web-based collection of interactive games like Jigsaw Puzzle, Memory Flip, Sliding Puzzle, and Trash Sort designed for engaging learning.",
    technologies: ["HTML", "CSS", "JavaScript"],
    features: [
      "Responsive game interfaces",
      "Multiple interactive puzzles",
      "No backend required",
      "User-friendly design"
    ],
    githubUrl: "https://github.com/TejaswiRokkam/AutiVoyage",
    category: "Web Game App"
  },
  {
    title: "Student Management System",
    description:
      "Desktop application to perform CRUD operations on student data using Python Tkinter for GUI and SQLite3 for lightweight database storage.",
    technologies: ["Python", "Tkinter", "SQLite3"],
    features: [
      "Add/update/delete student records",
      "Easy-to-use desktop UI",
      "Lightweight local database",
      "Fully functional CRUD system"
    ],
    githubUrl: "https://github.com/TejaswiRokkam/Student-Management-System-using-tkinter-and-sqlite",
    category: "Desktop App"
  },
  {
  title: "3D Interactive Portfolio Website",
  description: "A dynamic, responsive portfolio website featuring 3D animations, immersive UI, and project showcases. Built using Lovable and customized extensively to reflect my personal brand and technical profile.",
  technologies: ["React", "Tailwind CSS", "Three.js", "Framer Motion", "Lucide", "Vite"],
  features: [
    "Responsive 3D layout",
    "Project and education showcase",
    "Interactive animations",
    "Resume download and social links"
  ],
  githubUrl: "https://github.com/TejaswiRokkam/immersive-career-view",
  category: "Personal Project"
}
];

export default function Projects() {
  const [expandedStates, setExpandedStates] = useState<boolean[]>(
    projectsData.map(() => false)
  );

  const toggleExpand = (index: number) => {
    const newStates = [...expandedStates];
    newStates[index] = !newStates[index];
    setExpandedStates(newStates);
  };

  return (
    <section id="projects" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold text-cosmic mb-6">
            Featured Projects
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A showcase of my latest work, demonstrating expertise in modern web technologies and creative problem-solving.
          </p>
          <div className="w-24 h-1 bg-cosmic mx-auto rounded-full mt-8" />
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="bg-card-gradient border-border/50 hover:border-accent/50 transition-all duration-300 hover-lift group overflow-hidden h-full">
                <div className="relative h-48 bg-gradient-to-br from-primary/20 to-accent/20 overflow-hidden">
                  <div className="absolute inset-0 bg-cosmic/20 group-hover:bg-cosmic/40 transition-all duration-300" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-6xl text-primary/50 group-hover:text-primary/70 transition-colors duration-300">
                      <Play className="h-16 w-16" />
                    </div>
                  </div>
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-cosmic/80 text-primary-foreground backdrop-blur-sm">
                      {project.category}
                    </Badge>
                  </div>
                  <div className="absolute inset-0 bg-background/90 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center gap-4">
                    {project.liveUrl && (
                      <Button size="sm" variant="outline" className="backdrop-blur-sm" asChild>
                        <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="h-4 w-4 mr-2" />
                          Live Demo
                        </a>
                      </Button>
                    )}
                    <Button size="sm" className="bg-cosmic" asChild>
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github className="h-4 w-4 mr-2" />
                        Code
                      </a>
                    </Button>
                  </div>
                </div>

                <CardContent className="p-6 flex-1 flex flex-col">
                  <h3 className="text-xl font-bold mb-3 text-primary group-hover:text-accent transition-colors duration-300">
                    {project.title}
                  </h3>

                  <div className="text-muted-foreground mb-4 leading-relaxed flex-1">
                    <p className={expandedStates[index] ? "" : "line-clamp-3"}>
                      {project.description}
                    </p>
                    {project.description.length > 120 && (
                      <button
                        className="mt-2 text-cosmic text-sm font-medium underline hover:text-accent"
                        onClick={() => toggleExpand(index)}
                      >
                        {expandedStates[index] ? "Show less" : "Read more"}
                      </button>
                    )}
                  </div>

                  <div className="mb-4">
                    <h4 className="text-sm font-semibold mb-2 text-accent">Key Features:</h4>
                    <div className="grid grid-cols-2 gap-1 text-xs text-muted-foreground">
                      {project.features.map((feature) => (
                        <div key={feature} className="flex items-center">
                          <span className="text-accent mr-1">•</span>
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <Badge
                        key={tech}
                        variant="secondary"
                        className="bg-primary/10 text-primary border-primary/20 text-xs"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
