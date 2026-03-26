---
layout: default
title: Environment Variables
---

# Environment Variables

## Required

### `OPENAI_API_KEY`

Used by:

- resume scoring
- interview generation
- interview review flow
- optional web research flow

### `MONGODB_URI`

MongoDB connection string for Atlas or local MongoDB.

### `MONGODB_DB`

Database name used by the app.

### `SESSION_SECRET`

Used to sign Express sessions.

This must be set in production.

## Optional

### `PORT`

Usually provided automatically by deployment platforms such as Railway.

### `NODE_ENV`

Recommended values:

- `development` for local work
- `production` for deployed environments

### `MODEL`

Primary OpenAI model used by the app.

Current default in code:

```env
gpt-4.1-mini
```

### `REVIEW_MODEL`

Optional override for interview review generation.

If omitted, the app falls back to `MODEL`.

### `SESSION_COLLECTION`

Optional override for the MongoDB collection used by the session store.

## Example

```env
OPENAI_API_KEY=your-openai-key
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/VirtualInterview?retryWrites=true&w=majority
MONGODB_DB=VirtualInterview
SESSION_SECRET=replace-with-a-long-random-secret
NODE_ENV=production
MODEL=gpt-4.1-mini
REVIEW_MODEL=gpt-4.1-mini
```

## Notes

- Do not commit `.env`.
- Rotate secrets if they are ever pasted into chat, screenshots, or Git history.
- Atlas passwords with special characters must be URL-encoded in `MONGODB_URI`.
