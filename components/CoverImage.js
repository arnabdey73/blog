/**
 * CoverImage.js - Vanilla JavaScript implementation for Hashnode custom code
 * This file can be included in your Hashnode blog's custom JavaScript section
 */

document.addEventListener('DOMContentLoaded', function() {
  // Find all cover images with the designated class
  const coverImageContainers = document.querySelectorAll('.hashnode-cover-image-container');
  
  coverImageContainers.forEach(container => {
    // Get data attributes
    const imageUrl = container.getAttribute('data-image-url');
    const imageAlt = container.getAttribute('data-alt') || 'Cover image';
    const imageTitle = container.getAttribute('data-title');
    const fallbackUrl = container.getAttribute('data-fallback-url') || '/default-cover.jpg';
    
    // Create the cover image HTML structure
    const coverHtml = `
      <div class="cover-image-wrapper">
        <img 
          src="${imageUrl}" 
          alt="${imageAlt}" 
          class="cover-image" 
          onerror="this.onerror=null;this.src='${fallbackUrl}';"
        />
        <div class="cover-gradient-overlay"></div>
        ${imageTitle ? `<div class="cover-title-container"><h1 class="cover-title">${imageTitle}</h1></div>` : ''}
      </div>
    `;
    
    // Set the HTML content
    container.innerHTML = coverHtml;
  });

  // Add responsive handling for cover images
  const handleCoverImageResize = () => {
    const coverImages = document.querySelectorAll('.cover-image');
    coverImages.forEach(img => {
      // Get parent container dimensions
      const container = img.closest('.cover-image-wrapper');
      if (!container) return;

      // Add custom handling for aspect ratio if needed
      const containerWidth = container.offsetWidth;
      // You can add more responsive handling here
    });
  };

  // Initial call and resize listener
  handleCoverImageResize();
  window.addEventListener('resize', handleCoverImageResize);
});
