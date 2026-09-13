# 🏢 Sterling Technical Group — Web Application

A modern, zero-latency static web platform engineered for **Sterling Technical Group** — specialists in precision construction estimating, electrical takeoff, and IT project cost modeling for commercial and residential developments.

---

## 🚀 Key Features & Highlights

- **⚡ Static Site Generation (SSG)**: Compiled via Next.js (`output: 'export'`) into pure static HTML/CSS/JS for sub-millisecond page loads and zero server infrastructure overhead.
- **🎨 Modular Design System**: Standardized 5-token color palette (`$color-coral`, `$color-stone`, `$color-paper`, `$color-black`, `$color-white`) paired with Space Grotesk typography and responsive `rem`-based SCSS modules.
- **🧪 Interactive Storybook 8 Suite**: Isolated UI component workspace and visual documentation (`.storybook/`) displaying live design tokens, typography specs, and button states.
- **🛡️ Dynamic Form Validation & Anti-Spam Security**:
  - **Full Name**: Strict minimum 3-character rule with letter-only validation.
  - **Company**: Enforced 20-character maximum limit.
  - **Email**: RFC-compliant regex supporting `.co`, `.com`, `.io`, etc.
  - **Phone**: Validated for 11 to 15 numeric digits with character filtering.
  - **Message**: Automated link/URL detection to block spam.
  - **Uncontrolled Honeypot Trap**: Hidden input (`honeypotRef`) that silently drops bot submissions without clearing form state.
- **📧 EmailJS Integration & Branded Template**: Direct client-side email dispatch with custom Sterling Coral (`#F95C4B`) header and footer templates.
- **🔍 SEO & AEO Production Suite**: Configured with OpenGraph, Twitter Cards (`summary_large_image`), Google indexing directives (`robots`), and semantic HTML optimized for AI Search (ChatGPT, Perplexity, Gemini).
- **📱 Responsive UX & Scroll-Spy Navigation**: Sticky top navbar (7rem desktop / 5rem mobile) with an interactive mobile hamburger drawer and dynamic scroll-spy active link tracking.

---

## 🛠️ Tech Stack

| Category | Technology |
| :--- | :--- |
| **Framework** | Next.js 14 (App Router, Static Export) |
| **Language** | React 18, TypeScript 5 |
| **Styling** | SCSS Modules, CSS Design Tokens |
| **Component Testing** | Storybook 8 |
| **Icons & UI** | Ant Design Icons |
| **Email Delivery** | EmailJS Browser SDK |
| **Font System** | Google Fonts (Space Grotesk with `display: 'swap'`) |

---

## 📁 Directory Structure

```text
sterling/
├── .storybook/              # Storybook 8 configuration & preview settings
│   ├── main.ts
│   ├── preview.ts
│   └── tsconfig.json
├── public/                  # Static assets & brand media
│   ├── Sterling-26.png       # Primary logo asset
│   ├── projects.png         # Featured project image (Sol on Park)
│   ├── clients-29 1.png     # Testimonial headshots
│   ├── clients-30 1.png
│   └── clients-31 1.png
├── src/
│   ├── app/                 # Next.js App Router root layout & global SCSS
│   │   ├── globals.scss
│   │   ├── layout.tsx       # SEO/AEO Metadata & Root Layout
│   │   └── page.tsx         # Main Landing Page
│   ├── components/          # Layout & Section Components
│   │   ├── layout/          # Header (with sticky drawer) & Footer
│   │   └── sections/        # Hero, Features, Vision, Projects, Testimonials, Contact
│   ├── design-system/       # Atomic Design System (Tokens, Mixins, Stories)
│   └── templates/           # Sterling HTML Email Template for EmailJS
├── next.config.mjs          # SSG Export configuration (output: 'export')
├── tsconfig.json            # TypeScript configuration
└── package.json             # Dependencies & scripts
```

---

## ⚙️ Getting Started

### 1. Prerequisites
Ensure you have **Node.js 18+** installed on your system.

### 2. Installation
Clone the repository and install project dependencies:

```bash
git clone https://github.com/SubhanQureshi/sterling-.git
cd sterling-
npm install
```

### 3. Development Server
Run the Next.js local development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.

---

## 🧪 Storybook Integration

To inspect and test UI components in isolation:

```bash
npm run storybook
```

Open [http://localhost:6006](http://localhost:6006) to view the interactive Storybook workspace.

---

## 📦 Production Build & Static Export

To compile the application into pure static HTML/CSS/JS for deployment:

```bash
npm run build
```

The compiled static site output will be generated inside the `out/` folder, ready to be deployed to any static host (GitHub Pages, Vercel, Netlify, Cloudflare Pages, S3).

---

## ✉️ Environment Setup (EmailJS)

To enable live form email delivery, create a `.env.local` file in the project root:

```env
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key
```

---

## 📄 License

Copyright © 2026 **Sterling Technical Group**. All rights reserved.
