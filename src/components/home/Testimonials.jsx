import { useCarousel } from '../../hooks/useCarousel';

const TESTIMONIALS = [
  {
    quote: "Grâce au RISO, j'ai pu identifier ma passion pour l'informatique et intégrer une excellente école d'ingénieurs. L'accompagnement était personnalisé et professionnel.",
    avatar: 'https://via.placeholder.com/60x60/2E78C0/FFFFFF?text=KS',
    avatarAlt: 'Kouassi Sarah',
    name: 'Kouassi Sarah',
    role: 'Étudiante en Informatique',
    school: "École Supérieure d'Informatique",
  },
  {
    quote: "L'accompagnement du RISO m'a permis de me reconvertir professionnellement avec succès. Le réseau est incroyable et les conseils très pertinents.",
    avatar: 'https://via.placeholder.com/60x60/F28B2E/FFFFFF?text=TM',
    avatarAlt: 'Traoré Mamadou',
    name: 'Traoré Mamadou',
    role: 'Chef de Projet',
    school: 'Entreprise Tech Solutions',
  },
  {
    quote: "Un réseau de professionnels exceptionnels qui m'ont guidé vers le bon choix d'études. Je recommande vivement le RISO à tous les jeunes.",
    avatar: 'https://via.placeholder.com/60x60/2E78C0/FFFFFF?text=DA',
    avatarAlt: 'Diabaté Aminata',
    name: 'Diabaté Aminata',
    role: 'Étudiante en Médecine',
    school: 'Université Félix Houphouët-Boigny',
  },
  {
    quote: "Le RISO m'a aidé à trouver ma voie dans le commerce international. L'équipe est à l'écoute et très compétente.",
    avatar: 'https://via.placeholder.com/60x60/F28B2E/FFFFFF?text=KB',
    avatarAlt: 'Koné Bakary',
    name: 'Koné Bakary',
    role: 'Étudiant en Commerce',
    school: 'École Supérieure de Commerce',
  },
  {
    quote: "J'étais découragée après mon BAC A2, ne sachant pas comment concrétiser mon rêve dans l'Hôtellerie. Grâce à l'orientation d'un Inspecteur du RISO, j'ai passé le concours d'enseignement professionnel et je réalise maintenant mes études de BTS Hôtellerie au Lycée Professionnel Mohamed VI de Yopougon. Merci infiniment pour cette orientation qui a transformé ma vie !",
    avatar: 'https://via.placeholder.com/60x60/2E78C0/FFFFFF?text=KD',
    avatarAlt: 'Kouadio Désiré',
    name: 'KOUADIO Désiré',
    role: 'Étudiante en BTS Hôtellerie',
    school: 'Lycée Professionnel Mohamed VI - Yopougon',
  },
];

function StarRating() {
  return (
    <div className="rating">
      <i className="fas fa-star" />
      <i className="fas fa-star" />
      <i className="fas fa-star" />
      <i className="fas fa-star" />
      <i className="fas fa-star" />
    </div>
  );
}

export default function Testimonials() {
  const { currentIndex, showItem, next, prev, pause, resume } = useCarousel(TESTIMONIALS.length, 5000);

  return (
    <section className="testimonials">
      <div className="container">
        <div className="testimonials-carousel">
          <div
            className="testimonials-track"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            onMouseEnter={pause}
            onMouseLeave={resume}
          >
            {TESTIMONIALS.map((testimonial, index) => (
              <div
                key={testimonial.name}
                className={`testimonial-card${index === currentIndex ? ' active' : ''}`}
              >
                <div className="testimonial-content">
                  <div className="quote-icon">
                    <i className="fas fa-quote-left" />
                  </div>
                  <p>&quot;{testimonial.quote}&quot;</p>
                  <StarRating />
                </div>
                <div className="testimonial-author">
                  <div className="author-avatar">
                    <img src={testimonial.avatar} alt={testimonial.avatarAlt} />
                  </div>
                  <div className="author-info">
                    <h4>{testimonial.name}</h4>
                    <span>{testimonial.role}</span>
                    <small>{testimonial.school}</small>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="carousel-controls">
            <button type="button" className="carousel-btn prev" onClick={prev}>
              <i className="fas fa-chevron-left" />
            </button>
            <div className="carousel-indicators">
              {TESTIMONIALS.map((_, index) => (
                <span
                  key={index}
                  className={`indicator${index === currentIndex ? ' active' : ''}`}
                  data-slide={index}
                  onClick={() => showItem(index)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') showItem(index);
                  }}
                />
              ))}
            </div>
            <button type="button" className="carousel-btn next" onClick={next}>
              <i className="fas fa-chevron-right" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
