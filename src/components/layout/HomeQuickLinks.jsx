import AnchorLink from './AnchorLink';

const MAIN_LINKS = [
  { to: '/apropos', icon: 'fas fa-users', title: 'Qui Sommes-nous', desc: 'Mission, vision et objectifs du RISO' },
  { to: '/ecoles-universites', icon: 'fas fa-university', title: 'Écoles & Universités', desc: 'Primaire, collège, lycée et supérieur public' },
  { to: '/activites', icon: 'fas fa-cogs', title: 'Nos Activités', desc: 'Orientation académique et professionnelle' },
  { to: '/nos-services', icon: 'fas fa-handshake', title: 'Nos Services', desc: 'Accompagnement, formation et réseautage' },
  { to: '/actualites', icon: 'fas fa-newspaper', title: 'Actualités & Médias', desc: 'Événements, galerie et actualités' },
  { to: '/membres', icon: 'fas fa-user-tie', title: 'Nos Spécialistes', desc: 'L\'équipe d\'experts du réseau' },
  { to: '/forum', icon: 'fas fa-comments', title: 'Forum d\'Échange', desc: 'Posez vos questions à la communauté' },
  { to: '/contact', icon: 'fas fa-envelope', title: 'Contact', desc: 'Nous écrire et nous rejoindre' },
];

export default function HomeQuickLinks() {
  return (
    <section className="home-quick-links">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Explorez le RISO</h2>
          <p className="section-subtitle">Accédez directement aux sections qui vous intéressent</p>
        </div>
        <div className="quick-links-grid">
          {MAIN_LINKS.map((link) => (
            <AnchorLink key={link.to} to={link.to} className="quick-link-card">
              <div className="quick-link-icon">
                <i className={link.icon} />
              </div>
              <h3>{link.title}</h3>
              <p>{link.desc}</p>
              <span className="quick-link-arrow">
                Découvrir <i className="fas fa-arrow-right" />
              </span>
            </AnchorLink>
          ))}
        </div>
      </div>
    </section>
  );
}
