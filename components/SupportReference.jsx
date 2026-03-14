import React from 'react';

export const SupportReference = ({ title = "Need more help?", children }) => {
  return (
    <div className="support-reference" style={{
      padding: '1.5rem',
      backgroundColor: 'rgba(56, 189, 248, 0.1)',
      border: '1px solid rgba(56, 189, 248, 0.2)',
      borderRadius: '0.75rem',
      marginTop: '2rem',
      marginBottom: '2rem'
    }}>
      <h4 style={{ margin: 0, color: '#38bdf8', fontSize: '1.1rem', fontWeight: '600' }}>
        {title}
      </h4>
      <div style={{ marginTop: '0.5rem', fontSize: '0.95rem', color: '#64748b' }}>
        {children || "Can't find what you're looking for? Our support team is here to help you get the most out of TrackCodex."}
      </div>
      <div style={{ marginTop: '1rem' }}>
        <a 
          href="https://support.trackcodex.com" 
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.5rem',
            backgroundColor: '#38bdf8',
            color: 'white',
            padding: '0.5rem 1rem',
            borderRadius: '0.5rem',
            textDecoration: 'none',
            fontSize: '0.9rem',
            fontWeight: '500',
            transition: 'background-color 0.2s'
          }}
          onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#0ea5e9'}
          onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#38bdf8'}
        >
          Contact Support
        </a>
      </div>
    </div>
  );
};

export default SupportReference;
