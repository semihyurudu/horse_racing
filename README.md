# 🐎 Horse Racing App

A dynamic horse racing simulation web application built with Vue 3 and Vite.

## 🔗 Live Demo

👉 [https://horse-racing-ten.vercel.app/](https://horse-racing-ten.vercel.app/)

---

## ⚙️ Project Setup

Make sure you are using **Node.js v24.5.0 or later**.

### Install dependencies

```bash
npm install
```

### Start development server

```bash
npm run dev
```

### Type-check, compile and minify for production

```bash
npm run build
```

### Preview production build locally

```bash
npm run preview
```

---

## ✅ Testing

### Run Unit Tests (with [Vitest](https://vitest.dev/))

```bash
npm run test:unit
```
Also automatically runs via **husky pre-commit hook**.

### Run E2E Tests in Dev Mode (with [Cypress](https://www.cypress.io/))

```bash
npm run test:e2e:dev
```

Runs E2E tests against the Vite development server.

### Run E2E Tests on Production Build

It’s recommended to test the production build before deployment:

```bash
npm run build
npm run test:e2e
```

---

## 🧹 Code Quality

### Lint (with [ESLint](https://eslint.org/))

```bash
npm run lint
```

Also automatically runs via **husky pre-commit hook**.

### Format Code (with [Prettier](https://prettier.io/))

```bash
npm run format
```

---

## 🛠️ Technologies Used

- **Vue 3** — Modern reactive UI framework
- **Vite** — Fast development/build tool
- **TypeScript** — Static typing
- **Pinia** — Lightweight and intuitive state management
- **Vue Router** — SPA navigation
- **Tailwind CSS** — Utility-first CSS framework
- **SCSS** — Modular and dynamic styling
- **Axios** — HTTP client
- **Vue3 Toastify** — Toast notifications
- **Font Awesome** — Icon library

---

## 📁 Project Structure

```
src/
├── assets/         # Images, fonts, static files
├── components/     # Reusable Vue components
├── constants/      # App constants and configuration
├── plugins/        # Vue plugins and third-party libraries
├── services/       # API services and HTTP requests
├── stores/         # Pinia store definitions
├── types/          # TypeScript type definitions
├── utils/          # Helper functions and utilities
├── views/          # Route-based pages
├── App.vue         # Main Vue component
└── main.ts         # App entry point
```

---

## 📌 Additional Notes

- The app supports **SCSS with variables** for flexible styling.
- ESLint, Prettier, and Husky ensure clean code standards.
- Full test setup is included (unit and end-to-end).
- Project details, logic, and technical structure can be found on the `/about` route within the app.

---

## 📝 License

All rights reserved.
