import { useScrollEffects } from '../hooks/useScrollEffects';
import PageHeader from '../components/layout/PageHeader';
import { getPageHeaderVisual } from '../utils/pageHeaderVisuals';
import MediaEvents from '../components/home/MediaEvents';

export default function ActualitesPage() {
  useScrollEffects();
  const headerVisual = getPageHeaderVisual('actualites');

  return (
    <>
      <PageHeader
        title="Actualités & Médias"
        subtitle="Événements, galerie photos et dernières actualités"
        icon="fas fa-newspaper"
        backgroundImage={headerVisual.image}
        backgroundPosition={headerVisual.position}
      />
      <MediaEvents />
    </>
  );
}
