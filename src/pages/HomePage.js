import React, { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import Icon from '../components/Icon';
import '../assets/styles/HomePage.css';

const HomePage = () => {
  const { t, language, radhaKrishnaMantras } = useLanguage();
  const [showPopup, setShowPopup] = useState(null);

  // Get Ekashloki Bhagavadgita data for the current language
  const ekashlokiData = useMemo(() => {
    const stotras = radhaKrishnaMantras[language]?.mantras || radhaKrishnaMantras.en?.mantras || [];
    return stotras[0] || {}; // First item is Ekashloki Bhagavadgita
  }, [language, radhaKrishnaMantras]);

  // Handle popup open
  const openPopup = (popupType) => {
    setShowPopup(popupType);
  };

  // Handle popup close
  const closePopup = () => {
    setShowPopup(null);
  };

  return (
    <div className="homepage">
      
      
      <div className="home-container">
        <div className="app-description-card">
          <svg
            className="hero-arc-svg"
            viewBox="0 0 500 175"
            aria-label={t('heroTitle')}
            role="heading"
            aria-level="1"
          >
            <defs>
              <path
                id="krishna-aura-arc"
                d="M 38,152 A 222,142 0 0,1 462,152"
              />
              <path
                id="krishna-aura-inner-ring"
                d="M 56,158 A 204,130 0 0,1 444,158"
              />
              <linearGradient id="goldenAuraTextGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#ffe57f" />
                <stop offset="25%" stopColor="#fff9c4" />
                <stop offset="50%" stopColor="#ffd700" />
                <stop offset="75%" stopColor="#fff9c4" />
                <stop offset="100%" stopColor="#ffb300" />
              </linearGradient>
              <linearGradient id="goldenAuraRingGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="rgba(255, 193, 7, 0)" />
                <stop offset="20%" stopColor="rgba(255, 215, 0, 0.75)" />
                <stop offset="50%" stopColor="rgba(255, 248, 225, 0.95)" />
                <stop offset="80%" stopColor="rgba(255, 215, 0, 0.75)" />
                <stop offset="100%" stopColor="rgba(255, 193, 7, 0)" />
              </linearGradient>
              <filter id="goldenAuraGlow" x="-20%" y="-30%" width="140%" height="160%">
                <feDropShadow dx="0" dy="0" stdDeviation="5" floodColor="#ff8f00" floodOpacity="0.95" />
                <feDropShadow dx="0" dy="0" stdDeviation="10" floodColor="#ffd54f" floodOpacity="0.7" />
                <feDropShadow dx="0" dy="2" stdDeviation="1.5" floodColor="#2b0900" floodOpacity="0.9" />
              </filter>
            </defs>

            {/* Subtle glowing inner halo arc around Lord Krishna */}
            <use
              href="#krishna-aura-inner-ring"
              fill="none"
              stroke="url(#goldenAuraRingGrad)"
              strokeWidth="1.8"
              filter="url(#goldenAuraGlow)"
            />

            {/* Curved Golden Glowing Title */}
            <text className="hero-arc-text" filter="url(#goldenAuraGlow)">
              <textPath
                href="#krishna-aura-arc"
                startOffset="50%"
                textAnchor="middle"
              >
                {t('heroTitle')}
              </textPath>
            </text>
          </svg>
        </div>

        {/* Feature Buttons - Show popups when clicked */}
        <div className="features-buttons-section">
          <div className="features-buttons-grid">
            <div className="feature-button-container pos-ekashloki">
              <button
                className="feature-button"
                onClick={() => openPopup('ekashloki')}
                aria-label={ekashlokiData.name || t('exploreTeachings')}
                title={ekashlokiData.name || t('exploreTeachings')}
              >
                <div className="feature-icon">
                  <Icon name="flute" className="svg-icon" />
                </div>
              </button>
            </div>

            <div className="feature-button-container pos-meditation">
              <button
                className="feature-button"
                onClick={() => openPopup('meditation')}
                aria-label={t('meditationFeature')}
                title={t('meditationFeature')}
              >
                <span className="feature-icon">🧘‍♀️</span>
              </button>
            </div>

            <div className="feature-button-container pos-kids">
              <button
                className="feature-button"
                onClick={() => openPopup('kids')}
                aria-label={t('kidsVersion')}
                title={t('kidsVersion')}
              >
                <span className="feature-icon">👶</span>
              </button>
            </div>

            <div className="feature-button-container pos-history">
              <button
                className="feature-button"
                onClick={() => openPopup('history')}
                aria-label={t('historyOfBhagavadGita')}
                title={t('historyOfBhagavadGita')}
              >
                <span className="feature-icon">📜</span>
              </button>
            </div>
          </div>
        </div>

        <div className="cta-section">
          <h2>{t('startLearning')}</h2>
          <div className="cta-buttons">
            <Link to="/chapters" className="cta-button primary">
              {t('explore')}
            </Link>
            <Link to="/podcast" className="cta-button primary1">
              {t('exploreShlokas')}
            </Link>
            <Link to="/meditation" className="cta-button secondary">
              {t('beginMeditation')}
            </Link>
            <Link to="/chants" className="cta-button tertiary">
              {t('chants')}
            </Link>
          </div>
        </div>
      </div>

      {/* Ekashloki Bhagavadgita Popup */}
      {showPopup === 'ekashloki' && (
        <div className="popup-overlay" onClick={closePopup}>
          <div className="popup-content" onClick={(e) => e.stopPropagation()}>
            <button className="popup-close" onClick={closePopup}>×</button>
            <h2>Ekashloki Bhagavadgita</h2>
            <div className="ekashloki-section">
              <div className="ekashloki-card">
                <h3>{ekashlokiData.name}</h3>
                <div className="ekashloki-text">
                  <p style={{ whiteSpace: 'pre-line', fontSize: '1.1rem', lineHeight: '1.6' }}>
                    {ekashlokiData.text}
                  </p>
                </div>
                <p className="ekashloki-meaning">
                  {ekashlokiData.meaning}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Features Popup */}
      {showPopup === 'features' && (
        <div className="popup-overlay" onClick={closePopup}>
          <div className="popup-content" onClick={(e) => e.stopPropagation()}>
            <button className="popup-close" onClick={closePopup}>×</button>
            <h2>{t('exploreTeachings')}</h2>
            <div className="features-grid">
              {[
                {
                  icon: '📖',
                  title: t('completeChapters'),
                  description: t('completeChaptersDesc')
                },
                {
                  icon: '🧘‍♀️',
                  title: t('meditationFeature'),
                  description: t('meditationFeatureDesc')
                },
                {
                  icon: '🌍',
                  title: t('spiritualWisdom'),
                  description: t('spiritualWisdomDesc')
                },
                {
                  icon: '👶',
                  title: t('kidsVersion'),
                  description: t('kidsVersionDesc')
                }
              ].map((feature, index) => (
                <div key={index} className="feature-card">
                  <div className="feature-icon">{feature.icon}</div>
                  <h3 className="feature-title">{feature.title}</h3>
                  <p className="feature-description">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* History Popup */}
      {showPopup === 'history' && (
        <div className="popup-overlay" onClick={closePopup}>
          <div className="popup-content" onClick={(e) => e.stopPropagation()}>
            <button className="popup-close" onClick={closePopup}>×</button>
            <h2>{t('historyOfBhagavadGita')}</h2>
            <p className="history-text">
              {t('historyOfBhagavadGitaText')}
            </p>
          </div>
        </div>
      )}

      {/* Meditation Popup */}
      {showPopup === 'meditation' && (
        <div className="popup-overlay" onClick={closePopup}>
          <div className="popup-content" onClick={(e) => e.stopPropagation()}>
            <button className="popup-close" onClick={closePopup}>×</button>
            <h2>{t('meditationFeature')}</h2>
            <div className="feature-card">
              <div className="feature-icon">🧘‍♀️</div>
              <h3 className="feature-title">{t('meditationFeature')}</h3>
              <p className="feature-description">{t('meditationFeatureDesc')}</p>
            </div>
          </div>
        </div>
      )}

      {/* Kids Popup */}
      {showPopup === 'kids' && (
        <div className="popup-overlay" onClick={closePopup}>
          <div className="popup-content" onClick={(e) => e.stopPropagation()}>
            <button className="popup-close" onClick={closePopup}>×</button>
            <h2>{t('kidsVersion')}</h2>
            <div className="feature-card">
              <div className="feature-icon">👶</div>
              <h3 className="feature-title">{t('kidsVersion')}</h3>
              <p className="feature-description">{t('kidsVersionDesc')}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default HomePage;
