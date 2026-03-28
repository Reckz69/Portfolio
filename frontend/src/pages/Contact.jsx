import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { profile } from "../data/Portfolio";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '', // Added for Backend storage
    role: '',
    message: ''
  });

  const containerVars = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.2 } }
  };

  const itemVars = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <div className="relative min-h-screen bg-[#020205] text-[#f0f0ff] font-jakarta overflow-hidden">
      
      {/* ── BACKGROUND ORBS ── */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-pink-500/5 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-10%] left-[-5%] w-[500px] h-[500px] bg-blue-500/5 blur-[120px] rounded-full" />
      </div>

      <motion.main 
        variants={containerVars}
        initial="hidden"
        animate="visible"
        className="relative z-10 pt-32 pb-20 px-8 md:px-20 max-w-7xl mx-auto"
      >
        {/* HEADER */}
        <motion.div variants={itemVars} className="mb-16">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-[1px] w-12 bg-pink-500" />
            <span className="text-[10px] font-fira tracking-[0.4em] text-pink-500 uppercase font-bold tracking-widest">
              Communication Terminal
            </span>
          </div>
          <h2 className="font-syne text-5xl md:text-7xl font-extrabold tracking-tighter">
            Get in <span className="bg-gradient-to-r from-[#f472b6] to-[#a855f7] bg-clip-text text-transparent">Touch.</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-12">
          
          {/* ── ZONE A: RECRUITER PORTAL (Primary) ── */}
          <motion.div variants={itemVars} className="lg:col-span-8">
            <div className="bg-white/5 border border-white/10 p-8 md:p-12 rounded-[2.5rem] backdrop-blur-xl relative overflow-hidden">
              <div className="flex items-center gap-4 mb-10">
                <div className="p-3 bg-pink-500/10 rounded-2xl text-pink-500 text-xl border border-pink-500/20">💼</div>
                <div>
                  <h3 className="font-syne text-2xl font-bold">Recruiter Portal</h3>
                  <p className="text-xs text-gray-500 font-fira tracking-tight">// Priority Response for Hiring Inquiries</p>
                </div>
              </div>

              <form className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] font-fira text-gray-500 uppercase tracking-widest ml-2">Hiring Manager Name</label>
                  <input type="text" placeholder="John Doe" className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-sm focus:outline-none focus:border-pink-500/50 transition-all" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-fira text-gray-500 uppercase tracking-widest ml-2">Company / Organization</label>
                  <input type="text" placeholder="Google / Microsoft / Startup" className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-sm focus:outline-none focus:border-pink-500/50 transition-all" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-fira text-gray-500 uppercase tracking-widest ml-2">Official Email</label>
                  <input type="email" placeholder="hr@company.com" className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-sm focus:outline-none focus:border-pink-500/50 transition-all" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-fira text-gray-500 uppercase tracking-widest ml-2">Position / Role Type</label>
                  <select className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-sm focus:outline-none focus:border-pink-500/50 transition-all appearance-none text-gray-400">
                    <option>Full-time SDE</option>
                    <option>Summer Internship 2026</option>
                    <option>Contract / Freelance</option>
                  </select>
                </div>
                <div className="md:col-span-2 space-y-2">
                  <label className="text-[10px] font-fira text-gray-500 uppercase tracking-widest ml-2">Inquiry Details</label>
                  <textarea rows="4" placeholder="Briefly describe the opportunity..." className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-sm focus:outline-none focus:border-pink-500/50 transition-all resize-none"></textarea>
                </div>
                <button className="md:col-span-2 py-5 rounded-2xl bg-gradient-to-r from-[#f472b6] via-[#a855f7] to-[#6366f1] font-bold text-xs tracking-[0.2em] uppercase hover:scale-[1.01] active:scale-[0.99] transition-all shadow-xl shadow-pink-500/20">
                  Transmit Application to Narendra ↗
                </button>
              </form>
            </div>
          </motion.div>

          {/* ── ZONE B: GENERAL & SOCIALS ── */}
          <motion.div variants={itemVars} className="lg:col-span-4 space-y-8">
            
            {/* General Inquiry Section */}
            <div className="bg-white/5 border border-white/5 p-8 rounded-[2rem] backdrop-blur-md">
               <h4 className="text-[10px] font-fira text-gray-500 uppercase tracking-[0.3em] mb-4">General / Peer Inquiry</h4>
               <p className="text-xs text-gray-400 leading-relaxed mb-6">
                 For project collaborations, student queries, or just a quick "Hello."
               </p>
               <a href={`mailto:${profile.email}`} className="block w-full py-3 border border-white/10 rounded-xl text-center text-[10px] font-bold uppercase tracking-widest hover:bg-white/5 transition-all">
                 Direct Email ↗
               </a>
            </div>

            {/* Quick Contact Info */}
            <div className="grid gap-4">
              {[
                { label: "Location", val: "Pune, India", icon: "📍" },
                { label: "LinkedIn", val: "narendra-meshram", icon: "🔗" }
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-4 bg-white/5 p-5 rounded-2xl border border-white/5">
                   <span className="text-xl">{item.icon}</span>
                   <div>
                      <p className="text-[8px] font-fira text-gray-600 uppercase tracking-widest">{item.label}</p>
                      <p className="text-xs font-medium">{item.val}</p>
                   </div>
                </div>
              ))}
            </div>

            {/* Resume Call to Action */}
            <div className="p-8 rounded-[2rem] bg-gradient-to-br from-white/5 to-transparent border border-white/10 text-center">
               <p className="text-[10px] font-fira text-gray-500 uppercase tracking-widest mb-4">Paper Profile</p>
               <button className="px-8 py-3 bg-white text-black rounded-full font-bold text-xs hover:scale-110 transition-transform">
                 Download CV
               </button>
            </div>

          </motion.div>
        </div>
      </motion.main>
    </div>
  );
}