import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import { useAudio } from '../contexts/AudioContext';
import Icon from './Icon';
import '../assets/styles/Navigation.css';

const Navigation = () => {
  const { language, switchLanguage } = useLanguage();
  const { toggleBackgroundMusic } = useAudio();
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
      {/* Hamburger Icon */}
      <button className="hamburger-menu-btn" onClick={toggleNav}>
        ☰
      </button>

      {/* Overlay */}
      {isOpen && <div className="mobile-overlay" onClick={closeNav}></div>}

      {/* Mobile Navigation */}
      <nav className={`mobile-nav ${isOpen ? 'open' : ''}`}>
        <div className="mobile-nav-header">
          <h2>Menu</h2>
          <button className="close-mobile-nav" onClick={closeNav}>×</button>
        </div>
        <div className="mobile-nav-content">
          <ul>
            <li>
              <Link to="/" className="mobile-nav-link" onClick={closeNav}>
                <Icon name="chakra" className="nav-icon" />
                {language === 'en' ? 'Home' : language === 'hi' ? 'मुख्य पृष्ठ' : 'హోమ్'}
              </Link>
            </li>
            <li>
              <Link to="/chapters" className="mobile-nav-link" onClick={closeNav}>
                <Icon name="shank" className="nav-icon" />
                {language === 'en' ? 'Chapters' : language === 'hi' ? 'अध्याय' : 'అధ్యాయాలు'}
              </Link>
            </li>
            <li>
              <Link to="/podcast" className="mobile-nav-link" onClick={closeNav}>
                <Icon name="om" className="nav-icon" />
                {language === 'en' ? 'Shlokas' : language === 'hi' ? 'श्लोकाः' : 'శ్లోకాలు'}
              </Link>
            </li>
            <li>
              <Link to="/meditation" className="mobile-nav-link" onClick={closeNav}>
                <Icon name="dhanush" className="nav-icon" />
                {language === 'en' ? 'Meditation' : language === 'hi' ? 'ध्यान' : 'ధ్యానం'}
              </Link>
            </li>
            <li>
              <Link to="/chants" className="mobile-nav-link" onClick={closeNav}>
                <Icon name="trishul" className="nav-icon" />
                {language === 'en' ? 'Chants' : language === 'hi' ? 'मंत्र' : 'మంత్రాలు'}
              </Link>
            </li>
            <li>
              <Link to="/about" className="mobile-nav-link" onClick={closeNav}>
                <Icon name="flute" className="nav-icon" />
                {language === 'en' ? 'About' : language === 'hi' ? 'परिचय' : 'గురించి'}
              </Link>
            </li>
          </ul>
          
          {/* Language Selector */}
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
                className="music-btn"
                onClick={toggleBackgroundMusic}
              >
                <Icon name="volume" className="nav-icon" />
                
              </button>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navigation;