# 🎬 Vertical Video Feed App

A simple fullscreen vertical video feed app built with **React**, **Tailwind CSS**, and **Framer Motion**. Inspired by Instagram Reels or TikTok — this app lets users scroll through videos, like them, comment, and view more info in a sliding drawer.

---

## 📸 Features

- 🎥 Fullscreen autoplaying videos
- 🔄 Scroll-based navigation (mouse wheel)
- ❤️ Like toggle with live count update
- 💬 Comment count + expandable drawer
- 🎚️ Animated transitions using Framer Motion
- 💡 Modular, maintainable components
- ⚙️ Simulated API state using custom hook

---

## 🧩 Tech Stack

| Tech             | Purpose                         |
|------------------|---------------------------------|
| React            | Component-based UI              |
| Tailwind CSS     | Utility-first styling           |
| Framer Motion    | Smooth animations               |
| React Icons      | Beautiful icons (FontAwesome)   |

---

## 🛠️ Getting Started

### Prerequisites

- Node.js ≥ 14
- npm / yarn
- Git

### Installation

```bash
git clone https://github.com/yourusername/video-feed-app.git
cd video-feed-app
npm install
npm run dev

Make sure your local videos are stored in src/assets/Shorts/ and imported properly.

🎮 Controls
Scroll Up/Down → Navigate between videos

Like Button → Toggle likes

Comment Button / More Info → Open drawer with more info

Close Button → Dismiss the drawer

📦 The app uses a custom hook useVideoStats(videoId). It tracks:

Likes count

Comments count

Like status (liked/unliked)



# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
