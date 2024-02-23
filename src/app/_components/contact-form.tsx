const ContactForm: React.FC = () => {
  return (
    <section>
      <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-x-16 gap-y-8 lg:grid-cols-5">
          <div className="lg:col-span-2 lg:py-12">
            <p className="max-w-xl text-lg">
              Faça o orçamento do seu produto de software pelo formulário ou
              entre em contato diretamente através do email abaixo.
            </p>

            <div className="max-w-xl text-lg">
              <a
                href="mailto:pedro.coding.contact@gmail.com?subject=orçamento"
                className="text-2xl font-bold text-lg word-wrap"
              >
                pedro.coding.contact@gmail.com
              </a>
            </div>
          </div>

          <div className="rounded-lg p-8 shadow-lg lg:col-span-3 lg:p-12 bg-light-background-light shadow-[#bdae93]  dark:bg-background-light dark:shadow-gray-800/25">
            <form action="#" className="space-y-4">
              <div>
                <label className="sr-only" htmlFor="name">
                  Razão Social
                </label>
                <input
                  className="focus:border-[#fabd2f] dark:focus:border-[#fabd2f] focus:ring-[#fabd2f] placeholder-[#7c6f64] dark:placeholder-[#bdae93] w-full rounded-lg border-light-border dark:border-[#3c3836] p-3 text-sm bg-light-background dark:bg-background"
                  placeholder="Razão Social"
                  type="text"
                  id="name"
                />
              </div>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                  <label className="sr-only" htmlFor="email">
                    E-mail
                  </label>
                  <input
                    className="focus:border-[#fabd2f] dark:focus:border-[#fabd2f] focus:ring-[#fabd2f] placeholder-[#7c6f64] dark:placeholder-[#bdae93] bg-light-background w-full rounded-lg border-light-border dark:border-[#3c3836] p-3 text-sm dark:bg-background"
                    placeholder="Endereço de e-mail"
                    type="email"
                    id="email"
                  />
                </div>

                <div>
                  <label className="sr-only" htmlFor="phone">
                    Telefone
                  </label>
                  <input
                    className="focus:border-[#fabd2f] dark:focus:border-[#fabd2f] focus:ring-[#fabd2f] placeholder-[#7c6f64] dark:placeholder-[#bdae93] bg-light-background w-full rounded-lg border-light-border dark:border-[#3c3836] p-3 text-sm dark:bg-background"
                    placeholder="Número de telefone"
                    type="tel"
                    id="phone"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 gap-4 text-center sm:grid-cols-3">
                <div>
                  <label
                    htmlFor="Option1"
                    className="block bg-light-background dark:border-[#3c3836] dark:bg-background w-full cursor-pointer rounded-lg border border-light-border p-3 hover:border-black has-[:checked]:border-black has-[:checked]:bg-[#282828] has-[:checked]:text-text
dark:has-[:checked]:border-[#fabd2f] dark:has-[:checked]:bg-background-dark has-[:checked]:text-text dark:hover:border-[#d79921]"
                    tabIndex="0"
                  >
                    <input
                      className="sr-only"
                      id="Option1"
                      type="radio"
                      tabIndex="-1"
                      name="option"
                    />

                    <span className="text-sm">Website</span>
                  </label>
                </div>

                <div>
                  <label
                    htmlFor="Option2"
                    className="block bg-light-background dark:border-[#3c3836] dark:bg-background w-full cursor-pointer rounded-lg border border-light-border p-3 hover:border-black has-[:checked]:border-black has-[:checked]:bg-[#282828] has-[:checked]:text-text
dark:has-[:checked]:border-[#fabd2f] dark:has-[:checked]:bg-background-dark has-[:checked]:text-text dark:hover:border-[#d79921]"
                    tabIndex="0"
                  >
                    <input
                      className="sr-only"
                      id="Option2"
                      type="radio"
                      tabIndex="-1"
                      name="option"
                    />

                    <span className="text-sm">Aplicativo (Celular)</span>
                  </label>
                </div>

                <div>
                  <label
                    htmlFor="Option3"
                    className="block bg-light-background dark:border-[#3c3836] dark:bg-background w-full cursor-pointer rounded-lg border border-light-border p-3 hover:border-black has-[:checked]:border-black has-[:checked]:bg-[#282828] has-[:checked]:text-text
dark:has-[:checked]:border-[#fabd2f] dark:has-[:checked]:bg-background-dark has-[:checked]:text-text dark:hover:border-[#d79921]"
                    tabIndex="0"
                  >
                    <input
                      className="sr-only"
                      id="Option3"
                      type="radio"
                      tabIndex="-1"
                      name="option"
                    />

                    <span className="text-sm">Aplicação (Desktop)</span>
                  </label>
                </div>
              </div>

              <div>
                <label className="sr-only" htmlFor="message">
                  Mensagem
                </label>

                <textarea
                  className="focus:border-[#fabd2f] dark:focus:border-[#fabd2f] focus:ring-[#fabd2f] w-full rounded-lg border-light-border bg-light-background dark:bg-background placeholder-[#504945] dark:placeholder-[#bdae93] p-3 text-sm dark:border-[#3c3836]"
                  placeholder="Mensagem"
                  rows="8"
                  id="message"
                ></textarea>
              </div>

              <div className="mt-4">
                <button
                  type="submit"
                  className="inline-block w-full rounded-lg bg-[#282828] hover:bg-warning px-5 py-3 font-medium text-text sm:w-auto"
                >
                  Solicitar Orçamento
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
