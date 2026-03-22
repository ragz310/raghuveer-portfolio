# Deployment Guide - Vercel

## Prerequisites
- GitHub account (free)
- Vercel account (free)
- Domain: raghuveerportfolio.com

## Step 1: Prepare Your Code for GitHub

1. Initialize git (if not already done):
```bash
cd /Users/texys/Documents/Projects/raghuveer-portfolio
git init
git add .
git commit -m "Initial commit: Portfolio project"
```

2. Create a GitHub repository:
   - Go to https://github.com/new
   - Name it `raghuveer-portfolio` (or your preferred name)
   - Create the repository

3. Push your code to GitHub:
```bash
git remote add origin https://github.com/YOUR_USERNAME/raghuveer-portfolio.git
git branch -M main
git push -u origin main
```

## Step 2: Deploy to Vercel

### Option A: Using Vercel Dashboard (Recommended for First-Time)

1. Go to https://vercel.com/new
2. Sign up/Login with GitHub
3. Import your GitHub repository (`raghuveer-portfolio`)
4. Vercel will auto-detect:
   - Framework: Vite
   - Build Command: `npm run build`
   - Output Directory: `dist`
5. Click "Deploy"

### Option B: Using Vercel CLI

```bash
# Install Vercel CLI globally
npm install -g vercel

# Deploy from your project directory
vercel

# Follow the prompts to link your project
# On subsequent deploys, just run: vercel
```

## Step 3: Connect Your Domain

### Via Vercel Dashboard:

1. Go to your project on https://vercel.com/dashboard
2. Click Settings → Domains
3. Add your domain: `raghuveerportfolio.com`
4. Choose connection method:
   - **Option A (Recommended)**: Use Vercel's nameservers
     - Copy the nameservers from Vercel
     - Update your domain registrar's DNS settings
   - **Option B**: Add DNS records to your current registrar
     - Add A record pointing to Vercel's IP
     - Add CNAME records as shown in Vercel

## Step 4: Verify Domain Connection

- DNS changes can take 24-48 hours to propagate
- Check status in Vercel Dashboard → Domains
- Once verified, your site will be live at `https://raghuveerportfolio.com`

## Future Deployments

After the initial setup, deployments happen automatically:
- Push code to GitHub main branch → Vercel auto-deploys
- Use `vercel --prod` for manual production deployments

## Troubleshooting

**Build fails?**
- Check build logs in Vercel Dashboard
- Run `npm run build` locally to test

**Domain not working?**
- Wait 24-48 hours for DNS propagation
- Verify DNS records in Vercel Dashboard

**Local development:**
```bash
npm install  # Install dependencies
npm run dev  # Start dev server at http://localhost:5173
```

## Environment Variables (If Needed Later)

Settings → Environment Variables in Vercel Dashboard
