# Portfolio Setup Instructions

## 1. Email Contact Form Setup (FREE - Formspree)

Your contact form is configured to use Formspree, a free service that sends form submissions directly to your email.

### Steps to activate:

1. **Go to Formspree**: Visit https://formspree.io/
2. **Sign up for FREE**: Create a free account using your email (kennedymakumi18@gmail.com)
3. **Create a new form**: 
   - Click "New Form"
   - Name it "Portfolio Contact Form"
   - You'll get a form endpoint like: `https://formspree.io/f/xyzabc123`
4. **Update your portfolio**:
   - Open `index.html`
   - Find line with: `action="https://formspree.io/f/YOUR_FORM_ID"`
   - Replace `YOUR_FORM_ID` with your actual form ID (e.g., `xyzabc123`)
5. **Test it**: Submit a test message from your portfolio - you'll receive it in your email!

### Formspree Free Plan includes:
- 50 submissions per month
- Email notifications
- Spam filtering
- No credit card required

---

## 2. CV Download Setup

Your portfolio has CV download buttons ready. You need to add your CV file.

### Steps:

1. **Prepare your CV**:
   - Export your CV as a PDF file
   - Name it exactly: `Kennedy_Makumi_CV.pdf`

2. **Add to portfolio**:
   - Place `Kennedy_Makumi_CV.pdf` in the same folder as `index.html`
   - The download buttons will automatically work!

### File structure should look like:
```
portfolio/
├── index.html
├── Untitled-2.css
├── script.js
├── Kennedy_Makumi_CV.pdf  ← Add this file
└── SETUP_INSTRUCTIONS.md
```

---

## 3. Alternative Email Solutions (if you prefer)

### Option A: EmailJS (More features, still free)
1. Visit https://www.emailjs.com/
2. Sign up for free (300 emails/month)
3. More customization options available

### Option B: Direct mailto link (Simple but limited)
- Already working! The email icon opens the user's email client
- No setup needed, but less professional

---

## 4. Testing Your Setup

### Test Contact Form:
1. Open your portfolio in a browser
2. Scroll to Contact section
3. Fill out the form and submit
4. Check your email (kennedymakumi18@gmail.com)
5. You should receive the message within seconds!

### Test CV Download:
1. Click any "Download CV" button
2. Your CV should download automatically
3. Verify the PDF opens correctly

---

## 5. Hosting Your Portfolio (Make it Live!)

### Option A: GitHub Pages (FREE & Recommended)
1. Create a GitHub account
2. Create a new repository named: `your-username.github.io`
3. Upload all your files
4. Your site will be live at: `https://your-username.github.io`

### Option B: Netlify (FREE)
1. Visit https://www.netlify.com/
2. Drag and drop your portfolio folder
3. Get a free URL instantly!

### Option C: Vercel (FREE)
1. Visit https://vercel.com/
2. Import your project
3. Deploy in seconds!

---

## 6. Current Features Working:

✅ **Email Links**: Clicking email icons opens email client
✅ **Phone Links**: Clicking phone opens dialer on mobile
✅ **LinkedIn**: Links to your profile
✅ **Smooth Scrolling**: All navigation works
✅ **Dark/Light Mode**: Theme toggle working
✅ **Responsive Design**: Works on all devices
✅ **Project Modals**: Detailed project views
✅ **Animations**: Scroll animations and counters

---

## Need Help?

If you encounter any issues:
1. Check browser console for errors (F12)
2. Verify file names match exactly
3. Ensure all files are in the same folder
4. Test in different browsers

---

## Quick Start Checklist:

- [ ] Sign up for Formspree
- [ ] Get your form ID
- [ ] Update form action in index.html
- [ ] Create/export your CV as PDF
- [ ] Name it: Kennedy_Makumi_CV.pdf
- [ ] Place CV file with index.html
- [ ] Test contact form
- [ ] Test CV download
- [ ] Choose hosting platform
- [ ] Upload and go live!

---

**Your portfolio is 95% ready! Just complete the 2 setup steps above and you're live!**
