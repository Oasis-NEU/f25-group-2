# 🌟 Oasis - Restaurant & Activity Recommendation App

A simple web app to help people discover restaurants and activities in Boston!

## 🚀 Getting Started

### Prerequisites
- Node.js installed on your computer
- A code editor (VS Code recommended)

### Installation
1. Open terminal in this project folder
2. Run: `npm install`
3. Run: `npm run dev`
4. Open your browser to `http://localhost:5174`

## 📁 Project Structure

```
oasis-group2/
├── public/              # Images and static files
│   ├── background.png   # Geometric pattern background
│   └── arcade-contact.png # Contact page arcade machine
├── src/
│   ├── pages/           # Different pages of the website
│   │   ├── Home.jsx         # Homepage with food image
│   │   ├── Restaurants.jsx  # Restaurant search page ⚠️ BUILD THIS
│   │   ├── Activities.jsx   # Activities search page ⚠️ BUILD THIS
│   │   └── Contact.jsx      # Contact page with arcade
│   ├── App.jsx          # Main app (has navbar and routing)
│   ├── main.jsx         # Starting point
│   └── index.css        # ALL styles are here
└── index.html           # Main HTML file
```

## 🎯 What You Need to Build

### For Restaurants.jsx and Activities.jsx:
1. Create cards to display items (restaurants or activities)
2. Make the search bar work to filter items
3. Add images, names, and tags to each card
4. Style the cards using CSS from `index.css`

### Tips:
- Look at how the navbar buttons are styled in `index.css` (`.nav-links a`)
- Use the `.card` and `.card-grid` classes already in the CSS
- Store your data in an array with useState
- Use `.map()` to display multiple cards

## 🎨 Current Pages

✅ **Home** - Hero image with food  
⚠️ **Restaurants** - Search bar only (you add the rest!)  
⚠️ **Activities** - Search bar only (you add the rest!)  
✅ **Contact** - Arcade machine image

## 📚 Resources

- React useState: https://react.dev/reference/react/useState
- Array map: https://react.dev/learn/rendering-lists
- CSS Basics: https://developer.mozilla.org/en-US/docs/Learn/CSS

## 🐛 Common Issues

**Port already in use?**
- Kill the process or use a different port

**Changes not showing?**
- Save your files
- Check browser console for errors

**npm install fails?**
- Delete `node_modules` folder
- Run `npm install` again

## 💡 Need Help?

Check `PROJECT_GUIDE.md` for detailed explanations of every file!
