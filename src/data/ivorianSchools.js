import menaSecondary from './menaSecondarySchools.json';
import { EXCELLENCE_BY_LEVEL } from './excellenceSchools';
import {
  PRIVATE_PRIMARY_SCHOOLS,
  CATHOLIC_PRIMARY_SCHOOLS,
} from './primarySchools';
import {
  PRIVATE_BY_LEVEL,
  CATHOLIC_BY_LEVEL,
} from './secondarySchools';

export { SCHOOL_SECTORS } from './secondarySchools';

export const MENA_SCHOOL_DIRECTORY_URL = 'https://rea.mendob.ci/sygdob/public/schoollocation';

export const DATA_GOUV_CI_URL = 'https://data.gouv.ci/';
export const DATA_GOUV_CI_EDUCATION_URL = 'https://data.gouv.ci/datasets?category=Education';
export const DATA_GOUV_CI_SECONDARY_SCHOOLS_URL =
  'https://data.gouv.ci/applications/liste-detablissements-secondaires-en-cote-divoire-simple-table';

export const SCHOOL_LEVELS = {
  primaire: 'Écoles primaires',
  college: 'Collèges',
  lycee: 'Lycées',
};

export const EDUCATION_LEVEL_TABS = {
  superieur: 'Universités',
  primaire: 'Primaire',
  college: 'Collège',
  lycee: 'Lycée',
};

const SCHOOL_LEVEL_LIST = ['primaire', 'college', 'lycee'];

function titleCase(str) {
  return str
    .toLowerCase()
    .split(/\s+/)
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(' ');
}

function formatSchoolName(name) {
  const cleaned = name
    .replace(/COIIEGE/gi, 'Collège')
    .replace(/^COLLEGE MODERNE/i, 'Collège Moderne')
    .replace(/^LYCEE/i, 'Lycée')
    .replace(/\s+/g, ' ')
    .trim();
  if (/^(Collège|Lycée)/i.test(cleaned)) {
    return cleaned.replace(/^(Collège Moderne|Lycée)\s+/i, (m) => titleCase(m.trim()) + ' ');
  }
  return cleaned;
}

