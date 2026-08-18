export default function Partners() {
  return (
    <section className="partners-section">
      <div className="container">
        <div className="partners-content">
          <div className="partners-header">
            <h2 className="partners-title">Nos Partenaires</h2>
            <p className="partners-subtitle">Des institutions et organisations qui nous font confiance</p>
          </div>
          <div className="partners-grid">
            <div className="partner-card">
              <div className="partner-logo">
                <i className="fas fa-university" />
              </div>
              <h4>Ministère de l&apos;Éducation</h4>
              <p>Partenaire officiel pour l&apos;orientation scolaire</p>
            </div>
            <div className="partner-card">
              <div className="partner-logo">
                <i className="fas fa-building" />
              </div>
              <h4>Chambre de Commerce</h4>
              <p>Collaboration pour l&apos;insertion professionnelle</p>
            </div>
            <div className="partner-card">
              <div className="partner-logo">
                <i className="fas fa-graduation-cap" />
              </div>
              <h4>Universités Ivoiriennes</h4>
              <p>Partenariat académique et scientifique</p>
            </div>
            <div className="partner-card">
              <div className="partner-logo">
                <i className="fas fa-industry" />
              </div>
              <h4>Entreprises Locales</h4>
              <p>Stage et emploi pour nos jeunes</p>
            </div>
            <div className="partner-card">
              <div className="partner-logo">
                <img src="/images/schools/logos/ena.png" alt="Logo ENA" className="partner-logo-image" />
              </div>
              <h4>ENA</h4>
              <p>École Nationale d&apos;Administration - Formation des cadres</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
