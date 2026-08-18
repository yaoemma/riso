import { useScrollEffects } from '../hooks/useScrollEffects';
import PageHeader from '../components/layout/PageHeader';
import Services from '../components/home/Services';

export default function NosServicesPage() {
  useScrollEffects();

  return (
    <>
      <PageHeader
        title="Nos Services"
        subtitle="Accompagnement, formation et réseautage pour votre réussite"
        icon="fas fa-handshake"
      />
      <Services />
    </>
  );
}
