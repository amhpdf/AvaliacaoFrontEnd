import { CardNoticias } from './CardNoticias';
import { Title } from './Title';

export const NoticiasContainer = () => {
  return (
    <div className="flex flex-col gap-10">
      <Title title="Notícias Recentes" />
      <div className="flex justify-center gap-3 pb-32">
        <CardNoticias />
      </div>
    </div>
  );
};
