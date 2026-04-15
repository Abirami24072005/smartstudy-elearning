# SmartStudy — E-Learning Platform (React)

## Folder Structure

```
elearning-react/
│
├── index.html                  ← ONE html file (replaces all 6 html files)
├── vite.config.js              ← forwards /pay to backend
├── server.js                   ← your backend (NOT changed at all)
├── package.json
│
├── public/
│   └── images/                 ← all your images go here
│       ├── course1.jpg ... course6.jpg
│       ├── teacher new 1.png ... teacher new 4.png
│       ├── student-1.png ... student-6.png
│       ├── home-img.svg
│       ├── contact-img.svg
│       └── Gemini_Generated_Image_5lp6z35lp6z35lp6.png
│
└── src/
    ├── main.jsx                ← React entry point
    ├── App.jsx                 ← all routes defined here
    ├── index.css               ← your style.css (NOT changed at all)
    │
    ├── components/
    │   ├── Navbar.jsx          ← header + mobile menu toggle (was script.js)
    │   └── Footer.jsx          ← footer (shared on every page)
    │
    └── pages/
        ├── Home.jsx
        ├── Course.jsx          ← progress tracker (was script.js)
        ├── Teacher.jsx
        ├── Price.jsx
        ├── Review.jsx          ← add/show reviews (was script.js)
        └── Contact.jsx
```

## What was converted from script.js → React

| Old script.js                        | New React                            |
|--------------------------------------|--------------------------------------|
| `menu.classList.toggle('fa-times')`  | `useState` in `Navbar.jsx`           |
| `window.onscroll` close menu         | `useEffect` scroll listener          |
| `completeLesson()` + DOM width       | `useState` in `Course.jsx`           |
| `updateProgress()` innerHTML         | auto re-render (no DOM needed)       |
| `addReview()` + localStorage         | `useState` in `Review.jsx`           |
| `displayReviews()` innerHTML loop    | `.map()` in JSX                      |
| `href="page.html"`                   | `<Link to="/page">` (React Router)   |

## What was NOT changed

- `style.css` → copied as-is to `src/index.css`
- `server.js` → completely unchanged
- All HTML content → same text, same classes, same structure

## How to Run

### Step 1 — Install
```bash
npm install
```

### Step 2 — Start the backend (Terminal 1)
```bash
node server.js
```

### Step 3 — Start React frontend (Terminal 2)
```bash
npm run dev
```

Open **http://localhost:5173** in your browser.
