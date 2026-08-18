import {
  DEFAULT_PAGE_HEADER_BG,
  DEFAULT_PAGE_HEADER_POSITION,
} from '../../utils/pageHeaderVisuals';
import PageHeaderMedia from './PageHeaderMedia';

export default function PageHeader({
  title,
  subtitle,
  icon,
  backgroundImage = DEFAULT_PAGE_HEADER_BG,
  backgroundPosition = DEFAULT_PAGE_HEADER_POSITION,
  backgroundFit = 'cover',
  variant = '',
}) {
  const sectionClass = variant
    ? `page-header page-header--${variant}`
    : 'page-header';

  return (
    <section className={sectionClass}>
      <PageHeaderMedia
        backgroundImage={backgroundImage}
        backgroundPosition={backgroundPosition}
        backgroundFit={backgroundFit}
      />
      <div className="container page-header-inner">
        {icon && (
          <div className="page-header-icon">
            <i className={icon} />
          </div>
        )}
        <h1 className="page-header-title">{title}</h1>
        {subtitle && <p className="page-header-subtitle">{subtitle}</p>}
      </div>
    </section>
  );
}
