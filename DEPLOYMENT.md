# Deployment Guide for Dokploy

## Static Site Deployment

This is a **static site** built with Astro. No server required.

### Dokploy Configuration:

**Build Settings:**
- Build Method: **Static** (or Nixpacks will auto-detect)
- Build Command: `npm run build`
- Output Directory: `dist`
- No start command needed (static files only)

**Environment Variables:**
```
NODE_ENV=production
```

**Port:** Not needed (static files served by web server)

---

## Build Process

1. **Install dependencies**: `npm ci --legacy-peer-deps`
2. **Build**: `npm run build`
3. **Output**: Static files in `dist/` directory

---

## Local Testing

```bash
# Build
npm run build

# Preview (uses Astro's preview server)
npm run preview
```

Visit: http://localhost:4321

---

## Deployment Steps in Dokploy

1. Connect your Git repository
2. Set build command: `npm run build`
3. Set output directory: `dist`
4. Deploy!

Dokploy will:
- Run `npm install`
- Run `npm run build`
- Serve static files from `dist/`

---

## Troubleshooting

### Issue: "Bad Gateway"
**Cause**: Dokploy trying to run as Node server instead of static site

**Solution**:
1. Make sure there's NO start command configured
2. Verify output directory is set to `dist`
3. Check build logs - should see "148 page(s) built"
4. Ensure `.static` file exists in root (tells Dokploy it's static)

### Issue: "Index of dist/"
**Cause**: Web server listing directory instead of serving index.html

**Solution**:
- Configure web server to serve index.html as default
- In Dokploy, ensure it's set as "Static Site" not "Node App"

### Issue: Build fails
**Cause**: Dependencies or build errors

**Solution**:
- Check build logs in Dokploy
- Test locally: `npm run build`
- Ensure all dependencies installed: `npm ci --legacy-peer-deps`

---

## Features

- ✅ Static HTML/CSS/JS (no server needed)
- ✅ Fast loading (CDN-friendly)
- ✅ Low cost (static hosting)
- ✅ Desktop PDF/PNG generation (client-side)
- ✅ Mobile shows contact info for quotes

---

## Notes

- PDF/PNG generation works on **desktop only**
- Mobile users see message to use desktop or call: **0947776662**
- All pages pre-rendered at build time
- No database, no API, pure static files
