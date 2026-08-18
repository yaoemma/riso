import { useScrollEffects } from '../hooks/useScrollEffects';
import PageHeader from '../components/layout/PageHeader';
import { getPageHeaderVisual } from '../utils/pageHeaderVisuals';
import Services from '../components/home/Services';

export default function ActivitesPage() {
  useScrollEffects();
  const headerVisual = getPageHeaderVisual('activites');

  return (
    <>
      <PageHeader
        title="Nos Activités"
        subtitle="Orientation académique, professionnelle et accompagnement personnalisé"
        icon="fas fa-cogs"
        backgroundImage={headerVisual.image}
        backgroundPosition={headerVisual.position}
      />
      <Services />
    </>
  );
}
