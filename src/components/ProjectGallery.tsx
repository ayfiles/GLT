import React, { useState } from 'react';
import { Filter, X, ExternalLink } from 'lucide-react';
import GrassLoader from './GrassLoader';

const ProjectGallery = () => {
  const [filter, setFilter] = useState('all');
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const filters = [
    { id: 'all', label: 'Alle Projekte' },
    { id: 'pflaster', label: 'Pflasterarbeiten' },
    { id: 'terrassen', label: 'Terrassen' },
    { id: 'garten', label: 'Gartengestaltung' },
    { id: 'sichtschutz', label: 'Sichtschutz' },
    { id: 'teich', label: 'Wasserbau' }
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
      image: 'https://images.pexels.com/photos/1453799/pexels-photo-1453799.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Japanischer Garten',
      category: 'garten',
      location: 'Duisburg-Rheinhausen',
      size: 'ca. 120 m²'
    },
    {
      id: 4,
      image: 'https://images.pexels.com/photos/161097/pexels-photo-161097.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Sichtschutz mit Bepflanzung',
      category: 'sichtschutz',
      location: 'Duisburg-Walsum',
      size: '25 lfd. Meter'
    },
    {
      id: 5,
      image: 'https://images.pexels.com/photos/2116475/pexels-photo-2116475.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Gartenteich mit Wasserfall',
      category: 'teich',
      location: 'Duisburg-Wedau',
      size: 'ca. 30 m²'
    },
    {
      id: 6,
      image: 'https://images.pexels.com/photos/1005058/pexels-photo-1005058.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Komplette Gartenumgestaltung',
      category: 'garten',
      location: 'Duisburg-Kaiserberg',
      size: 'ca. 200 m²'
    },
    {
      id: 7,
      image: 'https://images.pexels.com/photos/186980/pexels-photo-186980.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Betonstein-Terrasse',
      category: 'terrassen',
      location: 'Duisburg-Neudorf',
      size: 'ca. 65 m²'
    },
    {
      id: 8,
      image: 'https://images.pexels.com/photos/1105766/pexels-photo-1105766.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Hofpflasterung',
      category: 'pflaster',
      location: 'Duisburg-Großenbaum',
      size: 'ca. 150 m²'
    }
  ];

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