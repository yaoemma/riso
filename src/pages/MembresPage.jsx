import { useScrollEffects } from '../hooks/useScrollEffects';
import PageHeader from '../components/layout/PageHeader';
import Members from '../components/home/Members';

export default function MembresPage() {
  useScrollEffects();

  return (
    <>
      <PageHeader
        title="Nos Spécialistes"
        subtitle="Une équipe d'experts en orientation scolaire et professionnelle"
        icon="fas fa-user-tie"
      />
      <Members />
    </>
  );
}
