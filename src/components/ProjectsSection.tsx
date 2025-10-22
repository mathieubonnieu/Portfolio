import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, Play } from "lucide-react";
import MyRioBrosImage from '../../dist/assets/ProjectsImages/MyRioBrosImage.png';
import GravityFightsImage from '../../dist/assets/ProjectsImages/GravityFightsImage.png';
import RaccoonImage from '../../dist/assets/ProjectsImages/RaccoonImage.png';
import FishTogetherImage from '../../dist/assets/ProjectsImages/FishTogetherImage.png';
// Use Vite base URL to reliably reference assets in `public/` in dev and production
const publicAsset = (path: string) => `${import.meta.env.BASE_URL}${path}`;

const ProjectsSection = () => {
  const projects = [
    {
      title: "Riff's Adventures",
      description: "A roguelike game with procedurally generated map, with many biomes and enemies, and different items to boost your character",
      image: RaccoonImage,
      tags: ["Unity", "C#", "Procedural Generation", "Roguelike"],
      type: "Roguelike",
      status: "Published",
      githubUrl: "https://github.com/mathieubonnieu/Riff-s-Adventures", // À remplacer par le vrai lien
      demoUrl: "#" // À remplacer par le lien de démo
    },
    {
      title: "Fish Together",
      description: "RPG game in solo/coop with friends, with a main quest, where the player has to save a village by fishing mobs with QTE",
      image: FishTogetherImage,
      tags: ["Unity", "C#", "QTE", "RPG", "Coop", "Network"],
      type: "Coop game",
      status: "In Development",
      githubUrl: "https://github.com/mathieubonnieu/FishTogether", // À remplacer par le vrai lien
      demoUrl: "#" // À remplacer par le lien de démo
    },
    {
      title: "Gravity Fights",
      description: "Local multi-player battle royale game, where the player has to fight against other players in a gravity-based arena, with different game modes and items",
      image: GravityFightsImage,
      tags: ["Godot", "battle royale", "Physics", "GDScript", "Multiplayer"],
      type: "Battle Royale",
      status: "Beta",
      githubUrl: "https://github.com/mathieubonnieu/GravityFights",
      demoUrl: "#" // À remplacer par le lien de démo
    },
    {
      title: "My Riobros",
      description: "A 2D platformer game, where the player has to reach the end of the level by jumping and dodging obstacles on platforms",
      image: MyRioBrosImage,
      tags: ["Unity", "C#", "Platformer", "Solo game"],
      type: "Platformer",
      status: "In Development",
      githubUrl: "https://github.com/mathieubonnieu/MyRiobros", // À remplacer par le vrai lien
      demoUrl: "#" // À remplacer par le lien de démo
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Published": return "bg-green-500/20 text-green-400 border-green-500/30";
      case "In Development": return "bg-blue-500/20 text-blue-400 border-blue-500/30";
      case "Beta": return "bg-yellow-500/20 text-yellow-400 border-yellow-500/30";
      default: return "bg-purple-500/20 text-purple-400 border-purple-500/30";
    }
  };

  return (
    <section id="projects" className="py-24 px-6 bg-secondary/20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <Badge variant="outline" className="mb-4 border-border/50 text-sm px-4 py-2">Featured Projects</Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Game
            <span className="bg-gradient-to-r from-neon-pink to-neon-purple bg-clip-text text-transparent"> Portfolio</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            A showcase of innovative games and interactive experiences that demonstrate my technical skills 
            and creative vision in game development.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={project.title} 
              className="group card-gradient border-border/30 hover:border-primary/50 transition-all duration-500 card-shadow hover:card-shadow-lg overflow-hidden"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute top-4 left-4">
                  <Badge variant="secondary" className={`${getStatusColor(project.status)} border`}>
                    {project.status}
                  </Badge>
                </div>
                <div className="absolute top-4 right-4">
                  <Badge variant="outline" className="bg-background/80 backdrop-blur-sm border-border/50">
                    {project.type}
                  </Badge>
                </div>
              </div>

              <CardHeader>
                <CardTitle className="text-xl group-hover:text-primary transition-colors">
                  {project.title}
                </CardTitle>
                <CardDescription className="text-muted-foreground leading-relaxed">
                  {project.description}
                </CardDescription>
              </CardHeader>

              <CardContent>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="secondary" className="bg-secondary/50 border border-border/30 text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>

                <div className="flex gap-2">
                  <Button 
                    size="sm" 
                    className="flex-1 bg-primary/20 hover:bg-primary/30 text-primary border border-primary/30"
                    asChild
                  >
                    <a href={project.demoUrl} target="_blank" rel="noreferrer">
                      <Play className="h-4 w-4 mr-2" />
                      Demo
                    </a>
                  </Button>
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="border-border/50 hover:bg-primary/20 hover:border-primary/50 hover:text-primary"
                    asChild
                  >
                    <a href={project.githubUrl} target="_blank" rel="noreferrer">
                      <Github className="h-4 w-4 mr-2" />
                      Code
                    </a>
                  </Button>
                  <Button 
                    variant="outline" 
                    size="icon" 
                    className="border-border/50 hover:bg-primary/20 hover:border-primary/50 hover:text-primary"
                    asChild
                  >
                    <a href={project.githubUrl} target="_blank" rel="noreferrer">
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="outline" size="lg" className="border-border/50 hover:bg-primary/20 hover:border-primary/50 hover:text-primary " asChild>
            <a href="https://github.com/mathieubonnieu" target="_blank" rel="noreferrer">
              <Github className="h-5 w-5 mr-2" />
              View All Projects on GitHub
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;