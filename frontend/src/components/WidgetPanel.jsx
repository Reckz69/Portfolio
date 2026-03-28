import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useClock } from '../hooks/useClock';

export const WidgetPanel = () => {
  const clock = useClock();
  const [viewDate, setViewDate] = useState(new Date());
  const [isOpen, setIsOpen] = useState(false);

  // Calendar Logic
  const daysInMonth = new Date(viewDate.getFullYear(), viewDate.getMonth() + 1, 0).getDate();
  const firstDay = new Date(viewDate.getFullYear(), viewDate.getMonth(), 1).getDay();
  const monthName = viewDate.toLocaleString('default', { month: 'long' });

  const changeMonth = (offset) => {
    setViewDate(new Date(viewDate.setMonth(viewDate.getMonth() + offset)));
  };

  return (
    <>
      {/* Toggle Button */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-8 right-8 z-[100] w-12 h-12 rounded-full bg-g-pink flex items-center justify-center shadow-lg shadow-pink-500/20 hover:scale-110 transition-transform"
      >
        {isOpen ? '✕' : '🕒'}
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="fixed bottom-24 right-8 z-[90] w-72 space-y-4"
          >
            {/* Clock Widget */}

            <div className="bg-glass backdrop-blur-2xl border border-glass-border p-5 rounded-3xl shadow-2xl">
            <div className="flex items-baseline gap-1 font-fira text-3xl font-bold tracking-tighter">
                {/* Explicitly defining the gradient if Tailwind class fails */}
                <span 
                className="bg-clip-text text-transparent"
                style={{ backgroundImage: 'linear-gradient(135deg, #f472b6, #a855f7, #6366f1)' }}
                >
                {clock.h}
                </span>
                
                <span className="text-white/20 animate-pulse">:</span>
                
                {/* Added text-white here as a fallback */}
                <span className="text-white">{clock.m}</span>
                
                <span className="text-sm text-white/40 ml-1">:{clock.s}</span>
                <span className="text-[10px] ml-2 text-pink-400 font-black">{clock.ampm}</span>
            </div>
            <p className="text-[10px] text-gray-500 mt-1 uppercase tracking-widest font-bold">
                {clock.fullDate}
            </p>
            </div>

            {/* Calendar Widget */}
            <div className="bg-glass backdrop-blur-2xl border border-glass-border p-5 rounded-3xl shadow-2xl">
              <div className="flex justify-between items-center mb-4">
                <h4 className="font-syne text-xs font-bold bg-g-blue bg-clip-text text-pink-200 uppercase tracking-wider">
                  {monthName} {viewDate.getFullYear()}
                </h4>
                <div className="flex gap-2">
                  <button onClick={() => changeMonth(-1)} className="text-gray-500 hover:text-white transition-colors text-lg">‹</button>
                  <button onClick={() => changeMonth(1)} className="text-gray-500 hover:text-white transition-colors text-lg">›</button>
                </div>
              </div>

              <div className="grid grid-cols-7 gap-1">
                {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map((day, index) => (
                    <span 
                    key={`day-header-${index}`} // ⬅️ Changed key from 'd' to include the index
                    className="text-[9px] text-center font-bold text-white/20 mb-2"
                    >
                    {day}
                    </span>
                ))}
                {[...Array(firstDay)].map((_, i) => <div key={i} />)}
                {[...Array(daysInMonth)].map((_, i) => {
                  const day = i + 1;
                  const isToday = day === new Date().getDate() && viewDate.getMonth() === new Date().getMonth();
                  return (
                    <div 
                      key={day} 
                      className={`text-[10px] text-center py-1 rounded-md transition-all ${
                        isToday ? 'bg-g-pink text-white font-bold shadow-md shadow-pink-500/30' : 'text-white/40 hover:bg-white/5 hover:text-white'
                      }`}
                    >
                      {day}
                    </div>
                  );
                })}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};