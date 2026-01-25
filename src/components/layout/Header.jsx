import { React } from '../shared/SVG';

export default function Header() {
  const handleReloadClick = () => {
    window.location.reload();
  };

  return (
    <header
      role="Barra de Navegacion"
      className="fixed w-full h-14 flex flex-col justify-center items-center md:pt-2 px-4 z-30 backdrop-blur-xs
        md:flex-row md:justify-evenly"
    >
      <h1
        onClick={handleReloadClick}
        data-interactive="true"
        className="text-xl font-montserrat-alt text-pink-500
                lg:text-2xl xl:text-3xl"
      >
        <strong>
          ROY NADIEL A<span className="text-sky-400 text-3xl">.</span>
        </strong>
      </h1>
      <nav
        className="inline-flex justify-center gap-3 flex-wrap md:gap-8 md:flex-nowrap"
        data-interactive="true"
      >
        <a
          aria-label="Inicio de Pagina"
          data-interactive="true"
          className="navlink"
          href="#Hero"
        >
          INICIO
        </a>
        <a
          aria-label="Proyectos"
          data-interactive="true"
          className="navlink"
          href="#Proyectos"
        >
          PROYECTOS
        </a>
        <a
          aria-label="Sobre Mi"
          data-interactive="true"
          className="navlink"
          href="#Sobre Mi"
        >
          SOBRE MÍ
        </a>
      </nav>
      <div className="items-center gap-5 hidden lg:flex">
        <a
          href="https://vite.dev/"
          target="_blank"
          className="pl-25 iconViteAnimation"
          data-interactive="true"
        >
          <img className="w-5 lg:w-6" src="./vite.svg" alt="Vite Logo" />
        </a>

        <p className="text-2xl text-sky-400">+</p>

        <a
          href="https://react.dev/"
          target="_blank"
          data-interactive="true"
          className="text-transparent hover:scale-115 iconReactHover w-6 lg:w-8"
        >
          <React />
        </a>
      </div>
    </header>
  );
}
