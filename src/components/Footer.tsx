import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border/50 bg-background/50 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="text-xl font-bold bg-gradient-to-r from-neon-purple to-neon-cyan bg-clip-text text-transparent">
              GameDev.Portfolio
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              5th year game software student passionate about creating immersive gaming experiences 
              and seeking opportunities to grow in the industry.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-semibold">Quick Links</h3>
            <div className="space-y-2">
              {['About', 'Projects', 'Skills', 'Contact'].map((link) => (
                <button
                  key={link}
                  onClick={() => document.getElementById(link.toLowerCase())?.scrollIntoView({ behavior: 'smooth' })}
                  className="block text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
                >
                  {link}
                </button>
              ))}
            </div>
          </div>

          {/* Connect */}
          <div className="space-y-4">
            <h3 className="font-semibold">Let's Connect</h3>
            <div className="flex gap-2">
              <Button asChild variant="outline" size="icon" className="border-border/50 hover:bg-secondary/50">
                <a href="https://github.com/mathieubonnieu" target="_blank" rel="noreferrer">
                  <Github className="h-4 w-4" />
                </a>
              </Button>
              <Button asChild variant="outline" size="icon" className="border-border/50 hover:bg-secondary/50">
                <a href="https://www.linkedin.com/in/mathieu-bonnieu" target="_blank" rel="noreferrer">
                  <Linkedin className="h-4 w-4" />
                </a>
              </Button>
              <Button asChild variant="outline" size="icon" className="border-border/50 hover:bg-secondary/50">
                <a href="https://mail.google.com/mail/?view=cm&to=mathieubonnieu07@gmail.com" target="_blank" rel="noreferrer">
                  <Mail className="h-4 w-4" />
                </a>
              </Button>
            </div>
            <p className="text-sm text-muted-foreground">
              Open to internship opportunities and collaborations
            </p>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-border/30">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">
              © {currentYear} Game Developer Portfolio. All rights reserved.
            </p>
            <p className="text-sm text-muted-foreground flex items-center gap-1">
              Made with <Heart className="h-3 w-3 text-red-500" /> for the gaming community
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;