import { useRef } from 'react';
import AnchorLink from '../layout/AnchorLink';
import { showNotification } from '../../utils/notifications';

export default function Contact() {
  const formRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = formRef.current;
    if (!form) return;

    const inputs = form.querySelectorAll('input, select, textarea');
    let isValid = true;

    inputs.forEach((input) => {
      if (!input.value.trim()) {
        isValid = false;
        input.style.borderColor = '#dc3545';
        input.style.boxShadow = '0 0 0 3px rgba(220, 53, 69, 0.1)';
      } else {
        input.style.borderColor = '#2E78C0';
        input.style.boxShadow = '0 0 0 3px rgba(46, 120, 192, 0.1)';
      }
    });

    if (isValid) {
      showNotification('Formulaire envoyé avec succès !', 'success');
      form.reset();
    } else {
      showNotification('Veuillez remplir tous les champs obligatoires.', 'error');
    }
  };

  return (
    <section id="contact" className="contact">
      <div className="container">
        <div className="contact-content">
          <div className="contact-info">
            <div className="contact-item">
              <i className="fas fa-envelope" />
              <div>
                <h4>Email</h4>
                <p>
                  <a href="mailto:riso-orientation.ci@gmail.com" className="contact-link">riso-orientation.ci@gmail.com</a>
                </p>
              </div>
            </div>
            <div className="contact-item">
              <i className="fas fa-phone" />
              <div>
                <h4>Téléphone</h4>
                <p>
                  <a href="tel:+225707298123" className="contact-link">+225 07 07 29 81 23</a><br />
                  <a href="tel:+225506493232" className="contact-link">+225 05 06 49 32 32</a>
                </p>
              </div>
            </div>
            <div className="contact-item">
              <i className="fab fa-whatsapp" />
              <div>
                <h4>WhatsApp</h4>
                <p>
                  <a href="https://wa.me/225707298123" target="_blank" rel="noreferrer" className="contact-link whatsapp-link">+225 07 07 29 81 23</a><br />
                  <a href="https://wa.me/225506493232" target="_blank" rel="noreferrer" className="contact-link whatsapp-link">+225 05 06 49 32 32</a>
                </p>
              </div>
            </div>
            <div className="contact-item">
              <i className="fas fa-map-marker-alt" />
              <div>
                <h4>Adresse</h4>
                <p>Plateau, Abidjan, Côte d&apos;Ivoire</p>
              </div>
            </div>
            <div className="contact-item">
              <i className="fas fa-clock" />
              <div>
                <h4>Horaires</h4>
                <p><strong>24h sur 24</strong> - Disponible tous les jours</p>
              </div>
            </div>
            <div className="contact-cta">
              <h4>Besoin d&apos;aide immédiate ?</h4>
              <p>Nos spécialistes sont disponibles pour répondre à vos questions</p>
              <AnchorLink to="/contact" className="btn btn-primary">Prendre RDV</AnchorLink>
            </div>
          </div>
          <form ref={formRef} className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <input type="text" placeholder="Votre nom complet" required />
            </div>
            <div className="form-group">
              <input type="email" placeholder="Votre email" required />
            </div>
            <div className="form-group">
              <select required defaultValue="">
                <option value="">Sélectionnez un service</option>
                <option value="orientation-academique">Orientation Académique</option>
                <option value="orientation-professionnelle">Orientation Professionnelle</option>
                <option value="bilan-competences">Bilan de Compétences</option>
                <option value="mentorat">Mentorat</option>
                <option value="adhesion">Adhésion au réseau</option>
              </select>
            </div>
            <div className="form-group">
              <textarea placeholder="Votre message" rows={5} required />
            </div>
            <button type="submit" className="btn btn-primary">Envoyer le message</button>
          </form>
        </div>
      </div>
    </section>
  );
}
