# Summary and Instructions:

- All styles are in `index.css`
- Navigation bar is defined in `App.jsx`
- Each tab/page is a separate component in `src/pages/`
- Add all images in the `public/` folder
- `src/App.jsx` - Main component containing navigation and routing
- To run: `npm install` then `npm run dev`
- Use these resources to help yourself build the features needed:
  - React useState: https://react.dev/reference/react/useState
  - Array map: https://react.dev/learn/rendering-lists
  - CSS Basics: https://developer.mozilla.org/en-US/docs/Learn/CSS
  - JavaScript Components: https://react.dev/learn/your-first-component
  - JavaScript ES6 Basics: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Introduction

# Working as a Group - Git Workflow:

## Before You Start Working:
1. Make sure you're on main: `git checkout main`
2. Get the latest code: `git pull origin main`
3. Create your own branch: `git checkout -b name-feature`
   - Example: `git checkout -b rim-restaurants-page`

## While You're Working:
1. Make your changes to the code
2. Save often and test that it works locally
3. When you reach a good stopping point, save your work:
   ```
   git add .
   git commit -m "describe what you did"
   ```
   - Example: `git commit -m "added restaurant cards with images"`

## When You're Done:
1. Push your branch to GitHub: `git push origin your-branch-name`
2. Go to the GitHub repo in your browser
3. You'll see a yellow box saying "Compare & pull request" - click it
4. Write a description of what you did
5. Click "Create pull request"
7. If there's any conflicts fix it and click "Merge pull request"

## If Someone Else Changed the Same Files:
1. Go to your branch: `git checkout your-branch-name`
2. Get the latest main: `git pull origin main`
3. Fix any conflicts (the parts marked with `<<<<<<<` and `>>>>>>>`)
4. Save the fixed files: `git add .`
5. Commit: `git commit -m "fixed conflicts"`
6. Push again: `git push origin your-branch-name`

