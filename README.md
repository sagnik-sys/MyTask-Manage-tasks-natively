# MyTask — Manage Tasks Natively

A clean, minimal todo app built with **React** and **Tailwind CSS** that lets you manage tasks entirely in the browser — no backend, no account required.

🔗 **Live Demo:** [https://mytask-lyart.vercel.app/](https://mytask-lyart.vercel.app/)

---

## Features

- ✅ **Add tasks** — Type a task and save it instantly
- ✏️ **Edit tasks** — Pull any task back into the input field for quick edits
- 🗑️ **Delete tasks** — Remove tasks with a confirmation prompt
- ☑️ **Complete tasks** — Check off tasks; completed ones get a strikethrough
- 👁️ **Toggle completed visibility** — Show or hide finished tasks with a single checkbox
- 💾 **Persistent storage** — All tasks are saved to `localStorage` and survive page refreshes

---

## Tech Stack

| Technology | Purpose |
|---|---|
| React 18 | UI & state management |
| Tailwind CSS | Styling |
| uuid (`uuidv4`) | Unique IDs for each task |
| localStorage | Client-side persistence |
| Vercel | Deployment |

---

## Project Structure

```
src/
├── components/
│   ├── Navbar.jsx       # Top navigation bar
│   └── Footer.jsx       # Page footer
└── App.jsx              # Core todo logic and UI
```

---

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/your-username/mytask.git
cd mytask

# Install dependencies
npm install

# Start the development server
npm run dev
```

The app will be available at `http://localhost:5173`.

### Build for Production

```bash
npm run build
```

---

## How It Works

- Tasks are stored as an array of objects in React state, each with a `todo` string, unique `id`, and `isCompleted` boolean.
- On mount, tasks are loaded from `localStorage`. Any subsequent change to the task list is automatically saved back.
- Editing a task removes it from the list and repopulates the input field — saving it adds it back as a new entry.

---


## Contact

Email: [sagnikbhattacharyya3@outlook.com](mailto:sagnikbhattacharyya3@outlook.com)

---

### Thank You!!

