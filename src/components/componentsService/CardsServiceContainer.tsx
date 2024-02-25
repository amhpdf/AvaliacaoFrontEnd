import { ArrayService } from '@/util/ArrayServices';
import { CardService } from './CardService';

export const CardsServicesContainer = () => {
  return (
    <div className="flex gap-2 flex-wrap h-96 w-full justify-center">
      {ArrayService.map((service) => (
        <CardService
          title={service.title}
          imageURL={service.imageURL}
          description={service.description}
          key={`${service.title}_${service.imageURL}`}
        />
      ))}
    </div>
  );
};
