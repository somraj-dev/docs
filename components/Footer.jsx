import React from 'react';

const Footer = () => {
  return (
    <footer className="docs-footer">
      <div className="footer-top">
        <div className="footer-section">
          <h3>Help and support</h3>
          <h4>Did you find what you needed?</h4>
          <div className="feedback-buttons">
            <button className="btn-feedback" type="button" onClick={() => alert('Thanks for your feedback!')}>
              <span role="img" aria-label="thumbs up">👍</span> Yes
            </button>
            <button className="btn-feedback" type="button" onClick={() => alert('Sorry to hear that! Please let us know how we can improve.')}>
              <span role="img" aria-label="thumbs down">👎</span> No
            </button>
          </div>
          <a href="/governance/policies/privacy" className="footer-link">Privacy policy</a>
        </div>

        <div className="footer-section">
          <h4>Help us make these docs great!</h4>
          <p>All TrackCodex docs are open source. See something that's wrong or unclear? Submit a pull request.</p>
          <button className="btn-contribution" type="button" onClick={() => window.open('https://github.com/somraj-dev/docs', '_blank')}>
            <span role="img" aria-label="contribution">🍴</span> Make a contribution
          </button>
          <div style={{ marginTop: '1rem' }}>
            <a href="/guides/contributing" className="footer-link">Learn how to contribute</a>
          </div>
        </div>

        <div className="footer-section">
          <h4>Need help?</h4>
          <div className="footer-help-links">
            <a href="https://support.trackcodex.com" className="footer-link footer-link-with-icon">
               <span role="img" aria-label="support">🎧</span> Contact Support
            </a>
            <a href="https://community.trackcodex.com" className="footer-link footer-link-with-icon">
               <span role="img" aria-label="community">💬</span> Ask the Community
            </a>
          </div>
        </div>
      </div>

      <div className="footer-legal">
        <span>© {new Date().getFullYear()} TrackCodex, Inc.</span>
        <div className="legal-links">
          <a href="/governance/policies/terms">Terms</a>
          <a href="/governance/policies/privacy">Privacy</a>
          <a href="/governance/security">Security</a>
          <a href="https://status.trackcodex.com">Status</a>
          <a href="/governance/policies/pricing">Pricing</a>
          <button 
            type="button"
            className="footer-link-btn"
            onClick={() => window.dispatchEvent(new CustomEvent('open-cookie-settings'))}
          >
            Manage cookies
          </button>
          <a href="/governance/policies/services">Expert services</a>
          <a href="/blog">Blog</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
