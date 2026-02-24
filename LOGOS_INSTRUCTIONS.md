# How to Add Company Logos

Your resume is now set up to display company logos next to each organization name in the Professional Experience section.

## 📁 Where to Place Logo Files

Place your company logo images in the following directory:
```
public/logos/
```

## 🏢 Required Logo Files

Based on your current resume data, you need these five logo files:

1. **Amazon Development Centre India**: `public/logos/amazon.png`
2. **KPMG Global Services**: `public/logos/kpmg.png`
3. **Deloitte USI**: `public/logos/deloitte.png`
4. **Oracle India Pvt. Ltd.**: `public/logos/oracle.png`
5. **Tata Consultancy Services**: `public/logos/tcs.png`

## 📐 Logo Specifications

### Recommended Format
- **File Format**: PNG (with transparent background preferred)
- **Size**: 200x200 pixels to 500x500 pixels
- **Aspect Ratio**: Square (1:1) works best
- **Background**: Transparent or white

### Design Tips
- Use high-resolution images for crisp display
- Square logos work best with the circular/rounded display
- Ensure logos are clearly visible at small sizes

## 🚀 How to Add Logos

### Method 1: Copy Files Directly
```bash
# From your terminal, copy logo files to the logos directory
cp /path/to/your/amazon-logo.png public/logos/amazon.png
cp /path/to/your/kpmg-logo.png public/logos/kpmg.png
cp /path/to/your/deloitte-logo.png public/logos/deloitte.png
```

### Method 2: Drag and Drop
1. Open the `public/logos/` folder in Finder/Explorer
2. Drag your logo files into this folder
3. Rename them to match the required names above

## ✏️ Adding More Companies

If you add more work experience entries in the future:

1. **Add the logo file** to `public/logos/` (e.g., `oracle.png`)

2. **Update the JSON** in `src/data/resume.json`:
```json
{
  "name": "Oracle India",
  "position": "Your Position",
  "startDate": "YYYY-MM",
  "endDate": "YYYY-MM",
  "logo": "/Project_Resume/logos/oracle.png",
  "highlights": [...]
}
```

## 🎨 How Logos Are Displayed

### On Web
- **Size**: 48px × 48px
- **Style**: Rounded corners with subtle border
- **Position**: Left of company name and title

### In PDF/Print
- **Size**: Automatically scaled to 28pt × 28pt
- **Style**: Maintains rounded corners and border
- **Position**: Same as web view

## 🔍 Troubleshooting

### Logo Not Appearing?
1. Check the file path in `src/data/resume.json` matches exactly
2. Ensure the file exists in `public/logos/`
3. Verify the file name matches (case-sensitive on some systems)
4. Check the browser console for 404 errors

### Logo Looks Pixelated?
- Use a higher resolution source image (at least 200×200px)
- Ensure the logo is a PNG format for best quality

### Logo Has Wrong Colors?
- Check if the logo has a transparent background
- Try using a version with a white or transparent background
- Edit the logo to remove unwanted background colors

## 📝 Example File Structure

```
Project_Resume/
├── public/
│   ├── logos/
│   │   ├── amazon.png      ✓ Your Amazon logo
│   │   ├── kpmg.png        ✓ Your KPMG logo
│   │   ├── deloitte.png    ✓ Your Deloitte logo
│   │   └── [other-company].png
│   └── profile.png
├── src/
│   └── data/
│       └── resume.json
└── ...
```

## 🌐 Finding Company Logos

You can obtain official logos from:
- Company websites (typically in the "Media" or "Press" section)
- Company brand guidelines (if publicly available)
- High-resolution logo databases (ensure you have rights to use them)

**Note**: Always ensure you have the right to use company logos on your resume.

## ✅ Verification

After adding your logos:
1. The dev server should automatically reload
2. Check `http://localhost:4321/Project_Resume`
3. Logos should appear beside company names
4. Test print preview (Cmd/Ctrl + P) to see PDF output