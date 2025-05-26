/**
 * This is an example of how to use the HeroBanner component in a blog post
 * for full-width hero images across the entire banner
 */

import HeroBanner from './HeroBanner';

const BlogWithHero = ({ post }) => {
  return (
    <article className="blog-post-with-hero">
      {/* Full-width hero banner */}
      <HeroBanner 
        src={post.coverImage} 
        alt={`Cover image for ${post.title}`}
        title={post.title}
        subtitle={post.excerpt || `${post.readingTime} min read • Published ${post.dateFormatted}`}
        priority={true}
      />
      
      <div className="blog-content-container">
        <div className="post-meta">
          <span className="reading-time">{post.readingTime} min read</span>
          <span className="publish-date">Published {post.dateFormatted}</span>
          {post.tags && (
            <div className="post-tags">
              {post.tags.map(tag => (
                <span key={tag} className="post-tag">{tag}</span>
              ))}
            </div>
          )}
        </div>
        
        <div className="blog-content">
          {/* Blog post content would go here */}
          {post.content}
        </div>
      </div>
    </article>
  );
};

export default BlogWithHero;
