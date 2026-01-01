# Creating PWA Icons

## Quick Solution (Temporary)

The app will work without PWA icons, but for best experience, create these:

### Option 1: Use Online Tool
1. Go to https://realfavicongenerator.net/ or https://www.pwabuilder.com/imageGenerator
2. Upload a heart/love themed image
3. Download the generated icons
4. Place in `public/` folder:
   - `pwa-192x192.png`
   - `pwa-512x512.png`
   - `apple-touch-icon.png` (180x180)

### Option 2: Create Simple Icons
Use any image editor to create:
- 192x192 pixel heart icon
- 512x512 pixel heart icon

### Option 3: Use SVG (Current)
The app currently uses `heart-icon.svg` which works, but PNG icons are recommended for better PWA support.

## For Now
The app will work fine without these icons - they're just for the install prompt and home screen icon.

