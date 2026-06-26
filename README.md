# 🚀 GitHub Explorer

A responsive GitHub profile explorer built with **React**, **Vite**, and the **GitHub REST API**.

## ✨ Features

- 🔍 Search GitHub users
- 👤 View profile information
- 📂 View public repositories
- ⚡ Responsive design
- ❌ Error handling for invalid usernames

## 🛠️ Tech Stack

- React
- Vite
- JavaScript
- CSS
- GitHub REST API
- Zustand (State Management)
- Framer Motion

## 📂 Project Architecture

```text
github-explorer/
│
├── public/                 # Static assets
│   ├── favicon.svg
│   └── icons.svg
│
├── src/
│   ├── assets/             # Images & icons
│   ├── components/         # Reusable UI components
│   │   ├── Loader.jsx
│   │   ├── ProfileCard.jsx
│   │   ├── RepoGrid.jsx
│   │   └── SearchBar.jsx
│   │
│   ├── store/              # Zustand state management
│   │   └── useGithubStore.js
│   │
│   ├── App.jsx             # Root component
│   ├── App.css
│   ├── index.css
│   └── main.jsx            # Application entry point
│
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

## 🚀 Run Locally

```bash
git clone https://github.com/your-username/github-explorer.git
cd github-explorer
npm install
npm run dev
```

