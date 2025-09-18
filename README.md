# StarSmith Technologies — Website

A modern **React + TypeScript + Tailwind CSS** website scaffold for showcasing **services and products**.  
Built with **Vite** for fast development and optimized builds.

---

## Quickstart

Install dependencies:
```bash
npm i   # or pnpm install / yarn install
npm run # Run the development server
```
Open http://localhost:5173 

## Build & Preview

```bash
npm run build
npm run preview
```

## Environment

Create `.env` and set:

```
VITE_API_BASE_URL=https://api.example.com
```

Replace API endpoints inside `src/lib/api/*` with your backend.


## Project Structure 


star-smith-website/
├── public/              # Static assets
├── src/                 # Application source code
│ ├── assets/            # Images, icons, and static files
│ ├── components/        # Reusable UI components
│ ├── config/            # App configuration files
│ ├── data/              # Static/local data
│ ├── lib/               # Utilities and helpers
│ ├── pages/             # Application pages
│ ├── routes/            # Route definitions
│ ├── types/             # TypeScript types
│ ├── utils/             # Utility functions
│ ├── App.tsx            # Root app component
│ ├── index.css          # Global styles
│ └── main.tsx           # Application entry point
├── index.html           # HTML entry point
├── package.json         # Scripts & dependencies
├── postcss.config.cjs   # PostCSS configuration
├── tailwind.config.js   # Tailwind CSS configuration
├── tsconfig.json        # TypeScript configuration
├── vite.config.ts       # Vite configuration
└── README.md            # Documentation


## Contributing

1.Fork the repo

2.Create a new branch (git checkout -b feature-name)

3.Commit changes (git commit -m "Add feature")

4.Push to your fork (git push origin feature-name)

5.Open a Pull Request
