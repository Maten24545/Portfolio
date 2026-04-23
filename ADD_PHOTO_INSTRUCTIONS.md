# How to Add Your Profile Photo

## Quick Steps:

1. **Prepare your photo:**
   - Use a professional headshot photo
   - Recommended: Square format (1:1 ratio)
   - Minimum size: 500x500 pixels
   - Recommended size: 800x800 pixels or higher
   - Format: JPG or PNG

2. **Name your photo:**
   - Rename it to exactly: `profile-photo.jpg`
   - (or `profile-photo.png` if PNG format)

3. **Place the photo:**
   - Put `profile-photo.jpg` in the same folder as `index.html`

4. **If using PNG format:**
   - Open `index.html`
   - Find the line: `<img src="profile-photo.jpg" alt="Kennedy Makumi" class="profile-image">`
   - Change to: `<img src="profile-photo.png" alt="Kennedy Makumi" class="profile-image">`

## File Structure:
```
portfolio/
├── index.html
├── Untitled-2.css
├── script.js
├── profile-photo.jpg  ← Add your photo here
├── Kennedy_Makumi_CV.pdf
└── ADD_PHOTO_INSTRUCTIONS.md
```

## Photo Tips:

✅ **Good Photo Characteristics:**
- Professional business attire
- Clean, simple background
- Good lighting
- Facing camera directly
- Confident, friendly expression
- High resolution

❌ **Avoid:**
- Casual/informal photos
- Busy backgrounds
- Poor lighting
- Blurry images
- Group photos
- Low resolution

## Alternative: Use a Placeholder

If you don't have a photo ready, you can use a placeholder:

1. Visit: https://ui-avatars.com/
2. Generate an avatar with your initials "KM"
3. Download and save as `profile-photo.jpg`

Or use this direct link in your HTML:
```html
<img src="https://ui-avatars.com/api/?name=Kennedy+Makumi&size=400&background=6366f1&color=fff&bold=true" alt="Kennedy Makumi" class="profile-image">
```

## Testing:

After adding your photo:
1. Open `index.html` in your browser
2. Check if the photo displays correctly
3. Verify it looks good in both light and dark modes
4. Test on mobile devices

---

**Your portfolio now features:**
- ✅ Modern two-column hero layout
- ✅ Professional profile photo section
- ✅ Animated profile rings
- ✅ Four expertise badges with icons
- ✅ Dark mode compatible
- ✅ Fully responsive design
- ✅ Real-time contact form
- ✅ LinkedIn integration
