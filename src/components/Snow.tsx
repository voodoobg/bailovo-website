'use client';

import { useEffect, useState } from 'react';

interface Snowflake {
  id: number;
  left: number;
  animationDuration: number;
  animationDelay: number;
  size: number;
  opacity: number;
}

export default function Snow() {
  const [snowflakes, setSnowflakes] = useState<Snowflake[]>([]);

  useEffect(() => {
    // Generate snowflakes
    const flakes: Snowflake[] = [];
    const numFlakes = 50;

    for (let i = 0; i < numFlakes; i++) {
      flakes.push({
        id: i,
        left: Math.random() * 100,
        animationDuration: 5 + Math.random() * 10,
        animationDelay: Math.random() * 5,
        size: 3 + Math.random() * 5,
        opacity: 0.4 + Math.random() * 0.6,
      });
    }

    setSnowflakes(flakes);
  }, []);

  return (
    <>
      <style jsx global>{`
        @keyframes snowfall {
          0% {
            transform: translateY(-10vh) translateX(0);
          }
          25% {
            transform: translateY(25vh) translateX(10px);
          }
          50% {
            transform: translateY(50vh) translateX(-10px);
          }
          75% {
            transform: translateY(75vh) translateX(10px);
          }
          100% {
            transform: translateY(110vh) translateX(0);
          }
        }
      `}</style>
      <div className="fixed inset-0 pointer-events-none z-[100] overflow-hidden">
        {snowflakes.map((flake) => (
          <div
            key={flake.id}
            className="absolute rounded-full bg-white"
            style={{
              left: `${flake.left}%`,
              top: '-10px',
              width: `${flake.size}px`,
              height: `${flake.size}px`,
              opacity: flake.opacity,
              animation: `snowfall ${flake.animationDuration}s linear infinite`,
              animationDelay: `${flake.animationDelay}s`,
              boxShadow: '0 0 5px rgba(255, 255, 255, 0.8)',
            }}
          />
        ))}
      </div>
    </>
  );
}

