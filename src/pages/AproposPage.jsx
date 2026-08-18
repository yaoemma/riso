import { useScrollEffects } from '../hooks/useScrollEffects';
import PageHeader from '../components/layout/PageHeader';
import About from '../components/home/About';

export default function AproposPage() {
  useScrollEffects();

  return (
    <>
      <PageHeader
        title="À propos du RISO"
        subtitle="Découvrez notre mission, notre vision et nos objectifs"
        icon="fas fa-users"
      />
      <About />
    </>
  );
}
