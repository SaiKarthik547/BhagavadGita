import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import { useAudio } from '../contexts/AudioContext';
import Icon from './Icon';
import '../assets/styles/Navigation.css';

const Navigation = () => {
  const { language, switchLanguage } = useLanguage();
  const { toggleBackgroundMusic, isBackgroundPlaying } = useAudio();
  const [isOpen, setIsOpen] = useState(false);

  const toggleNav = () => {
    setIsOpen(!isOpen);
  };

  const closeNav = () => {
    setIsOpen(false);
  };

  const handleLanguageChange = (lang) => {
    switchLanguage(lang);
    closeNav();
  };

  return (
    <>
      {/* Hamburger Icon - Idea 2: Sacred Golden Om Crest with Subtle Menu Aura */}
      <button
        className={`hamburger-menu-btn ${isOpen ? 'active' : ''}`}
        onClick={toggleNav}
        aria-label="Menu"
      >
        <svg className="hamburger-svg" viewBox="0 0 40 40" aria-hidden="true">
          <defs>
            <linearGradient id="sacredGoldBar" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#fff9c4" />
              <stop offset="50%" stopColor="#ffd700" />
              <stop offset="100%" stopColor="#ff8f00" />
            </linearGradient>
          </defs>
          {/* Sacred outer dashed halo ring */}
          <circle
            cx="20"
            cy="20"
            r="17"
            fill="none"
            stroke="rgba(255, 215, 0, 0.55)"
            strokeWidth="1"
            strokeDasharray="3 2"
          />
          {/* Glowing Golden Om Symbol Crest */}
          <text
            x="20"
            y="23.5"
            textAnchor="middle"
            fill="url(#sacredGoldBar)"
            fontSize="21.5"
            fontWeight="800"
          >
            ॐ
          </text>
          {/* Delicate menu motif beneath the Om crest */}
          <rect x="11.5" y="28.2" width="17" height="1.6" rx="0.8" fill="url(#sacredGoldBar)" opacity="0.92" />
          <rect x="14" y="31.2" width="12" height="1.6" rx="0.8" fill="url(#sacredGoldBar)" opacity="0.82" />
        </svg>
      </button>

      {/* Sacred Dimmed Backdrop Overlay */}
      <div
        className={`mobile-overlay ${isOpen ? 'active' : ''}`}
        onClick={closeNav}
        aria-hidden={!isOpen}
      ></div>

      {/* Centered Sacred Vedic Scroll Navigation */}
      <nav className={`mobile-nav ${isOpen ? 'open' : ''}`} aria-hidden={!isOpen}>
        {/* Top Golden Carved Scroll Roller */}
        <div className="scroll-roller roller-top">
          <span className="scroll-finial finial-left"></span>
          <div className="scroll-rod">
            <span className="scroll-rod-gem">❈</span>
          </div>
          <span className="scroll-finial finial-right"></span>
        </div>

        {/* Unrolling Opaque Vedic Parchment Body */}
        <div className="scroll-parchment">
          <div className="scroll-inner-frame">
            {/* Corner Temple Ornaments */}
            <span className="scroll-corner corner-tl">❧</span>
            <span className="scroll-corner corner-tr">❧</span>
            <span className="scroll-corner corner-bl">❧</span>
            <span className="scroll-corner corner-br">❧</span>

            {/* Subtle Rotating Sudarshana Chakra Watermark in Center of Scroll */}
            <svg className="scroll-chakra-watermark" viewBox="0 0 100 100" aria-hidden="true">
              <circle cx="50" cy="50" r="44" fill="none" stroke="#8b4513" strokeWidth="1.5" strokeDasharray="4 3" />
              <circle cx="50" cy="50" r="32" fill="none" stroke="#8b4513" strokeWidth="1.2" />
              <circle cx="50" cy="50" r="14" fill="none" stroke="#8b4513" strokeWidth="1.5" />
              <path d="M50 6 L50 94 M6 50 L94 50 M19 19 L81 81 M81 19 L19 81" stroke="#8b4513" strokeWidth="1" />
            </svg>

            <div className="mobile-nav-header">
              <span className="scroll-invocation">
                {language === 'en'
                  ? '॥ Sri Bhagavad Gita ॥'
                  : language === 'hi'
                  ? '॥ श्री भगवद्गीता ॥'
                  : '॥ శ్రీ భగవద్గీత ॥'}
              </span>
              <button className="close-mobile-nav" onClick={closeNav} aria-label="Close Menu">×</button>
            </div>

            <div className="mobile-nav-content">
              <ul>
                <li>
                  <Link to="/" className="mobile-nav-link" onClick={closeNav}>
                    <Icon name="chakra" className="nav-icon" />
                    <span className="nav-link-label">
                      {language === 'en' ? 'Home' : language === 'hi' ? 'मुख्य पृष्ठ' : 'హోమ్'}
                    </span>
                    <span className="nav-link-ornament">❖</span>
                  </Link>
                </li>
                <li>
                  <Link to="/chapters" className="mobile-nav-link" onClick={closeNav}>
                    <Icon name="shank" className="nav-icon" />
                    <span className="nav-link-label">
                      {language === 'en' ? 'Chapters' : language === 'hi' ? 'अध्याय' : 'అధ్యాయాలు'}
                    </span>
                    <span className="nav-link-ornament">❖</span>
                  </Link>
                </li>
                <li>
                  <Link to="/podcast" className="mobile-nav-link" onClick={closeNav}>
                    <Icon name="om" className="nav-icon" />
                    <span className="nav-link-label">
                      {language === 'en' ? 'Shlokas' : language === 'hi' ? 'श्लोकाः' : 'శ్లోకాలు'}
                    </span>
                    <span className="nav-link-ornament">❖</span>
                  </Link>
                </li>
                <li>
                  <Link to="/meditation" className="mobile-nav-link" onClick={closeNav}>
                    <Icon name="dhanush" className="nav-icon" />
                    <span className="nav-link-label">
                      {language === 'en' ? 'Meditation' : language === 'hi' ? 'ध्यान' : 'ధ్యానం'}
                    </span>
                    <span className="nav-link-ornament">❖</span>
                  </Link>
                </li>
                <li>
                  <Link to="/chants" className="mobile-nav-link" onClick={closeNav}>
                    <Icon name="trishul" className="nav-icon" />
                    <span className="nav-link-label">
                      {language === 'en' ? 'Chants' : language === 'hi' ? 'मंत्र' : 'మంత్రాలు'}
                    </span>
                    <span className="nav-link-ornament">❖</span>
                  </Link>
                </li>
                <li>
                  <Link to="/about" className="mobile-nav-link" onClick={closeNav}>
                    <Icon name="flute" className="nav-icon" />
                    <span className="nav-link-label">
                      {language === 'en' ? 'About' : language === 'hi' ? 'परिचय' : 'గురించి'}
                    </span>
                    <span className="nav-link-ornament">❖</span>
                  </Link>
                </li>
              </ul>

              <div className="scroll-divider">
                <span>─── ❈ ───</span>
              </div>

              {/* Language & Music Controls */}
              <div className="mobile-controls">
                <div className="mobile-language-control">
                  <h3>{language === 'en' ? 'Language' : language === 'hi' ? 'भाषा' : 'భాష'}</h3>
                  <div className="language-buttons">
                    <button
                      className={`lang-btn ${language === 'en' ? 'active' : ''}`}
                      onClick={() => handleLanguageChange('en')}
                    >
                      English
                    </button>
                    <button
                      className={`lang-btn ${language === 'hi' ? 'active' : ''}`}
                      onClick={() => handleLanguageChange('hi')}
                    >
                      हिंदी
                    </button>
                    <button
                      className={`lang-btn ${language === 'te' ? 'active' : ''}`}
                      onClick={() => handleLanguageChange('te')}
                    >
                      తెలుగు
                    </button>
                  </div>
                </div>

                {/* Volume Control */}
                <div className="mobile-music-control">
                  <button
                    className={`music-btn ${isBackgroundPlaying ? 'playing' : ''}`}
                    onClick={toggleBackgroundMusic}
                  >
                    <Icon name="volume" className="nav-icon music-nav-icon" />
                    <span className="music-btn-label">
                      {language === 'en'
                        ? isBackgroundPlaying ? 'Sacred Music: ON' : 'Sacred Music: OFF'
                        : language === 'hi'
                        ? isBackgroundPlaying ? 'दिव्य संगीत: चालू' : 'दिव्य संगीत: बंद'
                        : isBackgroundPlaying ? 'దివ్య సంగీతం: ఆన్' : 'దివ్య సంగీతం: ఆఫ్'}
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Golden Carved Scroll Roller */}
        <div className="scroll-roller roller-bottom">
          <span className="scroll-finial finial-left"></span>
          <div className="scroll-rod">
            <span className="scroll-rod-gem">❈</span>
          </div>
          <span className="scroll-finial finial-right"></span>
        </div>
      </nav>
    </>
  );
};

export default Navigation;