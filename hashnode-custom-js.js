// Hashnode Blog Enhancements - JavaScript Bundle

// Dark Mode Toggle Implementation
document.addEventListener('DOMContentLoaded', function() {
  // Create toggle button
  const toggleButton = document.createElement('button');
  toggleButton.setAttribute('aria-label', 'Toggle dark mode');
  toggleButton.classList.add('dark-mode-toggle');
  
  // Check initial state
  const isDarkMode = localStorage.theme === 'dark' || 
    (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches);
  
  if (isDarkMode) {
    document.documentElement.classList.add('dark');
  }
  
  // Set initial icon
  toggleButton.innerHTML = isDarkMode 
    ? '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" width="20" height="20"><path stroke-linecap="round" stroke-linejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" /></svg>' 
    : '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" width="20" height="20"><path stroke-linecap="round" stroke-linejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" /></svg>';
  
  // Add click event
  toggleButton.addEventListener('click', function() {
    if (document.documentElement.classList.contains('dark')) {
      document.documentElement.classList.remove('dark');
      localStorage.theme = 'light';
      toggleButton.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" width="20" height="20"><path stroke-linecap="round" stroke-linejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" /></svg>';
    } else {
      document.documentElement.classList.add('dark');
      localStorage.theme = 'dark';
      toggleButton.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" width="20" height="20"><path stroke-linecap="round" stroke-linejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" /></svg>';
    }
  });
  
  // Add styles for the toggle button
  const style = document.createElement('style');
  style.textContent = `
    .dark-mode-toggle {
      background: transparent;
      border: none;
      cursor: pointer;
      padding: 8px;
      border-radius: 8px;
      display: flex;
      align-items: center;
      justify-content: center;
      color: inherit;
      position: fixed;
      top: 20px;
      right: 20px;
      z-index: 1000;
      background-color: rgba(255, 255, 255, 0.8);
      box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    }
    
    html.dark .dark-mode-toggle {
      background-color: rgba(30, 30, 30, 0.8);
    }
    
    .dark-mode-toggle:hover {
      background-color: rgba(0, 0, 0, 0.05);
    }
    
    html.dark .dark-mode-toggle:hover {
      background-color: rgba(255, 255, 255, 0.1);
    }
  `;
  document.head.appendChild(style);
  
  // Add button to the page
  document.body.appendChild(toggleButton);
});

// Enhanced Cover Images Implementation
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

  // Also enhance standard blog cover images
  const postCoverImages = document.querySelectorAll('.blog-post-cover-image');
  postCoverImages.forEach(img => {
    // Get the original image source and parent
    const src = img.getAttribute('src');
    const alt = img.getAttribute('alt') || 'Cover image';
    const parent = img.parentNode;
    
    // Create our enhanced structure
    const container = document.createElement('div');
    container.className = 'cover-image-container';
    
    const wrapper = document.createElement('div');
    wrapper.className = 'cover-image-wrapper';
    
    // Create new image with better styling
    const newImg = document.createElement('img');
    newImg.src = src;
    newImg.alt = alt;
    newImg.className = 'cover-image';
    
    // Create gradient overlay
    const overlay = document.createElement('div');
    overlay.className = 'cover-gradient-overlay';
    
    // Assemble the elements
    wrapper.appendChild(newImg);
    wrapper.appendChild(overlay);
    container.appendChild(wrapper);
    
    // Replace the original image
    parent.replaceChild(container, img);
  });
});

// Enhance post previews on homepage
document.addEventListener('DOMContentLoaded', function() {
  // Find all blog post cards
  const postCards = document.querySelectorAll('.blog-post-card');
  
  postCards.forEach(card => {
    // Find cover image
    const imageElement = card.querySelector('img');
    if (!imageElement) return;
    
    // Find title
    const titleElement = card.querySelector('h2, h3, .blog-post-title');
    const title = titleElement ? titleElement.textContent : '';
    
    // Get image source
    const src = imageElement.getAttribute('src');
    if (!src) return;
    
    // Create enhanced cover container
    const container = document.createElement('div');
    container.className = 'cover-image-container';
    
    const wrapper = document.createElement('div');
    wrapper.className = 'cover-image-wrapper';
    
    // Create new image with better styling
    const newImg = document.createElement('img');
    newImg.src = src;
    newImg.alt = title || 'Blog post';
    newImg.className = 'cover-image';
    
    // Create gradient overlay
    const overlay = document.createElement('div');
    overlay.className = 'cover-gradient-overlay';
    
    // Assemble the elements
    wrapper.appendChild(newImg);
    wrapper.appendChild(overlay);
    container.appendChild(wrapper);
    
    // Replace the original image
    const parent = imageElement.parentNode;
    parent.replaceChild(container, imageElement);
  });
});
