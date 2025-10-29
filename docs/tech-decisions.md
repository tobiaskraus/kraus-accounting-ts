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

## API Layer

**Decision**: tRPC for end-to-end type safety

**Rationale**:

- Full type safety from backend to frontend without code generation
- Better developer experience with autocomplete
- Compile-time error checking for API calls
- Simpler than REST with GraphQL complexity
- Works well with TypeScript monorepo setup

## Frontend Stack

- **React** + **TypeScript** + **Vite**
- **react-router** (not react-router-dom - deprecated)
- tRPC client for API communication

## Backend Stack

- **Bun** runtime
- **tRPC** for type-safe API
- In-memory storage initially, database later
