'use client';

import { Carousel } from 'flowbite-react';
import { useQuery } from '@tanstack/react-query';
import { api } from '@/service/axiosConfig';

export const CarouselBanner = () => {
  const getDataBanner = async (): Promise<ImagensBanner[] | undefined> => {
    try {
      const data = await api.get('/banners/publicados');
      return data.data;
    } catch (error) {
      console.error(error);
    }
  };

  const SkeletonBanner = () => (
    <div className="w-full h-32 md:h-96 2xl:h-3/4 bg-slate-600 animate-pulse absolute inset-x-0 top-2"></div>
  );

  const { isLoading, data } = useQuery({
    queryKey: ['imagensBanner'],
    queryFn: () => getDataBanner(),
  });

  return (
    <div className='mb-60'>
      <div className="w-full h-28 md:h-96 2xl:h-1/2 absolute inset-x-0 top-14 md:top-0 lg:top-16">
        {isLoading ? (
          <SkeletonBanner />
        ) : (
          <Carousel draggable={false}>
            {data?.map((image: ImagensBanner) => (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                key={image.id}
                src={image.urlImagemDesktop}
                alt={image.titulo}
                className="w-full"
              />
            ))}
          </Carousel>
        )}
      </div>
    </div>
  );
};
