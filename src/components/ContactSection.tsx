import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin, Phone, Github, Linkedin, Download } from "lucide-react";

const ContactSection = () => {
  return (
    <section className="py-24 px-6 bg-secondary/10">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <Badge variant="outline" className="mb-4 border-border/50">Get In Touch</Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Let's Create
            <span className="bg-gradient-to-r from-neon-purple via-neon-cyan to-neon-pink bg-clip-text text-transparent"> Together</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            I'm actively seeking internship opportunities where I can contribute my game development skills 
            and learn from experienced teams. Let's discuss how we can build amazing games together!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="card-gradient border-border/30 card-shadow">
            <CardHeader>
              <CardTitle className="text-2xl">Send a Message</CardTitle>
              <CardDescription>
                Interested in my work? Drop me a message and let's start a conversation about game development!
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Name</label>
                  <Input placeholder="Your Name" className="bg-input/50 border-border/50" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Email</label>
                  <Input type="email" placeholder="your.email@company.com" className="bg-input/50 border-border/50" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Subject</label>
                <Input placeholder="Internship Opportunity / Project Collaboration" className="bg-input/50 border-border/50" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Message</label>
                <Textarea 
                  placeholder="Tell me about the opportunity or project you have in mind..."
                  rows={5}
                  className="bg-input/50 border-border/50"
                />
              </div>
              <Button className="w-full hero-gradient text-primary-foreground hover:opacity-90 transition-all duration-300 neon-glow">
                <Mail className="h-4 w-4 mr-2" />
                Send Message
              </Button>
            </CardContent>
          </Card>

          {/* Contact Info */}
          <div className="space-y-8">
            <Card className="card-gradient border-border/30 card-shadow p-6">
              <h3 className="text-xl font-semibold mb-6">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Mail className="h-5 w-5 text-accent" />
                  <div>
                    <p className="font-medium">Email</p>
                    <p className="text-sm text-muted-foreground">gamedev.portfolio@email.com</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="h-5 w-5 text-accent" />
                  <div>
                    <p className="font-medium">Phone</p>
                    <p className="text-sm text-muted-foreground">+1 (555) 123-4567</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="h-5 w-5 text-accent" />
                  <div>
                    <p className="font-medium">Location</p>
                    <p className="text-sm text-muted-foreground">Available for Remote/Hybrid</p>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="card-gradient border-border/30 card-shadow p-6">
              <h3 className="text-xl font-semibold mb-6">Connect & Download</h3>
              <div className="space-y-4">
                <div className="flex gap-3">
                  <Button asChild variant="outline" className="flex-1 border-border/50 hover:bg-secondary/50">
                    <a href="https://github.com/mathieubonnieu" target="_blank" rel="noreferrer">
                      <Github className="h-4 w-4 mr-2" />
                      GitHub
                    </a>
                  </Button>
                  <Button asChild variant="outline" className="flex-1 border-border/50 hover:bg-secondary/50">
                    <a href="https://www.linkedin.com/in/mathieu-bonnieu" target="_blank" rel="noreferrer">
                      <Linkedin className="h-4 w-4 mr-2" />
                      LinkedIn
                    </a>
                  </Button>
                </div>
                <Button variant="outline" className="w-full border-primary/50 text-primary hover:bg-primary/10">
                  <Download className="h-4 w-4 mr-2" />
                  Download Resume (PDF)
                </Button>
              </div>
            </Card>

            <Card className="card-gradient border-border/30 card-shadow p-6">
              <h3 className="text-xl font-semibold mb-4">What I'm Looking For</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Game development internships</li>
                <li>• Junior developer positions</li>
                <li>• Collaborative project opportunities</li>
                <li>• Mentorship and learning experiences</li>
                <li>• Remote or hybrid work arrangements</li>
              </ul>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;