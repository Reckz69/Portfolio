import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Logo } from "./Logo"; 

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Skills", path: "/skills" },
    { name: "Projects", path: "/projects" },
    { name: "Contact", path: "/contact" },
  ];

  // ── 1. CREATIVE BENTO ANIMATION ──
  const bentoVars = {
    initial: { 
      opacity: 0, 
      scale: 0.7, 
      backdropFilter: "blur(0px)" 
    },
    animate: { 
      opacity: 1, 
      scale: 1, 
      backdropFilter: "blur(30px)", // Intense glass blur
      transition: { 
        duration: 0.4, 
        ease: [0.34, 1.56, 0.64, 1] // "Pop" elastic ease
      }
    },
    exit: { 
      opacity: 0, 
      scale: 0.7, 
      backdropFilter: "blur(0px)",
      transition: { 
        duration: 0.3, 
        ease: [0.36, 0, 0.66, -0.56] // Reverse "pop"
      }
    }
  };

  const linkVars = {
    initial: { x: 20, opacity: 0 },
    animate: { x: 0, opacity: 1 },
  };

  return (
    <>
      <motion.nav 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="fixed top-0 left-0 right-0 h-[68px] z-[1000] flex items-center justify-between px-8 md:px-14 bg-[#050510]/75 backdrop-blur-[24px] border-b border-white/10"
      >
        <Link to="/" className="flex items-center gap-3 z-[1001]">
          <Logo />
          <span className="hidden lg:block font-syne text-[0.9rem] font-bold tracking-widest text-white/80">
            NARENDRA
          </span>
        </Link>

        {/* DESKTOP LINKS */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.path;
            return (
              <li key={link.name} className="relative group">
                <Link
                  to={link.path}
                  className={`text-[0.82rem] font-medium tracking-[0.06em] transition-colors duration-300 ${
                    isActive ? "text-white" : "text-[#8888aa] group-hover:text-white"
                  }`}
                >
                  {link.name}
                </Link>
                <motion.div 
                  className="absolute -bottom-1 left-0 h-[2px] bg-gradient-to-r from-[#f472b6] to-[#a855f7] rounded-full"
                  initial={{ width: 0 }}
                  animate={{ width: isActive ? "100%" : 0 }}
                />
              </li>
            );
          })}
        </ul>

        {/* ACTIONS & MOBILE TOGGLE */}
        <div className="flex items-center gap-4">
          <a 
            href="https://github.com/Reckz69" 
            target="_blank" 
            className="hidden sm:flex items-center gap-2 px-5 py-2 rounded-[10px] bg-white/5 border border-white/10 text-[0.78rem] font-semibold text-white transition-all hover:border-[#f472b6]"
          >
            GitHub <span className="text-[10px]">↗</span>
          </a>

          {/* HAMBURGER BUTTON (Increased Z-Index) */}
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="flex flex-col gap-[5px] md:hidden z-[1100] p-2"
          >
            <span className={`w-6 h-[2px] bg-white transition-all ${isOpen ? "rotate-45 translate-y-[7px] bg-pink-500" : ""}`} />
            <span className={`w-6 h-[2px] bg-white transition-all ${isOpen ? "opacity-0" : ""}`} />
            <span className={`w-6 h-[2px] bg-white transition-all ${isOpen ? "-rotate-45 -translate-y-[7px] bg-pink-500" : ""}`} />
          </button>
        </div>
      </motion.nav>

      {/* ── 2. NEW CREATIVE "BENTO" DROPDOWN ── */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            variants={bentoVars}
            initial="initial"
            animate="animate"
            exit="exit"
            // Specific Position: Top-Right, floating below Navbar
            className="fixed top-20 right-6 z-[1050] w-64 p-6 bg-[#0a0a1c]/90 rounded-3xl border border-white/10 origin-top-right shadow-2xl shadow-pink-500/5"
          >
            <div className="flex flex-col gap-5">
              
              {/* Subtle category label */}
              <span className="text-[9px] font-fira text-gray-600 uppercase tracking-widest font-bold mb-2">
                 / Menu System.
              </span>

              {navLinks.map((link, index) => {
                const isActive = location.pathname === link.path;
                return (
                  <motion.div
                    key={link.name}
                    variants={linkVars}
                    transition={{ delay: 0.05 * index, ease: "circOut" }}
                  >
                    <Link
                      to={link.path}
                      onClick={() => setIsOpen(false)}
                      className={`font-syne text-xl font-bold uppercase tracking-tighter flex items-center justify-between transition-colors duration-500 ${
                        isActive ? "text-white" : "text-white/30 hover:text-white"
                      }`}
                    >
                      <span>{link.name}</span>
                      
                      {/* Active indicator (Pink/Violet Gradient) */}
                      {isActive && (
                        <span className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-[#f472b6] to-[#a855f7] shadow-[0_0_8px_#f472b6]" />
                      )}
                    </Link>
                  </motion.div>
                );
              })}
              
              {/* Creative Socials Footer inside the bento */}
              <div className="mt-4 border-t border-white/5 pt-5 flex justify-between items-center">
                 <span className="text-[9px] font-mono text-gray-700">Root:Pune.India</span>
                 <div className="flex gap-3">
                    <a href="#" className="w-3 h-3 rounded-full bg-white/5 hover:bg-pink-500/20" />
                    <a href="#" className="w-3 h-3 rounded-full bg-white/5 hover:bg-violet-500/20" />
                 </div>
              </div>
            </div>

            {/* Subtle Gradient Shadow (Matches Hyper-Glass aesthetics) */}
            <div className="absolute inset-0 rounded-3xl z-[-1] bg-gradient-to-br from-pink-500/10 to-transparent blur-[30px]" />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}