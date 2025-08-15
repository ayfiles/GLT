import React, { useState, useRef, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const BeforeAfter = () => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const projects = [
    {
      before: '/images/vorher.jpg',
      after: '/images/naccher.jpg',
      title: 'Komplette Gartenumgestaltung',
      location: 'Duisburg-Meiderich'
    },
    {
      before: 'https://images.pexels.com/photos/186980/pexels-photo-186980.jpeg?auto=compress&cs=tinysrgb&w=800',
      after: 'https://images.pexels.com/photos/1105019/pexels-photo-1105019.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Terrassen-Neubau mit Pflasterarbeiten',
      location: 'Duisburg-Homberg'
    }
  ];

  const [currentProject, setCurrentProject] = useState(0);

  const handleMouseDown = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !containerRef.current) return;
    
    const rect = containerRef.current.getBoundingClientRect();
    const position = ((e.clientX - rect.left) / rect.width) * 100;
    setSliderPosition(Math.max(0, Math.min(100, position)));
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  useEffect(() => {
    const handleGlobalMouseMove = (e: MouseEvent) => {
      if (!isDragging || !containerRef.current) return;
      
      const rect = containerRef.current.getBoundingClientRect();
      const position = ((e.clientX - rect.left) / rect.width) * 100;
      setSliderPosition(Math.max(0, Math.min(100, position)));
    };

    const handleGlobalMouseUp = () => {
      setIsDragging(false);
    };

    if (isDragging) {
      document.addEventListener('mousemove', handleGlobalMouseMove);
      document.addEventListener('mouseup', handleGlobalMouseUp);
    }

    return () => {
      document.removeEventListener('mousemove', handleGlobalMouseMove);
      document.removeEventListener('mouseup', handleGlobalMouseUp);
    };
  }, [isDragging]);

  const nextProject = () => {
    setCurrentProject((prev) => (prev + 1) % projects.length);
    setSliderPosition(50);
  };

  const prevProject = () => {
    setCurrentProject((prev) => (prev - 1 + projects.length) % projects.length);
    setSliderPosition(50);
  };

  const project = projects[currentProject];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 md:mb-16">
          <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-3 md:mb-4">
            <span className="text-green-600">Vorher</span> & <span className="text-amber-500">Nachher</span>
          </h2>
          <p className="text-base md:text-xl text-gray-600 max-w-3xl mx-auto px-4">
            Sehen Sie selbst, wie wir Ihre Gartenträume in die Realität umsetzen. 
            Ziehen Sie den Slider, um die Transformation zu erleben.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Project Title */}
          <div className="text-center mb-6 md:mb-8">
            <h3 className="text-lg md:text-xl font-semibold text-gray-900">{project.title}</h3>
            <p className="text-sm md:text-base text-gray-600">{project.location}</p>
          </div>

          {/* Before/After Slider */}
          <div
            ref={containerRef}
            className="relative w-full h-64 sm:h-80 md:h-[500px] overflow-hidden rounded-lg md:rounded-2xl shadow-xl md:shadow-2xl cursor-col-resize select-none"
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
          >
            {/* After Image */}
            <img
              src={project.after}
              alt="Nachher"
              className="absolute inset-0 w-full h-full object-cover"
              draggable={false}
            />
            
            {/* Before Image with Clip */}
            <div
              className="absolute inset-0 overflow-hidden"
              style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
            >
              <img
                src={project.before}
                alt="Vorher"
                className="w-full h-full object-cover"
                draggable={false}
              />
              
              {/* Before Label */}
              <div className="absolute top-2 left-2 md:top-4 md:left-4 bg-red-500 text-white px-2 py-1 md:px-3 md:py-1 rounded-full text-xs md:text-sm font-semibold">
                Vorher
              </div>
            </div>
            
            {/* After Label */}
            <div className="absolute top-2 right-2 md:top-4 md:right-4 bg-green-500 text-white px-2 py-1 md:px-3 md:py-1 rounded-full text-xs md:text-sm font-semibold">
              Nachher
            </div>
            
            {/* Slider Line and Handle */}
            <div
              className="absolute top-0 bottom-0 w-0.5 bg-white shadow-lg pointer-events-none"
              style={{ left: `${sliderPosition}%` }}
            >
              {/* Slider Handle */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 md:w-12 md:h-12 bg-white rounded-full shadow-lg flex items-center justify-center pointer-events-auto cursor-col-resize">
                <div className="flex space-x-0.5 md:space-x-1">
                  <div className="w-0.5 h-4 md:h-6 bg-gray-400 rounded"></div>
                  <div className="w-0.5 h-4 md:h-6 bg-gray-400 rounded"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation and Indicators */}
          <div className="flex flex-col items-center mt-6 md:mt-8 gap-4">
            {/* Navigation Buttons */}
            <div className="flex items-center gap-4">
              <button
                onClick={prevProject}
                className="flex items-center px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors duration-200 text-sm md:text-base"
              >
                <ChevronLeft className="w-4 h-4 md:w-5 md:h-5 mr-2" />
                Zurück
              </button>
              
              <button
                onClick={nextProject}
                className="flex items-center px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors duration-200 text-sm md:text-base"
              >
                Weiter
                <ChevronRight className="w-4 h-4 md:w-5 md:h-5 ml-2" />
              </button>
            </div>

            {/* Project Indicators */}
            <div className="flex justify-center space-x-2">
              {projects.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setCurrentProject(index);
                    setSliderPosition(50);
                  }}
                  className={`w-3 h-3 rounded-full transition-colors duration-200 ${
                    index === currentProject ? 'bg-green-600' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Instructions */}
          <div className="text-center mt-6 md:mt-8 text-gray-600 px-4">
            <p className="text-xs md:text-sm">Ziehen Sie den Slider oder nutzen Sie die Pfeiltasten, um die Transformation zu sehen</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BeforeAfter;