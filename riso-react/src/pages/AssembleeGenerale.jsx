import AnchorLink from '../components/layout/AnchorLink';
import ArticlePageHeader from '../components/layout/ArticlePageHeader';
import { getPageHeaderVisual } from '../utils/pageHeaderVisuals';

export default function AssembleeGenerale() {
  const header = getPageHeaderVisual('assembleeGenerale');

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
          {' > Assemblée Générale'}
        </div>
        <h1 className="article-title-main">NOTRE DERNIÈRE ASSEMBLÉE GÉNÉRALE</h1>
        <div className="article-meta">
          <span className="article-date"><i className="fas fa-calendar" /> 15 mars 2024</span>
          <span className="article-location"><i className="fas fa-map-marker-alt" /> Centre RISO, Abidjan</span>
        </div>
      </ArticlePageHeader>

      <div className="container">        <div className="article-hero-image">
          <img src="/images/events/ag.JPG" alt="Assemblée Générale RISO 2024" />
        </div>

        <article className="article-content-main">
          <div className="article-text">
            <p className="lead">
              Ce lundi 15 mars 2024, le Centre RISO à Abidjan a accueilli notre assemblée générale annuelle.
              Une activité importante qui rassemble tous les membres du réseau pour faire le bilan de l&apos;année
              écoulée et planifier l&apos;avenir de l&apos;orientation en Côte d&apos;Ivoire.
            </p>
            <p>
              L&apos;assemblée générale a été marquée par la présence de plus de 50 spécialistes de l&apos;orientation
              venus de toutes les régions du pays. Les discussions ont porté sur les défis actuels de l&apos;orientation
              scolaire et professionnelle, les nouvelles méthodes d&apos;accompagnement et les perspectives d&apos;évolution du secteur.
            </p>
            <p>
              Parmi les points forts de cette journée : la présentation du rapport d&apos;activités 2023,
              l&apos;élection du nouveau bureau exécutif, et l&apos;adoption du plan stratégique 2024-2026.
            </p>
          </div>

          <section className="article-gallery-section">
            <h2>Galerie Photos</h2>
            <div className="gallery-grid-large">
              {[1, 2, 3, 4, 5, 6].map((n) => (
                <img key={n} src={`/images/events/ag/ag-${n}.JPG`} alt={`Assemblée Générale - Photo ${n}`} />
              ))}
            </div>
          </section>
        </article>

        <nav className="article-navigation">
          <AnchorLink to="/actualites#evenements" className="nav-back">
            <i className="fas fa-arrow-left" /> Retour aux événements
          </AnchorLink>
          <AnchorLink to="/formation-esatic" className="nav-next">
            Formation ESATIC <i className="fas fa-arrow-right" />
          </AnchorLink>
        </nav>
      </div>
    </main>
  );
}
