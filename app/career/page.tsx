'use client';

import { Calendar, Briefcase, ExternalLink, MapPin, CheckCircle, Code, Database, Server, Settings } from 'lucide-react';
import SendMessage from '../components/sendmessage';

export default function CareerPage() {
  const experiences = [
    {
      role: "Backend Developer",
      company: "SnapX",
      period: "2024",
      location: "Remote",
      website: "https://snapx.co",
      description: "Worked as a Backend Developer at a Web3 company focused on influencer and social data analytics.",
      achievements: [
        "Designed and contributed to the core influencer tracking architecture",
        "Built scalable backend services to process and analyze large datasets",
        "Collaborated closely with frontend and product teams to deliver production-grade features",
        "Focused on performance, reliability, and clean system design"
      ]
    },
    {
      role: "Product Design & Development",
      company: "AlphaIndex",
      period: "2024",
      location: "Remote",
      website: "https://alphaindex.io",
      description: "Designed and built AlphaIndex, a platform focused on discovering tools and resources across multiple blockchain ecosystems.",
      achievements: [
        "Designed the product architecture and user experience",
        "Built a scalable frontend and backend system",
        "Structured data for easy discovery across blockchains",
        "Focused on performance, clarity, and usability"
      ]
    },
    {
      role: "Automation & AI Workflows",
      company: "Freelance / Consultant",
      period: "Ongoing",
      location: "Remote",
      website: "",
      description: "Designed and implemented multiple full automation systems for clients using n8n, often integrated with LLMs.",
      achievements: [
        "Automated internal operations and data pipelines",
        "Integrated AI models for decision-making and content processing",
        "Reduced manual work and improved business efficiency",
        "Built maintainable, scalable automation systems"
      ]
    }
  ];

  const techStack = [
    {
      category: "Languages",
      icon: Code,
      items: ["JavaScript", "TypeScript", "Python"]
    },
    {
      category: "Frontend",
      icon: Settings, // Using Settings as placeholder for Layout/UI
      items: ["React", "Next.js", "React Native"]
    },
    {
      category: "Backend & APIs",
      icon: Server,
      items: ["Node.js", "Express", "NestJS"]
    },
    {
      category: "Databases & Caching",
      icon: Database,
      items: ["MongoDB (Mongoose)", "PostgreSQL (Prisma / Drizzle ORM)", "Redis"]
    },
    {
      category: "DevOps & Automation",
      icon: Settings,
      items: ["Docker", "Kubernetes", "n8n", "Make.com"]
    }
  ];

  return (
    <div className="min-h-screen bg-[#050505] text-white font-main py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header / Bio Section */}
        <div className="mb-20 space-y-8">
          <div className="text-center space-y-4">
               <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
                My <span className="text-purple-500">Career</span>
              </h1>
              <p className="text-gray-400 text-lg">
                Engineering, Innovation, and Growth.
              </p>
          </div>

          <div className="bg-[#0f0f11] border border-white/5 p-8 rounded-2xl space-y-6 text-gray-300 leading-relaxed md:text-lg">
             <p>
               I’m <span className="text-white font-semibold">Nelson Akalia</span>, a Computer Science graduate from Nnamdi Azikiwe University, Nigeria, and a passionate software engineer with a lifelong curiosity for building things that work—and scale.
             </p>
             <p>
               I started coding at the age of 13, driven by a deep interest in how software can solve real-world problems. What began as curiosity quickly grew into a passion for innovation, system design, and creating tools that make life easier for individuals and businesses.
             </p>
             <p>
               Today, I work as a Full-Stack Developer, Automation Engineer, and Project Manager, helping startups and teams design, build, and scale production-ready applications. I enjoy working across the entire stack—from frontend experiences to backend systems, databases, automations, and infrastructure.
             </p>
             <p>
               Beyond coding, I bring structure and clarity to projects through formal project management training, ensuring that ideas move efficiently from concept to delivery. I value clean architecture, maintainable code, and systems built for long-term growth.
             </p>
             <p className="text-purple-400 italic font-medium">
               I’m constantly learning, experimenting, and improving—always focused on building solutions that are practical, scalable, and impactful.
             </p>
          </div>
        </div>

        {/* Education & Certificates */}
        <div className="mb-20">
           <h2 className="text-2xl font-bold mb-8 flex items-center gap-3">
              <div className="w-10 h-1 bg-purple-500 rounded-full"></div>
              Certificates & Education
           </h2>
           <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-[#0f0f11] border border-white/5 p-6 rounded-xl hover:border-purple-500/30 transition-colors">
                 <h3 className="font-bold text-lg text-white">B.Sc. in Computer Science</h3>
                 <p className="text-purple-500 mt-1">Nnamdi Azikiwe University, Nigeria</p>
              </div>
              <div className="bg-[#0f0f11] border border-white/5 p-6 rounded-xl hover:border-purple-500/30 transition-colors">
                 <h3 className="font-bold text-lg text-white">Google-Certified Project Manager</h3>
                 <p className="text-gray-400 mt-1 text-sm">Professional Certificate</p>
              </div>
           </div>
        </div>

        {/* Technical Skills Section */}
        <div className="mb-20">
           <h2 className="text-2xl font-bold mb-8 flex items-center gap-3">
              <div className="w-10 h-1 bg-purple-500 rounded-full"></div>
              Technologies I Work With
           </h2>
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
               {techStack.map((stack, idx) => (
                  <div key={idx} className="bg-[#0f0f11] border border-white/5 p-6 rounded-xl hover:-translate-y-1 transition-transform duration-300">
                      <div className="flex items-center gap-3 mb-4 text-purple-500">
                          <stack.icon size={20} />
                          <h3 className="text-white font-bold">{stack.category}</h3>
                      </div>
                      <ul className="space-y-2">
                          {stack.items.map((item, i) => (
                             <li key={i} className="text-gray-400 text-sm flex items-center gap-2">
                                <div className="w-1 h-1 bg-gray-500 rounded-full"></div>
                                {item}
                             </li>
                          ))}
                      </ul>
                  </div>
               ))}
           </div>
        </div>

        {/* Experience Timeline */}
        <div className="mb-20">
            <h2 className="text-2xl font-bold mb-8 flex items-center gap-3">
              <div className="w-10 h-1 bg-purple-500 rounded-full"></div>
              Professional Experience
           </h2>
           <div className="relative space-y-12">
               {/* Vertical Line */}
               <div className="absolute left-4 md:left-0 top-2 bottom-2 w-0.5 bg-gradient-to-b from-purple-500 via-purple-500/20 to-transparent md:hidden"></div>

               {experiences.map((exp, index) => (
               <div key={index} className="relative pl-12 md:pl-0">
                     
                     {/* Timeline Dot (Mobile) */}
                     <div className="absolute left-2.5 top-6 w-3 h-3 bg-purple-500 rounded-full border-2 border-[#050505] md:hidden transform -translate-x-1/2"></div>

                     <div className="group bg-[#0f0f11] border border-white/5 rounded-2xl p-6 md:p-8 hover:border-purple-500/30 transition-all hover:shadow-xl hover:shadow-purple-500/5">
                        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
                              <div>
                                 <h3 className="text-xl md:text-2xl font-bold text-white group-hover:text-purple-400 transition-colors">
                                    {exp.role}
                                 </h3>
                                 <div className="text-lg font-medium text-purple-500 mt-1 flex items-center gap-2">
                                    {exp.company}
                                    {exp.website && (
                                       <a href={exp.website} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-white transition-colors">
                                             <ExternalLink size={16} />
                                       </a>
                                    )}
                                 </div>
                              </div>
                              
                              <div className="flex flex-col md:items-end gap-1 text-sm text-gray-400 bg-white/5 md:bg-transparent p-3 md:p-0 rounded-lg md:rounded-none">
                                 <div className="flex items-center gap-2">
                                       <Calendar size={14} className="text-purple-500" />
                                       <span>{exp.period}</span>
                                 </div>
                                 <div className="flex items-center gap-2">
                                       <MapPin size={14} className="text-purple-500" />
                                       <span>{exp.location}</span>
                                 </div>
                              </div>
                        </div>

                        <p className="text-gray-300 md:text-lg mb-6 leading-relaxed border-l-2 border-purple-500/30 pl-4">
                              {exp.description}
                        </p>

                        <ul className="space-y-3">
                              {exp.achievements.map((item, i) => (
                                 <li key={i} className="flex items-start gap-3 text-gray-400 group-hover:text-gray-300 transition-colors">
                                       <div className="min-w-1.5 h-1.5 rounded-full bg-purple-500 mt-2.5"></div>
                                       <span className="text-sm md:text-base">{item}</span>
                                 </li>
                              ))}
                        </ul>
                     </div>
               </div>
               ))}
           </div>
        </div>

        <SendMessage />
      </div>
    </div>
  );
}
