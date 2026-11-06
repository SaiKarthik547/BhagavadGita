import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

import '../assets/styles/AboutPage.css';

const AboutPage = () => {
  const { t } = useLanguage();

  return (
    <div className="about-page">
      <div className="about-container">
        <div className="about-card">
          <h1 className="about-title">{t('about')}</h1>
          
          <div className="mission-section">
            <h2>{t('aboutMission')}</h2>
            <p>
              {t('aboutMissionText')}
            </p>
          </div>
          
          <div className="features-section">
            <h2>{t('appFeatures')}</h2>
            <ul>
              {t('appFeaturesList').map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
            
            <div className="additional-features">
              <h3>{t('additionalFunctions')}</h3>
              <ul>
                <li><strong>{t('interactiveLearning')}:</strong> {t('interactiveLearningDesc')}</li>
                <li><strong>{t('multilingualSupport')}:</strong> {t('multilingualSupportDesc')}</li>
                <li><strong>{t('sacredMeditation')}:</strong> {t('sacredMeditationDesc')}</li>
                <li><strong>{t('devotionalChants')}:</strong> {t('devotionalChantsDesc')}</li>
                <li><strong>{t('kidsFriendly')}:</strong> {t('kidsFriendlyDesc')}</li>
                <li><strong>{t('progressiveLearning')}:</strong> {t('progressiveLearningDesc')}</li>
                <li><strong>{t('emotionalConnection')}:</strong> {t('emotionalConnectionDesc')}</li>
                <li><strong>{t('offlineAccess')}:</strong> {t('offlineAccessDesc')}</li>
                <li><strong>{t('personalReflection')}:</strong> {t('personalReflectionDesc')}</li>
              </ul>
            </div>
          </div>
          
          <div className="usage-section">
            <h2>{t('howToUseApp')}</h2>
            <div className="usage-steps">
              <div className="usage-step">
                <h3>{t('exploreChaptersStep')}</h3>
                <p>{t('exploreChaptersDesc')}</p>
              </div>
              <div className="usage-step">
                <h3>{t('engageMeditationStep')}</h3>
                <p>{t('engageMeditationDesc')}</p>
              </div>
              <div className="usage-step">
                <h3>{t('chantMantrasStep')}</h3>
                <p>{t('chantMantrasDesc')}</p>
              </div>
              <div className="usage-step">
                <h3>{t('learnAtPaceStep')}</h3>
                <p>{t('learnAtPaceDesc')}</p>
              </div>
            </div>
          </div>
          
          <div className="benefits-section">
            <h2>{t('spiritualBenefits')}</h2>
            <ul>
              <li>{t('lifePurpose')}</li>
              <li>{t('mentalStrength')}</li>
              <li>{t('cultivateDetachment')}</li>
              <li>{t('selfRealization')}</li>
              <li>{t('practicalWisdom')}</li>
              <li>{t('innerPeace')}</li>
              <li>{t('ancientWisdom')}</li>
              <li>{t('dailyPractice')}</li>
            </ul>
          </div>
          
          <div className="team-section">
            <h2>{t('developmentTeam')}</h2>
            <p>
              {t('developmentTeamText')}
            </p>
          </div>
          
          <div className="contact-section">
            <h2>{t('contactUs')}</h2>
            <p>
              {t('contactUsText')}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;