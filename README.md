<div align="center">
<img width="1200" height="475" alt="GHBanner" src="Degs Speed Lab.png" />
</div>

# Deg's Speed Lab

Deg's Speed Lab is a mobile-first racing intelligence lab designed for Deglend Callahan. The app captures lap telemetry, race summaries, and AI-assisted coaching to create a living journal of Deglend's pursuit of speed and consistency. 

Every screen exists to answer a single question: *how do we turn raw racing data into faster laps tomorrow?*

## Purpose

- **Track the journey:** Turn every race weekend into a structured dataset of lessons, setups, and breakthroughs.
- **Find patterns faster:** Use visual lap overlays and trend charts to surface where time is gained or lost.
- **Coach in the moment:** Tap into the embedded Race Engineer chat to translate insights into tactical changes.

## Product Guide

| Area | Description |
| --- | --- |
| **Hero & Mission Control** | A high-contrast hero section introduces the current focus of the speed lab, highlights Degelend's mission, and anchors quick controls for jumping into detailed sessions. |
| **Race Modules** | Each race renders as a carded module that pairs a narrative summary with lap-by-lap deltas. Swipe through rounds, flip layouts (normal vs. reversed) for visual variety, and follow contextual stats like total laps, average pace, and variance. |
| **Lap Explorer** | Interactive LapChart components let Degelend scrub individual laps, compare ideal vs. actual pace, and inspect spike moments (traffic, mistakes, grip changes). |
| **Roadmap Tiles** | The Potential → Correction → Dominance tiles outline the coaching cadence. They clarify what the current training block is optimizing so notes stay aligned with season goals. |
| **Comparison Lab** | The ComparisonChart overlays different events to show convergence trends. Degelend can immediately see whether later races tightened variance or if average pace drifted. |
| **Race Engineer Chat** | A floating CTA launches the AnalysisChat modal. It behaves like an on-demand engineer, summarizing sessions, answering "what should I try next?" questions, and logging action items where the data lives. |
| **Footer & Attribution** | Lightweight footer keeps ownership clear and reinforces that this is Degelend's personal performance lab. |

## Run Locally

**Prerequisites:** Node.js

1. Install dependencies: `npm install`
2. Set `GEMINI_API_KEY` in `.env.local` to your Gemini API key
3. Start the dev server: `npm run dev`

View the AI Studio deployment: https://ai.studio/apps/drive/18viJUBVmfmRM64Av8mB-JJ1C9ohHUVGi
