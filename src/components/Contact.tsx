import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Mail, Phone, MapPin, Send, Github, Linkedin } from 'lucide-react';
import { useState } from 'react';
import { toast } from 'sonner';

// Placeholder data - replace with your actual contact information
const contactData = {
  email: "rokkamtejaswi10@gmail.com",
  phone: "+91 9492487589",
  location: "Rajahmundry",
  social: {
    github: "https://github.com/TejaswiRokkam",
    linkedin: "https://www.linkedin.com/in/tejaswi-rokkam-55b089259"
  }
};

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    toast.success("Message sent successfully! I'll get back to you soon.");
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 relative">
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
            Let's Work Together
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to bring your ideas to life? I'm always excited to discuss new projects and opportunities.
          </p>
          <div className="w-24 h-1 bg-cosmic mx-auto rounded-full mt-8" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-3xl font-bold mb-6 text-accent">Get In Touch</h3>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                I'm currently available for freelance work and full-time opportunities. 
                Whether you have a project in mind or just want to chat about technology, 
                feel free to reach out!
              </p>
            </div>

            {/* Contact Cards */}
            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="bg-card-gradient border-border/50 hover:border-accent/50 transition-all duration-300 hover-lift">
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-4">
                      <div className="p-3 rounded-xl bg-cosmic/20">
                        <Mail className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1">Email</h4>
                        <a 
                          href={`mailto:${contactData.email}`}
                          className="text-muted-foreground hover:text-accent transition-colors"
                        >
                          {contactData.email}
                        </a>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <Card className="bg-card-gradient border-border/50 hover:border-accent/50 transition-all duration-300 hover-lift">
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-4">
                      <div className="p-3 rounded-xl bg-cosmic/20">
                        <Phone className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1">Phone</h4>
                        <a 
                          href={`tel:${contactData.phone}`}
                          className="text-muted-foreground hover:text-accent transition-colors"
                        >
                          {contactData.phone}
                        </a>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <Card className="bg-card-gradient border-border/50 hover:border-accent/50 transition-all duration-300 hover-lift">
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-4">
                      <div className="p-3 rounded-xl bg-cosmic/20">
                        <MapPin className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1">Location</h4>
                        <span className="text-muted-foreground">{contactData.location}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <h4 className="text-lg font-semibold mb-4">Connect With Me</h4>
              <div className="flex gap-4">
                <a
                  href={contactData.social.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 rounded-xl bg-card/50 hover:bg-accent hover:scale-110 transition-all duration-300 backdrop-blur-sm accent-glow"
                >
                  <Github className="h-6 w-6" />
                </a>
                <a
                  href={contactData.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 rounded-xl bg-card/50 hover:bg-accent hover:scale-110 transition-all duration-300 backdrop-blur-sm accent-glow"
                >
                  <Linkedin className="h-6 w-6" />
                </a>
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card className="bg-card-gradient border-border/50 card-glow">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-6">Send a Message</h3>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name">Name</Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your name"
                        required
                        className="bg-background/50 border-border/50 focus:border-accent"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="your.email@example.com"
                        required
                        className="bg-background/50 border-border/50 focus:border-accent"
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject</Label>
                    <Input
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="Project inquiry, collaboration, etc."
                      required
                      className="bg-background/50 border-border/50 focus:border-accent"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell me about your project or idea..."
                      required
                      rows={6}
                      className="bg-background/50 border-border/50 focus:border-accent resize-none"
                    />
                  </div>
                  
                  <Button 
                    type="submit" 
                    size="lg" 
                    className="w-full bg-cosmic text-primary-foreground hover:scale-105 transition-all duration-300 cosmic-glow"
                  >
                    Send Message
                    <Send className="ml-2 h-5 w-5" />
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
