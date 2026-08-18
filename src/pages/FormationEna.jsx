import AnchorLink from '../components/layout/AnchorLink';
import ArticlePageHeader from '../components/layout/ArticlePageHeader';
import { FORMATION_ENA_IMAGES } from '../utils/formationImages';
import { getPageHeaderVisual } from '../utils/pageHeaderVisuals';

const FORMATION_PATH = "/images/events/formation a l'ena";

export default function FormationEna() {
  const header = getPageHeaderVisual('formationEna');

  return (
    <main className="article-main">
      <ArticlePageHeader
        backgroundImage={header.image}
        backgroundPosition={header.position}
        backgroundFit={header.fit}
      >
        <div className="article-breadcrumb">
          <AnchorLink to="/">Accueil</AnchorLink>
          {' > '}
          <AnchorLink to="/actualites#medias">Médias</AnchorLink>
          {' > Formation ENA'}
        </div>
        <h1 className="article-title-main">FORMATION À L&apos;ENA — SEPTEMBRE 2024</h1>
        <div className="article-meta">
          <span className="article-date"><i className="fas fa-calendar" /> Septembre 2024</span>
          <span className="article-location"><i className="fas fa-map-marker-alt" /> École Nationale d&apos;Administration</span>
        </div>
      </ArticlePageHeader>

      <div className="container">
        <div className="article-hero-image">
          <img src={`${FORMATION_PATH}/IMG-20250922-WA0009.jpg`} alt="Formation ENA - Septembre 2024" />
        </div>

        <article className="article-content-main">
          <div className="article-text">
            <p className="lead">
              Session de formation intensive à l&apos;École Nationale d&apos;Administration pour les spécialistes
              de l&apos;orientation. Une formation de haut niveau sur les nouvelles approches et méthodologies
              d&apos;orientation scolaire et professionnelle.
            </p>
            <p>
              Les participants ont bénéficié d&apos;ateliers pratiques, de mises en situation et de partages
              d&apos;expériences entre professionnels du secteur, renforçant ainsi les capacités du réseau RISO.
            </p>
          </div>

          <section className="article-gallery-section">
            <h2>Galerie Photos</h2>
            <div className="formation-gallery-grid">
              {FORMATION_ENA_IMAGES.map((imageName, index) => (
                <div key={imageName} className="gallery-item">
                  <img
                    src={`${FORMATION_PATH}/${imageName}`}
                    alt={`Formation ENA - Photo ${index + 1}`}
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </section>
        </article>

        <nav className="article-navigation">
          <AnchorLink to="/actualites#evenements" className="nav-back">
            <i className="fas fa-arrow-left" /> Retour aux événements
          </AnchorLink>
        </nav>
      </div>
    </main>
  );
}
