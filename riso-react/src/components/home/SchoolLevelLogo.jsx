import { getSchoolInitials, getSchoolLogoColors } from '../../utils/schoolVisuals';

export default function SchoolLevelLogo({ school, variant = 'card' }) {
  const colors = getSchoolLogoColors(school);
  const initials = getSchoolInitials(school);
  const levelIcon = colors.icon || 'fa-school';
  const levelLabel = colors.label;
  const isCompact = variant === 'compact';

  const style = {
    '--school-main': colors.main,
    '--school-dark': colors.dark || colors.main,
    '--school-light': colors.light,
  };

  if (isCompact) {
    return (
      <div
        className="school-level-visual school-level-visual--compact"
        style={style}
        aria-hidden="true"
      >
        <span className="school-level-visual-initials">{initials}</span>
      </div>
    );
  }

  return (
    <div
      className={`school-level-visual school-level-visual--card school-level-visual--${school.level || 'college'}`}
      style={style}
      aria-hidden="true"
    >
      <div className="school-level-visual-pattern" />
      <div className="school-level-visual-content">
        <span className="school-level-visual-chip">
          <i className={`fas ${levelIcon}`} />
          {levelLabel}
        </span>
        <span className="school-level-visual-initials">{initials}</span>
        <span className="school-level-visual-city">{school.city}</span>
      </div>
    </div>
  );
}
