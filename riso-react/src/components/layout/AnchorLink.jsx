import { Link } from 'react-router-dom';

export default function AnchorLink({ to, className, children, onClick, ...rest }) {
  if (to.startsWith('http') || to.startsWith('mailto:') || to.startsWith('tel:')) {
    return (
      <a href={to} className={className} onClick={onClick} {...rest}>
        {children}
      </a>
    );
  }

  if (to.startsWith('#')) {
    return (
      <Link to={`/${to}`} className={className} onClick={onClick} {...rest}>
        {children}
      </Link>
    );
  }

  return (
    <Link to={to} className={className} onClick={onClick} {...rest}>
      {children}
    </Link>
  );
}
