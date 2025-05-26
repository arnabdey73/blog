# Full-Width Hero Banner Guide

This guide demonstrates how to implement a full-width hero banner/cover image for your Hashnode blog.

## Advantages of Full-Width Hero Banners

- Creates a more immersive visual experience
- Provides more space for your featured images
- Gives your blog a modern, professional look
- Allows for better text overlay and readability with gradient overlays
- Makes your blog posts stand out

## 1. Add the Required CSS

First, add this CSS to your Hashnode custom CSS section:

```css
/* Hero Banner Component Styles */
:root {
  --hero-height: 500px;
  --hero-mobile-height: 300px;
  --hero-content-max-width: 1200px;
}

.hero-banner-container {
  width: 100%;
  margin: 0;
  padding: 0;
  margin-bottom: 2rem;
  position: relative;
}

.hero-banner-wrapper {
  position: relative;
  width: 100%;
  height: var(--hero-height);
  overflow: hidden;
  /* No border radius for full-width effect */
  /* No shadow for full-width effect */
}

@media (max-width: 768px) {
  .hero-banner-wrapper {
    height: var(--hero-mobile-height);
  }
}

.hero-banner-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  transition: transform 0.5s ease;
  display: block; /* Removes bottom margin/spacing */
}

.hero-banner-gradient {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 60%;
  background: linear-gradient(to bottom, transparent, rgba(0, 0, 0, 0.75));
  pointer-events: none;
}

.hero-banner-content {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  padding: 2rem;
  color: #ffffff;
  z-index: 2;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.hero-banner-content > * {
  max-width: var(--hero-content-max-width);
  width: 100%;
  margin: 0 auto;
}

.hero-banner-title {
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
  text-shadow: 0px 2px 4px rgba(0, 0, 0, 0.5);
}

.hero-banner-subtitle {
  font-size: 1.25rem;
  font-weight: 400;
  opacity: 0.9;
  margin: 0;
  max-width: 800px;
  text-shadow: 0px 2px 3px rgba(0, 0, 0, 0.5);
}

html.dark .hero-banner-gradient {
  background: linear-gradient(to bottom, transparent, rgba(0, 0, 0, 0.85));
}

@media (max-width: 640px) {
  .hero-banner-title {
    font-size: 2rem;
  }
  
  .hero-banner-subtitle {
    font-size: 1rem;
  }
  
  .hero-banner-content {
    padding: 1.5rem;
  }
}
```

## 2. Add the JavaScript Implementation

Add this JavaScript to your Hashnode custom JavaScript section:

