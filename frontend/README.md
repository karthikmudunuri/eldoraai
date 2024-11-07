# EldoraAI Frontend

This is the frontend for EldoraAI. It's built using [vite](https://vitejs.dev), [React](https://reactjs.org), and [Tailwind CSS](https://tailwindcss.com) as a SPA.

## Development

```bash
pnpm install
pnpm run dev
```

In a separate terminal navigate to the backend directory and run:

```bash
cd eldoraai/backend
pip install -e .
python -m openui --dev
```

All changes should now be live reloaded, god speed.

> **DISCLAIMER:** FFor reflecting frontend changes in backend run 

```bash
cd eldoraai/frontend
pnpm build
```