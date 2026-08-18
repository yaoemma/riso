import AnchorLink from './AnchorLink';

export default function Navbar({ menuOpen, toggleMenu, closeMenu }) {
  return (
    <nav className="navbar-main">
      <div className="nav-container">
        <div className="nav-logo">
          <AnchorLink to="/" onClick={closeMenu} className="nav-logo-link">
            <picture>
              <source
                media="(max-width: 768px)"
                srcSet="/images/logo/logo-riso-icon-80.png"
              />
              <img
                src="/images/logo/logo-riso-navbar-112.png"
                alt="RISO — Réseau Ivoirien des Spécialistes de l'Orientation"
                className="logo-image"
                width={224}
                height={56}
              />
            </picture>
          </AnchorLink>
        </div>
        <ul className={`nav-menu${menuOpen ? ' active' : ''}`}>
          <li className="nav-item">
            <AnchorLink to="/" className="nav-link" onClick={closeMenu}>
              <i className="fas fa-home" /> Accueil
            </AnchorLink>
          </li>
          <li className="nav-divider" />
          <li className="nav-item dropdown">
            <AnchorLink to="/apropos" className="nav-link dropdown-toggle" onClick={closeMenu}>
              <i className="fas fa-users" /> Qui Sommes-nous <i className="fas fa-chevron-up" />
            </AnchorLink>
            <ul className="dropdown-menu">
              <li><AnchorLink to="/apropos" onClick={closeMenu}>À propos du RISO</AnchorLink></li>
              <li><AnchorLink to="/membres" onClick={closeMenu}>Nos Spécialistes</AnchorLink></li>
              <li><AnchorLink to="/histoire" onClick={closeMenu}>Notre Histoire</AnchorLink></li>
              <li><AnchorLink to="/valeurs" onClick={closeMenu}>Nos Valeurs</AnchorLink></li>
            </ul>
          </li>
          <li className="nav-divider" />
          <li className="nav-item dropdown">
            <AnchorLink to="/activites" className="nav-link dropdown-toggle" onClick={closeMenu}>
              <i className="fas fa-cogs" /> Nos Activités <i className="fas fa-chevron-up" />
            </AnchorLink>
            <ul className="dropdown-menu">
              <li><AnchorLink to="/ecoles-universites" onClick={closeMenu}>Écoles &amp; Universités CI</AnchorLink></li>
              <li><AnchorLink to="/activites#orientation-academique" onClick={closeMenu}>Orientation Académique</AnchorLink></li>
              <li><AnchorLink to="/activites#orientation-professionnelle" onClick={closeMenu}>Orientation Professionnelle</AnchorLink></li>
              <li><AnchorLink to="/activites#bilan-competences" onClick={closeMenu}>Bilan de Compétences</AnchorLink></li>
              <li><AnchorLink to="/activites#mentorat" onClick={closeMenu}>Mentorat</AnchorLink></li>
            </ul>
          </li>
          <li className="nav-divider" />
          <li className="nav-item dropdown">
            <AnchorLink to="/nos-services" className="nav-link dropdown-toggle" onClick={closeMenu}>
              <i className="fas fa-handshake" /> Nos Services <i className="fas fa-chevron-up" />
            </AnchorLink>
            <ul className="dropdown-menu">
              <li><AnchorLink to="/nos-services#mentorat" onClick={closeMenu}>Accompagnement Personnalisé</AnchorLink></li>
              <li><AnchorLink to="/nos-services#formation" onClick={closeMenu}>Formation</AnchorLink></li>
              <li><AnchorLink to="/nos-services#reseau" onClick={closeMenu}>Réseautage</AnchorLink></li>
            </ul>
          </li>
          <li className="nav-divider" />
          <li className="nav-item">
            <AnchorLink to="/forum" className="nav-link" onClick={closeMenu}>
              <i className="fas fa-comments" /> Forum d&apos;Échange
            </AnchorLink>
          </li>
          <li className="nav-divider" />
          <li className="nav-item dropdown">
            <AnchorLink to="/actualites" className="nav-link dropdown-toggle" onClick={closeMenu}>
              <i className="fas fa-newspaper" /> Actualités &amp; Médias <i className="fas fa-chevron-up" />
            </AnchorLink>
            <ul className="dropdown-menu">
              <li><AnchorLink to="/actualites#actualites" onClick={closeMenu}>Actualités</AnchorLink></li>
              <li><AnchorLink to="/actualites#evenements" onClick={closeMenu}>Événements</AnchorLink></li>
              <li><AnchorLink to="/histoire" onClick={closeMenu}>Notre Histoire</AnchorLink></li>
              <li><AnchorLink to="/actualites#medias" onClick={closeMenu}>Médias</AnchorLink></li>
            </ul>
          </li>
          <li className="nav-divider" />
        </ul>
        <button
          type="button"
          className={`hamburger${menuOpen ? ' active' : ''}`}
          onClick={toggleMenu}
          aria-label="Menu"
        >
          <span className="bar" />
          <span className="bar" />
          <span className="bar" />
        </button>
      </div>
    </nav>
  );
}
