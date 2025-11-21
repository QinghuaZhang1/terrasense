import React from 'react';
import { Icons } from './Icons';

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background Grid & Glow */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-space-900 via-space-900/90 to-space-800 pointer-events-none"></div>
      
      {/* Abstract Planet/Data Visualization */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-accent/5 rounded-full blur-3xl animate-pulse-slow pointer-events-none"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-slate-800/50 rounded-full animate-spin-slow pointer-events-none"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] border border-slate-800/50 rounded-full animate-[spin_15s_linear_infinite_reverse] pointer-events-none"></div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-DEFAULT/10 border border-brand-DEFAULT/20 text-brand-DEFAULT text-xs font-mono mb-6 animate-float">
          <span className="w-2 h-2 rounded-full bg-brand-DEFAULT animate-pulse"></span>
          TerraSense-Base 8B: The Remote Sensing Foundation Model
        </div>
        
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 leading-tight bg-clip-text text-transparent bg-gradient-to-r from-white via-slate-200 to-slate-500">
          Global Vision for <br />
          <span className="text-white">Planetary Agents.</span>
        </h1>
        
        <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed">
          An 8-billion parameter multimodal model designed for 
          <span className="text-brand-glow"> complex reasoning</span>, 
          <span className="text-brand-glow"> multi-turn dialogue</span>, and 
          <span className="text-brand-glow"> fine-grained perception</span> in remote sensing.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a href="https://github.com/terrasense" target="_blank" rel="noreferrer" className="w-full sm:w-auto px-8 py-4 bg-brand-DEFAULT hover:bg-brand-400 text-space-900 font-bold rounded-xl transition-all shadow-[0_0_20px_rgba(56,189,248,0.3)] flex items-center justify-center gap-2 group">
            <Icons.Github className="w-4 h-4" />
            View on GitHub
            <Icons.ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
          <a href="#showcase" className="w-full sm:w-auto px-8 py-4 bg-slate-800 hover:bg-slate-700 text-white font-medium rounded-xl border border-slate-700 transition-all flex items-center justify-center gap-2">
            <Icons.Eye className="w-4 h-4" />
            See Capabilities
          </a>
        </div>
      </div>
      
      {/* Decorative Tech Elements */}
      <div className="absolute bottom-10 left-10 hidden lg:block font-mono text-xs text-slate-600">
        <div className="flex flex-col gap-1">
          <span>MODEL: TERRASENSE-8B</span>
          <span>DATASET: 5PB MULTI-SPECTRAL</span>
          <span>STATUS: RESEARCH_PREVIEW</span>
        </div>
      </div>
    </section>
  );
};