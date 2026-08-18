const SPECIALIST_PROFILES = [
  {
    icon: 'fas fa-user-tie',
    badge: 'Réseau',
    name: 'Directeurs de CIO',
    title: 'Centres d\'Information et d\'Orientation',
    description: 'Professionnels en charge de l\'information et de l\'orientation dans les centres spécialisés.',
    tags: ['CIO', 'Information', 'Orientation'],
  },
  {
    icon: 'fas fa-graduation-cap',
    badge: 'Recherche',
    name: 'Chercheurs OSP',
    title: 'Orientation scolaire et professionnelle',
    description: 'Experts en recherche et en innovation autour des pratiques d\'orientation.',
    tags: ['Recherche', 'OSP', 'Expertise'],
  },
  {
    icon: 'fas fa-chalkboard-teacher',
    badge: 'Éducation',
    name: 'Inspecteurs d\'Orientation',
    title: 'MENA · METFPA · MESRS',
    description: 'Spécialistes de l\'orientation au service des ministères de l\'Éducation-Formation.',
    tags: ['MENA', 'METFPA', 'MESRS'],
  },
  {
    icon: 'fas fa-building',
    badge: 'Administration',
    name: 'Inspecteurs interministériels',
    title: 'Secteurs publics divers',
    description: 'Professionnels de l\'orientation exerçant dans les ministères hors secteur Éducation-Formation.',
    tags: ['Public', 'Orientation', 'Conseil'],
  },
  {
    icon: 'fas fa-briefcase',
    badge: 'Emploi',
    name: 'Conseillers en emploi',
    title: 'CIERPA · AEJ · AGEFOP · FDFP',
    description: 'Diplômés du CIERPA accompagnant l\'insertion professionnelle dans le public et le privé.',
    tags: ['Emploi', 'CIERPA', 'Insertion'],
  },
];

export default function Members() {
  return (
    <section id="membres" className="members">
      <div className="container">
        <div className="members-grid">
          <div className="member-card member-card--president">
            <div className="member-avatar">
              <img
                src="/images/image du president/PHOTO OFFICIELLE ZAO.jpg"
                alt="YAO Amani Olivier"
              />
            </div>
            <div className="member-badge">Président</div>
            <h3>YAO Amani Olivier</h3>
            <p className="member-title">Président du RISO</p>
            <p>Responsable du réseau ivoirien des spécialistes de l&apos;orientation pour la mandature 2024-2027.</p>
            <div className="member-expertise">
              <span className="expertise-tag">Leadership</span>
              <span className="expertise-tag">Orientation</span>
              <span className="expertise-tag">Réseau RISO</span>
            </div>
          </div>

          {SPECIALIST_PROFILES.map((profile) => (
            <div key={profile.name} className="member-card">
              <div className="member-avatar">
                <i className={profile.icon} />
              </div>
              <div className="member-badge">{profile.badge}</div>
              <h3>{profile.name}</h3>
              <p className="member-title">{profile.title}</p>
              <p>{profile.description}</p>
              <div className="member-expertise">
                {profile.tags.map((tag) => (
                  <span key={tag} className="expertise-tag">{tag}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
