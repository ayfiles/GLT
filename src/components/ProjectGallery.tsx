import React, { useState, useRef, useEffect } from 'react';
import { Filter, X, ExternalLink, ChevronLeft, ChevronRight } from 'lucide-react';
import GrassLoader from './GrassLoader';

const ProjectGallery = () => {
  const [filter, setFilter] = useState('all');
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const filters = [
    { id: 'all', label: 'Alle Projekte' },
    { id: 'pflaster', label: 'Pflasterarbeiten' },
    { id: 'terrassen', label: 'Terrassenbau' },
    { id: 'sichtschutz', label: 'Zaun- und Sichtschutzbau' },
    { id: 'rollrasen', label: 'Rollrasen' },
    { id: 'hecke-baum', label: 'Heckenschnitt & Baumfällung' },
    { id: 'umgestaltung', label: 'Garten Neu- & Umgestaltung' },
    { id: 'mauer-treppe', label: 'Mauer- und Treppenbau' },
    { id: 'pflege', label: 'Jahreszeiten-Gartenpflege' },
    { id: 'winterdienst', label: 'Streu- und Winterdienst' }
  ];

  const projects = [
    {
      id: 1,
      image: 'https://images.pexels.com/photos/1464229/pexels-photo-1464229.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Moderne Terrassengestaltung',
      category: 'terrassen',
      location: 'Duisburg-Meiderich',
      size: 'ca. 45 m²'
    },
    {
      id: 2,
      image: 'https://images.pexels.com/photos/1105019/pexels-photo-1105019.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Einfahrt mit Naturstein',
      category: 'pflaster',
      location: 'Duisburg-Homberg',
      size: 'ca. 80 m²'
    },
    {
      id: 3,
      image: 'https://images.pexels.com/photos/1005058/pexels-photo-1005058.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Komplette Gartenumgestaltung',
      category: 'umgestaltung',
      location: 'Duisburg-Kaiserberg',
      size: 'ca. 200 m²'
    },
    {
      id: 4,
      image: 'https://images.pexels.com/photos/161097/pexels-photo-161097.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Sichtschutzzaun aus Holz',
      category: 'sichtschutz',
      location: 'Duisburg-Walsum',
      size: '25 lfd. Meter'
    },
    {
      id: 5,
      image: 'https://images.pexels.com/photos/186980/pexels-photo-186980.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Rollrasen für den Familiengarten',
      category: 'rollrasen',
      location: 'Duisburg-Neudorf',
      size: 'ca. 65 m²'
    },
    {
      id: 6,
      image: 'https://images.pexels.com/photos/580832/pexels-photo-580832.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Heckenschnitt & Baumfällung',
      category: 'hecke-baum',
      location: 'Duisburg-Rheinhausen',
      size: 'Gartenanlage'
    },
    {
      id: 7,
      image: 'https://images.pexels.com/photos/1453799/pexels-photo-1453799.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Mauer- und Treppenbau',
      category: 'mauer-treppe',
      location: 'Duisburg-Großenbaum',
      size: 'ca. 30 m²'
    },
    {
      id: 8,
      image: 'https://images.pexels.com/photos/2116475/pexels-photo-2116475.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Jahreszeiten-Gartenpflege',
      category: 'pflege',
      location: 'Duisburg-Wedau',
      size: 'Garten'
    },
    {
      id: 9,
      image: 'https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Streu- und Winterdienst',
      category: 'winterdienst',
      location: 'Duisburg',
      size: 'Winterdienst'
    }
  ];

  const beforeAfterProjects = [
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
    },
    {
      before: 'https://images.pexels.com/photos/580832/pexels-photo-580832.jpeg?auto=compress&cs=tinysrgb&w=800',
      after: 'https://images.pexels.com/photos/1453799/pexels-photo-1453799.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Vorgarten-Neugestaltung',
      location: 'Duisburg-Rheinhausen'
    }
  ];

  const [currentProject, setCurrentProject] = useState(0);

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);

  const handleFilterChange = (newFilter: string) => {
    if (newFilter !== filter) {
      setIsLoading(true);
      setTimeout(() => {
        setFilter(newFilter);
        setIsLoading(false);
      }, 800);
    }
  };

  const openLightbox = (image: string) => {
    setLightboxImage(image);
  };

  const closeLightbox = () => {
    setLightboxImage(null);
  };

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
    setCurrentProject((prev) => (prev + 1) % beforeAfterProjects.length);
    setSliderPosition(50);
  };

  const prevProject = () => {
    setCurrentProject((prev) => (prev - 1 + beforeAfterProjects.length) % beforeAfterProjects.length);
    setSliderPosition(50);
  };

  const beforeAfterProject = beforeAfterProjects[currentProject];

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Unsere <span className="text-green-600">Projekte</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Entdecken Sie eine Auswahl unserer realisierten Projekte in Duisburg und Umgebung. 
            Jedes Projekt ist einzigartig und wird individuell auf Ihre Wünsche abgestimmt.
          </p>
        </div>

        {/* Filter Navigation */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {filters.map((filterItem) => (
            <button
              key={filterItem.id}
              onClick={() => handleFilterChange(filterItem.id)}
              className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                filter === filterItem.id
                  ? 'bg-green-600 text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-green-50 hover:text-green-600 shadow-md'
              }`}
            >
              <Filter className="w-4 h-4 inline-block mr-2" />
              {filterItem.label}
            </button>
          ))}
        </div>

        {/* Loading State */}
        {isLoading && (
          <div className="flex justify-center items-center py-20">
            <GrassLoader />
          </div>
        )}

        {/* Project Grid */}
        {!isLoading && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {filteredProjects.map((project, index) => (
              <div
                key={project.id}
                className="group bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden cursor-pointer transform hover:-translate-y-2"
                style={{ animationDelay: `${index * 100}ms` }}
                onClick={() => openLightbox(project.image)}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <ExternalLink className="w-8 h-8 text-white" />
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-green-600 transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-1">{project.location}</p>
                  <p className="text-gray-500 text-sm">{project.size}</p>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Results Count */}
        {!isLoading && (
          <div className="text-center mt-12">
            <p className="text-gray-600">
              {filteredProjects.length} Projekt{filteredProjects.length !== 1 ? 'e' : ''} gefunden
            </p>
          </div>
        )}

        {/* Before After Section */}
        <div className="mt-20">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold text-gray-900 mb-4">
              <span className="text-green-600">Vorher</span> & <span className="text-amber-500">Nachher</span>
            </h3>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Sehen Sie selbst, wie wir Ihre Gartenträume in die Realität umsetzen. 
              Ziehen Sie den Slider, um die Transformation zu erleben.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            {/* Project Navigation */}
            <div className="flex items-center justify-between mb-8">
              <button
                onClick={prevProject}
                className="flex items-center px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors duration-200"
              >
                <ChevronLeft className="w-5 h-5 mr-2" />
                Vorheriges Projekt
              </button>
              
              <div className="text-center">
                <h3 className="text-xl font-semibold text-gray-900">{beforeAfterProject.title}</h3>
                <p className="text-gray-600">{beforeAfterProject.location}</p>
              </div>
              
              <button
                onClick={nextProject}
                className="flex items-center px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors duration-200"
              >
                Nächstes Projekt
                <ChevronRight className="w-5 h-5 ml-2" />
              </button>
            </div>

            {/* Before/After Slider */}
            <div
              ref={containerRef}
              className="relative w-full h-96 md:h-[500px] overflow-hidden rounded-2xl shadow-2xl cursor-col-resize select-none"
              onMouseDown={handleMouseDown}
              onMouseMove={handleMouseMove}
              onMouseUp={handleMouseUp}
            >
              {/* After Image */}
              <img
                src={beforeAfterProject.after}
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
                  src={beforeAfterProject.before}
                  alt="Vorher"
                  className="w-full h-full object-cover"
                  draggable={false}
                />
                
                {/* Before Label */}
                <div className="absolute top-4 left-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  Vorher
                </div>
              </div>
              
              {/* After Label */}
              <div className="absolute top-4 right-4 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                Nachher
              </div>
              
              {/* Slider Line and Handle */}
              <div
                className="absolute top-0 bottom-0 w-0.5 bg-white shadow-lg pointer-events-none"
                style={{ left: `${sliderPosition}%` }}
              >
                {/* Slider Handle */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center pointer-events-auto cursor-col-resize">
                  <div className="flex space-x-1">
                    <div className="w-1 h-6 bg-gray-400 rounded"></div>
                    <div className="w-1 h-6 bg-gray-400 rounded"></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Project Indicators */}
            <div className="flex justify-center mt-8 space-x-2">
              {beforeAfterProjects.map((_, index) => (
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

            {/* Instructions */}
            <div className="text-center mt-8 text-gray-600">
              <p className="text-sm">Ziehen Sie den Slider oder nutzen Sie die Pfeiltasten, um die Transformation zu sehen</p>
            </div>
          </div>
        </div>

        {/* Lightbox */}
        {lightboxImage && (
          <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4">
            <div className="relative max-w-4xl max-h-screen">
              <img
                src={lightboxImage}
                alt="Projekt Detail"
                className="max-w-full max-h-full object-contain rounded-lg"
              />
              <button
                onClick={closeLightbox}
                className="absolute top-4 right-4 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors duration-200"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            <div
              className="absolute inset-0"
              onClick={closeLightbox}
            ></div>
          </div>
        )}

        {/* CTA */}
        <div className="text-center mt-16">
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              Ihr Projekt ist nicht dabei?
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Kein Problem! Wir realisieren individuelle Lösungen für jeden Bedarf. 
              Sprechen Sie uns an und lassen Sie sich von unseren Möglichkeiten überraschen.
            </p>
            <button className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-300 shadow-lg hover:shadow-xl">
              Kostenloses Beratungsgespräch
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectGallery;