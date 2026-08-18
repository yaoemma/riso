import AnchorLink from '../components/layout/AnchorLink';
import ArticlePageHeader from '../components/layout/ArticlePageHeader';
import { getPageHeaderVisual } from '../utils/pageHeaderVisuals';

export default function ForumEmploi() {
  const header = getPageHeaderVisual('forumEmploi');

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
          <AnchorLink to="/actualites#evenements">Événements</AnchorLink>
          {' > Forum Emploi'}
        </div>
        <h1 className="article-title-main">FORUM EMPLOI &amp; ORIENTATION 2024</h1>
        <div className="article-meta">
          <span className="article-date"><i className="fas fa-calendar" /> 5-7 avril 2024</span>
          <span className="article-location"><i className="fas fa-map-marker-alt" /> Palais des Congrès, Abidjan</span>
        </div>
      </ArticlePageHeader>

      <div className="container">        <div className="article-hero-image">
          <div className="placeholder-event-image" style={{ minHeight: '300px' }}>
            <i className="fas fa-briefcase" />
            <p>Forum Emploi &amp; Orientation RISO</p>
          </div>
        </div>

        <article className="article-content-main">
          <div className="article-text">
            <p className="lead">
              Du 5 au 7 avril 2024 au Palais des Congrès d&apos;Abidjan, le RISO a organisé son premier forum emploi
              et orientation. Un événement majeur qui a rassemblé plus de 2000 visiteurs, 50 entreprises partenaires
              et 30 conseillers d&apos;orientation.
            </p>
            <p>
              Ce forum a permis aux jeunes diplômés et étudiants de rencontrer directement les employeurs,
              de découvrir les opportunités de carrière et de participer à des sessions de coaching personnalisé.
            </p>

            <h3>Statistiques du Forum</h3>
            <div className="stats-grid">
              <div className="stat-item"><h4>2000+</h4><p>Visiteurs</p></div>
              <div className="stat-item"><h4>50</h4><p>Entreprises</p></div>
              <div className="stat-item"><h4>300+</h4><p>Entretiens</p></div>
              <div className="stat-item"><h4>30</h4><p>Conseillers</p></div>
            </div>

            <h3>Programme du Forum</h3>
            <ul>
              <li><strong>Jour 1 :</strong> Ouverture officielle et conférences plénières</li>
              <li><strong>Jour 2 :</strong> Ateliers de coaching et entretiens d&apos;embauche</li>
              <li><strong>Jour 3 :</strong> Sessions de networking et clôture</li>
            </ul>
          </div>
        </article>

        <nav className="article-navigation">
          <AnchorLink to="/formation-esatic" className="nav-back">
            <i className="fas fa-arrow-left" /> Formation ESATIC
          </AnchorLink>
          <AnchorLink to="/formation-ena" className="nav-next">
            Formation ENA <i className="fas fa-arrow-right" />
          </AnchorLink>
        </nav>
      </div>
    </main>
  );
}
