# Images Folder

This folder contains images uploaded through the content editor.

## Uploaded Images

Images are saved with the following naming convention:
- `logo.{ext}` - Company logo
- `hero.{ext}` - Hero section banner image
- `product-basic.{ext}` - SmartHDD Basic product image
- `product-pro.{ext}` - SmartHDD Pro product image

## Using Images in Your Website

To use these images in your website components, reference them as:

```tsx
<img src="/images/logo.png" alt="SmartHDD Logo" />
<img src="/images/hero.jpg" alt="Hero Banner" />
<img src="/images/product-basic.png" alt="SmartHDD Basic" />
<img src="/images/product-pro.png" alt="SmartHDD Pro" />
```

## Image Guidelines

- **Logo**: Square format, transparent background recommended (PNG)
- **Hero**: Wide format, 1920x1080 or similar
- **Product Images**: Square or portrait, 800x800 minimum
- **Max Size**: 5MB per image
- **Formats**: JPG, PNG, WebP, SVG
