import { useState, useEffect, useRef } from 'react';
import { AUDIO_FILES } from '../constants/appConstants';

/**
 * Custom hook for audio playback management
 * @param {string} audioSrc - Audio source URL
 * @param {Object} options - Audio options
 * @returns {Object} - Audio control methods and state
 */
export const useAudioPlayer = (audioSrc, options = {}) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [error, setError] = useState(null);
  
  const audioRef = useRef(null);
  const intervalRef = useRef(null);
  
  const {
    loop = false,
    volume = 1,
    autoPlay = false,
    onPlay = () => {},
    onPause = () => {},
    onEnd = () => {},
    onError = () => {}
  } = options;

  useEffect(() => {
    if (!audioSrc) return;

    audioRef.current = new Audio(audioSrc);
    const audio = audioRef.current;
    
    audio.loop = loop;
    audio.volume = volume;
    
    const handleLoadStart = () => setIsLoading(true);
    const handleCanPlay = () => {
      setIsLoading(false);
      setDuration(audio.duration);
      if (autoPlay) {
        play();
      }
    };
    
    const handlePlay = () => {
      setIsPlaying(true);
      onPlay();
      startTimeTracking();
    };
    
    const handlePause = () => {
      setIsPlaying(false);
      onPause();
      stopTimeTracking();
    };
    
    const handleEnded = () => {
      setIsPlaying(false);
      setCurrentTime(0);
      onEnd();
      stopTimeTracking();
    };
    
    const handleError = (e) => {
      setError(e.message);
      setIsLoading(false);
      onError(e);
    };

    audio.addEventListener('loadstart', handleLoadStart);
    audio.addEventListener('canplay', handleCanPlay);
    audio.addEventListener('play', handlePlay);
    audio.addEventListener('pause', handlePause);
    audio.addEventListener('ended', handleEnded);
    audio.addEventListener('error', handleError);

    return () => {
      audio.removeEventListener('loadstart', handleLoadStart);
      audio.removeEventListener('canplay', handleCanPlay);
      audio.removeEventListener('play', handlePlay);
      audio.removeEventListener('pause', handlePause);
      audio.removeEventListener('ended', handleEnded);
      audio.removeEventListener('error', handleError);
      
      audio.pause();
      stopTimeTracking();
    };
  }, [audioSrc, loop, volume, autoPlay]);

  const startTimeTracking = () => {
    if (intervalRef.current) return;
    
    intervalRef.current = setInterval(() => {
      if (audioRef.current) {
        setCurrentTime(audioRef.current.currentTime);
      }
    }, 1000);
  };

  const stopTimeTracking = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  const play = () => {
    if (audioRef.current && !isPlaying) {
      const playPromise = audioRef.current.play();
      // Handle the promise if it exists
      if (playPromise && typeof playPromise.then === 'function') {
        playPromise.catch(e => {
          console.error("Audio play failed:", e);
          setError(e.message);
        });
      }
    }
  };

  const pause = () => {
    if (audioRef.current && isPlaying) {
      audioRef.current.pause();
    }
  };

  const stop = () => {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
      setCurrentTime(0);
    }
  };

  const setVolume = (newVolume) => {
    if (audioRef.current) {
      audioRef.current.volume = Math.max(0, Math.min(1, newVolume));
    }
  };

  const seek = (time) => {
    if (audioRef.current) {
      audioRef.current.currentTime = Math.max(0, Math.min(duration, time));
    }
  };

  return {
    isPlaying,
    isLoading,
    duration,
    currentTime,
    error,
    play,
    pause,
    stop,
    setVolume,
    seek
  };
};