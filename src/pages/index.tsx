// src/pages/index.tsx
import React, { useEffect, useState } from 'react';
import { Heart, Clock } from 'lucide-react';
import { motion } from 'framer-motion';

const Index = () => {
  const [timeElapsed, setTimeElapsed] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const startDate = new Date('2025-06-06T19:00:00-03:00');

    const updateTimer = () => {
      const now = new Date();
      const diff = now.getTime() - startDate.getTime();

      if (diff < 0) return;

      const totalSeconds = Math.floor(diff / 1000);
      const totalMinutes = Math.floor(totalSeconds / 60);
      const totalHours = Math.floor(totalMinutes / 60);
      const totalDays = Math.floor(totalHours / 24);

      setTimeElapsed({
        days: totalDays,
        hours: totalHours % 24,
        minutes: totalMinutes % 60,
        seconds: totalSeconds % 60
      });
    };

    updateTimer();
    const interval = setInterval(updateTimer, 1000);
    return () => clearInterval(interval);
  }, []);

  const photos = [
    '/imagens/ELAeEU.jpeg',
    '/imagens/ELAeEU1.jpeg',
    '/imagens/ELAeEU2.jpeg',
    '/imagens/ELAeEU3.jpeg',
    '/imagens/ELAeEU4.jpg',
    '/imagens/ELAeEU5.jpg',
  ];

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-pink-50 via-indigo-50 to-blue-50 overflow-hidden">
      {/* Cabeçalho */}
      <div className="text-center pt-10 pb-4">
        <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-blue-500">
          Olha a gente aí ;p
        </h1>
        <p className='text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-blue-500'>
          -----------------
          </p>
      </div>

      {/* Contador */}
      <div className="flex justify-center gap-4 flex-wrap p-4">
        {[
          { label: 'Dias', value: timeElapsed.days },
          { label: 'Horas', value: timeElapsed.hours },
          { label: 'Minutos', value: timeElapsed.minutes },
          { label: 'Segundos', value: timeElapsed.seconds },
        ].map((item) => (
          <div
            key={item.label}
            className="bg-white/80 backdrop-blur-md rounded-2xl p-6 shadow-md text-center w-32"
          >
            <div className="text-3xl font-bold text-pink-600">{item.value}</div>
            <div className="text-gray-600">{item.label}</div>
          </div>
        ))}
      </div>

      {/* Galeria */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 p-4 max-w-5xl mx-auto">
        {photos.map((url, i) => (
          <div
            key={i}
            className="overflow-hidden rounded-2xl shadow-lg hover:scale-105 transition-all duration-300"
          >
            <img src={url} alt={`Foto ${i + 1}`} className="w-full h-48 object-cover" />
          </div>
        ))}
      </div>

      {/* Bichinho animado */}
      <motion.img
        src="/imagens/carol.png"
        alt="Bichinho"
        className="w-20 h-20 fixed bottom-10 left-10 z-50 cursor-grab active:cursor-grabbing"
        initial={{ y: 0 }}
        animate={{ y: [0, -20, 0] }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        whileHover={{ scale: 1.2, rotate: 15 }}
        whileTap={{ scale: 0.9, rotate: -10 }}
        drag // <<< Habilita o arrasto
        dragConstraints={{
          top: 0,
          left: 0,
          right: window.innerWidth - 80,  // largura da imagem
          bottom: window.innerHeight - 80
        }}
        dragElastic={0.2}
      />


      {/* Rodapé */}
      <div className="text-center py-6 text-gray-500 text-sm">
      </div>
    </div>
  );
};

export default Index;
