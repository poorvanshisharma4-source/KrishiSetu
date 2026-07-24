# KrishiSetu Backend

AI-powered Demand-Driven Contract Farming platform — Node.js / Express / MongoDB REST API.

## Setup

```bash
npm install
cp .env.example .env   # fill in your own values
npm run dev             # nodemon, local development
npm start                # production
npm run seed:admin      # create the initial admin account
```

Required environment variables (see `.env`):

| Variable | Purpose |
|---|---|
| `PORT` | Server port (defaults to 5000) |
| `MONGODB_URI` | MongoDB connection string |
| `JWT_SECRET` | Secret used to sign auth tokens |
| `ADMIN_NAME`, `ADMIN_PHONE`, `ADMIN_PASSWORD`, `ADMIN_EMAIL` | Used by `npm run seed:admin` |
| `NODE_ENV` | Set to `production` to switch request logging to the concise `combined` format |

## API Documentation

Interactive OpenAPI/Swagger docs are served at:

```
GET /api-docs
```

This covers every route currently exposed by the API (auth, users, crops,
requirements, requests, contracts, notifications, admin, dashboard).

## Architecture

```
server.js              → app entrypoint, middleware + route mounting
config/                 → db connection, swagger spec
routes/                 → one file per resource, thin — wires middleware + controller
controllers/             → request handling + business logic
models/                  → Mongoose schemas
middleware/              → auth, role checks, rate limiting, validation, error handling
utils/                    → shared helpers (notifications, trust score, recent activity)
```

## Production-readiness (Phase 6)

Additive/cleanup only — no route paths, response shapes, or business logic changed:

- **Centralized error handling** — `middleware/notFound.js` (catch-all 404) and
  `middleware/errorHandler.js` (fallback handler for anything that isn't
  already caught by a controller's own try/catch) are mounted last in
  `server.js`.
- **Security headers** — `helmet()` added to the middleware chain.
- **Request logging** — `morgan` added (`dev` format locally, `combined` in
  production via `NODE_ENV`).
- **API documentation** — `swagger-jsdoc` + `swagger-ui-express`, docs
  generated from JSDoc comments already living alongside each route
  definition, served at `/api-docs`.
- **Dead code removed** — unused `config/supabase.js` (leftover from an
  earlier iteration, never imported), the unused `bcrypt` and
  `@supabase/supabase-js` dependencies, a duplicated `/api/health` route
  definition in `server.js`, and a couple of debug `console.log`s that were
  printing sensitive data (full user object on login, full `req.user` on
  crop lookup).

No existing controller logic, validation, auth flow, or response format was
changed.
