'use client';

import { useQuery } from '@tanstack/react-query';
import { api } from '@/service/axiosConfig';
import { Tooltip } from 'flowbite-react';

const getDataNoticias = async (): Promise<Noticias[] | undefined> => {
  try {
    const data = await api.get('/noticias/recentes-home/4');
    return data.data;
  } catch (error) {
    console.error(error);
  }
};

import { Card } from 'flowbite-react';
import { Suspense } from 'react';
import { Skeleton } from './Skeleton';
export const CardNoticias = () => {
  const { isLoading, data } = useQuery({
    queryKey: ['noticiasHome'],
    queryFn: () => getDataNoticias(),
  });

  return (
    <>
      {isLoading ? (
        <Skeleton />
      ) : (
        <div className="flex  items-stretch gap-4 ">
          {data?.map((noticia: Noticias) => (
            <Tooltip
              content={noticia.resumo}
              key={noticia.id}
              animation="duration-500"
            >
              <Card
                className="w-96 h-full drop-shadow-lg"
                renderImage={() => (
                  <Suspense
                    fallback={
                      <div className="w-96 h-80 animate-pulse bg-slate-600"></div>
                    }
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      loading="lazy"
                      src={`data:image/jpeg;base64,${noticia.imagem}`}
                      alt={noticia.titulo}
                      className="rounded-md w-96 h-60 object-fill"
                    />
                  </Suspense>
                )}
              >
                <h5 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                  {noticia.titulo}
                </h5>
                <p className="font-normal text-xs text-gray-700 dark:text-gray-400">
                  {new Date(noticia.dataCriacao).toLocaleDateString('pt-Br', {
                    dateStyle: 'long',
                  })}
                </p>
                {/* <p className="font-normal text-gray-700 dark:text-gray-400">
                {noticia.resumo}
              </p> */}
              </Card>
            </Tooltip>
          ))}
        </div>
      )}
    </>
  );
};
