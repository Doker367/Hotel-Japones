import React, { useState, useEffect } from 'react';
import SakuraBackground from './components/SakuraBackground';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Experience from './components/Experience';
import Rooms from './components/Rooms';
import AllRooms from './components/AllRooms';
import AllServices from './components/AllServices';
import Services from './components/Services';
import Gallery from './components/Gallery';
import Booking from './components/Booking';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [currentView, setCurrentView] = useState('home'); // 'home', 'all-rooms', 'all-services'

  useEffect(() => {
    // Scroll to top cuando cambia la vista
    window.scrollTo(0, 0);
  }, [currentView]);

  const handleShowAllRooms = () => {
    setCurrentView('all-rooms');
  };

  const handleShowAllServices = () => {
    setCurrentView('all-services');
  };

  const handleBackToHome = () => {
    setCurrentView('home');
  };

  return (
    <div className="relative min-h-screen bg-dark-main">
      {/* Fondo animado con sakura - presente en toda la página */}
      <SakuraBackground />

      {/* Contenido principal */}
      <div className="relative z-10">
        <Navbar onBackToHome={handleBackToHome} currentView={currentView} />
        
        <main>
          {currentView === 'home' && (
            <>
              <div id="hero">
                <Hero />
              </div>
              
              <div id="experience">
                <Experience />
              </div>
              
              <div id="rooms">
                <Rooms onShowAll={handleShowAllRooms} />
              </div>
              
              <div id="services">
                <Services onShowAll={handleShowAllServices} />
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
            </>
          )}

          {currentView === 'all-rooms' && (
            <div id="all-rooms">
              <AllRooms onBackToHome={handleBackToHome} />
            </div>
          )}

          {currentView === 'all-services' && (
            <div id="all-services">
              <AllServices onBackToHome={handleBackToHome} />
            </div>
          )}
        </main>

        <Footer />
      </div>
    </div>
  );
}

export default App;
