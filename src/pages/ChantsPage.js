import React, { useEffect, useCallback, useMemo, useState } from 'react';
import { FaPlay, FaStop } from 'react-icons/fa';
import { useAudio } from '../contexts/AudioContext';
import { useLanguage } from '../contexts/LanguageContext';
import '../assets/styles/ChantsPage.css';

const ChantsPage = () => {
  const { 
    startChants,
    stopChants,
    isChantsPlaying
  } = useAudio();
  
  const { language, radhaKrishnaMantras, t } = useLanguage();
  const [selectedStotra, setSelectedStotra] = useState(0);
  const [showMeaningPopup, setShowMeaningPopup] = useState(false);

  // Stop background music when component mounts
  useEffect(() => {
    // Make sure background music is completely stopped on this page
    const bgMusic = document.getElementById('bgMusic');
    if (bgMusic) {
      bgMusic.pause();
      bgMusic.currentTime = 0; // Reset to beginning
      bgMusic.muted = true; // Mute to ensure no sound
    }
    
    // Cleanup when leaving using if statement
    return () => {
      // Unmute background music when leaving
      const bgMusic = document.getElementById('bgMusic');
      if (bgMusic) {
        bgMusic.muted = false;
      }
      
      if (isChantsPlaying) {
        stopChants();
      }
    };
  }, [isChantsPlaying, stopChants]);

  // Handle start/stop chanting button click - INSTANT start
  const handleToggleChanting = useCallback((e) => {
    // Prevent default to ensure this is treated as a direct user interaction
    e.preventDefault();
    e.stopPropagation(); // Stop event propagation to ensure direct user interaction
    
    console.log("Toggle chanting button clicked, isChantsPlaying:", isChantsPlaying);
    
    // Make sure background music is completely stopped before starting chants
    const bgMusic = document.getElementById('bgMusic');
    if (bgMusic) {
      bgMusic.pause();
      bgMusic.currentTime = 0;
      bgMusic.muted = true;
    }
    
    // Using ternary operator for conditional execution
    if (isChantsPlaying) {
      stopChants();
    } else {
      startChants();
    }
  }, [isChantsPlaying, stopChants, startChants]);

  // Get the current stotra based on selected language and selected stotra index
  const currentStotra = useMemo(() => {
    const stotras = radhaKrishnaMantras[language]?.mantras || radhaKrishnaMantras.en?.mantras || [];
    return stotras[selectedStotra] || stotras[0] || {};
  }, [language, radhaKrishnaMantras, selectedStotra]);

  // Button text object mapping
  const buttonTextMap = useMemo(() => ({
    playing: {
      icon: <FaStop className="btn-icon" />,
      text: t('stopChanting')
    },
    stopped: {
      icon: <FaPlay className="btn-icon" />,
      text: t('startChanting')
    }
  }), [t]);

  // Handle stotra selection
  const handleStotraChange = (event) => {
    setSelectedStotra(parseInt(event.target.value));
  };

  // Get stotras for the current language
  const stotras = useMemo(() => {
    return radhaKrishnaMantras[language]?.mantras || radhaKrishnaMantras.en?.mantras || [];
  }, [language, radhaKrishnaMantras]);

  return (
    <div className="chants-page">
      {/* Floating Petals - These are page-specific decorative elements */}
      <div className="floating-elements">
        <div className="floating-petal petal-1"></div>
        <div className="floating-petal petal-2"></div>
        <div className="floating-petal petal-3"></div>
        <div className="floating-petal petal-4"></div>
        <div className="floating-petal petal-5"></div>
        <div className="floating-petal petal-6"></div>
      </div>
      <div className="chants-container">
        <div className="chants-header">
          <h1 className="chants-title">{t('sacredChants')}</h1>
          <p className="chants-subtitle">{t('chantsSubtitle')}</p>
        </div>

        {/* Stotra Selector Dropdown - Top */}
        <div className="stotra-selector-section">
          <h3>
            {language === 'en'
              ? 'Select Stotra'
              : language === 'hi'
              ? 'स्तोत्र चुनें'
              : 'స్తోత్రం ఎంచుకోండి'}
          </h3>
          <select 
            className="stotra-dropdown"
            value={selectedStotra}
            onChange={handleStotraChange}
            disabled={isChantsPlaying}
          >
            {stotras.map((stotra, index) => (
              <option key={index} value={index}>
                {stotra.name}
              </option>
            ))}
          </select>
        </div>

        {/* Bottom Dock: Stotra Display Box + Chanting Button */}
        <div className="chants-bottom-dock">
          <div className="chant-card">
            <div className="chant-text">
              <div className="chant-card-header">
                <h3>{currentStotra.name}</h3>
                <button
                  type="button"
                  className="stotra-info-btn"
                  onClick={() => setShowMeaningPopup(true)}
                  aria-label={
                    language === 'en'
                      ? 'Meaning'
                      : language === 'hi'
                      ? 'अर्थ'
                      : 'అర్థం'
                  }
                  title={
                    language === 'en'
                      ? 'Meaning'
                      : language === 'hi'
                      ? 'अर्थ'
                      : 'అర్థం'
                  }
                >
                  i
                </button>
              </div>
              <div className="stotra-scroll-container">
                <p className="stotra-verse-text">
                  {currentStotra.text}
                </p>
              </div>
            </div>
          </div>

          <div className="chant-controls">
            <button
              className={`chant-btn ${isChantsPlaying ? 'stop' : 'start'}`}
              onClick={handleToggleChanting}
            >
              {/* Using ternary with object mapping for button content */}
              {isChantsPlaying ? buttonTextMap.playing.icon : buttonTextMap.stopped.icon}
              {isChantsPlaying ? buttonTextMap.playing.text : buttonTextMap.stopped.text}
            </button>
          </div>
        </div>

        {/* Spiritual Meaning Popup Modal */}
        {showMeaningPopup && (
          <div
            className="stotra-meaning-modal-overlay"
            onClick={() => setShowMeaningPopup(false)}
          >
            <div
              className="stotra-meaning-modal"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                type="button"
                className="stotra-meaning-close-btn"
                onClick={() => setShowMeaningPopup(false)}
                aria-label="Close"
              >
                ×
              </button>
              <div className="stotra-meaning-header">
                <span className="stotra-meaning-om">॥ ॐ ॥</span>
                <h4>{currentStotra.name}</h4>
                <span className="stotra-meaning-badge">
                  {language === 'en'
                    ? 'Sacred Meaning'
                    : language === 'hi'
                    ? 'पवित्र अर्थ'
                    : 'పవిత్ర అర్థం'}
                </span>
              </div>
              <div className="stotra-meaning-body">
                <p>{currentStotra.meaning}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ChantsPage;