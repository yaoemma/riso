import { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { useCarousel } from '../../hooks/useCarousel';

const FORMATION_PATH = "/images/events/formation a l'ena";

const MEDIA_ITEMS = [
  {
    type: 'video',
    title: 'Vidéo RISO',
    description: 'Votre vidéo personnalisée du réseau RISO',
    mediaType: 'Vidéo',
  },
  {
    type: 'image',
    src: `${FORMATION_PATH}/IMG-20250922-WA0020.jpg`,
    alt: 'Formation ENA - Session 6',
    title: 'Formation ENA',
    description: "Session de formation intensive à l'ENA",
    mediaType: 'Formation',
  },
  {
    type: 'image',
    src: `${FORMATION_PATH}/IMG-20250922-WA0009.jpg`,
    alt: 'Formation ENA - Session 1',
    title: 'Formation ENA',
    description: "Session de formation intensive à l'ENA",
    mediaType: 'Formation',
  },
  {
    type: 'image',
    src: `${FORMATION_PATH}/IMG-20250922-WA0011.jpg`,
    alt: 'Formation ENA - Session 2',
    title: 'Formation ENA',
    description: "Spécialistes de l'orientation en formation",
    mediaType: 'Formation',
  },
  {
    type: 'image',
    src: `${FORMATION_PATH}/IMG-20250922-WA0012.jpg`,
    alt: 'Formation ENA - Session 3',
    title: 'Formation ENA',
    description: "Ateliers pratiques d'orientation",
    mediaType: 'Formation',
  },
  {
    type: 'image',
    src: `${FORMATION_PATH}/IMG-20250922-WA0016.jpg`,
    alt: 'Formation ENA - Session 4',
    title: 'Formation ENA',
    description: "Échanges et partage d'expériences",
    mediaType: 'Formation',
  },
  {
    type: 'image',
    src: `${FORMATION_PATH}/IMG-20250922-WA0018.jpg`,
    alt: 'Formation ENA - Session 5',
    title: 'Formation ENA',
    description: 'Renforcement des capacités professionnelles',
    mediaType: 'Formation',
  },
];

export default function MediaEvents() {
  const [showMoreEvents, setShowMoreEvents] = useState(false);
  const event3Ref = useRef(null);
  const { currentIndex, showItem, next, prev, pause, resume } = useCarousel(MEDIA_ITEMS.length, 4000);

  const toggleEvents = () => {
    if (!showMoreEvents) {
      setShowMoreEvents(true);
      setTimeout(() => {
        event3Ref.current?.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      }, 100);
    } else {
      setShowMoreEvents(false);
    }
  };

  return (
    <section id="actualites" className="media-carousel-section">
      <div className="container">
        <div id="medias" className="media-carousel">
          <div
            className="media-track"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            onMouseEnter={pause}
            onMouseLeave={resume}
          >
            {MEDIA_ITEMS.map((item, index) => (
              <div
                key={index}
                className={`media-item${index === currentIndex ? ' active' : ''}`}
              >
                <div className="media-content">
                  {item.type === 'video' ? (
                    <video autoPlay muted loop playsInline preload="metadata" controls>
                      <source src="/images/carousel/video-riso.mp4" type="video/mp4" />
                      <source src="/images/carousel/video-riso.mp4" type="video/mp4; codecs='avc1.42E01E, mp4a.40.2'" />
                      Votre navigateur ne supporte pas la vidéo.
                    </video>
                  ) : (
                    <img src={item.src} alt={item.alt} />
                  )}
                  <div className="media-overlay">
                    <div className="media-info">
                      <h3>{item.title}</h3>
                      <p>{item.description}</p>
                      <span className="media-type">{item.mediaType}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="carousel-controls">
            <button type="button" className="carousel-btn prev" onClick={prev}>
              <i className="fas fa-chevron-left" />
            </button>
            <div className="carousel-indicators">
              {MEDIA_ITEMS.map((_, index) => (
                <span
                  key={index}
                  className={`indicator${index === currentIndex ? ' active' : ''}`}
                  data-slide={index}
                  onClick={() => showItem(index)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') showItem(index);
                  }}
                />
              ))}
            </div>
            <button type="button" className="carousel-btn next" onClick={next}>
              <i className="fas fa-chevron-right" />
            </button>
          </div>
        </div>

        <div id="evenements" className="events-articles-grid">
          <article className="event-article">
            <div className="article-image">
              <img src="/images/events/ag.JPG" alt="Assemblée Générale RISO 2024" />
            </div>
            <div className="article-content">
              <h3 className="article-title">NOTRE DERNIÈRE ASSEMBLÉE GÉNÉRALE</h3>
              <p className="article-excerpt">
                Ce lundi 15 mars 2024, le Centre RISO à Abidjan a accueilli notre assemblée générale annuelle. Une activité importante qui rassemble tous les membres du réseau...
              </p>
              <Link to="/assemblee-generale" className="read-more-btn">
                <i className="fas fa-arrow-right" />
                Lire plus
              </Link>
            </div>
          </article>

          <article className="event-article">
            <div className="article-image">
              <img src="/images/events/ag/ag-2.JPG" alt="Formation à l'ESATIC - RISO" />
            </div>
            <div className="article-content">
              <h3 className="article-title">FORMATION À L&apos;ESATIC</h3>
              <p className="article-excerpt">
                Le RISO a organisé une session de formation à l&apos;ESATIC de Treichville pour renforcer
                les compétences des spécialistes de l&apos;orientation vers les filières numériques et
                les métiers des technologies de l&apos;information...
              </p>
              <Link to="/formation-esatic" className="read-more-btn">
                <i className="fas fa-arrow-right" />
                Lire plus
              </Link>
            </div>
          </article>

          <article
            ref={event3Ref}
            className={`event-article hidden-event${showMoreEvents ? ' show' : ''}`}
            id="event3"
          >
            <div className="article-image">
              <div className="placeholder-event-image">
                <i className="fas fa-briefcase" />
                <p>Forum Emploi</p>
              </div>
            </div>
            <div className="article-content">
              <h3 className="article-title">FORUM EMPLOI &amp; ORIENTATION 2024</h3>
              <p className="article-excerpt">
                Du 5 au 7 avril 2024 au Palais des Congrès d&apos;Abidjan, le RISO a organisé son premier forum emploi et orientation. Un événement majeur qui a rassemblé employeurs, étudiants et conseillers...
              </p>
              <Link to="/forum-emploi" className="read-more-btn">
                <i className="fas fa-arrow-right" />
                Lire plus
              </Link>
            </div>
          </article>

          <article className={`event-article hidden-event${showMoreEvents ? ' show' : ''}`} id="event4">
            <div className="article-image">
              <img src={`${FORMATION_PATH}/IMG-20250922-WA0009.jpg`} alt="Formation ENA" />
            </div>
            <div className="article-content">
              <h3 className="article-title">FORMATION À L&apos;ENA - SEPTEMBRE 2024</h3>
              <p className="article-excerpt">
                Session de formation intensive à l&apos;École Nationale d&apos;Administration pour les spécialistes de l&apos;orientation. Une formation de haut niveau sur les nouvelles approches et méthodologies d&apos;orientation scolaire et professionnelle...
              </p>
              <Link to="/formation-ena" className="read-more-btn">
                <i className="fas fa-arrow-right" />
                Lire plus
              </Link>
            </div>
          </article>
        </div>
        <div className="events-cta">
          <button type="button" className="discover-articles-btn" onClick={toggleEvents}>
            {showMoreEvents ? "Voir moins d'événements" : 'Découvrez nos événements'}
          </button>
        </div>
      </div>
    </section>
  );
}
