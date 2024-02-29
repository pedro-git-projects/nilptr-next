"use client";

import { useState } from "react";
import FormAlert from "./form-alert";

const ContactForm: React.FC = () => {
  const [success, setSuccess] = useState(false);
  const [visible, setVisible] = useState(false);
  const [loading, setLoading] = useState(true);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    option: "",
    message: "",
  });

  const validateForm = (formData: {
    name: string;
    email: string;
    phone: string;
    option: string;
    message: string;
  }) => {
    const { name, email, phone, option, message } = formData;
    const nonEmptyFields =
      name !== "" &&
      email !== "" &&
      phone !== "" &&
      message !== "" &&
      option !== "";
    return nonEmptyFields;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value, id } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: name === "option" ? id : value,
    }));
    const isDisabled = !validateForm(formData);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      setVisible(true);
      const { name, email, phone, option, message } = formData;
      const response = await fetch("https://nilptr.dev/mail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, phone, option, message }),
      });

      if (response.ok) {
        const data = await response.json();
        setLoading(false);
        setSuccess(true);
        console.log("Email sent:", data.info);
      } else {
        setLoading(false);
        setSuccess(false);
        console.error("Failed to send email:", response.statusText);
      }
    } catch (err) {
      console.error("Error sending email:", err);
    }
  };

  return (
    <section>
      {visible && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50 z-50">
          <FormAlert
            loading={loading}
            success={success}
            onClose={() => setVisible(false)}
          />
        </div>
      )}

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

          <div className="p-8 shadow-lg lg:col-span-3 lg:p-12 bg-light-background-light shadow-[#bdae93]  dark:bg-background-light dark:shadow-gray-800/25">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="sr-only" htmlFor="name">
                  Razão Social
                </label>
                <input
                  className="focus:border-[#fabd2f] dark:focus:border-[#fabd2f] focus:ring-[#fabd2f] placeholder-[#7c6f64] dark:placeholder-[#bdae93] w-full border-light-border dark:border-[#3c3836] p-3 text-sm bg-light-background dark:bg-background"
                  placeholder="Razão Social"
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                />
              </div>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                  <label className="sr-only" htmlFor="email">
                    E-mail
                  </label>
                  <input
                    className="focus:border-[#fabd2f] dark:focus:border-[#fabd2f] focus:ring-[#fabd2f] placeholder-[#7c6f64] dark:placeholder-[#bdae93] bg-light-background w-full border-light-border dark:border-[#3c3836] p-3 text-sm dark:bg-background"
                    placeholder="Endereço de e-mail"
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>

                <div>
                  <label className="sr-only" htmlFor="phone">
                    Telefone
                  </label>
                  <input
                    className="focus:border-[#fabd2f] dark:focus:border-[#fabd2f] focus:ring-[#fabd2f] placeholder-[#7c6f64] dark:placeholder-[#bdae93] bg-light-background w-full border-light-border dark:border-[#3c3836] p-3 text-sm dark:bg-background"
                    placeholder="Número de telefone"
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 gap-4 text-center sm:grid-cols-3">
                <div>
                  <label
                    htmlFor="Website"
                    className="block bg-light-background dark:border-[#3c3836] dark:bg-background w-full cursor-pointer border border-light-border p-3 hover:border-black has-[:checked]:border-black has-[:checked]:bg-[#282828] has-[:checked]:text-text
dark:has-[:checked]:border-[#fabd2f] dark:has-[:checked]:bg-background-dark has-[:checked]:text-text dark:hover:border-[#d79921]"
                    tabIndex={0}
                  >
                    <input
                      className="sr-only"
                      id="Website"
                      type="radio"
                      tabIndex={-1}
                      name="option"
                      value={formData.option}
                      onChange={handleChange}
                    />

                    <span className="text-sm">Website</span>
                  </label>
                </div>

                <div>
                  <label
                    htmlFor="App"
                    className="block bg-light-background dark:border-[#3c3836] dark:bg-background w-full cursor-pointer border border-light-border p-3 hover:border-black has-[:checked]:border-black has-[:checked]:bg-[#282828] has-[:checked]:text-text
dark:has-[:checked]:border-[#fabd2f] dark:has-[:checked]:bg-background-dark has-[:checked]:text-text dark:hover:border-[#d79921]"
                    tabIndex={0}
                  >
                    <input
                      className="sr-only"
                      id="App"
                      type="radio"
                      tabIndex={-1}
                      name="option"
                      value={formData.option}
                      onChange={handleChange}
                    />

                    <span className="text-sm">Aplicativo (Celular)</span>
                  </label>
                </div>

                <div>
                  <label
                    htmlFor="Desktop"
                    className="block bg-light-background dark:border-[#3c3836] dark:bg-background w-full cursor-pointer border border-light-border p-3 hover:border-black has-[:checked]:border-black has-[:checked]:bg-[#282828] has-[:checked]:text-text
dark:has-[:checked]:border-[#fabd2f] dark:has-[:checked]:bg-background-dark has-[:checked]:text-text dark:hover:border-[#d79921]"
                    tabIndex={0}
                  >
                    <input
                      className="sr-only"
                      id="Desktop"
                      type="radio"
                      tabIndex={-1}
                      name="option"
                      value={formData.option}
                      onChange={handleChange}
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
                  className="focus:border-[#fabd2f] dark:focus:border-[#fabd2f] focus:ring-[#fabd2f] w-full border-light-border bg-light-background dark:bg-background placeholder-[#504945] dark:placeholder-[#bdae93] p-3 text-sm dark:border-[#3c3836]"
                  placeholder="Mensagem"
                  rows={8}
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                ></textarea>
              </div>

              <div className="mt-4">
                <button
                  type="submit"
                  className="inline-block w-full bg-[#282828] hover:bg-warning px-5 py-3 font-medium text-text sm:w-auto disabled:bg-gray-400 disabled:cursor-not-allowed"
                  disabled={!validateForm(formData)}
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
