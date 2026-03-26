---
layout: default
title: Routes and Flows
---

# Routes and Flows

## Public Routes

### `GET /`

Renders the home page.

### `GET /login`

Renders the login form.

### `POST /login`

Authenticates a user and establishes a session.

### `GET /signup`

Renders the signup form.

### `POST /signup`

Creates a user account and signs the user in.

## Authenticated View Routes

### `GET /upload`

Renders the resume upload page.

### `POST /upload`

Processes an uploaded resume and renders the results page.

### `GET /upload/preview/:id`

Shows a stored resume preview.

### `GET /results`

Renders the results page, optionally for a specific `resumeId`.

### `GET /resumes`

Renders the active resumes list.

### `GET /resumes?archived=1`

Renders archived resumes.

### `POST /resumes/:id/archive`

Archives a resume.

### `POST /resumes/:id/unarchive`

Unarchives a resume.

### `GET /profile`

Renders the user profile page.

### `POST /profile`

Updates the user profile.

## Interview Routes

### `GET /openai`

Renders the interview page.

### `POST /openai/start`

Starts an interview session.

### `POST /openai/ask`

Continues an interview session with the next turn.

### `POST /openai/close`

Closes the current interview and triggers final review behavior.

### `GET /openai/review`

Fetches review data for an interview turn.

### `GET /openai/logs`

Renders transcript history.

### `GET /openai/logs.json`

Returns transcript summaries as JSON.

### `GET /openai/logs/:chatId`

Renders transcript details for one chat.

## High-Level Resume Flow

1. User uploads a resume.
2. Resume metadata is persisted.
3. Resume text is parsed.
4. Optional web research is run.
5. OpenAI scoring is generated.
6. Score metadata is persisted.
7. Results are rendered.

## High-Level Interview Flow

1. User selects a resume and enters interview context.
2. The app loads resume text and prior context.
3. The app generates interview prompts with OpenAI.
4. Each turn is persisted.
5. Turn reviews are generated asynchronously.
6. Final review is generated when the interview is closed.