function formatShortName(name, level) {
  const formatted = formatSchoolName(name);
  if (level === 'primaire') {
    return formatted.replace(/^École Primaire Publique (de |d'|du |des )?/i, 'EP ').slice(0, 32);
  }
  if (level === 'college') {
    return formatted.replace(/^Collège (Moderne|Privé|Catholique) (de |d'|du |des )?/i, 'C. ').slice(0, 32);
  }
  if (level === 'lycee') {
    return formatted
      .replace(/^Lycée (Moderne|Municipal|Classique|Technique|d'Excellence|Privé|Catholique|Français|International) (de |d'|du |des )?/i, 'L. ')
      .slice(0, 32);
  }
  return formatted.slice(0, 32);
}

function mapExcellence(entry, level) {
  return {
    ...entry,
    level,
    sector: 'public',
    isExcellence: true,
    url: entry.url || null,
    source: 'mena-excellence',
  };
}

function mapSectorSchool(entry, level, sector) {
  return {
    ...entry,
    level,
    sector,
    isExcellence: false,
    url: entry.url || null,
    source: sector === 'prive' ? 'prive' : 'catholique',
  };
}

function isGarbageEntry(name) {
  const upper = name.toUpperCase();
  return (
    upper.startsWith('##')
    || upper.includes('LISTE DES')
    || name.length < 12
  );
}

function isExcellenceName(name) {
  return /excellence/i.test(name);
}

const OTHER_PRIMARY_SCHOOLS = [
  { id: 'ep-plateau-riviera', shortName: 'EP Riviera', name: 'École Primaire Publique de la Riviera', city: 'Abidjan', location: 'Cocody — Riviera' },
  { id: 'ep-cocody-angre', shortName: 'EP Angré', name: "École Primaire Publique d'Angré", city: 'Abidjan', location: 'Cocody — Angré' },
  { id: 'ep-yop-niangon', shortName: 'EP Niangon', name: 'École Primaire Publique de Niangon', city: 'Abidjan', location: 'Yopougon — Niangon' },
  { id: 'ep-abobo-sagbe', shortName: 'EP Sagbé', name: 'École Primaire Publique de Sagbé', city: 'Abidjan', location: 'Abobo — Sagbé' },
  { id: 'ep-plateau-centre', shortName: 'EP Plateau', name: 'École Primaire Publique du Plateau', city: 'Abidjan', location: 'Plateau' },
  { id: 'ep-bouake-centre', shortName: 'EP Bouaké', name: 'École Primaire Publique de Bouaké Centre', city: 'Bouaké', location: 'Bouaké' },
  { id: 'ep-daloa-commerce', shortName: 'EP Commerce', name: 'École Primaire Publique du Commerce', city: 'Daloa', location: 'Daloa' },
  { id: 'ep-korhogo-petitparis', shortName: 'EP Petit Paris', name: 'École Primaire Publique du Petit Paris', city: 'Korhogo', location: 'Korhogo' },
  { id: 'ep-man-gobroson', shortName: 'EP Gobroson', name: 'École Primaire Publique de Gobroson', city: 'Man', location: 'Man' },
  { id: 'ep-gagnoa', shortName: 'EP Gagnoa', name: 'École Primaire Publique de Gagnoa', city: 'Gagnoa', location: 'Gagnoa' },
  { id: 'ep-divo', shortName: 'EP Divo', name: 'École Primaire Publique de Divo', city: 'Divo', location: 'Divo' },
  { id: 'ep-grand-bassam', shortName: 'EP Bassam', name: 'École Primaire Publique de Grand-Bassam', city: 'Grand-Bassam', location: 'Grand-Bassam' },
];

function cleanOtherSchool(entry) {
  const name = formatSchoolName(entry.name);
  return {
    ...entry,
    name,
    shortName: formatShortName(name, entry.level),
    location: entry.location || entry.city,
    sector: 'public',
    isExcellence: false,
    url: null,
    source: 'mena-2011-2024',
  };
}

const excellenceNames = new Set(
  Object.values(EXCELLENCE_BY_LEVEL)
    .flat()
    .map((s) => s.name.toUpperCase()),
);

const otherSeen = new Set();
const OTHER_SCHOOLS = [];

menaSecondary.forEach((entry) => {
  if (isGarbageEntry(entry.name) || isExcellenceName(entry.name)) return;

  const school = cleanOtherSchool(entry);
  const key = school.name.toUpperCase();
  if (excellenceNames.has(key) || otherSeen.has(key)) return;

  otherSeen.add(key);
  OTHER_SCHOOLS.push(school);
});

OTHER_PRIMARY_SCHOOLS.forEach((entry) => {
  const school = cleanOtherSchool({ ...entry, level: 'primaire' });
  const key = school.name.toUpperCase();
  if (excellenceNames.has(key) || otherSeen.has(key)) return;
  otherSeen.add(key);
  OTHER_SCHOOLS.push(school);
});

const EXCELLENCE_SCHOOLS = Object.entries(EXCELLENCE_BY_LEVEL).flatMap(([level, list]) =>
  list.map((entry) => mapExcellence(entry, level)),
);

const PRIVATE_PRIMARY = PRIVATE_PRIMARY_SCHOOLS.map((e) => mapSectorSchool(e, 'primaire', 'prive'));
const CATHOLIC_PRIMARY = CATHOLIC_PRIMARY_SCHOOLS.map((e) => mapSectorSchool(e, 'primaire', 'catholique'));

const PRIVATE_SECONDARY = SCHOOL_LEVEL_LIST.flatMap((level) =>
  (PRIVATE_BY_LEVEL[level] || []).map((e) => mapSectorSchool(e, level, 'prive')),
);

const CATHOLIC_SECONDARY = SCHOOL_LEVEL_LIST.flatMap((level) =>
  (CATHOLIC_BY_LEVEL[level] || []).map((e) => mapSectorSchool(e, level, 'catholique')),
);

const IVORIAN_SCHOOLS = [
  ...EXCELLENCE_SCHOOLS,
  ...PRIVATE_PRIMARY,
  ...CATHOLIC_PRIMARY,
  ...PRIVATE_SECONDARY,
  ...CATHOLIC_SECONDARY,
  ...OTHER_SCHOOLS,
];

export const SCHOOL_CITIES = [
  ...new Set(IVORIAN_SCHOOLS.map((s) => s.city).filter(Boolean)),
].sort((a, b) => a.localeCompare(b, 'fr'));

function matchSchoolFilters(school, { search = '', city = 'all', sector = 'all' } = {}) {
  const query = search.trim().toLowerCase();
  if (city !== 'all' && school.city !== city) return false;
  if (sector !== 'all' && school.sector !== sector) return false;
  if (!query) return true;
  return (
    school.name.toLowerCase().includes(query)
    || school.shortName.toLowerCase().includes(query)
    || school.city.toLowerCase().includes(query)
    || (school.location && school.location.toLowerCase().includes(query))
  );
}

function getSectorSchoolsForLevel(level) {
  if (level === 'primaire') {
    return {
      public: EXCELLENCE_SCHOOLS.filter((s) => s.level === 'primaire'),
      prive: PRIVATE_PRIMARY,
      catholique: CATHOLIC_PRIMARY,
    };
  }
  return {
    public: EXCELLENCE_SCHOOLS.filter((s) => s.level === level),
    prive: PRIVATE_SECONDARY.filter((s) => s.level === level),
    catholique: CATHOLIC_SECONDARY.filter((s) => s.level === level),
  };
}

function getFeaturedSchools(level, options = {}) {
  const { sector = 'all' } = options;
  const pools = getSectorSchoolsForLevel(level);
  let list = [];

  if (sector === 'all' || sector === 'public') list = list.concat(pools.public);
  if (sector === 'all' || sector === 'prive') list = list.concat(pools.prive);
  if (sector === 'all' || sector === 'catholique') list = list.concat(pools.catholique);

  return list.filter((school) => matchSchoolFilters(school, options));
}

const GRID_DISPLAY_LIMIT = 10;

export function getSchoolListing(level, options = {}) {
  const featured = getFeaturedSchools(level, options);
  const featuredIds = new Set(featured.map((s) => s.id));
  const moreUnique = getMoreSchools(level, options).filter((s) => !featuredIds.has(s.id));
  const all = [...featured, ...moreUnique];

  return {
    grid: all.slice(0, GRID_DISPLAY_LIMIT),
    more: all.slice(GRID_DISPLAY_LIMIT),
    total: all.length,
  };
}

function getMoreSchools(level, options = {}) {
  const { sector = 'all' } = options;
  const pools = getSectorSchoolsForLevel(level);
  const publicOthers = OTHER_SCHOOLS.filter((s) => s.level === level);
  let list = [];

  if (sector === 'all' || sector === 'public') {
    list = list.concat(publicOthers);
  }
  if (sector === 'all' || sector === 'prive') {
    list = list.concat(pools.prive);
  }
  if (sector === 'all' || sector === 'catholique') {
    list = list.concat(pools.catholique);
  }

  return list.filter((school) => matchSchoolFilters(school, options));
}
