import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Code, Palette, Zap, Globe } from 'lucide-react';

const aboutData = {
  title: "About Me",
  description: [
    "I'm a final-year B.Tech student specializing in Artificial Intelligence and Data Science at Shri Vishnu Engineering College for Women.",
    "I'm passionate about building AI-powered applications that solve real-world problems. My interests lie in Machine Learning, Deep Learning, and full-stack development. I enjoy learning new tools and contributing to meaningful projects."
  ],
  stats: [
    { label: "Years of Learning", value: "3+" },
    { label: "Certifications Completed", value: "10+" },
    { label: "Academic Projects", value: "5+" },
    { label: "Hours Spent Practicing", value: "1000+" }
  ],
  skills: [
    "Python", "Java", "C", "SQL", "HTML", "CSS", 
    "Streamlit", "Flask", "TensorFlow", "Keras", "scikit-learn",
    "Git", "VS Code", "Postman", "Whisper AI", "Cohere API", "n8n","OpenAI"
  ],
  values: [
    {
      icon: Code,
      title: "Clean Code",
      description: "Writing simple, understandable, and efficient code is my top priority."
    },
    {
      icon: Palette,
      title: "Design Focused",
      description: "I care about building interfaces that are not only functional but also elegant."
    },
    {
      icon: Zap,
      title: "Curious & Fast Learner",
      description: "I pick up new skills quickly and love experimenting with emerging tech."
    },
    {
      icon: Globe,
      title: "User Centric",
      description: "My projects aim to improve real user experiences with AI and automation."
    }
  ]
};

export default function About() {
  return (
    <section id="about" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold text-cosmic mb-6">
            {aboutData.title}
          </h2>
          <div className="w-24 h-1 bg-cosmic mx-auto rounded-full" />
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Column - Description & Values */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="space-y-6">
              {aboutData.description.map((paragraph, index) => (
                <p key={index} className="text-lg text-muted-foreground leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Values Grid */}
            <div className="grid sm:grid-cols-2 gap-6">
              {aboutData.values.map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="bg-card-gradient border-border/50 hover:border-accent/50 transition-all duration-300 hover-lift">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="p-3 rounded-xl bg-cosmic/20">
                          <value.icon className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold mb-2">{value.title}</h3>
                          <p className="text-sm text-muted-foreground">{value.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Column - Stats & Skills */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Stats */}
            <Card className="bg-card-gradient border-border/50 card-glow">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-6 text-center">Quick Stats</h3>
                <div className="grid grid-cols-2 gap-6">
                  {aboutData.stats.map((stat, index) => (
                    <motion.div
                      key={stat.label}
                      initial={{ opacity: 0, scale: 0.5 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="text-center"
                    >
                      <div className="text-3xl font-bold text-cosmic mb-2">{stat.value}</div>
                      <div className="text-sm text-muted-foreground">{stat.label}</div>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Skills */}
            <Card className="bg-card-gradient border-border/50">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-6">Skills & Technologies</h3>
                <div className="flex flex-wrap gap-3">
                  {aboutData.skills.map((skill, index) => (
                    <motion.div
                      key={skill}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.4, delay: index * 0.05 }}
                      viewport={{ once: true }}
                    >
                      <Badge 
                        variant="secondary" 
                        className="px-4 py-2 bg-cosmic/20 text-primary border-primary/30 hover:bg-cosmic/30 transition-colors duration-300"
                      >
                        {skill}
                      </Badge>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
