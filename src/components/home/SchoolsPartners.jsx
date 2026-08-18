import { useEffect, useMemo, useRef, useState } from 'react';
import AnchorLink from '../layout/AnchorLink';
import {
  IVORIAN_INSTITUTIONS,
  INSTITUTION_TYPES,
  INSTITUTION_CITIES,
  MESRS_GRANDES_ECOLES_URL,
} from '../../data/ivorianInstitutions';
import {
  SCHOOL_LEVELS,
  SCHOOL_CITIES,
  EDUCATION_LEVEL_TABS,
  MENA_SCHOOL_DIRECTORY_URL,
  DATA_GOUV_CI_URL,
  DATA_GOUV_CI_EDUCATION_URL,
  DATA_GOUV_CI_SECONDARY_SCHOOLS_URL,
  getSchoolListing,
  SCHOOL_SECTORS,
} from '../../data/ivorianSchools';
import {
  getCityGradient,
  getInstitutionInitials,
} from '../../utils/institutionVisuals';
import SchoolLevelLogo from './SchoolLevelLogo';

const PAGE_SIZE = 24;
const OTHER_LIST_PAGE_SIZE = 50;

function getSchoolTypeLabel(inst, isSuperieur) {
  if (isSuperieur) return INSTITUTION_TYPES[inst.type] || inst.type;

  if (inst.sector === 'prive') {
    if (inst.level === 'primaire') return 'École privée';
    if (inst.level === 'college') return 'Collège privé';
    if (inst.level === 'lycee') return 'Lycée privé';
  }
  if (inst.sector === 'catholique') {
    if (inst.level === 'primaire') return 'École catholique';
    if (inst.level === 'college') return 'Collège catholique';
    if (inst.level === 'lycee') return 'Lycée catholique';
  }
  if (inst.isExcellence) {
    if (inst.level === 'primaire') return 'École publique d\'excellence';
    if (inst.level === 'college') return 'Collège public d\'excellence';
    if (inst.level === 'lycee') return 'Lycée public d\'excellence';
    return 'École d\'excellence';
  }
  return SCHOOL_LEVELS[inst.level] || inst.level;
}

function getSchoolBadgeType(inst) {
  if (inst.sector) return inst.sector;
  if (inst.isExcellence) return 'excellence';
  return inst.type || inst.level;
}

const HIGHLIGHTS = [
  {
    icon: 'fas fa-exchange-alt',
    title: 'Orientation vers le supérieur',
    description: 'Plateforme officielle MESRS — offres des grandes écoles privées',
    href: MESRS_GRANDES_ECOLES_URL,
    external: true,
    cta: 'Voir sur bac.mesrs-ci.net',
  },
  {
    icon: 'fas fa-chalkboard-teacher',
    title: 'Toutes les filières',
    description: 'Primaire, collège, lycée et enseignement supérieur public en Côte d\'Ivoire',
    to: '/activites',
    external: false,
    cta: 'Nos activités d\'orientation',
  },
  {
    icon: 'fas fa-briefcase',
    title: 'Accompagnement RISO',
    description: 'Nos spécialistes vous aident à choisir l\'établissement adapté à votre projet',
    to: '/contact',
    external: false,
    cta: 'Nous contacter',
  },
];

function InstitutionPhoto({ institution }) {
  const [failed, setFailed] = useState(false);
  const isSchool = Boolean(institution.level);
  const src = institution.image;
  const isLogo = institution.visual === 'logo';

  if (isSchool) {
    return <SchoolLevelLogo school={institution} />;
  }

  if (src && !failed) {
    return (
      <img
        src={src}
        alt={`${institution.shortName} — ${institution.city}`}
        className={`institution-photo${isLogo ? ' institution-photo--logo' : ''}`}
        onError={() => setFailed(true)}
        loading="lazy"
      />
    );
  }

  return (
    <div
      className="institution-photo-fallback"
      style={{ background: getCityGradient(institution.city) }}
      aria-hidden="true"
    >
      <span className="institution-initials">{getInstitutionInitials(institution.shortName)}</span>
      <span className="institution-city-label">{institution.city}</span>
    </div>
  );
}

