import AnchorLink from '../layout/AnchorLink';

export default function BacheliersFelicitation() {
  return (
    <section className="home-announcement" aria-label="Félicitations aux nouveaux bacheliers">
      <div className="container">
        <div className="announcement-card">
          <div className="announcement-image-wrap">
            <img
              src="/images/home/felicitation-bacheliers-riso.png"
              alt="Félicitations aux nouveaux bacheliers"
              className="announcement-image"
              loading="lazy"
            />
            <span className="announcement-badge announcement-badge--felicitation">
              <i className="fas fa-graduation-cap" />
              Nouveaux bacheliers
            </span>
          </div>
          <div className="announcement-content">
            <h2>Félicitations aux nouveaux bacheliers !</h2>
            <p>
              Le RISO vous adresse toutes ses félicitations pour l&apos;obtention du baccalauréat.
              Nous sommes à vos côtés pour vous orienter vers les études supérieures et construire votre avenir.
            </p>
            <AnchorLink to="/ecoles-universites" className="btn btn-primary announcement-link">
              Découvrir les établissements
              <i className="fas fa-arrow-right" />
            </AnchorLink>
          </div>
        </div>
      </div>
    </section>
  );
}
