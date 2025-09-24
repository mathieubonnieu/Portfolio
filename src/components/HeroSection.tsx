import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ChevronDown, Github, Linkedin, Mail } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div className="absolute inset-0 bg-background/80 backdrop-blur-sm"></div>
      </div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-4 h-4 bg-neon-cyan rounded-full animate-float opacity-60"></div>
      <div className="absolute top-40 right-20 w-6 h-6 bg-neon-purple rounded-full animate-float opacity-40" style={{ animationDelay: '1s' }}></div>
      <div className="absolute bottom-32 left-20 w-3 h-3 bg-neon-pink rounded-full animate-float opacity-50" style={{ animationDelay: '2s' }}></div>
      
      {/* Main Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-6 animate-fade-in">
        <Badge variant="secondary" className="mb-6 px-4 py-2 text-lg font-bold bg-secondary/50 backdrop-blur-sm border border-border/50">
          Available for Internship
        </Badge>
        
        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-neon-purple via-neon-cyan to-neon-pink bg-clip-text text-transparent leading-tight">
          Game Developer
        </h1>
        
        <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
          5th year student passionate about creating immersive gaming experiences through innovative code and creative design
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <Button 
            onClick={scrollToProjects}
            size="lg" 
            className="hero-gradient text-primary-foreground hover:opacity-90 transition-all duration-300 neon-glow px-8 py-3 text-lg font-semibold"
          >
            View My Games
          </Button>
          
          <div className="flex gap-3">
            <Button asChild variant="outline" size="icon" className="border-border/50 bg-background/50 backdrop-blur-sm hover:bg-secondary/50 transition-all duration-300">
              <a href="https://github.com/mathieubonnieu" target="_blank" rel="noreferrer">
                <Github className="h-5 w-5" />
              </a>
            </Button>
            <Button asChild variant="outline" size="icon" className="border-border/50 bg-background/50 backdrop-blur-sm hover:bg-secondary/50 transition-all duration-300">
              <a href="https://www.linkedin.com/in/mathieu-bonnieu" target="_blank" rel="noreferrer">
                <Linkedin className="h-5 w-5" />
              </a>
            </Button>
            <Button asChild variant="outline" size="icon" className="border-border/50 bg-background/50 backdrop-blur-sm hover:bg-secondary/50 transition-all duration-300">
              <a href="https://mail.google.com/mail/?view=cm&to=mathieubonnieu07@gmail.com" target="_blank" rel="noreferrer">
                <Mail className="h-5 w-5" />
              </a>
            </Button>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <div className="animate-bounce">
          <ChevronDown className="h-8 w-8 text-muted-foreground mx-auto cursor-pointer hover:text-foreground transition-colors" onClick={scrollToProjects} />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;