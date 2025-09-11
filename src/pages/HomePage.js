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
          <h1 className="hero-title">{t('heroTitle')}</h1>
        </div>

        {/* Feature Buttons - Show popups when clicked */}
        <div className="features-buttons-section">
          <div className="features-buttons-grid">
            <div className="left-buttons">
              <div className="feature-button-container">
                <button className="feature-button" onClick={() => openPopup('ekashloki')}>
                  <div className="feature-icon">
                    <Icon name="flute" className="svg-icon" />
                  </div>
                </button>
                <span className="feature-button-text">{ekashlokiData.name || t('exploreTeachings')}</span>
              </div>
              
              <div className="feature-button-container">
                <button className="feature-button" onClick={() => openPopup('history')}>
                  <span className="feature-icon">📜</span>
                </button>
                <span className="feature-button-text">{t('historyOfBhagavadGita')}</span>
              </div>
            </div>
            
            <div className="center-space"></div>
            
            <div className="right-buttons">
              <div className="feature-button-container">
                <button className="feature-button" onClick={() => openPopup('meditation')}>
                  <span className="feature-icon">🧘‍♀️</span>
                </button>
                <span className="feature-button-text">{t('meditationFeature')}</span>
              </div>
              <div className="feature-button-container">
                <button className="feature-button" onClick={() => openPopup('kids')}>
                  <span className="feature-icon">👶</span>
                </button>
                <span className="feature-button-text">{t('kidsVersion')}</span>
              </div>
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
