import React, { useState, useEffect, useMemo, useCallback } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import arjunaImage from '../assets/images/arjuna.png';
import krishnaImage from '../assets/images/krishna.png';
import sanjayaImage from '../assets/images/sanjaya.png';
import dritarashtraImage from '../assets/images/dritharastra.png';
import duryodhanaImage from '../assets/images/duryodhana.png';
import vishwaroopamImage from '../assets/images/vishwaroopam.png';
import sharadaMataImage from '../assets/images/sharada mata.png';

import bhagavadGitaData from '../data/bhagavadGitaData.js';
import '../assets/styles/ChapterDetailsPage.css';

const ChapterDetailsPage = () => {
  const { chapterId } = useParams();
  const {
    t,
    language
  } = useLanguage();
  
  // Emotion mapping for Telugu emotions to English equivalents
  const teluguToEnglishEmotionMap = {
    'అర్థం చేసుకున్న': 'understanding',
    'నిర్ణయాత్మక': 'decisive',
    'అన్వేషిస్తున్న': 'inquiring',
    'నిర్వచిస్తున్న': 'defining',
    'ప్రశ్నిస్తున్న': 'questioning',
    'జిజ్ఞాస': 'curious',
    'ఆసక్తి': 'interested',
    'వివరణ': 'explanatory',
    'ఆచరణాత్మక': 'practical',
    'మార్గదర్శనం': 'guiding',
    'ధృవీకరిస్తున్న': 'confirming',
    'గమనిస్తున్న': 'observant',
    'వర్ణిస్తున్న': 'describing',
    'ఆత్రుత': 'eager',
    'ప్రేమ': 'loving',
    'శ్రద్ధగా': 'attentive',
    'వాగ్దానం': 'promising',
    'నిరీక్షిస్తున్న': 'expecting',
    'అంతిమ': 'final',
    'నిశ్చయం': 'determined',
    'శాంతం': 'calm',
    'విషాదంలో': 'despondent',
    'వేదన': 'anguished',
    'గద్దిస్తున్న': 'chiding',
    'సంఘర్షణ': 'conflicted',
    'ధైర్యసాగుతున్న': 'patient',
    'భయభీతుడైన': 'fearful',
    'ప్రశాంతం': 'serene',
    'వ్యాకులం': 'distraught',
    'విలపిస్తున్న': 'lamenting',
    'కరుణ': 'compassionate',
    'శరణాగతి': 'surrendered',
    'దృఢంగా': 'firm',
    'నిర్ణయించుకున్న': 'resolved',
    'జ్ఞాని': 'wise',
    'ఆదేశిస్తున్న': 'commanding',
    'అభిభూతం': 'overwhelmed',
    'ఉత్సుక': 'curious',
    'బాధతో': 'pained',
    'ఉదాహరణ': 'exemplary',
    'ప్రశ్నిస్తున్నట్లుగా': 'questioning',
    'ఆందోళన': 'worried',
    'తీవ్రమైన': 'profound',
    'అన్వేషణ': 'inquisitive',
    'వర్ణనాత్మక': 'descriptive',
    'సమభావం': 'equanimous',
    'నిర్ణయించే': 'conclusive',
    'జ్ఞానోదయమైన': 'enlightened',
    'భరోసాతో': 'reassured',
    'దృష్టాంతర': 'exemplary',
    'ఆచరణీయ': 'practical',
    'స్పష్టీకరణ': 'clarifying',
    'వ్యతిరేక': 'contrasting',
    'ఫలిత': 'consequential',
    'ఆశావాద': 'hopeful',
    'అవగాహన': 'understanding',
    'ప్రేరేపిత': 'inspired',
    'శ్రేణి': 'hierarchical',
    'వ్యూహాత్మక': 'strategic',
    'గందరగోళం': 'confused',
    'దిగ్భ్రాంతి': 'puzzled',
    'అధికారిక': 'authoritative',
    'హామీ ఇచ్చే': 'promising',
    'సర్వవ్యాప్త': 'all-encompassing',
    'శక్తివంతమైన': 'powerful',
    'ఆశ్చర్యపడిన': 'amazed',
    'ఎదురుచూస్తున్న': 'anticipating',
    'పరమ': 'ultimate',
    'శ్రద్ధతో': 'attentively',
    'ప్రేమపూర్వక': 'loving',
    'ఖచ్చితమైన': 'definitive',
    'ఆశీర్వాదం': 'blessing',
    'విశ్లేషణాత్మక': 'analytical',
    'విమర్శనాత్మక': 'critical',
    'నిర్ధారించే': 'confirming',
    'న్యాయమైన': 'just',
    'జాగరూకత': 'cautious',
    'తీవ్ర హెచ్చరిక': 'warning_seriously',
    'మూల్యాంకనం': 'evaluative',
    'బోధనాత్మక': 'instructive',
    'పవిత్రమైన': 'sacred',
    'హెచ్చరిక': 'warning',
    'తేడా': 'differential',
    'నిర్వచించే': 'defining',
    'భయంతో': 'fearful',
    'స్పష్టత': 'clarity',
    'అస్థిరమైన': 'unstable',
    'సంతోషకరమైన': 'joyful',
    'ఉత్సాహకరమైన': 'excited',
    'ఆందోళనకరమైన': 'agitated',
    'స్పష్టమైన': 'clear',
    'లోతైన': 'profound',
    'ధైర్యమైన': 'courageous',
    'భయం': 'fearful',
    'ఆశ': 'hopeful',
    'నిరాశ': 'disappointed',
    'ప్రేమగల': 'loving',
    'కోపం': 'anger',
    'శాంతి': 'calm',
    'సంతోషం': 'happy',
    'దుఃఖం': 'sad',
    'ఉదాసీన': 'indifferent',
    'అలసిపోయిన': 'exhausted',
    'ఉత్సాహం': 'enthusiastic',
    'అవమానకరమైన': 'humiliated',
    'గర్వకరమైన': 'proud',
    'లజ్జించిన': 'shameful',
    'క్షమాపణగా': 'forgiving',
    'క్షమాప్రార్థనగా': 'apologetic',
    'సహనంగా': 'tolerant',
    'అసహనంగా': 'intolerant',
    'స్వేచ్ఛగా': 'voluntary',
    'అనివార్యంగా': 'inevitable',
    'సమర్పితంగా': 'dedication',
    'విశ్వాసంగా': 'confident',
    'అవిశ్వాసంగా': 'distrustful',
    'సమాధానకరంగా': 'satisfactory',
    'అసమాధానకరంగా': 'unsatisfactory'
  };
  
  // Emotion mapping for Hindi emotions to English equivalents
  const hindiToEnglishEmotionMap = {
    'दृढ़': 'resolute',
    'शांत': 'calm',
    'विषादग्रस्त': 'despondent',
    'व्यथित': 'anguished',
    'झिड़कते हुए': 'chiding',
    'संघर्षरत': 'conflicted',
    'धैर्यवान': 'patient',
    'अवलोकनशील': 'observant',
    'स्थिर': 'serene',
    'व्याकुल': 'distraught',
    'मार्गदर्शक': 'guiding',
    'विलाप करते हुए': 'lamenting',
    'करुणामय': 'compassionate',
    'समर्पित': 'surrendered',
    'संकल्पित': 'resolved',
    'ज्ञानी': 'wise',
    'आदेशात्मक': 'commanding',
    'अभिभूत': 'overwhelmed',
    'उत्सुक': 'curious',
    'दुखी': 'pained',
    'उदाहरणात्मक': 'exemplary',
    'प्रश्नवाचक': 'questioning',
    'चिंतित': 'worried',
    'गहन': 'profound',
    'अन्वेषी': 'inquisitive',
    'वर्णनात्मक': 'descriptive',
    'समभाव': 'equanimous',
    'निर्णायक': 'conclusive',
    'प्रबुद्ध': 'enlightened',
    'आश्वस्त': 'reassured',
    'दृष्टांतात्मक': 'exemplary',
    'व्यावहारिक': 'practical',
    'स्पष्ट करते हुए': 'clarifying',
    'विपरीत': 'contrasting',
    'परिणामी': 'consequential',
    'आशावान': 'hopeful',
    'समझ': 'understanding',
    'प्रेरित': 'inspired',
    'पदानुक्रमित': 'hierarchical',
    'रणनीतिक': 'strategic',
    'भ्रमित': 'confused',
    'उलझन में': 'puzzled',
    'आधिकारिक': 'authoritative',
    'वचन देते हुए': 'promising',
    'सर्व-व्यापी': 'all-encompassing',
    'शक्तिशाली': 'powerful',
    'चकित': 'amazed',
    'प्रतीक्षारत': 'anticipating',
    'परम': 'ultimate',
    'ध्यान से': 'attentively',
    'प्रेममय': 'loving',
    'निश्चित': 'definitive',
    'आशीर्वाद': 'blessing',
    'विश्लेषणात्मक': 'analytical',
    'आलोचनात्मक': 'critical',
    'पुष्टि करते हुए': 'confirming',
    'न्याय': 'just',
    'सावधान': 'cautious',
    'गंभीर चेतावनी': 'warning_seriously',
    'मूल्यांकन': 'evaluative',
    'शिक्षाप्रद': 'instructive',
    'पवित्र': 'sacred',
    'चेतावनी': 'warning',
    'अंतर': 'differential',
    'परिभाषित करते हुए': 'defining',
    'भयभीत': 'fearful',
    'स्पष्टता': 'clarity',
    'अस्थिर': 'unstable',
    'आनंदित': 'joyful',
    'उत्तेजित': 'excited',
    'विचलित': 'agitated',
    'स्पष्ट': 'clear',
    'गूढ़': 'profound',
    'साहसी': 'courageous',
    'भय': 'fearful',
    'आशा': 'hopeful',
    'निराश': 'disappointed',
    'स्नेही': 'loving',
    'क्रोध': 'anger',
    'शांति': 'calm',
    'सुखी': 'happy',
    'दुःखी': 'sad',
    'उदासीन': 'indifferent',
    'थका हुआ': 'exhausted',
    'उत्साही': 'enthusiastic',
    'अपमानित': 'humiliated',
    'गर्वित': 'proud',
    'लज्जित': 'shameful',
    'क्षमाशील': 'forgiving',
    'क्षमा प्रार्थना': 'apologetic',
    'सहिष्णु': 'tolerant',
    'असहिष्णु': 'intolerant',
    'अनिवार्य': 'inevitable',
    'समाधानकारक': 'satisfactory',
    'असमाधानकरक': 'unsatisfactory'
  };
  
  // Function to get the correct emotion class name for CSS styling
  const getEmotionClassNameForStyling = (emotion) => {
    if (language === 'te' && teluguToEnglishEmotionMap[emotion]) {
      return teluguToEnglishEmotionMap[emotion];
    }
    if (language === 'hi' && hindiToEnglishEmotionMap[emotion]) {
      return hindiToEnglishEmotionMap[emotion];
    }
    return emotion || 'neutral';
  };
  
  // Function to get the display emotion name in the original language
  const getDisplayEmotionName = (emotion) => {
    return emotion || 'neutral';
  };

  const [showSummary, setShowSummary] = useState(false);
  const [currentConversationIndex, setCurrentConversationIndex] = useState(0);
  const [showCharacter, setShowCharacter] = useState(false);
  const [showText, setShowText] = useState(false);
  const [characterType, setCharacterType] = useState(''); 
  const [currentText, setCurrentText] = useState('');
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [flipDirection, setFlipDirection] = useState(''); // 'next' (bottom-to-top) or 'prev' (top-to-bottom)
  const [isPageFlipping, setIsPageFlipping] = useState(false);
  const [outgoingPage, setOutgoingPage] = useState(null);
  const [revealedCharCount, setRevealedCharCount] = useState(0);

  // Live-writing scribe reveal animation for currentText on the Talapatra Grandha leaf
  useEffect(() => {
    if (!showText || !currentText) {
      setRevealedCharCount(0);
      return;
    }

    setRevealedCharCount(0);
    const totalLength = currentText.length;
    const step = Math.max(1, Math.ceil(totalLength / 62));
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
  }, [currentText, currentConversationIndex, showText, flipDirection]);

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
  
  // Get current chapter
  const languageKey = language === 'hi' ? 'hi' : language === 'te' ? 'te' : 'en';
  const chapter = bhagavadGitaData[languageKey]?.chapters[chapterId];
  const conversations = chapter?.dialogue || [];

  // Helper functions to check speakers
  const isArjunaSpeaker = (speaker) => {
    return speaker === 'Arjuna' || speaker === 'अर्जुन' || speaker === 'అర్జునుడు' || speaker === 'అర్జున';
  };

  const isKrishnaSpeaker = (speaker) => {
    return speaker === 'Krishna' || speaker === 'Lord Krishna' || speaker === 'कृष्ण' || speaker === 'श्री कृष्ण' || speaker === 'శ్రీకృష్ణుడు' || speaker === 'కృష్ణుడు' || speaker === 'కృష్ణ';
  };

  const isSanjayaSpeaker = (speaker) => {
    return speaker === 'Sanjaya' || speaker === 'Sañjaya' || speaker === 'संजय' || speaker === 'सञ्जय' || speaker === 'సంజయుడు' || speaker === 'సంజయ';
  };

  const isDhritarashtraSpeaker = (speaker) => {
    return speaker === 'Dhritarashtra' || speaker === 'Dhṛtarāṣṭra' || speaker === 'धृतराष्ट्र' || speaker === 'ధృతరాష్ట్రుడు' || speaker === 'ధృతరాష్ట్ర';
  };

  const isDuryodhanaSpeaker = (speaker) => {
    return speaker === 'Duryodhana' || speaker === 'दुर्योधन' || speaker === 'దుర్యోధనుడు' || speaker === 'దుర్యోధన';
  };

  const updateCharacterType = useCallback((speaker, index) => {
    if (isArjunaSpeaker(speaker)) {
      setCharacterType('arjuna');
    } else if (isKrishnaSpeaker(speaker)) {
      if (chapterId === '11') {
        // In chapter 11, show vishwaroopam for Krishna during the cosmic vision
        const totalKrishnaDialogues = conversations.filter(conv => isKrishnaSpeaker(conv.speaker)).length;
        const currentKrishnaDialogueIndex = conversations
          .slice(0, index + 1)
          .filter(conv => isKrishnaSpeaker(conv.speaker)).length;
        
        // Use normal Krishna for the concluding dialogues
        if (currentKrishnaDialogueIndex > totalKrishnaDialogues - 2) {
          setCharacterType('krishna');
        } else {
          setCharacterType('vishwaroopam');
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
      setCharacterType('krishna');
    }
  }, [chapterId, conversations]);

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
      case 'sharadaMata':
        return sharadaMataImage;
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
        return 'Krishna';
      case 'sanjaya':
        return 'Sanjaya';
      case 'dhritarashtra':
        return 'Dhritarashtra';
      case 'duryodhana':
        return 'Duryodhana';
      case 'vishwaroopam':
        return 'Vishwaroopam';
      case 'sharadaMata':
        return 'Sharada Mata';
      default:
        return 'Krishna';
    }
  };

  const handleStartChapter = () => {
    if (conversations.length > 0) {
      const firstConversation = conversations[0];
      setCurrentText(firstConversation.text);
      updateCharacterType(firstConversation.speaker, 0);
      setShowCharacter(true);
      setShowText(true);
      setCurrentConversationIndex(0);
    }
  };

  const triggerGrandhaPageFlip = (direction) => {
    const activeConv = conversations[currentConversationIndex] || {};
    setOutgoingPage({
      speaker: activeConv.speaker || '',
      text: currentText || activeConv.text || '',
      emotion: getDisplayEmotionName(activeConv.emotion) || 'neutral'
    });
    setFlipDirection(direction);
    setIsPageFlipping(true);
    setTimeout(() => {
      setIsPageFlipping(false);
    }, 920);
  };

  // Sequential Next: advances exactly by 1 dialogue without skipping any speaker
  const handleNextDialogue = () => {
    if (isTransitioning || isPageFlipping) return;
    
    if (currentConversationIndex < conversations.length - 1) {
      const nextIndex = currentConversationIndex + 1;
      const nextConversation = conversations[nextIndex];
      triggerGrandhaPageFlip('next');
      setIsTransitioning(true);
      setCurrentText(nextConversation.text);
      setCurrentConversationIndex(nextIndex);
      setShowText(true);

      setTimeout(() => {
        updateCharacterType(nextConversation.speaker, nextIndex);
        setShowCharacter(true);
        finishTransitionSmoothly();
      }, 280);
    } else {
      // Completed chapter - show Chapter Summary
      setShowSummary(true);
    }
  };

  // Sequential Previous: steps backward exactly by 1 dialogue
  const handlePreviousDialogue = () => {
    if (isTransitioning || isPageFlipping || !showCharacter || currentConversationIndex <= 0) return;
    const prevIndex = currentConversationIndex - 1;
    const prevConversation = conversations[prevIndex];
    if (!prevConversation) return;

    triggerGrandhaPageFlip('prev');
    setIsTransitioning(true);
    setCurrentConversationIndex(prevIndex);
    setCurrentText(prevConversation.text);
    setShowText(true);

    setTimeout(() => {
      updateCharacterType(prevConversation.speaker, prevIndex);
      setShowCharacter(true);
      finishTransitionSmoothly();
    }, 280);
  };

  // If chapter not found, show error
  if (!chapter) {
    return (
      <div className="chapter-details-minimal">
        <div className="error-message">
          <h2>{t('chapterNotFound')}</h2>
          <p>Chapter ID: {chapterId} not found for language: {languageKey}</p>
          <Link to="/chapters" className="back-link">{t('backToChapters')}</Link>
        </div>
      </div>
    );
  }

  // Get current conversation for emotion display
  const currentConversation = conversations[currentConversationIndex] || {};

  return (
    <div className="chapter-details">
      {/* Sharada Mata image - display at top center when speaker is Krishna or Arjuna, except in Chapter 11 */}
      {chapterId !== '11' && (isKrishnaSpeaker(currentConversation.speaker) || isArjunaSpeaker(currentConversation.speaker)) && (
        <div className="sharada-mata-container">
          <img 
            src={sharadaMataImage} 
            alt="Sharada Mata" 
            className="sharada-mata-image"
          />
        </div>
      )}
      
      {/* Show start button at the beginning */}
      {!showCharacter && (
        <div className="start-container">
          <button 
            className="start-btn"
            onClick={handleStartChapter}
          >
            {language === 'en' ? 'Start Chapter' : language === 'hi' ? 'अध्याय प्रारंभ करें' : 'అధ్యాయం ప్రారంభించండి'}
          </button>
        </div>
      )}
      
      {/* Character Images - Full screen */}
      {showCharacter && (
        <div className={`character-fullscreen ${characterType} ${isTransitioning ? 'dialogue-fade-out' : 'dialogue-fade-in'}`}>
          <img 
            src={getCharacterImage()} 
            alt={getCharacterAltText()} 
            className={`character-image-full ${getEmotionClassNameForStyling(currentConversation.emotion)}`}
          />
        </div>
      )}
      
      {/* Ancient Talapatra Grandha Bound Book at Bottom */}
      {showText && (
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
                    <div className="dialogue-text">{outgoingPage.text}</div>
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
                  <div className="speaker-name">{currentConversation.speaker}</div>
                  <div className="grandha-ancient-pattern-divider" aria-hidden="true">
                    ─── ❖ ❈ ❖ ───
                  </div>
                  <div className="dialogue-text scribe-live-text">
                    <span className="scribe-revealed-ink">
                      {currentText ? currentText.slice(0, revealedCharCount) : ''}
                    </span>
                    {currentText && revealedCharCount < currentText.length && (
                      <span className="scribe-quill-nib" aria-hidden="true">✦</span>
                    )}
                    {currentText && revealedCharCount < currentText.length && (
                      <span className="scribe-unrevealed-ghost" aria-hidden="true">
                        {currentText.slice(revealedCharCount)}
                      </span>
                    )}
                  </div>
                  <div className="grandha-ancient-pattern-divider emotion-divider" aria-hidden="true">
                    ─── ❖ ───
                  </div>
                  <div className="emotion-display-inside">
                    {getDisplayEmotionName(currentConversation.emotion) || 'neutral'}
                  </div>
                </div>
              </div>
              <button 
                className="cloud-close-btn"
                onClick={(e) => {
                  e.stopPropagation();
                  setShowText(false);
                }}
                aria-label="Close"
              >
                ×
              </button>
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
                    <div className="dialogue-text">{outgoingPage.text}</div>
                    <div className="grandha-ancient-pattern-divider emotion-divider">─── ❖ ───</div>
                    <div className="emotion-display-inside">{outgoingPage.emotion}</div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
      
      {/* Interactive Controls - Circular Left and Right Arrow Buttons */}
      <div className="interactive-controls-minimal">
        <button 
          className="interactive-btn prev-dialogue-btn circle-arrow-btn left-arrow-btn"
          onClick={handlePreviousDialogue}
          disabled={!showCharacter || currentConversationIndex === 0}
          aria-label="Previous Dialogue"
          title="Previous Dialogue"
        >
          <svg className="arrow-svg-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
            <line x1="19" y1="12" x2="5" y2="12" />
            <polyline points="12 19 5 12 12 5" />
          </svg>
        </button>
        <button 
          className="interactive-btn circle-arrow-btn right-arrow-btn"
          onClick={!showCharacter ? handleStartChapter : handleNextDialogue}
          aria-label={!showCharacter ? 'Start Chapter' : 'Next Dialogue'}
          title={!showCharacter ? 'Start Chapter' : 'Next Dialogue'}
        >
          <svg className="arrow-svg-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
            <line x1="5" y1="12" x2="19" y2="12" />
            <polyline points="12 5 19 12 12 19" />
          </svg>
        </button>
      </div>
      
      {showSummary && (
        <div className="summary-modal royal-summary-modal-overlay" onClick={() => setShowSummary(false)}>
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
                <h2>{t('summaryTitle')}</h2>
                <button 
                  type="button" 
                  className="royal-scroll-close-btn" 
                  onClick={() => setShowSummary(false)}
                  aria-label="Close"
                >
                  ×
                </button>
                <div className="chants-ancient-divider" aria-hidden="true">─── ❖ ❈ ❖ ───</div>
              </div>

              <div className="summary-scroll-content">
                {/* Summary section */}
                {chapter.summary && (
                  <>
                    <div className="summary-section">
                      <h3 className="summary-section-heading">
                        <span className="heading-ornament">✦</span>
                        {language === 'en' ? 'Summary' : language === 'hi' ? 'सारांश' : 'సారాంశం'}
                        <span className="heading-ornament">✦</span>
                      </h3>
                      <div className="chants-ancient-divider section-mini-divider" aria-hidden="true">─── ❖ ───</div>
                      <p className="summary-section-para">{chapter.summary}</p>
                    </div>

                    <div className="chants-ancient-divider section-break-divider" aria-hidden="true">─── ❖ ❈ ❖ ───</div>
                  </>
                )}

                {/* Key Teachings */}
                <div className="summary-section">
                  <h3 className="summary-section-heading">
                    <span className="heading-ornament">✦</span>
                    {t('teachingsTitle')}
                    <span className="heading-ornament">✦</span>
                  </h3>
                  <div className="chants-ancient-divider section-mini-divider" aria-hidden="true">─── ❖ ───</div>
                  <ul className="summary-teachings-list">
                    {chapter.teachings?.split('\n').map((teaching, index) => (
                      <li key={index}>
                        <span className="bullet-emblem">❖</span>
                        <span>{teaching}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="chants-ancient-divider section-break-divider" aria-hidden="true">─── ❖ ❈ ❖ ───</div>

                {/* Moral Lesson */}
                <div className="summary-section">
                  <h3 className="summary-section-heading">
                    <span className="heading-ornament">✦</span>
                    {language === 'en' ? 'Moral Lesson' : language === 'hi' ? 'नैतिक पाठ' : 'నైతిక పాఠం'}
                    <span className="heading-ornament">✦</span>
                  </h3>
                  <div className="chants-ancient-divider section-mini-divider" aria-hidden="true">─── ❖ ───</div>
                  <p className="summary-section-para">{chapter.moralLesson}</p>
                </div>

                <div className="chants-ancient-divider section-break-divider" aria-hidden="true">─── ❖ ❈ ❖ ───</div>

                {/* Kid-Friendly Version */}
                <div className="summary-section">
                  <h3 className="summary-section-heading">
                    <span className="heading-ornament">✦</span>
                    {language === 'en' ? 'Kid-Friendly Version' : language === 'hi' ? 'बच्चों के लिए संस्करण' : 'పిల్లల అనుకూల సంస్కరణ'}
                    <span className="heading-ornament">✦</span>
                  </h3>
                  <div className="chants-ancient-divider section-mini-divider" aria-hidden="true">─── ❖ ───</div>
                  <p className="summary-section-para">{chapter.kidsVersion}</p>
                </div>

                <div className="chants-ancient-divider section-break-divider" aria-hidden="true">─── ❖ ❈ ❖ ───</div>

                <div className="modal-actions">
                  <Link to="/chapters" className="back-link royal-seal-btn">{t('backToChapters')}</Link>
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

export default ChapterDetailsPage;
