import React from 'react';
import { Icons } from './Icons';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-space-900 border-t border-slate-800 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <Icons.Satellite className="w-6 h-6 text-brand-DEFAULT" />
              <span className="text-xl font-bold text-white">TerraSense</span>
            </div>
            <p className="text-slate-400 max-w-sm">
              Building the foundational layer for planetary intelligence. 
              Empowering researchers, governments, and enterprises to monitor the Earth in real-time.
            </p>
          </div>
          
          <div>
            <h4 className="font-bold text-white mb-4">Technology</h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li><a href="#" className="hover:text-brand-DEFAULT transition-colors">TerraSense-Base 8B</a></li>
              <li><a href="#" className="hover:text-brand-DEFAULT transition-colors">Agent Framework</a></li>
              <li><a href="#" className="hover:text-brand-DEFAULT transition-colors">API Documentation</a></li>
              <li><a href="#" className="hover:text-brand-DEFAULT transition-colors">HuggingFace</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-white mb-4">Connect</h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li><a href="#" className="hover:text-brand-DEFAULT transition-colors">Contact Sales</a></li>
              <li><a href="#" className="hover:text-brand-DEFAULT transition-colors">Research Partnerships</a></li>
              <li><a href="#" className="hover:text-brand-DEFAULT transition-colors">Twitter / X</a></li>
              <li><a href="#" className="hover:text-brand-DEFAULT transition-colors">LinkedIn</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-slate-600">
          <p>&copy; {new Date().getFullYear()} TerraSense Inc. All rights reserved.</p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <a href="#" className="hover:text-slate-400">Privacy Policy</a>
            <a href="#" className="hover:text-slate-400">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
