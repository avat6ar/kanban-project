# Kanban Project

This is a **Kanban Project Management App** built with **React**, **TypeScript**, and **Vite**. The application allows you to create projects, manage tasks in a Kanban board style, and persist data using `localStorage`.

## Features

- **Project Management**:
  - Create, view, and manage projects.
- **Task Management**:
  - Add tasks to `To Do`, `In Progress`, or `Done` columns.
  - Drag and drop tasks between columns.
- **Data Persistence**:
  - All data is saved in `localStorage` and retrieved on page reload.
- **Responsive Design**:
  - Optimized for desktop and mobile devices.
- **TypeScript**:
  - Provides static type checking for enhanced developer productivity.
- **TailwindCSS**:
  - Used for styling components with utility-first classes.

---

## Tech Stack

- **Frontend**: React, TypeScript
- **Build Tool**: Vite
- **Styling**: TailwindCSS
- **State Management**: React `useState`
- **Persistence**: LocalStorage

---

## Installation and Setup

### Prerequisites
- Node.js (>= 18.0.0)
- npm (>= 6.0.0)

### Steps

1. Clone the repository:
   ```bash
   git clone [<repository-url>](https://github.com/avat6ar/kanban-project.git)
   cd kanban-project

2. Install dependencies:
   ```bash
   npm install
   
   
3. Start the development server:
   ```bash
   npm run dev
   

4. Open your browser and visit http://localhost:5173.


### Project Structure

```
kanban-project
├─ .gitignore
├─ eslint.config.js        # ESLint configuration
├─ index.html              # Main HTML template
├─ package.json            # Project dependencies and scripts
├─ postcss.config.js       # PostCSS configuration
├─ public                  # Static files
├─ src
│  ├─ App.tsx              # Root component
│  ├─ components           # Reusable UI components
│  ├─ hooks                # Custom React hooks
│  ├─ layouts              # Layout components
│  ├─ lib                  # Utility functions
│  ├─ pages                # Page components
│  ├─ router.tsx           # React Router configuration
│  └─ main.tsx             # Application entry point
├─ tailwind.config.js      # TailwindCSS configuration
├─ tsconfig.json           # TypeScript configuration
├─ vite.config.ts          # Vite configuration
└─ README.md               # Project documentation
```
