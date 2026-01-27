import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SakuraBackground from './components/SakuraBackground';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Experience from './components/Experience';
import Rooms from './components/Rooms';
import Gallery from './components/Gallery';
import BookingSystem from './components/BookingSystem';
import Contact from './components/Contact';
import Footer from './components/Footer';
import AllRooms from './components/AllRooms';
import AllServices from './components/AllServices';
import Services from './components/Services';

// Página principal
const HomePage = () => (
  <>
    <Hero />
    <Experience />
    <Rooms />
    <Services />
    <Gallery />
    <BookingSystem />
    <Contact />
  </>
);

const AllRoomsPage = () => <AllRooms />;
const AllServicesPage = () => <AllServices />;

function App() {
  return (
    <Router basename="/hotel-japones">
      <div className="relative min-h-screen bg-dark-main">
        <SakuraBackground />

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
