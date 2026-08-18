import { useScrollEffects } from '../hooks/useScrollEffects';
import PageHeader from '../components/layout/PageHeader';
import History from '../components/home/History';

export default function HistoirePage() {
  useScrollEffects();

  return (
    <>
      <PageHeader
        title="Notre Histoire"
        subtitle="Le parcours et les publications du réseau RISO"
        icon="fas fa-book-open"
      />
      <History />
    </>
  );
}
