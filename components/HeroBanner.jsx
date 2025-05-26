import { useState } from 'react';

/**
 * Full-width hero banner/cover image component with fallback and gradient overlay
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
  const defaultImage = '/images/default-cover.jpg'; // Fallback image
  
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
        
        {/* Gradient overlay for better text visibility */}
        <div className="hero-banner-gradient"></div>
        
        {/* Optional content overlay */}
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
