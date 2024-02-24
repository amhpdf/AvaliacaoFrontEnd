import { CardServices } from '@/@types/CardsServises';
import { Card } from 'flowbite-react';
import Image from 'next/image';

export const CardService: React.FC<CardServices> = ({
  title,
  description,
  imageURL,
}) => {
  return (
    <Card className="max-w-xs max-h-72 hover:scale-110 drop-shadow-xl hover:z-10 transition-transform">
      <div className="flex justify-end px-4 pt-4"></div>
      <div className="flex flex-col items-center pb-10 ">
        <div className="bg-white rounded-full h-24 flex pt-2 mb-2">
          <Image
            alt="Bonnie image"
            height="96"
            src={imageURL}
            width="96"
            className="mb-3 rounded-full shadow-lg bg-white"
          />
        </div>
        <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
          {title}
        </h5>
        <span className="text-sm text-gray-500 dark:text-gray-400">
          {description}
        </span>
      </div>
    </Card>
  );
};
