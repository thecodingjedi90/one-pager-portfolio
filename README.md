# Parjanya Roy - Professional Resume Website

A modern, data-driven resume website built with Astro, Tailwind CSS, and JSON. Optimized for GitHub Pages deployment and print-to-PDF functionality.

## 🚀 Features

- **Data-Driven Architecture**: All content pulled from `src/data/resume.json` for easy updates
- **Professional Design**: Custom Tailwind CSS theme with Salesforce and Amazon brand colors
- **GenAI Spotlight**: Visual highlighting of AI/ML work with special styling
- **Print Optimized**: Clean 1-page PDF output with `@media print` styles
- **Responsive Design**: Mobile-first, looks great on all devices
- **SEO Ready**: Proper meta tags and semantic HTML
- **Automated Deployment**: GitHub Actions workflow for continuous deployment

## 🎨 Custom Theme

The site uses a custom Tailwind CSS theme with these colors:
- **Brand Primary**: `#1e293b` (Slate 800)
- **Brand Accent**: `#4f46e5` (Indigo 600)
- **Amazon Orange**: `#ff9900`
- **Salesforce Blue**: `#00a1e0`

## 📝 Updating Your Resume

Simply edit the `src/data/resume.json` file with your information. The entire site is automatically generated from this JSON data, including:

- Personal information and contact details
- Professional experience with timeline visualization
- Technical skills grouped by category
- Certifications with visual badges
- Education details

### JSON Structure

```json
{
  "basics": { /* Name, title, contact info, location */ },
  "work": [ /* Professional experience array */ ],
  "education": [ /* Education history */ ],
  "certificates": [ /* Certifications */ ],
  "skills": [ /* Technical skills by category */ ]
}
```

## 🛠️ Development

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Local Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

The dev server will start at `http://localhost:4321`

## 🚀 Deployment to GitHub Pages

### Initial Setup

1. **Create a GitHub Repository**
   - Go to https://github.com/new
   - Repository name: `Project_Resume` (or your preferred name)
   - Make it Public (required for free GitHub Pages)
   - Do NOT initialize with README (we already have one)
   - Click "Create repository"

2. **Update Astro Configuration** (if using different repo name)
   
   Edit `astro.config.mjs`:
   ```js
   export default defineConfig({
     site: 'https://YOUR_USERNAME.github.io',
     base: '/YOUR_REPO_NAME',  // Change this to your repo name
   });
   ```

3. **Initialize Git and Push Code**
   
   ```bash
   # Initialize git repository
   git init
   
   # Add all files to staging
   git add .
   
   # Commit with message
   git commit -m "Initial commit: Astro resume website"
   
   # Rename branch to main
   git branch -M main
   
   # Add remote repository (replace YOUR_USERNAME and REPO_NAME)
   git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
   
   # Push code to GitHub
   git push -u origin main
   ```

4. **Enable GitHub Pages**
   - Go to your repository on GitHub
   - Navigate to **Settings** → **Pages** (left sidebar)
   - Under "Build and deployment":
     - Source: **GitHub Actions**
   - Save changes

5. **Wait for Deployment**
   - Go to **Actions** tab in your repository
   - You should see a workflow running
   - Wait for it to complete (green checkmark)
   - Your site will be live at: `https://YOUR_USERNAME.github.io/YOUR_REPO_NAME/`

### Making Updates (Commit & Push)

After making changes to your resume or code:

```bash
# Check what files changed
git status

# Add specific files
git add src/data/resume.json
git add src/data/achievements.json

# Or add all changed files
git add .

# Commit with descriptive message
git commit -m "Update work experience and achievements"

# Push to GitHub (triggers auto-deployment)
git push
```

### Common Git Commands

```bash
# View commit history
git log --oneline

# See what changed in files
git diff

# Undo changes to a file (before commit)
git checkout -- filename.json

# Create a new branch for testing
git checkout -b feature/new-design

# Switch back to main branch
git checkout main

# Merge branch into main
git merge feature/new-design
```

### Deployment Workflow

The `.github/workflows/deploy.yml` file handles automatic deployment:

1. **Trigger**: Runs on every push to `main` branch
2. **Build**: Installs dependencies and builds the site
3. **Deploy**: Automatically publishes to GitHub Pages
4. **Result**: Live site updates in ~2-3 minutes

### Troubleshooting Deployment

**Site not loading?**
- Check Actions tab for deployment errors
- Verify `base` in `astro.config.mjs` matches your repo name
- Ensure GitHub Pages source is set to "GitHub Actions"

**404 errors on page refresh?**
- This is normal for GitHub Pages with single-page apps
- Users can navigate using the tabs on the site

**Images not displaying?**
- Check image paths start with `/YOUR_REPO_NAME/`
- Place images in `public/` directory
- Verify image filenames match exactly (case-sensitive)

### Manual Deployment

If you prefer manual deployment:

```bash
npm run build
# Then deploy the dist/ folder to your hosting provider
```

## 📄 Print to PDF

Click the "Download PDF" button in the sticky navigation, or use your browser's print function (Cmd/Ctrl + P). The print styles are optimized for a clean, professional 1-page resume.

## 🎯 Component Architecture

- **Layout.astro**: Base HTML wrapper with SEO tags and print styles
- **Header.astro**: Name, title, and contact information
- **ExperienceItem.astro**: Timeline-based work experience display
- **CertificationBadge.astro**: Pill-style certification badges
- **SkillSection.astro**: Grouped technical skills display

All components dynamically pull data from `resume.json`.

## 🔧 Customization

### Changing Colors

Edit `tailwind.config.mjs` to update the color scheme:

```js
colors: {
  brand: {
    primary: '#YOUR_COLOR',
    accent: '#YOUR_COLOR',
  },
  tech: {
    amazon: '#YOUR_COLOR',
    salesforce: '#YOUR_COLOR',
  }
}
```

### Changing Base URL

If deploying to a different repository name, update `astro.config.mjs`:

```js
export default defineConfig({
  site: 'https://YOUR_USERNAME.github.io',
  base: '/YOUR_REPO_NAME',
});
```

## 📦 Tech Stack

- **Astro 4.x**: Static Site Generation
- **Tailwind CSS 3.x**: Utility-first styling
- **TypeScript**: Type-safe development
- **GitHub Actions**: CI/CD automation

## 📄 License

This project is open source and available for personal use.

## 🙏 Acknowledgments

Built with modern web technologies for optimal performance and developer experience.