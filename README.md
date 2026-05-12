# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

---

## Firebase Authentication (Google + Email/Password)

This repo now includes a separate product client app under `client/` plus a small server under `server/` that verifies Firebase ID tokens.

### 1) Firebase Console setup

- Create a Firebase project.
- Authentication → Sign-in method:
	- Enable **Google**
	- Enable **Email/Password**

### 2) Client env

- Copy `client/.env.example` to `client/.env`
- Fill in the `VITE_FIREBASE_*` values from Firebase Console → Project settings → Your apps (Web)

### 3) Server env (token verification)

- Copy `server/.env.example` to `server/.env`
- Provide Firebase Admin credentials using one of:
	- `GOOGLE_APPLICATION_CREDENTIALS` pointing to a downloaded service account JSON file, OR
	- `FIREBASE_PROJECT_ID`, `FIREBASE_CLIENT_EMAIL`, `FIREBASE_PRIVATE_KEY`

### 4) Run locally

- Client: `cd client` then `npm install` then `npm run dev` (defaults to http://localhost:5174)
- Server: `cd server` then `npm install` then `npm run dev` (defaults to http://localhost:4000)

After signing in, open `/app` in the client and use the **Call server /auth/me** button to confirm end-to-end auth.
