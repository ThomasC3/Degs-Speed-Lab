import React from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  ReferenceLine,
  Label
} from 'recharts';
import { LapData } from '../types';

interface LapChartProps {
  data: LapData[];
  color: string;
  avgLine?: number;
}

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-black/90 border border-white/20 p-3 rounded shadow-xl backdrop-blur-sm">
        <p className="font-['Teko'] text-lg text-white mb-1">LAP {label}</p>
        <p className="text-sm font-mono text-cyan-400">
          TIME: <span className="font-bold text-white">{payload[0].value.toFixed(3)}s</span>
        </p>
        {payload[0].payload.label && (
           <p className="text-xs text-yellow-500 mt-1 uppercase font-bold tracking-wider border-t border-white/10 pt-1">
             {payload[0].payload.label}
           </p>
        )}
      </div>
    );
  }
  return null;
};

export const LapChart: React.FC<LapChartProps> = ({ data, color, avgLine }) => {
  return (
    <div className="w-full h-[300px] mt-8 bg-white/5 rounded-xl border border-white/10 p-4 shadow-inner">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data} margin={{ top: 20, right: 30, left: 0, bottom: 0 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="#ffffff10" vertical={false} />
          <XAxis 
            dataKey="lap" 
            stroke="#9ca3af" 
            tick={{ fill: '#6b7280', fontSize: 12 }} 
            axisLine={false}
            tickLine={false}
          />
          <YAxis 
            stroke="#9ca3af" 
            tick={{ fill: '#6b7280', fontSize: 12 }} 
            domain={['auto', 'auto']}
            axisLine={false}
            tickLine={false}
            width={40}
          />
          <Tooltip content={<CustomTooltip />} cursor={{ stroke: 'rgba(255,255,255,0.2)', strokeWidth: 2 }} />
          {avgLine && (
            <ReferenceLine y={avgLine} stroke="#9ca3af" strokeDasharray="3 3" opacity={0.5}>
              <Label value="AVG" position="left" fill="#6b7280" fontSize={10} />
            </ReferenceLine>
          )}
          <Line
            type="monotone"
            dataKey="time"
            stroke={color}
            strokeWidth={3}
            dot={{ fill: '#171717', stroke: color, strokeWidth: 2, r: 4 }}
            activeDot={{ r: 6, fill: '#fff' }}
            animationDuration={2000}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};