function HighlightCard({ item }) {
  const content = (
    <>
      <div className="highlight-icon">
        <i className={item.icon} />
      </div>
      <h4>{item.title}</h4>
      <p>{item.description}</p>
      <span className="highlight-cta">
        {item.cta}{' '}
        <i className={`fas fa-arrow-right${item.external ? ' fa-external-link-alt' : ''}`} />
      </span>
    </>
  );

  if (item.external) {
    return (
      <a
        href={item.href}
        target="_blank"
        rel="noopener noreferrer"
        className="highlight-item highlight-item-link"
      >
        {content}
      </a>
    );
  }

  return (
    <AnchorLink to={item.to} className="highlight-item highlight-item-link">
      {content}
    </AnchorLink>
  );
}

function InstitutionCard({ inst, typeLabel }) {
  const cardContent = (
    <>
      <div className={`institution-photo-wrap${inst.level ? ' institution-photo-wrap--school' : ''}`}>
        <InstitutionPhoto institution={inst} />
        {inst.url && (
          <div className="institution-photo-overlay">
            <span className="institution-visit">
              Visiter le site <i className="fas fa-external-link-alt" />
            </span>
          </div>
        )}
        <span className={`institution-type-badge type-${getSchoolBadgeType(inst)}`}>
          {typeLabel}
        </span>
      </div>
      <div className="institution-body">
        <h3>{inst.shortName}</h3>
        <p className="institution-name">{inst.name}</p>
        <div className="institution-location">
          <i className="fas fa-map-marker-alt" />
          <span>{inst.location ? `${inst.location}, ` : ''}{inst.city}</span>
        </div>
      </div>
    </>
  );

  if (!inst.url) {
    return (
      <div className="institution-card institution-card--static">
        {cardContent}
      </div>
    );
  }

  return (
    <a
      href={inst.url}
      target="_blank"
      rel="noopener noreferrer"
      className="institution-card"
    >
      {cardContent}
    </a>
  );
}

function getMoreSectorLabel(school) {
  if (school.sector === 'prive') return 'Privé';
  if (school.sector === 'catholique') return 'Catholique';
  return 'Public';
}

function SchoolMoreListItem({ school }) {
  return (
    <li className="schools-more-item">
      <SchoolLevelLogo school={school} variant="compact" />
      <div className="schools-more-item-main">
        <strong>{school.name}</strong>
        <span>
          <span className={`schools-more-badge schools-more-badge--${school.sector || 'public'}`}>
            {getMoreSectorLabel(school)}
          </span>
          {' · '}
          {school.location ? `${school.location}, ` : ''}{school.city}
        </span>
      </div>
      {school.url ? (
        <a
          href={school.url}
          target="_blank"
          rel="noopener noreferrer"
          className="schools-more-link"
        >
          Site officiel <i className="fas fa-external-link-alt" />
        </a>
      ) : (
        <span className="schools-more-no-link">Pas de site en ligne</span>
      )}
    </li>
  );
}

