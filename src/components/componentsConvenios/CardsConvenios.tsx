'use client';

import { Convenio, ConveniosOrganizados } from '@/@types/Convenios';
import { api } from '@/service/axiosConfig';
import { useQuery } from '@tanstack/react-query';
import { Badge } from 'flowbite-react';
import { Card } from 'flowbite-react';
import { Skeleton } from '../componentsNoticias/Skeleton';

export const CardsConvenios = () => {
  const getDataNoticias = async (): Promise<
    ConveniosOrganizados | undefined
  > => {
    try {
      const data = await api.get('/convenios/ativos');
      const itens = data.data;

      const itensOrganizados: ConveniosOrganizados = {};
      itens.forEach((item: Convenio) => {
        const primeiraLetra = item.apelido.charAt(0).toUpperCase();
        if (!itensOrganizados[primeiraLetra]) {
          itensOrganizados[primeiraLetra] = [];
        }
        itensOrganizados[primeiraLetra].push(item);
      });

      return itensOrganizados;
    } catch (error) {
      console.error(error);
    }
  };
  const { isLoading, data } = useQuery({
    queryKey: ['convenios'],
    queryFn: () => getDataNoticias(),
  });
  return (
    <div className="flex flex-wrap gap-4 w-full justify-center">
      {!isLoading && data ? (
        <>
          {Object.entries(data).map(([letra, itens]) => (
            <Card
              className={`w-80 drop-shadow-xl shadow-lg shadow-secondary/25 bg-primary flex-grow`}
              key={letra}
            >
              <div className="flex flex-col align-top h-full ">
                <h5 className="text-xl font-bold leading-none text-gray-900 dark:text-white">
                  {letra}
                </h5>
                <div className="flow-root justify-start">
                  <ul className="divide-y divide-gray-200 dark:divide-gray-700">
                    {itens.map((item) => (
                      <li key={item.id} className="py-3 sm:py-4">
                        <div className="flex items-center space-x-4">
                          <p className="truncate text-sm font-medium text-gray-900 dark:text-white">
                            {item.apelido}
                          </p>
                          <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                            <Badge color="success">Ativo</Badge>
                          </div>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Card>
          ))}
        </>
      ) : (
        <div className="flex flex-wrap gap-4 w-full justify-center">
          <Skeleton />
          <Skeleton />
          <Skeleton />
        </div>
      )}
    </div>
  );
};
