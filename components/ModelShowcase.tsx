import React, { useState, useEffect, useRef } from 'react';
import { Icons } from './Icons';
import { ChatMessage } from '../types';

const exampleImages = [
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?q=80&w=800&auto=format&fit=crop",
    label: "Oriented Object Detection (Planes)",
    tag: "Task 1"
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?q=80&w=800&auto=format&fit=crop",
    label: "Urban Scene Understanding",
    tag: "Task 3"
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1569336415962-a4bd9f69cd83?q=80&w=800&auto=format&fit=crop",
    label: "Land Cover Classification",
    tag: "Task 4"
  }
];

const chatSequence: ChatMessage[] = [
  { id: 1, role: 'user', text: '<image> From a remote sensing perspective, how is the overall land cover pattern in this image? Briefly describe main feature types.', delay: 500 },
  { id: 2, role: 'model', text: 'Dense urban built-up area. The center features a train station and railway lines, surrounded by dense residential and industrial buildings with sparse green spaces, presenting a typical metropolitan texture.', delay: 2500 },
  { id: 3, role: 'user', text: 'Analyzing from an object detection perspective, what category does the object identified by the oriented bounding box at [455,321,533,321,533,721,455,721] belong to?', delay: 6500 },
  { id: 4, role: 'model', text: 'Train Station', delay: 8500 },
  { id: 5, role: 'user', text: 'What percentage of the image area is occupied by the train station?', delay: 10500 },
  { id: 6, role: 'model', text: '4.9%', delay: 12000 }
];

