import { Badge } from "@/components/ui/badge";
import { useEffect, useRef, useState } from "react";

const SkillsSection = () => {
  const [visibleSkills, setVisibleSkills] = useState<Set<number>>(new Set());
  const skillRefs = useRef<(HTMLDivElement | null)[]>([]);

  const skills = [
    { name: "Unity", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/unity/unity-original.svg", color: "from-gray-600 to-gray-800", glow: "shadow-gray-500/50" },
    { name: "Godot", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/godot/godot-original.svg", color: "from-blue-400 to-blue-600", glow: "shadow-blue-400/50" },
    { name: "C++", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg", color: "from-blue-500 to-blue-700", glow: "shadow-blue-500/50" },
    { name: "C#", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg", color: "from-purple-500 to-purple-700", glow: "shadow-purple-500/50" },
    { name: "C", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg", color: "from-blue-600 to-blue-800", glow: "shadow-blue-600/50" },
    { name: "Python", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg", color: "from-green-500 to-green-700", glow: "shadow-green-500/50" },
    
    { name: "TypeScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg", color: "from-blue-400 to-blue-600", glow: "shadow-blue-400/50" },
    { name: "React/React Native", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", color: "from-cyan-400 to-cyan-600", glow: "shadow-cyan-500/50" },
    { name: "Vue.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg", color: "from-green-400 to-green-600", glow: "shadow-green-400/50" },
    
    
    { name: "Git", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg", color: "from-orange-500 to-orange-700", glow: "shadow-orange-500/50" },
    { name: "Maya", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/maya/maya-original.svg", color: "from-teal-600 to-teal-800", glow: "shadow-teal-600/50" },
    
    { name: "Level Design", logo: "https://cdn-icons-png.flaticon.com/512/2620/2620975.png", color: "from-purple-500 to-pink-500", glow: "shadow-purple-500/50" },
    { name: "Game Design", logo: "https://cdn-icons-png.flaticon.com/512/686/686589.png", color: "from-cyan-500 to-blue-500", glow: "shadow-cyan-500/50" },
    
    { name: "VR/AR", logo: "https://cdn-icons-png.flaticon.com/512/2103/2103633.png", color: "from-violet-500 to-violet-700", glow: "shadow-violet-500/50" },
    
    { name: "MySQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg", color: "from-blue-500 to-blue-700", glow: "shadow-blue-500/50" },
    { name: "Figma", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg", color: "from-purple-400 to-purple-600", glow: "shadow-purple-400/50" },
  ];

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    skillRefs.current.forEach((ref, index) => {
      if (ref) {
        const observer = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              setVisibleSkills((prev) => {
                const newSet = new Set(prev);
                if (entry.isIntersecting) {
                  newSet.add(index);
                } else {
                  newSet.delete(index);
                }
                return newSet;
              });
            });
          },
          {
            threshold: 0.1,
            rootMargin: "-200px 0px -150px 0px", // Plus de marge en haut et en bas pour disparition plus rapide
          }
        );

        observer.observe(ref);
        observers.push(observer);
      }
    });

    return () => {
      observers.forEach((observer) => observer.disconnect());
    };
  }, []);

  return (
    <section className=" px-6 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-20 animate-fade-in">
          <Badge variant="outline" className="mb-4 border-border/50 text-sm px-4 py-2">Technical Skills</Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Technical
            <span className="bg-gradient-to-r from-neon-cyan to-neon-pink bg-clip-text text-transparent"> Expertise</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Scroll to discover my skills as they float into view
          </p>
        </div>

        {/* Scrollable skills container */}
        <div className="relative min-h-[1250px]">
          <div className="flex justify-center gap-8 md:gap-16">
            {/* Column 1 */}
            <div className="flex flex-col gap-32 animate-float" style={{ animationDuration: '4s' }}>
              {skills.filter((_, i) => i % 4 === 0).map((skill, idx) => {
                const actualIndex = idx * 4;
                const isVisible = visibleSkills.has(actualIndex);
                return (
                  <div
                    key={skill.name}
                    ref={(el) => (skillRefs.current[actualIndex] = el)}
                    className={`
                      group relative flex flex-col items-center justify-center 
                      w-32 h-32 md:w-40 md:h-40 rounded-3xl bg-gradient-to-br ${skill.color}
                      shadow-2xl ${skill.glow} cursor-pointer overflow-hidden
                      transition-all duration-700 ease-out
                      ${isVisible 
                        ? 'opacity-100 scale-100 translate-y-0' 
                        : 'opacity-0 scale-50 translate-y-20'
                      }
                      hover:scale-110 hover:rotate-3
                    `}
                    style={{
                      animationDelay: `${idx * 0.1}s`,
                    }}
                  >
                    {/* Shimmer effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent 
                      -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                    
                    <div className="w-16 h-16 md:w-20 md:h-20 mb-2 group-hover:scale-125 transition-transform duration-300 relative z-10 p-2">
                      <img 
                        src={skill.logo} 
                        alt={skill.name}
                        className="w-full h-full object-contain filter drop-shadow-lg"
                      />
                    </div>
                    <span className="font-bold text-xs md:text-sm text-white text-center drop-shadow-lg px-2 relative z-10">
                      {skill.name}
                    </span>
                    
                    {/* Glow ring on hover */}
                    <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 
                      transition-opacity duration-300 ring-4 ring-white/40" />
                  </div>
                );
              })}
            </div>

            {/* Column 2 */}
            <div className="flex flex-col gap-32 mt-20 animate-float" style={{ animationDuration: '4.5s', animationDelay: '0.5s' }}>
              {skills.filter((_, i) => i % 4 === 1).map((skill, idx) => {
                const actualIndex = idx * 4 + 1;
                const isVisible = visibleSkills.has(actualIndex);
                return (
                  <div
                    key={skill.name}
                    ref={(el) => (skillRefs.current[actualIndex] = el)}
                    className={`
                      group relative flex flex-col items-center justify-center 
                      w-32 h-32 md:w-40 md:h-40 rounded-3xl bg-gradient-to-br ${skill.color}
                      shadow-2xl ${skill.glow} cursor-pointer overflow-hidden
                      transition-all duration-700 ease-out
                      ${isVisible 
                        ? 'opacity-100 scale-100 translate-y-0' 
                        : 'opacity-0 scale-50 translate-y-20'
                      }
                      hover:scale-110 hover:-rotate-3
                    `}
                    style={{
                      animationDelay: `${idx * 0.1 + 0.05}s`,
                    }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent 
                      -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                    
                    <div className="w-16 h-16 md:w-20 md:h-20 mb-2 group-hover:scale-125 transition-transform duration-300 relative z-10 p-2">
                      <img 
                        src={skill.logo} 
                        alt={skill.name}
                        className="w-full h-full object-contain filter drop-shadow-lg"
                      />
                    </div>
                    <span className="font-bold text-xs md:text-sm text-white text-center drop-shadow-lg px-2 relative z-10">
                      {skill.name}
                    </span>
                    
                    <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 
                      transition-opacity duration-300 ring-4 ring-white/40" />
                  </div>
                );
              })}
            </div>

            {/* Column 3 - Hidden on mobile */}
            <div className="hidden md:flex flex-col gap-32 mt-40 animate-float" style={{ animationDuration: '5s', animationDelay: '1s' }}>
              {skills.filter((_, i) => i % 4 === 2).map((skill, idx) => {
                const actualIndex = idx * 4 + 2;
                const isVisible = visibleSkills.has(actualIndex);
                return (
                  <div
                    key={skill.name}
                    ref={(el) => (skillRefs.current[actualIndex] = el)}
                    className={`
                      group relative flex flex-col items-center justify-center 
                      w-40 h-40 rounded-3xl bg-gradient-to-br ${skill.color}
                      shadow-2xl ${skill.glow} cursor-pointer overflow-hidden
                      transition-all duration-700 ease-out
                      ${isVisible 
                        ? 'opacity-100 scale-100 translate-y-0' 
                        : 'opacity-0 scale-50 translate-y-20'
                      }
                      hover:scale-110 hover:rotate-3
                    `}
                    style={{
                      animationDelay: `${idx * 0.1 + 0.1}s`,
                    }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent 
                      -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                    
                    <div className="w-16 h-16 md:w-20 md:h-20 mb-2 group-hover:scale-125 transition-transform duration-300 relative z-10 p-2">
                      <img 
                        src={skill.logo} 
                        alt={skill.name}
                        className="w-full h-full object-contain filter drop-shadow-lg"
                      />
                    </div>
                    <span className="font-bold text-sm text-white text-center drop-shadow-lg px-2">
                      {skill.name}
                    </span>
                    
                    <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 
                      transition-opacity duration-300 ring-4 ring-white/40" />
                  </div>
                );
              })}
            </div>

            {/* Column 4 - Hidden on mobile */}
            <div className="hidden md:flex flex-col gap-32 mt-10 animate-float" style={{ animationDuration: '4s' }}>
              {skills.filter((_, i) => i % 4 === 3).map((skill, idx) => {
                const actualIndex = idx * 4 + 3;
                const isVisible = visibleSkills.has(actualIndex);
                return (
                  <div
                    key={skill.name}
                    ref={(el) => (skillRefs.current[actualIndex] = el)}
                    className={`
                      group relative flex flex-col items-center justify-center 
                      w-40 h-40 rounded-3xl bg-gradient-to-br ${skill.color}
                      shadow-2xl ${skill.glow} cursor-pointer overflow-hidden
                      transition-all duration-700 ease-out
                      ${isVisible 
                        ? 'opacity-100 scale-100 translate-y-0' 
                        : 'opacity-0 scale-50 translate-y-20'
                      }
                      hover:scale-110 hover:-rotate-3
                    `}
                    style={{
                      animationDelay: `${idx * 0.1 + 0.15}s`,
                    }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent 
                      -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                    
                    <div className="w-16 h-16 md:w-20 md:h-20 mb-2 group-hover:scale-125 transition-transform duration-300 relative z-10 p-2">
                      <img 
                        src={skill.logo} 
                        alt={skill.name}
                        className="w-full h-full object-contain filter drop-shadow-lg"
                      />
                    </div>
                    <span className="font-bold text-sm text-white text-center drop-shadow-lg px-2">
                      {skill.name}
                    </span>
                    
                    <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 
                      transition-opacity duration-300 ring-4 ring-white/40" />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;