import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { FaPlay, FaStop } from 'react-icons/fa';
import { useAudio } from '../contexts/AudioContext';
import { useLanguage } from '../contexts/LanguageContext';
import '../assets/styles/MeditationPage.css';

const MeditationPage = () => {
  const [duration, setDuration] = useState(10);
  const [customDuration, setCustomDuration] = useState('');
  const [showCustomInput, setShowCustomInput] = useState(false);
  const [showCompletionPopup, setShowCompletionPopup] = useState(false);
  const [meditationStarted, setMeditationStarted] = useState(false);
  
  const { 
    startMeditation, 
    stopMeditation,
    isMeditationPlaying,
    timeRemaining
  } = useAudio();
  
  // Log timeRemaining for debugging
  useEffect(() => {
    console.log("MeditationPage: Time remaining updated:", timeRemaining);
    console.log("MeditationPage: Is meditation playing:", isMeditationPlaying);
  }, [timeRemaining, isMeditationPlaying]);
  
  // Log whenever the component renders
  console.log("MeditationPage rendering with timeRemaining:", timeRemaining, "isMeditationPlaying:", isMeditationPlaying);
  
  // Add effect to log when duration changes
  useEffect(() => {
    console.log("MeditationPage: Duration changed to:", duration);
  }, [duration]);
  
  const { t, language } = useLanguage();

  // Stop background music when component mounts
  useEffect(() => {
    document.getElementById('bgMusic') && document.getElementById('bgMusic').pause();

    // Cleanup when leaving - using logical AND instead of if statement
    return () => {
      if (isMeditationPlaying) stopMeditation();
    };
  }, [isMeditationPlaying, stopMeditation]);

  // Detect meditation completion and show popup
  useEffect(() => {
    // Only show popup if meditation was actually started and has now completed
    if (meditationStarted && timeRemaining === 0 && !isMeditationPlaying && duration > 0) {
      setShowCompletionPopup(true);
      // Reset meditation started flag after showing popup
      setMeditationStarted(false);
    }
  }, [meditationStarted, timeRemaining, isMeditationPlaying, duration]);

  // Duration options with translations - using useMemo
  const durationOptions = useMemo(() => [5, 10, 15, 20, 30], []);
  
  // Using object mapping for language-based labels
  const durationLabelMap = useMemo(() => ({
    'en': 'minutes',
    'hi': 'मिनट',
    'te': 'నిమిషాలు'
  }), []);
  
  const durationLabel = durationLabelMap[language] || durationLabelMap['en'];

  // Handle start meditation button click - INSTANT start
  const handleStartMeditation = useCallback(() => {
    console.log("MeditationPage: Begin meditation button clicked");
    console.log("MeditationPage: Current duration:", duration);
    console.log("MeditationPage: startMeditation function:", startMeditation);
    setMeditationStarted(true); // Mark that meditation has started
    startMeditation(duration);
  }, [startMeditation, duration]);

  // Handle stop meditation button click
  const handleStopMeditation = useCallback(() => {
    stopMeditation();
    // Reset meditation started flag when stopped
    setMeditationStarted(false);
  }, [stopMeditation]);

  // Handle custom duration input change
  const handleCustomDurationChange = (e) => {
    const value = e.target.value;
    // Only allow numbers
    if (value === '' || /^\d+$/.test(value)) {
      setCustomDuration(value);
    }
  };

  // Handle custom duration submit
  const handleCustomDurationSubmit = () => {
    const customMinutes = parseInt(customDuration);
    if (customMinutes && customMinutes > 0 && customMinutes <= 120) {
      setDuration(customMinutes);
      setShowCustomInput(false);
      setCustomDuration('');
    } else {
      // You might want to show an error message here
      alert(t('invalidDuration') || 'Please enter a valid duration between 1 and 120 minutes');
    }
  };

  // Calculate the stroke dash offset for the circular progress
  const calculateStrokeDashOffset = useMemo(() => {
    if (!isMeditationPlaying) return 628.3; // Full circle when not playing
    const totalSeconds = duration * 60;
    // Make sure we don't divide by zero
    if (totalSeconds <= 0) return 628.3;
    const progress = Math.max(0, Math.min(1, timeRemaining / totalSeconds));
    return 628.3 * (1 - progress); // 628.3 is the circumference of the circle (2πr where r=100)
  }, [isMeditationPlaying, timeRemaining, duration]);

  // Circular timer SVG with animations - NO NUMERIC DISPLAY
  const AnimatedOmTimer = React.memo(() => {
    return (
      <div className="circular-timer-container">
        <svg width="220" height="220" viewBox="0 0 220 220">
          {/* Background circle */}
          <circle 
            cx="110" 
            cy="110" 
            r="100" 
            fill="none" 
            stroke="rgba(30, 136, 229, 0.2)" 
            strokeWidth="10"
          />
          {/* Animated progress circle */}
          <circle 
            cx="110" 
            cy="110" 
            r="100" 
            fill="none" 
            stroke="rgba(30, 136, 229, 0.8)" 
            strokeWidth="10" 
            strokeLinecap="round" 
            strokeDasharray="628.3" 
            strokeDashoffset={calculateStrokeDashOffset}
            transform="rotate(-90, 110, 110)"
            className={`progress-circle ${isMeditationPlaying ? 'animating' : ''}`}
          />
        </svg>
        {/* OM symbol with animations */}
        <div className={`om-symbol ${isMeditationPlaying ? 'active' : ''}`}>
          <img 
            src="/icons/om.png" 
            alt="Om Symbol" 
            width="140" 
            height="140"
            style={{ 
              filter: 'drop-shadow(0px 0px 20px rgba(255, 215, 0, 1))',
              opacity: '1',
              display: 'block',
              width: '100%',
              height: '100%'
            }}
          />
        </div>
      </div>
    );
  }, [isMeditationPlaying, calculateStrokeDashOffset]);

  // Render the appropriate UI based on meditation state using ternary operator
  const renderMeditationUI = () => {
    console.log("renderMeditationUI: isMeditationPlaying:", isMeditationPlaying);
    return (
      isMeditationPlaying ? (
        <div className="meditation-session">
          <div className="timer-display">
            <AnimatedOmTimer />
          </div>
          
          <div className="meditation-controls">
            <button 
              className="stop-meditation-btn"
              onClick={handleStopMeditation}
            >
              <FaStop className="btn-icon" />
              {t('stopMeditation') || 'Stop Meditation'}
            </button>
          </div>
        </div>
      ) : (
        <div className="meditation-setup">
          <div className="control-group">
            <h3>{t('selectDuration')}</h3>
            <div className="duration-buttons">
              {durationOptions.map((min) => (
                <button
                  key={min}
                  className={`duration-btn ${duration === min ? 'active' : ''}`}
                  onClick={() => setDuration(min)}
                >
                  {min} {durationLabel}
                </button>
              ))}
              <button
                className={`duration-btn ${showCustomInput ? 'active' : ''}`}
                onClick={() => setShowCustomInput(!showCustomInput)}
              >
                {t('custom') || 'Custom'}
              </button>
            </div>
            
            {showCustomInput && (
              <div className="custom-duration-input">
                <input
                  type="text"
                  value={customDuration}
                  onChange={handleCustomDurationChange}
                  placeholder={t('enterMinutes') || 'Enter minutes'}
                  className="custom-duration-field"
                />
                <button
                  className="set-custom-duration-btn"
                  onClick={handleCustomDurationSubmit}
                >
                  {t('set') || 'Set'}
                </button>
              </div>
            )}
            
            <div className="selected-duration">
              {t('selectedDuration') || 'Selected Duration'}: {duration} {durationLabel}
            </div>
          </div>
          
          <div className="meditation-controls">
            <button 
              className="start-meditation-btn"
              onClick={handleStartMeditation}
            >
              <FaPlay className="btn-icon" />
              {t('beginMeditationBtn')}
            </button>
          </div>
        </div>
      )
    );
  };

  return (
    <div className="meditation-page">
      {/* Floating Petals */}
      <div className="floating-elements">
        <div className="floating-petal petal-1"></div>
        <div className="floating-petal petal-2"></div>
        <div className="floating-petal petal-3"></div>
        <div className="floating-petal petal-4"></div>
        <div className="floating-petal petal-5"></div>
        <div className="floating-petal petal-6"></div>
      </div>
      
      <div className="meditation-container">
        <div className="meditation-header">
          <h1 className="meditation-title">{t('sacredMeditation')}</h1>
          <p className="meditation-subtitle">{t('meditationSubtitle')}</p>
        </div>

        <div className="bottom-aligned">
          {renderMeditationUI()}
        </div>
      </div>

      {/* Completion Popup */}
      {showCompletionPopup && (
        <div className="completion-popup-overlay">
          <div className="completion-popup">
            <h2>{t('meditationCompletedTitle')}</h2>
            <p>{t('meditationCompletedMessage')}</p>
            <div className="meditation-benefits">
              <h3>{t('meditationBenefits')}</h3>
              <ul>
                <li>{t('meditationBenefit1')}</li>
                <li>{t('meditationBenefit2')}</li>
                <li>{t('meditationBenefit3')}</li>
                <li>{t('meditationBenefit4')}</li>
                <li>{t('meditationBenefit5')}</li>
              </ul>
            </div>
            <div className="popup-actions">
              <button
                className="popup-action-btn"
                onClick={() => {
                  setShowCompletionPopup(false);
                  handleStartMeditation();
                }}
              >
                {t('continueMeditation')}
              </button>
            </div>
            <button
              className="popup-close-btn"
              onClick={() => setShowCompletionPopup(false)}
            >
              {t('close') || 'Close'}
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default MeditationPage;