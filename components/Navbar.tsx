import React, { useState, useEffect } from 'react';
import { Icons } from './Icons';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 border-b ${isScrolled ? 'bg-space-900/80 backdrop-blur-md border-slate-800 py-3' : 'bg-transparent border-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center gap-2 group cursor-pointer">
          <div className="p-2 bg-brand-DEFAULT/10 rounded-lg group-hover:bg-brand-DEFAULT/20 transition-colors">
            <Icons.Satellite className="w-6 h-6 text-brand-DEFAULT" />
          </div>
          <span className="text-xl font-bold tracking-tight text-white">
            Terra<span className="text-brand-DEFAULT">Sense</span>
          </span>
        </div>

        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-300">
          <a href="#tasks" className="hover:text-white transition-colors">Tasks</a>
          <a href="#showcase" className="hover:text-white transition-colors">Capabilities</a>
          <a href="#benchmarks" className="hover:text-white transition-colors">Benchmarks</a>
        </div>

        <a 
          href="https://github.com/terrasense" 
          target="_blank"
          rel="noreferrer"
          className="hidden md:flex items-center gap-2 bg-slate-800 hover:bg-slate-700 text-white px-4 py-2 rounded-full text-sm transition-all border border-slate-700 hover:border-brand-DEFAULT/50"
        >
          <Icons.Github className="w-4 h-4" />
          <span>Paper & Code</span>
        </a>
      </div>
    </nav>
  );
};