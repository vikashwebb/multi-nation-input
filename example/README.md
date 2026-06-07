# Sample Projects

Three demo apps that use the local package via `file:../..`.

## Web form demo (recommended before go-live)

Full registration form with **4 phone inputs**, **package preview**, **npm README preview**, and a **shareable demo URL**.

```bash
npm run example:web-form
```

Open http://localhost:5180

Static build preview (production-like):

```bash
npm run demo:preview
```

Deploy to Vercel for a public demo URL:

```bash
cd example/web-form
npx vercel
```

Then set `VITE_DEMO_URL=https://your-url.vercel.app` in Vercel environment variables.

## Web (simple single input)

```bash
npm run example:web
```

Open http://localhost:5173

## Mobile (Expo)

```bash
npm run example:mobile
```

Scan the QR code with **Expo Go** on your phone, or press `i` for iOS simulator / `a` for Android emulator.

## Run web + mobile together

```bash
npm run example:all
```

- Web: http://localhost:5173
- Mobile: Expo dev tools in the terminal
