import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import podcastData from '../data/podcastdata.js';
import '../assets/styles/PodcastPage.css';

const PodcastPage = () => {
  const { language, t } = useLanguage();
  const gridRef = useRef(null);
  
  // Get language key
  const languageKey = language === 'hi' ? 'hi' : language === 'te' ? 'te' : 'en';
  
  // Get UI texts
  const uiTexts = podcastData[languageKey]?.ui || podcastData.en.ui;
  
  // Get chapters
  const chapters = podcastData[languageKey]?.chapters || podcastData.en.chapters;

  // Unroll Talapatra Grandha scrolls one-by-one from left to right as the user witnesses them
  useEffect(() => {
    const container = gridRef.current;
    if (!container) return;

    const cards = Array.from(container.querySelectorAll('.podcast-chapter-item'));
    cards.forEach((card) => card.classList.remove('is-unrolled'));

    const queue = [];
    const queuedSet = new Set();
    let timerId = null;
    let initialDelayDone = false;

    const processNext = () => {
      if (queue.length === 0) {
        timerId = null;
        return;
      }
      const nextCard = queue.shift();
      if (nextCard) {
        nextCard.classList.add('is-unrolled');
      }
      timerId = window.setTimeout(processNext, 380);
    };

    const enqueueCard = (card) => {
      if (queuedSet.has(card)) return;
      queuedSet.add(card);
      queue.push(card);
      if (initialDelayDone && !timerId) {
        processNext();
      }
    };

    // Wait 550ms on page visit so if navigating from the scroll menu, the user clearly witnesses the first scroll unfolding
    const startTimer = window.setTimeout(() => {
      initialDelayDone = true;
      if (queue.length > 0 && !timerId) {
        processNext();
      }
    }, 550);

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntries = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => Number(a.target.dataset.idx) - Number(b.target.dataset.idx));

        visibleEntries.forEach((entry) => {
          enqueueCard(entry.target);
          observer.unobserve(entry.target);
        });
      },
      { threshold: 0.12 }
    );

    cards.forEach((card) => observer.observe(card));

    return () => {
      window.clearTimeout(startTimer);
      if (timerId) window.clearTimeout(timerId);
      observer.disconnect();
    };
  }, [languageKey]);

  return (
    <div className="podcast-page">
      {/* Floating Petals */}
      <div className="floating-elements">
        <div className="floating-petal petal-1"></div>
        <div className="floating-petal petal-2"></div>
        <div className="floating-petal petal-3"></div>
        <div className="floating-petal petal-4"></div>
        <div className="floating-petal petal-5"></div>
        <div className="floating-petal petal-6"></div>
      </div>

      <div className="podcast-container">
        <header className="podcast-header">
          <h1>{uiTexts.dialogueTitle}</h1>
          <div className="talapatra-header-ornament" aria-hidden="true">
            <span>─── ❖ ॐ ❖ ───</span>
          </div>
          <p>{uiTexts.welcomeMessage?.subtitle || "Select a chapter to begin your sacred journey"}</p>
        </header>
        
        <div className="podcast-chapters-grid" ref={gridRef}>
          {Object.entries(chapters).map(([chapterId, chapter], index) => (
            <Link 
              to={`/podcast/${chapterId}`} 
              key={chapterId} 
              className="podcast-chapter-item"
              data-idx={index}
            >
              <div className="talapatra-scroll-wrapper">
                {/* Fixed Left Ancient Scroll Roller */}
                <span className="talapatra-roller talapatra-roller-left" aria-hidden="true"></span>

                {/* Unrolling Semi-Transparent Ancient Talapatra Grandha Body */}
                <div className="podcast-chapter-card">
                  <div className="podcast-chapter-content">
                    <h2>{chapterId}. {chapter.title}</h2>
                    <div className="talapatra-ornament-divider" aria-hidden="true">
                      <span>─── ❖ ❈ ❖ ───</span>
                    </div>
                    <h3>{chapter.subtitle}</h3>
                    <div className="chapter-meta">
                      <span className="dialogue-count">
                        ❈ {chapter.dialogue?.length || 0} {t('dialogues')} ❈
                      </span>
                    </div>
                  </div>
                </div>

                {/* Moving Right Ancient Scroll Roller (Rolls from Left to Right as Scroll Unfolds) */}
                <span className="talapatra-roller talapatra-roller-right" aria-hidden="true"></span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PodcastPage;