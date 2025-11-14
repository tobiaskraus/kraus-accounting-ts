# Tech Decisions

This document records key architectural and technology decisions made for this project.

## Project Structure

**Decision**: Monorepo from the start using pnpm workspaces

**Rationale**:

- Better organization and code sharing between frontend and backend
- Single repository simplifies development and deployment
- pnpm workspaces provide efficient dependency management
- Easier to maintain type safety across packages

**Structure**:

```
apps/
  web/     - React frontend application
  api/     - Bun backend with tRPC
packages/
  shared/  - Shared TypeScript types and utilities
```

## Data Persistence

**Decision**: In-memory state for first iteration, add persistence later

**Rationale**:

- Focus on UI/UX and data modeling first
- Validate core concepts before committing to database schema
- Easier to iterate and test quickly
- Can migrate to SQLite/PostgreSQL once structure is proven

**Future**: Will migrate to SQLite or PostgreSQL with Drizzle ORM when ready for persistence.

## Client Side rendering

**Decision**: Client side rendering (not server side)

**Rationale**:

- I don't need SEO (no public pages)
- a lot of client dynamic UI features like filtering results in a view etc.
- as a private person, I want to keep server costs really low. Server side rendering has higher server costs due to higher RAM and CPU usage

## API Layer

**Decision**: tRPC for end-to-end type safety

**Rationale**:

- Full type safety from backend to frontend without code generation
- Better developer experience with autocomplete
- Compile-time error checking for API calls
- Simpler than REST with GraphQL complexity
- Works well with TypeScript monorepo setup
- **Not Next.js** cause:
    - this project doesn't need Server Rendering (no SEO) - it's a classical client side app
    - Next.js is more expensive to run (RAM & CPU)
    - Next.js locks me in. It's style of writing code is really specific
    - Curiousity: I just want to try out tRPC rather than Next.js

## Frontend Stack

- **React** + **TypeScript** + **Vite**
- **react-router** (not react-router-dom - deprecated)
- tRPC client for API communication

## Backend Stack

- **Bun** runtime
- **tRPC** for type-safe API
- In-memory storage initially, database later
