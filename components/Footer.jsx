import React from 'react';

const Footer = () => {
  return (
    <footer className="docs-footer">
      <div className="footer-top">
        <div className="footer-section">
          <h3>Help and support</h3>
          <h4>Did you find what you needed?</h4>
          <div className="feedback-buttons">
            <button className="btn-feedback">
              <span>👍</span> Yes
            </button>
            <button className="btn-feedback">
              <span>👎</span> No
            </button>
          </div>
          <a href="/governance/policies/privacy" className="footer-link">Privacy policy</a>
        </div>

        <div className="footer-section">
          <h4>Help us make these docs great!</h4>
          <p>All TrackCodex docs are open source. See something that's wrong or unclear? Submit a pull request.</p>
          <button className="btn-contribution">
            <span>🍴</span> Make a contribution
          </button>
          <a href="/guides/contributing" className="footer-link" style={{ marginTop: '1rem' }}>Learn how to contribute</a>
        </div>

        <div className="footer-section">
          <h4>Still need help?</h4>
          <a href="https://community.trackcodex.com" className="footer-link footer-link-with-icon">
             Ask the TrackCodex community
          </a>
          <a href="https://support.trackcodex.com" className="footer-link footer-link-with-icon">
             Contact support
          </a>
        </div>
      </div>

      <div className="footer-legal">
        <span>© {new Date().getFullYear()} TrackCodex, Inc.</span>
        <div className="legal-links">
          <a href="/governance/policies/terms">Terms</a>
          <a href="/governance/policies/privacy">Privacy</a>
          <a href="https://status.trackcodex.com">Status</a>
          <a href="/pricing">Pricing</a>
          <a href="/services">Expert services</a>
          <a href="/blog">Blog</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
