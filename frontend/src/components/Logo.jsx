import React from 'react';
import { motion } from 'framer-motion';

export const Logo = () => {
  return (
    <div className="relative flex items-center justify-center w-12 h-12 group">
      {/* 3D Atmosphere / Outer Glow */}
      <div className="absolute inset-0 bg-pink-500/20 blur-xl rounded-full group-hover:bg-violet-500/20 transition-colors duration-700" />
      
      {/* Rotating Technical Ring */}
      <motion.div 
        animate={{ rotate: 360 }}
        transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
        className="absolute inset-0 rounded-full border border-dashed border-white/10 p-1"
      />

      {/* The 3D Glass Sphere */}
      <div className="relative w-10 h-10 rounded-full bg-gradient-to-br from-white/10 to-black/60 backdrop-blur-md border border-white/20 shadow-[inset_0_2px_4px_rgba(255,255,255,0.3),0_10px_20px_rgba(0,0,0,0.5)] flex items-center justify-center overflow-hidden">
        
        {/* Sphere Shine (Light Source) */}
        <div className="absolute top-1 left-1.5 w-1/2 h-1/2 bg-gradient-to-br from-white/20 to-transparent rounded-full" />
        
        {/* Initials */}
        <span className="relative z-10 font-syne font-black text-xs tracking-tighter bg-gradient-to-tr from-[#f472b6] via-white to-[#6366f1] bg-clip-text text-transparent">
          NM
        </span>
        
        {/* Inner Depth Shadow */}
        <div className="absolute inset-0 shadow-[inset_-2px_-4px_8px_rgba(0,0,0,0.7)] rounded-full" />
      </div>
    </div>
  );
};