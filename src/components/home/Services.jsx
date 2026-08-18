import AnchorLink from '../layout/AnchorLink';

export default function Services() {
  return (
    <section id="services" className="services">
      <div className="container">
        <div className="services-grid">
          <div id="orientation-academique" className="service-card">
            <div className="service-icon">
              <i className="fas fa-user-graduate" />
            </div>
            <div className="service-badge">Populaire</div>
            <h3>Orientation Académique</h3>
            <p>Accompagnement dans le choix des filières d&apos;études et des établissements d&apos;enseignement supérieur.</p>
            <div className="service-features">
              <span className="feature-tag">Études supérieures</span>
              <span className="feature-tag">Choix de filière</span>
              <span className="feature-tag">Admission</span>
            </div>
          </div>
          <div id="orientation-professionnelle" className="service-card">
            <div className="service-icon">
              <i className="fas fa-briefcase" />
            </div>
            <h3>Insertion Professionnelle</h3>
            <p>Accompagnement des étudiants vers l&apos;emploi et l&apos;entrepreneuriat.</p>
            <div className="service-features">
              <span className="feature-tag">Emploi</span>
              <span className="feature-tag">Entrepreneuriat</span>
              <span className="feature-tag">Carrière</span>
            </div>
          </div>
          <div id="bilan-competences" className="service-card">
            <div className="service-icon">
              <i className="fas fa-chart-line" />
            </div>
            <h3>Bilan de Compétences</h3>
            <p>Évaluation des compétences et identification des axes de développement professionnel.</p>
            <div className="service-features">
              <span className="feature-tag">Évaluation</span>
              <span className="feature-tag">Compétences</span>
              <span className="feature-tag">Développement</span>
            </div>
          </div>
          <div id="mentorat" className="service-card">
            <div className="service-icon">
              <i className="fas fa-users" />
            </div>
            <h3>Mentorat</h3>
            <p>Accompagnement personnalisé par des professionnels expérimentés du réseau.</p>
            <div className="service-features">
              <span className="feature-tag">Accompagnement</span>
              <span className="feature-tag">Personnalisé</span>
              <span className="feature-tag">Expertise</span>
            </div>
          </div>
          <div id="formation" className="service-card">
            <div className="service-icon">
              <i className="fas fa-calendar-alt" />
            </div>
            <h3>Ateliers &amp; Formations</h3>
            <p>Organisation d&apos;ateliers pratiques et de formations continues pour les spécialistes.</p>
            <div className="service-features">
              <span className="feature-tag">Formation</span>
              <span className="feature-tag">Ateliers</span>
              <span className="feature-tag">Pratique</span>
            </div>
          </div>
          <div id="reseau" className="service-card">
            <div className="service-icon">
              <i className="fas fa-handshake" />
            </div>
            <h3>Réseautage</h3>
            <p>Mise en relation avec des professionnels et opportunités de collaboration.</p>
            <div className="service-features">
              <span className="feature-tag">Réseau</span>
              <span className="feature-tag">Collaboration</span>
              <span className="feature-tag">Opportunités</span>
            </div>
          </div>
        </div>
        <div className="services-cta">
          <AnchorLink to="/contact" className="btn btn-primary">Nous Contacter</AnchorLink>
          <AnchorLink to="/apropos" className="btn btn-secondary">En Savoir Plus</AnchorLink>
        </div>

        <div className="service-details-section">
          <h3 className="details-title">
            <i className="fas fa-info-circle" /> Le Service d&apos;Orientation Scolaire et Professionnelle
          </h3>
          <p className="details-intro">
            Le service d&apos;orientation scolaire et professionnelle vise à aider les élèves et les étudiants à prendre des décisions éclairées concernant leur parcours scolaire et professionnel.
          </p>

          <div className="details-grid">
            <div className="details-card">
              <div className="details-icon">
                <i className="fas fa-flag" />
              </div>
              <h4>Missions</h4>
              <ul className="details-list">
                <li><i className="fas fa-chevron-right" /> Aider les élèves et les étudiants à découvrir leurs intérêts, leurs aptitudes et leurs valeurs</li>
                <li><i className="fas fa-chevron-right" /> Fournir des informations sur les différentes options scolaires et professionnelles</li>
                <li><i className="fas fa-chevron-right" /> Accompagner les élèves et les étudiants dans leur processus de prise de décision</li>
                <li><i className="fas fa-chevron-right" /> Favoriser l&apos;insertion professionnelle des élèves et des étudiants</li>
              </ul>
            </div>

            <div className="details-card">
              <div className="details-icon">
                <i className="fas fa-tasks" />
              </div>
              <h4>Activités</h4>
              <ul className="details-list">
                <li><i className="fas fa-chevron-right" /> Entretiens individuels avec les élèves et les étudiants pour discuter de leurs projets et aspirations</li>
                <li><i className="fas fa-chevron-right" /> Organisation de séances d&apos;information sur les différentes filières scolaires et professionnelles</li>
                <li><i className="fas fa-chevron-right" /> Utilisation de tests et d&apos;outils d&apos;évaluation pour aider les élèves et les étudiants à mieux se connaître</li>
                <li><i className="fas fa-chevron-right" /> Mise en relation avec des professionnels et des entreprises pour favoriser l&apos;insertion professionnelle</li>
                <li><i className="fas fa-chevron-right" /> Suivi des élèves et des étudiants après leur sortie de l&apos;établissement scolaire</li>
              </ul>
            </div>

            <div className="details-card">
              <div className="details-icon">
                <i className="fas fa-bullseye" />
              </div>
              <h4>Objectifs</h4>
              <ul className="details-list">
                <li><i className="fas fa-chevron-right" /> Aider les élèves et les étudiants à prendre des décisions éclairées concernant leur parcours scolaire et professionnel</li>
                <li><i className="fas fa-chevron-right" /> Favoriser l&apos;insertion professionnelle des élèves et des étudiants</li>
                <li><i className="fas fa-chevron-right" /> Réduire les risques de décrochage scolaire et d&apos;abandon des études</li>
                <li><i className="fas fa-chevron-right" /> Améliorer la réussite scolaire et professionnelle des élèves et des étudiants</li>
              </ul>
            </div>
          </div>

          <div className="service-conclusion">
            <p>
              <i className="fas fa-quote-left" /> Le service d&apos;orientation scolaire et professionnelle est essentiel pour aider les élèves et les étudiants à construire leur projet professionnel et à réussir leur insertion dans le monde du travail. <i className="fas fa-quote-right" />
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
