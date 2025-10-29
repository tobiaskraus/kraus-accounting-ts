# Kraus Accounting TS

A lightweight, self-hosted web app for managing and visualizing personal and family finances — built from scratch for full data ownership and flexibility.

## 🧭 Overview

This project aims to replace Google Spreadsheets as my main accounting and finance-tracking tool.
The goal is to have a **structured**, **safe**, and **extendable** system that models real-world data better than flat tables.

Unlike typical budgeting apps or spreadsheets, this app is designed around **linked data** (people, costs, incomes, assets, vacations, etc.) with **versioned values** (e.g. price changes over time) and **custom dashboards** for insights.

## 💡 Core Concepts

The app will manage several key data domains:

- **Fixed Costs** – recurring expenses (personal, family, shared), with date ranges for changing amounts.
- **Income** – salary and other regular income, tracking history of raises.
- **Depot / Investments** – snapshots of assets like stocks, ETFs, and crypto.
- **Extra Costs** – one-time or unusual transactions (renovations, gifts, etc.).
- **Vacations** – cost breakdowns per trip.
- **Overview Dashboard** – combined view of income vs. expenses per person and per family.

## 🎯 Goals

- Self-hosted and data-owned (no external cloud dependencies)
- Safe from accidental edits (versioned data)
- Graphs and statistics for trends and summaries
- JSON-based or database-backed storage (import/export friendly)
- Simple UX — fast to record changes, easy for my wife to use too

## 🚀 Future Ideas (nice to have)

- Works on desktop and mobile (long term)
- imports from banks, depots, finanzguru, ...
- Progressive Web App (PWA) or react Native for mobile use

## 🏗️ Planned Tech Stack (tentative)

this is just a rough idea. Maybe there is a better suited or even simpler tech stack

- **Frontend:** React + TypeScript + Vite
- **Backend:** Bun (tRPC or REST API with Elysia)
- **Database:** SQLite or PostgreSQL
- **ORM:** Drizzle ORM
- **Auth:** Basic shared access (local-first, optional login)
- **Charts:** Recharts or Chart.js
- **Hosting:** Self-hosted (maybe GCP or I buy a instance on Hetzner later)

If I split my application into a web client and an API Server, then I would prefer a monorepo.

## 🧰 Development Setup

```bash
# Install all dependencies (for all packages in monorepo)
pnpm install

# Run both frontend and backend dev servers
pnpm run dev

# Or run them individually:
pnpm --filter @kraus-accounting/api dev   # Backend on http://localhost:3001
pnpm --filter @kraus-accounting/web dev   # Frontend on http://localhost:5173
```

The frontend will automatically connect to the backend API via tRPC.

## 📁 Project Structure

```
apps/
  web/     - React + TypeScript + Vite frontend
  api/     - Bun + tRPC backend
packages/
  shared/  - Shared TypeScript types
```

See [docs/tech-decisions.md](docs/tech-decisions.md) for architecture decisions.
