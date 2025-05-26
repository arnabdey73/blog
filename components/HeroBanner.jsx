import { useState, useEffect } from 'react';

/**
 * Full-width hero banner/cover image component with fallback and gradient overlay
 * Improved with theme integration, responsive behavior, and accessibility
 * 
 * @param {Object} props Component properties
 * @param {string} props.src Image source URL
 * @param {string} props.alt Alternative text for the image
 * @param {string} props.title Optional title to display over the image
 * @param {string} props.subtitle Optional subtitle to display below the title
 * @param {boolean} props.priority Whether to load the image with high priority
 * @returns {JSX.Element} Full-width hero banner component
 */
const HeroBanner = ({ src, alt, title, subtitle, priority = false }) => {
  const [isError, setIsError] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const defaultImage = '/images/default-cover.jpg'; // Fallback image
  
  useEffect(() => {
    // Match theme detection with ThemeToggle
    const checkTheme = () => {
      const isDark = document.documentElement.classList.contains('dark');
      setIsDarkMode(isDark);
    };
    
    // Initial check
    checkTheme();
    
    // Listen for theme changes
    const observer = new MutationObserver(checkTheme);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class']
    });
    
    return () => observer.disconnect();
  }, []);
  
  // Handle image loading error
  const handleError = () => {
    console.warn(`Failed to load hero image: ${src}`);
    setIsError(true);
  };

  return (
    <div className="hero-banner-container">
      <div className="hero-banner-wrapper">
        <img
          src={isError ? defaultImage : src}
          alt={alt || 'Hero banner'}
          loading={priority ? "eager" : "lazy"}
          className="hero-banner-image"
          onError={handleError}
        />
        
        {/* Dynamic gradient overlay based on theme */}
        <div 
          className={`hero-banner-gradient ${
            isDarkMode ? 'hero-banner-gradient-dark' : 'hero-banner-gradient-light'
          }`}
        ></div>
        
        {/* Optional content overlay with text shadow for better readability */}
        {(title || subtitle) && (
          <div className="hero-banner-content">
            {title && <h1 className="hero-banner-title">{title}</h1>}
            {subtitle && <p className="hero-banner-subtitle">{subtitle}</p>}
          </div>
        )}
      </div>
    </div>
  );
};

export default HeroBanner;
