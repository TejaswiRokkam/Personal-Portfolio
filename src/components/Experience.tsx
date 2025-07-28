import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { CalendarDays, MapPin, Building } from 'lucide-react';

const experienceData: any[] = []; // No work experience

const educationData = [
  {
    degree: "B.Tech in Artificial Intelligence and Data Science",
    school: "Shri Vishnu Engineering College for Women",
    location: "Andhra Pradesh, India",
    period: "2022 - 2026",
    description:
      "Currently pursuing undergraduate studies focused on Artificial Intelligence, Machine Learning, and Data Science.",
  },
  {
    degree: "Intermediate (MPC)",
    school: "Tirumala Mahila Junior Kalasala",
    location: "Andhra Pradesh, India",
    period: "2020 - 2022",
    description:
      "Completed intermediate studies with a score of 968/1000, focusing on Mathematics, Physics, and Chemistry.",
  }
];

export default function Experience() {
  return (
    <section id="experience" className="py-20 relative">
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
            Experience & Education
          </h2>
          <div className="w-24 h-1 bg-cosmic mx-auto rounded-full" />
        </motion.div>

        {/* Grid: Skip Experience if empty */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left: Only if you later add work experience */}
          {experienceData.length > 0 && (
            <div>
              <motion.h3
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="text-3xl font-bold mb-8 text-accent"
              >
                Work Experience
              </motion.h3>
              {/* Placeholder if experience is added later */}
            </div>
          )}

          {/* Education Cards Side-by-Side */}
          <div className="w-full col-span-2">
            <motion.h3
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-3xl font-bold mb-8 text-accent"
            >
              Education
            </motion.h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
              {educationData.map((education, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  viewport={{ once: true }}
                >
                  <Card className="bg-card-gradient border-border/50 hover:border-accent/50 transition-all duration-300 hover-lift w-full h-full">
                    <CardContent className="p-8 h-full">
                      <h4 className="text-xl font-bold text-primary mb-2">{education.degree}</h4>
                      <div className="flex items-center gap-4 text-muted-foreground mb-2 flex-wrap">
                        <div className="flex items-center gap-2">
                          <Building className="h-4 w-4" />
                          <span>{education.school}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <MapPin className="h-4 w-4" />
                          <span>{education.location}</span>
                        </div>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
                        <CalendarDays className="h-4 w-4" />
                        <span>{education.period}</span>
                      </div>
                      <p className="text-muted-foreground">{education.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
