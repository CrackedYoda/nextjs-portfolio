'use client';

import { Code, Server, Database, Layers, Workflow, CheckCircle, ArrowRight, Smartphone, Container } from 'lucide-react';
import SendMessage from '../components/sendmessage';

export default function ServicesPage() {
  const services = [
    {
      title: "Full-Stack Web Development",
      description: "Design and development of production-ready web applications using Next.js, React, TypeScript, and modern frontend tooling, paired with robust backend systems.",
      icon: Layers,
      features: [
        "Full-stack application architecture",
        "Admin dashboards & internal tools",
        "Authentication & role-based access control",
        "Responsive, high-performance UI"
      ]
    },
    {
      title: "Backend Engineering & APIs",
      description: "Designing scalable and secure backend systems using Node.js, Express, REST APIs, and both SQL & NoSQL databases.",
      icon: Server,
      features: [
        "API design & implementation",
        "Database modeling & optimization (MongoDB, PostgreSQL)",
        "Secure authentication & authorization",
        "Scalable service architecture"
      ]
    },
    {
      title: "Web3 Development & Integrations",
      description: "Building Web3-enabled applications with seamless user experience and secure blockchain interactions.",
      icon: Database, // Or a custom block icon if available
      features: [
        "Wallet integrations",
        "Smart-contract interactions",
        "On-chain data indexing & consumption",
        "Multi-chain support (Ethereum, Solana, EVM)"
      ]
    },
    {
      title: "Automation & Workflow Engineering",
      description: "Designing end-to-end automations using n8n and Make.com, often enhanced with LLMs, to eliminate manual work and improve operational efficiency.",
      icon: Workflow,
      features: [
        "Business process automation",
        "API-to-API integrations",
        "AI-powered workflows",
        "Internal tools and system orchestration"
      ]
    },
    {
      title: "Project Management & Technical Leadership",
      description: "Structured project execution backed by Google Project Management certification.",
      icon: CheckCircle,
      features: [
        "MVP planning & roadmap definition",
        "Agile execution & delivery tracking",
        "Cross-functional communication",
        "Risk management & scope control"
      ]
    },
    {
      title: "Mobile App Development",
      description: "Building cross-platform mobile applications for iOS and Android using React Native, ensuring native performance and seamless user experience.",
      icon: Smartphone, 
      features: [
        "Cross-platform development (iOS & Android)",
        "React Native & Expo",
        "Native module integration",
        "App Store & Play Store deployment"
      ]
    },
    {
      title: "DevOps & Cloud Infrastructure",
      description: "Streamlining deployment and operations with Docker and modern CI/CD practices to ensure reliability and scalability.",
      icon: Container,
      features: [
        "Containerization with Docker",
        "CI/CD pipeline configuration",
        "Cloud server management",
        "Infrastructure optimization"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-[#050505] text-white font-main py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-20 space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
            My <span className="text-purple-500">Services</span>
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Comprehensive technical solutions tailored to your business needs. From initial concept to production-grade deployment.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="group bg-[#0f0f11] border border-white/5 rounded-2xl p-8 hover:border-purple-500/30 transition-all hover:-translate-y-1 hover:shadow-2xl hover:shadow-purple-500/10 flex flex-col"
            >
              <div className="w-14 h-14 bg-purple-500/10 rounded-xl flex items-center justify-center text-purple-500 mb-6 group-hover:bg-purple-500 group-hover:text-white transition-colors">
                <service.icon size={28} />
              </div>

              <h3 className="text-xl font-bold mb-4">{service.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-8 flex-grow">
                {service.description}
              </p>

              <div className="space-y-3 pt-6 border-t border-white/5">
                {service.features.map((feature, idx) => (
                  <div key={idx} className="flex items-start gap-3 text-sm text-gray-300">
                    <div className="min-w-1.5 h-1.5 rounded-full bg-purple-500 mt-2"></div>
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <SendMessage />
      </div>
    </div>
  );
}