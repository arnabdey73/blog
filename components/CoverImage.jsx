import { useState } from 'react';

/**
 * Responsive cover image component with fallback and gradient overlay
 * 
 * @param {Object} props Component properties
 * @param {string} props.src Image source URL
 * @param {string} props.alt Alternative text for the image
 * @param {string} props.title Optional title to display over the image
 * @param {boolean} props.priority Whether to load the image with high priority
 * @returns {JSX.Element} Cover image component
 */
const CoverImage = ({ src, alt, title, priority = false }) => {
  const [isError, setIsError] = useState(false);
  const defaultImage = '/images/default-cover.jpg'; // Fallback image
  
  // Handle image loading error
  const handleError = () => {
    console.warn(`Failed to load image: ${src}`);
    setIsError(true);
  };

  return (
    <div className="cover-image-container">
      <div className="cover-image-wrapper">
        <img
          src={isError ? defaultImage : src}
          alt={alt || 'Cover image'}
          loading={priority ? "eager" : "lazy"}
          className="cover-image"
          onError={handleError}
        />
        
        {/* Gradient overlay for better text visibility */}
        <div className="cover-gradient-overlay"></div>
        
        {/* Optional title overlay */}
        {title && (
          <div className="cover-title-container">
            <h1 className="cover-title">{title}</h1>
          </div>
        )}
      </div>
    </div>
  );
};

export default CoverImage;
