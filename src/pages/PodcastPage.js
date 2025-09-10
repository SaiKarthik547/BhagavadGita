import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import podcastData from '../data/podcastdata.js';
import '../assets/styles/PodcastPage.css';

const PodcastPage = () => {
  const { language, t } = useLanguage();
  
  // Get language key
  const languageKey = language === 'hi' ? 'hi' : language === 'te' ? 'te' : 'en';
  
  // Get UI texts
  const uiTexts = podcastData[languageKey]?.ui || podcastData.en.ui;
  
  // Get chapters
  const chapters = podcastData[languageKey]?.chapters || podcastData.en.chapters;

  return (
    <div className="podcast-page">
      {/* Floating Petals */}
      <div className="floating-elements">
        <div className="floating-petal petal-1"></div>
        <div className="floating-petal petal-2"></div>
        <div className="floating-petal petal-3"></div>
        <div className="floating-petal petal-4"></div>
        <div className="floating-petal petal-5"></div>
        <div className="floating-petal petal-6"></div>
      </div>

      <div className="podcast-container">
        <header className="podcast-header">
          <h1>{uiTexts.dialogueTitle}</h1>
          <p>{uiTexts.welcomeMessage?.subtitle || "Select a chapter to begin your sacred journey"}</p>
        </header>
        
        <div className="podcast-chapters-grid">
          {Object.entries(chapters).map(([chapterId, chapter]) => (
            <Link 
              to={`/podcast/${chapterId}`} 
              key={chapterId} 
              className="podcast-chapter-card"
            >
              <div className="podcast-chapter-content">
                <h2>{chapterId}. {chapter.title}</h2>
                <h3>{chapter.subtitle}</h3>
                <div className="chapter-meta">
                  <span className="dialogue-count">
                    {chapter.dialogue?.length || 0} {t('dialogues')}
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PodcastPage;