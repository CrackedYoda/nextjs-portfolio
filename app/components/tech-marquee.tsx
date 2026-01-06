import { 
  SiJavascript, SiTypescript, SiPython, 
  SiReact, SiNextdotjs, 
  SiNodedotjs, SiExpress, SiNestjs,
  SiMongodb, SiPostgresql, SiRedis,
  SiDocker, SiMake
} from 'react-icons/si';
import { Workflow } from 'lucide-react';

// Defining the tech stack with specific colors for hover effects
const technologies = [
  { name: "JavaScript", icon: SiJavascript, color: "hover:text-yellow-400" },
  { name: "TypeScript", icon: SiTypescript, color: "hover:text-blue-400" },
  { name: "Python", icon: SiPython, color: "hover:text-yellow-300" },
  { name: "React", icon: SiReact, color: "hover:text-cyan-400" },
  { name: "Next.js", icon: SiNextdotjs, color: "hover:text-white" },
  { name: "React Native", icon: SiReact, color: "hover:text-cyan-400" }, 
  { name: "Node.js", icon: SiNodedotjs, color: "hover:text-green-500" },
  { name: "Express", icon: SiExpress, color: "hover:text-white" },
  { name: "NestJS", icon: SiNestjs, color: "hover:text-red-500" },
  { name: "MongoDB", icon: SiMongodb, color: "hover:text-green-400" },
  { name: "PostgreSQL", icon: SiPostgresql, color: "hover:text-blue-300" },
  { name: "Redis", icon: SiRedis, color: "hover:text-red-500" },
  { name: "Docker", icon: SiDocker, color: "hover:text-blue-500" },
  { name: "n8n", icon: Workflow, color: "hover:text-red-400" }, // Fallback to generic Workflow icon
  { name: "Make.com", icon: SiMake, color: "hover:text-purple-500" } 
];

export default function TechMarquee() {
  return (
    <div className="w-full bg-[#0a0a0c] border-y border-white/5 py-10 overflow-hidden relative">
      {/* Gradient Masks */}
      <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#050505] to-transparent z-10"></div>
      <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#050505] to-transparent z-10"></div>
      
      <div className="flex animate-infinite-scroll whitespace-nowrap items-center">
        {/* Helper to duplicate list for seamless loop */}
        {[...Array(6)].map((_, i) => (
          <div key={i} className="flex gap-16 mx-8 items-center">
            {technologies.map((tech, index) => (
              <div 
                key={index}
                className={`flex flex-col items-center gap-3 text-gray-500 transition-all duration-300 group cursor-default ${tech.color}`}
              >
                  <tech.icon size={40} className="transition-transform group-hover:scale-110 duration-300" />
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
