# Debajyoti Das - Personal Portfolio Website

A modern, fully responsive personal portfolio website built with React, TailwindCSS, and Framer Motion. Features dark/light theme toggle, glassmorphism design, animated particles background, and smooth scrolling animations.

## 🚀 Features

- ✨ **Modern Design**: Glassmorphism cards with gradient backgrounds
- 🌓 **Dark/Light Theme**: Toggle between themes with persistent preference
- 🎨 **Smooth Animations**: Framer Motion powered transitions and hover effects
- 📱 **Fully Responsive**: Mobile-first design that works on all devices
- ⚡ **Performance**: Built with Vite for fast development and optimized builds
- 🎯 **Interactive Particles**: Optional animated background particles
- 📧 **Contact Form**: Integrated with EmailJS (configurable)
- 🔍 **SEO Optimized**: Meta tags and semantic HTML

## 🛠️ Tech Stack

- **React 18** - UI library
- **Vite** - Build tool and dev server
- **TailwindCSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **EmailJS** - Email service integration
- **React Icons** - Icon library

## 📦 Installation

1. **Clone or navigate to the project directory:**
   ```bash
   cd portfolio
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```

4. **Open your browser:**
   Navigate to `http://localhost:5173` (or the port shown in terminal)

## 🏗️ Build for Production

```bash
npm run build
```

The production-ready files will be in the `dist` folder. You can preview the build with:

```bash
npm run preview
```

## ✏️ Customization

### Updating Portfolio Content

All portfolio content is centralized in `src/config/portfolio.js`. Edit this file to update:

- **Personal Information**: Name, profession, location, bio, social links
- **Projects**: Add, remove, or modify project cards
- **Skills**: Update skill categories and items
- **Email Configuration**: Add your EmailJS credentials

### Example: Updating Personal Info

```javascript
export const personalInfo = {
  name: "Your Name",
  profession: "Your Profession",
  location: "Your Location",
  bio: "Your bio here...",
  email: "your.email@example.com",
  linkedin: "https://linkedin.com/in/yourprofile",
  github: "https://github.com/yourusername",
  profileImage: "/assets/profile-placeholder.jpg",
};
```

### Adding Projects

Edit the `projects` array in `src/config/portfolio.js`:

```javascript
{
  id: 7,
  title: "New Project",
  description: "Project description...",
  image: "/assets/project-7.jpg",
  techStack: ["React", "Node.js"],
  link: "https://project-link.com",
  github: "https://github.com/username/repo",
}
```

### Updating Skills

Modify the `skills` object in `src/config/portfolio.js`:

```javascript
export const skills = {
  programming: [
    { name: "Python", icon: "🐍" },
    { name: "JavaScript", icon: "📜" },
    // Add more...
  ],
  // Add more categories...
};
```

### EmailJS Setup

1. Sign up at [EmailJS](https://www.emailjs.com/)
2. Create an email service and template
3. Update `emailConfig` in `src/config/portfolio.js`:

```javascript
export const emailConfig = {
  serviceId: "your_service_id",
  templateId: "your_template_id",
  publicKey: "your_public_key",
};
```

### Adding Images

1. Place your images in the `public/assets/` directory
2. Update image paths in `portfolio.js`:
   - Profile photo: `profileImage: "/assets/your-photo.jpg"`
   - Project images: `image: "/assets/your-project.jpg"`

### Styling Customization

- **Colors**: Edit `tailwind.config.js` to customize the color scheme
- **Animations**: Modify animation durations in component files
- **Glassmorphism**: Adjust blur and opacity in `src/index.css` under `.glass` class

## 📁 Project Structure

```
portfolio/
├── public/
│   ├── assets/          # Images and static assets
│   └── vite.svg
├── src/
│   ├── components/      # React components
│   │   ├── About.jsx
│   │   ├── Contact.jsx
│   │   ├── Footer.jsx
│   │   ├── Hero.jsx
│   │   ├── Navbar.jsx
│   │   ├── ParticlesBackground.jsx
│   │   ├── Projects.jsx
│   │   └── Skills.jsx
│   ├── contexts/        # React contexts
│   │   └── ThemeContext.jsx
│   ├── config/          # Configuration files
│   │   └── portfolio.js # Main portfolio data
│   ├── App.jsx          # Main app component
│   ├── main.jsx         # Entry point
│   └── index.css        # Global styles
├── index.html
├── package.json
├── tailwind.config.js
├── vite.config.js
└── README.md
```

## 🎨 Theme Customization

The theme system uses TailwindCSS dark mode. To customize:

1. **Colors**: Edit `tailwind.config.js` theme colors
2. **Dark Mode**: Toggle handled automatically, stored in localStorage
3. **Gradients**: Modify gradient classes in components or CSS

## 🚀 Deployment

### Deploy to Vercel

1. Push your code to GitHub
2. Import project in [Vercel](https://vercel.com)
3. Vercel will auto-detect Vite and deploy

### Deploy to Netlify

1. Push your code to GitHub
2. Import project in [Netlify](https://netlify.com)
3. Build command: `npm run build`
4. Publish directory: `dist`

### Deploy to GitHub Pages

1. Install `gh-pages`: `npm install --save-dev gh-pages`
2. Add to `package.json`:
   ```json
   "scripts": {
     "deploy": "npm run build && gh-pages -d dist"
   }
   ```
3. Run: `npm run deploy`

## 📝 License

This project is open source and available for personal use.

## 🤝 Contributing

Feel free to fork this project and customize it for your own portfolio!

## 📧 Contact

Debajyoti Das - [Your Email](mailto:your.email@example.com)

Project Link: [GitHub Repository](https://github.com/yourusername/portfolio)

---

Built with ❤️ using React, TailwindCSS, and Framer Motion

