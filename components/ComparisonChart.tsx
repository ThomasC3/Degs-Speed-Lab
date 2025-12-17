import React from 'react';
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend
} from 'recharts';
import { COMPARISON_DATA } from '../data/raceData';

export const ComparisonChart: React.FC = () => {
  return (
    <div className="w-full h-[400px] mt-8 bg-black/40 rounded-xl border border-white/10 p-6 relative overflow-hidden">
        {/* Background Grid Decoration */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:20px_20px]" />
        
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={COMPARISON_DATA} margin={{ top: 20, right: 30, left: 0, bottom: 0 }}>
          <defs>
            <linearGradient id="colorBest" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.3}/>
              <stop offset="95%" stopColor="#3b82f6" stopOpacity={0}/>
            </linearGradient>
            <linearGradient id="colorAvg" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#22c55e" stopOpacity={0.3}/>
              <stop offset="95%" stopColor="#22c55e" stopOpacity={0}/>
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" stroke="#ffffff10" vertical={false} />
          <XAxis 
            dataKey="race" 
            stroke="#9ca3af" 
            tick={{ fill: '#e5e7eb', fontSize: 14, fontFamily: 'Teko' }}
            axisLine={false}
            tickLine={false}
          />
          <YAxis 
            stroke="#9ca3af" 
            tick={{ fill: '#6b7280', fontSize: 12 }} 
            axisLine={false}
            tickLine={false}
            domain={[20, 45]}
          />
          <Tooltip 
            contentStyle={{ backgroundColor: '#000', borderColor: '#333' }}
            itemStyle={{ color: '#fff', fontFamily: 'monospace' }}
          />
          <Legend wrapperStyle={{ paddingTop: '20px' }}/>
          
          <Area 
            type="monotone" 
            dataKey="best" 
            name="Best Lap Time"
            stroke="#3b82f6" 
            strokeWidth={4}
            fillOpacity={1} 
            fill="url(#colorBest)" 
            animationDuration={3000}
          />
          <Area 
            type="monotone" 
            dataKey="avg" 
            name="Average Lap Time"
            stroke="#22c55e" 
            strokeWidth={4}
            fillOpacity={1} 
            fill="url(#colorAvg)" 
            animationDuration={3000}
            animationBegin={1000}
          />
        </AreaChart>
      </ResponsiveContainer>
      
      {/* Annotations Overlay */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center pointer-events-none">
         <div className="bg-black/60 backdrop-blur-md px-4 py-2 rounded border border-white/20 animate-pulse">
            <span className="text-xs uppercase tracking-widest text-cyan-400 font-bold block">The Divergence</span>
            <span className="text-[10px] text-gray-400">Race 2: Speed ↑ Consistency ↓</span>
         </div>
      </div>
      <div className="absolute top-[20%] right-[10%] pointer-events-none">
         <div className="bg-black/60 backdrop-blur-md px-4 py-2 rounded border border-green-500/50">
            <span className="text-xs uppercase tracking-widest text-green-400 font-bold block">The Convergence</span>
            <span className="text-[10px] text-gray-400">Dominance Achieved</span>
         </div>
      </div>
    </div>
  );
};