import Image from "next/image";
import Link from "next/link";
import { FaYoutube } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { FaGithubAlt } from "react-icons/fa6";

const Resume: React.FC = () => {
  return (
    <div className="container mx-auto py-8">
      <div className="grid grid-cols-4 sm:grid-cols-12 gap-6 px-4">
        <div className="col-span-4 sm:col-span-3">
          <div className="bg-light-background-light shadow-[#bdae93] dark:bg-background-light border-light-border dark:border-[#3c3836] dark:shadow-gray-800/25 p-6">
            <div className="flex flex-col items-center">
              <Image
                src="/assets/blog/authors/pedro.jpeg"
                width={0}
                height={0}
                alt="foto de perfil"
                sizes="100vw"
                className="w-32 h-32 bg-gray-300 rounded-full mb-4 shrink-0"
              />

              <h1 className="text-xl font-bold">Pedro Martins Pereira</h1>
              <p>Engenheiro de Software</p>
              <div className="mt-6 flex flex-wrap gap-4 justify-center">
                <Link
                  href="/contato"
                  className="bg-button hover:bg-button-active hover:text-[#282828] text-text-dark dark:text-text-dark py-2 px-4"
                >
                  Contato
                </Link>
                <Link
                  href="/cv"
                  className="bg-[#458588] hover:bg-[#fabd2f] dark:hover:text-[#282828] dark:text-text text-text-dark hover:text-[#282828]  py-2 px-4"
                >
                  Currículo
                </Link>
              </div>
            </div>
            <hr className="my-6 border-t border-gray-300" />
            <div className="flex flex-col">
              <span className="uppercase font-bold tracking-wider mb-2">
                Sobre mim
              </span>
              <p>
                Acredito que o conhecimento é a chave para um futuro melhor e me
                dedico a democratizá-lo.
              </p>
            </div>
          </div>
        </div>
        <div className="col-span-4 sm:col-span-9">
          <div className="bg-light-background-light shadow-[#bdae93] dark:bg-background-light border-light-border dark:border-[#3c3836] dark:shadow-gray-800/25 p-6">
            <div className="mb-6">
              <div className="flex justify-between flex-wrap gap-2 w-full">
                <span className="font-bold">Formação</span>
              </div>
              <p className="mt-2">
                Sou engenheiro de sofware especialista pela PUC-Rio, tecnólogo
                em Análise e Desenvolvimento de Sistemas pelo IESB e Bacharel em
                Filosofia pela UnB.
              </p>
            </div>

            <div className="mb-6">
              <div className="flex justify-between flex-wrap gap-2 w-full">
                <span className="font-bold">Atuação Profissional</span>
              </div>
              <p className="mt-2">
                Atualmente sou consultor independente, tendo prestado serviços
                para empresas como a Toguishi Japan e o Colégio Cenecista Doutor
                José Ferreira.
                <br />
                <br />
                Mantenho o canal
                <a href="https://www.youtube.com/@nilptr" target="_blank">
                  {" "}
                  niltpr{" "}
                </a>
                no Youtube.
                <br />
                <br />
                Trabalhei ainda na multinacional NTT Data e desemepnhei diversos
                trabalhos dentro da academia, o último sendo liderar uma Squad
                na fábrica de software do Instituto de Educação supeior de
                Brasília.
              </p>
            </div>

            <div className="mb-6">
              <div className="flex justify-between flex-wrap gap-2 w-full">
                <span className="font-bold pb-1">Habilidades Técnicas</span>
              </div>
              <ul className="list-disc pl-1">
                <li className="pb-1">
                  Habilidades avançadas em desenvolvimento de back-end usando Go
                  e Node.
                </li>
                <li className="pb-1">
                  Versado em desenvovlimento frontend com React, Svelte, HUGO,
                  HTML, CSS e Tailwind.
                </li>
                <li className="pb-1">
                  Forte entendimento de algoritmos, estruturas de dados e
                  padrões de projeto.
                </li>
                <li className="pb-1">
                  Proficiente em arquitetura de software escalável e resiliente,
                  tanto no back-end quanto no front-end.
                </li>
                <li className="pb-1">
                  Experiência comprovada na criação de APIs RESTful, Websockets
                  e gRPC.
                </li>
                <li className="pb-1">
                  Conhecimento em bancos de dados relacionais e não relacionais.
                </li>
                <li className="pb-1">
                  Experiência em testes unitários, integração contínua e entrega
                  contínua (CI/CD).
                </li>
                <li className="pb-1">
                  Domínio de práticas de engenharia de software, como controle
                  de versão e colaboração em equipe.
                </li>
                <li className="pb-1">Inglês fluente.</li>
              </ul>
            </div>

            <h3 className="font-semibold text-center mt-3 -mb-2">
              Links Relevantes
            </h3>

            <div className="flex justify-center items-center gap-6 my-6">
              <a
                className="text-gray-700 hover:text-orange-600"
                aria-label="linkedin"
                href="https://github.com/pedro-git-projects"
                target="_blank"
              >
                <FaGithubAlt size={28} />
              </a>

              <a
                className="text-gray-700 hover:text-orange-600"
                aria-label="youtube"
                href="https://www.youtube.com/@nilptr"
                target="_blank"
              >
                <FaYoutube size={28} />
              </a>

              <a
                className="text-gray-700 hover:text-orange-600"
                aria-label="linkedin"
                href="https://www.linkedin.com/in/pedro-pereira-948224216/"
                target="_blank"
              >
                <FaLinkedin size={28} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
