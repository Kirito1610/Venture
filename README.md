🚀 AI Vibe Growth — Marketing Intelligence Dashboard

Frontend Assignment Solution (Next.js + TypeScript + Tailwind CSS)

📌 Overview

This project implements a Marketing Intelligence Dashboard along with a Prompt Playground simulation tab.
The aim is to demonstrate the ability to build modern, data-driven UIs using React/Next.js, manage state efficiently, work with mock data, and simulate prompt-driven interactions through lightweight intent parsing.

The solution includes:

A responsive dashboard for viewing campaign analytics

A prompt-based command interface for filtering and highlighting campaign insights

Basic SEO setup (meta tags, OpenGraph/Twitter card)

Clean, accessible UI built with Tailwind CSS

Static mock JSON for campaign data

Automatic redirect from / → /dashboard for improved UX

🛠️ Tech Stack

Next.js (App Router) — Framework

TypeScript — Type-safe components and data

Tailwind CSS — Utility-first styling

Recharts — Small performance chart

Local state & simple logic — Filters + Prompt intent parsing

✔️ Features Implemented
1. Marketing Dashboard

Displays mock ad campaign data (static JSON)

Each campaign includes:

Name

Impressions, Clicks, CTR, Conversions

Status (Active / Paused)

Performance chart built using Recharts

Basic filters:

Filter by status

Filter by date range

Fully responsive layout (mobile → desktop)

Clean semantic structure with headings and labeled UI elements

2. Prompt Playground (AI Simulation Tab)

Input box for user prompts

Lightweight keyword-based intent parser

Supported commands (examples):

“Show top campaigns by CTR”

“Highlight best performing campaign”

“List paused campaigns”

Dynamic UI updates based on interpreted intent (no real NLP/AI required)

3. SEO Setup

Basic SEO improvements:

Title + description meta tags

OpenGraph + Twitter Card tags

Semantic HTML structure

Homepage auto-redirects to /dashboard for cleaner entry point

⚠️ Note: SEO is not dynamic due to time limitations, but a functional baseline is implemented.

📁 Project Structure
project/
│── app/
│   ├── dashboard/
│   ├── playground/
│   ├── layout.tsx
│   ├── page.tsx (redirect)
│── components/
│── data/
│── hooks/
│── utils/
│── public/
│── styles/

🚀 Getting Started
1. Clone the repo
[git clone https://github.com/your-username/ai-vibe-growth.git](https://github.com/Kirito1610/Venture.git)
cd my-app

2. Install dependencies
npm install

3. Run the development server
npm run dev

4. Open in browser
http://localhost:3000

🧱 Architecture Summary

Next.js App Router used for routing and layouts

Campaign data resides as static JSON (mock backend)

State logic handled locally inside components for simplicity

Filters implemented using pure functions

Prompt interpreter uses keyword matching + mapping rules

Recharts provides visual insight into one campaign's trend

Tailwind CSS ensures a responsive and accessible UI
