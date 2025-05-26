# Example Blog Post with Hero Banner

This example demonstrates how to use the full-width hero banner in your Hashnode blog post.

## Using the Hero Banner

Add this code at the beginning of your blog post:

```html
<div class="hashnode-hero-banner" 
     data-image-url="https://images.unsplash.com/photo-1607799279861-4dd421887fb3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
     data-alt="Modern web development" 
     data-title="Building a Modern Web Application with React and GraphQL" 
     data-subtitle="May 26, 2025 • 8 min read">
</div>
```

## Blog Content Starts Here

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod, nisl eget aliquam ultricies, nunc nisl aliquet nunc, quis aliquam nisl nunc quis nisl. Nullam euismod, nisl eget aliquam ultricies, nunc nisl aliquet nunc, quis aliquam nisl nunc quis nisl.

### Key Features of Our Approach

1. Component-based architecture
2. Server-side rendering for better SEO
3. GraphQL for efficient data fetching
4. Responsive design for all devices

## Code Example

```javascript
// Example React component
function HeroBanner({ title, subtitle, imageUrl }) {
  return (
    <div className="hero-banner">
      <img src={imageUrl} alt={title} className="hero-image" />
      <div className="hero-content">
        <h1>{title}</h1>
        <p>{subtitle}</p>
      </div>
    </div>
  );
}
```

## How It Works

The hero banner component automatically creates a full-width banner at the top of your blog post. The key features include:

- Full-width design that spans the entire viewport
- Gradient overlay for improved text readability
- Responsive sizing that adapts to different screen sizes
- Support for both title and subtitle
- Automatic fallback handling for broken images

## Conclusion

Adding a hero banner to your blog posts creates a more professional and engaging user experience. With minimal setup, you can transform the visual appeal of your entire blog.

---

<!-- Adding the newsletter signup -->
<div class="newsletter-signup">
  <h3>Subscribe to my newsletter</h3>
  <p>Get the latest updates directly to your inbox</p>
  <div class="newsletter-form">
    <input type="email" placeholder="Your email address" class="newsletter-input" />
    <button class="newsletter-button">Subscribe</button>
  </div>
</div>

<!-- Adding comments section -->
<div class="comments-section" id="comments">
  <h3>Comments</h3>
  <p>Share your thoughts below</p>
</div>
