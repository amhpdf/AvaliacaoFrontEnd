import { CardsServicesContainer } from '@/components/componentsService/CardsServiceContainer';
import { CarouselBanner } from '@/components/CarouselBanner';
import { ServiceContainer } from '@/components/componentsService/ServiceConatiner';
import Image from 'next/image';
import { NoticiasContainer } from '@/components/componentsNoticias/NoticiasContainer';

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col justify-between">
      <CarouselBanner />
      <NoticiasContainer />
      <ServiceContainer />
    </main>
  );
}
