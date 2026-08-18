/** Images et cadrage pour les en-têtes de pages */
const FORMATION_ENA_PATH = "/images/events/formation a l'ena";

export const DEFAULT_PAGE_HEADER_BG = `${FORMATION_ENA_PATH}/IMG-20250922-WA0018.jpg`;
export const DEFAULT_PAGE_HEADER_POSITION = 'center 42%';

export const PAGE_HEADER_BACKGROUNDS = {
  default: DEFAULT_PAGE_HEADER_BG,
  apropos: DEFAULT_PAGE_HEADER_BG,
  membres: DEFAULT_PAGE_HEADER_BG,
  histoire: DEFAULT_PAGE_HEADER_BG,
  valeurs: DEFAULT_PAGE_HEADER_BG,
  activites: DEFAULT_PAGE_HEADER_BG,
  nosServices: DEFAULT_PAGE_HEADER_BG,
  actualites: DEFAULT_PAGE_HEADER_BG,
  contact: DEFAULT_PAGE_HEADER_BG,
  temoignages: DEFAULT_PAGE_HEADER_BG,
  forum: DEFAULT_PAGE_HEADER_BG,
  ecoles: '/images/schools/ecoles-universites-header.png',
  assembleeGenerale: '/images/events/ag.JPG',
  forumEmploi: DEFAULT_PAGE_HEADER_BG,
  formationEna: DEFAULT_PAGE_HEADER_BG,
  formationEsatic: '/images/events/ag/ag-2.JPG',
};

export const PAGE_HEADER_POSITIONS = {
  default: DEFAULT_PAGE_HEADER_POSITION,
  formationEsatic: 'center 18%',
  assembleeGenerale: 'center 35%',
};

export const PAGE_HEADER_FITS = {
  default: 'cover',
};

export function getPageHeaderVisual(key = 'default') {
  return {
    image: PAGE_HEADER_BACKGROUNDS[key] || PAGE_HEADER_BACKGROUNDS.default,
    position: PAGE_HEADER_POSITIONS[key] || DEFAULT_PAGE_HEADER_POSITION,
    fit: PAGE_HEADER_FITS[key] || PAGE_HEADER_FITS.default,
  };
}
