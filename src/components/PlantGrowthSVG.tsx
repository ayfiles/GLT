import React, { useEffect, useRef } from 'react';

interface PlantGrowthSVGProps {
  isVisible: boolean;
}

const PlantGrowthSVG: React.FC<PlantGrowthSVGProps> = ({ isVisible }) => {
  const pathRef = useRef<SVGPathElement>(null);
  const leavesRef = useRef<SVGGElement>(null);

  useEffect(() => {
    if (isVisible && pathRef.current && leavesRef.current) {
      // Animate the main stem growth
      const path = pathRef.current;
      const totalLength = path.getTotalLength();
      
      path.style.strokeDasharray = `${totalLength}`;
      path.style.strokeDashoffset = `${totalLength}`;
      path.style.animation = 'drawPath 3s ease-in-out forwards';

      // Animate leaves appearing
      const leaves = leavesRef.current.children;
      Array.from(leaves).forEach((leaf, index) => {
        (leaf as SVGElement).style.opacity = '0';
        (leaf as SVGElement).style.transform = 'scale(0)';
        (leaf as SVGElement).style.animation = `growLeaf 0.8s ease-out ${1 + index * 0.3}s forwards`;
      });
    }
  }, [isVisible]);

  return (
    <div className="w-full h-full">
      <style>
        {`
          @keyframes drawPath {
            to {
              stroke-dashoffset: 0;
            }
          }
          
          @keyframes growLeaf {
            to {
              opacity: 1;
              transform: scale(1);
            }
          }

          @media (prefers-reduced-motion: reduce) {
            * {
              animation: none !important;
            }
          }
        `}
      </style>
      
      <svg
        viewBox="0 0 200 200"
        className="w-full h-full"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Main stem */}
        <path
          ref={pathRef}
          d="M100 190 Q95 150 90 120 Q85 90 95 60 Q105 30 100 10"
          stroke="#22c55e"
          strokeWidth="3"
          strokeLinecap="round"
          fill="none"
        />
        
        {/* Leaves group */}
        <g ref={leavesRef}>
          {/* Leaf 1 */}
          <path
            d="M90 140 Q75 135 70 125 Q75 120 90 120 Q95 125 90 140"
            fill="#4ade80"
            style={{ transformOrigin: '80px 130px' }}
          />
          
          {/* Leaf 2 */}
          <path
            d="M110 120 Q125 115 130 105 Q125 100 110 100 Q105 105 110 120"
            fill="#22c55e"
            style={{ transformOrigin: '120px 110px' }}
          />
          
          {/* Leaf 3 */}
          <path
            d="M85 100 Q70 95 65 85 Q70 80 85 80 Q90 85 85 100"
            fill="#16a34a"
            style={{ transformOrigin: '75px 90px' }}
          />
          
          {/* Leaf 4 */}
          <path
            d="M115 80 Q130 75 135 65 Q130 60 115 60 Q110 65 115 80"
            fill="#15803d"
            style={{ transformOrigin: '125px 70px' }}
          />
          
          {/* Leaf 5 */}
          <path
            d="M90 60 Q75 55 70 45 Q75 40 90 40 Q95 45 90 60"
            fill="#166534"
            style={{ transformOrigin: '80px 50px' }}
          />
        </g>
        
        {/* Small flower/bud at top */}
        <circle
          cx="100"
          cy="15"
          r="4"
          fill="#f59e0b"
          style={{ 
            opacity: 0,
            animation: isVisible ? 'growLeaf 0.5s ease-out 4s forwards' : 'none'
          }}
        />
      </svg>
    </div>
  );
};

export default PlantGrowthSVG;