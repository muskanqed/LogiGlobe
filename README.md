# LogiGlobe 🌐🚚

> **Next-Generation Intelligent Logistics & Supply Chain Digital-Twin Platform**

[![Next.js](https://img.shields.io/badge/Next.js-16.0-black?style=flat-square&logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19-blue?style=flat-square&logo=react)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?style=flat-square&logo=typescript)](https://www.typescriptlang.org/)
[![Three.js](https://img.shields.io/badge/Three.js-3D_Globe-black?style=flat-square&logo=threedotjs)](https://threejs.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4-38B2AC?style=flat-square&logo=tailwind-css)](https://tailwindcss.com/)
[![Vercel Deployment](https://img.shields.io/badge/Live_Deployment-Vercel-black?style=flat-square&logo=vercel)](https://logi-globe.vercel.app/)

---

## 🎬 Project Preview & Demo

Experience LogiGlobe in action — from interactive 3D digital-twin globe visualizations to shipment tracking and partner registration workflows:

<div align="center">

<p>
  🌐 <strong>Live Website:</strong> <a href="https://logi-globe.vercel.app/"><strong>https://logi-globe.vercel.app/</strong></a>
</p>

<a href="https://logi-globe.vercel.app/">
  <img src="https://img.shields.io/badge/🚀_Visit_Live_Website-logi--globe.vercel.app-000000?style=for-the-badge&logo=vercel&logoColor=white" alt="Visit Live Website on Vercel" />
</a>

</div>

---

## 📖 Table of Contents
- [Project Preview & Demo](#-project-preview--demo)
- [Key Features](#-key-features)
- [Tech Stack](#-tech-stack)
- [Project Structure](#-project-structure)
- [Getting Started](#-getting-started)
- [Docker Deployment](#-docker-deployment)

---

## ✨ Key Features

- **🌐 Interactive 3D Digital Twin Globe**: Built with Three.js and `three-globe` featuring real-time logistics route arcs, animated points of interest, and atmospheric glow.
- **📦 Multi-Modal Logistics Tracking**: End-to-end status tracking across surface, air, and ocean transport networks.
- **🤝 Vendor & Carrier Onboarding**: Dynamic partner registration with fleet detail specification and validation.
- **💼 Careers Portal**: Role discovery and job application pipelines with file attachments and server-side notification handling.
- **🎨 Modern Responsive Interface**: Fluid typography, dark/light theme support, and micro-interactions powered by Framer Motion and Radix UI.

---

## 🛠 Tech Stack

| Layer | Technologies |
| :--- | :--- |
| **Framework** | [Next.js](https://nextjs.org/) (App Router, Server & Client Components) |
| **UI Library** | [React 19](https://react.dev/), [Radix UI](https://www.radix-ui.com/), [Sonner](https://sonner.emilkowal.ski/) |
| **Styling** | [Tailwind CSS v4](https://tailwindcss.com/), `tw-animate-css` |
| **3D & Visualization** | [Three.js](https://threejs.org/), `@react-three/fiber`, `@react-three/drei`, `three-globe`, [Recharts](https://recharts.org/) |
| **Animations** | [Framer Motion](https://www.framer.com/motion/), CSS Keyframes |
| **Forms & Validation** | [React Hook Form](https://react-hook-form.com/), [Zod](https://zod.dev/) |
| **Containerization** | Docker, Docker Compose |

---

## 📂 Project Structure

```text
LogiGlobe/
├── app/                  # Next.js App Router (pages & API endpoints)
│   ├── about/            # About page
│   ├── api/              # API routes (contact, careers, partners)
│   ├── careers/          # Career listings & application portal
│   ├── partners/         # Partner registration & fleet submission
│   ├── track/            # Shipment tracking view
│   ├── globals.css       # Design tokens & core theme styling
│   └── page.tsx          # Landing page with 3D Digital Twin
├── components/           # Reusable UI & section components
│   ├── careers/          # Career application forms & components
│   ├── landing/          # Landing sections (Hero, Globe, Stats, etc.)
│   ├── partners/         # Carrier registration components
│   └── ui/               # Radix & primitive design components
├── data/                 # Static content & site metrics
├── docs/                 # Documentation & media assets
│   └── assets/
│       └── logiglobe-demo.mp4  # Demo video recording
├── lib/                  # Utilities, validations & email templates
├── public/               # Static images, vectors & brand assets
├── Dockerfile            # Container configuration
├── package.json          # Project dependencies & scripts
└── README.md             # Project documentation & preview
```

---

## 🚀 Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) (v18.18.0 or later recommended)
- `npm`, `pnpm`, or `bun`

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/muskanqed/LogiGlobe.git
   cd LogiGlobe
   ```

2. **Install dependencies:**
   ```bash
   npm install
   # or
   pnpm install
   # or
   bun install
   ```

3. **Run the development server:**
   ```bash
   npm run dev
   ```

4. **Open in browser:**
   Navigate to [http://localhost:3000](http://localhost:3000) to view the application.

---

## 🐳 Docker Deployment

To build and run the application using Docker:

```bash
# Build the Docker image
docker build -t logiglobe .

# Run the container
docker run -p 3000:3000 logiglobe
```

The application will be accessible at [http://localhost:3000](http://localhost:3000).
