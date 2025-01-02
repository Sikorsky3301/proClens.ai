import React from 'react';
import { Navbar } from './components/layout/Navbar';
import { Hero } from './components/home/Hero';
import { Features } from './components/features/Features';
import { HowItWorks } from './components/how-it-works/HowItWorks';
import { Footer } from './components/layout/Footer';
import { AnimatedBackground } from './components/ui/background/AnimatedBackground';
import { MaintenanceSticker } from './components/ui/MaintenanceSticker';

function App() {
  return (
    <div className="min-h-screen">
      <AnimatedBackground />
      <MaintenanceSticker />
      <Navbar />
      <Hero />
      <Features />
      <HowItWorks />
      <Footer />
    </div>
  );
}

export default App;