import { useEffect, useState } from 'react';
import { useCarousel } from '../../hooks/useCarousel';

const MENDOB_PORTAL_URL = 'https://mendob-ci.org/';
const FLASH_ROTATION_MS = 8000;

const FLASH_MESSAGES = [
  "Rentrée scolaire 2026 : le 14 septembre — pensez dès maintenant à l'orientation de votre enfant.",
  {
    before: "Affectation en ligne pour l'entrée en 6ème : du 11 au 27 juillet 2026 — consultez les modalités sur ",
    linkLabel: 'mendob-ci.org',
    after: '.',
  },
  {
    before: "Orientation en Seconde : du 14 juillet à 12 h au lundi 27 juillet 2026 à minuit — rendez-vous sur ",
    linkLabel: 'mendob-ci.org',
    after: '.',
  },
];

function FlashMessageContent({ message }) {
  if (typeof message === 'string') {
    return message;
  }

  return (
    <>
      {message.before}
      <a href={MENDOB_PORTAL_URL} target="_blank" rel="noreferrer">
        {message.linkLabel}
      </a>
      {message.after}
    </>
  );
}

export default function InfoBar({ showFlash = true }) {
  const [hoverPauseEnabled, setHoverPauseEnabled] = useState(false);
  const { currentIndex, next, prev, pause, resume } = useCarousel(
    FLASH_MESSAGES.length,
    FLASH_ROTATION_MS,
  );

  useEffect(() => {
    const media = window.matchMedia('(hover: hover) and (pointer: fine)');
    const updateHoverPause = () => setHoverPauseEnabled(media.matches);
    updateHoverPause();
    media.addEventListener('change', updateHoverPause);
    return () => media.removeEventListener('change', updateHoverPause);
  }, []);

  const handleMouseEnter = hoverPauseEnabled ? pause : undefined;
  const handleMouseLeave = hoverPauseEnabled ? resume : undefined;

  return (    <div className="info-bar">
      <div className="info-container">
        {showFlash && (
          <div className="flash-info">
            <button type="button" className="flash-btn-cie" aria-label="Flash info">
              <i className="fas fa-bolt" /> <span>Flash info</span>
            </button>
            <div
              className="flash-content"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >              <button
                type="button"
                className="flash-nav flash-nav--prev"
                onClick={prev}
                aria-label="Message précédent"
              >
                <i className="fas fa-chevron-left" aria-hidden="true" />
              </button>

              <div className="flash-message-viewport">
                <p className="flash-text" key={currentIndex}>
                  <FlashMessageContent message={FLASH_MESSAGES[currentIndex]} />
                </p>
              </div>

              <button
                type="button"
                className="flash-nav flash-nav--next"
                onClick={next}
                aria-label="Message suivant"
              >
                <i className="fas fa-chevron-right" aria-hidden="true" />
              </button>

              <span className="flash-counter" aria-live="polite">
                {currentIndex + 1}/{FLASH_MESSAGES.length}
              </span>
            </div>
          </div>
        )}
        <div className="social-media">
          <a href="https://www.facebook.com/share/1ASkyK6UmB/" className="social-icon facebook" target="_blank" rel="noreferrer">
            <i className="fab fa-facebook-f" />
          </a>
          <a href="https://whatsapp.com/channel/0029VacAT6D96H4Xi4HZMk00" className="social-icon whatsapp" target="_blank" rel="noreferrer">
            <i className="fab fa-whatsapp" />
          </a>
        </div>
      </div>
    </div>
  );
}