```javascript
document.addEventListener('DOMContentLoaded', function() {
  // Find and enhance hero banner containers
  const heroBannerContainers = document.querySelectorAll('.hashnode-hero-banner');
  
  heroBannerContainers.forEach(container => {
    // Get data attributes
    const imageUrl = container.getAttribute('data-image-url');
    const imageAlt = container.getAttribute('data-alt') || 'Hero banner';
    const imageTitle = container.getAttribute('data-title');
    const imageSubtitle = container.getAttribute('data-subtitle');
    const fallbackUrl = container.getAttribute('data-fallback-url') || '/default-cover.jpg';
    
    // Create the hero banner HTML structure
    const bannerHtml = `
      <div class="hero-banner-wrapper">
        <img 
          src="${imageUrl}" 
          alt="${imageAlt}" 
          class="hero-banner-image" 
          onerror="this.onerror=null;this.src='${fallbackUrl}';"
        />
        <div class="hero-banner-gradient"></div>
        ${(imageTitle || imageSubtitle) ? 
          `<div class="hero-banner-content">
            ${imageTitle ? `<h1 class="hero-banner-title">${imageTitle}</h1>` : ''}
            ${imageSubtitle ? `<p class="hero-banner-subtitle">${imageSubtitle}</p>` : ''}
          </div>` : ''
        }
      </div>
    `;
    
    // Set the HTML content
    container.innerHTML = bannerHtml;
    
    // Add the appropriate class to ensure styling
    container.classList.add('hero-banner-container');
  });

  // Also convert standard blog headers to full-width hero banners
  const postHeaders = document.querySelectorAll('.blog-post-header');
  
  postHeaders.forEach(header => {
    // Find cover image if it exists
    const imageElement = header.querySelector('img');
    if (!imageElement) return;
    
    // Find title and metadata
    const titleElement = header.querySelector('h1');
    const title = titleElement ? titleElement.textContent : '';
    
    // Get metadata for subtitle
    const metaElement = header.querySelector('.post-meta, .blog-post-meta');
    const subtitle = metaElement ? metaElement.textContent : '';
    
    // Get image source
    const src = imageElement.getAttribute('src');
    if (!src) return;
    
    // Create and assemble hero banner
    const container = document.createElement('div');
    container.className = 'hero-banner-container';
    
    const wrapper = document.createElement('div');
    wrapper.className = 'hero-banner-wrapper';
    
    const newImg = document.createElement('img');
    newImg.src = src;
    newImg.alt = title || 'Blog post hero';
    newImg.className = 'hero-banner-image';
    
    const overlay = document.createElement('div');
    overlay.className = 'hero-banner-gradient';
    
    const content = document.createElement('div');
    content.className = 'hero-banner-content';
    
    if (title) {
      const titleEl = document.createElement('h1');
      titleEl.className = 'hero-banner-title';
      titleEl.textContent = title;
      content.appendChild(titleEl);
    }
    
    if (subtitle) {
      const subtitleEl = document.createElement('p');
      subtitleEl.className = 'hero-banner-subtitle';
      subtitleEl.textContent = subtitle;
      content.appendChild(subtitleEl);
    }
    
    wrapper.appendChild(newImg);
    wrapper.appendChild(overlay);
    wrapper.appendChild(content);
    container.appendChild(wrapper);
    
    // Replace header with hero banner
    header.parentNode.replaceChild(container, header);
    
    // Remove duplicate title if present
    if (titleElement) {
      const standaloneTitleEl = document.querySelector('.blog-post-title');
      if (standaloneTitleEl) {
        standaloneTitleEl.remove();
      }
    }
  });
});
```

## 3. Using the Hero Banner

### Method 1: Manual Implementation

Add this HTML at the top of your blog post:

```html
<div class="hashnode-hero-banner" 
     data-image-url="https://example.com/your-image.jpg" 
     data-alt="Your hero image alt text" 
     data-title="Your Post Title" 
     data-subtitle="May 26, 2023 • 5 min read">
</div>
```

### Method 2: Automatic Enhancement

The JavaScript will automatically enhance any standard blog post header with a cover image into a full-width hero banner. No additional code needed!

## 4. Customizing Your Hero Banner

You can adjust the appearance by modifying these CSS variables:

```css
:root {
  --hero-height: 500px;          /* Height on desktop */
  --hero-mobile-height: 300px;   /* Height on mobile */
  --hero-content-max-width: 1200px; /* Max width of content */
}
```

## 5. Best Practices for Hero Images

1. **Image Quality**: Use high-resolution images (at least 1920px wide)
2. **Image Ratio**: Images with 16:9 or 21:9 aspect ratio work best
3. **Subject Placement**: Place important subjects in the center or using the rule of thirds
4. **Text Compatibility**: Use images with space for text overlay or darker areas
5. **Compression**: Optimize images for web to keep file sizes under 500KB
6. **Testing**: Always test how your hero banner looks on both mobile and desktop

## 6. Example Implementation Result

When properly implemented, your hero banner will:
- Stretch across the full width of the page
- Display your image prominently with proper height
- Show your post title and metadata with an attractive gradient overlay
- Adapt responsively to different screen sizes
- Create a professional, immersive blog experience
