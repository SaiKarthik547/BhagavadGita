import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import bhagavadGitaData from '../data/bhagavadGitaData.js';
import { useLanguage } from '../contexts/LanguageContext';
import '../assets/styles/ChaptersPage.css';

const ChaptersPage = () => {
  const { language, t } = useLanguage();
  const listRef = useRef(null);

  // Use the global language setting instead of local state
  const languageKey = language === 'hi' ? 'hi' : language === 'te' ? 'te' : 'en';
  const chapters = bhagavadGitaData[languageKey]?.chapters || {};

  const chapterIds = Object.keys(chapters);

  // Unroll Talapatra Grandha scrolls one-by-one from left to right as the user witnesses them
  useEffect(() => {
    const container = listRef.current;
    if (!container) return;

    const cards = Array.from(container.querySelectorAll('.chapter-item'));
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
        // Sort newly intersecting entries in DOM order so they always unfold top-to-bottom one by one
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
    <div className="chapters-page">
      {/* Floating Petals */}
      <div className="floating-elements">
        <div className="floating-petal petal-1"></div>
        <div className="floating-petal petal-2"></div>
        <div className="floating-petal petal-3"></div>
        <div className="floating-petal petal-4"></div>
        <div className="floating-petal petal-5"></div>
        <div className="floating-petal petal-6"></div>
      </div>
      
      <div className="chapters-container">
        <header className="chapters-header">
          <h1 className="chapters-title">
            {language === 'en' ? 'Chapters' : language === 'hi' ? 'अध्याय' : 'అధ్యాయాలు'}
          </h1>
          <div className="talapatra-header-ornament" aria-hidden="true">
            <span>─── ❖ ॐ ❖ ───</span>
          </div>
          <p className="chapters-subtitle">{t('chaptersSubtitle')}</p>
        </header>

        <div className="chapters-list" ref={listRef}>
          {chapterIds.map((chapterId, index) => {
            const chapter = chapters[chapterId];
            return (
              <Link 
                to={`/chapters/${chapterId}`} 
                className="chapter-item"
                key={chapterId}
                data-idx={index}
              >
                <div className="talapatra-scroll-wrapper">
                  {/* Fixed Left Ancient Scroll Roller */}
                  <span className="talapatra-roller talapatra-roller-left" aria-hidden="true"></span>

                  {/* Unrolling Semi-Transparent Ancient Talapatra Grandha Body */}
                  <div className="chapter-card">
                    <div className="chapter-top-row">
                      <span className="chapter-number">{chapterId}.</span>
                      <h3 className="chapter-title">{chapter.title}</h3>
                    </div>
                    <div className="talapatra-ornament-divider" aria-hidden="true">
                      <span>─── ❖ ❈ ❖ ───</span>
                    </div>
                    <div className="chapter-info">
                      <p className="chapter-subtitle">{chapter.subtitle}</p>
                    </div>
                    <div className="chapter-meta">
                      <span className="conversation-count">
                        ❈ {chapter.dialogue?.length || 0} {t('conversations')} ❈
                      </span>
                    </div>
                  </div>

                  {/* Moving Right Ancient Scroll Roller (Rolls from Left to Right as Scroll Unfolds) */}
                  <span className="talapatra-roller talapatra-roller-right" aria-hidden="true"></span>
                </div>
              </Link>
            );
          })}
        </div>

        {chapterIds.length === 0 && (
          <div className="no-chapters">
            <p>{t('loading')}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ChaptersPage;