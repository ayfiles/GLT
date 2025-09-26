import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import BeforeAfter from './components/BeforeAfter';
import AboutUs from './components/AboutUs';
import ProcessSteps from './components/ProcessSteps';
import ProjectGallery from './components/ProjectGallery';
import MapSection from './components/MapSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <AboutUs />
        <Services />
        <ProcessSteps />
        <ProjectGallery />
        <MapSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;