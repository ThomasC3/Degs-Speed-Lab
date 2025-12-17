import React, { useState, useRef, useEffect } from 'react';
import { Send, Bot, User, Loader2, X } from 'lucide-react';
import { GoogleGenAI } from "@google/genai";
import { RACE_SUMMARIES, COMPARISON_DATA } from '../data/raceData';

interface AnalysisChatProps {
  onClose: () => void;
}

export const AnalysisChat: React.FC<AnalysisChatProps> = ({ onClose }) => {
  const [messages, setMessages] = useState<{role: 'user'|'model', text: string}[]>([
    { role: 'model', text: "I'm the Race Strategy AI. Ask me about Deglend's performance, telemetry, or development journey." }
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(scrollToBottom, [messages]);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage = input;
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMessage }]);
    setLoading(true);

    try {
      const apiKey = process.env.API_KEY || '';
      if (!apiKey) {
        throw new Error("API Key not found");
      }
      
      const ai = new GoogleGenAI({ apiKey });
      
      const context = `
        You are a Race Engineer analyzing the performance of driver Deglend Callahan.
        Here is the data:
        
        Race 1 (Nov 11th):
        - Finished 2nd. Best Lap: 27.458s. Avg Lap: 33.144s.
        - Problem: Inconsistency. A single lap (Lap 10) was 54.553s, costing him 25 seconds and the win. Gap to 1st was only 1.219s.
        
        Race 2 (Nov 15th):
        - Finished 1st. Best Lap: 26.804s (New Record). Avg Lap: 37.518s.
        - Analysis: "Paradox of Progress". He got faster but much less consistent. Major errors (59.9s, 56.1s) due to aggression. 
        - Win was forged in chaos.
        
        Race 3 (Nov 20th):
        - Finished 1st (Dominant). Best Lap: 25.519s. Avg Lap: 26.985s.
        - Analysis: Speed meets Consistency. 9 laps within 1.16s window. 
        - Convergence of potential and performance.
        
        Key Lessons:
        1. Focus on Peak Speed First (Unlock potential).
        2. Eliminate Major Mistakes (consistency starts by removing outliers).
        3. Consistency is the Final Step (replicate performance).
        
        Answer questions briefly and professionally, like a high-performance sports analyst.
      `;

      const response = await ai.models.generateContent({
        model: 'gemini-2.5-flash',
        contents: [
            { role: 'user', parts: [{ text: context + "\n\nUser Question: " + userMessage }] }
        ]
      });

      const responseText = response.text || "I couldn't analyze that right now.";
      setMessages(prev => [...prev, { role: 'model', text: responseText }]);

    } catch (error) {
      console.error(error);
      setMessages(prev => [...prev, { role: 'model', text: "Telemetry link lost. Please check API configuration." }]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed bottom-4 right-4 w-96 h-[500px] bg-black/90 border border-cyan-500/30 rounded-lg shadow-2xl shadow-cyan-500/20 flex flex-col backdrop-blur-md z-50 animate-in slide-in-from-bottom-10 fade-in duration-300">
      {/* Header */}
      <div className="p-4 border-b border-white/10 flex justify-between items-center bg-cyan-950/30 rounded-t-lg">
        <div className="flex items-center gap-2">
          <Bot className="w-5 h-5 text-cyan-400" />
          <h3 className="font-['Teko'] text-xl font-bold tracking-wide text-cyan-100">RACE STRATEGY AI</h3>
        </div>
        <button onClick={onClose} className="text-gray-400 hover:text-white transition-colors">
          <X className="w-5 h-5" />
        </button>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4 font-mono text-sm">
        {messages.map((msg, idx) => (
          <div key={idx} className={`flex gap-3 ${msg.role === 'user' ? 'flex-row-reverse' : 'flex-row'}`}>
            <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${msg.role === 'user' ? 'bg-purple-900/50 text-purple-200' : 'bg-cyan-900/50 text-cyan-200'}`}>
              {msg.role === 'user' ? <User size={14} /> : <Bot size={14} />}
            </div>
            <div className={`p-3 rounded-lg max-w-[80%] ${msg.role === 'user' ? 'bg-purple-900/20 text-purple-100 border border-purple-500/20' : 'bg-cyan-900/20 text-cyan-100 border border-cyan-500/20'}`}>
              {msg.text}
            </div>
          </div>
        ))}
        {loading && (
          <div className="flex gap-3">
             <div className="w-8 h-8 rounded-full bg-cyan-900/50 flex items-center justify-center flex-shrink-0">
                <Bot size={14} className="text-cyan-200" />
             </div>
             <div className="p-3 rounded-lg bg-cyan-900/20 border border-cyan-500/20 flex items-center gap-2">
                <Loader2 className="w-4 h-4 animate-spin text-cyan-400" />
                <span className="text-cyan-400 text-xs">Processing telemetry...</span>
             </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Input */}
      <div className="p-4 border-t border-white/10 bg-black/40 rounded-b-lg">
        <div className="flex gap-2">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSend()}
            placeholder="Ask about lap 10..."
            className="flex-1 bg-white/5 border border-white/10 rounded px-3 py-2 text-sm text-white focus:outline-none focus:border-cyan-500/50 placeholder-white/20"
          />
          <button 
            onClick={handleSend}
            disabled={loading}
            className="bg-cyan-600 hover:bg-cyan-500 text-white rounded px-3 py-2 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <Send size={16} />
          </button>
        </div>
      </div>
    </div>
  );
};