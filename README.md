# SkinSight - Product Showcase Website

A clean, modern, and aesthetic React website to showcase the SkinSight product. This is a presentation-style website with no backend or mobile app code - just a beautiful frontend showcase.

## 🚀 Quick Start

1. **Install dependencies:**
```bash
npm install
```

2. **Start development server:**
```bash
npm run dev
```

3. **Build for production:**
```bash
npm run build
```

4. **Preview production build:**
```bash
npm run preview
```

## 📸 Adding Your Media

### Video
1. Place your video file at: `public/video/demo.mp4`
2. Uncomment the `<video>` tag in `src/components/Hero.jsx`

### Images (7 total)
1. Place your images in: `public/images/`
   - `image1.jpg`
   - `image2.jpg`
   - `image3.jpg`
   - `image4.jpg`
   - `image5.jpg`
   - `image6.jpg`
   - `image7.jpg`

2. Uncomment the `<img>` tags in `src/components/Gallery.jsx`

## 🎨 Features

- ✅ Clean, modern design
- ✅ Fully responsive (mobile, tablet, desktop)
- ✅ Smooth animations with Framer Motion
- ✅ Tailwind CSS for styling
- ✅ Professional presentation layout
- ✅ Placeholders for 1 video and 7 images

## 📁 Project Structure

```
.
├── public/
│   ├── video/
│   │   └── demo.mp4 (your video here)
│   └── images/
│       ├── image1.jpg (your images here)
│       ├── image2.jpg
│       └── ... (7 total)
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx (video section)
│   │   ├── Overview.jsx
│   │   ├── Features.jsx
│   │   ├── HowItWorks.jsx
│   │   ├── Technology.jsx
│   │   ├── Gallery.jsx (7 images)
│   │   ├── Privacy.jsx
│   │   └── Footer.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── package.json
└── vite.config.js
```

## 🎯 Sections

1. **Hero** - Main landing with video
2. **Overview** - Product introduction
3. **Features** - Key features grid
4. **How It Works** - 6-step process
5. **Technology** - Tech stack showcase
6. **Gallery** - 7 image gallery
7. **Privacy** - Privacy and safety information
8. **Footer** - Links and information

## 🛠️ Tech Stack

- React 18
- Vite
- Tailwind CSS
- Framer Motion

## 📝 Notes

- This is a presentation/showcase website only
- No backend or API integration
- No React Native code
- All media placeholders are clearly marked
- Easy to customize colors, text, and layout

