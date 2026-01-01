# 💕 Our Love Story - PWA Application

A beautiful, romantic Progressive Web App (PWA) celebrating love and memories. Built with React, Vite, and Framer Motion.

## ✨ Features

- 🎮 **Interactive Puzzle Game** - Unlock the love story by completing the puzzle
- 📸 **Photo Gallery** - Beautiful gallery with lightbox and filters
- 💌 **Love Letter** - Interactive folder design with romantic letter
- 🌟 **Dreams & Promises** - Future dreams and promises together
- 📖 **Our Story** - Timeline of beautiful moments
- ⏱️ **Countdown Timer** - Days together counter
- 🎵 **Music Player** - Play your favorite songs
- 💫 **Animations** - Smooth, romantic animations throughout
- 📱 **PWA Ready** - Install as an app on any device
- 🎨 **Responsive Design** - Works beautifully on all devices

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone <repository-url>
cd love-anniversary-pwa
```

2. Install dependencies
```bash
npm install
```

3. Start the development server
```bash
npm run dev
```

4. Build for production
```bash
npm run build
```

5. Preview production build
```bash
npm run preview
```

## 📁 Project Structure

```
love-anniversary-pwa/
├── public/
│   ├── manifest.webmanifest
│   └── uploads/          # Your photos and videos
├── src/
│   ├── pages/
│   │   ├── GamePage.jsx
│   │   ├── HomePage.jsx
│   │   ├── GalleryPage.jsx
│   │   ├── LetterPage.jsx
│   │   ├── PromisesPage.jsx
│   │   └── StoryPage.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── vite.config.js
└── package.json
```

## 🎨 Customization

### Update Dates
Edit the dates in:
- `src/pages/HomePage.jsx` - Anniversary date and countdown
- `src/pages/StoryPage.jsx` - Story timeline dates

### Add Photos
1. Add your photos to `public/uploads/` folder
2. Update the photos array in `src/pages/GalleryPage.jsx`

### Change Colors
Edit the gradient colors in:
- `src/index.css` - Global styles
- Individual page CSS files

### Add Music
1. Add audio files to `public/` folder
2. Update the music player in `src/pages/HomePage.jsx`

## 📱 PWA Installation

### On Mobile (Android/iOS)
1. Open the website in your browser
2. Look for "Add to Home Screen" option
3. Tap to install

### On Desktop
1. Open the website in Chrome/Edge
2. Click the install icon in the address bar
3. Follow the prompts

## 🛠️ Technologies Used

- **React 18** - UI library
- **Vite** - Build tool
- **React Router** - Navigation
- **Framer Motion** - Animations
- **React Icons** - Icons
- **PWA Plugin** - Progressive Web App support

## 💝 Features to Add

- [ ] Background music player
- [ ] Love quotes API integration
- [ ] Photo upload functionality
- [ ] Anniversary reminders
- [ ] Love calculator
- [ ] Memory notes
- [ ] Video gallery
- [ ] Interactive timeline

## 📝 License

This is a personal project created with love. Feel free to use it for your own love story!

## 💌 Made With Love

Created with ❤️ for celebrating beautiful moments together.

---

**Note**: Remember to add your own photos to the `public/uploads/` folder and customize the content to make it personal!
