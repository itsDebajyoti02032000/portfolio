# Quick Start Guide

## 🚀 Getting Started in 3 Steps

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Start Development Server**
   ```bash
   npm run dev
   ```

3. **Open Browser**
   Navigate to `http://localhost:5173`

## 📝 First Customization Steps

1. **Update Personal Info**
   - Open `src/config/portfolio.js`
   - Edit `personalInfo` object with your details
   - Update email, LinkedIn, and GitHub links

2. **Add Your Projects**
   - Edit the `projects` array in `src/config/portfolio.js`
   - Replace placeholder projects with your own
   - Add project images to `public/assets/` folder

3. **Update Skills**
   - Modify the `skills` object in `src/config/portfolio.js`
   - Add or remove skills as needed
   - Customize icons (emojis or use React Icons)

4. **Add Images** (Optional)
   - Profile photo: `public/assets/profile-placeholder.jpg`
   - Project images: `public/assets/project-1.jpg`, `project-2.jpg`, etc.
   - Images will show placeholders if not found

5. **Configure EmailJS** (Optional)
   - Sign up at [EmailJS.com](https://www.emailjs.com/)
   - Get your service ID, template ID, and public key
   - Update `emailConfig` in `src/config/portfolio.js`

## 🎨 Customization Tips

- **Colors**: Edit `tailwind.config.js` to change the color scheme
- **Animations**: Adjust animation speeds in component files
- **Content**: All content is in `src/config/portfolio.js` - easy to update!

## 📦 Build for Production

```bash
npm run build
```

The `dist` folder will contain your production-ready website!

---

**Need Help?** Check the main [README.md](./README.md) for detailed documentation.

