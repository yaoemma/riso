import AnchorLink from '../layout/AnchorLink';

export default function Hero() {
  return (
    <section id="accueil" className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <div className="hero-badge">
            <i className="fas fa-star" />
            <span>Réseau Certifié</span>
          </div>
          <h1 className="hero-title">
            Réseau Ivoirien des Spécialistes de l&apos;Orientation
          </h1>
          <p className="hero-subtitle">
            Accompagner les jeunes ivoiriens dans leur parcours professionnel et académique avec expertise et bienveillance
          </p>

          <div className="president-welcome">
            <div className="welcome-content">
              <div className="president-photo">
                <img
                  src="/images/image du president/PHOTO OFFICIELLE ZAO.jpg"
                  alt="YAO Amani Olivier - Président du RISO"
                  className="president-image"
                />
              </div>
              <div className="welcome-text">
                <div className="welcome-icon">
                  <i className="fas fa-quote-left" />
                </div>
                <p className="welcome-message">
                  &quot;Le Président du RISO, Monsieur YAO Amani Olivier, vous souhaite la bienvenue !&quot;
                </p>
                <div className="president-signature">
                  <span className="president-name">YAO Amani Olivier</span>
                  <span className="president-title">Président du RISO</span>
                </div>
              </div>
            </div>
          </div>
          <div className="hero-stats">
            <div className="hero-stat">
              <span className="stat-number">50+</span>
              <span className="stat-label">Spécialistes</span>
            </div>
            <div className="hero-stat">
              <span className="stat-number">1000+</span>
              <span className="stat-label">Jeunes accompagnés</span>
            </div>
            <div className="hero-stat">
              <span className="stat-number">10+</span>
              <span className="stat-label">Années d&apos;expérience</span>
            </div>
          </div>
          <div className="hero-buttons">
            <AnchorLink to="/activites" className="btn btn-primary">
              Découvrir nos activités
            </AnchorLink>
            <AnchorLink to="/contact" className="btn btn-secondary">
              Rejoindre le réseau
            </AnchorLink>
          </div>
        </div>
        <div className="hero-image">
          <img
            src="/images/carousel/IMG-20250922-WA0027.jpg"
            alt="Le réseau RISO en action"
            className="hero-photo"
          />
        </div>
      </div>
    </section>
  );
}
