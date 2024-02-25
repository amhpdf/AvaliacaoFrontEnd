import { CardNoticiasRecentes } from '@/components/componentsNoticias/CardNoticiasRecentes';
import { Title } from '@/components/componentsNoticias/Title';

export default function Noticias() {
  return (
    <div className="flex flex-col mt-20 w-10/12 mx-auto gap-6 pb-10">
      <Title title="Últimas Notícias" />
      <CardNoticiasRecentes />
    </div>
  );
}
