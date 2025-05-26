/**
 * This is an example of how to use the CoverImage component in a blog post
 * You can integrate this with your Hashnode blog through custom code blocks
 */

import CoverImage from './CoverImage';

const BlogPostWithCover = ({ post }) => {
  return (
    <article className="blog-post">
      {/* Cover image with title overlay */}
      <CoverImage 
        src={post.coverImage} 
        alt={`Cover image for ${post.title}`}
        title={post.title}
        priority={true}
      />
      
      <div className="post-meta">
        <span className="reading-time">{post.readingTime} min read</span>
        <span className="publish-date">Published {post.dateFormatted}</span>
      </div>
      
      <div className="blog-content">
        {/* Blog post content would go here */}
        {post.content}
      </div>
    </article>
  );
};

export default BlogPostWithCover;
