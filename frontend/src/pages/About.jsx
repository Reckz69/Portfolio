import React from 'react';
import { motion } from 'framer-motion';
import { profile, education } from "../data/Portfolio";

export default function About() {
  // ── AUTOMATED BRUSH STROKE HIGHLIGHTER ──
  const highlightSummary = (text) => {
    const keywords = [
      "Full-Stack Developer", 
      "MERN stack", 
      "Artificial Intelligence & Data Science", 
      "Machine Learning", 
      "JWT-authenticated backends"
    ];
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
    visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.2 } }
  };

  const itemVars = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <div className="relative min-h-screen bg-[#050510] text-[#f0f0ff] font-jakarta overflow-hidden">
      
      {/* ── BACKGROUND ORBS ── */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-[-10%] left-[-5%] w-[500px] h-[500px] bg-pink-500/5 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-10%] right-[-5%] w-[500px] h-[500px] bg-blue-500/5 blur-[120px] rounded-full" />
      </div>

      <motion.main 
        variants={containerVars}
        initial="hidden"
        animate="visible"
        className="relative z-10 pt-32 pb-20 px-8 md:px-20 max-w-7xl mx-auto"
      >
        {/* SECTION HEADER */}
        <motion.div variants={itemVars} className="mb-16">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-[1px] w-12 bg-pink-500" />
            <span className="text-[10px] font-fira tracking-[0.3em] text-pink-500 uppercase font-bold">Biography</span>
          </div>
          <h2 className="font-syne text-5xl md:text-7xl font-extrabold tracking-tighter">
            About <span className="bg-gradient-to-r from-[#f472b6] to-[#a855f7] bg-clip-text text-transparent">{profile.shortName}</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-8">
          
          {/* ── LEFT: BIO & PERSONAL DETAILS ── */}
          <motion.div variants={itemVars} className="lg:col-span-8 space-y-8">
            <div className="bg-white/5 border border-white/10 p-8 md:p-10 rounded-3xl backdrop-blur-md relative overflow-hidden">
              <p className="text-lg md:text-xl leading-relaxed text-gray-300 italic">
                Hi! I'm <strong className="text-white">Narendra Santosh Meshram</strong>, a passionate {highlightSummary("Full-Stack Developer")} based in <strong className="text-white">Pune</strong>.
              </p>
              <div className="bio-highlight my-6 p-4 bg-gradient-to-r from-pink-500/10 to-transparent border-l-2 border-pink-500 italic text-gray-400">
                "I aim to evolve into a well-rounded engineer with a strong foundation in both full-stack development and Machine Learning."
              </div>
              <p className="text-gray-400 leading-relaxed mb-4">
                Currently in my <strong className="text-white">2nd year of B.E. in {highlightSummary("Artificial Intelligence & Data Science")}</strong> at Dr. D.Y. Patil Institute of Technology.
              </p>
              <span className="absolute top-4 right-8 text-8xl font-syne text-white/5 pointer-events-none">"</span>
            </div>

            {/* ── PERSONAL DETAILS BENTO GRID ── */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
               {[
                 { label: "Full Name", val: "Narendra Santosh Meshram" },
                 { label: "Date of Birth", val: "23 February, 2003" },
                 { label: "Current Location", val: "Pimpri, Pune — 411018" },
                 { label: "Permanent Address", val: "Jatharpeth, Akola — 444101" },
                 { label: "Phone", val: "+91 7058805097" },
                 { label: "Email", val: "narendrameshram976@gmail.com" },
                 { label: "Languages", val: "English · Marathi · Hindi" },
                 { label: "Gender", val: "Male" }
               ].map((detail, i) => (
                 <div key={i} className="bg-white/5 border border-white/5 p-5 rounded-2xl hover:bg-white/10 transition-all group">
                   <span className="block text-[9px] text-gray-500 uppercase tracking-widest font-bold mb-1 group-hover:text-pink-400 transition-colors">
                     {detail.label}
                   </span>
                   <span className="text-[13px] font-medium text-gray-200">
                     {detail.val}
                   </span>
                 </div>
               ))}
            </div>
          </motion.div>

          {/* ── RIGHT: EDUCATION TIMELINE ── */}
          <motion.div variants={itemVars} className="lg:col-span-4 bg-white/5 border border-white/10 p-8 rounded-3xl backdrop-blur-md">
            <h3 className="font-syne text-xl font-bold mb-8 flex items-center gap-3">
              <span className="text-blue-400 text-2xl">🎓</span> Education
            </h3>

            <div className="space-y-8 relative">
              <div className="absolute left-[11px] top-2 bottom-2 w-[1px] bg-white/10" />

              {education.map((edu, i) => (
                <div key={i} className="relative pl-8 group">
                  <div className="absolute left-0 top-1.5 w-[23px] h-[23px] rounded-full bg-[#050510] border border-white/20 flex items-center justify-center group-hover:border-pink-500 transition-all shadow-lg group-hover:shadow-pink-500/20">
                    <div className="w-1.5 h-1.5 rounded-full bg-gray-500 group-hover:bg-pink-500" />
                  </div>
                  
                  <span className="text-[10px] font-fira text-pink-500 font-bold mb-1 block uppercase tracking-tighter">
                    {edu.period}
                  </span>
                  <h4 className="font-bold text-sm leading-tight mb-1 group-hover:text-white transition-colors">
                    {edu.institution}
                  </h4>
                  <p className="text-xs text-gray-400 mb-2">{edu.degree}</p>
                  <span className="inline-block px-2 py-1 rounded bg-white/5 border border-white/5 text-[10px] font-mono text-blue-400">
                    {edu.score}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

        </div>
      </motion.main>
    </div>
  );
}