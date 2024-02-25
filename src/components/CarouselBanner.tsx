'use client';

import { Carousel } from 'flowbite-react';
import { useQuery } from '@tanstack/react-query';
import { api } from '@/service/axiosConfig';

const getDataBanner = async (): Promise<ImagensBanner[] | undefined> => {
  try {
    const data = await api.get('/banners/publicados');
    console.log(data.data);
    return data.data;
  } catch (error) {
    console.error(error);
  }
};
export const CarouselBanner = () => {
  const SkeletonBanner = () => (
    <div className="w-full h-32 md:h-96 2xl:h-3/4 bg-slate-600 animate-pulse"></div>
  );

  const isMobile = window?.innerWidth < 640;

  const { isLoading, data } = useQuery({
    queryKey: ['imagensBanner'],
    queryFn: () => getDataBanner(),
  });

  return (
    <div className="mt-5 md:mt-10 h-96 ">
      {isLoading ? (
        <SkeletonBanner />
      ) : (
        <Carousel draggable={false}>
          {data?.map((image: ImagensBanner) => (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              key={image.id}
              src={isMobile ? image.urlImagemMobile : image.urlImagemDesktop}
              alt={image.titulo}
              className="w-full"
            />
          ))}
        </Carousel>
      )}
    </div>
  );
};
