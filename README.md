# Sporty Group Assignment

A single-page application (SPA) built with **Vue 3**, **TypeScript**, **Vite**, **Pinia**, and **Vuetify**.  
It consumes [TheSportsDB API](https://www.thesportsdb.com/free_sports_api) to list and filter sports leagues, supporting search, filtering, and season badge display.

Deployed at: [https://sporty-group-assignment.vercel.app/](https://sporty-group-assignment.vercel.app/)

---

## 📌 Features

- Fetch and display a list of sports leagues from [All Leagues API](https://www.thesportsdb.com/api/v1/json/3/all_leagues.php).
- Display key league fields:
  - `strLeague`
  - `strSport`
  - `strLeagueAlternate`
- Search bar to filter leagues by **name**.
- Dropdown to filter leagues by **sport type** (e.g., Soccer, Basketball, Motorsport).
- Clickable league cards that fetch and display a **season badge image** using:
  - [Season Badge API](https://www.thesportsdb.com/api/v1/json/API_KEY/search_all_seasons.php?badge=1&id=<id>)
- Caching strategy implemented to avoid repeated API calls.
- Component-based architecture.
- Responsive UI built with **Vuetify**.
- Persistent state using **Pinia with pinia-plugin-persistedstate**.

---

## 🛠️ Tech Stack

- **Vue 3** (Composition API + `<script setup>`)
- **TypeScript**
- **Vite** (dev server and build tool)
- **Vuetify 3** (UI components)
- **Pinia** (state management)
- **Axios** (HTTP requests)
- **ESLint + Prettier** (code quality and formatting)

---

## 📂 Project Structure

src/
├─ assets/ # Static assets
├─ components/ # Reusable UI components
│ ├─ LeagueCard.vue
│ └─ FiltersBar.vue
├─ views/ # Page-level components
│ ├─ HomeView\.vue
│ └─ LeagueView\.vue
├─ stores/ # Pinia stores
│ └─ leagueStore.ts
├─ services/ # API integration (Axios)
│ └─ sportsService.ts
├─ router/ # Vue Router setup
├─ App.vue
└─ main.ts

## 🚀 Getting Started

### Prerequisites

- **Node.js** `^20.19.0 || >=22.12.0`
- **Yarn** (recommended) or npm

### Installation

```sh
yarn install
```

### Development Server

```sh
yarn dev
```

Runs the app in development mode with hot reload.
Visit [http://localhost:5173](http://localhost:5173).

### Production Build

```sh
yarn build
```

Compiles and minifies for production.

Preview the production build:

```sh
yarn preview
```

### Type Checking

```sh
yarn type-check
```

### Lint and Format

```sh
yarn lint
yarn format
```

## 📱 Design

- Focused on responsiveness and usability first.
- Minimalistic UI built with Vuetify components.
- Optional enhancements (images, theming) added after functionality.

## 🤖 AI Tools & Assistance

This project used AI tools to accelerate development:

- **ChatGPT (OpenAI)**
  Used for:
  - Initial scaffolding of project setup and boilerplate code.
  - Generating Axios service layer examples.
  - Drafting Vue component templates for filtering and card display.
  - Drafting this README file and refining instructions.

- **GitHub Copilot**
  Assisted in writing repetitive Vue boilerplate code and minor TypeScript typings.

All outputs were reviewed and adapted manually to match the requirements.

## 📦 Deployment

The project is deployed using **Vercel**.
Each push to the main branch triggers a redeploy.

Live URL: [https://sporty-group-assignment.vercel.app/](https://sporty-group-assignment.vercel.app/)

## 🧪 Future Improvements

- Add unit tests with **Vitest**.
- Add error handling and loading skeletons.
- Improve accessibility (a11y compliance).
- Add pagination or infinite scrolling for larger datasets.

## 📄 License

This project is for educational/assignment purposes only.
API data is provided by [TheSportsDB](https://www.thesportsdb.com/).
