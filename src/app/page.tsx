import { CardsServices } from '@/components/CardsService';
import { CarouselBanner } from '@/components/Carrossel';
import Image from 'next/image';

export default function Home() {
  return (
    <main className="h-screen flex items-center justify-center flex-col gap-10">
      <CarouselBanner />
      <CardsServices />
      {/* <div>Texto</div> */}
    </main>
  );
}
