---
layout: default
title: Data Model
---

# Data Model

## MongoDB Collections

The app currently uses these collections:

- `users`
- `chatLogs`
- `chatTurns`
- `interviewScores`
- `resumeScores`
- `resumeFiles`
- session collection, defaulting to `sessions`

## `users`

Fields include:

- `username`
- `name`
- `passwordHash`
- `role`
- `createdAt`

## `resumeFiles`

Fields include:

- `userId`
- `originalName`
- `storedName`
- `path`
- `size`
- `mimeType`
- `uploadedAt`
- `archived`

## `resumeScores`

Fields include:

- `userId`
- `resumeId`
- `score`
- `rubric`
- `title`
- `summary`
- `positives`
- `negatives`
- `company`
- `jobSnippet`
- `createdAt`

## `chatLogs`

Fields include:

- `type`
- `userId`
- `sessionId`
- `chatId`
- `status`
- `model`
- `context`
- `messages`
- `createdAt`
- `updatedAt`

## `chatTurns`

Fields include:

- `type`
- `userId`
- `sessionId`
- `chatId`
- `model`
- `turn`
- `questionAsked`
- `prompt`
- `reply`
- `review`
- `createdAt`

## `interviewScores`

Fields include:

- `userId`
- `sessionId`
- `chatId`
- `overallScore`
- `grade`
- `rubric`
- `summary`
- `strengths`
- `improvements`
- `strongestArea`
- `weakestArea`
- `patterns`
- `reviewedTurns`
- `createdAt`

## Sessions

The app uses a custom Mongo-backed session store.

Stored session documents include:

- session payload
- expiration time
- timestamps
