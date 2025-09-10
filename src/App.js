import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { LanguageProvider } from './contexts/LanguageContext';
import Navigation from './components/Navigation';
import HomePage from './pages/HomePage';
import ChaptersPage from './pages/ChaptersPage';
import ChapterDetailsPage from './pages/ChapterDetailsPage';
import MeditationPage from './pages/MeditationPage';
import ChantsPage from './pages/ChantsPage';
import AboutPage from './pages/AboutPage';
import PodcastPage from './pages/PodcastPage';
import PodcastDetailsPage from './pages/PodcastDetailsPage';
import Icon from './components/Icon';
import { getFloatingIcons } from './utils/floatingIcons';
import './css/icons.css';
import './assets/styles/App.css';

function App() {
  // Static floating icons - only 6 specified icons
  const floatingIcons = getFloatingIcons();
  
  return (
    <LanguageProvider>
      <div className="app-container">
        <Navigation />
        {/* Fixed double scrollbar issue by ensuring proper scrolling container */}
        <div className="app-content">
          {/* Floating Icons container that moves with page scrolling */}
          <div className="floating-icons">
            {floatingIcons.map((icon, index) => (
              <Icon key={index} name={icon.name} className={icon.className} />
            ))}
          </div>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/chapters" element={<ChaptersPage />} />
            <Route path="/chapters/:chapterId" element={<ChapterDetailsPage />} />
            <Route path="/meditation" element={<MeditationPage />} />
            <Route path="/chants" element={<ChantsPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/podcast" element={<PodcastPage />} />
            <Route path="/podcast/:chapterId" element={<PodcastDetailsPage />} />
          </Routes>
        </div>
      </div>
    </LanguageProvider>
  );
}

export default App;