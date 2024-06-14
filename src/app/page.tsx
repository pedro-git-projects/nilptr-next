import Link from "next/link";

const Index: React.FC = () => {
  return (
    <main>
      <section className="">
        <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center">
          <div className="mx-auto max-w-xl text-center">
            <h1 className="text-4xl font-extrabold sm:text-5xl">
              nilptr
              <strong className="font-extrabold text-[#cc241d] sm:block pt-4">
                {" "}
                engenharia de software descomplicada{" "}
              </strong>
            </h1>

            <p className="mt-4 sm:text-xl/relaxed">
              <span className="font-bold">construindo o futuro bit a bit.</span>
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link href="/contato" className="services-button">
                contrate
              </Link>
              <Link href="/sobre" className="to-cv-button">
                conheça
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Index;
