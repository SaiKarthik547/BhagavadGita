// Utility Functions for Bhagavad Gita App

/**
 * Format time in MM:SS format
 * @param {number} seconds - Time in seconds
 * @returns {string} - Formatted time string
 */
export const formatTime = (seconds) => {
  const mins = Math.floor(seconds / 60);
  const secs = seconds % 60;
  return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
};

/**
 * Calculate progress percentage
 * @param {number} elapsed - Elapsed time in seconds
 * @param {number} total - Total duration in seconds
 * @returns {number} - Progress percentage (0-100)
 */
export const calculateProgress = (elapsed, total) => {
  if (total === 0) return 0;
  return Math.min((elapsed / total) * 100, 100);
};

/**
 * Validate if browser supports audio
 * @returns {boolean} - True if audio is supported
 */
export const isAudioSupported = () => {
  return typeof Audio !== 'undefined';
};

/**
 * Check if browser tab is visible
 * @returns {boolean} - True if tab is visible
 */
export const isTabVisible = () => {
  return !document.hidden;
};

/**
 * Debounce function to limit function calls
 * @param {Function} func - Function to debounce
 * @param {number} delay - Delay in milliseconds
 * @returns {Function} - Debounced function
 */
export const debounce = (func, delay) => {
  let timeoutId;
  return (...args) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => func.apply(null, args), delay);
  };
};

/**
 * Generate unique ID for components
 * @returns {string} - Unique ID
 */
export const generateId = () => {
  return Math.random().toString(36).substr(2, 9);
};

/**
 * Sanitize text for safe display
 * @param {string} text - Text to sanitize
 * @returns {string} - Sanitized text
 */
export const sanitizeText = (text) => {
  if (typeof text !== 'string') return '';
  return text.replace(/[<>]/g, '');
};

/**
 * Get chapter number from URL parameter
 * @param {string} param - URL parameter
 * @returns {number|null} - Chapter number or null
 */
export const getChapterNumber = (param) => {
  const num = parseInt(param, 10);
  return isNaN(num) || num < 1 || num > 18 ? null : num;
};

/**
 * Local storage utilities
 */
export const storage = {
  get: (key, defaultValue = null) => {
    try {
      const item = localStorage.getItem(key);
      return item ? JSON.parse(item) : defaultValue;
    } catch {
      return defaultValue;
    }
  },
  
  set: (key, value) => {
    try {
      localStorage.setItem(key, JSON.stringify(value));
      return true;
    } catch {
      return false;
    }
  },
  
  remove: (key) => {
    try {
      localStorage.removeItem(key);
      return true;
    } catch {
      return false;
    }
  }
};

/**
 * Animation utilities
 */
export const animations = {
  fadeIn: {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    transition: { duration: 0.5 }
  },
  
  slideUp: {
    initial: { opacity: 0, y: 50 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  },
  
  scale: {
    initial: { opacity: 0, scale: 0.9 },
    animate: { opacity: 1, scale: 1 },
    transition: { duration: 0.4 }
  }
};