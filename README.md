# Thuvishka Dasanayaka — Complete Next.js Portfolio

This ZIP combines the complete portfolio source with the additional project files you uploaded:
- package.json and package-lock.json
- Next.js / TypeScript / PostCSS / ESLint configuration
- preview.html
- the complete `src/` source and `public/images/` profile image

## Run locally
1. Install Node.js 20.9 or newer.
2. Extract this ZIP.
3. Open the extracted `thuvishka-portfolio-complete` folder in VS Code.
4. Run:
   ```bash
   npm ci
   npm run dev
   ```
5. Open http://localhost:3000

## Build for production
```bash
npm run build
npm start
```

## Deploy to Netlify
This is a Next.js application, not a plain static HTML folder. Do not use Netlify Drop for this project ZIP.
1. Push the extracted project folder to a GitHub repository.
2. In Netlify choose **Add new site → Import an existing project**.
3. Connect GitHub and select the repository.
4. Let Netlify detect Next.js. If it asks, use build command `npm run build`; do not set a static publish folder.
5. Deploy.

## Customize
- `src/components/Portfolio.tsx`: profile content, experience, education, projects, skills, social links.
- `src/app/globals.css`: colors, typography, layout and responsive styling.
- `src/components/Scene.tsx`: 3D scene.
- `public/images/thuvishka.jpeg`: profile portrait.
- `src/app/layout.tsx`: page title and SEO description.

## Before publishing
Replace the placeholder social URLs and `hello@example.com` email in `src/components/Portfolio.tsx` with your actual details. Review all role dates and education details before publishing.
