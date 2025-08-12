import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import BeforeAfter from './components/BeforeAfter';
import Advantages from './components/Advantages';
import ProcessSteps from './components/ProcessSteps';
import ProjectGallery from './components/ProjectGallery';
import Testimonials from './components/Testimonials';
import ContactCTA from './components/ContactCTA';
import MapSection from './components/MapSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <Services />
        <BeforeAfter />
        <Advantages />
        <ProcessSteps />
        <ProjectGallery />
        <Testimonials />
        <ContactCTA />
        <MapSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;