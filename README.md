# ALX Listing App

A modern Airbnb clone built with Next.js, TypeScript, and TailwindCSS. This application provides a seamless experience for browsing and booking unique accommodations.

## 🎯 Project Goals

This project aims to create a fully functional Airbnb clone with the following features:

- Property listing and search functionality
- User authentication and profile management
- Booking system with calendar integration
- Responsive design for mobile and desktop
- Modern UI/UX with reusable components
- Type-safe development with TypeScript

## 🏗️ Project Structure

```
alx-listing-app/
├── components/
│   └── common/
│       ├── Card.tsx          # Reusable card component for property listings
│       └── Button.tsx        # Reusable button component with multiple variants
├── constants/
│   └── index.ts              # App constants, API endpoints, and configuration
├── interfaces/
│   └── index.ts              # TypeScript interfaces and type definitions
├── pages/
│   ├── _app.tsx             # Next.js app component
│   ├── _document.tsx        # Custom document configuration
│   └── index.tsx            # Home page
├── public/
│   └── assets/              # Static assets (images, icons, etc.)
├── styles/
│   └── globals.css          # Global styles with TailwindCSS imports
├── tailwind.config.js       # TailwindCSS configuration
├── tsconfig.json           # TypeScript configuration
└── package.json            # Project dependencies and scripts
```

### Directory Purposes

- **`components/`**: Reusable UI components organized by category (common, layout, etc.)
- **`interfaces/`**: TypeScript type definitions for props, API responses, and data models
- **`constants/`**: Application constants including API URLs, UI text, and configuration settings
- **`public/assets/`**: Static assets like images, icons, and other media files
- **`pages/`**: Next.js pages using the Pages Router (not App Router)
- **`styles/`**: Global styles and TailwindCSS configuration

## 🚀 Getting Started

### Prerequisites

- Node.js 16.8 or later
- npm, yarn, or pnpm package manager

### Installation

1. **Clone the repository** (if applicable) or navigate to the project directory:

   ```bash
   cd alx-listing-app
   ```

2. **Install dependencies**:

   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Run the development server**:

   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

4. **Open your browser** and navigate to [http://localhost:3000](http://localhost:3000) to see the application.

### Available Scripts

- `npm run dev` - Start the development server
- `npm run build` - Build the application for production
- `npm run start` - Start the production server
- `npm run lint` - Run ESLint to check for code issues

## 🛠️ Technology Stack

- **Framework**: Next.js 14+ (Pages Router)
- **Language**: TypeScript
- **Styling**: TailwindCSS
- **Linting**: ESLint
- **Package Manager**: npm/yarn/pnpm

## 📦 Key Components

### Card Component

A flexible, reusable card component for displaying property information including:

- Property images with hover effects
- Title, description, and location
- Price and rating display
- Responsive design with accessibility features

### Button Component

A versatile button component with multiple variants:

- **Variants**: primary, secondary, outline, ghost
- **Sizes**: small, medium, large
- **States**: disabled, loading
- Accessible with proper ARIA attributes

## 🎨 Design System

The application uses TailwindCSS for consistent styling with:

- Responsive design patterns
- Consistent color palette
- Typography scale
- Component variants and states
- Accessibility-first approach

## 📱 Responsive Design

The application is fully responsive and optimized for:

- Mobile devices (320px+)
- Tablets (768px+)
- Desktop computers (1024px+)
- Large screens (1280px+)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/new-feature`
3. Commit your changes: `git commit -m 'Add new feature'`
4. Push to the branch: `git push origin feature/new-feature`
5. Submit a pull request

## 📄 License

This project is part of the ALX Software Engineering program.

## 🔗 Links

- [Next.js Documentation](https://nextjs.org/docs)
- [TypeScript Documentation](https://www.typescriptlang.org/docs/)
- [TailwindCSS Documentation](https://tailwindcss.com/docs)

---

Built with ❤️ for the ALX Software Engineering Program
