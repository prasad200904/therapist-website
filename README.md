# 🧠 Therapist Website – Dr. Serena Blake

A modern, responsive therapist portfolio website built with **Next.js 15**, **TypeScript**, and **Tailwind CSS**, designed as an internship assignment for *Grow My Therapy*. This site showcases the therapist's profile, services, FAQs, and a contact form.

### 🔗 Live Demo
[https://therapist-website.vercel.app](https://therapist-website-xqea.vercel.app/)

---

## 📁 Project Structure

my-therapy-site/
├── src/
│ ├── app/
│ │ ├── components/ # Reusable UI components
│ │ │ ├── Navbar.tsx
│ │ │ ├── Hero.tsx
│ │ │ ├── About.tsx
│ │ │ ├── Services.tsx
│ │ │ ├── FAQ.tsx
│ │ │ └── ContactForm.tsx
│ │ └── page.tsx # Root page layout
├── public/ # Static assets
├── styles/ # Global styles (if any)
├── package.json
├── tailwind.config.js
├── tsconfig.json
└── README.md

---

## 🧩 Features

✅ Responsive layout  
✅ Fully mobile-first design  
✅ Navigation bar with toggle menu  
✅ Smooth scrolling to sections  
✅ Accessible form validation  
✅ Clean, modern UI using Tailwind  
✅ Deployed with Vercel  
✅ Type-safe (TypeScript)  

---

## ⚙️ Tech Stack

- **Frontend**: Next.js 15 (App Router)
- **Styling**: Tailwind CSS
- **Type Checking**: TypeScript
- **Icons**: Lucide React
- **Deployment**: Vercel

---

## 🚀 Getting Started

### 1. Clone the repo

```bash
git clone https://github.com/prasad200904/therapist-website.git
cd therapist-website

2. Install dependencies
bash
Copy
Edit
npm install
3. Run the development server
bash
Copy
Edit
npm run dev
Open http://localhost:3000 in your browser.

📬 Contact Form Setup
Currently, the contact form is client-side only. To enable submissions:

Use a backend service (e.g., Formspree, EmailJS, Nodemailer).

OR connect to an API endpoint in Next.js.

📦 Deployment
This project is deployed using Vercel. Every push to main branch auto-triggers a deployment.

✍️ Author
Prasad Vundraladurga
B.Tech (IoT), Potti Sriramulu College
GitHub

📄 License
MIT License – Free to use and modify for educational or internship purposes.

yaml
Copy
Edit

---

Would you like me to:
- Upload this to your GitHub `README.md`?
- Add contact backend using EmailJS or Formspree?
- Create a custom domain on Vercel?

Let me know what you need next!


This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
