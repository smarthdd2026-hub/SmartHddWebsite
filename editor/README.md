# SmartHDD Content Editor

**Local WYSIWYG editor for editing website content without touching code.**

## 🚀 Quick Start

### 1. Install Dependencies

```bash
cd editor
npm install
```

### 2. Run the Editor

```bash
npm run dev
```

The editor will open at **http://localhost:3001**

(Your main website runs on port 3000, editor runs on 3001)

## 📝 How to Use

### Editing Content

1. **Switch Languages** - Use the language buttons at the top (English, Hebrew, Russian)
2. **Edit Text** - Click any text field and type your changes
3. **Save Changes** - Click "Save" to save temporarily
4. **Upload Images** - Use the Image Management section to upload logos, hero images, product images
5. **Preview** - Click "Preview Site" to see your main website
6. **Export** - Click "Export to Project" to write changes back to your project files

### After Editing

Once you're happy with your changes:

1. Click **"Export to Project"** - This updates your translation files
2. The following files will be updated:
   - `messages/en.json`
   - `messages/he.json`
   - `messages/ru.json`
3. Commit and push to GitHub:
   ```bash
   git add messages/
   git commit -m "Update website content"
   git push origin main
   ```
4. Cloudflare Pages will automatically deploy your changes

## ✨ Features

- ✅ **Visual Editing** - Edit all text without touching JSON files
- ✅ **Multi-Language** - Switch between English, Hebrew, and Russian
- ✅ **Image Upload** - Upload and manage images
- ✅ **Live Preview** - See your main site while editing
- ✅ **Auto-Export** - One click to update project files
- ✅ **No Code Required** - Pure WYSIWYG interface

## 📂 What You Can Edit

### Navigation
- All menu links

### Hero Section
- Main title
- Subtitle
- Call-to-action buttons

### Problem Section
- Section title
- All 3 problems (title + description)

### Solution Section
- Section title and subtitle
- All 3 features (title + description)

### Products
- **Basic Product**: Name, subtitle, price, 6 features, CTA
- **Pro Product**: Name, subtitle, price, 6 features, CTA, popular badge

### Benefits
- Section title
- All 6 benefits (title + description)

### Footer
- Tagline
- Section titles
- Copyright text

### Images
- Logo
- Hero image
- Product images (Basic & Pro)

## 🔧 Technical Details

- **Port**: 3001 (main site uses 3000)
- **Framework**: Next.js 15
- **Storage**: Reads/writes directly to `../messages/` folder
- **No Database**: All changes go directly to JSON files

## ⚠️ Important Notes

1. **Local Only** - This editor is NOT deployed to production
2. **Run Locally** - Only runs on your computer
3. **Export Required** - Must click "Export to Project" to save changes
4. **Git Commit** - After exporting, commit and push to deploy

## 🐛 Troubleshooting

**Editor won't load content:**
- Make sure your main website folder has `messages/en.json`, `messages/he.json`, `messages/ru.json`

**Export fails:**
- Check that you're running the editor from the `editor` folder
- Ensure the `messages` folder exists in the parent directory

**Changes don't appear on website:**
- Did you click "Export to Project"?
- Did you commit and push to GitHub?
- Wait a few minutes for Cloudflare to deploy

## 📞 Need Help?

The editor is designed to be simple. If something doesn't work:
1. Check the browser console (F12)
2. Make sure both the editor (port 3001) and main site (port 3000) are running
3. Try refreshing the page
