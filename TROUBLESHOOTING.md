# 🔧 Troubleshooting Guide

## Common Errors & Solutions

### 1. ❌ Icon Export Error
**Error**: `does not provide an export named 'FaCalendarHeart'`

**Solution**: ✅ Fixed! Changed to `FaCalendar` and `FaHeart` which are available in react-icons.

### 2. ❌ PWA Icon Missing
**Error**: `Download error or resource isn't a valid image`

**Solution**: 
- The app now uses `heart-icon.svg` which exists
- For better PWA support, create PNG icons:
  - `public/pwa-192x192.png` (192x192 pixels)
  - `public/pwa-512x512.png` (512x512 pixels)
- See `scripts/create-pwa-icons.md` for instructions

### 3. ⚠️ Runtime.lastError
**Error**: `The message port closed before a response was received`

**Solution**: 
- This is usually from browser extensions (like React DevTools)
- **Not a critical error** - can be safely ignored
- Doesn't affect app functionality
- If annoying, disable browser extensions temporarily

### 4. 🎵 Music Player Not Working
**Issue**: Music doesn't play

**Solution**:
1. Add music files to `public/music/` folder
2. Update playlist in `src/components/RomanticMusicPlayer.jsx`
3. Check browser console for file path errors

### 5. 📝 Memories Not Saving
**Issue**: Memories disappear on refresh

**Solution**:
- Check browser localStorage is enabled
- Clear browser cache and try again
- Check browser console for errors

### 6. 🎨 Styles Not Loading
**Issue**: Page looks unstyled

**Solution**:
1. Clear browser cache (Ctrl+Shift+R or Cmd+Shift+R)
2. Restart dev server: `npm run dev`
3. Check CSS files are in correct locations

### 7. 🚀 Build Errors
**Issue**: `npm run build` fails

**Solution**:
1. Delete `node_modules` and `package-lock.json`
2. Run `npm install` again
3. Check Node.js version (should be 16+)

### 8. 📱 PWA Not Installing
**Issue**: Install prompt doesn't appear

**Solution**:
1. Serve over HTTPS (or localhost)
2. Create proper PWA icons (see above)
3. Check manifest.webmanifest is valid
4. Use Chrome DevTools > Application > Manifest to check

## Quick Fixes

### Clear Cache
```bash
# Delete node_modules
rm -rf node_modules
npm install

# Clear browser cache
Ctrl+Shift+Delete (Windows/Linux)
Cmd+Shift+Delete (Mac)
```

### Restart Dev Server
```bash
# Stop server (Ctrl+C)
# Then restart
npm run dev
```

### Check Console
- Open browser DevTools (F12)
- Check Console tab for errors
- Check Network tab for failed requests

## Still Having Issues?

1. Check all files are saved
2. Restart your IDE
3. Restart your computer (sometimes helps!)
4. Check Node.js and npm versions
5. Try a different browser

---

**Most errors are now fixed!** The app should work smoothly. 💕

