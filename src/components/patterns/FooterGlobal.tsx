'use client';
import Image from 'next/image';

export const FooterGlobal = () => {
  return (
    <footer
      className="text-gray-500 bg-slate-200 px-4 py-5 w-full
    mx-auto md:px-8 mt-96"
    >
      <div className="max-w-lg sm:mx-auto sm:text-center mt-72">
        <div className="mt-80">
          <Image
            src="/imagens/amhplogo.png"
            width={50}
            height={50}
            className="w-32 sm:mx-auto"
            alt={''}
          />
          <p className="leading-relaxed mt-2 text-[15px]">
            Telefone: (61) 3445-6500 SHLS 716 Bloco E - Ed. Centro Médico de
            Brasília, Salas 701 a 709, Brasília/DF - CEP: 70390-904 - CNPJ:
            00.735.860/0001-73 © Copyright 2024 Associação dos Médicos de
            Hospitais Privados do DF - Todos os direitos reservados.
          </p>
        </div>
        {/* <ul className="items-center justify-center mt-8 space-y-5 sm:flex sm:space-x-4 sm:space-y-0">
        {footerNavs.map((item, idx) => (
          <li className=" hover:text-gray-800">
            <a key={idx} href={item.href}>
              {item.name}
            </a>
          </li>
        ))}
      </ul> */}
        <div className="mt-8 items-center justify-between sm:flex">
          <div className="mt-4 sm:mt-0">&copy; 2024 Rafael de Almeida.</div>
        </div>
      </div>
    </footer>
  );
};
