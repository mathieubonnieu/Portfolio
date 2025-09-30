import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, Gamepad2, Lightbulb, Users } from "lucide-react";

const AboutSection = () => {
  const highlights = [
    {
      icon: Code,
      title: "Technical Excellence",
      description: "Proficient in C++, C#, Unity, Godot, and modern game development frameworks"
    },
    {
      icon: Gamepad2,
      title: "Game Design",
      description: "Many games developed in 2D and 3D, with isometric and top-down views, in solo or multi-player"
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "Passionate about creating innovative games and experiences, throughout beautiful graphics and gameplay"
    },
    {
      icon: Users,
      title: "Team Player",
      description: "Collaborative approach with experience in agile development and cross-functional teams"
    }
  ];

  return (
    <section className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <Badge variant="outline" className="mb-4 border-border/50">About Me</Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Crafting Digital
            <span className="bg-gradient-to-r from-neon-purple to-neon-cyan bg-clip-text text-transparent"> Worlds</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            As a 5th year game software student, I combine technical expertise with creative vision to build 
            immersive gaming experiences that captivate players and push technological boundaries.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6 animate-slide-in">
            <h3 className="text-2xl font-semibold mb-4">My Journey</h3>
            <p className="text-muted-foreground leading-relaxed">
              My passion for game development began in high school when I created my first simple 2D platformer. 
              Since then, I've evolved into a well-rounded developer with experience across multiple engines, 
              programming languages, and game genres.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Throughout my academic journey, I've focused on both the technical and creative aspects of game 
              development, from low-level engine programming to high-level game design and user experience.
            </p>
            <div className="flex flex-wrap gap-2 pt-4">
              {["Unity", "Godot", "C#", "C++", "C", "Python", "Javascipt", "Maya", "Git"].map((skill) => (
                <Badge key={skill} variant="secondary" className="bg-secondary/50 border border-border/30">
                  {skill}
                </Badge>
              ))}
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            {highlights.map((highlight, index) => (
              <Card 
                key={highlight.title} 
                className="p-6 card-gradient border-border/30 hover:border-primary/30 transition-all duration-300 card-shadow"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <highlight.icon className="h-8 w-8 text-accent mb-4" />
                <h4 className="font-semibold mb-2">{highlight.title}</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">{highlight.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;