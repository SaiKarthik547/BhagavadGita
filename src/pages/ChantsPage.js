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
  const [showStotraPicker, setShowStotraPicker] = useState(false);

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

  // Handle stotra selection from the Royal Scripture Roll Picker
  const handleSelectStotra = (index) => {
    setSelectedStotra(index);
    setShowStotraPicker(false);
  };

  // Get stotras for the current language
  const stotras = useMemo(() => {
    return radhaKrishnaMantras[language]?.mantras || radhaKrishnaMantras.en?.mantras || [];
  }, [language, radhaKrishnaMantras]);

  const selectStotraLabel =
    language === 'en'
      ? 'Select Stotra'
      : language === 'hi'
      ? 'स्तोत्र चुनें'
      : 'స్తోత్రం ఎంచుకోండి';

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

        {/* Ancient Scripture Stotra Selector Plaque - Top (Below Chakra & Shankha) */}
        <div className="stotra-selector-section">
          <h3>{selectStotraLabel}</h3>
          <div className="chants-ancient-divider" aria-hidden="true">─── ❖ ───</div>
          <button
            type="button"
            className="stotra-dropdown stotra-royal-trigger"
            onClick={() => !isChantsPlaying && setShowStotraPicker(true)}
            disabled={isChantsPlaying}
            aria-haspopup="listbox"
            aria-expanded={showStotraPicker}
          >
            <span className="stotra-trigger-ornament" aria-hidden="true">❈</span>
            <span className="stotra-trigger-name">{currentStotra.name}</span>
            <span className="stotra-trigger-chevron" aria-hidden="true">▾</span>
          </button>
        </div>

        {/* Centered Royal Scripture Roll Picker Modal (Top Cylindrical Roller + Bottom Triangular King's Decree Border, No Animation) */}
        {showStotraPicker && (
          <div
            className="royal-stotra-picker-overlay"
            onClick={() => setShowStotraPicker(false)}
          >
            <div
              className="royal-stotra-scroll"
              onClick={(e) => e.stopPropagation()}
              role="listbox"
              aria-label={selectStotraLabel}
            >
              {/* TOP ONLY Cylindrical Royal Scroll Roller */}
              <div className="royal-scroll-top-roller" aria-hidden="true">
                <span className="royal-roller-cap cap-left"></span>
                <div className="royal-roller-rod">
                  <span className="royal-roller-ring ring-left"></span>
                  <span className="royal-roller-crest">❖</span>
                  <span className="royal-roller-ring ring-right"></span>
                </div>
                <span className="royal-roller-cap cap-right"></span>
              </div>

              {/* Ancient Royal Scripture Body with Stotra List */}
              <div className="royal-scroll-body">
                <div className="royal-scroll-header">
                  <span className="royal-scroll-invocation">॥ श्री राधाकृष्णाय नमः ॥</span>
                  <h4>{selectStotraLabel}</h4>
                  <button
                    type="button"
                    className="royal-scroll-close-btn"
                    onClick={() => setShowStotraPicker(false)}
                    aria-label="Close"
                  >
                    ×
                  </button>
                  <div className="chants-ancient-divider" aria-hidden="true">
                    ─── ❖ ❈ ❖ ───
                  </div>
                </div>

                <div className="royal-stotra-options-list">
                  {stotras.map((stotra, index) => {
                    const isSelected = index === selectedStotra;
                    return (
                      <button
                        key={index}
                        type="button"
                        role="option"
                        aria-selected={isSelected}
                        className={`royal-stotra-option-item ${isSelected ? 'selected' : ''}`}
                        onClick={() => handleSelectStotra(index)}
                      >
                        <span className="stotra-option-num">{index + 1}.</span>
                        <span className="stotra-option-title">{stotra.name}</span>
                        <span className="stotra-option-emblem" aria-hidden="true">
                          {isSelected ? '❖' : '✦'}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* BOTTOM Royal Triangular Pennant Border (King's Decree Style — NO Cylindrical Roller) */}
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

        {/* Bottom Dock: Ancient Talapatra Scripture Stotra Display Box + Chanting Button */}
        <div className="chants-bottom-dock">
          <div className="chant-card grandha-stotra-leaf">
            {/* Top Talapatra Grandha Iron Binding Rings & Cord */}
            <div className="grandha-iron-rings-bar chants-leaf-rings" aria-hidden="true">
              <div className="grandha-iron-ring-assembly ring-left">
                <span className="iron-ring-back-arc"></span>
                <span className="iron-ring-front-arc"></span>
              </div>
              <div className="grandha-binding-cord-bridge"></div>
              <div className="grandha-iron-ring-assembly ring-right">
                <span className="iron-ring-back-arc"></span>
                <span className="iron-ring-front-arc"></span>
              </div>
            </div>

            {/* Punched Binding Holes at Top of Leaf */}
            <div className="grandha-punched-holes" aria-hidden="true">
              <span className="grandha-punch-hole hole-left"></span>
              <span className="grandha-punch-hole hole-right"></span>
            </div>

            <div className="chant-text">
              <div className="chant-card-header">
                <span className="talapatra-corner-ornament left" aria-hidden="true">❈</span>
                <h3>{currentStotra.name}</h3>
                <span className="talapatra-corner-ornament right" aria-hidden="true">❈</span>
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
              <div className="chants-ancient-divider card-divider" aria-hidden="true">
                ─── ❖ ❈ ❖ ───
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