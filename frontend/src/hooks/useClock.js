import { useState, useEffect } from 'react';

export const useClock = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  return {
    h: String(time.getHours() % 12 || 12).padStart(2, '0'),
    m: String(time.getMinutes()).padStart(2, '0'),
    s: String(time.getSeconds()).padStart(2, '0'),
    ampm: time.getHours() >= 12 ? 'PM' : 'AM',
    fullDate: time.toLocaleDateString('en-US', { weekday: 'short', day: '2-digit', month: 'short', year: 'numeric' })
  };
};