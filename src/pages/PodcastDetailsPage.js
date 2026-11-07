import React, { useState, useEffect, useMemo, useCallback } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import podcastData from '../data/podcastdata.js';
// Import character images
import arjunaImage from '../assets/images/arjuna.png';
import krishnaImage from '../assets/images/krishna.png';
import sanjayaImage from '../assets/images/sanjaya.png';
import dritarashtraImage from '../assets/images/dritharastra.png';
import duryodhanaImage from '../assets/images/duryodhana.png';
import vishwaroopamImage from '../assets/images/vishwaroopam.png';
import sharadaMataImage from '../assets/images/sharada mata.png';

import '../assets/styles/PodcastDetailsPage.css';

const PodcastDetailsPage = () => {
  const { chapterId } = useParams();
  const { language } = useLanguage();
  
  // Get language key
  const languageKey = language === 'hi' ? 'hi' : language === 'te' ? 'te' : 'en';
  
  // Get chapter data
  const chapter = useMemo(() => 
    podcastData[languageKey]?.chapters[chapterId] || podcastData.en.chapters[chapterId], 
    [languageKey, chapterId]
  );
  
  // State variables
  const [currentDialogueIndex, setCurrentDialogueIndex] = useState(0);
  const [characterType, setCharacterType] = useState(''); 
  const [currentText, setCurrentText] = useState('');
  const [showSummary, setShowSummary] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [flipDirection, setFlipDirection] = useState(''); // 'next' (bottom-to-top) or 'prev' (top-to-bottom)
  const [isPageFlipping, setIsPageFlipping] = useState(false);
  const [outgoingPage, setOutgoingPage] = useState(null);
  const [revealedCharCount, setRevealedCharCount] = useState(0);

  // Live-writing scribe reveal animation for currentText on the Talapatra Grandha leaf
  useEffect(() => {
    if (!currentText) {
      setRevealedCharCount(0);
      return;
    }

    setRevealedCharCount(0);
    const totalLength = currentText.length;
    const step = Math.max(1, Math.ceil(totalLength / 68));
    const startDelay = flipDirection === 'prev' ? 340 : 180;

    let intervalId = null;
    const delayTimer = setTimeout(() => {
      intervalId = setInterval(() => {
        setRevealedCharCount((prev) => {
          if (prev + step >= totalLength) {
            if (intervalId) clearInterval(intervalId);
            return totalLength;
          }
          return prev + step;
        });
      }, 26);
    }, startDelay);

    return () => {
      clearTimeout(delayTimer);
      if (intervalId) clearInterval(intervalId);
    };
  }, [currentText, currentDialogueIndex, flipDirection]);

  // Preload character images for seamless transitions
  useEffect(() => {
    [arjunaImage, krishnaImage, sanjayaImage, dritarashtraImage, duryodhanaImage, vishwaroopamImage, sharadaMataImage].forEach((src) => {
      const img = new Image();
      img.src = src;
    });
  }, []);

  const finishTransitionSmoothly = () => {
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        setIsTransitioning(false);
      });
    });
  };
  
  // Get dialogues
  const dialogues = useMemo(() => chapter?.dialogue || [], [chapter]);
  
  // Helper function to check if speaker is Arjuna
  const isArjunaSpeaker = useMemo(() => (speaker) => {
    return speaker === 'Arjuna' || speaker === 'अर्जुन' || speaker === 'అర్జునుడు' || speaker === 'అర్జున';
  }, []);

  // Helper function to check if speaker is Krishna
  const isKrishnaSpeaker = useMemo(() => (speaker) => {
    return speaker === 'Lord Krishna' || speaker === 'कृष्ण' || speaker === 'శ్రీకృష్ణుడు' || 
           speaker === 'कृष्णुडु' || speaker === 'కృష్ణ' || speaker === 'श्री कृष्ण' || speaker === 'కృష్ణుడు';
  }, []);

  // Helper function to check if speaker is Sanjaya
  const isSanjayaSpeaker = useMemo(() => (speaker) => {
    return speaker === 'Sañjaya' || speaker === 'सञ्जय' || speaker === 'సంజయుడు' || speaker === 'సంజయ';
  }, []);

  // Helper function to check if speaker is Dhritarashtra
  const isDhritarashtraSpeaker = useMemo(() => (speaker) => {
    return speaker === 'Dhṛtarāṣṭra' || speaker === 'धृतराष्ट्र' || speaker === 'ధృతరాష్ట్రుడు' || speaker === 'ధృతరాష్ట్ర';
  }, []);

  // Helper function to check if speaker is Duryodhana
  const isDuryodhanaSpeaker = useMemo(() => (speaker) => {
    return speaker === 'Duryodhana' || speaker === 'दुर्योधन' || speaker === 'దుర్యోధనుడు' || speaker === 'దుర్యోధన';
  }, []);

  // Function to get the correct emotion class name for CSS styling (uses exact emotion names)
  const getEmotionClassNameForStyling = useMemo(() => (emotion) => {
    // Return the exact emotion name to match CSS classes
    return (emotion || 'neutral');
  }, []);

  // Function to update character type based on speaker and dialogue index
  const updateCharacterType = useCallback((speaker, index) => {
    if (isArjunaSpeaker(speaker)) {
      setCharacterType('arjuna');
    } else if (isKrishnaSpeaker(speaker)) {
      // Special handling for Chapter 11
      if (chapterId === '11') {
        // For dialogues 32-46 (0-indexed would be 31-45), use vishwaroopam
        // Extract dialogue number from the text (it's at the end like || 32 ||)
        const currentDialogue = dialogues[index];
        if (currentDialogue && currentDialogue.text) {
          const dialogueNumberMatch = currentDialogue.text.match(/\|\| (\d+) \|\|$/);
          if (dialogueNumberMatch) {
            const dialogueNumber = parseInt(dialogueNumberMatch[1]);
            if (dialogueNumber >= 32 && dialogueNumber <= 46) {
              setCharacterType('vishwaroopam');
              return;
            }
          }
        }
        // Also check by index as fallback
        if (index >= 31 && index <= 45) {
          setCharacterType('vishwaroopam');
        } else {
          setCharacterType('krishna');
        }
      } else {
        setCharacterType('krishna');
      }
    } else if (isSanjayaSpeaker(speaker)) {
      setCharacterType('sanjaya');
    } else if (isDhritarashtraSpeaker(speaker)) {
      setCharacterType('dhritarashtra');
    } else if (isDuryodhanaSpeaker(speaker)) {
      setCharacterType('duryodhana');
    } else {
      setCharacterType('krishna'); // Default to Krishna
    }
  }, [chapterId, dialogues, isArjunaSpeaker, isKrishnaSpeaker, isSanjayaSpeaker, isDhritarashtraSpeaker, isDuryodhanaSpeaker]);

  // Initialize the first dialogue
  useEffect(() => {
    if (dialogues.length > 0) {
      const firstDialogue = dialogues[0];
      setCurrentText(firstDialogue.text);
      
      // Determine character type based on speaker
      const speaker = firstDialogue.speaker;
      updateCharacterType(speaker, 0);
      setCurrentDialogueIndex(0);
    }
  }, [dialogues, chapterId, updateCharacterType]); // Added updateCharacterType to dependency array
  
  // Get current dialogue for emotion display
  const currentDialogue = useMemo(() => dialogues[currentDialogueIndex] || {}, [dialogues, currentDialogueIndex]);

  // Get UI texts
  const uiTexts = useMemo(() => podcastData[languageKey]?.ui || podcastData.en.ui, [languageKey]);

  // Close summary modal
  const closeSummary = () => {
    setShowSummary(false);
  };

  // If chapter not found, show error
  if (!chapter) {
    return (
      <div className="podcast-details-minimal">
        <div className="error-message">
          <h2>Chapter Not Found</h2>
          <p>Chapter ID: {chapterId} not found</p>
          <Link to="/podcast" className="back-link">Back to Podcasts</Link>
        </div>
      </div>
    );
  }

  // Function to get the correct image based on character type
  const getCharacterImage = () => {
    switch (characterType) {
      case 'arjuna':
        return arjunaImage;
      case 'krishna':
        return krishnaImage;
      case 'sanjaya':
        return sanjayaImage;
      case 'dhritarashtra':
        return dritarashtraImage;
      case 'duryodhana':
        return duryodhanaImage;
      case 'vishwaroopam':
        return vishwaroopamImage;
      default:
        return krishnaImage;
    }
  };

  // Function to get the alt text based on character type
  const getCharacterAltText = () => {
    switch (characterType) {
      case 'arjuna':
        return 'Arjuna';
      case 'krishna':
        return 'Lord Krishna';
      case 'sanjaya':
        return 'Sañjaya';
      case 'dhritarashtra':
        return 'Dhṛtarāṣṭra';
      case 'duryodhana':
        return 'Duryodhana';
      case 'vishwaroopam':
        return 'Vishwaroopam';
      default:
        return 'Lord Krishna';
    }
  };

  const triggerGrandhaPageFlip = (direction) => {
    const activeDlg = dialogues[currentDialogueIndex] || {};
    setOutgoingPage({
      speaker: activeDlg.speaker || '',
      text: currentText || activeDlg.text || '',
      emotion: activeDlg.emotion || 'neutral'
    });
    setFlipDirection(direction);
    setIsPageFlipping(true);
    setTimeout(() => {
      setIsPageFlipping(false);
    }, 920);
  };

  // Handle next dialogue
  const handleNext = () => {
    if (isTransitioning || isPageFlipping) return;
    if (currentDialogueIndex < dialogues.length - 1) {
      const nextIndex = currentDialogueIndex + 1;
      const nextDialogue = dialogues[nextIndex];
      triggerGrandhaPageFlip('next');
      setIsTransitioning(true);
      setCurrentText(nextDialogue.text);
      setCurrentDialogueIndex(nextIndex);

      setTimeout(() => {
        // Determine character type based on speaker
        const speaker = nextDialogue.speaker;
        updateCharacterType(speaker, nextIndex);
        finishTransitionSmoothly();
      }, 280);
    } else {
      // Show summary when chapter is completed
      setShowSummary(true);
    }
  };

  // Handle previous dialogue
  const handlePrevious = () => {
    if (isTransitioning || isPageFlipping) return;
    if (currentDialogueIndex > 0) {
      const prevIndex = currentDialogueIndex - 1;
      const prevDialogue = dialogues[prevIndex];
      triggerGrandhaPageFlip('prev');
      setIsTransitioning(true);
      setCurrentText(prevDialogue.text);
      setCurrentDialogueIndex(prevIndex);

      setTimeout(() => {
        // Determine character type based on speaker
        const speaker = prevDialogue.speaker;
        updateCharacterType(speaker, prevIndex);
        finishTransitionSmoothly();
      }, 280);
    }
  };

  // Helper function to format text with line breaks
  const formatTextWithLineBreaks = (text) => {
    if (!text) return text;
    
    // Split text by newline characters and wrap each line in a span with a line break
    return text.split('\n').map((line, index, arr) => (
      <React.Fragment key={index}>
        {line}
        {index < arr.length - 1 && <br />}
      </React.Fragment>
    ));
  };

  

  return (
    <div className="podcast-details">
      {/* Sharada Mata image - display at top center when speaker is Krishna or Arjuna, except in Chapter 11 */}
      {chapterId !== '11' && (isKrishnaSpeaker(currentDialogue.speaker) || isArjunaSpeaker(currentDialogue.speaker)) && (
        <div className="sharada-mata-container">
          <img 
            src={sharadaMataImage} 
            alt="Sharada Mata" 
            className="sharada-mata-image"
          />
        </div>
      )}
      
      {/* Character Images - Full screen */}
      <div className={`character-fullscreen ${characterType} ${isTransitioning ? 'dialogue-fade-out' : 'dialogue-fade-in'}`}>
        <img 
          src={getCharacterImage()} 
          alt={getCharacterAltText()} 
          className={`character-image-full ${getEmotionClassNameForStyling(currentDialogue.emotion)}`}
        />
      </div>
      
      {/* Ancient Talapatra Grandha Bound Book at Bottom */}
      <div className={`cloud-container grandha-book-container ${characterType}`}>
        <div className="grandha-bound-book">
          {/* Top Iron Binding Rings & Cord passing through the Punched Holes */}
          <div className="grandha-iron-rings-bar" aria-hidden="true">
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

          {/* Stationary Under-Leaf visible during Previous (top-to-bottom) page pull-down */}
          {isPageFlipping && flipDirection === 'prev' && outgoingPage && (
            <div className="grandha-under-leaf" aria-hidden="true">
              <div className="grandha-punched-holes">
                <span className="grandha-punch-hole hole-left"></span>
                <span className="grandha-punch-hole hole-right"></span>
              </div>
              <div className="cloud-text">
                <div className="dialogue-container">
                  <div className="speaker-name">{outgoingPage.speaker}</div>
                  <div className="grandha-ancient-pattern-divider">─── ❖ ❈ ❖ ───</div>
                  <div className="dialogue-text">{formatTextWithLineBreaks(outgoingPage.text)}</div>
                  <div className="grandha-ancient-pattern-divider emotion-divider">─── ❖ ───</div>
                  <div className="emotion-display-inside">{outgoingPage.emotion}</div>
                </div>
              </div>
            </div>
          )}

          {/* Main Active Talapatra Grandha Leaf (swings top-to-bottom on Previous) */}
          <div
            className={`cloud-bubble grandha-active-leaf ${
              isPageFlipping && flipDirection === 'prev' ? 'grandha-flip-down-prev' : ''
            }`}
            onClick={() => setRevealedCharCount(currentText ? currentText.length : 0)}
          >
            {/* Punched Binding Holes at Top of Leaf */}
            <div className="grandha-punched-holes" aria-hidden="true">
              <span className="grandha-punch-hole hole-left"></span>
              <span className="grandha-punch-hole hole-right"></span>
            </div>

            <div className="cloud-text">
              <div className="dialogue-container">
                <div className="speaker-name">{currentDialogue.speaker}</div>
                <div className="grandha-ancient-pattern-divider" aria-hidden="true">
                  ─── ❖ ❈ ❖ ───
                </div>
                <div className="dialogue-text scribe-live-text">
                  <span className="scribe-revealed-ink">
                    {formatTextWithLineBreaks(currentText ? currentText.slice(0, revealedCharCount) : '')}
                  </span>
                  {currentText && revealedCharCount < currentText.length && (
                    <span className="scribe-quill-nib" aria-hidden="true">✦</span>
                  )}
                  {currentText && revealedCharCount < currentText.length && (
                    <span className="scribe-unrevealed-ghost" aria-hidden="true">
                      {formatTextWithLineBreaks(currentText.slice(revealedCharCount))}
                    </span>
                  )}
                </div>
                <div className="grandha-ancient-pattern-divider emotion-divider" aria-hidden="true">
                  ─── ❖ ───
                </div>
                <div className="emotion-display-inside">
                  {currentDialogue.emotion || 'neutral'}
                </div>
              </div>
            </div>
          </div>

          {/* Outgoing Flipping Leaf that lifts Bottom-to-Top around the iron rings on Next */}
          {isPageFlipping && flipDirection === 'next' && outgoingPage && (
            <div className="grandha-flip-leaf grandha-flip-up-next" aria-hidden="true">
              <div className="grandha-punched-holes">
                <span className="grandha-punch-hole hole-left"></span>
                <span className="grandha-punch-hole hole-right"></span>
              </div>
              <div className="cloud-text">
                <div className="dialogue-container">
                  <div className="speaker-name">{outgoingPage.speaker}</div>
                  <div className="grandha-ancient-pattern-divider">─── ❖ ❈ ❖ ───</div>
                  <div className="dialogue-text">{formatTextWithLineBreaks(outgoingPage.text)}</div>
                  <div className="grandha-ancient-pattern-divider emotion-divider">─── ❖ ───</div>
                  <div className="emotion-display-inside">{outgoingPage.emotion}</div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
      
      {/* Navigation Controls - Circular Left and Right Arrow Buttons */}
      <div className="podcast-navigation-controls">
        <button 
          className="podcast-nav-btn podcast-prev-btn circle-arrow-btn left-arrow-btn"
          onClick={handlePrevious}
          disabled={currentDialogueIndex === 0}
          aria-label={uiTexts.prevBtn || 'Previous'}
          title={uiTexts.prevBtn || 'Previous'}
        >
          <svg className="arrow-svg-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
            <line x1="19" y1="12" x2="5" y2="12" />
            <polyline points="12 19 5 12 12 5" />
          </svg>
        </button>
        <button 
          className="podcast-nav-btn podcast-next-btn circle-arrow-btn right-arrow-btn"
          onClick={handleNext}
          aria-label={currentDialogueIndex === dialogues.length - 1 ? (uiTexts.showSummary || 'Show Summary') : (uiTexts.nextBtn || 'Next')}
          title={currentDialogueIndex === dialogues.length - 1 ? (uiTexts.showSummary || 'Show Summary') : (uiTexts.nextBtn || 'Next')}
        >
          <svg className="arrow-svg-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
            <line x1="5" y1="12" x2="19" y2="12" />
            <polyline points="12 5 19 12 12 19" />
          </svg>
        </button>
      </div>
      
      {/* Progress Indicator */}
      <div className="podcast-progress-container">
        {uiTexts.dialogueProgress 
          ? uiTexts.dialogueProgress.replace('{current}', currentDialogueIndex + 1).replace('{total}', dialogues.length)
          : `Dialogue ${currentDialogueIndex + 1} of ${dialogues.length}`}
      </div>
      
      {/* Summary Modal */}
      {showSummary && (
        <div className="summary-modal royal-summary-modal-overlay" onClick={closeSummary}>
          <div className="royal-summary-scroll" onClick={(e) => e.stopPropagation()}>
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
            <div className="royal-scroll-body summary-scroll-body">
              <div className="royal-scroll-header">
                <span className="royal-scroll-invocation">॥ श्री गीता सारम् ॥</span>
                <h2>{uiTexts.summaryTitle || 'Chapter Summary'}</h2>
                <button 
                  type="button" 
                  className="royal-scroll-close-btn" 
                  onClick={closeSummary}
                  aria-label="Close"
                >
                  ×
                </button>
                <div className="chants-ancient-divider" aria-hidden="true">─── ❖ ❈ ❖ ───</div>
              </div>

              <div className="summary-scroll-content">
                <div className="summary-section">
                  <h3 className="summary-section-heading">
                    <span className="heading-ornament">✦</span>
                    {uiTexts.summarySection || 'Summary'}
                    <span className="heading-ornament">✦</span>
                  </h3>
                  <div className="chants-ancient-divider section-mini-divider" aria-hidden="true">─── ❖ ───</div>
                  <p className="summary-section-para">{chapter.summary}</p>
                </div>

                <div className="chants-ancient-divider section-break-divider" aria-hidden="true">─── ❖ ❈ ❖ ───</div>

                <div className="summary-section">
                  <h3 className="summary-section-heading">
                    <span className="heading-ornament">✦</span>
                    {uiTexts.keyTeachingsSection || 'Key Teachings'}
                    <span className="heading-ornament">✦</span>
                  </h3>
                  <div className="chants-ancient-divider section-mini-divider" aria-hidden="true">─── ❖ ───</div>
                  <p className="summary-section-para">{chapter.teachings}</p>
                </div>

                <div className="chants-ancient-divider section-break-divider" aria-hidden="true">─── ❖ ❈ ❖ ───</div>

                <div className="summary-section">
                  <h3 className="summary-section-heading">
                    <span className="heading-ornament">✦</span>
                    {uiTexts.moralLessonSection || 'Moral Lesson'}
                    <span className="heading-ornament">✦</span>
                  </h3>
                  <div className="chants-ancient-divider section-mini-divider" aria-hidden="true">─── ❖ ───</div>
                  <p className="summary-section-para">{chapter.moralLesson}</p>
                </div>

                <div className="chants-ancient-divider section-break-divider" aria-hidden="true">─── ❖ ❈ ❖ ───</div>

                <div className="summary-section">
                  <h3 className="summary-section-heading">
                    <span className="heading-ornament">✦</span>
                    {uiTexts.kidsVersionSection || 'Kids Version'}
                    <span className="heading-ornament">✦</span>
                  </h3>
                  <div className="chants-ancient-divider section-mini-divider" aria-hidden="true">─── ❖ ───</div>
                  <p className="summary-section-para">{chapter.kidsVersion}</p>
                </div>

                <div className="chants-ancient-divider section-break-divider" aria-hidden="true">─── ❖ ❈ ❖ ───</div>

                <div className="modal-actions">
                  <Link to="/podcast" className="back-link royal-seal-btn">{uiTexts.backToPodcasts || 'Back to Shlokas'}</Link>
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
      )}
    </div>
  );
};

export default PodcastDetailsPage;
