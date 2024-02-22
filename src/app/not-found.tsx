import Link from "next/link";

const NotFound = () => (
  <div className="grid h-screen place-content-center px-4">
    <div className="text-center">
      <h1 className="text-9xl font-black">404</h1>

      <p className="text-2xl font-bold tracking-tight sm:text-4xl">oh não!</p>

      <p className="mt-4">Página não encontrada.</p>

      <Link
        href="/"
        className="mt-6 inline-block rounded bg-warning dark:bg-error px-5 py-3 text-sm font-medium text-gray-200 dark:text-white focus:outline-none focus:ring"
      >
        Voltar para Home
      </Link>
    </div>
  </div>
);

export default NotFound;
