import React, { useEffect, useState } from 'react';
import { Award } from 'lucide-react';

const MasterBadge = () => {
  const [isShining, setIsShining] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsShining(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative">
      <style>
        {`
          @keyframes shine {
            0% {
              transform: translateX(-100%);
            }
            100% {
              transform: translateX(200%);
            }
          }
          
          .shine-effect {
            animation: shine 2s ease-in-out infinite;
            animation-delay: 3s;
          }

          @media (prefers-reduced-motion: reduce) {
            .shine-effect {
              animation: none !important;
            }
          }
        `}
      </style>
      
      <div className="relative bg-gradient-to-br from-amber-400 via-yellow-400 to-amber-500 p-6 rounded-full shadow-2xl border-4 border-white/20 backdrop-blur-sm overflow-hidden">
        {/* Shine effect overlay */}
        {isShining && (
          <div className="absolute inset-0 shine-effect">
            <div className="h-full w-8 bg-gradient-to-r from-transparent via-white/40 to-transparent skew-x-12"></div>
          </div>
        )}
        
        <div className="relative z-10 text-center">
          <Award className="w-12 h-12 text-white mx-auto mb-2" />
          <div className="text-white font-bold text-sm leading-tight">
            MEISTER
            <br />
            BETRIEB
          </div>
          <div className="text-white/90 text-xs mt-1">seit 2025</div>
        </div>
        
        {/* Decorative border */}
        <div className="absolute inset-0 rounded-full border-2 border-amber-300/50"></div>
      </div>
    </div>
  );
};

export default MasterBadge;