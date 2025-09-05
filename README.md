# Mohammed Moid Sufiyan - Portfolio Website

A modern, responsive portfolio website built with React, TypeScript, and Tailwind CSS. Features a dynamic spider web background, smooth animations, and a comprehensive showcase of skills, projects, and experience.

## ✨ Features

### 🎨 **Visual Design**

- **Spider Web Background**: Dynamic animated spider webs with parallax effects
- **Dark/Light Theme**: Toggle between themes with smooth transitions
- **Responsive Design**: Optimized for all devices (mobile, tablet, desktop)
- **Smooth Animations**: Framer Motion powered animations and transitions
- **Modern UI**: Clean, professional design with shadcn/ui components

### 📱 **Sections**

- **Hero**: Animated introduction with spider web background
- **About**: Personal information and background
- **Skills**: Interactive skill bars with progress indicators
- **Tech Stack**: Featured projects and technical achievements
- **Projects**: Portfolio showcase with 3D tilt effects
- **Experience**: Work history and achievements
- **Education**: Academic background and coursework
- **Achievements**: Awards and recognitions
- **Certifications**: Professional certifications and training
- **Quotes**: Inspirational quotes section
- **Contact**: Contact form with social media links

### 🛠️ **Technical Features**

- **TypeScript**: Full type safety and better development experience
- **Vite**: Fast development and build times
- **Tailwind CSS**: Utility-first styling with custom design system
- **Framer Motion**: Smooth animations and transitions
- **React Router**: Client-side routing
- **Sonner**: Modern toast notifications
- **Three.js**: 3D game preview component
- **Lenis**: Smooth scrolling

## 🚀 Tech Stack

### **Frontend**

- **React 18** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Styling framework
- **Framer Motion** - Animations
- **React Router DOM** - Routing

### **UI Components**

- **shadcn/ui** - Modern component library
- **Lucide React** - Icon library
- **Sonner** - Toast notifications

### **3D & Effects**

- **Three.js** - 3D graphics
- **@react-three/fiber** - React renderer for Three.js
- **Lenis** - Smooth scrolling

### **Development Tools**

- **ESLint** - Code linting
- **PostCSS** - CSS processing
- **Autoprefixer** - CSS vendor prefixes

## 📦 Project Structure

```
src/
├── components/
│   ├── site/                 # Main site components
│   │   ├── About.tsx         # About section
│   │   ├── Achievements.tsx  # Achievements section
│   │   ├── Certifications.tsx # Certifications section
│   │   ├── Contact.tsx       # Contact form
│   │   ├── CTA.tsx          # Call-to-action
│   │   ├── Education.tsx    # Education section
│   │   ├── Experience.tsx   # Work experience
│   │   ├── GamePreview.tsx  # 3D game preview
│   │   ├── Hero.tsx         # Hero section
│   │   ├── Navbar.tsx       # Navigation
│   │   ├── Projects.tsx     # Projects showcase
│   │   ├── Quotes.tsx       # Quotes section
│   │   ├── SectionHeader.tsx # Section headers
│   │   ├── Skills.tsx       # Skills section
│   │   ├── SpiderWebBackground.tsx # Animated background
│   │   ├── TechStack.tsx    # Tech stack showcase
│   │   └── ThemeToggle.tsx  # Theme switcher
│   ├── ui/                  # Reusable UI components
│   │   ├── avatar.tsx       # Avatar component
│   │   ├── badge.tsx        # Badge component
│   │   ├── button.tsx       # Button component
│   │   ├── card.tsx         # Card component
│   │   ├── input.tsx        # Input component
│   │   ├── sonner.tsx       # Toast component
│   │   ├── textarea.tsx     # Textarea component
│   │   ├── toaster.tsx      # Toast container
│   │   └── tooltip.tsx      # Tooltip component
│   └── ThemeProvider.tsx    # Theme context
├── hooks/                   # Custom React hooks
│   ├── useActiveSection.ts  # Active section tracking
│   └── useScrollReveal.ts   # Scroll animations
├── pages/                   # Page components
│   ├── Index.tsx           # Main portfolio page
│   └── NotFound.tsx        # 404 page
├── assets/                  # Static assets
│   ├── icons/              # SVG icons
│   └── *.jpg               # Project images
├── lib/                     # Utility functions
│   └── utils.ts            # Helper functions
├── App.tsx                  # Main app component
├── main.tsx                # App entry point
└── index.css               # Global styles
```

## 🛠️ Installation & Setup

### **Prerequisites**

- Node.js (v16 or higher)
- npm or yarn

### **Installation**

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd MyPortfolio
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start development server**

   ```bash
   npm run dev
   ```

```

4. **Open in browser**
```

http://localhost:8080

````

### **Available Scripts**

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run build:dev    # Build for development
npm run preview      # Preview production build
npm run lint         # Run ESLint
````

## 🎨 Customization

### **Personal Information**

Update your personal details in the following components:

- `src/components/site/About.tsx` - Personal information
- `src/components/site/Hero.tsx` - Hero section content
- `src/components/site/Contact.tsx` - Contact information
- `src/components/site/Projects.tsx` - Project details

### **Styling**

- **Colors**: Modify CSS variables in `src/index.css`
- **Themes**: Update theme colors in `src/components/ThemeProvider.tsx`
- **Animations**: Customize Framer Motion animations in components

### **Content**

- **Projects**: Add/remove projects in `src/components/site/Projects.tsx`
- **Skills**: Update skill levels in `src/components/site/Skills.tsx`
- **Experience**: Modify work experience in `src/components/site/Experience.tsx`

## 🌟 Key Features Explained

### **Spider Web Background**

The animated spider web background (`SpiderWebBackground.tsx`) creates a unique visual experience with:

- Parallax effects on mouse movement
- Floating particles with custom animations
- Multiple web layers with different opacities
- Smooth transitions and responsive behavior

### **Theme System**

Built with `next-themes` for seamless dark/light mode switching:

- Persistent theme preference
- Smooth transitions between themes
- CSS variables for consistent theming
- Automatic system theme detection

### **Responsive Design**

Fully responsive with mobile-first approach:

- Mobile navigation with hamburger menu
- Adaptive layouts for all screen sizes
- Touch-friendly interactions
- Optimized typography scaling

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 🚀 Deployment

### **Build for Production**

```bash
npm run build
```

### **Deploy to Vercel**

1. Connect your GitHub repository to Vercel
2. Vercel will automatically detect the Vite configuration
3. Deploy with zero configuration

### **Deploy to Netlify**

1. Build the project: `npm run build`
2. Upload the `dist` folder to Netlify
3. Configure build settings if needed

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 📞 Contact

- **Email**: mmoidsufiyan4151@gmail.com
- **LinkedIn**: [Mohammed Moid Sufiyan](https://www.linkedin.com/in/mohammed-moid-sufiyan-296a30302/)
- **GitHub**: [moidsufiyan](https://github.com/moidsufiyan)

---

**Built with ❤️ using React, TypeScript, and Tailwind CSS**
