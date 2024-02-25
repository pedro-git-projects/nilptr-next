import {
  FaGears,
  FaRocket,
  FaComments,
  FaPenRuler,
  FaComputer,
  FaMobileScreen,
} from "react-icons/fa6";
import DownloadBtnGrid from "../_components/download-btn-grid";
import InfoCard from "../_components/info-card";

const CV: React.FC = () => {
  return (
    <section>
      <div className="max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
        <div className="grid grid-cols-1 gap-y-8 lg:grid-cols-2 lg:items-center lg:gap-x-16">
          <div className="mx-auto max-w-lg text-center lg:mx-0 ltr:lg:text-left rtl:lg:text-right">
            <h2 className="text-3xl font-bold sm:text-4xl">
              Pedro Martins Pereira
            </h2>
            <h2 className="text-xl font-bold sm:text-2xl">
              Engenheiro de Software
            </h2>
            <p className="mt-4">
              Desenvolvedor com experiência sólida na criação de software
              resiliente e escalável sob demanda personalizada.
              <br />
              <span className="font-bold mt-2">
                Baixe o meu currículo completo em pdf abaixo.
              </span>
            </p>
            <div className="mt-8 inline-block">
              <DownloadBtnGrid />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
            <InfoCard
              title="Boas Práticas"
              content="Desenvolvimento escalável e robusto através de metodologias comprovadas."
              icon={FaGears}
            />
            <InfoCard
              title="Alto Desempenho"
              content="Entendimento profundo que promove alta performance."
              icon={FaRocket}
            />
            <InfoCard
              title="Comunicação Clara"
              content="Receba seu produto sem surpresas."
              icon={FaComments}
            />
            <InfoCard
              title="Sob Medida"
              content="Soluções condizentes com a sua necessidade e orçamento."
              icon={FaPenRuler}
            />

            <div className="block border border-light-background dark:border-background p-4 shadow-sm dark:hover:border-accent hover:border-light-text hover:ring-1 dark:hover:ring-accent hover:ring-light-text focus:outline-none focus:ring">
              <span className="inline-block bg-light-background dark:bg-background p-3">
                <FaComputer className="text-light-text dark:text-text h-6 w-6" />
              </span>
              <h2 className="mt-2 font-bold max-w-full sm:max-w-xs md:max-w-md lg:max-w-lg xl:max-w-xl break-all">
                Multiplataforma
              </h2>
              <p className="hidden sm:mt-1 sm:block sm:text-sm">
                Implante seu produto em ambientes web, mobile e desktop.
              </p>
            </div>

            <InfoCard
              title="Responsivo"
              content="Soluções preparadas para os mais diversos ambientes de execução."
              icon={FaMobileScreen}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CV;
