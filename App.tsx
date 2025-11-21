import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ModelSpecs } from './components/ModelSpecs';
import { ModelShowcase } from './components/ModelShowcase';
import { Footer } from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-space-900 text-slate-200 selection:bg-brand-DEFAULT selection:text-space-900 font-sans">
      <Navbar />
      
      <main>
        <Hero />
        <ModelSpecs />
        <ModelShowcase />
      </main>

      <Footer />
    </div>
  );
};

export default App;