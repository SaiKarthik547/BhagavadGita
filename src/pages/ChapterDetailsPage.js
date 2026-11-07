import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import arjunaImage from '../assets/images/arjuna.png';
import krishnaImage from '../assets/images/krishna.png';
import hostImage from '../assets/images/host.png';
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
    'విచారిస్తున్న': 'inquiring',
    'ఆందోళన': 'worried',
    'గంభీరం': 'profound',
    'వివరణాత్మక': 'descriptive',
    'సమచిత్తం': 'equanimous',
    'నిర్ణాయక': 'conclusive',
    'జ్ఞానోదయం': 'enlightened',
    'స్వీకారం': 'accepting',
    'స్పష్టీకరిస్తున్న': 'clarifying',
    'భ్రమిస్తున్న': 'confused',
    'ప్రకాశిస్తున్న': 'enlightening',
    'వచనం ఇస్తున్న': 'promising',
    'సర్వవ్యాపి': 'all-encompassing',
    'శక్తివంతమైన': 'powerful',
    'చకితుడైన': 'amazed',
    'పర్యవసానం': 'final',
    'పరమ': 'ultimate',
    'శ్రద్ధ': 'attentive',
    'నిశ్చితం': 'definitive',
    'ఆశీర్వాదం': 'blessing',
    'విశ్లేషణాత్మక': 'analytical',
    'విమర్శనాత్మక': 'critical',
    'న్యాయం': 'just',
    'జాగ్రత్త': 'cautious',
    'తీవ్ర హెచ్చరిక': 'warning_seriously',
    'మూల్యాంకనం': 'evaluative',
    'బోధనాత్మక': 'instructive',
    'పవిత్రమైన': 'sacred',
    'హెచ్చరిక': 'warning',
    'భేదం చూపుతున్న': 'differential',
    'వివరిస్తున్న': 'defining',
    'భయంతో': 'fearful',
    'స్థిరం': 'stable',
    'అస్థిరం': 'unstable',
    'సంతృప్తి': 'content',
    'అసంతృప్తి': 'dissatisfied',
    'సంతోషం': 'happy',
    'దుఃఖం': 'sad',
    'ఉదాసీనత': 'indifferent',
    'ప్రేరణ': 'inspired',
    'అలసిపోవడం': 'exhausted',
    'ఉత్సాహం': 'enthusiastic',
    'అవమానం': 'humiliated',
    'గర్వం': 'proud',
    'లజ్జ': 'shameful',
    'క్షమాపణ': 'forgiving',
    'క్షమాప్రార్థన': 'apologetic',
    'సహనం': 'tolerant',
    'అసహనం': 'intolerant',
    'స్వచ్ఛందం': 'voluntary',
    'అనివార్యం': 'inevitable',
    'సందేహం': 'doubtful',
    'అనిశ్చయం': 'undecided',
    'సమర్పణ': 'dedication',
    'విశ్వాసం': 'confident',
    'అవిశ్వాసం': 'distrustful',
    'సమాధానం': 'satisfied',
    'అసమాధానం': 'unsatisfied',
    'సమాధానకరం': 'satisfactory',
    'అసమాధానకరం': 'unsatisfactory',
    'నిండిపోయిన': 'overwhelmed',
    'ఓపిక': 'patient',
    'విజేత': 'victorious',
    // Additional Telugu emotions found in data but missing from mappings
    'నిశ్చయాత్మక': 'determined',
    'సంతోషంగా': 'happy',
    'సంభ్రమం': 'proud',
    'సంఘర్షణలో': 'conflicted',
    'సమాధానంగా': 'satisfied',
    'అసమాధానంగా': 'unsatisfied',
    'సందేహంగా': 'doubtful',
    'అనిశ్చయంగా': 'undecided',
    'ప్రేరణగా': 'inspired',
    'అలసిపోయిన': 'exhausted',
    'ఉత్సాహంగా': 'enthusiastic',
    'అవమానితుడైన': 'humiliated',
    'గర్వించిన': 'proud',
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
    'संदेह': 'doubtful',
    'निश्चय': 'determined',
    'अनिश्चय': 'undecided',
    'समर्पण': 'dedication',
    'विश्वास': 'confident',

    'समाधान': 'satisfied',
    'असमाधान': 'unsatisfied',
    'समाधानजनक': 'satisfactory',
    'असमाधानजनक': 'unsatisfactory',
    'गुणों की सूची': 'listing_virtues',
    'विवेकी': 'discerning',
    'आश्चर्यपोतुन्न': 'amazed',
    'ब्रह्मांड': 'cosmic',
    'पोषक': 'sustaining',
    'सर्वज्ञ': 'omniscient',
    'गमनिस्तुन्न': 'observant',
    'धृवीकरिस्तुन्न': 'confirming',
    'सद्गुणाल जाबिता': 'listing_virtues',
    'व्यतिरेक': 'contrasting',
    'पर्यवसान': 'consequential',
    'वर्गीकृत करते हुए': 'categorizing',
    'आशावादी': 'hopeful',
    'ग्रहण करते हुए': 'understanding',
    'निर्वचित करते हुए': 'defining',
    'मार्गदर्शन': 'guiding',
    'भरोसा देते हुए': 'reassuring_seriously',
    'जागरूक': 'cautious',
    'विजेता': 'victorious',
    // Additional Hindi emotions found in data but missing from mappings

    'समाधानकारक': 'satisfactory',
    'असमाधानकरक': 'unsatisfactory'
  };
  
  // Function to get the correct emotion class name for CSS styling (maps to English equivalents)
  const getEmotionClassNameForStyling = (emotion) => {
    // If language is Telugu and emotion is in Telugu, map to English equivalent for CSS class
    if (language === 'te' && teluguToEnglishEmotionMap[emotion]) {
      return teluguToEnglishEmotionMap[emotion];
    }
    // If language is Hindi and emotion is in Hindi, map to English equivalent for CSS class
    if (language === 'hi' && hindiToEnglishEmotionMap[emotion]) {
      return hindiToEnglishEmotionMap[emotion];
    }
    // For English and other languages, use the emotion as is
    return emotion || 'neutral';
  };
  
  // Function to get the display emotion name in the original language
  const getDisplayEmotionName = (emotion) => {
    // For all languages, display the original emotion name
    return emotion || 'neutral';
  };
  


  const [showSummary, setShowSummary] = useState(false);
  const [currentConversationIndex, setCurrentConversationIndex] = useState(0);
  const [showCharacter, setShowCharacter] = useState(false);
  const [showText, setShowText] = useState(false);
  const [characterType, setCharacterType] = useState(''); // 'arjuna', 'krishna', 'host', or 'vishwaroopam'
  const [currentText, setCurrentText] = useState('');
  const [isChapterCompleted, setIsChapterCompleted] = useState(false);
  const [lastAction, setLastAction] = useState(''); // Track last action ('ask' or 'answer')
  const [showPopup, setShowPopup] = useState(false); // For popup message
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
    [arjunaImage, krishnaImage, hostImage, vishwaroopamImage, sharadaMataImage].forEach((src) => {
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
  


  // Function to get the correct image based on character type
  const getCharacterImage = () => {
    switch (characterType) {
      case 'arjuna':
        return arjunaImage;
      case 'krishna':
        return krishnaImage;
      case 'host':
        return hostImage;
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
      case 'host':
        return 'Host';
      case 'vishwaroopam':
        return 'Vishwaroopam';
      case 'sharadaMata':
        return 'Sharada Mata';
      default:
        return 'Krishna';
    }
  };

  // If chapter not found, show error - moved after all hooks
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

  // Get conversations
  const conversations = chapter.dialogue || [];
  
  // Audio functions for conversations - DISABLED as per user request
  const handlePlayAudio = (text, speaker) => {
    // Text-to-speech completely removed as per user request
    console.log("Text-to-speech is disabled");
  };
  
  const handleStartChapter = () => {
    if (conversations.length > 0) {
      const firstConversation = conversations[0];
      setCurrentText(firstConversation.text);
      
      // Determine character type based on speaker
      const speaker = firstConversation.speaker;
      if (speaker === 'Arjuna' || speaker === 'अर्जुन' || speaker === 'అర్జునుడు' || speaker === 'అర్జున') {
        setCharacterType('arjuna');
      } else if (speaker === 'Krishna' || speaker === 'कृष्ण' || speaker === 'కృష్ణుడు' || speaker === 'కృష్ణ') {
        // Special case for Chapter 11 - show Vishwaroopam for Krishna except for the last two conversations
        if (chapterId === '11') {
          // For the first conversation, we show Vishwaroopam (not normal Krishna)
          setCharacterType('vishwaroopam');
        } else {
          setCharacterType('krishna');
        }
      } else {
        // For any other speaker (including Host, होस्ट, Podcast Host, etc.), use host
        setCharacterType('host');
      }
      
      setShowCharacter(true);
      setShowText(true);
      setLastAction(speaker === 'Arjuna' || speaker === 'अर्जुन' || speaker === 'అర్జునుడు' || speaker === 'అర్జున' ? 'ask' : 'answer');
      setCurrentConversationIndex(0);
      handlePlayAudio(firstConversation.text, firstConversation.speaker);
    }
  };

  // Helper function to check if speaker is Arjuna
  const isArjunaSpeaker = (speaker) => {
    return speaker === 'Arjuna' || speaker === 'अर्जुन' || speaker === 'అర్జునుడు' || speaker === 'అర్జున';
  };

  // Helper function to check if speaker is Krishna
  const isKrishnaSpeaker = (speaker) => {
    return speaker === 'Krishna' || speaker === 'कृष्ण' || speaker === 'కృష్ణుడు' || speaker === 'కృష్ణ';
  };

  // Helper function to check if speaker is Host
  const isHostSpeaker = (speaker) => {
    return speaker === 'Host' || speaker === 'होस्ट' || speaker === 'Podcast Host' || speaker.includes('Host');
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

  const handleAskQuestion = () => {
    if (isTransitioning || isPageFlipping) return;
    // Check if last action was also 'ask'
    if (lastAction === 'ask') {
      setShowPopup(true);
      setTimeout(() => setShowPopup(false), 3000); // Hide popup after 3 seconds
      return;
    }
    
    // Find the next Arjuna question or Host conversation
    let nextQuestionIndex = -1;
    for (let i = currentConversationIndex + 1; i < conversations.length; i++) {
      const speaker = conversations[i].speaker;
      // Check for all variations of Arjuna and Host speakers
      if (isArjunaSpeaker(speaker) || isHostSpeaker(speaker)) {
        nextQuestionIndex = i;
        break;
      }
    }
    
    // If no Arjuna question or Host conversation found, check if chapter is completed
    if (nextQuestionIndex === -1) {
      // Chapter completed - only show summary at the very end
      if (currentConversationIndex === conversations.length - 1) {
        setIsChapterCompleted(true);
        setShowSummary(true);
      }
      return;
    }
    
    if (nextQuestionIndex !== -1) {
      triggerGrandhaPageFlip('next');
      setIsTransitioning(true);
      const conversation = conversations[nextQuestionIndex];
      setCurrentConversationIndex(nextQuestionIndex);
      setCurrentText(conversation.text);
      setShowText(true);
      setLastAction('ask'); // Set last action to 'ask'

      setTimeout(() => {
        // Determine character type based on speaker
        const speaker = conversation.speaker;
        if (isArjunaSpeaker(speaker)) {
          setCharacterType('arjuna');
        } else if (isHostSpeaker(speaker)) {
          setCharacterType('host');
        } else {
          // Default to host for any other speaker that's not recognized
          setCharacterType('host');
        }
        
        setShowCharacter(true);
        finishTransitionSmoothly();
        
        // Play character's question audio
        handlePlayAudio(conversation.text, conversation.speaker);
      }, 280);
    }
  };

  const handleDivineAnswer = () => {
    if (isTransitioning || isPageFlipping) return;
    // Check if last action was also 'answer'
    if (lastAction === 'answer') {
      setShowPopup(true);
      setTimeout(() => setShowPopup(false), 3000); // Hide popup after 3 seconds
      return;
    }
    
    // Find the next Krishna response after current index
    let nextAnswerIndex = -1;
    for (let i = currentConversationIndex + 1; i < conversations.length; i++) {
      const speaker = conversations[i].speaker;
      // Check for all variations of Krishna speakers
      if (isKrishnaSpeaker(speaker)) {
        nextAnswerIndex = i;
        break;
      }
    }
    
    // If no Krishna response found, check if chapter is completed
    if (nextAnswerIndex === -1) {
      // Chapter completed - only show summary at the very end
      if (currentConversationIndex === conversations.length - 1) {
        setIsChapterCompleted(true);
        setShowSummary(true);
      }
      return;
    }
    
    if (nextAnswerIndex !== -1) {
      triggerGrandhaPageFlip('next');
      setIsTransitioning(true);
      const krishnaResponse = conversations[nextAnswerIndex];
      setCurrentConversationIndex(nextAnswerIndex);
      setCurrentText(krishnaResponse.text);
      setShowText(true);
      setLastAction('answer'); // Set last action to 'answer'

      setTimeout(() => {
        // Special case for Chapter 11 - show Vishwaroopam for Krishna except for the last two conversations
        if (chapterId === '11') {
          // Check if this is one of the last two conversations
          // For the last two dialogues of Krishna in Chapter 11, use krishna.svg only
          const totalKrishnaDialogues = conversations.filter(conv => isKrishnaSpeaker(conv.speaker)).length;
          const currentKrishnaDialogueIndex = conversations
            .slice(0, nextAnswerIndex + 1)
            .filter(conv => isKrishnaSpeaker(conv.speaker)).length;
          
          // If this is one of the last two Krishna dialogues, use krishna.svg
          if (currentKrishnaDialogueIndex > totalKrishnaDialogues - 2) {
            setCharacterType('krishna'); // Show normal Krishna for last two dialogues
          } else {
            setCharacterType('vishwaroopam'); // Show Vishwaroopam for other dialogues
          }
        } else {
          setCharacterType('krishna');
        }
        setShowCharacter(true);
        finishTransitionSmoothly();
        
        // Play Krishna's response audio
        handlePlayAudio(krishnaResponse.text, krishnaResponse.speaker);
      }, 280); // Smooth fade out/in transition
    }
  };

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

    const speaker = prevConversation.speaker;
    if (isArjunaSpeaker(speaker)) {
      setLastAction('ask');
    } else if (isKrishnaSpeaker(speaker)) {
      setLastAction('answer');
    } else {
      setLastAction('ask');
    }

    setTimeout(() => {
      if (isArjunaSpeaker(speaker)) {
        setCharacterType('arjuna');
      } else if (isKrishnaSpeaker(speaker)) {
        if (chapterId === '11') {
          const totalKrishnaDialogues = conversations.filter(conv => isKrishnaSpeaker(conv.speaker)).length;
          const currentKrishnaDialogueIndex = conversations
            .slice(0, prevIndex + 1)
            .filter(conv => isKrishnaSpeaker(conv.speaker)).length;
          if (currentKrishnaDialogueIndex > totalKrishnaDialogues - 2) {
            setCharacterType('krishna');
          } else {
            setCharacterType('vishwaroopam');
          }
        } else {
          setCharacterType('krishna');
        }
      } else {
        setCharacterType('host');
      }

      setShowCharacter(true);
      finishTransitionSmoothly();
      handlePlayAudio(prevConversation.text, prevConversation.speaker);
    }, 280);
  };

  // Get current conversation for emotion display
  const currentConversation = conversations[currentConversationIndex] || {};
  console.log('Current conversation:', currentConversation); // For debugging

  return (
    <div className="chapter-details">
      {/* Popup message for repeated actions */}
      {showPopup && (
        <div className="action-popup">
          Please select the opposite button or continue with current text
        </div>
      )}
      
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
      {!showCharacter && !isChapterCompleted && (
        <div className="start-container">
          <button 
            className="start-btn"
            onClick={handleStartChapter}
          >
            Start Chapter
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
          className={`interactive-btn ${lastAction === 'ask' ? 'answer-btn' : 'ask-btn'} circle-arrow-btn right-arrow-btn`}
          onClick={!showCharacter ? handleStartChapter : (lastAction === 'ask' ? handleDivineAnswer : handleAskQuestion)}
          aria-label={!showCharacter ? 'Start Chapter' : (lastAction === 'ask' ? t('divineAnswer') : t('askQuestion'))}
          title={!showCharacter ? 'Start Chapter' : (lastAction === 'ask' ? t('divineAnswer') : t('askQuestion'))}
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
