# 🎨 Dynamic Blog System with Sanity CMS

## ✨ What's New?

Your blog is now **fully dynamic**! You can add, edit, and delete blog posts through a beautiful admin interface without touching any code.

## 🚀 Quick Start

### 1. **Set Up Sanity (One-Time Setup)**

#### Create a Sanity Account
1. Visit [sanity.io](https://www.sanity.io/)
2. Sign up for a free account
3. Create a new project:
   - Project name: "Contentora Media Blog" (or your choice)
   - Dataset: "production"
   - **Copy your Project ID** (looks like: `abc123xyz`)

#### Configure Your Project
1. Open `.env` file in your project root
2. Add your Sanity credentials:
```env
VITE_SANITY_PROJECT_ID=your-project-id-here
VITE_SANITY_DATASET=production
```

#### Deploy Sanity Studio
```bash
cd sanity-studio
npx sanity deploy
```

Choose a studio hostname (e.g., `contentora-blog`) - this will be your admin URL:
`https://contentora-blog.sanity.studio`

### 2. **Start Development**

#### Terminal 1 - Run Your Website
```bash
npm run dev
```
Your site: `http://localhost:5173`

#### Terminal 2 - Run Sanity Studio (Optional)
```bash
npm run sanity
```
Local admin: `http://localhost:3333`

Or just use your deployed studio URL!

## 📝 How to Add Blog Posts

### Method 1: Using Deployed Studio (Recommended)
1. Go to `https://your-studio-name.sanity.studio`
2. Log in with your Sanity account
3. Click **"Blog Post"** → **"Create"**
4. Fill in the form:
   - **Title**: Your blog post title
   - **Slug**: Click "Generate" button
   - **Excerpt**: Short description (shows in blog listing)
   - **Main Image**: Upload or drag & drop an image
   - **Category**: Select from dropdown
   - **Read Time**: e.g., "5 min read"
   - **Published At**: Set date and time
   - **Body**: Write your content with the rich text editor
   - **SEO Settings**: (Optional) Custom meta title/description
5. Click **"Publish"**
6. Your website automatically shows the new post! 🎉

### Method 2: Using Local Studio
```bash
npm run sanity
```
Then go to `http://localhost:3333` and follow the same steps.

## 🎯 Features

### Rich Text Editor
- **Headings**: H1, H2, H3, H4
- **Formatting**: Bold, italic, code
- **Lists**: Bullet points and numbered lists
- **Links**: Add external links
- **Images**: Embed images in content
- **Quotes**: Blockquotes for emphasis

### Content Management
- ✅ **Draft Mode**: Save drafts before publishing
- ✅ **Preview**: See changes before publishing
- ✅ **Version History**: Revert to previous versions
- ✅ **Image Optimization**: Automatic image optimization
- ✅ **SEO Control**: Custom meta tags per post
- ✅ **Categories**: Organize posts by topic

### Categories Available
- PPC Marketing
- Content Writing
- Social Media Marketing
- SEO & Content Writing
- Content Marketing

## 🔧 Customization

### Add New Categories

1. Edit `sanity-studio/schemas/blogPost.js`
2. Find the `category` field
3. Add your new category:
```javascript
{
  name: 'category',
  options: {
    list: [
      { title: 'Your New Category', value: 'Your New Category' },
      // ... existing categories
    ],
  },
}
```
4. Redeploy studio: `cd sanity-studio && npx sanity deploy`

### Modify Blog Schema

Edit `sanity-studio/schemas/blogPost.js` to:
- Add new fields (author, tags, etc.)
- Change field validations
- Customize the editor

Then redeploy the studio.

## 🛡️ Fallback System

Your blog has a smart fallback system:
- ✅ If Sanity is configured → Shows Sanity posts
- ✅ If Sanity is NOT configured → Shows hardcoded posts
- ✅ Loading states while fetching
- ✅ Error handling for network issues

This means your site will always work, even if Sanity is down!

## 📱 What You Get

### For Content Creators
- No code required to add/edit posts
- Beautiful, intuitive admin interface
- Real-time preview
- Mobile-friendly editor
- Collaborative editing (multiple users)

### For Developers
- Headless CMS architecture
- GraphQL-like queries (GROQ)
- Image CDN included
- Version control for content
- API access for integrations

## 🐛 Troubleshooting

### "Sanity not configured" in console
**Solution**: Add `VITE_SANITY_PROJECT_ID` to `.env` and restart dev server

### No posts showing
**Solution**: 
1. Make sure posts are **published** (not just saved as drafts)
2. Check your Project ID in `.env`
3. Verify dataset name is "production"

### Images not loading
**Solution**: 
1. Upload images in Sanity Studio
2. Add alt text (required field)
3. Check image permissions in Sanity dashboard

### Studio won't deploy
**Solution**:
```bash
npm install -g @sanity/cli
cd sanity-studio
sanity login
sanity deploy
```

## 📚 File Structure

```
contentomedia-website-main/
├── src/
│   ├── lib/
│   │   └── sanity.js              # Sanity client & queries
│   ├── components/
│   │   └── PortableTextRenderer.jsx  # Rich text renderer
│   └── pages/
│       ├── Blog.jsx               # Blog listing (updated)
│       └── BlogPost.jsx           # Single post (updated)
├── sanity-studio/
│   ├── schemas/
│   │   ├── blogPost.js            # Blog post schema
│   │   └── index.js               # Schema exports
│   └── sanity.config.js           # Studio config
├── .env                           # Environment variables
└── SANITY_SETUP_GUIDE.md         # Detailed setup guide
```

## 🎓 Learning Resources

- [Sanity Documentation](https://www.sanity.io/docs)
- [GROQ Query Language](https://www.sanity.io/docs/groq)
- [Portable Text](https://www.sanity.io/docs/presenting-block-text)
- [Sanity Studio Customization](https://www.sanity.io/docs/studio)

## 💡 Pro Tips

1. **Use Drafts**: Save drafts while working on posts
2. **Schedule Posts**: Set future publish dates
3. **SEO**: Always fill in SEO settings for better rankings
4. **Images**: Use descriptive alt text for accessibility
5. **Categories**: Keep categories consistent for better organization

## 🚀 Next Steps

1. ✅ Set up Sanity account
2. ✅ Add Project ID to `.env`
3. ✅ Deploy Sanity Studio
4. ✅ Create your first blog post
5. ✅ Share your blog with the world!

---

**Questions?** Check the [SANITY_SETUP_GUIDE.md](./SANITY_SETUP_GUIDE.md) for detailed instructions!

**Happy Blogging! 🎉**
