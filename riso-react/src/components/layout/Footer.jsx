import AnchorLink from './AnchorLink';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section footer-brand">
            <img
              src="/images/logo/logo-riso-transparent.png"
              alt="RISO — Réseau Ivoirien des Spécialistes de l'Orientation"
              className="footer-logo"
            />
            <p>Promouvoir l&apos;excellence en orientation scolaire et professionnelle</p>
          </div>
          <div className="footer-section">
            <h4>Services</h4>
            <ul>
              <li><AnchorLink to="/ecoles-universites">Écoles &amp; Universités</AnchorLink></li>
              <li><AnchorLink to="/activites#orientation-academique">Orientation Académique</AnchorLink></li>
              <li><AnchorLink to="/activites#orientation-professionnelle">Orientation Professionnelle</AnchorLink></li>
              <li><AnchorLink to="/activites#bilan-competences">Bilan de Compétences</AnchorLink></li>
              <li><AnchorLink to="/nos-services#mentorat">Mentorat</AnchorLink></li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>Réseau</h4>
            <ul>
              <li><AnchorLink to="/membres">Nos Spécialistes</AnchorLink></li>
              <li><AnchorLink to="/apropos">À propos</AnchorLink></li>
              <li><AnchorLink to="/contact">Contact</AnchorLink></li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>Suivez-nous</h4>
            <div className="social-links">
              <a href="https://www.facebook.com/share/1ASkyK6UmB/" target="_blank" rel="noreferrer"><i className="fab fa-facebook" /></a>
              <a href="https://whatsapp.com/channel/0029VacAT6D96H4Xi4HZMk00" target="_blank" rel="noreferrer"><i className="fab fa-whatsapp" /></a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2024 RISO - Réseau Ivoirien des Spécialistes de l&apos;Orientation. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
}
