# Vaishnav Byju — Professional Cybersecurity Portfolio

> **Cybersecurity Analyst & Security Researcher**  
> Securing Digital Environments Through Continuous Learning, Hands-On Defense & Practical Research.

[![Vercel Deployment](https://img.shields.io/badge/Deploy-Vercel%20Free%20Tier-black?style=flat&logo=vercel)](https://vercel.com)
[![GitHub Pages](https://img.shields.io/badge/Deploy-GitHub%20Pages-blue?style=flat&logo=github)](https://pages.github.com)
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)

---

## 🛡️ Profile Highlights

- **Role**: Cybersecurity Analyst & Security Researcher
- **Education**: Bachelor of Computer Applications (BCA) at **Marian College Kuttikkanam (Autonomous)** (NAAC A++)
- **Academic Standing**: **9.76 SCPA** | Recipient of the prestigious **Marian Golden Band Award (A+ Grade)**
- **Competitions & Wins**:
  - 🏆 **1st Place Winner** — DEXTRA 2K26 Inter-Collegiate Hackathon (Rajagiri College RCMAS)
  - 🎖️ **5th Place Citation** — KRUU GRASP 2026 Hackathon (Powered by ASME India)
  - 🛡️ **DEXTRA 2K26 CTF Challenge** (Association with ISRA - Information Security Research Association)
  - 🎯 **Smart India Hackathon (SIH 2026)** Institutional Selection
- **Internships**:
  - **IPSR Solutions Ltd**: AI-Integrated Cloud, DevOps & Cybersecurity Intern (8 Weeks / 240 Hrs)
  - **Tata (via Forage)**: Cybersecurity Analyst Job Simulation (IAM Architecture)
  - **Deloitte Australia (via Forage)**: Cyber Job Simulation (Threat Modeling & Defense)
  - **Intrainz Innovation**: Cybersecurity Intern (Network Security & VAPT Fundamentals)
- **Community**: Volunteer & Organizer with **Mozilla Responsible Computing Challenge (RCC)**, **CampusCrew 100K Milestone Honor**.

---

## 📁 Repository Directory Structure

```text
Personal-Portfolio/
├── assets/
│   ├── css/                     # Bootstrap, AOS, Swiper, Magnific Popup, Main styles
│   ├── docs/                    # Standardized document storage
│   │   ├── Vaishnav_Byju_Resume.pdf  # Primary resume file (frequently updated)
│   │   └── resume.pdf           # Alias link
│   ├── images/
│   │   ├── certificates/        # High-res competition, internship & course certificates
│   │   ├── logo/                # Custom Vaishnav.Sec logo & favicon
│   │   ├── profile/             # Professional profile photography
│   │   ├── projects/            # Cyber-themed project graphics & cards
│   │   ├── shapes/              # Ambient hero contours & layout shapes
│   │   └── thumbs/              # Thumbnails for hover-reveal widgets & sliders
│   └── js/
│       ├── portfolio-data.js    # CENTRALIZED DATA STORE (edit content here easily!)
│       ├── portfolio-renderer.js# Dynamic lightbox & interaction controller
│       ├── main.js              # Template core animations & offcanvas menu
│       └── ...                  # GSAP, Swiper, AOS, PureCounter libraries
├── index.html                   # Main semantic portfolio page
├── vercel.json                  # Free tier Vercel deployment configuration
└── README.md                    # Documentation & maintenance guide
```

---

## 🚀 How to Run Locally

Because this is a pure client-side static site, no complicated Node or Python build tool is required:

### Option A: Using Python (Recommended)
```bash
python -m http.server 8080
```
Open **[http://localhost:8080](http://localhost:8080)** in your browser.

### Option B: Using Node.js (npx serve)
```bash
npx serve .
```

---

## 🌐 1-Click Free Hosting & Deployment

### 1. Deploying to Vercel (Free Tier)
1. Push this repository to your GitHub account (`vaishnav-byju/Personal-Portfolio`).
2. Go to **[vercel.com](https://vercel.com)** and sign in with GitHub.
3. Click **Add New...** > **Project**.
4. Import `Personal-Portfolio`.
5. Keep default settings (Framework preset: `Other`, Root Directory: `./`).
6. Click **Deploy**. Vercel will give you a live production URL with automatic HTTPS and global CDN.

### 2. Deploying to GitHub Pages (Free)
1. On GitHub, go to your repository **Settings** > **Pages**.
2. Under **Build and deployment** > **Branch**, select `main` and `/ (root)`.
3. Click **Save**.
4. Your site will be published at:  
   `https://vaishnav-byju.github.io/Personal-Portfolio/`

---

## 🔄 Easy Content Updates & Maintenance

### 1. Updating Your Resume
To update your resume without touching any code:
1. Save your new PDF with the exact filename:
   `assets/docs/Vaishnav_Byju_Resume.pdf`
2. Commit and push:
   ```bash
   git add assets/docs/Vaishnav_Byju_Resume.pdf
   git commit -m "Update resume"
   git push
   ```
All download and view links across the website will instantly point to your new resume!

### 2. Adding New Projects or Certificates
All portfolio data is cleanly separated in `assets/js/portfolio-data.js`:
- To add a certificate: drop the image into `assets/images/certificates/` and add an entry under `certificatesList` in `assets/js/portfolio-data.js`.
- To add a project: drop the thumbnail into `assets/images/projects/` and add an entry under `projects` in `assets/js/portfolio-data.js`.

---

## 📬 Contact & Connect

- **Email**: [vaishnavbyju444@gmail.com](mailto:vaishnavbyju444@gmail.com)
- **Phone**: +91 9746060388
- **LinkedIn**: [linkedin.com/in/vaishnav-byju](https://www.linkedin.com/in/vaishnav-byju/)
- **GitHub**: [github.com/vaishnav-byju](https://github.com/vaishnav-byju)
