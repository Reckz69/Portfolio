import React from 'react';
import { motion } from 'framer-motion';
import { profile } from "../data/Portfolio.js";
import { useClock } from "../hooks/useClock.js";
import { WidgetPanel } from "../components/WidgetPanel.jsx";
import { EventReminder } from "../components/eventReminder.jsx";
import { SkillOrb } from '../components/SkillOrb.jsx';

export default function Home() {
  const clock = useClock();

  // ── AUTOMATED REGEX HIGHLIGHTER ──
  const highlightSummary = (text) => {
    const keywords = [
      "Full-Stack Developer", 
      "MERN stack", 
      "RESTful API design", 
      "secure authentication", 
      "scalable backend architecture",
      "video streaming platform"
    ];
    
    // Create regex from keywords
    const regex = new RegExp(`(${keywords.join('|')})`, 'gi');
    const parts = text.split(regex);

    return parts.map((part, i) => 
      keywords.some(kw => kw.toLowerCase() === part.toLowerCase()) 
        ? <span key={i} className="brush-stroke">{part}</span> 
        : part
    );
  };

  const containerVars = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.2 } }
  };

  const itemVars = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  return (
    <div className="relative min-h-screen bg-[#050510] text-[#f0f0ff] font-jakarta overflow-hidden">
      
      {/* ── 1. BACKGROUND DEPTH ── */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-pink-500/10 blur-[120px] rounded-full animate-pulse" />
        <div className="absolute bottom-[-10%] left-[-5%] w-[500px] h-[500px] bg-blue-500/10 blur-[120px] rounded-full" />
        <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px]"></div>
      </div>

      {/* ── 2. SCROLLING MARQUEE ── */}


      <motion.main 
        variants={containerVars}
        initial="hidden"
        animate="visible"
        className="relative z-10 pt-48 pb-20 px-8 md:px-20 max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 items-start"
      >
        <div className="flex-1">
          <motion.div variants={itemVars} className="flex items-center gap-3 mb-6">
            <span className="w-2 h-2 rounded-full bg-[#34d399] shadow-[0_0_10px_#34d399] animate-pulse" />
            <span className="text-[10px] font-fira tracking-[0.3em] text-pink-500 uppercase">
              // Status: Building Future-Ready Systems
            </span>
          </motion.div>

          <motion.h1 variants={itemVars} className="font-syne text-7xl md:text-9xl font-extrabold tracking-tighter leading-[0.9]">
            <span className="bg-gradient-to-r from-[#f472b6] via-[#a855f7] to-[#6366f1] bg-clip-text text-transparent">
              {profile.shortName}
            </span>
            <br />
            <span className="text-white">Meshram.</span>
            <br />
            <span className="italic text-transparent border-text opacity-20 hover:opacity-100 transition-opacity duration-700" 
                  style={{ WebkitTextStroke: '1px rgba(255,255,255,0.2)' }}>
              Developer.
            </span>
          </motion.h1>

          {/* ── HIGHLIGHTED SUMMARY ── */}
          <motion.p variants={itemVars} className="mt-8 text-gray-400 max-w-xl text-lg leading-relaxed border-l-2 border-white/5 pl-8 italic">
            {highlightSummary(profile.summary)}
          </motion.p>

          <motion.div variants={itemVars} className="mt-12 flex flex-wrap gap-4">
            <button className="bg-gradient-to-r from-[#f472b6] to-[#a855f7] px-10 py-4 rounded-xl font-bold text-sm hover:scale-105 transition-transform shadow-lg shadow-pink-500/20">
              Explore Projects ↗
            </button>
            <button className="bg-white/5 border border-white/10 backdrop-blur-md px-10 py-4 rounded-xl font-bold text-sm hover:bg-white/10 transition-all">
              Connect
            </button>
          </motion.div>

          <motion.div variants={itemVars} className="mt-16">
            <EventReminder />
          </motion.div>
        </div>

        <div className="w-full lg:w-1/3 flex flex-col gap-8">
          <motion.div variants={itemVars} className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-pink-500 to-violet-500 rounded-3xl blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
            <div className="relative bg-[#0a0a1c] border border-white/10 rounded-3xl p-8 flex flex-col items-center justify-center gap-4 h-80 overflow-hidden">
               <motion.span 
                 animate={{ y: [0, -10, 0] }}
                 transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                 className="text-6xl"
               >👨‍💻</motion.span>
               <span className="font-fira text-[10px] text-gray-500 uppercase tracking-[0.2em]">// Root: Pune_India</span>
               <div className="absolute top-4 left-4 w-4 h-4 border-t-2 border-l-2 border-pink-500/40"></div>
               <div className="absolute bottom-4 right-4 w-4 h-4 border-b-2 border-r-2 border-pink-500/40"></div>
            </div>
          </motion.div>

          <motion.div variants={itemVars} className="bg-white/5 border border-white/5 p-6 rounded-3xl backdrop-blur-sm">
            <div className="flex justify-between items-center mb-4">
              <span className="text-[9px] font-fira text-blue-400 uppercase tracking-widest">Featured Project</span>
              <span className="text-[10px] text-gray-500">ProjectX</span>
            </div>
            <h4 className="text-sm font-bold mb-2">Video Streaming Platform</h4>
            <p className="text-[11px] text-gray-400 leading-relaxed mb-4">
              Building role-based JWT auth & optimized media pipelines.
            </p>
            <div className="flex gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-pink-500"></span>
              <span className="w-1.5 h-1.5 rounded-full bg-gray-700"></span>
              <span className="w-1.5 h-1.5 rounded-full bg-gray-700"></span>
            </div>
          </motion.div>

          <motion.div variants={itemVars} className="grid grid-cols-2 gap-4">
            <div className="bg-white/5 border border-white/5 p-6 rounded-2xl text-center hover:bg-white/10 transition-colors">
              <span className="block text-2xl font-bold text-pink-500">{profile.cgpa.split(' ')[0]}</span>
              <span className="text-[10px] text-gray-500 uppercase font-bold tracking-widest">Academic CGPA</span>
            </div>
            <div className="bg-white/5 border border-white/5 p-6 rounded-2xl text-center hover:bg-white/10 transition-colors">
              <span className="block text-2xl font-bold text-blue-400">2027</span>
              <span className="text-[10px] text-gray-500 uppercase font-bold tracking-widest">Graduation</span>
            </div>
          </motion.div>

          <motion.div variants={itemVars}>
            <SkillOrb />
          </motion.div>
        </div>
      </motion.main>
      <WidgetPanel />
    </div>
  );
}