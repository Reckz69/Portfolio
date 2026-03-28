import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { Logo } from "./Logo"; // Ensure path is correct

export default function Navbar() {
  const location = useLocation();

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Skills", path: "/skills" },
    { name: "Projects", path: "/projects" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 h-[68px] z-[1000] flex items-center justify-between px-8 md:px-14 bg-[#050510]/75 backdrop-blur-[24px] border-b border-white/10"
    >
      {/* 3D LOGO ENTRY */}
      <Link 
        to="/" 
        className="flex items-center gap-3 transition-transform hover:scale-105 active:scale-95"
      >
        <Logo />
        <span className="hidden lg:block font-syne text-[0.9rem] font-bold tracking-widest text-white/80">
          NARENDRA
        </span>
      </Link>

      {/* NAVIGATION LINKS */}
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
              {/* Animated Underline */}
              <motion.div 
                className="absolute -bottom-1 left-0 h-[2px] bg-gradient-to-r from-[#f472b6] to-[#a855f7] rounded-full"
                initial={{ width: 0 }}
                animate={{ width: isActive ? "100%" : 0 }}
                whileHover={{ width: "100%" }}
                transition={{ duration: 0.3 }}
              />
            </li>
          );
        })}
      </ul>

      {/* GITHUB BUTTON */}
      <div className="flex items-center gap-4">
        <a 
          href="https://github.com/Reckz69" 
          target="_blank" 
          rel="noreferrer"
          className="hidden sm:flex items-center gap-2 px-5 py-2 rounded-[10px] bg-white/5 border border-white/10 text-[0.78rem] font-semibold text-white transition-all hover:border-[#f472b6] hover:bg-pink-500/10"
        >
          GitHub <span className="text-[10px]">↗</span>
        </a>
      </div>
    </motion.nav>
  );
}