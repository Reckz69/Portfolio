import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const skills = [
  { name: "React.js", icon: "⚛️", color: "from-cyan-400 to-blue-500" },
  { name: "Node.js", icon: "🟢", color: "from-green-400 to-emerald-600" },
  { name: "MongoDB", icon: "🍃", color: "from-green-500 to-green-700" },
  { name: "Python", icon: "🐍", color: "from-blue-500 to-yellow-500" },
  { name: "Tailwind", icon: "🌊", color: "from-cyan-500 to-blue-400" },
  { name: "Machine Learning", icon: "🧠", color: "from-purple-500 to-pink-500" }
];

export const SkillOrb = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % skills.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative group p-6 bg-white/5 border border-white/5 rounded-3xl backdrop-blur-md overflow-hidden h-32 flex items-center justify-center">
      {/* Background Decorative Glow */}
      <div className={`absolute inset-0 opacity-10 blur-2xl transition-all duration-1000 bg-gradient-to-r ${skills[index].color}`} />
      
      <AnimatePresence mode="wait">
        <motion.div
          key={skills[index].name}
          initial={{ y: 20, opacity: 0, scale: 0.8 }}
          animate={{ y: 0, opacity: 1, scale: 1 }}
          exit={{ y: -20, opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.5, ease: "circOut" }}
          className="relative z-10 flex flex-col items-center gap-2"
        >
          <div className="text-4xl filter drop-shadow-[0_0_8px_rgba(255,255,255,0.3)]">
            {skills[index].icon}
          </div>
          <span className="font-fira text-[10px] uppercase tracking-[0.3em] font-bold text-white/80">
            {skills[index].name}
          </span>
        </motion.div>
      </AnimatePresence>

      {/* 3D Glass Highlight */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/10 to-transparent pointer-events-none" />
    </div>
  );
};