export const ModelShowcase: React.FC = () => {
  const [activeImageIdx, setActiveImageIdx] = useState(0);
  const [visibleMessages, setVisibleMessages] = useState<ChatMessage[]>([]);
  const [isTyping, setIsTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  // Carousel Auto-scroll
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveImageIdx((prev) => (prev + 1) % exampleImages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  // Chat Simulation
  useEffect(() => {
    let timeouts: ReturnType<typeof setTimeout>[] = [];
    
    const runSequence = () => {
      setVisibleMessages([]); // Reset
      
      chatSequence.forEach((msg) => {
        const timeout = setTimeout(() => {
          if (msg.role === 'model') setIsTyping(true);
          
          // Artificial typing delay for model
          setTimeout(() => {
            setVisibleMessages((prev) => [...prev, msg]);
            if (msg.role === 'model') setIsTyping(false);
            
            // Scroll to bottom
            if (scrollRef.current) {
              scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
            }
          }, msg.role === 'model' ? 800 : 0);

        }, msg.delay);
        timeouts.push(timeout);
      });
    };

    // Intersection Observer to start animation when visible could be added here
    // For now, just loop it
    runSequence();
    const loopInterval = setInterval(runSequence, 16000); // Restart every 16s

    return () => {
      timeouts.forEach(clearTimeout);
      clearInterval(loopInterval);
    };
  }, []);

  return (
    <section id="showcase" className="py-24 bg-space-900 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <div className="inline-block p-2 rounded-full bg-brand-accent/10 text-brand-accent mb-4">
            <Icons.Layers className="w-6 h-6" />
          </div>
          <h2 className="text-4xl font-bold mb-4">Academic Benchmarks & Capabilities</h2>
          <p className="text-slate-400">
            Demonstrating State-of-the-Art performance in multi-modal remote sensing tasks.
          </p>
        </div>

        {/* FEATURE 1: VISUAL CAROUSEL & BENCHMARKS */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-24" id="benchmarks">
          
          {/* Left: Image Carousel */}
          <div className="bg-space-800 rounded-2xl p-2 border border-slate-700 shadow-2xl overflow-hidden relative group">
            <div className="absolute top-4 left-4 z-10 bg-black/70 backdrop-blur px-3 py-1 rounded border border-white/10 text-xs font-mono text-white">
              MODEL_OUTPUT_VISUALIZATION
            </div>
            <div className="relative h-[400px] w-full rounded-xl overflow-hidden bg-space-900">
              {exampleImages.map((img, idx) => (
                <div 
                  key={img.id}
                  className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${idx === activeImageIdx ? 'opacity-100' : 'opacity-0'}`}
                >
                  <img src={img.src} alt={img.label} className="w-full h-full object-cover opacity-80" />
                  {/* Overlay UI Mockup */}
                  <div className="absolute inset-0 border-[10px] border-brand-DEFAULT/10"></div>
                  {/* Fake Bounding Boxes */}
                  <div className="absolute top-1/4 left-1/4 w-24 h-24 border-2 border-red-500 shadow-[0_0_10px_rgba(239,68,68,0.5)] animate-pulse">
                    <span className="absolute -top-6 left-0 bg-red-500 text-black text-[10px] font-bold px-1">CONF: 0.98</span>
                  </div>
                  <div className="absolute bottom-1/3 right-1/4 w-32 h-16 border-2 border-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.5)]"></div>
                  
                  <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black to-transparent p-6">
                     <div className="inline-block px-2 py-1 bg-brand-DEFAULT text-space-900 text-xs font-bold mb-2">{img.tag}</div>
                     <h3 className="text-xl font-bold text-white">{img.label}</h3>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex justify-center gap-2 mt-4 pb-2">
              {exampleImages.map((_, idx) => (
                <button 
                  key={idx}
                  onClick={() => setActiveImageIdx(idx)}
                  className={`h-1.5 rounded-full transition-all ${idx === activeImageIdx ? 'w-8 bg-brand-DEFAULT' : 'w-2 bg-slate-600'}`}
                />
              ))}
            </div>
          </div>

          {/* Right: Benchmark Table */}
          <div className="flex flex-col justify-center">
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <Icons.Cpu className="w-6 h-6 text-brand-glow" />
              Performance Comparison
            </h3>
            <div className="bg-space-800 rounded-xl border border-slate-700 overflow-hidden">
              <table className="w-full text-sm text-left">
                <thead className="text-xs text-slate-400 uppercase bg-space-900 border-b border-slate-700">
                  <tr>
                    <th className="px-6 py-4 font-medium">Metric</th>
                    <th className="px-6 py-4 font-medium text-slate-500">Baseline</th>
                    <th className="px-6 py-4 font-medium text-brand-DEFAULT bg-brand-DEFAULT/5">TerraSense</th>
                    <th className="px-6 py-4 font-medium text-green-400">Lift</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-700 font-mono">
                  <tr className="hover:bg-space-700/50 transition-colors">
                    <td className="px-6 py-4 text-slate-300">Precision</td>
                    <td className="px-6 py-4 text-slate-500">0.72%</td>
                    <td className="px-6 py-4 font-bold text-white bg-brand-DEFAULT/5">72.27%</td>
                    <td className="px-6 py-4 text-green-400">+71.55%</td>
                  </tr>
                  <tr className="hover:bg-space-700/50 transition-colors">
                    <td className="px-6 py-4 text-slate-300">Recall</td>
                    <td className="px-6 py-4 text-slate-500">0.02%</td>
                    <td className="px-6 py-4 font-bold text-white bg-brand-DEFAULT/5">59.88%</td>
                    <td className="px-6 py-4 text-green-400">+59.86%</td>
                  </tr>
                  <tr className="hover:bg-space-700/50 transition-colors">
                    <td className="px-6 py-4 text-slate-300">F1 Score</td>
                    <td className="px-6 py-4 text-slate-500">0.03%</td>
                    <td className="px-6 py-4 font-bold text-white bg-brand-DEFAULT/5">65.49%</td>
                    <td className="px-6 py-4 text-green-400">+65.46%</td>
                  </tr>
                  <tr className="hover:bg-space-700/50 transition-colors">
                    <td className="px-6 py-4 text-slate-300">Mean IoU</td>
                    <td className="px-6 py-4 text-slate-500">50.35%</td>
                    <td className="px-6 py-4 font-bold text-white bg-brand-DEFAULT/5">79.02%</td>
                    <td className="px-6 py-4 text-green-400">+28.67%</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-xs text-slate-500 mt-4 italic">
              *Table 1: Quantitative comparison on standard remote sensing change detection and segmentation benchmarks.
            </p>
          </div>
        </div>

        {/* FEATURE 2: INTERACTIVE AGENT SIMULATION */}
        <div className="relative rounded-3xl bg-space-800 border border-slate-700 p-1 md:p-4 overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-brand-DEFAULT to-transparent opacity-50"></div>
          
          <div className="bg-space-900/80 backdrop-blur rounded-2xl flex flex-col md:flex-row overflow-hidden h-[600px]">
            {/* Left: Context Image */}
            <div className="w-full md:w-1/2 bg-black relative border-r border-slate-800">
              <img 
                src="https://images.unsplash.com/photo-1577127450933-429297a7b58a?q=80&w=800&auto=format&fit=crop" 
                alt="Context" 
                className="w-full h-full object-cover opacity-60"
              />
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                 <div className="w-3/4 h-3/4 border border-dashed border-white/30 rounded-lg relative">
                    <div className="absolute top-0 left-0 bg-brand-DEFAULT/20 text-brand-DEFAULT text-xs px-2 py-1">Region of Interest</div>
                 </div>
              </div>
              <div className="absolute bottom-4 left-4 bg-black/80 px-4 py-2 rounded-lg text-xs font-mono text-brand-DEFAULT border border-brand-DEFAULT/30">
                AGENT_MODE: ACTIVE<br/>
                IMG_SOURCE: OPTICAL
              </div>
            </div>

            {/* Right: Chat Interface */}
            <div className="w-full md:w-1/2 flex flex-col">
              <div className="p-4 border-b border-slate-800 flex justify-between items-center bg-space-900">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded bg-brand-DEFAULT flex items-center justify-center">
                    <Icons.Cpu className="w-5 h-5 text-space-900" />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-white">TerraSense-Base</div>
                    <div className="text-xs text-green-400 flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse"></span>
                      Online
                    </div>
                  </div>
                </div>
                <Icons.MessageSquare className="text-slate-600 w-5 h-5" />
              </div>

              <div className="flex-1 p-6 overflow-y-auto space-y-6" ref={scrollRef}>
                {visibleMessages.map((msg) => (
                  <div key={msg.id} className={`flex gap-4 ${msg.role === 'user' ? 'flex-row-reverse' : ''} animate-float`}>
                    <div className={`w-8 h-8 rounded-full flex-shrink-0 flex items-center justify-center ${msg.role === 'user' ? 'bg-slate-700' : 'bg-brand-DEFAULT/10'}`}>
                      {msg.role === 'user' ? <Icons.Eye className="w-4 h-4 text-slate-300" /> : <Icons.Satellite className="w-4 h-4 text-brand-DEFAULT" />}
                    </div>
                    <div className={`max-w-[80%] rounded-2xl p-4 text-sm leading-relaxed ${
                      msg.role === 'user' 
                        ? 'bg-slate-800 text-white rounded-tr-none border border-slate-700' 
                        : 'bg-brand-DEFAULT/5 text-slate-200 rounded-tl-none border border-brand-DEFAULT/10'
                    }`}>
                      {msg.text}
                    </div>
                  </div>
                ))}
                
                {isTyping && (
                  <div className="flex gap-4">
                     <div className="w-8 h-8 rounded-full bg-brand-DEFAULT/10 flex-shrink-0 flex items-center justify-center">
                       <Icons.Satellite className="w-4 h-4 text-brand-DEFAULT" />
                     </div>
                     <div className="bg-brand-DEFAULT/5 rounded-2xl rounded-tl-none p-4 border border-brand-DEFAULT/10 flex gap-1 items-center h-12">
                        <span className="w-1.5 h-1.5 bg-brand-DEFAULT rounded-full animate-bounce"></span>
                        <span className="w-1.5 h-1.5 bg-brand-DEFAULT rounded-full animate-bounce delay-100"></span>
                        <span className="w-1.5 h-1.5 bg-brand-DEFAULT rounded-full animate-bounce delay-200"></span>
                     </div>
                  </div>
                )}
              </div>

              {/* Fake Input Area */}
              <div className="p-4 bg-space-900 border-t border-slate-800">
                <div className="bg-space-800 rounded-xl p-3 border border-slate-700 flex justify-between items-center opacity-50 cursor-not-allowed">
                  <span className="text-slate-500 text-sm">Simulated interaction...</span>
                  <Icons.ArrowRight className="w-4 h-4 text-slate-500" />
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};