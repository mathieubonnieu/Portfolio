import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";

const SkillsSection = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      skills: [
        { name: "C++", level: 90, color: "bg-blue-500" },
        { name: "C#", level: 85, color: "bg-purple-500" },
        { name: "JavaScript", level: 80, color: "bg-yellow-500" },
        { name: "Python", level: 75, color: "bg-green-500" }
      ]
    },
    {
      title: "Game Engines",
      skills: [
        { name: "Unity", level: 88, color: "bg-gray-600" },
        { name: "Unreal Engine", level: 82, color: "bg-blue-600" },
        { name: "Godot", level: 70, color: "bg-blue-400" },
        { name: "Custom Engines", level: 65, color: "bg-red-500" }
      ]
    },
    {
      title: "Game Development",
      skills: [
        { name: "Gameplay Programming", level: 90, color: "bg-neon-purple" },
        { name: "Graphics Programming", level: 75, color: "bg-neon-cyan" },
        { name: "AI/ML Integration", level: 70, color: "bg-neon-pink" },
        { name: "Networking", level: 68, color: "bg-orange-500" }
      ]
    },
    {
      title: "Tools & Platforms",
      skills: [
        { name: "Git/Version Control", level: 85, color: "bg-gray-500" },
        { name: "Blender", level: 78, color: "bg-orange-600" },
        { name: "Photoshop", level: 72, color: "bg-blue-700" },
        { name: "Agile/Scrum", level: 80, color: "bg-green-600" }
      ]
    }
  ];

  const technologies = [
    "Unity", "Unreal Engine", "C++", "C#", "JavaScript", "Python", "Git", "Blender",
    "OpenGL", "DirectX", "Vulkan", "Steam SDK", "Mobile Development", "VR/AR",
    "Machine Learning", "Procedural Generation", "Physics Engines", "Networking"
  ];

  return (
    <section className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <Badge variant="outline" className="mb-4 border-border/50">Technical Skills</Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Technical
            <span className="bg-gradient-to-r from-neon-cyan to-neon-pink bg-clip-text text-transparent"> Expertise</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            A comprehensive toolkit of programming languages, game engines, and development tools 
            refined through years of hands-on project experience.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {skillCategories.map((category, categoryIndex) => (
            <Card 
              key={category.title} 
              className="p-6 card-gradient border-border/30 card-shadow"
              style={{ animationDelay: `${categoryIndex * 0.1}s` }}
            >
              <h3 className="text-xl font-semibold mb-6 text-foreground">{category.title}</h3>
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skill.name} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="font-medium text-sm">{skill.name}</span>
                      <span className="text-xs text-muted-foreground">{skill.level}%</span>
                    </div>
                    <div className="relative">
                      <Progress 
                        value={skill.level} 
                        className="h-2 bg-muted/30"
                      />
                      <div 
                        className={`absolute top-0 left-0 h-2 rounded-full ${skill.color} transition-all duration-1000 ease-out`}
                        style={{ 
                          width: `${skill.level}%`,
                          animationDelay: `${(categoryIndex * 4 + skillIndex) * 0.1}s`
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          ))}
        </div>

        <Card className="p-8 card-gradient border-border/30 card-shadow">
          <h3 className="text-xl font-semibold mb-6 text-center">Technologies & Frameworks</h3>
          <div className="flex flex-wrap gap-3 justify-center">
            {technologies.map((tech, index) => (
              <Badge 
                key={tech} 
                variant="secondary" 
                className="px-4 py-2 bg-secondary/50 border border-border/30 hover:bg-secondary/70 transition-all duration-300 cursor-default"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                {tech}
              </Badge>
            ))}
          </div>
        </Card>
      </div>
    </section>
  );
};

export default SkillsSection;