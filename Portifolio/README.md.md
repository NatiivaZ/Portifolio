# Modern Portfolio Website with EJS

A dynamic, responsive portfolio website built with Node.js, Express, and EJS template engine, featuring modern animations and a professional design.

## Features

- **EJS Template Engine** - Dynamic content rendering
- **Dark/Light Theme Toggle** - Personalized viewing experience
- **Modern Animations** - AOS, GSAP, and Typed.js for smooth animations
- **Responsive Design** - Works beautifully on all devices
- **Interactive Elements** - Animated counters, skill bars, and 3D card effects
- **Portfolio Filtering** - Filter projects by category with smooth transitions
- **Contact Form** - Ready to connect with serverside processing
- **Scroll Animations** - Elements animate as they enter the viewport
- **Intersection Observer API** - For performant scroll-based animations

## Technologies Used

- Node.js and Express
- EJS (Embedded JavaScript templates)
- GSAP (GreenSock Animation Platform)
- AOS (Animate On Scroll)
- Typed.js for text animations
- CSS Variables and Custom Properties
- Intersection Observer API
- Local Storage for theme preferences

## Directory Structure

```
portfolio-website/
│
├── app.js                # Express server and routes
├── package.json          # Project dependencies
│
├── views/                # EJS templates
│   ├── index.ejs         # Main template
│   └── partials/         # Reusable template parts
│       ├── header.ejs    # Header section
│       └── footer.ejs    # Footer section
│
├── public/               # Static assets
│   ├── css/
│   │   └── style.css     # Stylesheet
│   ├── js/
│   │   └── script.js     # JavaScript functionality
│   └── images/           # Image directory
│       ├── hero-bg.jpg
│       ├── counter-bg.jpg
│       ├── profile.jpg
│       └── project1.jpg - project6.jpg
│
└── README.md             # This file
```

## Installation and Setup

1. Make sure you have Node.js installed
2. Clone this repository
3. Install dependencies:
   ```
   npm install
   ```
4. Add your images to the `public/images` folder
5. Start the development server:
   ```
   npm run dev
   ```
6. Open `http://localhost:3000` in your browser

## Customization

### Personal Information

Edit the `app.js` file to update your personal information in the `portfolioData` object:

- Name, role, and about content
- Skills and their percentages
- Services offered
- Portfolio projects
- Contact information
- Social media links

### Theme and Colors

The website uses CSS variables for theming. To change the color scheme, edit the variables in the `:root` section of `public/css/style.css`:

```css
:root {
    --primary-color: #4361EE;
    --secondary-color: #3F37C9;
    --accent-color: #4CC9F0;
    /* other variables */
}
```

### Adding More Projects

To add more projects to the portfolio section, add new objects to the `projects` array in the `portfolioData` object in `app.js`:

```javascript
projects: [
    {
        id: 7, // Increment the ID
        title: "New Project",
        category: "web", // web, app, or design
        image: "project7.jpg",
        description: "Project Description"
    },
    // more projects
]
```

## Features Explained

### Dark/Light Mode

The website includes a dark/light mode toggle that saves the user's preference to local storage. The theme is applied using CSS variables and the `data-theme` attribute.

### Animated Counters

The counters in the statistics section animate when they enter the viewport, counting up to their target values.

### Skill Bars Animation

The skill bars animate to their specified percentage when the About section enters the viewport.

### Portfolio Filtering

Projects can be filtered by category with smooth GSAP animations.

### 3D Card Effect

The portfolio items have a 3D tilt effect when hovered, creating an interactive experience.

### Typed.js Animation

The hero section features a typing animation that cycles through different roles.

## Browser Support

- Chrome
- Firefox
- Safari
- Edge

## License

This project is open source and available under the [MIT License](LICENSE). 