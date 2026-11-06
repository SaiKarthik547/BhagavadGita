import React from 'react';
import { Link } from 'react-router-dom';
import bhagavadGitaData from '../data/bhagavadGitaData.js';
import { useLanguage } from '../contexts/LanguageContext';
import '../assets/styles/ChaptersPage.css';

const ChaptersPage = () => {
  const { language, t } = useLanguage();

  // Use the global language setting instead of local state
  const languageKey = language === 'hi' ? 'hi' : language === 'te' ? 'te' : 'en';
  const chapters = bhagavadGitaData[languageKey]?.chapters || {};

  const chapterIds = Object.keys(chapters);

  return (
    <div className="chapters-page">
      {/* Floating Petals */}
      <div className="floating-elements">
        <div className="floating-petal petal-1"></div>
        <div className="floating-petal petal-2"></div>
        <div className="floating-petal petal-3"></div>
        <div className="floating-petal petal-4"></div>
        <div className="floating-petal petal-5"></div>
        <div className="floating-petal petal-6"></div>
      </div>
      
      <div className="chapters-container">
        <header className="chapters-header">
          <h1 className="chapters-title">
            {language === 'en' ? 'Chapters' : language === 'hi' ? 'अध्याय' : 'అధ్యాయాలు'}
          </h1>
          <p className="chapters-subtitle">{t('chaptersSubtitle')}</p>
        </header>

        <div className="chapters-list">
          {chapterIds.map((chapterId) => {
            const chapter = chapters[chapterId];
            return (
              <Link 
                to={`/chapters/${chapterId}`} 
                className="chapter-item"
                key={chapterId}
              >
                <div className="chapter-card">
                  <div className="chapter-number">{chapterId}</div>
                  <div className="chapter-info">
                    <h3 className="chapter-title">{chapter.title}</h3>
                    <p className="chapter-subtitle">{chapter.subtitle}</p>
                  </div>
                  <div className="chapter-meta">
                    <span className="conversation-count">
                      {chapter.dialogue?.length || 0} {t('conversations')}
                    </span>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>

        {chapterIds.length === 0 && (
          <div className="no-chapters">
            <p>{t('loading')}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ChaptersPage;