# Marwan Mohammed — Developer Portfolio Website

A modern, high-performance, bilingual (Arabic & English) single-page developer portfolio website built for **Marwan Mohammed**, Software Developer specializing in AI, workflow automation, API integration, and practical business software solutions.

Built strictly with **semantic HTML5, modern CSS3, and vanilla JavaScript** without external frontend frameworks or heavy dependencies.

---

## 🌟 Highlights & Features

- **Bilingual & RTL-Ready**: Seamless real-time switching between English (LTR) and Arabic (RTL) with dynamic `dir="rtl"`, `lang="ar"`, and persistent language preference in `localStorage`.
- **Dark Mode by Default with Theme Toggle**: obsidian/charcoal dark theme accented by refined gold tones (`#d4af37`), with a light theme toggle option.
- **Glassmorphism & Micro-Interactions**: Tasteful backdrop blur filters, delicate border glows, and scroll-triggered animations powered by `IntersectionObserver`.
- **Responsive & Accessible**: Fully responsive across mobile, tablet, laptop, and ultra-wide screens with zero horizontal overflow, visible focus indicators, and support for `prefers-reduced-motion`.
- **Featured Projects & Categorized Filtering**: Filter by category (All, Automation & APIs, Data & Reporting, Planned & Concepts) with an accessible Project Details modal.
- **Honest Skill Representation**: Categorized skills covering programming, workflow automation (n8n, Amazon SP-API, LWA), data processing, and AI-assisted workflows without fake percentage meters.
- **Frontend Contact Form with Validation**: Client-side validation with explicit bilingual notification clarifying that the form is a frontend demonstration. Direct WhatsApp and social channel links are integrated.

---

## 📁 Project File Structure

```text
/
├── index.html                  # Semantic HTML5 markup with bilingual hooks and ARIA attributes
├── css/
│   └── style.css               # Modern CSS with custom properties, RTL support, and theme variables
├── js/
│   └── script.js               # Vanilla JS engine: i18n dictionary, theme switch, modal, filtering, validation
├── assets/
│   ├── images/
│   │   ├── profile-placeholder.svg # Monogram avatar SVG placeholder with initials MM
│   │   └── profile.jpg         # (Drop your portrait photo here)
│   ├── icons/
│   │   ├── automation.svg      # Automation icon
│   │   ├── whatsapp.svg        # WhatsApp brand icon
│   │   ├── facebook.svg        # Facebook brand icon
│   │   └── instagram.svg       # Instagram brand icon
│   └── screenshots/
│       └── amazon-workflow-diagram.svg # Amazon SP-API & n8n architecture pipeline diagram
└── README.md                   # Full documentation and deployment guide
```

---

## 🚀 How to Run Locally

Because this project is built entirely with vanilla web standards, you do not need Node.js, npm, or build tools to run it.

### Method 1: Double Click or Direct Browser Open
Simply double-click `index.html` or right-click `index.html` and select **Open with Google Chrome / Microsoft Edge / Firefox**.

### Method 2: Local HTTP Server (Recommended)
Using a lightweight local server ensures optimal font loading and asset caching:

**Using Python:**
```bash
# If Python 3 is installed:
python -m http.server 8000
```
Then visit `http://localhost:8000` in your web browser.

**Using VS Code Live Server:**
1. Open the project folder in VS Code.
2. Click **Go Live** on the status bar (using the Live Server extension).

---

## 🖼️ How to Replace the Portrait Placeholder

In the About section, the portfolio includes a local placeholder image (`assets/images/profile-placeholder.svg`) along with an initials "MM" monogram avatar.

To use your actual personal photograph:
1. Save your professional square or 1:1 portrait photograph as **`profile.jpg`**.
2. Place it into the **`assets/images/`** folder:
   ```text
   assets/images/profile.jpg
   ```
3. In `index.html`, locate line 147:
   ```html
   <img id="profile-img" src="assets/images/profile-placeholder.svg" alt="Marwan Mohammed - Software Developer" class="profile-img" />
   ```
   Change `src="assets/images/profile-placeholder.svg"` to `src="assets/images/profile.jpg"`.
