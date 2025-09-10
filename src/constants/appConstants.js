// Application Constants
export const APP_CONFIG = {
  TITLE: 'श्रीमद्भगवद्गीता',
  SUBTITLE: 'The Eternal Wisdom of Lord Krishna',
  VERSION: '1.0.0',
  AUDIO_FADE_DURATION: 500,
  TIMER_INTERVAL: 1000,
  DEFAULT_MEDITATION_DURATION: 5, // minutes
};

export const MEDITATION_DURATIONS = [5, 10, 15, 20, 30, 45, 60]; // minutes

export const MEDITATION_TYPES = [
  {
    id: 'om',
    name: 'Om Meditation',
    description: 'Traditional Om chanting for deep meditation',
    icon: '🕉️',
    audio: '/audio/meditation om chants.mp3'
  },
  {
    id: 'radha-krishna',
    name: 'Radha Krishna Chants',
    description: 'Devotional chants for bhakti meditation',
    icon: '💕',
    audio: '/audio/chants.mp3'
  }
];

export const ROUTES = {
  HOME: '/',
  CHAPTERS: '/chapters',
  CHAPTER_DETAILS: '/chapter/:id',
  MEDITATION: '/meditation',
  AUDIO: '/audio',
  ABOUT: '/about',
};

export const LANGUAGES = {
  ENGLISH: 'english',
  HINDI: 'hindi',
};

export const THEME_COLORS = {
  PRIMARY_BLUE: '#3b82f6',
  GOLD: '#ffd700',
  GRADIENT_BLUE: 'linear-gradient(135deg, #1e3c72 0%, #2a5298 50%, #3b82f6 100%)',
  GRADIENT_GOLD: 'linear-gradient(135deg, #ffd700, #ffa500)',
};