import React, { useMemo, useState } from 'react';

const ProjectGallery = () => {
  // Load all images named like "reference X.ext" from assets folder
  const references = useMemo(() => {
    const modules = import.meta.glob('../assets/reference *.{jpg,jpeg,png,webp}', { eager: true, as: 'url' });
    const entries = Object.entries(modules).map(([path, url]) => {
      const match = path.match(/reference\s*(\d+)/i);
      const order = match ? parseInt(match[1], 10) : Number.MAX_SAFE_INTEGER;
      return { url: url as string, order };
    });
    return entries
      .sort((a, b) => a.order - b.order)
      .map((e) => e.url);
  }, []);

  const [index, setIndex] = useState(0);

  const goNext = () => setIndex((prev) => (prev + 1) % references.length);
  const goPrev = () => setIndex((prev) => (prev - 1 + references.length) % references.length);

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <style>{`
        @keyframes marqueeRTL {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-4xl font-bold text-gray-900">
            Unsere <span className="text-green-600">Referenzen</span>
          </h2>
          <p className="text-gray-600 mt-3">Unsere Projekte und Verwirklichungen</p>
        </div>

        <div className="relative overflow-hidden rounded-2xl shadow-xl bg-white">
          {/* Slides */}
          <div
            className="flex items-center transition-transform duration-500 ease-out"
            style={{ transform: `translateX(-${(index * 100) / references.length}%)`, width: `${references.length * 100}%` }}
          >
            {references.map((src, idx) => (
              <div key={idx} className="shrink-0" style={{ width: `${100 / references.length}%` }}>
                <div className="w-full aspect-[16/10]">
                  <img src={src} alt={`Referenz ${idx + 1}`} className="w-full h-full object-cover" />
                </div>
              </div>
            ))}
          </div>

          {/* Controls */}
          <button
            aria-label="Zurück"
            onClick={goPrev}
            className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 w-10 h-10 rounded-full shadow flex items-center justify-center"
          >
            ‹
          </button>
          <button
            aria-label="Weiter"
            onClick={goNext}
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 w-10 h-10 rounded-full shadow flex items-center justify-center"
          >
            ›
          </button>

          {/* Dots */}
          <div className="absolute bottom-3 left-0 right-0 flex justify-center gap-2">
            {references.map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                className={`w-2.5 h-2.5 rounded-full ${i === index ? 'bg-green-600' : 'bg-gray-300'}`}
                aria-label={`Gehe zu Slide ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectGallery;