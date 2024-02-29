"use client";

import { IoIosCheckmarkCircle, IoIosCloseCircle } from "react-icons/io";
import Spinner from "./spinner";
import { useState } from "react";

interface Props {
  success: boolean;
  loading: boolean;
  onClose: () => void;
}

const FormAlert: React.FC<Props> = ({ success, loading, onClose }) => {
  const [isVisible, setIsVisible] = useState(true);

  const handleClose = () => {
    setIsVisible(false);
    onClose();
  };

  if (!isVisible) {
    return null;
  }

  return (
    <div
      role="alert"
      className="border border-gray-100 bg-[#fbf1c7] p-4 dark:bg-[#282828]"
    >
      <div className="flex items-start gap-4">
        <span>
          {loading && <Spinner />}
          {success && !loading && <IoIosCheckmarkCircle />}
          {!success && !loading && <IoIosCloseCircle />}
        </span>

        <div className="flex-1">
          <strong className="block font-medium">
            {loading && "Enviando..."}
            {success && "Email enviado com sucesso"}
            {!success && !loading && "Algo deu errado!"}
          </strong>

          <p className="mt-1 text-sm">
            {loading && "O seu email está sendo enviado..."}
            {success && "Agora basta aguardar o retorno no email informado."}
            {!success && !loading && "Tente novamente"}
          </p>
        </div>

        <button
          className="text-gray-500 transition hover:text-gray-600 dark:text-gray-400 dark:hover:text-gray-500"
          onClick={handleClose}
        >
          <span className="sr-only">Fechar popup</span>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="h-6 w-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default FormAlert;
