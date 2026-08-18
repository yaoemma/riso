import { useScrollEffects } from '../hooks/useScrollEffects';
import PageHeader from '../components/layout/PageHeader';
import { getPageHeaderVisual } from '../utils/pageHeaderVisuals';
import SchoolsPartners from '../components/home/SchoolsPartners';

export default function EcolesUniversitesPage() {
  useScrollEffects();
  const headerVisual = getPageHeaderVisual('ecoles');

  return (
    <>
      <PageHeader
        title="Écoles & Universités"
        subtitle="Primaire, collège, lycée et enseignement supérieur public — trouvez un établissement en Côte d'Ivoire"
        icon="fas fa-university"
        backgroundImage={headerVisual.image}
        backgroundPosition={headerVisual.position}
        backgroundFit={headerVisual.fit}
      />
      <SchoolsPartners />
    </>
  );
}
