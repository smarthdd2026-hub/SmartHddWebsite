# Cloudflare Pages Deployment Guide

## 📤 Step 1: Push to GitHub

```bash
git add .
git commit -m "Complete SmartHDD website"
git push origin main
```

## ☁️ Step 2: Deploy to Cloudflare Pages

1. Go to [Cloudflare Dashboard](https://dash.cloudflare.com/)
2. Click **Workers & Pages** → **Create Application** → **Pages** → **Connect to Git**
3. Select your GitHub repository: `SmartHddWebsite`
4. Configure build settings:
   - **Framework preset:** Next.js
   - **Build command:** `npm run build`
   - **Build output directory:** `.next`
   - **Root directory:** `/` (leave empty or set to root)
   - **Environment variables:** None required
   - **IMPORTANT:** Leave "Deploy command" empty - Cloudflare will auto-detect Next.js
5. Click **Save and Deploy**

### ⚠️ Important Notes:
- **Do NOT set a custom deploy command** - Cloudflare Pages has built-in Next.js support
- The build will use Cloudflare's automatic Next.js adapter
- If you see wrangler errors, make sure no deploy command is set in Cloudflare dashboard

## 🔄 Automatic Deployments

Every time you push to the `main` branch, Cloudflare will automatically:
- Pull the latest code
- Run `npm install`
- Run `npm run build`
- Deploy the new version

## 🌐 Custom Domain (Optional)

After deployment:
1. Go to your Pages project → **Custom domains**
2. Add your domain (e.g., `smarthdd.com`)
3. Follow DNS configuration instructions

---

## 📥 Software Download Setup

### Current Status
The download button in `/download` page currently links to `#` (placeholder).

### Option 1: GitHub Releases (Recommended for 300MB file)

1. **Upload your installer to GitHub Releases:**
   ```bash
   # Create a new release on GitHub
   # Go to: https://github.com/smarthdd2026-hub/SmartHddWebsite/releases/new
   # Tag: v1.0.0
   # Title: SmartHDD Software v1.0.0
   # Upload: SmartHDD-Setup.exe (your 300MB installer)
   ```

2. **Update the download link:**
   - Edit `src/app/[locale]/download/page.tsx`
   - Line 28: Change `href="#"` to:
   ```tsx
   href="https://github.com/smarthdd2026-hub/SmartHddWebsite/releases/download/v1.0.0/SmartHDD-Setup.exe"
   ```

### Option 2: Cloudflare R2 Storage (Alternative)

If you want to host on Cloudflare:
1. Create R2 bucket in Cloudflare
2. Upload installer file
3. Make it public or use signed URLs
4. Update download link to R2 URL

### Option 3: Direct Server Hosting

Host on your own server and link directly:
```tsx
href="https://yourdomain.com/downloads/SmartHDD-Setup.exe"
```

---

## 🔧 Environment Variables (If Needed Later)

For admin panel or email functionality, add in Cloudflare Pages:
1. Go to **Settings** → **Environment variables**
2. Add variables like:
   - `ADMIN_PASSWORD`
   - `EMAIL_API_KEY`
   - etc.

---

## ✅ Verification Checklist

After deployment:
- [ ] Website loads at Cloudflare URL
- [ ] All 3 languages work (EN, HE, RU)
- [ ] Navigation works on all pages
- [ ] Download link points to correct file
- [ ] Contact form displays (backend not yet implemented)
- [ ] Mobile responsive design works
- [ ] RTL layout works for Hebrew

---

## 🚨 Important Notes

1. **No Admin Panel Yet** - Content must be edited in code and pushed to GitHub
2. **Contact Form** - Currently shows success message locally, needs email service integration
3. **Download Link** - Must be updated manually after uploading installer
4. **Static Site** - This is a static Next.js site, no server-side features yet
