import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export const ProjectDetailDrawer = ({ project, isOpen, onClose }) => {
  if (!project) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[2000] cursor-pointer"
          />

          {/* Drawer Panel */}
          <motion.div 
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed top-0 right-0 h-full w-full md:w-[600px] bg-[#08081a] border-l border-white/10 z-[2001] shadow-2xl p-10 overflow-y-auto"
          >
            {/* Close Button */}
            <button onClick={onClose} className="absolute top-8 right-8 text-gray-500 hover:text-white transition-colors">
              ✕ Close
            </button>

            {/* Header Content */}
            <div className="mb-12">
              <span className="text-[10px] font-fira text-pink-500 uppercase tracking-widest font-bold mb-4 block">
                Technical Case Study
              </span>
              <h2 className="font-syne text-4xl font-extrabold text-white mb-4">{project.name}</h2>
              <div className="flex gap-4">
                <a href={project.github} className="text-xs text-gray-400 hover:text-white transition-colors">GitHub ↗</a>
                <a href={project.demo} className="text-xs text-gray-400 hover:text-white transition-colors">Live Demo ↗</a>
              </div>
            </div>

            {/* Deep Dive Sections */}
            <div className="space-y-12">
              <section>
                <h4 className="text-[10px] font-fira text-gray-600 uppercase tracking-widest mb-4">The Challenge</h4>
                <p className="text-sm text-gray-300 leading-relaxed font-light">{project.challenge}</p>
              </section>

              <section>
                <h4 className="text-[10px] font-fira text-gray-600 uppercase tracking-widest mb-4">Architecture & Logic</h4>
                <div className="bg-white/5 border border-white/5 p-6 rounded-2xl italic text-[13px] text-gray-400">
                  {project.architectureDescription}
                </div>
              </section>

              <section>
                <h4 className="text-[10px] font-fira text-gray-600 uppercase tracking-widest mb-4">Key Results</h4>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {project.results?.map((res, i) => (
                    <li key={i} className="p-4 bg-white/5 border border-white/5 rounded-xl text-xs text-blue-400 font-bold">
                      ✦ {res}
                    </li>
                  ))}
                </ul>
              </section>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};