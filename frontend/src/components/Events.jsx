const upcomingEvents = [
    { id: 1, title: "MERN Stack Workshop", date: "April 12", type: "Web" },
    { id: 2, title: "ML Model Optimization", date: "April 20", type: "AI/ML" }
  ];
  
  export const EventReminder = () => (
    <div className="mt-12 space-y-3">
      <h3 className="text-[10px] font-black text-gray-500 tracking-[0.3em] uppercase mb-4 flex items-center gap-2">
        <span className="w-4 h-[1px] bg-gray-500" /> Upcoming Reminders
      </h3>
      {upcomingEvents.map(event => (
        <motion.div 
          key={event.id}
          whileHover={{ x: 5 }}
          className="group flex items-center gap-4 bg-white/5 border border-white/5 p-4 rounded-2xl hover:border-pink-500/30 transition-all cursor-default"
        >
          <div className="bg-pink-500/10 p-2 rounded-xl text-pink-400 font-bold text-xs uppercase">
            {event.date.split(' ')[0]} <br /> {event.date.split(' ')[1]}
          </div>
          <div>
            <p className="text-sm font-bold text-white group-hover:text-pink-400 transition-colors">{event.title}</p>
            <p className="text-[10px] text-gray-500 font-mono tracking-tighter uppercase">{event.type} Architecture</p>
          </div>
        </motion.div>
      ))}
    </div>
  );