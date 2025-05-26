/**
 * Hashnode Hero Banner Implementation
 * This script enhances blog posts with full-width hero banners
 * Enhanced version with theme adaptation and improved accessibility
 */

document.addEventListener('DOMContentLoaded', function() {
  // Find and enhance hero banner containers
  const heroBannerContainers = document.querySelectorAll('.hashnode-hero-banner');
  
  // Function to check dark mode
  function isDarkMode() {
    return document.documentElement.classList.contains('dark');
  }
  
  // Function to create/update hero banners
  function updateHeroBanners() {
    const darkModeActive = isDarkMode();
    
    heroBannerContainers.forEach(container => {
      // Get data attributes
      const imageUrl = container.getAttribute('data-image-url');
      const imageAlt = container.getAttribute('data-alt') || 'Hero banner';
      const imageTitle = container.getAttribute('data-title');
      const imageSubtitle = container.getAttribute('data-subtitle');
      const fallbackUrl = container.getAttribute('data-fallback-url') || '/default-cover.jpg';
      
      // Create the hero banner HTML structure with dynamic theme classes
      const bannerHtml = `
        <div class="hero-banner-wrapper">
          <img 
            src="${imageUrl}" 
            alt="${imageAlt}" 
            class="hero-banner-image" 
            onerror="this.onerror=null;this.src='${fallbackUrl}';"
          />
          <div class="hero-banner-gradient ${darkModeActive ? 'hero-banner-gradient-dark' : 'hero-banner-gradient-light'}"></div>
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
  }

  // Apply initial update
  updateHeroBanners();
  
  // Watch for theme changes from ThemeToggle
  const observer = new MutationObserver(function(mutations) {
    mutations.forEach(function(mutation) {
      if (mutation.attributeName === 'class' && 
          mutation.target === document.documentElement) {
        // Update all banners when theme changes
        updateHeroBanners();
      }
    });
  });
  
  // Start observing document for theme changes
  observer.observe(document.documentElement, {
    attributes: true,
    attributeFilter: ['class']
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
    
    // Create hero banner container
    const container = document.createElement('div');
    container.className = 'hero-banner-container';
    
    // Create hero banner
    const wrapper = document.createElement('div');
    wrapper.className = 'hero-banner-wrapper';
    
    // Create image
    const newImg = document.createElement('img');
    newImg.src = src;
    newImg.alt = title || 'Blog post hero';
    newImg.className = 'hero-banner-image';
    
    // Create gradient overlay with theme-aware class
    const overlay = document.createElement('div');
    overlay.className = `hero-banner-gradient ${isDarkMode() ? 'hero-banner-gradient-dark' : 'hero-banner-gradient-light'}`;
    
    // Create content container
    const content = document.createElement('div');
    content.className = 'hero-banner-content';
    
    // Add title if available
    if (title) {
      const titleEl = document.createElement('h1');
      titleEl.className = 'hero-banner-title';
      titleEl.textContent = title;
      content.appendChild(titleEl);
    }
    
    // Add subtitle (metadata) if available
    if (subtitle) {
      const subtitleEl = document.createElement('p');
      subtitleEl.className = 'hero-banner-subtitle';
      subtitleEl.textContent = subtitle;
      content.appendChild(subtitleEl);
    }
    
    // Assemble the hero banner
    wrapper.appendChild(newImg);
    wrapper.appendChild(overlay);
    wrapper.appendChild(content);
    container.appendChild(wrapper);
    
    // Replace the header with our hero banner
    header.parentNode.replaceChild(container, header);
    
    // If there was a title element, we need to remove it since it's now in the banner
    if (titleElement) {
      const standaloneTitleEl = document.querySelector('.blog-post-title');
      if (standaloneTitleEl) {
        standaloneTitleEl.remove();
      }
    }
  });
});
