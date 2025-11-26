# Assets Directory

Place your images here:

## Required Images

1. **Profile Photo**: `profile-placeholder.jpg`
   - Recommended size: 400x400px (square)
   - Format: JPG or PNG
   - Update path in `src/config/portfolio.js` if using different filename

2. **Project Images**: `project-1.jpg` through `project-6.jpg`
   - Recommended size: 800x600px (4:3 ratio)
   - Format: JPG or PNG
   - Update paths in `src/config/portfolio.js` for each project

## Quick Placeholder Generation

You can use online services like:
- [Placeholder.com](https://via.placeholder.com/400x400?text=Profile)
- [DummyImage.com](https://dummyimage.com/800x600/4f46e5/ffffff&text=Project)

Or use the browser console to generate:
```javascript
// For profile image
const canvas = document.createElement('canvas');
canvas.width = 400;
canvas.height = 400;
const ctx = canvas.getContext('2d');
ctx.fillStyle = '#4f46e5';
ctx.fillRect(0, 0, 400, 400);
ctx.fillStyle = '#ffffff';
ctx.font = '48px Arial';
ctx.textAlign = 'center';
ctx.fillText('DD', 200, 220);
canvas.toBlob(blob => {
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'profile-placeholder.jpg';
  a.click();
});
```

## Image Optimization Tips

- Compress images before adding (use tools like TinyPNG or ImageOptim)
- Use WebP format for better compression (update file extensions in config)
- Keep file sizes under 200KB for faster loading

