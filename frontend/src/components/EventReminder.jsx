import React from 'react';
import { motion } from 'framer-motion';

// This data can eventually be fetched from your Express API
const events = [
  {
    id: 1,
    title: "ProjectX - Final Deployment",
    date: "MAR 30",
    type: "MERN Stack",
    status: "Priority",
    icon: "🚀"
  },
  {
    id: 2,
    title: "AI/ML Exam Preparation",
    date: "APR 05",
    type: "Academic",
    status: "Upcoming",
    icon: "🧠"
  }
];

export const EventReminder = () => {
  return (
    <div className="w-full max-w-md">
      {/* Header Label */}
      <div className="flex items-center gap-3 mb-6">
        <div className="h-[1px] w-8 bg-pink-500/50" />
        <span className="text-[10px] font-fira tracking-[0.3em] text-gray-500 uppercase font-bold">
          Technical Events & Milestones
        </span>
      </div>

      <div className="space-y-4">
        {events.map((event, index) => (
          <motion.div
            key={event.id}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ x: 10, backgroundColor: "rgba(255, 255, 255, 0.05)" }}
            className="group relative flex items-center gap-5 p-4 rounded-2xl bg-white/[0.03] border border-white/10 backdrop-blur-md cursor-default transition-all hover:border-pink-500/30"
          >
            {/* Date Badge */}
            <div className="flex flex-col items-center justify-center min-w-[60px] h-[60px] rounded-xl bg-gradient-to-br from-pink-500/10 to-violet-500/10 border border-pink-500/20 text-pink-400">
              <span className="text-[10px] font-black leading-none uppercase">{event.date.split(' ')[0]}</span>
              <span className="text-xl font-syne font-bold leading-tight">{event.date.split(' ')[1]}</span>
            </div>

            {/* Content */}
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-1">
                <span className="text-[9px] font-fira text-blue-400 bg-blue-400/10 px-2 py-0.5 rounded-full uppercase tracking-tighter">
                  {event.type}
                </span>
                {event.status === 'Priority' && (
                  <span className="flex h-1.5 w-1.5 rounded-full bg-pink-500 animate-pulse" />
                )}
              </div>
              <h4 className="text-sm font-bold text-white group-hover:text-pink-400 transition-colors">
                {event.title}
              </h4>
            </div>

            {/* Icon/Emoji */}
            <div className="text-xl opacity-20 group-hover:opacity-100 transition-opacity grayscale group-hover:grayscale-0">
              {event.icon}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};