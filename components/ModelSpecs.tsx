import React from 'react';
import { TaskCategory } from '../types';
import { Icons } from './Icons';

const taskCategories: TaskCategory[] = [
  {
    title: "Fine-grained Object Perception",
    tasks: [
      "Task 1: Oriented Object Detection",
      "Task 2: Axis-aligned Object Detection"
    ]
  },
  {
    title: "Scene Understanding & Description",
    tasks: [
      "Task 3: Remote Sensing Image Captioning",
      "Task 4: Land Use/Cover Classification"
    ]
  },
  {
    title: "Complex Reasoning & VQA",
    tasks: [
      "Task 5: Object Counting",
      "Task 6: Spatial Relationship Reasoning",
      "Task 7: Region Specific QA"
    ]
  },
  {
    title: "Temporal Analysis / Change Detection",
    tasks: [
      "Task 8: Change Detection QA",
      "Task 9: Change Description"
    ]
  }
];

export const ModelSpecs: React.FC = () => {
  return (
    <section id="tasks" className="py-24 bg-space-800 relative overflow-hidden">
       {/* Abstract Background */}
       <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
         <div className="absolute top-10 left-10 w-96 h-96 bg-blue-500 rounded-full blur-3xl"></div>
         <div className="absolute bottom-10 right-10 w-96 h-96 bg-purple-500 rounded-full blur-3xl"></div>
       </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            All-In-One <span className="text-brand-DEFAULT">Remote Sensing</span> Model
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            TerraSense-Base unifies diverse remote sensing tasks into a single foundation model, 
            supporting multi-image inputs and complex instruction following.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {taskCategories.map((category, idx) => (
            <div key={idx} className="group p-8 rounded-2xl bg-space-900/50 border border-slate-700 hover:border-brand-DEFAULT/50 transition-all hover:-translate-y-1">
              <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
                <span className="w-8 h-8 flex items-center justify-center bg-space-800 rounded-lg text-brand-DEFAULT text-sm font-mono border border-slate-700">
                  {idx + 1}
                </span>
                {category.title}
              </h3>
              <div className="space-y-3">
                {category.tasks.map((task, tIdx) => (
                  <div key={tIdx} className="flex items-center gap-3 text-slate-400 group-hover:text-slate-200 transition-colors">
                    <Icons.CheckCircle2 className="w-4 h-4 text-brand-glow/50 group-hover:text-brand-glow" />
                    <span className="font-mono text-sm">{task}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Architecture / Detail Banner */}
        <div className="mt-16 p-1 rounded-2xl bg-gradient-to-r from-slate-800 to-slate-700">
          <div className="bg-space-900 rounded-xl px-8 py-10 flex flex-col md:flex-row items-center justify-between gap-8">
             <div className="flex-1">
                <h3 className="text-2xl font-bold text-white mb-2">8-Billion Parameters</h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  Built on a robust transformer architecture, TerraSense-Base is optimized for both 
                  <span className="text-brand-DEFAULT"> visual-language alignment</span> and 
                  <span className="text-brand-DEFAULT"> pixel-level localization</span>.
                  It serves as the perfect backbone for autonomous GIS Agents.
                </p>
             </div>
             <div className="flex gap-8">
                <div className="text-center">
                   <div className="text-3xl font-bold text-white font-mono">3,719</div>
                   <div className="text-xs text-slate-500 uppercase tracking-wider mt-1">Training Samples</div>
                </div>
                <div className="text-center">
                   <div className="text-3xl font-bold text-brand-glow font-mono">SOTA</div>
                   <div className="text-xs text-slate-500 uppercase tracking-wider mt-1">Performance</div>
                </div>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};