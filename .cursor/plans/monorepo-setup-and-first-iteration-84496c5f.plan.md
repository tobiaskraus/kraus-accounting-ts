<!-- 84496c5f-bc33-451b-8e10-c610be065d4f 22667cc3-b699-4927-99db-bae0ca8bab97 -->

# Initial Setup and First Feature Iteration

## Tech Decisions (documented in docs/tech-decisions.md)

1. **Project Structure**: Monorepo from the start (apps/web, apps/api, packages/shared)
2. **Data Persistence**: In-memory state for first iteration (add persistence later)
3. **API Layer**: tRPC for end-to-end type safety

## Setup Tasks

### 1. Monorepo Structure

- Initialize pnpm workspace
- Create `apps/web` (React + TypeScript + Vite)
- Create `apps/api` (Bun + tRPC)
- Create `packages/shared` (shared types)

### 2. Frontend Setup (apps/web)

- React + TypeScript + Vite
- react-router for routing
- Basic app structure with layout
- Connect to tRPC client (even if backend is minimal)

### 3. Backend Setup (apps/api)

- Bun runtime
- tRPC router setup
- Minimal fixed costs router with in-memory storage
- CORS configuration for local dev

### 4. Shared Package (packages/shared)

- TypeScript types for FixedCost and Period
- tRPC router exports

### 5. First Feature: Fixed Costs List

- Simple list view of fixed costs (hardcoded/mock data initially)
- Basic filtering (by person, by date)
- No detail page yet - just the list

### 6. Documentation

- Create `docs/tech-decisions.md` with architecture decisions
- Update project README with setup instructions

## First Iteration Scope

**What's included:**

- Monorepo structure
- Basic fixed costs list view with mock data
- tRPC connection (backend serves mock data)
- Simple filtering UI

**What's NOT included (future iterations):**

- Detail pages
- Period management UI
- Statistics/charts
- Database persistence
- Form validation

This keeps the first iteration minimal and testable while establishing the foundation correctly.

### To-dos

- [ ] Set up pnpm workspace with apps/web, apps/api, packages/shared structure
- [ ] Create packages/shared with FixedCost and Period TypeScript types
- [ ] Set up Bun backend with tRPC router, minimal fixed costs endpoint with mock data
- [ ] Set up React + TypeScript + Vite in apps/web with tRPC client and react-router
- [ ] Create fixed costs list view with basic filtering (person, date)
- [ ] Create docs/tech-decisions.md documenting architecture decisions
