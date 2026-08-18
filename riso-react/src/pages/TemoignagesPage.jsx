import { useScrollEffects } from '../hooks/useScrollEffects';
import PageHeader from '../components/layout/PageHeader';
import Testimonials from '../components/home/Testimonials';

export default function TemoignagesPage() {
  useScrollEffects();

  return (
    <>
      <PageHeader
        title="Témoignages"
        subtitle="Ce que disent les jeunes et les spécialistes du réseau"
        icon="fas fa-quote-left"
      />
      <Testimonials />
    </>
  );
}
