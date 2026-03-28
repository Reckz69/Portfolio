import React, { useState } from 'react'; // Added useState
import { motion } from 'framer-motion';
import { projects } from "../data/portfolio";
import { ProjectDetailDrawer } from "../components/ProjectDetailDrawer"; // Ensure this path is correct

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const handleOpenDrawer = (project) => {
    setSelectedProject(project);
    setIsDrawerOpen(true);
  };

  const containerVars = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.2 } }
  };

  const itemVars = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  return (
    <div className="relative min-h-screen bg-[#050510] text-[#f0f0ff] font-jakarta overflow-hidden">
      
      {/* ── BACKGROUND DEPTH ── */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-[-10%] right-[-10%] w-[600px] h-[600px] bg-pink-500/5 blur-[150px] rounded-full" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-blue-500/5 blur-[150px] rounded-full" />
        <div className="absolute inset-0 opacity-[0.02] bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:40px_40px]" />
      </div>

      <motion.main 
        variants={containerVars}
        initial="hidden"
        animate="visible"
        className="relative z-10 pt-32 pb-20 px-8 md:px-20 max-w-7xl mx-auto"
      >
        {/* SECTION HEADER */}
        <motion.div variants={itemVars} className="mb-20 text-center md:text-left">
          <div className="flex items-center justify-center md:justify-start gap-4 mb-4">
            <div className="h-[1px] w-12 bg-pink-500" />
            <span className="text-[10px] font-fira tracking-[0.4em] text-pink-500 uppercase font-bold">Selected Works</span>
          </div>
          <h2 className="font-syne text-5xl md:text-8xl font-extrabold tracking-tighter">
            Projects <span className="bg-gradient-to-r from-[#f472b6] to-[#a855f7] bg-clip-text text-transparent">I'm Proud Of !</span>
          </h2>
        </motion.div>

        {/* PROJECTS GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {projects.map((project) => (
            <motion.div 
              key={project.id} 
              variants={itemVars}
              whileHover={{ y: -10 }}
              className="group relative flex flex-col bg-white/[0.03] border border-white/10 rounded-[2.5rem] overflow-hidden backdrop-blur-xl transition-all duration-500 hover:border-pink-500/30 hover:bg-white/[0.05]"
            >
              {/* Top Banner with Gradient Accent */}
              <div 
                className="h-2 w-full opacity-60 group-hover:opacity-100 transition-opacity"
                style={{ background: project.gradient || 'linear-gradient(90deg, #f472b6, #a855f7)' }}
              />

              <div className="p-8 md:p-10 flex flex-col h-full">
                {/* Header Info */}
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <h3 className="font-syne text-3xl font-bold text-white mb-2">{project.name}</h3>
                    <p className="text-sm font-fira text-pink-500/80 font-medium tracking-tight italic">
                      // {project.tagline}
                    </p>
                  </div>
                  <div className="text-2xl opacity-40 group-hover:opacity-100 transition-opacity">
                    🚀
                  </div>
                </div>

                {/* Key Features List */}
                <div className="mb-8 flex-grow">
                  <h4 className="text-[10px] uppercase tracking-[0.2em] font-black text-gray-500 mb-4">Core Systems</h4>
                  <ul className="space-y-3">
                    {project.keyFeatures.map((feature, i) => (
                      <li key={i} className="flex items-center gap-3 text-sm text-gray-400 group-hover:text-gray-300 transition-colors">
                        <span className="w-1 h-1 rounded-full bg-pink-500 shadow-[0_0_8px_#f472b6]" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tech Stack Footer */}
                <div className="mt-auto">
                  <div className="h-[1px] w-full bg-white/5 mb-6" />
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech, i) => (
                      <span 
                        key={i} 
                        className="px-3 py-1.5 rounded-xl bg-white/5 border border-white/5 text-[10px] font-mono text-blue-400 group-hover:border-blue-400/20 transition-all"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  {/* Action Links */}
                  <div className="mt-8 flex flex-col sm:flex-row gap-4">
                    {/* Primary Demo Button */}
                    <a 
                      href={project.demoLink} 
                      target="_blank" 
                      rel="noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 py-3 bg-white text-black rounded-xl font-bold text-[10px] uppercase tracking-widest hover:bg-pink-500 hover:text-white transition-all shadow-lg"
                    >
                      Live Demo ⚡
                    </a>

                    {/* Secondary Case Study Trigger */}
                    <button 
                      onClick={() => handleOpenDrawer(project)}
                      className="flex-1 py-3 border border-white/10 rounded-xl text-[10px] font-bold uppercase tracking-widest hover:bg-white/5 transition-all text-gray-400 hover:text-white"
                    >
                      Case Study ↗
                    </button>
                  </div>
                </div>
              </div>

              {/* Decorative Corner Glow */}
              <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-pink-500/10 blur-[60px] rounded-full group-hover:bg-pink-500/20 transition-all" />
            </motion.div>
          ))}
        </div>
      </motion.main>

      {/* The Detail Drawer Instance */}
      <ProjectDetailDrawer 
        project={selectedProject} 
        isOpen={isDrawerOpen} 
        onClose={() => setIsDrawerOpen(false)} 
      />
    </div>
  );
}