import React from 'react';
import { ChevronDown, Trophy, Timer, TrendingUp } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <div className="relative h-screen w-full flex flex-col items-center justify-center overflow-hidden bg-black">
      {/* Background Visuals */}
      <div className="absolute inset-0 z-0 opacity-30">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-slate-900 via-black to-black"></div>
        {/* Animated track lines hint */}
        <svg className="absolute w-full h-full opacity-20" preserveAspectRatio="none">
             <path d="M0,500 Q400,300 800,500 T1600,500" fill="none" stroke="cyan" strokeWidth="2" className="animate-pulse" />
        </svg>
      </div>

      <div className="z-10 text-center px-4 max-w-5xl">
        <div className="mb-6 flex justify-center gap-4 text-cyan-500 font-mono text-sm tracking-widest opacity-80 animate-in fade-in slide-in-from-top-4 duration-1000">
           <span className="flex items-center gap-1"><Timer size={14}/> DATA DRIVEN</span>
           <span className="flex items-center gap-1"><TrendingUp size={14}/> EVOLUTION</span>
           <span className="flex items-center gap-1"><Trophy size={14}/> VICTORY</span>
        </div>
        
        <h1 className="text-7xl md:text-9xl font-bold uppercase tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white to-slate-500 mb-2 drop-shadow-2xl animate-in zoom-in duration-1000">
          From Contender
        </h1>
        <h1 className="text-7xl md:text-9xl font-bold uppercase tracking-tighter text-white mb-8 animate-in zoom-in duration-1000 delay-300">
          To <span className="text-cyan-500 neon-glow">Champion</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-400 max-w-2xl mx-auto leading-relaxed font-light animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-500">
          The Deglend Callahan Case Study. <br/>
          <span className="text-cyan-400/80 text-lg">A Racer's Data-Driven Road to Victory.</span>
        </p>
      </div>

      <div className="absolute bottom-10 animate-bounce z-10">
        <ChevronDown className="text-cyan-500 w-10 h-10 opacity-70" />
      </div>
    </div>
  );
};