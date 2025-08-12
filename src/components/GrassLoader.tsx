import React from 'react';

const GrassLoader = () => {
  return (
    <div className="flex items-end justify-center space-x-1">
      <style>
        {`
          @keyframes grassGrow {
            0%, 40%, 100% { 
              transform: scaleY(0.4);
              opacity: 0.7;
            }
            20% { 
              transform: scaleY(1);
              opacity: 1;
            }
          }

          .grass-blade {
            animation: grassGrow 1.5s ease-in-out infinite;
          }

          .grass-blade:nth-child(1) { animation-delay: -1.2s; }
          .grass-blade:nth-child(2) { animation-delay: -1.1s; }
          .grass-blade:nth-child(3) { animation-delay: -1.0s; }
          .grass-blade:nth-child(4) { animation-delay: -0.9s; }
          .grass-blade:nth-child(5) { animation-delay: -0.8s; }
          .grass-blade:nth-child(6) { animation-delay: -0.7s; }
          .grass-blade:nth-child(7) { animation-delay: -0.6s; }
          .grass-blade:nth-child(8) { animation-delay: -0.5s; }

          @media (prefers-reduced-motion: reduce) {
            .grass-blade {
              animation: none !important;
              opacity: 0.8;
            }
          }
        `}
      </style>
      
      {[...Array(8)].map((_, index) => (
        <div
          key={index}
          className="grass-blade w-1 h-8 bg-gradient-to-t from-green-600 to-green-400 rounded-t-full origin-bottom"
          style={{ height: `${20 + Math.random() * 20}px` }}
        ></div>
      ))}
      
      <div className="ml-4 text-green-600 font-medium">
        Projekte werden geladen...
      </div>
    </div>
  );
};

export default GrassLoader;