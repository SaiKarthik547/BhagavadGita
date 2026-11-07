import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

import '../assets/styles/AboutPage.css';

const AboutPage = () => {
  const { t } = useLanguage();

  return (
    <div className="about-page">
      <div className="about-container">
        <div className="royal-about-scroll">
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

          {/* Ancient Royal Scripture Scroll Body */}
          <div className="royal-scroll-body about-scroll-body">
            <div className="about-scroll-header">
              <span className="royal-scroll-invocation">॥ श्री परमात्मने नमः ॥</span>
              <h1 className="about-title">{t('about')}</h1>
              <div className="chants-ancient-divider" aria-hidden="true">─── ❖ ❈ ❖ ───</div>
            </div>

            <div className="about-scroll-content">
              <div className="mission-section about-section-card">
                <h2>{t('aboutMission')}</h2>
                <div className="chants-ancient-divider section-mini-divider" aria-hidden="true">─── ❖ ───</div>
                <p>
                  {t('aboutMissionText')}
                </p>
              </div>

              <div className="chants-ancient-divider section-break-divider" aria-hidden="true">─── ❖ ❈ ❖ ───</div>
              
              <div className="features-section about-section-card">
                <h2>{t('appFeatures')}</h2>
                <div className="chants-ancient-divider section-mini-divider" aria-hidden="true">─── ❖ ───</div>
                <ul className="ancient-feature-list">
                  {t('appFeaturesList').map((feature, index) => (
                    <li key={index}>
                      <span className="bullet-emblem">❖</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <div className="additional-features">
                  <h3>{t('additionalFunctions')}</h3>
                  <div className="chants-ancient-divider section-mini-divider" aria-hidden="true">─── ❖ ───</div>
                  <ul className="ancient-feature-list">
                    <li><strong className="feature-label">{t('interactiveLearning')}:</strong> {t('interactiveLearningDesc')}</li>
                    <li><strong className="feature-label">{t('multilingualSupport')}:</strong> {t('multilingualSupportDesc')}</li>
                    <li><strong className="feature-label">{t('sacredMeditation')}:</strong> {t('sacredMeditationDesc')}</li>
                    <li><strong className="feature-label">{t('devotionalChants')}:</strong> {t('devotionalChantsDesc')}</li>
                    <li><strong className="feature-label">{t('kidsFriendly')}:</strong> {t('kidsFriendlyDesc')}</li>
                    <li><strong className="feature-label">{t('progressiveLearning')}:</strong> {t('progressiveLearningDesc')}</li>
                    <li><strong className="feature-label">{t('emotionalConnection')}:</strong> {t('emotionalConnectionDesc')}</li>
                    <li><strong className="feature-label">{t('offlineAccess')}:</strong> {t('offlineAccessDesc')}</li>
                    <li><strong className="feature-label">{t('personalReflection')}:</strong> {t('personalReflectionDesc')}</li>
                  </ul>
                </div>
              </div>

              <div className="chants-ancient-divider section-break-divider" aria-hidden="true">─── ❖ ❈ ❖ ───</div>
              
              <div className="usage-section about-section-card">
                <h2>{t('howToUseApp')}</h2>
                <div className="chants-ancient-divider section-mini-divider" aria-hidden="true">─── ❖ ───</div>
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

              <div className="chants-ancient-divider section-break-divider" aria-hidden="true">─── ❖ ❈ ❖ ───</div>
              
              <div className="benefits-section about-section-card">
                <h2>{t('spiritualBenefits')}</h2>
                <div className="chants-ancient-divider section-mini-divider" aria-hidden="true">─── ❖ ───</div>
                <ul className="ancient-benefits-list">
                  <li><span className="bullet-emblem">❖</span><span>{t('lifePurpose')}</span></li>
                  <li><span className="bullet-emblem">❖</span><span>{t('mentalStrength')}</span></li>
                  <li><span className="bullet-emblem">❖</span><span>{t('cultivateDetachment')}</span></li>
                  <li><span className="bullet-emblem">❖</span><span>{t('selfRealization')}</span></li>
                  <li><span className="bullet-emblem">❖</span><span>{t('practicalWisdom')}</span></li>
                  <li><span className="bullet-emblem">❖</span><span>{t('innerPeace')}</span></li>
                  <li><span className="bullet-emblem">❖</span><span>{t('ancientWisdom')}</span></li>
                  <li><span className="bullet-emblem">❖</span><span>{t('dailyPractice')}</span></li>
                </ul>
              </div>

              <div className="chants-ancient-divider section-break-divider" aria-hidden="true">─── ❖ ❈ ❖ ───</div>
              
              <div className="team-section about-section-card">
                <h2>{t('developmentTeam')}</h2>
                <div className="chants-ancient-divider section-mini-divider" aria-hidden="true">─── ❖ ───</div>
                <p>
                  {t('developmentTeamText')}
                </p>
              </div>

              <div className="chants-ancient-divider section-break-divider" aria-hidden="true">─── ❖ ❈ ❖ ───</div>
              
              <div className="contact-section about-section-card">
                <h2>{t('contactUs')}</h2>
                <div className="chants-ancient-divider section-mini-divider" aria-hidden="true">─── ❖ ───</div>
                <p>
                  {t('contactUsText')}
                </p>
              </div>
            </div>
          </div>

          {/* Bottom Royal Triangular Pennant Border (King's Decree Style) */}
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
    </div>
  );
};

export default AboutPage;