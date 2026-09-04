# Minimal Next.js
A minimal Next.js setup consists of exactly 3 dependencies (next, react, react-dom) and 3 essential files (package.json, an empty next.config.js, and a single page file).

### 1. Project Initialization
Create a empty directory, navigate into it, and initialize your project:
```
mkdir www2 && cd www2
npm init -y
```

### 2. Install Core Dependencies
Install only the absolute minimum required packages:
```
npm install next react react-dom
```

3. Create the Configuration
Create a package.json file in your root directory with these exact scripts:
```
{
  "name": "next-minimal",
  "version": "1.0.0",
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start"
  },
  "dependencies": {
    "next": "^15.0.0",
    "react": "^19.0.0",
    "react-dom": "^19.0.0"
  }
}
```

Create an empty config file named next.config.js:
```
/** @type {import('next').NextConfig} */
const nextConfig = {};

module.exports = nextConfig;
```

### 4. Add a Minimal Page
Next.js automatically handles layout creation on the first run. You only need to provide a single page file in the app directory:
```
mkdir app
```

Inside the app folder, create a file named page.js:
```
export default function Page() {
  return <h1>Minimal Next.js</h1>;
}
```

### 5. Run the Application
Start your development server:
```
npm run dev
```

Next.js will automatically create a layout.js file for your root HTML scaffolding.
Open http://localhost:3000 to view your live, zero-bloat web application.

### 6. Convert it to TypeScript
Rename app/page.js ➡️ app/page.tsx
Start your app again using your terminal:
```
npm run dev
```
Next.js will detect the .tsx file and automatically:
- Install the required types (@types/react, @types/node, typescript).
- Create a fully configured tsconfig.json file in your root folder.
- Create a next-env.d.ts file for Next.js specific types.

# MUI

### 1. Install MUI Packages
Run the following command in your terminal to install MUI, its peer dependencies, and icon library:
```
npm install @mui/material @emotion/react @emotion/styled @mui/icons-material
```

### 2. Create the Theme Registry (SSR Setup)
Because Next.js uses Server Components by default, you must create a client-side wrapper to inject MUI styles during server rendering.
Create a new file at app/ThemeRegistry.tsx

### 3. Wrap Your Application Layout
Next.js automatically created a app/layout.tsx file when you ran the dev server. Modify it to wrap your entire application with your new ThemeRegistry.

### 4. Use MUI Components in Pages

You can now use MUI components anywhere in your pages. Update your app/page.tsx file to test it out.

# Programming / Development

### 1. Modify app/page.tsx

In the Next.js App Router, page.tsx is a reserved file name. Next.js relies on strict file-system routing, meaning a route only becomes publicly accessible if a file is explicitly named exactly page.tsx (or page.js/page.jsx).

### 2. Commands for Dev "http://localhost:3000"
```
npm run dev
```

### 3. Install Package: gh-pages

### 4. Install Git

```
git --version
git config --global user.name "xxxxxxx"
git config --global user.email "xxxxxxx@gmail.com"
```
### 5. Commands for Deploy
```
npm run build
npm run deploy
```