import React, { useState, useEffect } from "react"

const STORAGE_KEY = "trackcodex_cookie_consent"

export const CookieConsent = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [showSettings, setShowSettings] = useState(false)
  const [preferences, setPreferences] = useState({
    essential: true,
    analytics: true,
    marketing: false,
  })

  useEffect(() => {
    const consent = localStorage.getItem(STORAGE_KEY)
    if (!consent) {
      const timer = setTimeout(() => setIsVisible(true), 1000)
      return () => clearTimeout(timer)
    }
  }, [])

  useEffect(() => {
    const handleOpenSettings = () => {
      setIsVisible(true)
      setShowSettings(true)
    }

    window.addEventListener("open-cookie-settings", handleOpenSettings)
    return () => window.removeEventListener("open-cookie-settings", handleOpenSettings)
  }, [])

  const handleAcceptAll = () => {
    const newPrefs = { essential: true, analytics: true, marketing: true }
    savePreferences(newPrefs)
  }

  const handleRejectAll = () => {
    const newPrefs = { essential: true, analytics: false, marketing: false }
    savePreferences(newPrefs)
  }

  const handleSaveSettings = () => {
    savePreferences(preferences)
    setShowSettings(false)
  }

  const savePreferences = (prefs) => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(prefs))
    setPreferences(prefs)
    setIsVisible(false)
    window.dispatchEvent(new CustomEvent("cookie-consent-updated", { detail: prefs }))
  }

  if (!isVisible) return null

  return (
    <div className="cookie-consent-banner">
      {!showSettings ? (
        <div className="banner-content">
          <div className="text-section">
            <h3 className="banner-title">We value your privacy</h3>
            <p className="banner-text">
              We use cookies to enhance your browsing experience, serve personalized content, and analyze our traffic. 
              By clicking "Accept All", you consent to our use of cookies. Read our{" "}
              <a href="/governance/policies/privacy" className="banner-link">
                Privacy Policy
              </a>.
            </p>
          </div>
          <div className="button-group">
            <button
              onClick={() => setShowSettings(true)}
              className="btn-opt"
            >
              Customize
            </button>
            <button
              onClick={handleRejectAll}
              className="btn-opt"
            >
              Reject All
            </button>
            <button
              onClick={handleAcceptAll}
              className="btn-accept"
            >
              Accept All
            </button>
          </div>
        </div>
      ) : (
        <div className="settings-modal">
          <h3 className="settings-title">Cookie Preferences</h3>
          <div className="settings-options">
            <div className="option-item">
              <div>
                <p className="option-name">Essential</p>
                <p className="option-desc">Required for the site to function properly.</p>
              </div>
              <input type="checkbox" checked={preferences.essential} disabled className="option-check" title="Essential cookies (required)" aria-label="Essential cookies (required)" />
            </div>
            <div className="option-item">
              <div>
                <p className="option-name">Analytics</p>
                <p className="option-desc">Help us improve our docs by collecting anonymous usage data.</p>
              </div>
              <input
                type="checkbox"
                checked={preferences.analytics}
                onChange={(e) => setPreferences({ ...preferences, analytics: e.target.checked })}
                className="option-check"
                title="Analytics cookies"
                aria-label="Analytics cookies"
              />
            </div>
          </div>
          <div className="modal-footer">
            <button
              onClick={() => setShowSettings(false)}
              className="btn-opt"
            >
              Back
            </button>
            <button
              onClick={handleSaveSettings}
              className="btn-accept"
            >
              Save Preferences
            </button>
          </div>
        </div>
      )}

      <style jsx>{`
        .cookie-consent-banner {
          position: fixed;
          bottom: 0;
          left: 0;
          right: 0;
          z-index: 9999;
          padding: 1rem;
          background: #11141a;
          border-top: 1px solid #1e232e;
          box-shadow: 0 -10px 15px -3px rgba(0, 0, 0, 0.5);
          color: #c9d1d9;
        }
        .banner-content {
          max-width: 1200px;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }
        @media (min-width: 768px) {
          .banner-content {
            flex-direction: row;
            align-items: center;
            justify-content: space-between;
          }
        }
        .text-section {
          flex: 1;
        }
        .banner-title {
          font-size: 1.125rem;
          font-weight: 700;
          margin-bottom: 0.25rem;
        }
        .banner-text {
          font-size: 0.875rem;
          color: #8b949e;
        }
        .banner-link {
          color: #58a6ff;
          text-decoration: none;
        }
        .banner-link:hover {
          text-decoration: underline;
        }
        .button-group {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
          justify-content: center;
        }
        .btn-opt {
          padding: 0.5rem 1rem;
          font-size: 0.875rem;
          font-weight: 500;
          background: #11141a;
          border: 1px solid #1e232e;
          border-radius: 6px;
          cursor: pointer;
          transition: background 0.2s;
        }
        .btn-opt:hover {
          background: #30363d;
        }
        .btn-accept {
          padding: 0.5rem 1rem;
          font-size: 0.875rem;
          font-weight: 500;
          background: #238636;
          border: 1px solid #238636;
          border-radius: 6px;
          color: #fff;
          cursor: pointer;
          transition: background 0.2s;
        }
        .btn-accept:hover {
          background: #2ea043;
        }
        .settings-modal {
          max-width: 48rem;
          margin: 1rem auto;
          background: #0a0d14;
          padding: 1.5rem;
          border-radius: 8px;
          border: 1px solid #1e232e;
        }
        .settings-title {
          font-size: 1.125rem;
          font-weight: 700;
          margin-bottom: 1rem;
        }
        .settings-options {
          display: flex;
          flex-direction: column;
          gap: 1rem;
          margin-bottom: 1.5rem;
        }
        .option-item {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }
        .option-name {
          font-weight: 600;
        }
        .option-desc {
          font-size: 0.75rem;
          color: #8b949e;
        }
        .option-check {
          width: 1.25rem;
          height: 1.25rem;
          accent-color: #238636;
        }
        .modal-footer {
          display: flex;
          justify-content: flex-end;
          gap: 0.5rem;
        }
      `}</style>
    </div>
  )
}
