import { useState } from 'react';

export default function NewsletterSignup() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('idle');
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');
    
    // Replace with your actual newsletter service endpoint
    try {
      // This is a placeholder - in a real implementation, you'd connect to your newsletter service
      // Example with a serverless function:
      // const response = await fetch('/api/subscribe', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify({ email })
      // });
      
      // For now, simulate success after a delay
      setTimeout(() => {
        setStatus('success');
        setEmail('');
      }, 1000);
    } catch (error) {
      setStatus('error');
    }
  };
  
  return (
    <div className="newsletter-signup">
      <h3 className="text-lg font-bold mb-2">Subscribe to my newsletter</h3>
      <p>Get new posts delivered right to your inbox</p>
      
      {status === 'success' ? (
        <p style={{ color: '#16a34a' }}>
          Thanks for subscribing!
        </p>
      ) : (
        <form onSubmit={handleSubmit} className="newsletter-form">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="email@example.com"
            required
            className="newsletter-input"
          />
          <button
            type="submit"
            disabled={status === 'loading'}
            className="newsletter-button"
          >
            {status === 'loading' ? 'Subscribing...' : 'Subscribe'}
          </button>
        </form>
      )}
      {status === 'error' && (
        <p style={{ color: '#dc2626' }}>
          Something went wrong. Please try again.
        </p>
      )}
    </div>
  );
}
