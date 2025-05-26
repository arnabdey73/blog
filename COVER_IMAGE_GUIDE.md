# Enhanced Cover Image Example

This example demonstrates how to use the enhanced cover image component in your Hashnode blog.

## 1. Basic Implementation

Add this HTML anywhere in your blog where you want to display a cover image:

```html
<div class="hashnode-cover-image-container" 
     data-image-url="https://cdn.hashnode.com/res/hashnode/image/upload/v1748116509711/8e647311-9519-4950-b4ab-1fb756b7bfd9.png" 
     data-alt="DevOps Automation Cover Image" 
     data-title="DevOps Automation Project">
</div>
```

The `hashnode-cover-image-container` class is required for the JavaScript to identify and enhance this image.

## 2. Parameters Explained

- **data-image-url**: The URL of your cover image
- **data-alt**: Alternative text for the image (for accessibility)
- **data-title**: Optional title to display as an overlay on the image
- **data-fallback-url**: Optional fallback image URL if the main image fails to load

## 3. Customizing Cover Images

You can adjust the appearance of cover images by modifying these CSS variables:

```css
:root {
  /* Cover image variables */
  --cover-height: 400px;          /* Height on desktop */
  --cover-mobile-height: 250px;   /* Height on mobile */
  --cover-border-radius: 0.5rem;  /* Rounded corners */
  --cover-shadow: 0 4px 12px rgba(0, 0, 0, 0.1); /* Shadow effect */
}
```

## 4. Example in Context

Here's how a full blog post might look with the enhanced cover image:

```html
<article class="blog-post">
  <!-- Enhanced Cover Image -->
  <div class="hashnode-cover-image-container" 
       data-image-url="your-image-url.jpg" 
       data-alt="Blog post cover" 
       data-title="How to Build a DevOps Pipeline">
  </div>
  
  <!-- Post Meta Information -->
  <div class="post-meta">
    <span class="reading-time">5 min read</span>
    <span class="publish-date">Published May 26, 2025</span>
  </div>
  
  <!-- Blog Content -->
  <div class="blog-content">
    <p>Your blog post content goes here...</p>
  </div>
</article>
```

## 5. Adding Cover Images to Post Previews

You can also enhance post previews on your homepage by adding this JavaScript:

```javascript
// Enhance post preview cards
const postCards = document.querySelectorAll('.blog-post-card');
postCards.forEach(card => {
  const imageElement = card.querySelector('.blog-post-card-cover');
  if (!imageElement) return;
  
  const titleElement = card.querySelector('.blog-post-card-title');
  const title = titleElement ? titleElement.textContent : '';
  
  // Create enhanced cover image
  const container = document.createElement('div');
  container.className = 'hashnode-cover-image-container';
  container.setAttribute('data-image-url', imageElement.src);
  container.setAttribute('data-alt', 'Blog post cover');
  if (title) container.setAttribute('data-title', title);
  
  // Replace original image with enhanced version
  imageElement.parentNode.replaceChild(container, imageElement);
});
```

This script finds all post preview cards, extracts the image and title, and applies our enhanced cover image styles.
