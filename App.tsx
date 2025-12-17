import React, { useState } from 'react';
import { Hero } from './components/Hero';
import { RaceSection } from './components/RaceSection';
import { ComparisonChart } from './components/ComparisonChart';
import { AnalysisChat } from './components/AnalysisChat';
import { RACE_SUMMARIES, RACE_1_LAPS, RACE_2_LAPS, RACE_3_LAPS } from './data/raceData';
import { Bot, Play } from 'lucide-react';

const App: React.FC = () => {
  const [showChat, setShowChat] = useState(false);

  return (
    <div className="w-full bg-black text-white selection:bg-cyan-500 selection:text-black">
      <Hero />
      
      <RaceSection summary={RACE_SUMMARIES[0]} laps={RACE_1_LAPS} />
      <RaceSection summary={RACE_SUMMARIES[1]} laps={RACE_2_LAPS} isReversed={true} />
      <RaceSection summary={RACE_SUMMARIES[2]} laps={RACE_3_LAPS} />
      
      {/* Conclusion Section */}
      <div className="min-h-screen py-20 px-4 flex flex-col items-center justify-center bg-gradient-to-b from-black to-slate-900 border-t border-white/10">
        <div className="max-w-6xl w-full text-center mb-16">
           <h2 className="text-6xl md:text-8xl font-bold uppercase tracking-tighter mb-4">
             The <span className="text-cyan-500">Roadmap</span>
           </h2>
           <p className="text-xl text-gray-400 max-w-2xl mx-auto">
             Visualizing the journey: The convergence of speed and consistency.
           </p>
        </div>

        <div className="w-full max-w-5xl">
          <ComparisonChart />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20 max-w-6xl w-full">
           <div className="p-8 border border-white/10 rounded-xl bg-white/5 hover:bg-white/10 transition-colors">
              <span className="text-6xl font-['Teko'] text-cyan-800/50 block mb-2">01</span>
              <h3 className="text-2xl font-bold text-white mb-2">Potential</h3>
              <p className="text-gray-400 text-sm leading-relaxed">Push limits to find speed. Accept initial inconsistency as the cost of discovery.</p>
           </div>
           <div className="p-8 border border-white/10 rounded-xl bg-white/5 hover:bg-white/10 transition-colors">
              <span className="text-6xl font-['Teko'] text-red-800/50 block mb-2">02</span>
              <h3 className="text-2xl font-bold text-white mb-2">Correction</h3>
              <p className="text-gray-400 text-sm leading-relaxed">Identify major errors. Eliminate the outliers that destroy average performance.</p>
           </div>
           <div className="p-8 border border-white/10 rounded-xl bg-white/5 hover:bg-white/10 transition-colors">
              <span className="text-6xl font-['Teko'] text-green-800/50 block mb-2">03</span>
              <h3 className="text-2xl font-bold text-white mb-2">Dominance</h3>
              <p className="text-gray-400 text-sm leading-relaxed">Convergence. Make every single lap a reflection of your true potential.</p>
           </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="py-10 border-t border-white/10 text-center text-gray-600 text-sm uppercase tracking-widest">
        <p>Deglend Callahan Racing Analysis © 2024</p>
      </footer>

      {/* Floating Chat Button */}
      {!showChat && (
        <button 
          onClick={() => setShowChat(true)}
          className="fixed bottom-8 right-8 bg-cyan-600 hover:bg-cyan-500 text-white p-4 rounded-full shadow-lg shadow-cyan-500/30 transition-all hover:scale-110 z-40 group"
        >
          <Bot size={24} />
          <span className="absolute right-full mr-4 top-1/2 -translate-y-1/2 bg-black/80 px-3 py-1 rounded text-xs whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none border border-white/10">
            Ask the Race Engineer
          </span>
        </button>
      )}

      {/* Chat Interface */}
      {showChat && <AnalysisChat onClose={() => setShowChat(false)} />}
    </div>
  );
};

export default App;