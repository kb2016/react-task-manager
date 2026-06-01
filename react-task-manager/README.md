# React Task Manager

A modern Task Management application built with React and Vite. The application allows users to create, organize, and track tasks with priority levels and completion status. Data is persisted using Local Storage, ensuring tasks remain available after page refreshes.

## Features

- Add new tasks
- Delete tasks
- Mark tasks as completed
- Track task priority (High, Medium, Low)
- Filter tasks by status
  - All Tasks
  - Pending Tasks
  - Completed Tasks

- Local Storage persistence
- Responsive user interface

## Tech Stack

- React
- JavaScript (ES6+)
- Vite
- CSS3

## Project Structure

```text
src/
├── components/
│   ├── TaskForm.jsx
│   ├── TaskList.jsx
│   └── TaskCard.jsx
├── App.jsx
├── App.css
└── main.jsx
```

## Installation

Clone the repository:

```bash
git clone https://github.com/your-username/react-task-manager.git
```

Navigate to the project directory:

```bash
cd react-task-manager
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Build for production:

```bash
npm run build
```

## Learning Outcomes

This project demonstrates:

- React Hooks (`useState`, `useEffect`)
- Component-Based Architecture
- State Management
- Controlled Forms
- Conditional Rendering
- Array Methods (`map`, `filter`)
- Local Storage Integration
- Responsive Layout Design

## Future Improvements

- Edit existing tasks
- Task due dates
- Search functionality
- Dark mode
- Drag-and-drop task ordering
- Backend integration

## Author

Built as a personal React portfolio project for learning and showcasing frontend development skills.
