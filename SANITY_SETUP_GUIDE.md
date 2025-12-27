# Sanity CMS Blog Setup Guide

## 🎉 What We've Built

Your blog system is now configured to work with **Sanity CMS** - a powerful headless CMS that lets you manage blog posts through a beautiful admin interface!

## 📁 Files Created/Modified

### New Files:
1. **`src/lib/sanity.js`** - Sanity client configuration and query functions
2. **`src/components/PortableTextRenderer.jsx`** - Rich text content renderer
3. **`sanity-studio/schemas/blogPost.js`** - Blog post schema definition
4. **`sanity-studio/schemas/index.js`** - Schema exports
5. **`sanity-studio/sanity.config.js`** - Sanity Studio configuration

### Modified Files:
1. **`src/pages/Blog.jsx`** - Now fetches posts from Sanity
2. **`src/pages/BlogPost.jsx`** - Now displays Sanity content

## 🚀 Setup Instructions

### Step 1: Create a Sanity Account & Project

1. Go to [sanity.io](https://www.sanity.io/) and create a free account
2. Create a new project:
   - Click "Create Project"
   - Choose a project name (e.g., "Contentora Media Blog")
   - Choose a dataset name (use "production")
   - Copy your **Project ID** (you'll need this!)

### Step 2: Install Sanity CLI (if not already installed)

```bash
npm install -g @sanity/cli
```

### Step 3: Initialize Sanity Studio

Navigate to your project directory and run:

```bash
cd sanity-studio
npm install sanity @sanity/vision
```

### Step 4: Configure Environment Variables

Create/update your `.env` file in the root directory:

```env
# Sanity Configuration
VITE_SANITY_PROJECT_ID=your-project-id-here
VITE_SANITY_DATASET=production
```

**Important:** Replace `your-project-id-here` with your actual Sanity Project ID!

### Step 5: Deploy Sanity Studio

From the `sanity-studio` directory, run:

```bash
npx sanity deploy
```

This will give you a URL like: `https://your-project.sanity.studio`

### Step 6: Add Your First Blog Post

1. Go to your Sanity Studio URL
2. Click "Blog Post" in the sidebar
3. Click "Create new Blog Post"
4. Fill in the fields:
   - **Title**: Your blog post title
   - **Slug**: Click "Generate" to auto-create from title
   - **Excerpt**: Short description (max 200 chars)
   - **Main Image**: Upload an image
   - **Category**: Choose from dropdown
   - **Read Time**: e.g., "5 min read"
   - **Published At**: Set the date/time
   - **Body**: Write your blog content with rich text editor
5. Click "Publish"

## 🎨 Features

### For Content Creators:
- ✅ **Rich Text Editor** - Format text, add headings, lists, links
- ✅ **Image Upload** - Drag & drop images directly into content
- ✅ **Categories** - Organize posts by topic
- ✅ **SEO Settings** - Custom meta titles and descriptions
- ✅ **Draft/Publish** - Save drafts before publishing
- ✅ **Preview** - See how posts look before publishing

### For Developers:
- ✅ **Automatic Fallback** - Uses hardcoded posts if Sanity isn't configured
- ✅ **Loading States** - Smooth loading experience
- ✅ **Error Handling** - Graceful degradation
- ✅ **Related Posts** - Automatically shows related content
- ✅ **SEO Optimized** - Proper meta tags and structured data

## 📝 How to Add New Blog Posts

### Option 1: Using Sanity Studio (Recommended)
1. Go to your Sanity Studio URL
2. Click "Blog Post" → "Create"
3. Fill in the form
4. Click "Publish"
5. Your website will automatically fetch the new post!

### Option 2: Using Sanity CLI
```bash
cd sanity-studio
npx sanity start
```
This opens the studio locally at `http://localhost:3333`

## 🔧 Customization

### Adding New Categories

Edit `sanity-studio/schemas/blogPost.js`:

```javascript
{
  name: 'category',
  title: 'Category',
  type: 'string',
  options: {
    list: [
      { title: 'Your New Category', value: 'Your New Category' },
      // ... existing categories
    ],
  },
}
```

Then redeploy: `npx sanity deploy`

### Changing Blog Post Fields

Edit `sanity-studio/schemas/blogPost.js` to add/remove fields, then redeploy.

## 🐛 Troubleshooting

### "Sanity not configured" warning in console
- Make sure you've added `VITE_SANITY_PROJECT_ID` to your `.env` file
- Restart your dev server after adding environment variables

### No posts showing up
- Check that you've published posts in Sanity Studio (not just saved as drafts)
- Verify your Project ID is correct in `.env`
- Check browser console for errors

### Images not loading
- Make sure images are uploaded in Sanity Studio
- Check that the image has alt text (required field)

## 📚 Resources

- [Sanity Documentation](https://www.sanity.io/docs)
- [Portable Text Guide](https://www.sanity.io/docs/presenting-block-text)
- [Sanity Studio Customization](https://www.sanity.io/docs/studio)

## 🎯 Next Steps

1. Set up your Sanity project
2. Add environment variables
3. Deploy Sanity Studio
4. Create your first blog post
5. Test on your website!

Your blog will automatically:
- Fetch new posts from Sanity
- Show loading states
- Fall back to hardcoded posts if Sanity isn't configured
- Display rich content with proper formatting

---

**Need Help?** Check the Sanity documentation or reach out to the Sanity community!
