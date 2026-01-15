import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SakuraBackground from './components/SakuraBackground';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Experience from './components/Experience';
import Rooms from './components/Rooms';
import AllRooms from './components/AllRooms';
import Services from './components/Services';
import AllServices from './components/AllServices';
import Gallery from './components/Gallery';
import Booking from './components/Booking';
import Contact from './components/Contact';
import Footer from './components/Footer';

// Página principal
const HomePage = () => (
  <>
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
  </>
);

// Página de todas las habitaciones
const AllRoomsPage = () => (
  <>
    <AllRooms />
  </>
);

// Página de todos los servicios
const AllServicesPage = () => (
  <>
    <AllServices />
  </>
);

function App() {
  return (
    <Router>
      <div className="relative min-h-screen bg-dark-main">
        {/* Fondo animado con sakura - presente en toda la página */}
        <SakuraBackground />

        {/* Contenido principal */}
        <div className="relative z-10">
          <Navbar />
          
          <main>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/habitaciones" element={<AllRoomsPage />} />
              <Route path="/servicios" element={<AllServicesPage />} />
            </Routes>
          </main>

          <Footer />
        </div>
      </div>
    </Router>
  );
}

export default App;
