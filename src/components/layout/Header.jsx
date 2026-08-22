import { React, TypeScript } from '../shared/SVG';

export default function Header() {
  const handleReloadClick = () => {
    window.location.reload();
  };

  return (
    <header className="fixed top-2 sm:top-4 left-0 right-0 z-50 flex justify-center px-4">
      <div className="w-full max-w-5xl h-10 sm:h-14 px-2 md:px-6 flex items-center justify-center sm:justify-between rounded-full bg-white/80 backdrop-blur-md border border-slate-200/80 shadow-sm shadow-slate-900/5">
        {/* Logo / Brand (Hidden on Mobile) */}
        <button
          onClick={handleReloadClick}
          className="hidden sm:flex items-center gap-2 font-mono font-bold text-sm md:text-base tracking-tight text-slate-900 hover:opacity-80 transition cursor-pointer"
        >
          <span className="w-2.5 h-2.5 rounded-full bg-pink-500 animate-pulse" />
          <span>ROY NADIEL</span>
          <span className="text-xs font-mono text-cyan-600 bg-cyan-50 px-1.5 py-0.5 rounded-md border border-cyan-200">
            DEV
          </span>
        </button>

        {/* Navigation Links (Pill Style) */}
        <nav className="w-full sm:w-fit flex justify-evenly sm:justify-center items-center gap-0.5 md:gap-2">
          <a href="#Hero" className="sm:hidden text-pink-500 text-xs font-bold">
            RNH
          </a>
          <a
            href="#Hero"
            className="hidden sm:block px-1.5 sm:px-3 py-1.5 text-xs md:text-sm font-medium text-slate-600 hover:text-slate-900 hover:bg-slate-100 rounded-full transition cursor-pointer"
          >
            Inicio
          </a>
          <a
            href="#Proyectos"
            className="px-1.5 sm:px-3 py-1.5 text-xs md:text-sm font-medium text-slate-600 hover:text-slate-900 hover:bg-slate-100 rounded-full transition cursor-pointer"
          >
            Proyectos
          </a>
          <a
            href="#Experiencia"
            className="px-1.5 sm:px-3 py-1.5 text-xs md:text-sm font-medium text-slate-600 hover:text-slate-900 hover:bg-slate-100 rounded-full transition cursor-pointer"
          >
            Experiencia
          </a>
          <a
            href="#Sobre-Mi"
            className="px-1.5 sm:px-3 py-1.5 text-xs md:text-sm font-medium text-slate-600 hover:text-slate-900 hover:bg-slate-100 rounded-full transition cursor-pointer"
          >
            Sobre Mí
          </a>
        </nav>

        {/* Tech Badges / CTAs (Hidden on Mobile) */}
        <div className="hidden sm:flex items-center gap-3">
          <div className="flex items-center gap-1.5 px-2.5 py-1 bg-slate-50 border border-slate-200 rounded-full text-slate-700 text-xs font-mono">
            <a
              href="https://vite.dev/"
              target="_blank"
              rel="noreferrer"
              title="Vite"
              className="hover:opacity-75 transition cursor-pointer"
            >
              <img className="w-3.5 h-3.5" src="./vite.svg" alt="Vite" />
            </a>
            <span className="text-slate-300">•</span>
            <a
              href="https://react.dev/"
              target="_blank"
              rel="noreferrer"
              title="React"
              className="w-3.5 h-3.5 text-slate-700 hover:text-cyan-500 transition cursor-pointer"
            >
              <React />
            </a>
            <span className="text-slate-300">•</span>
            <a
              href="https://www.typescriptlang.org/"
              target="_blank"
              rel="noreferrer"
              title="TypeScript"
              className="w-3.5 h-3.5 text-slate-700 hover:text-blue-600 transition cursor-pointer"
            >
              <TypeScript />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
