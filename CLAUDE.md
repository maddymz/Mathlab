# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Mathlab is a visual math expression builder for elementary school students (grades 1-4), inspired by MIT's Scratch. Students drag-and-drop numbers and operators to form mathematical expressions, solving quiz problems set by teachers.

## Development Setup

Two processes must run simultaneously:

```bash
# Frontend (port 3000)
npm install
npm start

# Backend (port 3001) — separate terminal
node src/Assets/Server/Server.js
```

## Common Commands

```bash
npm start          # Start React dev server
npm test           # Run tests (react-scripts test)
npm run build      # Production build
```

To run a single test file:
```bash
npm test -- --testPathPattern=<filename>
```

## Architecture

### Client-Server Split
- **Frontend**: React 16 SPA (Create React App), served on port 3000
- **Backend**: Express.js server at `src/Assets/Server/Server.js`, port 3001
- CORS is configured to allow only `localhost:3000`

### Data Storage
All persistence uses flat JSON files — no database:
- `src/Assets/users.json` — hardcoded user accounts with roles (`student`, `teacher`, `admin`) and grades
- `src/Assets/quizzes.json` — quiz templates; also written by the backend on quiz creation

### Routing & Role-Based Access (`src/App.js`)
React Router v5. Routes are split by user role:
- `/` → Login
- `/student` → StudentMain → branches to Practice or Quiz mode
- `/teacher` → TeacherView → quiz creation/management
- `/admin` → AdminPage → manage students/teachers

User role and grade are set at login via `setUserData()` and passed as props down the tree (no Redux/Context).

### Core Feature: Drag-and-Drop Expression Builder (`src/Components/DragnDrop/`)
- `dragndrop.jsx` — top-level container; renders grade-appropriate number/operator blocks
- `box.jsx` — individual draggable tile (number or operator)
- `dropArea.jsx` — the drop zone where students assemble expressions
- `EvaluationLogic.js` — custom class implementing operator-precedence parsing to evaluate assembled expressions; this is the core math validation logic

Grade 1 exposes `+` and `-`; Grade 4 adds `*`, `/`, and parentheses.

### UI Libraries
Multiple UI libraries coexist: Material-UI (primary), React Bootstrap, Semantic UI React, and Reactstrap. Prefer Material-UI for new components.

### Drag-and-Drop
Uses `react-dnd` v9 with the HTML5 backend. Item types are defined in `src/Components/DragnDrop/draggableTypes.js`.

### Backend API Endpoints (`src/Assets/Server/Server.js`)
- `POST /createquiz` — append a new quiz to quizzes.json
- `POST /AddQuestion` — validate and add a question
- `GET /Questions` — fetch all questions
- `POST /addStudent`, `POST /deleteStudent`
- `POST /addProfessor`, `POST /deleteProfessor`

HTTP calls from the frontend use Axios.

## Key Constraints
- Authentication is entirely client-side against `users.json` — there is no session or token mechanism.
- The backend has no auth middleware; all endpoints are open.
- `immutability-helper` is used in drag-and-drop state updates — use its `update()` helper rather than direct mutation.
