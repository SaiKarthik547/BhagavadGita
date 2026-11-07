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
            viewBox="0 0 500 88"
            aria-label={t('heroTitle')}
            role="heading"
            aria-level="1"
          >
            <defs>
              {/* Symmetrical high-sky circular arch crowning above Chakra, Peacock Feather, and Shankha */}
              <path
                id="krishna-aura-arc"
                d="M 68,70 A 275,225 0 0,1 432,70"
              />
              {/* Delicate concentric inner golden aura line */}
              <path
                id="krishna-aura-inner-ring"
                d="M 86,77 A 258,212 0 0,1 414,77"
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
                <stop offset="18%" stopColor="rgba(255, 215, 0, 0.72)" />
                <stop offset="50%" stopColor="rgba(255, 248, 225, 0.95)" />
                <stop offset="82%" stopColor="rgba(255, 215, 0, 0.72)" />
                <stop offset="100%" stopColor="rgba(255, 193, 7, 0)" />
              </linearGradient>
              <filter id="goldenAuraGlow" x="-20%" y="-35%" width="140%" height="170%">
                <feDropShadow dx="0" dy="0" stdDeviation="4" floodColor="#ff8f00" floodOpacity="0.95" />
                <feDropShadow dx="0" dy="0" stdDeviation="8" floodColor="#ffd54f" floodOpacity="0.7" />
                <feDropShadow dx="0" dy="1.5" stdDeviation="1.2" floodColor="#2b0900" floodOpacity="0.92" />
              </filter>
            </defs>

            {/* Concentric golden halo underline arch */}
            <use
              href="#krishna-aura-inner-ring"
              fill="none"
              stroke="url(#goldenAuraRingGrad)"
              strokeWidth="1.6"
              filter="url(#goldenAuraGlow)"
            />

            {/* Single Symmetrical Curved Golden Title */}
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

      {/* Royal Talapatra Grandha / King's Decree Popup Scroll */}
      {showPopup && (
        <div className="popup-overlay royal-home-modal-overlay" onClick={closePopup}>
          <div className="royal-home-scroll" onClick={(e) => e.stopPropagation()}>
            {/* Top Cylindrical Royal Scroll Roller */}
            <div className="royal-scroll-top-roller" aria-hidden="true">
              <span className="royal-roller-cap cap-left"></span>
              <div className="royal-roller-rod">
                <span className="royal-roller-ring ring-left"></span>
                <span className="royal-roller-crest">❖</span>
                <span className="royal-roller-ring ring-right"></span>
              </div>
              <span className="royal-roller-cap cap-right"></span>
            </div>

            {/* Scroll Parchment Body */}
            <div className="royal-scroll-body home-scroll-body">
              <div className="royal-scroll-header">
                <span className="royal-scroll-invocation">॥ श्री परमात्मने नमः ॥</span>
                <h2>
                  {showPopup === 'ekashloki' && (ekashlokiData.name || 'Ekashloki Bhagavadgita')}
                  {showPopup === 'meditation' && t('meditationFeature')}
                  {showPopup === 'kids' && t('kidsVersion')}
                  {showPopup === 'history' && t('historyOfBhagavadGita')}
                  {showPopup === 'features' && t('exploreTeachings')}
                </h2>
                <button
                  type="button"
                  className="royal-scroll-close-btn"
                  onClick={closePopup}
                  aria-label="Close"
                >
                  ×
                </button>
                <div className="chants-ancient-divider" aria-hidden="true">─── ❖ ❈ ❖ ───</div>
              </div>

              <div className="home-scroll-content">
                {/* 1. Ekashloki Bhagavadgita */}
                {showPopup === 'ekashloki' && (
                  <>
                    <div className="home-scroll-section">
                      <h3 className="home-section-heading">
                        <span className="heading-ornament">✦</span>
                        {language === 'en' ? 'Sacred Verse' : language === 'hi' ? 'पवित्र श्लोक' : 'పవిత్ర శ్లోకం'}
                        <span className="heading-ornament">✦</span>
                      </h3>
                      <div className="chants-ancient-divider section-mini-divider" aria-hidden="true">─── ❖ ───</div>
                      <p className="home-shloka-text">
                        {ekashlokiData.text}
                      </p>
                    </div>

                    <div className="chants-ancient-divider section-break-divider" aria-hidden="true">─── ❖ ❈ ❖ ───</div>

                    <div className="home-scroll-section">
                      <h3 className="home-section-heading">
                        <span className="heading-ornament">✦</span>
                        {language === 'en' ? 'Divine Meaning' : language === 'hi' ? 'दिव्य भावार्थ' : 'దివ్య భావార్థం'}
                        <span className="heading-ornament">✦</span>
                      </h3>
                      <div className="chants-ancient-divider section-mini-divider" aria-hidden="true">─── ❖ ───</div>
                      <p className="home-section-para para-reading">
                        {ekashlokiData.meaning}
                      </p>
                    </div>
                  </>
                )}

                {/* 2. Sacred Meditation */}
                {showPopup === 'meditation' && (
                  <div className="home-scroll-section">
                    <div className="home-feature-icon-badge" aria-hidden="true">🧘‍♀️</div>
                    <h3 className="home-section-heading">
                      <span className="heading-ornament">✦</span>
                      {t('meditationFeature')}
                      <span className="heading-ornament">✦</span>
                    </h3>
                    <div className="chants-ancient-divider section-mini-divider" aria-hidden="true">─── ❖ ───</div>
                    <p className="home-section-para">
                      {t('meditationFeatureDesc')}
                    </p>
                  </div>
                )}

                {/* 3. Kids Version */}
                {showPopup === 'kids' && (
                  <div className="home-scroll-section">
                    <div className="home-feature-icon-badge" aria-hidden="true">👶</div>
                    <h3 className="home-section-heading">
                      <span className="heading-ornament">✦</span>
                      {t('kidsVersion')}
                      <span className="heading-ornament">✦</span>
                    </h3>
                    <div className="chants-ancient-divider section-mini-divider" aria-hidden="true">─── ❖ ───</div>
                    <p className="home-section-para">
                      {t('kidsVersionDesc')}
                    </p>
                  </div>
                )}

                {/* 4. History of Bhagavad Gita */}
                {showPopup === 'history' && (
                  <div className="home-scroll-section">
                    <div className="home-feature-icon-badge" aria-hidden="true">📜</div>
                    <h3 className="home-section-heading">
                      <span className="heading-ornament">✦</span>
                      {t('historyOfBhagavadGita')}
                      <span className="heading-ornament">✦</span>
                    </h3>
                    <div className="chants-ancient-divider section-mini-divider" aria-hidden="true">─── ❖ ───</div>
                    <p className="home-section-para para-reading">
                      {t('historyOfBhagavadGitaText')}
                    </p>
                  </div>
                )}

                {/* 5. Features Grid */}
                {showPopup === 'features' && (
                  <div className="home-features-scroll-list">
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
                      <React.Fragment key={index}>
                        <div className="home-scroll-section">
                          <div className="home-feature-icon-badge" aria-hidden="true">{feature.icon}</div>
                          <h3 className="home-section-heading">
                            <span className="heading-ornament">✦</span>
                            {feature.title}
                            <span className="heading-ornament">✦</span>
                          </h3>
                          <div className="chants-ancient-divider section-mini-divider" aria-hidden="true">─── ❖ ───</div>
                          <p className="home-section-para">{feature.description}</p>
                        </div>
                        {index < 3 && <div className="chants-ancient-divider section-break-divider" aria-hidden="true">─── ❖ ❈ ❖ ───</div>}
                      </React.Fragment>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Bottom Pennant with Triangular Kings Decor & Tassel */}
            <div className="royal-scroll-triangular-bottom" aria-hidden="true">
              <div className="royal-triangular-pennant">
                <div className="royal-triangular-inner-trim"></div>
                <span className="royal-triangular-motif">❖</span>
              </div>
              <div className="royal-pennant-tassel">
                <span className="tassel-knot"></span>
                <span className="tassel-fringe"></span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default HomePage;
