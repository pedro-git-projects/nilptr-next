import Logo from "./logo";

export function Footer() {
  return (
    <footer className="">
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <div className="flex justify-center sm:justify-start">
            <Logo />
          </div>
          <p className="mt-4 text-center text-sm lg:mt-0 lg:text-right">
            &copy; {new Date().getFullYear()} nilptr. Direitos Reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
