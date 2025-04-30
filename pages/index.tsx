import { useState } from 'react';

export default function Home() {
  const [url, setUrl] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Submitted URL:', url);
    setSubmitted(true);
  };

  return (
    <main style={{ padding: '3rem', fontFamily: 'sans-serif' }}>
      <h1>🛠️ AI Website Rebuilder</h1>
      <p>Paste an outdated website URL below, and we’ll rebuild it smarter, faster, and SEO-optimized.</p>
      <form onSubmit={handleSubmit}>
        <input
          type="url"
          placeholder="https://example.com"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          required
          style={{ padding: '0.5rem', width: '350px', marginRight: '1rem' }}
        />
        <button type="submit" style={{ padding: '0.5rem 1rem' }}>
          Rebuild Site
        </button>
      </form>

      {submitted && (
        <p style={{ marginTop: '1rem' }}>
          ✅ Received: <strong>{url}</strong><br />
          (Next: we'll auto-scrape and show a rebuilt proposal.)
        </p>
      )}
    </main>
  );
}
