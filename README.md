# SPAPOSPLUS Landing Page

This is the standalone landing page for SPAPOSPLUS - A Spa POS & Management System.

## Setup

1. Install dependencies:
```bash
npm install
# or
yarn install
```

2. Configure environment variables in `.env`:
```env
VITE_DASHBOARD_URL=http://localhost:5173
VITE_PORT=3000
```

3. Run development server:
```bash
npm run dev
```

The landing page will run on port 3000 (http://localhost:3000)

## Build

```bash
npm run build
```

The build output will be in the `dist` directory.

## Deployment

Build the project and deploy the `dist` folder to any static hosting service:
- Vercel
- Netlify
- AWS S3 + CloudFront
- GitHub Pages

## Environment Variables

| Variable | Description | Default |
|----------|-------------|---------|
| `VITE_DASHBOARD_URL` | URL of the dashboard application | `http://localhost:5173` |
| `VITE_PORT` | Port for development server | `3000` |

## Structure

```
landing-page/
├── src/
│   ├── pages/
│   │   ├── LandingPage.tsx      # Main landing page component
│   │   └── LandingPage.css      # Landing page styles
│   ├── contexts/
│   │   └── AuthContext.tsx      # Authentication context
│   ├── assets/
│   │   ├── spa-pos-07.png       # Logo asset
│   │   └── spa-pos-09.png       # Logo asset
│   ├── App.tsx                  # Main app component with routing
│   ├── main.tsx                 # Entry point
│   └── index.css                # Global styles
├── index.html                   # HTML template
├── vite.config.ts               # Vite configuration
├── tailwind.config.js           # Tailwind CSS configuration
└── package.json                 # Dependencies
```

## Notes

- This landing page is a separate project from the main dashboard
- All CTA buttons redirect to the dashboard application
- The landing page checks authentication status via localStorage and redirects accordingly
- When users click "Masuk" or "Mulai Gratis", they are redirected to the dashboard login page
