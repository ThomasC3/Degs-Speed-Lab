export interface LapData {
  lap: number;
  time: number;
  label?: string; // e.g., "Best Lap", "Crash"
  raceId: number;
}

export interface RaceSummary {
  id: number;
  date: string;
  title: string;
  position: string;
  bestLap: number;
  avgLap: number;
  gapToFirst: string | number;
  description: string;
  lesson: string;
  color: string;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
  isError?: boolean;
}