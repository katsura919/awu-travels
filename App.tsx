import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Destinations from './components/Destinations';
import WhyUs from './components/WhyUs';
import PerfectPlaces from './components/PerfectPlaces';
import HelpCTA from './components/HelpCTA';
import Footer from './components/Footer';
import ChatWidget from './components/ChatWidget';

function App() {
  return (
    <div className="bg-white min-h-screen text-gray-800 font-sans">
      <Navbar />
      <Hero />
      <Destinations />
      <WhyUs />
      <PerfectPlaces />
      <HelpCTA />
      <Footer />
      <ChatWidget />
    </div>
  );
}

export default App;