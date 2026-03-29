import React, { useState } from "react"; // Added useState
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion"; // Added AnimatePresence
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

  const menuVars = {
    initial: { scaleY: 0 },
    animate: { scaleY: 1, transition: { duration: 0.5, ease: [0.12, 0, 0.39, 0] } },
    exit: { scaleY: 0, transition: { delay: 0.5, duration: 0.5, ease: [0.22, 1, 0.36, 1] } }
  };

  const mobileLinkVars = {
    initial: { y: "30vh", transition: { duration: 0.5, ease: [0.37, 0, 0.63, 1] } },
    open: { y: 0, transition: { duration: 0.7, ease: [0, 0.55, 0.45, 1] } }
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

          {/* HAMBURGER BUTTON */}
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="flex flex-col gap-[5px] md:hidden z-[1001] p-2"
          >
            <span className={`w-6 h-[2px] bg-white transition-all ${isOpen ? "rotate-45 translate-y-[7px]" : ""}`} />
            <span className={`w-6 h-[2px] bg-white transition-all ${isOpen ? "opacity-0" : ""}`} />
            <span className={`w-6 h-[2px] bg-white transition-all ${isOpen ? "-rotate-45 -translate-y-[7px]" : ""}`} />
          </button>
        </div>
      </motion.nav>

      {/* MOBILE DROPDOWN OVERLAY */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            variants={menuVars}
            initial="initial"
            animate="animate"
            exit="exit"
            className="fixed inset-0 z-[999] bg-[#050510] origin-top flex flex-col p-10 pt-32"
          >
            <div className="flex flex-col gap-8 h-full">
              {navLinks.map((link, index) => (
                <div key={link.name} className="overflow-hidden">
                  <motion.div
                    variants={mobileLinkVars}
                    initial="initial"
                    animate="open"
                    transition={{ delay: 0.1 * index }} // Staggered entry
                  >
                    <Link
                      to={link.path}
                      onClick={() => setIsOpen(false)}
                      className="text-5xl font-syne font-black text-white/20 hover:text-white transition-colors duration-500 uppercase tracking-tighter"
                    >
                      {link.name}
                    </Link>
                  </motion.div>
                </div>
              ))}
              
              {/* Mobile Socials Footer */}
              <div className="mt-auto border-t border-white/5 pt-10 flex justify-between items-center">
                 <span className="text-[10px] font-fira text-gray-500 tracking-widest uppercase">// Pune, India</span>
                 <div className="flex gap-4">
                    <a href="#" className="text-pink-500 font-bold text-xs uppercase tracking-widest">GH</a>
                    <a href="#" className="text-blue-500 font-bold text-xs uppercase tracking-widest">LI</a>
                 </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}