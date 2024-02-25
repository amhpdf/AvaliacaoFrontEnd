// import { CardsServicesContainer } from '@/components/componentsService/CardsServiceContainer';
// import { CarouselBanner } from '@/components/Carrossel';
// import { ServiceContainer } from '@/components/componentsService/ServiceConatiner';
// import Image from 'next/image';
// import { NoticiasContainer } from '@/components/componentsNoticias/NoticiasContainer';

// export default function Home() {
//   return (
//     <main className="h-screen flex items-center justify-center flex-col ">
//       <div className="flex flex-col w-full gap-y-96">
//         <div className="basis-1/2 mb-96">
//           <CarouselBanner />
//         </div>
//         <div className="basis-1/2 w-full mt-96">
//           <ServiceContainer />
//         </div>
//       </div>
//       <div className="basis-1/2 w-full mt-24 mb-96">
//         <NoticiasContainer />
//       </div>
//     </main>
//   );
// }

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
