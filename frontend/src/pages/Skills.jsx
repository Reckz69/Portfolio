import React from 'react';
import { motion } from 'framer-motion';
import { skills } from "../data/Portfolio.js";
import { WidgetPanel } from "../components/WidgetPanel.jsx";

export default function Skills() {
  const containerVars = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.2 } }
  };

  const itemVars = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  // ── UPDATED REGEX HIGHLIGHTER WITH NULL-CHECK ──
const highlightText = (text) => {
    // 1. Safety Check: If text is undefined, null, or not a string, return empty
    if (!text || typeof text !== 'string') return "";
  
    const keywords = [
      "architecture", 
      "logic", 
      "deployment", 
      "C++", 
      "MERN stack",
      "Machine Learning"
    ];
    
    // 2. Escape special characters in keywords (like '++' in C++)
    const escapedKeywords = keywords.map(kw => kw.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'));
    
    const regex = new RegExp(`(${escapedKeywords.join('|')})`, 'gi');
    const parts = text.split(regex);
  
    return parts.map((part, i) => 
      keywords.some(kw => kw.toLowerCase() === part.toLowerCase()) 
        ? <span key={i} className="brush-stroke text-white font-bold">{part}</span> 
        : part
    );
  };

  return (
    <div className="relative min-h-screen bg-[#050510] text-[#f0f0ff] font-jakarta overflow-hidden">
      
      {/* ── BACKGROUND DEPTH ── */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-pink-500/5 blur-[120px] rounded-full animate-pulse" />
        <div className="absolute bottom-[-10%] left-[-5%] w-[500px] h-[500px] bg-blue-500/5 blur-[120px] rounded-full" />
        <div className="absolute inset-0 opacity-[0.02] bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:32px_32px]" />
      </div>

      <motion.main 
        variants={containerVars}
        initial="hidden"
        animate="visible"
        className="relative z-10 pt-32 pb-20 px-8 md:px-20 max-w-7xl mx-auto"
      >
        {/* HEADER SECTION */}
        <motion.div variants={itemVars} className="mb-20">
          <div className="flex items-center gap-4 mb-4">
            <div className="h-[1px] w-20 bg-gradient-to-r from-pink-500 to-transparent" />
            <span className="text-[11px] font-fira tracking-[0.4em] text-pink-500 uppercase font-bold">
              Technical Inventory v2.0
            </span>
          </div>
          <h2 className="font-syne text-6xl md:text-8xl font-extrabold tracking-tighter leading-none">
            Skills & <span className="bg-gradient-to-r from-[#f472b6] via-[#a855f7] to-[#6366f1] bg-clip-text text-transparent">Expertise.</span>
          </h2>
          <p className="mt-6 text-gray-500 max-w-2xl font-light text-lg">
            {highlightText("A comprehensive breakdown of my digital toolkit, categorized by architecture, logic, and deployment efficiency.")}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          {/* ── 1. LEETCODE CORE CARD (High Density) ── */}
          <motion.div 
            variants={itemVars} 
            className="p-8 rounded-[2rem] bg-white/[0.03] border border-white/10 backdrop-blur-xl flex flex-col justify-between group hover:border-pink-500/30 transition-all duration-500 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-30 transition-opacity">
               <span className="text-8xl font-syne font-black tracking-tighter">77</span>
            </div>
            
            <div className="relative z-10">
              <div className="flex justify-between items-center mb-10">
                <div className="p-3 bg-yellow-500/10 rounded-2xl border border-yellow-500/20 text-yellow-500 text-2xl">🏆</div>
                <div className="text-right">
                  <p className="text-[10px] font-fira text-gray-500 uppercase tracking-widest">Global Rank</p>
                  <p className="text-sm font-bold text-white">1.8M+</p>
                </div>
              </div>
              <h3 className="font-syne text-2xl font-bold mb-3 text-white">Algorithmic Logic</h3>
              <p className="text-xs text-gray-400 leading-relaxed mb-8 border-l border-pink-500/30 pl-4">
                Proficient in **C++** with a focus on O(n) complexity and memory-efficient data structures.
              </p>
            </div>
            
            <div className="flex items-center justify-between mt-4">
               <div className="flex -space-x-2">
                  {[1,2,3].map(i => <div key={i} className="w-6 h-6 rounded-full bg-white/5 border border-white/10" />)}
               </div>
               <span className="text-[10px] font-bold text-pink-500 uppercase tracking-widest cursor-pointer hover:underline">Details ↗</span>
            </div>
          </motion.div>

          {/* ── 2. DYNAMIC CATEGORY BLOCKS ── */}
          {skills.map((category, i) => (
            <motion.div 
              key={i} 
              variants={itemVars} 
              className="p-8 rounded-[2rem] bg-white/[0.02] border border-white/5 backdrop-blur-md hover:bg-white/[0.05] transition-all group relative"
            >
              {/* Corner Accent */}
              <div className="absolute top-4 right-4 w-2 h-2 rounded-full bg-white/5 group-hover:bg-pink-500 transition-colors" />
              
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 flex items-center justify-center rounded-2xl bg-white/5 border border-white/10 text-2xl group-hover:scale-110 transition-transform">
                  {category.icon}
                </div>
                <div>
                  <h3 className="font-syne font-bold text-lg leading-none">{category.category}</h3>
                  <span className="text-[9px] text-gray-600 uppercase font-bold tracking-widest">Production Ready</span>
                </div>
              </div>

              <div className="flex flex-wrap gap-3">
                {category.items.map((item, idx) => (
                  <div 
                    key={idx} 
                    className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 border border-white/5 text-[11px] font-medium text-gray-400 group-hover:text-white group-hover:border-white/10 transition-all"
                  >
                    <span className="w-1 h-1 rounded-full bg-pink-500/40" />
                    {item}
                  </div>
                ))}
              </div>
            </motion.div>
          ))}

          {/* ── 3. FULL WIDTH FLUENCY ANALYTICS ── */}
          <motion.div 
            variants={itemVars} 
            className="lg:col-span-3 mt-12 p-12 rounded-[3rem] bg-gradient-to-br from-white/[0.03] to-transparent border border-white/10 backdrop-blur-2xl relative"
          >
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-14 gap-6">
              <div>
                <h3 className="font-syne text-3xl font-bold text-white mb-2">Fluency Analytics</h3>
                <p className="text-sm text-gray-500 font-fira tracking-tight">// Measured by project complexity and commit frequency</p>
              </div>
              <div className="flex gap-4">
                <div className="px-4 py-2 bg-pink-500/10 border border-pink-500/20 rounded-xl text-[10px] font-bold text-pink-400">CORE FOCUS</div>
                <div className="px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-xl text-[10px] font-bold text-blue-400">SCALABILITY</div>
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-x-20 gap-y-12">
              {[
                { name: "Frontend Architecture", level: 88, desc: "React, Tailwind, Framer Motion", color: "bg-pink-500" },
                { name: "Backend Engineering", level: 82, desc: "Node, Express, JWT, REST", color: "bg-violet-500" },
                { name: "Database & Cloud", level: 78, desc: "MongoDB, Firebase, Mongoose", color: "bg-blue-500" },
                { name: "AI & ML Processing", level: 65, desc: "Python, Data Science, ANNs", color: "bg-emerald-500" }
              ].map((chart, i) => (
                <div key={i} className="space-y-5">
                  <div className="flex justify-between items-end">
                    <div>
                      <span className="text-xs font-black text-white uppercase tracking-widest block mb-1">{chart.name}</span>
                      <span className="text-[10px] text-gray-600 font-fira">{chart.desc}</span>
                    </div>
                    <span className="text-lg font-black text-white/20 italic">{chart.level}%</span>
                  </div>
                  <div className="h-[2px] w-full bg-white/5 rounded-full relative overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      whileInView={{ width: `${chart.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.5, ease: "circOut" }}
                      className={`h-full ${chart.color} shadow-[0_0_20px_rgba(255,255,255,0.1)]`}
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

        </div>
      </motion.main>
      <WidgetPanel />
    </div>
  );
}