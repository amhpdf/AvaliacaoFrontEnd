import { Card } from 'flowbite-react';
import Image from 'next/image';

export const CardsServices = () => {
  return (
    <div className="flex gap-2 mt-96">
      <Card className="max-w-sm">
        <div className="flex justify-end px-4 pt-4"></div>
        <div className="flex flex-col items-center pb-10">
          <Image
            alt="Bonnie image"
            height="96"
            src="/imagens/pes.jpg"
            width="96"
            className="mb-3 rounded-full shadow-lg bg-white"
          />
          <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
            Encontre Seu Médico
          </h5>
          <span className="text-sm text-gray-500 dark:text-gray-400">
            Site de busca de profissionais da saúde desenvolvido pela AMHP para
            divulgação de seus Associados para toda a população do DF (convênios
            e particulares).{' '}
          </span>
        </div>
      </Card>
      <Card className="max-w-sm">
        <div className="flex justify-end px-4 pt-4"></div>
        <div className="flex flex-col items-center pb-10">
          <Image
            alt="Bonnie image"
            height="96"
            src="/imagens/fat.jpg"
            width="96"
            className="mb-3 rounded-full shadow-lg bg-white"
          />
          <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
            AMHPTISS
          </h5>
          <span className="text-sm text-gray-500 dark:text-gray-400">
            Sistema próprio de faturamento, o AMHPTISS – que contempla todas as
            determinações da Agência Nacional de Saúde Suplementar (ANS) e as
            exigências contratuais de cada Operadora de Plano de Saúde.
          </span>
        </div>
      </Card>
      <Card className="max-w-sm">
        <div className="flex justify-end px-4 pt-4"></div>
        <div className="flex flex-col items-center pb-10">
          <div className="bg-white rounded-full h-24 flex pt-2 mb-2">
            <Image
              alt="Bonnie image"
              height="96"
              src="/imagens/med.png"
              width="96"
              // fill
              style={{ objectFit: 'contain' }}
              className="mb-3 rounded-full shadow-lg bg-white"
            />
          </div>
          <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
            Clique Médico
          </h5>
          <span className="text-sm text-gray-500 dark:text-gray-400">
            Plataforma e-commerce desenvolvida e administrada pela AMHP, e visa
            ampliar os atendimentos da sua clínica: Disponibiliza consultas,
            exames e procedimentos.
          </span>
        </div>
      </Card>
      <Card className="max-w-sm">
        <div className="flex justify-end px-4 pt-4"></div>
        <div className="flex flex-col items-center pb-10">
          <div className="bg-white rounded-full h-24 flex pt-2 mb-2">
            <Image
              alt="Bonnie image"
              height="96"
              src="/imagens/tel.png"
              width="96"
              // fill
              style={{ objectFit: 'contain' }}
              className="mb-3 rounded-full shadow-lg bg-white"
            />
          </div>
          <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
            Marque Aqui
          </h5>
          <span className="text-sm text-gray-500 dark:text-gray-400">
            Central de Marcação de consultas e exames que facilita e agiliza o
            acesso aos consultórios e clínicas associadas.
          </span>
        </div>
      </Card>
    </div>
  );
};
