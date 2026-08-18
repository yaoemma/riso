const LEVEL_LOGO_COLORS = {
  primaire: { main: '#2d6a4f', dark: '#1b4332', light: '#d8f3dc', label: 'Primaire', icon: 'fa-pencil-alt' },
  college: { main: '#6f42c1', dark: '#5a189a', light: '#e0cffc', label: 'Collège', icon: 'fa-school' },
  lycee: { main: '#c1121f', dark: '#9d0208', light: '#ffccd5', label: 'Lycée', icon: 'fa-graduation-cap' },
};

const SECTOR_COLORS = {
  public: { main: '#2d6a4f', dark: '#1b4332', light: '#d8f3dc', label: 'Public', icon: 'fa-landmark' },
  prive: { main: '#1a5276', dark: '#0d3352', light: '#d6eaf8', label: 'Privé', icon: 'fa-building' },
  catholique: { main: '#7b2cbf', dark: '#5a189a', light: '#e0cffc', label: 'Catholique', icon: 'fa-church' },
};

const EXCELLENCE_COLORS = {
  main: '#e85d04',
  dark: '#bc4749',
  light: '#ffecd1',
  label: 'Excellence',
  icon: 'fa-star',
};

export function getSchoolLogoColors(school) {
  if (school.isExcellence) {
    return EXCELLENCE_COLORS;
  }
  if (school.sector === 'prive' || school.sector === 'catholique') {
    return SECTOR_COLORS[school.sector];
  }
  return LEVEL_LOGO_COLORS[school.level] || LEVEL_LOGO_COLORS.college;
}

export function getSchoolInitials(school) {
  const raw = school.shortName || school.name || '?';
  const cleaned = String(raw).replace(/…$/, '').trim();
  if (cleaned.length <= 6 && !cleaned.includes(' ')) {
    return cleaned.toUpperCase();
  }
  const words = cleaned.split(/\s+/).filter(Boolean);
  if (words.length >= 2) {
    return words.slice(0, 3).map((w) => w[0]).join('').toUpperCase();
  }
  return cleaned.slice(0, 4).toUpperCase();
}
