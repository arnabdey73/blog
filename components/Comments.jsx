import { useEffect, useRef } from 'react';

export default function Comments() {
  const commentRef = useRef(null);
  
  useEffect(() => {
    // Load the Giscus script
    const script = document.createElement('script');
    script.src = 'https://giscus.app/client.js';
    script.setAttribute('data-repo', 'arnabdey73/blog');
    script.setAttribute('data-repo-id', 'YOUR_REPO_ID'); // Replace with your actual repo ID
    script.setAttribute('data-category', 'General');
    script.setAttribute('data-category-id', 'YOUR_CATEGORY_ID'); // Replace with actual category ID
    script.setAttribute('data-mapping', 'pathname');
    script.setAttribute('data-reactions-enabled', '1');
    script.setAttribute('data-emit-metadata', '0');
    script.setAttribute('data-theme', 'light');
    script.setAttribute('crossorigin', 'anonymous');
    script.async = true;

    // Check for dark mode and update theme if needed
    const isDarkMode = document.documentElement.classList.contains('dark');
    if (isDarkMode) {
      script.setAttribute('data-theme', 'dark');
    }
    
    // Add script to the current element
    commentRef.current.appendChild(script);
    
    return () => {
      // Clean up if component unmounts
      if (commentRef.current && commentRef.current.contains(script)) {
        commentRef.current.removeChild(script);
      }
    };
  }, []);
  
  return <div className="comments-section" ref={commentRef} />;
}
