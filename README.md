# KARIGAR – Indian Artisan Marketplace

A React + Vite project converted from a static HTML/CSS site.

## Project Structure

```
karigar/
├── index.html                  # HTML entry point
├── vite.config.js              # Vite configuration
├── package.json
└── src/
    ├── main.jsx                # React DOM root
    ├── App.jsx                 # Root component
    ├── styles/
    │   └── index.css           # Global styles & CSS variables
    ├── data/
    │   └── index.js            # Products, features, nav data
    └── components/
        ├── Header.jsx          # Sticky nav + mobile hamburger
        ├── Header.module.css
        ├── About.jsx           # Hero / about section
        ├── About.module.css
        ├── Features.jsx        # 4-column features strip
        ├── Features.module.css
        ├── Products.jsx        # Product grid section
        ├── Products.module.css
        ├── ProductCard.jsx     # Individual product card
        ├── ProductCard.module.css
        ├── Contact.jsx         # Contact form + info
        ├── Contact.module.css
        ├── Footer.jsx          # Footer with columns
        └── Footer.module.css
```

## Getting Started

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Tech Stack

- **React 18** – UI library
- **Vite 5** – Build tool & dev server
- **CSS Modules** – Scoped component styles
- **Google Fonts** – Playfair Display + DM Sans

## Features

- Responsive layout with mobile hamburger menu
- Controlled contact form with submission feedback
- CSS animations (fadeSlideIn, fadeUp) with staggered delays
- CSS variables for consistent theming
- CSS Modules to keep styles scoped per component