export default function SchoolsPartners() {
  const [levelTab, setLevelTab] = useState('superieur');
  const [search, setSearch] = useState('');
  const [typeFilter, setTypeFilter] = useState('all');
  const [cityFilter, setCityFilter] = useState('all');
  const [page, setPage] = useState(1);
  const [showMore, setShowMore] = useState(false);
  const [otherPage, setOtherPage] = useState(1);
  const [schoolSector, setSchoolSector] = useState('all');
  const moreListRef = useRef(null);
  const shouldScrollToMore = useRef(false);

  const handleSeeMoreClick = () => {
    if (showMore) {
      setShowMore(false);
      return;
    }
    shouldScrollToMore.current = true;
    setShowMore(true);
  };

  useEffect(() => {
    if (!showMore || !shouldScrollToMore.current) return;
    shouldScrollToMore.current = false;
    requestAnimationFrame(() => {
      moreListRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  }, [showMore]);

  useEffect(() => {
    setPage(1);
    setOtherPage(1);
    setSearch('');
    setTypeFilter('all');
    setCityFilter('all');
    setSchoolSector('all');
    setShowMore(false);
  }, [levelTab]);

  const isSuperieur = levelTab === 'superieur';
  const isSchoolLevel = !isSuperieur;

  const filterOpts = useMemo(
    () => ({
      search,
      city: cityFilter,
      sector: isSchoolLevel ? schoolSector : 'all',
    }),
    [search, cityFilter, schoolSector, isSchoolLevel],
  );

  const schoolListing = useMemo(() => {
    if (isSuperieur) return { grid: [], more: [], total: 0 };
    return getSchoolListing(levelTab, filterOpts);
  }, [isSuperieur, levelTab, filterOpts]);

  const filteredUniversities = useMemo(() => {
    if (!isSuperieur) return [];
    const query = search.trim().toLowerCase();
    return IVORIAN_INSTITUTIONS.filter((inst) => {
      const matchType = typeFilter === 'all' || inst.type === typeFilter;
      const matchCity = cityFilter === 'all' || inst.city === cityFilter;
      const matchSearch =
        !query ||
        inst.name.toLowerCase().includes(query) ||
        inst.shortName.toLowerCase().includes(query) ||
        inst.city.toLowerCase().includes(query) ||
        (inst.location && inst.location.toLowerCase().includes(query));
      return matchType && matchCity && matchSearch;
    });
  }, [search, typeFilter, cityFilter, isSuperieur]);

  const totalPages = isSuperieur
    ? Math.max(1, Math.ceil(filteredUniversities.length / PAGE_SIZE))
    : 1;
  const safePage = Math.min(page, totalPages);
  const paginated = isSuperieur
    ? filteredUniversities.slice((safePage - 1) * PAGE_SIZE, safePage * PAGE_SIZE)
    : schoolListing.grid;

  const moreSchools = schoolListing.more;
  const otherTotalPages = Math.max(1, Math.ceil(moreSchools.length / OTHER_LIST_PAGE_SIZE));
  const safeOtherPage = Math.min(otherPage, otherTotalPages);
  const paginatedOther = moreSchools.slice(
    (safeOtherPage - 1) * OTHER_LIST_PAGE_SIZE,
    safeOtherPage * OTHER_LIST_PAGE_SIZE,
  );

  const cities = isSuperieur ? INSTITUTION_CITIES : SCHOOL_CITIES;

  const levelSingular = {
    primaire: 'école primaire',
    college: 'collège',
    lycee: 'lycée',
  };

  const showMoreButton = isSchoolLevel && moreSchools.length > 0;

  return (
    <section id="ecoles-universites" className="schools-partners-section">
      <div className="container">
        <nav className="institutions-level-tabs" aria-label="Niveaux d'enseignement">
          {Object.entries(EDUCATION_LEVEL_TABS).map(([key, label]) => (
              <button
                key={key}
                type="button"
                className={`institutions-level-tab${levelTab === key ? ' is-active' : ''}`}
                onClick={() => setLevelTab(key)}
                aria-pressed={levelTab === key}
              >
                {label}
              </button>
            ))}
        </nav>

        <div id="annuaire" className="institutions-toolbar">
          <div className="institutions-search">
            <i className="fas fa-search" />
            <input
              type="search"
              placeholder={
                isSuperieur
                  ? 'Rechercher une université, une grande école, une ville...'
                  : `Rechercher un ${levelSingular[levelTab] || 'établissement'}, une ville...`
              }
              value={search}
              onChange={(e) => {
                setSearch(e.target.value);
                setPage(1);
                setOtherPage(1);
              }}
              aria-label="Rechercher un établissement"
            />
          </div>
          <div className="institutions-filters">
            {isSchoolLevel && (
              <select
                value={schoolSector}
                onChange={(e) => {
                  setSchoolSector(e.target.value);
                  setShowMore(false);
                  setOtherPage(1);
                }}
                aria-label="Filtrer par type d'établissement"
              >
                {Object.entries(SCHOOL_SECTORS).map(([value, label]) => (
                  <option key={value} value={value}>{label}</option>
                ))}
              </select>
            )}
            {isSuperieur && (
              <select
                value={typeFilter}
                onChange={(e) => {
                  setTypeFilter(e.target.value);
                  setPage(1);
                }}
                aria-label="Filtrer par type"
              >
                {Object.entries(INSTITUTION_TYPES).map(([value, label]) => (
                  <option key={value} value={value}>{label}</option>
                ))}
              </select>
            )}
            <select
              value={cityFilter}
              onChange={(e) => {
                setCityFilter(e.target.value);
                setPage(1);
                setOtherPage(1);
              }}
              aria-label="Filtrer par ville"
            >
              <option value="all">Toutes les villes</option>
              {cities.map((city) => (
                <option key={city} value={city}>{city}</option>
              ))}
            </select>
          </div>
        </div>

        {isSchoolLevel && (
          <div className="institutions-section-intro-row">
            <p className="institutions-section-intro">
              <i className="fas fa-school" />
              {' '}
              {SCHOOL_LEVELS[levelTab]} publics d&apos;excellence, privés et catholiques.
              {showMoreButton && (
                <> Pour plus d&apos;informations, cliquez sur « Voir plus ».</>
              )}
            </p>
            {showMoreButton && (
              <button
                type="button"
                className="btn btn-primary schools-see-more-btn"
                onClick={handleSeeMoreClick}
                aria-expanded={showMore}
                aria-controls="schools-more-list"
              >
                {showMore ? 'Masquer la liste' : 'Voir plus'}
                <i className={`fas fa-chevron-${showMore ? 'up' : 'down'}`} />
              </button>
            )}
          </div>
        )}

        <div className="institutions-grid">
          {paginated.map((inst) => (
            <InstitutionCard
              key={inst.id}
              inst={inst}
              typeLabel={getSchoolTypeLabel(inst, isSuperieur)}
            />
          ))}
        </div>

        {(isSuperieur ? filteredUniversities.length === 0 : schoolListing.total === 0) && (
          <p className="institutions-empty">Aucun établissement ne correspond à votre recherche.</p>
        )}

        {isSuperieur && totalPages > 1 && (
          <div className="institutions-pagination">
            <button
              type="button"
              className="btn btn-secondary btn-sm"
              disabled={safePage <= 1}
              onClick={() => setPage((p) => Math.max(1, p - 1))}
            >
              <i className="fas fa-chevron-left" /> Précédent
            </button>
            <span>{safePage} / {totalPages}</span>
            <button
              type="button"
              className="btn btn-secondary btn-sm"
              disabled={safePage >= totalPages}
              onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
            >
              Suivant <i className="fas fa-chevron-right" />
            </button>
          </div>
        )}

        {showMoreButton && showMore && (
          <div
            id="schools-more-list"
            ref={moreListRef}
            className="schools-see-more-block"
          >
            <div className="schools-more-panel">
                <h3 className="schools-more-title">
                  Liste complémentaire — {SCHOOL_LEVELS[levelTab]?.toLowerCase()}
                </h3>
                <p className="schools-more-desc">
                  Établissements publics, privés et catholiques. Le lien n&apos;apparaît
                  que si l&apos;établissement dispose d&apos;un site officiel.
                </p>
                {moreSchools.length === 0 ? (
                  <p className="institutions-empty">Aucun établissement ne correspond à votre recherche.</p>
                ) : (
                  <>
                    <ul className="schools-more-list">
                      {paginatedOther.map((school) => (
                        <SchoolMoreListItem key={school.id} school={school} />
                      ))}
                    </ul>
                    {otherTotalPages > 1 && (
                      <div className="institutions-pagination">
                        <button
                          type="button"
                          className="btn btn-secondary btn-sm"
                          disabled={safeOtherPage <= 1}
                          onClick={() => setOtherPage((p) => Math.max(1, p - 1))}
                        >
                          <i className="fas fa-chevron-left" /> Précédent
                        </button>
                        <span>{safeOtherPage} / {otherTotalPages}</span>
                        <button
                          type="button"
                          className="btn btn-secondary btn-sm"
                          disabled={safeOtherPage >= otherTotalPages}
                          onClick={() => setOtherPage((p) => Math.min(otherTotalPages, p + 1))}
                        >
                          Suivant <i className="fas fa-chevron-right" />
                        </button>
                      </div>
                    )}
                  </>
                )}
              </div>
          </div>
        )}

        {isSchoolLevel && (
          <div className="institutions-official-sources">
            <a
              href={MENA_SCHOOL_DIRECTORY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mesrs-banner mesrs-banner--after-grid mena-banner"
            >
              <div className="mesrs-banner-icon">
                <i className="fas fa-school" />
              </div>
              <div className="mesrs-banner-text">
                <span className="mesrs-banner-label">Annuaire officiel — MENA</span>
                <h3>Localiser un établissement sur la carte</h3>
                <p>
                  Recherche géographique des écoles publiques sur la plateforme du Ministère
                  de l&apos;Éducation Nationale et de l&apos;Alphabétisation.
                </p>
              </div>
              <span className="mesrs-banner-cta">
                education.gouv.ci <i className="fas fa-external-link-alt" />
              </span>
            </a>
            <a
              href={
                levelTab === 'primaire'
                  ? DATA_GOUV_CI_EDUCATION_URL
                  : DATA_GOUV_CI_SECONDARY_SCHOOLS_URL
              }
              target="_blank"
              rel="noopener noreferrer"
              className="mesrs-banner mesrs-banner--after-grid datagouv-banner"
            >
              <div className="mesrs-banner-icon">
                <i className="fas fa-database" />
              </div>
              <div className="mesrs-banner-text">
                <span className="mesrs-banner-label">Données ouvertes — data.gouv.ci</span>
                <h3>
                  {levelTab === 'primaire'
                    ? 'Statistiques et jeux de données Éducation'
                    : 'Liste des établissements secondaires (tableau)'}
                </h3>
                <p>
                  {levelTab === 'primaire'
                    ? 'Consultez les données publiques sur les infrastructures scolaires et les effectifs par région.'
                    : 'Plus de 1 400 établissements secondaires — consultables, filtrables et téléchargeables.'}
                </p>
              </div>
              <span className="mesrs-banner-cta">
                data.gouv.ci <i className="fas fa-external-link-alt" />
              </span>
            </a>
          </div>
        )}

        {isSuperieur && (
          <a
            href={MESRS_GRANDES_ECOLES_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mesrs-banner mesrs-banner--after-grid"
          >
            <div className="mesrs-banner-icon">
              <i className="fas fa-landmark" />
            </div>
            <div className="mesrs-banner-text">
              <span className="mesrs-banner-label">Grandes écoles privées — MESRS</span>
              <h3>Liste complète des établissements privés autorisés</h3>
              <p>
                Pour plus d&apos;informations sur les grandes écoles privées, filières et frais d&apos;inscription,
                consultez la plateforme officielle du Ministère.
              </p>
            </div>
            <span className="mesrs-banner-cta">
              bac.mesrs-ci.net/offres/grdes-ecoles <i className="fas fa-external-link-alt" />
            </span>
          </a>
        )}

        {isSchoolLevel && (
          <p className="institutions-mena-note">
            <i className="fas fa-info-circle" />
            {' '}
            Annuaires complets :{' '}
            <a href={MENA_SCHOOL_DIRECTORY_URL} target="_blank" rel="noopener noreferrer">MENA</a>
            {' '}·{' '}
            <a href={DATA_GOUV_CI_URL} target="_blank" rel="noopener noreferrer">data.gouv.ci</a>
          </p>
        )}

        <div className="partnership-highlights">
          {HIGHLIGHTS.map((item) => (
            <HighlightCard key={item.external ? item.href : item.to} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
