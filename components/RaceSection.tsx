import React from 'react';
import { LapChart } from './LapChart';
import { RaceSummary, LapData } from '../types';
import { Timer, AlertTriangle, Flag, ArrowRight } from 'lucide-react';

interface RaceSectionProps {
  summary: RaceSummary;
  laps: LapData[];
  isReversed?: boolean;
}

export const RaceSection: React.FC<RaceSectionProps> = ({ summary, laps, isReversed = false }) => {
  return (
    <div className="min-h-screen w-full flex items-center justify-center py-20 px-4 md:px-20 relative border-t border-white/5 bg-black/50">
      <div className={`max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center ${isReversed ? 'lg:grid-flow-row-dense' : ''}`}>
        
        {/* Narrative Side */}
        <div className={`space-y-8 ${isReversed ? 'lg:col-start-2' : ''}`}>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 text-xs font-mono uppercase tracking-widest text-gray-400">
            <span>{summary.date}</span>
            <span className="w-1 h-1 bg-white/50 rounded-full"></span>
            <span>{summary.position} Place</span>
          </div>
          
          <h2 className="text-6xl md:text-7xl font-bold uppercase tracking-tight text-white leading-none">
            {summary.title}
          </h2>
          
          <div className="grid grid-cols-2 gap-6 border-l-2 border-white/10 pl-6">
            <div>
              <p className="text-gray-500 text-sm uppercase tracking-wider font-bold mb-1">Best Lap</p>
              <p className="text-4xl font-['Teko'] text-white" style={{color: summary.color}}>{summary.bestLap.toFixed(3)}s</p>
            </div>
            <div>
              <p className="text-gray-500 text-sm uppercase tracking-wider font-bold mb-1">Avg Lap</p>
              <p className="text-4xl font-['Teko'] text-white">{summary.avgLap.toFixed(3)}s</p>
            </div>
          </div>
          
          <p className="text-xl text-gray-300 leading-relaxed font-light border-l-2 border-transparent pl-6">
            {summary.description}
          </p>

          <div className="bg-gray-900/50 p-6 rounded-lg border border-white/5 flex gap-4 items-start">
             <div className="bg-white/10 p-2 rounded text-white mt-1">
                {summary.id === 1 && <Timer size={20} />}
                {summary.id === 2 && <AlertTriangle size={20} className="text-red-500" />}
                {summary.id === 3 && <Flag size={20} className="text-green-500" />}
             </div>
             <div>
               <h4 className="text-sm uppercase tracking-widest text-gray-500 font-bold mb-1">Key Lesson</h4>
               <p className="text-white text-lg font-semibold">{summary.lesson}</p>
             </div>
          </div>
        </div>

        {/* Visual Side */}
        <div className={`relative ${isReversed ? 'lg:col-start-1' : ''}`}>
          <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 blur-2xl rounded-full opacity-50"></div>
          <div className="relative bg-black/80 p-8 rounded-2xl border border-white/10 backdrop-blur-sm shadow-2xl">
             <div className="flex justify-between items-end mb-4 border-b border-white/10 pb-4">
               <h3 className="font-['Teko'] text-3xl text-white">TELEMETRY DATA</h3>
               <span className="font-mono text-xs text-cyan-500 animate-pulse">LIVE REPLAY</span>
             </div>
             
             <LapChart data={laps} color={summary.color} avgLine={summary.avgLap} />

             {/* Stat highlight */}
             <div className="mt-6 flex justify-between items-center text-sm font-mono text-gray-400">
               <span>GAP TO LEADER: <span className="text-white">{summary.gapToFirst}</span></span>
               <span className="flex items-center gap-1 text-xs">
                 ANALYSIS <ArrowRight size={12}/>
               </span>
             </div>
          </div>
        </div>

      </div>
    </div>
  );
};