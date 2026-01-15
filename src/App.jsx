import React from 'react';
import SakuraBackground from './components/SakuraBackground';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Experience from './components/Experience';
import Rooms from './components/Rooms';
import Services from './components/Services';
import Gallery from './components/Gallery';
import Booking from './components/Booking';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="relative min-h-screen bg-dark-main">
      {/* Fondo animado con sakura - presente en toda la página */}
      <SakuraBackground />

      {/* Contenido principal */}
      <div className="relative z-10">
        <Navbar />
        
        <main>
          <div id="hero">
            <Hero />
          </div>
          
          <div id="experience">
            <Experience />
          </div>
          
          <div id="rooms">
            <Rooms />
          </div>
          
          <div id="services">
            <Services />
          </div>
          
          <div id="gallery">
            <Gallery />
          </div>
          
          <div id="booking">
            <Booking />
          </div>
          
          <div id="contact">
            <Contact />
          </div>
        </main>

        <Footer />
      </div>
    </div>
  );
}

export default App;
