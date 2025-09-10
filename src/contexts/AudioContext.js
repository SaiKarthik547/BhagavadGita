import React, { createContext, useContext, useState, useRef, useEffect, useCallback } from 'react';
import { Howl, Howler } from 'howler';

const AudioContext = createContext();

export const useAudio = () => {
  const context = useContext(AudioContext);
  // Using ternary operator instead of if-else
  return context ? context : (() => { throw new Error('useAudio must be used within an AudioProvider'); })();
};

export const AudioProvider = ({ children }) => {
  // Audio states
  const [isBackgroundPlaying, setIsBackgroundPlaying] = useState(false);
  const [isMeditationPlaying, setIsMeditationPlaying] = useState(false);
  const [isChantsPlaying, setIsChantsPlaying] = useState(false);
  const [meditationDuration, setMeditationDuration] = useState(10); // minutes
  const [timeRemaining, setTimeRemaining] = useState(0);
  
  // Add effect to log when timeRemaining changes
  useEffect(() => {
    console.log("AudioContext: timeRemaining state updated to:", timeRemaining);
  }, [timeRemaining]);
  
  // Audio refs
  const backgroundMusicRef = useRef(null);
  const meditationAudioRef = useRef(null);
  const chantsAudioRef = useRef(null);
  const timerIntervalRef = useRef(null);
  const userInteractedRef = useRef(false); // Track if user has interacted

  // Pre-load audio files to eliminate delay
  useEffect(() => {
    console.log("Pre-loading audio files");
    
    // Set up Howler.js to use only HTML5 audio to avoid pool exhaustion
    Howler.html5 = true;
    Howler.usingWebAudio = false;
    Howler.autoSuspend = false; // Prevent automatic suspension
    Howler.pool = 3; // Limit pool size to prevent exhaustion
    
    // Pre-create Howl instances but don't play them yet
    backgroundMusicRef.current = new Howl({
      src: ['/audio/flute music.mp3'],
      html5: true,
      loop: true,
      volume: 0.7,
      preload: true,
      onload: function() {
        console.log("Background music loaded successfully");
        // Ensure it's stopped by default
        backgroundMusicRef.current.stop();
      },
      onloaderror: function(id, err) {
        console.error('Background music load error:', err);
      },
      onplayerror: function(id, err) {
        console.error('Background music play error:', err);
      }
    });
    
    meditationAudioRef.current = new Howl({
      src: ['/audio/meditation om chants.mp3'],
      html5: true,
      loop: true, // Enable built-in looping for seamless looping
      volume: 0.4,
      preload: true,
      onload: function() {
        console.log("Meditation audio loaded successfully");
        // Ensure it's stopped by default
        meditationAudioRef.current.stop();
      },
      onplay: function() {
        console.log("Meditation audio is now playing");
      },
      onloaderror: function(id, err) {
        console.error('Meditation audio load error:', err);
      },
      onplayerror: function(id, err) {
        console.error('Meditation audio play error:', err);
      },
      onend: function() {
        // When the audio ends, only log it
        console.log("Meditation audio ended");
      }
    });
    
    chantsAudioRef.current = new Howl({
      src: ['/audio/chants.mp3'],
      html5: true,
      loop: true, // Enable built-in looping for seamless looping
      volume: 0.4,
      preload: true,
      onload: function() {
        console.log("Chants audio loaded successfully");
        console.log("Chants audio source:", chantsAudioRef.current._src); // Debug: log the source
        // Ensure it's stopped by default
        chantsAudioRef.current.stop();
      },
      onplay: function() {
        console.log("Chants audio is now playing");
        console.log("Chants audio source:", chantsAudioRef.current._src); // Debug: log the source
      },
      onloaderror: function(id, err) {
        console.error('Chants audio load error:', err);
      },
      onplayerror: function(id, err) {
        console.error('Chants audio play error:', err);
        // Try to unmute and play again
        if (chantsAudioRef.current) {
          chantsAudioRef.current.mute(false);
          setTimeout(() => {
            try {
              const playPromise = chantsAudioRef.current.play();
              // Check if play returns a promise
              if (playPromise && typeof playPromise.then === 'function') {
                playPromise.catch(e => {
                  console.error("Chants audio play retry failed:", e);
                });
              }
              console.log("Chants audio play retry after error");
            } catch (retryError) {
              console.error("Chants audio play retry failed:", retryError);
            }
          }, 100);
        }
      },
      onend: function() {
        // When the audio ends, only log it
        console.log("Chants audio ended");
      }
    });
    
    // Set up user interaction detection
    const handleUserInteraction = () => {
      userInteractedRef.current = true;
      console.log("User interaction detected");
      // Remove event listeners after first interaction
      document.removeEventListener('click', handleUserInteraction);
      document.removeEventListener('touchstart', handleUserInteraction);
      document.removeEventListener('keydown', handleUserInteraction);
    };
    
    // Add event listeners for user interaction
    document.addEventListener('click', handleUserInteraction);
    document.addEventListener('touchstart', handleUserInteraction);
    document.addEventListener('keydown', handleUserInteraction);
    
    return () => {
      console.log("Unloading audio files");
      if (backgroundMusicRef.current) {
        backgroundMusicRef.current.unload();
      }
      if (meditationAudioRef.current) {
        meditationAudioRef.current.unload();
      }
      if (chantsAudioRef.current) {
        chantsAudioRef.current.unload();
      }
      // Remove event listeners
      document.removeEventListener('click', handleUserInteraction);
      document.removeEventListener('touchstart', handleUserInteraction);
      document.removeEventListener('keydown', handleUserInteraction);
      // We don't clear the timer interval here because it should continue running
      // The timer will be cleared when stopMeditation is called
    };
  }, []); // Keep empty dependency array as we only want to initialize once

  // Stop meditation helper (created first to use in startMeditation)
  const stopMeditation = useCallback(() => {
    console.log("stopMeditation called");
    // Stop the meditation audio
    if (meditationAudioRef.current) {
      meditationAudioRef.current.stop();
    }
    
    // Clear any existing timer
    if (timerIntervalRef.current) {
      clearInterval(timerIntervalRef.current);
      timerIntervalRef.current = null;
    }
    
    // Reset all timer-related state
    setIsMeditationPlaying(false);
    setTimeRemaining(0); // Reset time remaining to 0
    
    // Resume background music if we're not on meditation or chants pages
    const currentPath = window.location.pathname;
    const isMeditationPage = currentPath.includes('/meditation');
    const isChantsPage = currentPath.includes('/chants');
    
    if (!isMeditationPage && !isChantsPage && userInteractedRef.current) {
      // Resume Howler.js background music
      if (backgroundMusicRef.current) {
        backgroundMusicRef.current.play().catch(e => console.log("Background music play failed:", e));
        setIsBackgroundPlaying(true);
      }
      
      // Resume HTML5 background music
      const bgMusic = document.getElementById('bgMusic');
      if (bgMusic) {
        bgMusic.muted = false;
        bgMusic.play().catch(e => console.log("Background music play failed:", e));
      }
    }
  }, []);

  // Start meditation - COMPLETELY NEW SIMPLIFIED IMPLEMENTATION
  const startMeditation = useCallback((duration) => {
    console.log("Starting meditation with duration:", duration);
    
    // Only proceed if user has interacted
    if (!userInteractedRef.current) {
      console.log("Cannot start meditation - user has not interacted with the document");
      return;
    }
    
    // Use the passed duration or fallback to meditationDuration
    const actualDuration = duration !== undefined ? duration : meditationDuration;
    
    // Pause all background music first
    if (backgroundMusicRef.current) {
      backgroundMusicRef.current.pause();
      backgroundMusicRef.current.stop();
      setIsBackgroundPlaying(false);
    }
    
    const bgMusic = document.getElementById('bgMusic');
    if (bgMusic) {
      bgMusic.pause();
      bgMusic.currentTime = 0;
      bgMusic.muted = true;
    }
    
    // Stop any existing meditation audio
    if (meditationAudioRef.current) {
      meditationAudioRef.current.stop();
    }
    
    // Start the meditation audio with proper error handling
    if (meditationAudioRef.current) {
      try {
        const playPromise = meditationAudioRef.current.play();
        // Check if play returns a promise
        if (playPromise && typeof playPromise.then === 'function') {
          playPromise.catch(e => {
            console.error("Meditation audio play failed:", e);
            // Retry once after a small delay
            setTimeout(() => {
              const retryPromise = meditationAudioRef.current.play();
              if (retryPromise && typeof retryPromise.then === 'function') {
                retryPromise.catch(e2 => {
                  console.error("Meditation audio play retry failed:", e2);
                });
              }
            }, 100);
          });
        } else {
          console.log("Meditation audio play command sent");
        }
      } catch (error) {
        console.error("Meditation audio play error:", error);
      }
    }
    
    // Set initial state
    setIsMeditationPlaying(true);
    const totalSeconds = actualDuration * 60;
    setTimeRemaining(totalSeconds);
    setMeditationDuration(actualDuration);
    
    // Clear any existing timer
    if (timerIntervalRef.current) {
      clearInterval(timerIntervalRef.current);
      timerIntervalRef.current = null;
    }
    
    // Store the start time
    const startTime = Date.now();
    const endTime = startTime + (totalSeconds * 1000);
    
    // Start a simple countdown timer using time calculation
    timerIntervalRef.current = setInterval(() => {
      const now = Date.now();
      const remaining = Math.max(0, Math.floor((endTime - now) / 1000));
      
      console.log("Timer tick - time remaining:", remaining);
      setTimeRemaining(remaining);
      
      // When timer reaches zero, stop everything
      if (remaining <= 0) {
        console.log("Timer finished");
        if (timerIntervalRef.current) {
          clearInterval(timerIntervalRef.current);
          timerIntervalRef.current = null;
        }
        // Stop meditation
        if (meditationAudioRef.current) {
          meditationAudioRef.current.stop();
        }
        setIsMeditationPlaying(false);
        setTimeRemaining(0);
        
        // Resume background music
        const currentPath = window.location.pathname;
        const isMeditationPage = currentPath.includes('/meditation');
        const isChantsPage = currentPath.includes('/chants');
        
        if (!isMeditationPage && !isChantsPage && userInteractedRef.current) {
          if (backgroundMusicRef.current) {
            backgroundMusicRef.current.play().catch(e => console.log("Background music play failed:", e));
            setIsBackgroundPlaying(true);
          }
          
          const bgMusic = document.getElementById('bgMusic');
          if (bgMusic) {
            bgMusic.muted = false;
            bgMusic.play().catch(e => console.log("Background music play failed:", e));
          }
        }
      }
    }, 1000);
  }, [meditationDuration]);
 
  // Fixed toggle for background music using ternary operator
  const toggleBackgroundMusic = useCallback(() => {
    // Early return if no background music reference
    if (!backgroundMusicRef.current) {
      console.log("No background music reference found");
      return;
    }
    
    // Only proceed if user has interacted
    if (!userInteractedRef.current) {
      console.log("Cannot toggle background music - user has not interacted with the document");
      return;
    }
    
    console.log("Toggling background music, currently playing:", isBackgroundPlaying);
    
    // Using object mapping instead of if-else
    const actions = {
      playing: () => {
        console.log("Pausing background music");
        backgroundMusicRef.current.pause();
        backgroundMusicRef.current.stop();
        setIsBackgroundPlaying(false);
        
        // Also mute HTML5 background music
        const bgMusic = document.getElementById('bgMusic');
        if (bgMusic) {
          bgMusic.muted = true;
        }
      },
      stopped: () => {
        // Only play if no other audio is playing
        if (!isMeditationPlaying && !isChantsPlaying) {
          console.log("Playing background music");
          // Reset playback position to start for consistent experience
          backgroundMusicRef.current.stop();
          
          // Try to play the audio with proper error handling
          try {
            const playPromise = backgroundMusicRef.current.play();
            if (playPromise && typeof playPromise.then === 'function') {
              playPromise
                .then(() => {
                  console.log("Background music play successful");
                  setIsBackgroundPlaying(true);
                })
                .catch((error) => {
                  console.error("Background music play failed:", error);
                  // Try again with a small delay
                  setTimeout(() => {
                    try {
                      backgroundMusicRef.current.play();
                      console.log("Background music play retry successful");
                      setIsBackgroundPlaying(true);
                    } catch (retryError) {
                      console.error("Background music play retry failed:", retryError);
                    }
                  }, 100);
                });
              } else {
                console.log("Background music play command sent");
                setIsBackgroundPlaying(true);
              }
            } catch (error) {
              console.error("Background music play error:", error);
              // Try again with a small delay
              setTimeout(() => {
                try {
                  backgroundMusicRef.current.play();
                  console.log("Background music play retry successful");
                  setIsBackgroundPlaying(true);
                } catch (retryError) {
                  console.error("Background music play retry failed:", retryError);
                }
              }, 100);
            }
            
            // Also unmute HTML5 background music
            const bgMusic = document.getElementById('bgMusic');
            if (bgMusic) {
              bgMusic.muted = false;
              // Try to play the HTML5 audio as well
              try {
                bgMusic.play().catch(e => console.log("HTML5 background music play failed:", e));
              } catch (error) {
                console.error("HTML5 background music play error:", error);
              }
            }
          } else {
            console.log("Not playing background music - meditation or chants are playing");
          }
        }
      };
    
    // Execute the appropriate action
    const actionType = isBackgroundPlaying ? 'playing' : 'stopped';
    actions[actionType]();
  }, [isBackgroundPlaying, isMeditationPlaying, isChantsPlaying]);

  // Stop chants
  const stopChants = useCallback(() => {
    console.log("stopChants called, current isChantsPlaying:", isChantsPlaying);
    // Stop the audio using logical AND
    if (chantsAudioRef.current) {
      chantsAudioRef.current.stop();
      // Reset the audio position to the beginning
      chantsAudioRef.current.seek(0);
      console.log("Chants audio stopped");
    }
    
    // Set state after stopping audio
    setIsChantsPlaying(false);
    console.log("isChantsPlaying state set to false");
    
    // Using object mapping for path checking and actions
    const pathActions = {
      meditation: () => {}, // Do nothing on meditation page
      chants: () => {}, // Do nothing on chants page
      other: () => {
        // Resume background music on other pages using logical AND
        if (backgroundMusicRef.current && userInteractedRef.current) {
          backgroundMusicRef.current.play().catch(e => console.log("Background music play failed:", e));
          setIsBackgroundPlaying(true);
        }
        // Resume HTML5 background music
        const bgMusic = document.getElementById('bgMusic');
        if (bgMusic && userInteractedRef.current) {
          console.log("Resuming HTML5 background music on other page");
          bgMusic.muted = false; // Unmute when resuming
          // Try to play the HTML5 audio as well
          try {
            bgMusic.play().catch(e => console.log("HTML5 background music play failed:", e));
          } catch (error) {
            console.error("HTML5 background music play error:", error);
          }
        }
      }
    };
    
    // Determine current path type
    const currentPath = window.location.pathname;
    const pathType = currentPath.includes('/meditation') 
      ? 'meditation' 
      : currentPath.includes('/chants') 
        ? 'chants' 
        : 'other';
    
    // Execute corresponding action
    pathActions[pathType]();
  }, [isChantsPlaying]);

  // Start chants - IMMEDIATE start
  const startChants = useCallback(() => {
    console.log("startChants called, current isChantsPlaying:", isChantsPlaying);
    
    // Only proceed if user has interacted
    if (!userInteractedRef.current) {
      console.log("Cannot start chants - user has not interacted with the document");
      return;
    }
    
    // Stop all background music (HTML5 and Howler.js)
    const bgMusic = document.getElementById('bgMusic');
    if (bgMusic) {
      console.log("Stopping HTML5 background music");
      bgMusic.pause();
      bgMusic.currentTime = 0;
      bgMusic.muted = true; // Mute to ensure no sound
    }
    
    if (backgroundMusicRef.current) {
      console.log("Pausing Howler.js background music");
      backgroundMusicRef.current.pause();
      backgroundMusicRef.current.stop(); // Also stop the Howler.js instance
      setIsBackgroundPlaying(false);
    }
    
    // Also pause any meditation audio that might be playing
    if (meditationAudioRef.current) {
      console.log("Pausing meditation audio");
      meditationAudioRef.current.pause();
      meditationAudioRef.current.stop(); // Also stop the meditation audio
    }
    
    // Start the chants audio INSTANTLY with proper error handling
    if (chantsAudioRef.current) {
      console.log("Stopping chants audio");
      chantsAudioRef.current.stop();
      // Reset the audio position to the beginning
      chantsAudioRef.current.seek(0);
      // Make sure it's unmuted when starting
      chantsAudioRef.current.mute(false);
      console.log("Playing chants audio");
      console.log("Chants audio source:", chantsAudioRef.current._src); // Debug: log the source
      
      // Try to play the audio - ensure it's called directly within user interaction
      try {
        // Play the audio and handle the promise properly
        const playPromise = chantsAudioRef.current.play();
        
        if (playPromise && typeof playPromise.then === 'function') {
          playPromise
            .then(() => {
              console.log("Chants audio play successful");
              setIsChantsPlaying(true); // Set state only after successful play
              console.log("isChantsPlaying state set to true");
            })
            .catch((error) => {
              console.error("Chants audio play failed:", error);
              setIsChantsPlaying(false); // Ensure state is correct on failure
              console.log("isChantsPlaying state set to false due to error");
              
              // Retry once after a small delay
              setTimeout(() => {
                const retryPromise = chantsAudioRef.current.play();
                if (retryPromise && typeof retryPromise.then === 'function') {
                  retryPromise.then(() => {
                    console.log("Chants audio play retry successful");
                    setIsChantsPlaying(true);
                    console.log("isChantsPlaying state set to true after retry");
                  }).catch((retryError) => {
                    console.error("Chants audio play retry failed:", retryError);
                    setIsChantsPlaying(false);
                    console.log("isChantsPlaying state set to false after retry failure");
                  });
                }
              }, 100);
            });
        } else {
          // If no promise is returned, set state immediately
          console.log("Chants audio play command sent");
          setIsChantsPlaying(true);
          console.log("isChantsPlaying state set to true");
        }
      } catch (error) {
        console.error("Chants audio play error:", error);
        setIsChantsPlaying(false); // Ensure state is correct on failure
        console.log("isChantsPlaying state set to false due to error");
        
        // Retry once after a small delay
        setTimeout(() => {
          try {
            const retryPromise = chantsAudioRef.current.play();
            if (retryPromise && typeof retryPromise.then === 'function') {
              retryPromise.then(() => {
                console.log("Chants audio play retry successful");
                setIsChantsPlaying(true);
                console.log("isChantsPlaying state set to true after retry");
              }).catch((retryError) => {
                console.error("Chants audio play retry failed:", retryError);
                setIsChantsPlaying(false);
                console.log("isChantsPlaying state set to false after retry failure");
              });
            } else {
              console.log("Chants audio play retry command sent");
              setIsChantsPlaying(true);
              console.log("isChantsPlaying state set to true after retry");
            }
          } catch (retryError) {
            console.error("Chants audio play retry failed:", retryError);
            setIsChantsPlaying(false);
            console.log("isChantsPlaying state set to false after retry failure");
          }
        }, 100);
      }
    } else {
      console.error("Chants audio reference is null");
      setIsChantsPlaying(false); // Ensure state is correct on failure
      console.log("isChantsPlaying state set to false due to null reference");
    }
  }, [isChantsPlaying]);

  // Handle route changes to manage background music
  useEffect(() => {
    console.log("Setting up route change listener");
    const handleRouteChange = () => {
      const currentPath = window.location.pathname;
      console.log("Route changed to:", currentPath);
      
      // Using object mapping for route-based actions
      const routeActions = {
        meditation: () => {
          // Stop background music on meditation page
          if (backgroundMusicRef.current) {
            console.log("Stopping background music on meditation page");
            backgroundMusicRef.current.pause();
            backgroundMusicRef.current.stop();
            setIsBackgroundPlaying(false);
          }
          // Stop HTML5 background music
          const bgMusic = document.getElementById('bgMusic');
          if (bgMusic) {
            console.log("Stopping HTML5 background music on meditation page");
            bgMusic.pause();
            bgMusic.currentTime = 0;
            bgMusic.muted = true;
          }
        },
        chants: () => {
          // Stop background music on chants page
          if (backgroundMusicRef.current) {
            console.log("Stopping background music on chants page");
            backgroundMusicRef.current.pause();
            backgroundMusicRef.current.stop();
            setIsBackgroundPlaying(false);
          }
          // Stop HTML5 background music
          const bgMusic = document.getElementById('bgMusic');
          if (bgMusic) {
            console.log("Stopping HTML5 background music on chants page");
            bgMusic.pause();
            bgMusic.currentTime = 0;
            bgMusic.muted = true;
          }
        },
        other: () => {
          // Resume background music on other pages if no other audio is playing
          if (!isMeditationPlaying && !isChantsPlaying && backgroundMusicRef.current && userInteractedRef.current) {
            console.log("Resuming background music on other page");
            
            // Try to play the audio with proper error handling
            try {
              const playPromise = backgroundMusicRef.current.play();
              if (playPromise && typeof playPromise.then === 'function') {
                playPromise
                  .then(() => {
                    console.log("Background music play successful");
                    setIsBackgroundPlaying(true);
                  })
                  .catch((error) => {
                    console.error("Background music play failed:", error);
                  });
              } else {
                console.log("Background music play command sent");
                setIsBackgroundPlaying(true);
              }
            } catch (error) {
              console.error("Background music play error:", error);
            }
          }
          // Resume HTML5 background music on other pages
          const bgMusic = document.getElementById('bgMusic');
          if (bgMusic && !isMeditationPlaying && !isChantsPlaying && userInteractedRef.current) {
            console.log("Resuming HTML5 background music on other page");
            bgMusic.muted = false;
            // Try to play the HTML5 audio as well
            try {
              bgMusic.play().catch(e => console.log("HTML5 background music play failed:", e));
            } catch (error) {
              console.error("HTML5 background music play error:", error);
            }
          }
        }
      };
      
      // Determine route type
      const routeType = currentPath.includes('/meditation') 
        ? 'meditation' 
        : currentPath.includes('/chants') 
          ? 'chants' 
          : 'other';
      
      console.log("Executing route action for:", routeType);
      // Execute corresponding action
      routeActions[routeType]();
    };
    
    // Add event listener for route changes
    window.addEventListener('popstate', handleRouteChange);
    
    // Also check on initial load
    handleRouteChange();
    
    // Cleanup on unmount
    return () => {
      console.log("Cleaning up route change listener");
      window.removeEventListener('popstate', handleRouteChange);
      // Using logical AND instead of if statement
      if (backgroundMusicRef.current) backgroundMusicRef.current.pause();
      // DO NOT clear the timer interval here - it should continue running during meditation
      // The timer will be cleared when stopMeditation is called
    };
  }, [isMeditationPlaying, isChantsPlaying]);
  
  // Add effect to log when isMeditationPlaying changes
  useEffect(() => {
    console.log("AudioContext: isMeditationPlaying changed to:", isMeditationPlaying);
  }, [isMeditationPlaying]);
  
  // Add effect to log when isChantsPlaying changes
  useEffect(() => {
    console.log("AudioContext: isChantsPlaying changed to:", isChantsPlaying);
  }, [isChantsPlaying]);
  
  // Add effect to log when isBackgroundPlaying changes
  useEffect(() => {
    console.log("AudioContext: isBackgroundPlaying changed to:", isBackgroundPlaying);
  }, [isBackgroundPlaying]);
  
  // Text-to-speech function - COMPLETELY REMOVED as per user request
  const speakText = useCallback(() => {
    // Empty function - text-to-speech completely removed
    console.log("Text-to-speech is disabled");
  }, []);

  return (
    <AudioContext.Provider value={{
      // Background music
      isBackgroundPlaying,
      toggleBackgroundMusic,
      
      // Meditation
      isMeditationPlaying,
      startMeditation,
      stopMeditation,
      meditationDuration,
      setMeditationDuration,
      timeRemaining,
      
      // Chants
      isChantsPlaying,
      startChants,
      stopChants,
      
      // Text-to-speech (DISABLED)
      speakText
    }}>
      {children}
    </AudioContext.Provider>
  );
};

export default AudioContext;