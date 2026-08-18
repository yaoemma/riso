import { useScrollEffects } from '../hooks/useScrollEffects';
import PageHeader from '../components/layout/PageHeader';
import Contact from '../components/home/Contact';
import Partners from '../components/home/Partners';

export default function ContactPage() {
  useScrollEffects();

  return (
    <>
      <PageHeader
        title="Contact"
        subtitle="Rejoignez le réseau ou contactez-nous pour toute question"
        icon="fas fa-envelope"
      />
      <Contact />
      <Partners />
    </>
  );
}
