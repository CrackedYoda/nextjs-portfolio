'use client';

import Link from 'next/link';
import { ArrowRight, CheckCircle, Award, Layout, Server, Boxes, Zap, Shield, Users, Settings, Code, Database } from 'lucide-react';
import SendMessage from '../components/sendmessage';
import TechMarquee from '../components/tech-marquee';

export default function Home() {
  const techStack = [
    {
      category: "Languages",
      icon: Code,
      items: ["JavaScript", "TypeScript", "Python"]
    },
    {
      category: "Frontend",
      icon: Settings,
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
    <div className="min-h-screen bg-[#050505] text-white font-main">
      {/* Hero Section - "Carlos Mendoza" Style Layout */}
      <div className="relative pt-12 pb-20 lg:pt-24 lg:pb-32 overflow-hidden">
        <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          
          {/* Row 1: Name and Image */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 items-center">
             
             {/* Left: Huge Name */}
             <div className="relative z-20 pt-10 lg:pt-0 text-center lg:text-left">
                <h1 className="text-[12vw] lg:text-[130px] font-bold leading-[0.9] tracking-tighter text-white">
                  Hi, I'm <br />
                  Nelson <br />
                  Akalia<span className="text-purple-500">.</span>
                </h1>
                <div className="w-24 h-2 bg-purple-500 mt-8 rounded-full mx-auto lg:mx-0"></div>
             </div>

             {/* Right: Portrait Image with Full Blend */}
             <div className="relative h-[500px] lg:h-[750px] w-full flex items-end justify-center lg:justify-end z-10 lg:-ml-20">
                <div className="relative w-full max-w-lg h-full flex items-end">
                    {/* The Image */}
                    <img 
                      src="/hero-portrait-new.png" 
                      alt="Nelson Akalia" 
                      className="w-full h-full object-cover object-top md:object-contain md:object-bottom"
                    />
                    
                    {/* Blending Gradients (Vignette Effect) */}
                    {/* Bottom fade */}
                    <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-[#050505] via-[#050505]/80 to-transparent"></div>
                    {/* Left fade */}
                    <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-[#050505] via-[#050505]/50 to-transparent"></div>
                    {/* Right fade */}
                    <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-[#050505] via-[#050505]/50 to-transparent"></div>
                    {/* Top fade (subtle) */}
                    <div className="absolute top-0 left-0 right-0 h-20 bg-gradient-to-b from-[#050505] to-transparent opacity-50"></div>
                </div>
             </div>
          </div>

          {/* Row 2: Intro Text - Moved Below */}
          <div className="max-w-3xl mx-auto lg:mx-0 mt-6 lg:mt-0 lg:pl-4 relative z-30">
              <div className="space-y-3">
                 <h2 className="text-3xl lg:text-4xl font-bold leading-tight">
                   I help businesses <br />
                   <span className="text-white">build, automate,</span> <br />
                   and <span className="text-purple-500">scale.</span>
                 </h2>
                 
                 <p className="text-gray-400 text-lg leading-relaxed max-w-2xl">
                   I’m a Full-Stack Engineer, Automation Expert, and Google-Certified Project Manager specializing in modern web applications, backend systems, and workflow automation.
                 </p>
              </div>
          </div>

        </div>
      </div>

      {/* Tech Stack Marquee */}
      <div>
         <TechMarquee />
      </div>

       {/* Detailed Tech Stack Grid */}
      <div className="bg-[#050505] py-20 border-y border-white/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-12">
                <h2 className="text-2xl font-bold mb-4">Technologies I Use</h2>
                <p className="text-gray-400">The tools and frameworks that power my solutions.</p>
              </div>

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
      </div>

      {/* Strong Points / Value Props */}
      <div className="bg-[#0f0f11] border-y border-white/5">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
               {[
                  { title: "Clarity", desc: "Clear communication and structured planning from day one.", icon: Layout },
                  { title: "Speed", desc: "Rapid prototyping and efficient execution without cutting corners.", icon: Zap },
                  { title: "Predictable Delivery", desc: "On-time delivery with established milestones and tracking.", icon: CheckCircle },
               ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-4 p-4 rounded-xl hover:bg-white/5 transition-colors">
                     <div className="bg-purple-500/10 p-3 rounded-lg text-purple-500">
                        <item.icon size={24} />
                     </div>
                     <div>
                        <h3 className="font-bold text-lg mb-1">{item.title}</h3>
                        <p className="text-gray-400 text-sm">{item.desc}</p>
                     </div>
                  </div>
               ))}
            </div>
         </div>
      </div>

      {/* About Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
         <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
             {/* Main About Text - Full Width since Certs are removed */}
             <div className="lg:col-span-12 space-y-8">
                 <div className="space-y-4">
                     <h2 className="text-3xl font-bold text-purple-500">About Me</h2>
                     <h3 className="text-3xl md:text-4xl font-bold">More than just code.</h3>
                 </div>
                 
                 <div className="text-gray-300 text-lg space-y-6 leading-relaxed">
                     <p>
                        I’m a professional Full-Stack Developer with strong experience across startups, blockchain ecosystems, and automation-driven products. My background spans frontend engineering, backend system design, Web3 integrations, and business process automation.
                     </p>
                     <p>
                        Beyond engineering, I’m also a Google-Certified Project Manager, which means I don’t just build features—I help teams plan, prioritize, and deliver software in a structured, on-time manner.
                     </p>
                     <p>
                        My approach is simple: understand the business problem deeply, design scalable systems, and execute with precision.
                     </p>
                 </div>
             </div>
         </div>
      </div>

      <SendMessage />
    </div>
  );
}
