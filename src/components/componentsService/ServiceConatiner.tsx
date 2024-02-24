import { CardsServicesContainer } from './CardsServiceContainer';

export const ServiceContainer = () => {
  return (
    <section className="w-full h-4/6 relative py-36 bg-primary mt-96 ">
      <div className="relative z-10 max-w-screen-xl mx-auto px-4 text-gray-300 justify-between gap-24 lg:flex md:px-8">
        <div className="max-w-md">
          <h3 className="text-white text-3xl font-semibold sm:text-4xl">
            Conheça a AMHP
          </h3>
          <p className="mt-3">
            Fundada em 1983, a AMHP é uma Associação de médicos, psicólogos,
            fisioterapeutas, fonoaudiólogos e nutricionistas, que trabalham em
            clínicas e hospitais no Distrito Federal. É uma Sociedade Civil sem
            fins lucrativos, que tem por objetivo congregar, orientar,
            representar e defender no setor científico, ético, social e
            econômico os seus associados.
          </p>
        </div>
        <div className="-mt-28">
          <CardsServicesContainer />
        </div>
      </div>
      <div
        className="absolute inset-0 max-w-md mx-auto h-72 blur-[118px]"
        style={{
          background:
            'linear-gradient(152.92deg, rgba(192, 132, 252, 0.2) 4.54%, rgba(232, 121, 249, 0.26) 34.2%, rgba(192, 132, 252, 0.1) 77.55%)',
        }}
      ></div>
    </section>
  );
};
