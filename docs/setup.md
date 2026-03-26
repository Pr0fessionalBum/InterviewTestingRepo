# Setup

## Requirements

- Node.js 18+
- npm
- MongoDB Atlas or local MongoDB
- OpenAI API key

## Install

```bash
npm install
```

## Local Environment

Create a `.env` file in the project root.

Minimum recommended local configuration:

```env
OPENAI_API_KEY=your-openai-key
MONGODB_URI=your-mongodb-uri
MONGODB_DB=VirtualInterview
SESSION_SECRET=some-long-random-string
NODE_ENV=development
MODEL=gpt-4.1-mini
REVIEW_MODEL=gpt-4.1-mini
```

## Run Locally

Development:

```bash
npm run dev
```

Production-style local run:

```bash
npm start
```

## Default Entry Point

The application starts from:

```text
server.js
```

That file loads:

- environment variables
- the Express app from `src/server/app.js`
- the MongoDB connection

## Notes

- Uploaded files are stored in the top-level `uploads/` directory.
- The app creates `uploads/` automatically if it does not exist.
- The resume parser currently supports PDF and DOCX inputs using the current parser implementation in `src/server/shared/resumeParser.js`.
