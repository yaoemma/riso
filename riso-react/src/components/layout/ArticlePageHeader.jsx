import {
  DEFAULT_PAGE_HEADER_BG,
  DEFAULT_PAGE_HEADER_POSITION,
} from '../../utils/pageHeaderVisuals';
import PageHeaderMedia from './PageHeaderMedia';

export default function ArticlePageHeader({
  children,
  backgroundImage = DEFAULT_PAGE_HEADER_BG,
  backgroundPosition = DEFAULT_PAGE_HEADER_POSITION,
  backgroundFit = 'cover',
  variant = '',
}) {
  const headerClass = variant
    ? `page-header page-header--article page-header--${variant}`
    : 'page-header page-header--article';

  return (
    <header className={headerClass}>
      <PageHeaderMedia
        backgroundImage={backgroundImage}
        backgroundPosition={backgroundPosition}
        backgroundFit={backgroundFit}
      />
      <div className="container page-header-inner">
        {children}
      </div>
    </header>
  );
}