4. If the image fails to load or is missing, the code automatically falls back to the initials monogram "MM" without displaying a broken image icon.

---

## 🛠️ How to Edit Projects and Links

### Adding or Updating Projects
All projects are stored as clean JavaScript objects in `js/script.js` inside the `projectsData` array:

```javascript
{
  id: "amazon-automation",
  category: "automation", // "automation" | "data" | "planned"
  status: "live",         // "live" | "planned" | "concept"
  badgeKey: "statusLive",
  title: {
    en: "Amazon Financial Automation",
    ar: "أتمتة البيانات المالية لأمازون"
  },
  shortDesc: {
    en: "An n8n-based automation workflow...",
    ar: "سير عمل آلي باستخدام n8n..."
  },
  technologies: ["n8n", "Amazon SP-API", "REST APIs", "JSON", "Google Sheets"],
  outcomes: {
    en: ["Connects the Amazon account...", "Reduces fragmented..."],
    ar: ["يربط حساب أمازون...", "يقلل الجمع اليدوي..."]
  }
}
```

To add a new project, simply append a new object to `projectsData`.

### Updating Contact Links
The confirmed contact channels in `index.html` and `js/script.js` are:
- **WhatsApp**: `https://wa.me/201044714857` (Display: `+201044714857`)
- **Facebook**: `https://www.facebook.com/marwan.mohamed.694914`
- **Instagram**: `https://www.instagram.com/`

To update any link, search for the URL in `index.html` and replace it with your updated handle or endpoint.

---

## ✉️ Connecting the Contact Form to a Backend Service

The contact form included in this project runs client-side with validation for name, email, and message. A bilingual notice is shown to inform visitors that it is currently a frontend demonstration.

To connect this form to receive real messages directly in your inbox, you can use any free form backend service:

### Option A: Using Formspree (Quickest & Free)
1. Register for a free account at [formspree.io](https://formspree.io).
2. Create a new form and copy your Form ID (e.g., `https://formspree.io/f/xyzabw`).
3. In `index.html`, update the `<form>` element:
   ```html
   <form id="portfolio-contact-form" action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
   ```

### Option B: Using Web3Forms (No Signup Required)
1. Visit [web3forms.com](https://web3forms.com) and get an Access Key.
2. Add a hidden input to the form:
   ```html
   <input type="hidden" name="access_key" value="YOUR_ACCESS_KEY_HERE">
   ```
3. Set the form action to `https://api.web3forms.com/submit`.

### Option C: Using EmailJS
1. Sign up on [emailjs.com](https://www.emailjs.com/).
2. Connect your Gmail or custom email address.
3. Trigger `emailjs.sendForm(...)` in `js/script.js` inside the `form.addEventListener('submit', ...)` handler.

---

## 🌐 Publishing as a Static Website

This website can be deployed for free on any modern static web host.

### 1. GitHub Pages
1. Create a new GitHub repository (e.g., `marwan-portfolio`).
2. Push your repository code:
   ```bash
   git init
   git add .
   git commit -m "Initial portfolio release"
   git branch -M main
   git remote add origin https://github.com/USERNAME/marwan-portfolio.git
   git push -u origin main
   ```
3. In your repository settings, go to **Pages** > **Branch** > select `main` and `/ (root)`.
4. Your website will be live at `https://USERNAME.github.io/marwan-portfolio/`.

### 2. Netlify
1. Drag and drop the project folder directly into [app.netlify.com/drop](https://app.netlify.com/drop).
2. Your site is deployed in seconds with free SSL and custom domain support.

### 3. Vercel
1. Install Vercel CLI: `npm i -g vercel`.
2. Run `vercel` inside the project folder and follow the prompts.

---

## 📄 License & Credits

- Designed and built for **Marwan Mohammed**.
- Fonts: [Space Grotesk](https://fonts.google.com/specimen/Space+Grotesk), [Inter](https://fonts.google.com/specimen/Inter), and [Cairo](https://fonts.google.com/specimen/Cairo) from Google Fonts.
- Pure vanilla HTML5, CSS3, and JavaScript — 0 external dependencies.
