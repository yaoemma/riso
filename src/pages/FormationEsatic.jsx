import AnchorLink from '../components/layout/AnchorLink';
import ArticlePageHeader from '../components/layout/ArticlePageHeader';
import { getPageHeaderVisual } from '../utils/pageHeaderVisuals';

const AG_IMAGES = [
  '/images/events/ag/ag-1.JPG',
  '/images/events/ag/ag-2.JPG',
  '/images/events/ag/ag-3.JPG',
  '/images/events/ag/ag-4.JPG',
  '/images/events/ag/ag-5.JPG',
  '/images/events/ag/ag-6.JPG',
];

export default function FormationEsatic() {
  const header = getPageHeaderVisual('formationEsatic');

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
          {' > Formation ESATIC'}
        </div>
        <h1 className="article-title-main">FORMATION À L&apos;ESATIC</h1>
        <div className="article-meta">
          <span className="article-date"><i className="fas fa-calendar" /> 29 juin 2024</span>
          <span className="article-location"><i className="fas fa-map-marker-alt" /> ESATIC, Treichville, Abidjan</span>
        </div>
      </ArticlePageHeader>

      <div className="container">
        <article className="article-content-main">
          <div className="article-text">
            <p className="lead">
              Le RISO a organisé une session de formation à l&apos;École Supérieure Africaine des
              Technologies de l&apos;Information et de la Communication (ESATIC), à Treichville.
              Un moment d&apos;échange et de renforcement des capacités pour les spécialistes de
              l&apos;orientation du réseau.
            </p>
            <p>
              Cette formation s&apos;inscrit dans la dynamique du RISO de professionnaliser
              l&apos;accompagnement des jeunes vers les filières numériques, les métiers du
              numérique et les formations supérieures en technologies de l&apos;information.
            </p>

            <h3>Objectifs de la formation</h3>
            <ul>
              <li>Présenter les filières et parcours de l&apos;ESATIC aux conseillers d&apos;orientation</li>
              <li>Renforcer les compétences en orientation vers les métiers du numérique</li>
              <li>Partager les bonnes pratiques entre spécialistes du réseau RISO</li>
              <li>Encourager l&apos;insertion des jeunes dans les filières technologiques</li>
            </ul>

            <h3>Déroulement</h3>
            <p>
              Les participants ont bénéficié de présentations sur l&apos;offre de formation de
              l&apos;ESATIC, de visites des espaces pédagogiques et de séances d&apos;échanges
              avec les responsables de l&apos;établissement. La journée s&apos;est conclue par
              un bilan collectif et des perspectives pour l&apos;année à venir.
            </p>
          </div>

          <section className="article-gallery-section">
            <h2>Galerie Photos</h2>
            <div className="gallery-grid-large">
              {AG_IMAGES.map((src, index) => (
                <img key={src} src={src} alt={`Formation ESATIC - Photo ${index + 1}`} />
              ))}
            </div>
          </section>
        </article>

        <nav className="article-navigation">
          <AnchorLink to="/assemblee-generale" className="nav-back">
            <i className="fas fa-arrow-left" /> Assemblée Générale
          </AnchorLink>
          <AnchorLink to="/forum-emploi" className="nav-next">
            Forum Emploi <i className="fas fa-arrow-right" />
          </AnchorLink>
        </nav>
      </div>
    </main>
  );
}
