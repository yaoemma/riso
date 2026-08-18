import { useScrollEffects } from '../hooks/useScrollEffects';
import PageHeader from '../components/layout/PageHeader';
import Values from '../components/home/Values';

export default function ValeursPage() {
  useScrollEffects();

  return (
    <>
      <PageHeader
        title="Nos Valeurs"
        subtitle="Les principes qui guident notre action au quotidien"
        icon="fas fa-heart"
      />
      <Values />
    </>
  );
}
