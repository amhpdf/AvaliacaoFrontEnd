import Link from 'next/link';
import { CardNoticiasHome } from './CardNoticiasHome';
import { Title } from './Title';

export const NoticiasContainer = () => {
  return (
    <div className="flex flex-col gap-10 py-16">
      <Title title="Notícias Recentes" />
      <div className="flex flex-col md:flex-row justify-center gap-3 ">
        <CardNoticiasHome />
      </div>
      <Link href={'/noticias'} className="mx-auto">
        <button className="px-7 py-4 w-40  text-white duration-150 bg-secondary rounded-lg hover:bg-secondaryDark active:shadow-lg hover:scale-110 hover:shadow-secondary/70 animate-bounce">
          Ver mais
        </button>
      </Link>
    </div>
  );
};
