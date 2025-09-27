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

  // Handle next dialogue
  const handleNext = () => {
    if (currentDialogueIndex < dialogues.length - 1) {
      const nextIndex = currentDialogueIndex + 1;
      const nextDialogue = dialogues[nextIndex];
      setCurrentText(nextDialogue.text);
      
      // Determine character type based on speaker
      const speaker = nextDialogue.speaker;
      updateCharacterType(speaker, nextIndex);
      
      setCurrentDialogueIndex(nextIndex);
    } else {
      // Show summary when chapter is completed
      setShowSummary(true);
    }
  };

  // Handle previous dialogue
  const handlePrevious = () => {
    if (currentDialogueIndex > 0) {
      const prevIndex = currentDialogueIndex - 1;
      const prevDialogue = dialogues[prevIndex];
      setCurrentText(prevDialogue.text);
      
      // Determine character type based on speaker
      const speaker = prevDialogue.speaker;
      updateCharacterType(speaker, prevIndex);
      
      setCurrentDialogueIndex(prevIndex);
    }
  };

  // Helper function to format text with line breaks
  const formatTextWithLineBreaks = (text) => {
    if (!text) return text;
    
    // Split text by newline characters and wrap each line in a span with a line break
    return text.split('\n').map((line, index) => (
      <React.Fragment key={index}>
        {line}
        <br />
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
      <div className={`character-fullscreen ${characterType}`}>
        <img 
          src={getCharacterImage()} 
          alt={getCharacterAltText()} 
          className={`character-image-full ${getEmotionClassNameForStyling(currentDialogue.emotion)}`}
        />
      </div>
      
      {/* Cloud-shaped text container */}
      <div className={`cloud-container ${characterType}`}>
        <div className="cloud-bubble">
          <div className="cloud-text">
            {/* Display speaker name, text, and emotion in the requested format */}
            <div className="dialogue-container">
              <div className="speaker-name">{currentDialogue.speaker}</div>
              <div className="dialogue-text">{formatTextWithLineBreaks(currentText)}</div>
              <div className="emotion-display-inside">
                {currentDialogue.emotion || 'neutral'}
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Navigation Controls */}
      <div className="podcast-navigation-controls">
        <button 
          className="podcast-nav-btn podcast-prev-btn"
          onClick={handlePrevious}
          disabled={currentDialogueIndex === 0}
        >
          {uiTexts.prevBtn}
        </button>
        <button 
          className="podcast-nav-btn podcast-next-btn"
          onClick={handleNext}
        >
          {currentDialogueIndex === dialogues.length - 1 ? (uiTexts.showSummary || 'Show Summary') : uiTexts.nextBtn}
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
        <div className="summary-modal">
          <div className="summary-content">
            <div className="summary-header">
              <h2>{uiTexts.summaryTitle || 'Chapter Summary'}</h2>
              <button className="close-btn" onClick={closeSummary}>×</button>
            </div>
            <div className="summary-text">
              <h3>{uiTexts.summarySection || 'Summary'}</h3>
              <p>{chapter.summary}</p>
              
              <h3>{uiTexts.keyTeachingsSection || 'Key Teachings'}</h3>
              <p>{chapter.teachings}</p>
              
              <h3>{uiTexts.moralLessonSection || 'Moral Lesson'}</h3>
              <p>{chapter.moralLesson}</p>
              
              <h3>{uiTexts.kidsVersionSection || 'Kids Version'}</h3>
              <p>{chapter.kidsVersion}</p>
            </div>
            <div className="modal-actions">
              <Link to="/podcast" className="back-link">{uiTexts.backToPodcasts || 'Back to Shlokas'}</Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PodcastDetailsPage;
