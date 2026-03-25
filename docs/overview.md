# Project Overview

## Summary

Virtual Interview helps a user prepare for job applications by combining resume analysis and interview practice in one workflow.

The app currently supports:

- user signup and login
- resume upload and preview
- resume scoring against a job description
- archived and active resume views
- interview session generation
- interview transcript persistence
- post-interview scoring and review retrieval

## Main User Journey

1. A user creates an account or logs in.
2. The user uploads a resume and optionally provides company and job description context.
3. The app parses the resume and generates a scorecard.
4. The user can review saved resumes and prior score results.
5. The user starts a mock interview using a selected resume.
6. The app stores interview turns, chat logs, and final review data.

## Current Runtime Shape

- server-rendered application
- Express routes and controllers
- MongoDB-backed persistence
- custom Mongo-backed session store
- browser-side JavaScript for interview interactions and voice input
