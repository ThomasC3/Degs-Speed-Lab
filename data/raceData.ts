import { LapData, RaceSummary } from '../types';

export const RACE_SUMMARIES: RaceSummary[] = [
  {
    id: 1,
    date: "Nov 11th",
    title: "The Heartbreak",
    position: "2nd",
    bestLap: 27.458,
    avgLap: 33.144,
    gapToFirst: "1.219s",
    description: "Raw speed hindered by a single, costly error. The potential was there, but inconsistency destroyed the average.",
    lesson: "Focus on Peak Speed First",
    color: "#3b82f6" // Blue
  },
  {
    id: 2,
    date: "Nov 15th",
    title: "The Chaos",
    position: "1st",
    bestLap: 26.804,
    avgLap: 37.518,
    gapToFirst: "Winner",
    description: "A win forged in chaos. Faster peak speed, but race-long consistency suffered. Aggressive driving led to errors.",
    lesson: "Eliminate Major Mistakes",
    color: "#ef4444" // Red
  },
  {
    id: 3,
    date: "Nov 20th",
    title: "The Dominance",
    position: "1st",
    bestLap: 25.519,
    avgLap: 26.985,
    gapToFirst: "Dominant",
    description: "Speed meets consistency. 9 laps within a 1.16s window. The transformation is complete.",
    lesson: "Consistency is the Final Step",
    color: "#22c55e" // Green
  }
];

// Reconstructed lap data based on charts and text
export const RACE_1_LAPS: LapData[] = [
  { lap: 1, time: 35.014, raceId: 1 },
  { lap: 2, time: 39.570, raceId: 1 },
  { lap: 3, time: 35.266, raceId: 1 },
  { lap: 4, time: 34.382, raceId: 1 },
  { lap: 5, time: 29.814, raceId: 1 },
  { lap: 6, time: 28.442, raceId: 1 },
  { lap: 7, time: 27.764, raceId: 1 },
  { lap: 8, time: 28.426, raceId: 1 },
  { lap: 9, time: 29.113, raceId: 1 },
  { lap: 10, time: 54.553, label: "The Error", raceId: 1 }, // The costliest mistake
  { lap: 11, time: 27.458, label: "Best Lap", raceId: 1 },
  { lap: 12, time: 27.936, raceId: 1 },
];

export const RACE_2_LAPS: LapData[] = [
  { lap: 1, time: 27.458, raceId: 2 },
  { lap: 2, time: 27.700, raceId: 2 },
  { lap: 3, time: 59.970, label: "Major Error", raceId: 2 },
  { lap: 4, time: 46.030, raceId: 2 },
  { lap: 5, time: 27.458, raceId: 2 },
  { lap: 6, time: 27.700, raceId: 2 },
  { lap: 7, time: 56.107, label: "Major Error", raceId: 2 },
  { lap: 8, time: 43.096, raceId: 2 },
  { lap: 9, time: 27.300, raceId: 2 },
  { lap: 10, time: 27.830, raceId: 2 },
  { lap: 11, time: 27.700, raceId: 2 },
  { lap: 12, time: 26.804, label: "New Record", raceId: 2 },
];

export const RACE_3_LAPS: LapData[] = [
  { lap: 1, time: 32.208, raceId: 3 }, // Start
  { lap: 2, time: 27.718, raceId: 3 },
  { lap: 3, time: 28.297, raceId: 3 },
  { lap: 4, time: 26.035, raceId: 3 },
  { lap: 5, time: 26.171, raceId: 3 },
  { lap: 6, time: 25.824, raceId: 3 },
  { lap: 7, time: 25.519, label: "Best Lap", raceId: 3 },
  { lap: 8, time: 26.189, raceId: 3 },
  { lap: 9, time: 26.386, raceId: 3 },
  { lap: 10, time: 26.541, raceId: 3 },
  { lap: 11, time: 26.254, raceId: 3 },
  { lap: 12, time: 26.680, raceId: 3 },
];

export const ALL_LAPS = [...RACE_1_LAPS, ...RACE_2_LAPS, ...RACE_3_LAPS];

export const COMPARISON_DATA = [
  { race: 'Race 1', best: 27.458, avg: 33.144 },
  { race: 'Race 2', best: 26.804, avg: 37.518 },
  { race: 'Race 3', best: 25.519, avg: 26.985 },
];