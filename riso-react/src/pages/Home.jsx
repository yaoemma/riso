import { useScrollEffects } from '../hooks/useScrollEffects';
import Hero from '../components/home/Hero';
import BacheliersFelicitation from '../components/home/BacheliersFelicitation';
import HomeQuickLinks from '../components/layout/HomeQuickLinks';

export default function Home() {
  useScrollEffects();

  return (
    <>
      <Hero />
      <BacheliersFelicitation />
      <HomeQuickLinks />
    </>
  );
}
