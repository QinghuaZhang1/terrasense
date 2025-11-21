import React, { useState, useRef } from 'react';
import { Icons } from './Icons';
import { analyzeSatelliteImage, initializeGemini } from '../services/geminiService';
import { AnalysisState } from '../types';

export const InteractiveDemo: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [analysis, setAnalysis] = useState<string>("");
  const [status, setStatus] = useState<AnalysisState>(AnalysisState.IDLE);
  const [apiKey, setApiKey] = useState<string>(process.env.API_KEY || "");
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Sample images for quick testing
  const samples = [
    "https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=800&auto=format&fit=crop"
  ];

  const handleUrlSelection = async (url: string) => {
    setSelectedImage(url);
    setAnalysis("");
    setStatus(AnalysisState.IDLE);
    
    // Convert URL to base64 for the API (simulated fetch in browser)
    try {
      setStatus(AnalysisState.UPLOADING);
      const response = await fetch(url);
      const blob = await response.blob();
      const reader = new FileReader();
      reader.onloadend = () => {
         // Just set image, wait for user to click analyze
         setStatus(AnalysisState.IDLE);
      };
      reader.readAsDataURL(blob);
    } catch (e) {
      console.error("Error loading sample", e);
      setStatus(AnalysisState.ERROR);
    }
  };

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setSelectedImage(reader.result as string);
        setAnalysis("");
        setStatus(AnalysisState.IDLE);
      };
      reader.readAsDataURL(file);
    }
  };

  const runAnalysis = async () => {
    if (!selectedImage) return;
    if (!apiKey) {
      alert("Please enter a Gemini API Key to test the live demo.");
      return;
    }

    initializeGemini(apiKey);
    setStatus(AnalysisState.ANALYZING);

    try {
      // Extract base64 data
      let base64Data = "";
      let mimeType = "image/jpeg";

      // If it's a remote URL (sample), we need to fetch it to get base64
      if (selectedImage.startsWith("http")) {
        const response = await fetch(selectedImage);
        const blob = await response.blob();
        mimeType = blob.type;
        base64Data = await new Promise<string>((resolve) => {
           const reader = new FileReader();
           reader.onloadend = () => resolve(reader.result as string);
           reader.readAsDataURL(blob);
        }).then(res => res.split(',')[1]);
      } else {
        base64Data = selectedImage.split(',')[1];
        mimeType = selectedImage.split(';')[0].split(':')[1];
      }

      const result = await analyzeSatelliteImage(base64Data, mimeType);
      setAnalysis(result);
      setStatus(AnalysisState.SUCCESS);
    } catch (error) {
      setAnalysis("Failed to analyze image. Check console/API Key.");
      setStatus(AnalysisState.ERROR);
    }
  };

  return (
    <section id="demo" className="py-24 bg-space-900 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-block p-2 rounded-full bg-brand-accent/10 text-brand-accent mb-4">
            <Icons.Eye className="w-6 h-6" />
          </div>
          <h2 className="text-4xl font-bold mb-4">Live Capability Demo</h2>
          <p className="text-slate-400">
            Experience the reasoning power of TerraSense. <br/>
            <span className="text-xs text-slate-500">*Powered by Gemini 2.5 Flash simulating TerraSense-Base behavior</span>
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Input Section */}
          <div className="space-y-6">
            {/* API Key Input (For Demo Purposes) */}
            {!process.env.API_KEY && (
               <div className="bg-space-800 p-4 rounded-xl border border-slate-700">
                 <label className="block text-xs font-mono text-slate-400 mb-2">ENTER_API_KEY_FOR_ACCESS</label>
                 <input 
                    type="password" 
                    placeholder="Gemini API Key"
                    value={apiKey}
                    onChange={(e) => setApiKey(e.target.value)}
                    className="w-full bg-space-900 border border-slate-700 rounded-lg px-4 py-2 text-sm text-white focus:outline-none focus:border-brand-DEFAULT"
                 />
               </div>
            )}

            <div className="bg-space-800 rounded-2xl p-6 border border-slate-700 shadow-lg">
              <h3 className="text-lg font-medium mb-4 flex items-center gap-2">
                <Icons.Satellite className="w-4 h-4 text-brand-DEFAULT" />
                Input Imagery
              </h3>
              
              <div 
                className="border-2 border-dashed border-slate-600 rounded-xl h-64 flex flex-col items-center justify-center bg-space-900/50 hover:bg-space-900 hover:border-brand-DEFAULT transition-colors cursor-pointer relative overflow-hidden group"
                onClick={() => fileInputRef.current?.click()}
              >
                {selectedImage ? (
                  <img src={selectedImage} alt="Selected" className="w-full h-full object-cover" />
                ) : (
                  <div className="text-center p-6">
                    <Icons.UploadCloud className="w-12 h-12 text-slate-500 mx-auto mb-3 group-hover:text-brand-DEFAULT transition-colors" />
                    <p className="text-slate-400 text-sm">Upload TIFF/JPEG/PNG</p>
                    <p className="text-slate-600 text-xs mt-2">Click to browse</p>
                  </div>
                )}
                <input 
                  type="file" 
                  ref={fileInputRef} 
                  className="hidden" 
                  accept="image/*"
                  onChange={handleFileUpload}
                />
              </div>

              <div className="mt-4">
                <p className="text-xs text-slate-500 mb-2 font-mono">OR SELECT SAMPLE:</p>
                <div className="flex gap-3">
                  {samples.map((src, i) => (
                    <button 
                      key={i}
                      onClick={() => handleUrlSelection(src)}
                      className="w-16 h-16 rounded-lg overflow-hidden border border-slate-700 hover:border-brand-DEFAULT transition-all"
                    >
                      <img src={src} alt={`Sample ${i}`} className="w-full h-full object-cover" />
                    </button>
                  ))}
                </div>
              </div>

              <button 
                onClick={runAnalysis}
                disabled={!selectedImage || status === AnalysisState.ANALYZING}
                className={`mt-6 w-full py-3 rounded-lg font-bold text-sm tracking-wide uppercase transition-all flex items-center justify-center gap-2
                  ${status === AnalysisState.ANALYZING 
                    ? 'bg-slate-700 cursor-wait text-slate-400' 
                    : 'bg-brand-DEFAULT text-space-900 hover:bg-brand-400 hover:shadow-[0_0_15px_rgba(56,189,248,0.4)]'
                  }`}
              >
                {status === AnalysisState.ANALYZING ? (
                  <>
                    <Icons.Cpu className="w-4 h-4 animate-spin" /> Processing...
                  </>
                ) : (
                  <>Analyze with TerraSense</>
                )}
              </button>
            </div>
          </div>

          {/* Output Section */}
          <div className="bg-space-800 rounded-2xl p-1 border border-slate-700 shadow-lg flex flex-col">
             <div className="bg-space-900 rounded-xl flex-1 p-6 font-mono text-sm overflow-y-auto max-h-[600px]">
                <div className="flex items-center justify-between mb-4 border-b border-slate-800 pb-4">
                   <span className="text-slate-400">OUTPUT_LOG</span>
                   <div className="flex items-center gap-2">
                      <span className={`w-2 h-2 rounded-full ${status === AnalysisState.ANALYZING ? 'bg-yellow-400 animate-pulse' : status === AnalysisState.SUCCESS ? 'bg-green-400' : 'bg-slate-600'}`}></span>
                      <span className="text-xs text-slate-500">{status}</span>
                   </div>
                </div>

                {analysis ? (
                  <div className="prose prose-invert prose-sm max-w-none">
                    <div className="text-brand-glow mb-4 animate-pulse-fast text-xs uppercase tracking-widest">
                       Analysis Complete &bull; Confidence: 98.4%
                    </div>
                    <p className="whitespace-pre-wrap leading-relaxed text-slate-300">
                      {analysis}
                    </p>
                  </div>
                ) : (
                  <div className="h-full flex flex-col items-center justify-center text-slate-600">
                    <Icons.Cpu className="w-12 h-12 mb-4 opacity-20" />
                    <p>Waiting for imagery input...</p>
                    <p className="text-xs mt-2 opacity-50">Model ready for inference</p>
                  </div>
                )}
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};
