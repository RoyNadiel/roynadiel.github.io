import '../shared/Shapes.css';
import {
  HTML,
  CSS,
  TailwindCSS,
  JS,
  TypeScript,
  CSHARP,
  Git,
  React,
  NextJS,
  NodeJS,
  Hono,
  Vite,
  Cloudflare,
} from '../shared/SVG.jsx';
import {
  PenTool,
  Music,
  Dumbbell,
  Palette,
  Users,
  Rocket,
  Zap,
  GraduationCap,
} from 'lucide-react';

export default function AboutMe() {
  const interests = [
    {
      title: 'Diseño UI/UX y Animaciones Web',
      icon: <Palette className="w-6 h-6 text-pink-400" />,
      color: 'border-pink-500/50 hover:bg-pink-500/10',
    },
    {
      title: 'Open Source y Comunidades Tech',
      icon: <Users className="w-6 h-6 text-blue-400" />,
      color: 'border-blue-500/50 hover:bg-blue-500/10',
    },
    {
      title: 'Accesibilidad Web',
      icon: <Rocket className="w-6 h-6 text-purple-400" />,
      color: 'border-purple-500/50 hover:bg-purple-500/10',
    },
    {
      title: 'Performance y Escalabilidad',
      icon: <Zap className="w-6 h-6 text-yellow-400" />,
      color: 'border-yellow-500/50 hover:bg-yellow-500/10',
    },
    {
      title: 'Resolución de Problemas Lógicos',
      icon: <GraduationCap className="w-6 h-6 text-green-400" />,
      color: 'border-green-500/50 hover:bg-green-500/10',
    },
  ];

  return (
    <section
      role="Sobre Mi"
      id="Sobre Mi"
      className="w-full min-h-screen flex flex-col items-center justify-center p-6 md:p-10"
    >
      <h2
        className="text-center text-red-600 text-4xl font-montserrat-alt tracking-widest mt-20 mb-10 
                md:mt-4 md:text-5xl"
      >
        SOBRE MÍ
      </h2>

      <article className="mx-auto max-w-6xl w-full">
        <div className="bg-indigo-950/40 backdrop-blur-sm border border-indigo-500/30 p-8 rounded-2xl mb-12 shadow-2xl">
          <p className="text-blue-200 text-lg md:text-2xl font-league-spartan mb-0 leading-relaxed">
            Nací en el 99. Conocí la programación gracias a la universidad.
            Estando en ella he hecho varios proyectos, algunos en C, y la
            mayoría en C#. <br />
            Sin embargo, conocí el mundo de la programación web gracias a unos
            amigos. Apartir de ahí, en mis estudios autodidactas le dedico la
            mayoria de mi tiempo libre.
          </p>
        </div>

        <div className="mb-12">
          <h3 className="text-blue-100 text-2xl md:text-3xl font-montserrat-alt mb-8 border-l-4 border-red-600 pl-4">
            Pasatiempos
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Tarjeta Escritura */}
            <div className="group relative bg-indigo-950/40 backdrop-blur-md border border-white/10 p-8 rounded-3xl transition-all duration-500 hover:border-red-500/50 hover:shadow-[0_0_40px_-15px_rgba(239,68,68,0.3)] overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-red-500/10 blur-3xl -mr-16 -mt-16 group-hover:bg-red-500/20 transition-all duration-500" />
              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-4 bg-gradient-to-br from-red-500/20 to-red-600/10 rounded-2xl border border-red-500/20 group-hover:scale-110 transition-transform duration-500">
                    <PenTool className="text-red-400 w-7 h-7" />
                  </div>
                  <h4 className="text-white text-2xl font-bold font-montserrat-alt">
                    Escritura
                  </h4>
                </div>
                <p className="text-blue-100/80 font-league-spartan text-lg leading-relaxed">
                  Me gusta escribir; escritos en verso y otros en prosa, con los
                  que algunas personas suelen identificarse.
                </p>
              </div>
            </div>

            {/* Tarjeta Música */}
            <div className="group relative bg-indigo-950/40 backdrop-blur-md border border-white/10 p-8 rounded-3xl transition-all duration-500 hover:border-blue-500/50 hover:shadow-[0_0_40px_-15px_rgba(59,130,246,0.3)] overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 blur-3xl -mr-16 -mt-16 group-hover:bg-blue-500/20 transition-all duration-500" />
              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-4 bg-gradient-to-br from-blue-500/20 to-blue-600/10 rounded-2xl border border-blue-500/20 group-hover:scale-110 transition-transform duration-500">
                    <Music className="text-blue-400 w-7 h-7" />
                  </div>
                  <h4 className="text-white text-2xl font-bold font-montserrat-alt">
                    Música
                  </h4>
                </div>
                <p className="text-blue-100/80 font-league-spartan text-lg leading-relaxed">
                  Amo la música desde muy pequeño, y según Nietzsche, sin ella
                  la vida sería un error.
                </p>
              </div>
            </div>

            {/* Tarjeta Ejercicio */}
            <div className="group relative bg-indigo-950/40 backdrop-blur-md border border-white/10 p-8 rounded-3xl transition-all duration-500 hover:border-amber-500/50 hover:shadow-[0_0_40px_-15px_rgba(245,158,11,0.3)] overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/10 blur-3xl -mr-16 -mt-16 group-hover:bg-amber-500/20 transition-all duration-500" />
              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-4 bg-gradient-to-br from-amber-500/20 to-amber-600/10 rounded-2xl border border-amber-500/20 group-hover:scale-110 transition-transform duration-500">
                    <Dumbbell className="text-amber-400 w-7 h-7" />
                  </div>
                  <h4 className="text-white text-2xl font-bold font-montserrat-alt">
                    Ejercicio
                  </h4>
                </div>
                <p className="text-blue-100/80 font-league-spartan text-lg leading-relaxed">
                  Hago ejercicio, principalmente Calistenia. Me gusta estar en
                  forma y priorizo la salud.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-16">
          <h3 className="text-blue-100 text-2xl md:text-3xl font-montserrat-alt mb-8 border-l-4 border-red-600 pl-4">
            Mis Intereses
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {interests.map((interest, index) => (
              <div
                key={index}
                className={`flex items-center gap-3 px-6 py-4 bg-indigo-950/50 backdrop-blur-md border-2 rounded-2xl transition-all duration-300 cursor-default group hover:scale-105 ${interest.color} shadow-lg`}
              >
                <div className="transition-transform duration-300 group-hover:rotate-12">
                  {interest.icon}
                </div>
                <span className="text-blue-100 font-league-spartan text-lg md:text-xl font-semibold">
                  {interest.title}
                </span>
              </div>
            ))}
          </div>
        </div>
      </article>

      <div className="w-full max-w-6xl pb-10">
        <h3 className="text-blue-100 text-center text-xl md:text-2xl font-montserrat-alt mb-10 opacity-80">
          Tecnologías que utilizo
        </h3>
        <ul className="flex flex-wrap items-center justify-center gap-5 list-none list-inside col-span-full">
          <li className="w-8 p-2 lg:w-14 lg:p-4 skillsImg relative group rounded-full bg-amber-500/20 hover:drop-shadow-[0_0_15px_rgba(249,115,22,0.6)] reflect-image transition-all duration-300">
            <HTML></HTML>
            <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-1 bg-violet-950 border border-orange-500 text-orange-500 text-sm rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap">
              HTML
            </span>
          </li>
          <li className="w-8 p-2 lg:w-14 lg:p-4 skillsImg relative group rounded-full bg-blue-500/20 hover:drop-shadow-[0_0_15px_rgba(59,130,246,0.6)] reflect-image transition-all duration-300">
            <CSS></CSS>
            <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-1 bg-violet-950 border border-blue-500 text-blue-500 text-sm rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap">
              CSS
            </span>
          </li>
          <li className="w-8 p-2 lg:w-14 lg:p-4 skillsImg relative group rounded-full bg-blue-600/20 hover:drop-shadow-[0_0_15px_rgba(37,99,235,0.6)] reflect-image transition-all duration-300">
            <TailwindCSS></TailwindCSS>
            <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-1 bg-violet-950 border border-blue-600 text-blue-600 text-sm rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap">
              TailwindCSS
            </span>
          </li>
          <li className="w-8 p-2 lg:w-14 lg:p-4 skillsImg relative group rounded-full bg-yellow-500/20 hover:drop-shadow-[0_0_15px_rgba(234,179,8,0.6)] reflect-image transition-all duration-300">
            <JS></JS>
            <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-1 bg-violet-950 border border-yellow-500 text-yellow-500 text-sm rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap">
              JavaScript
            </span>
          </li>
          <li className="w-8 p-2 lg:w-14 lg:p-4 skillsImg relative group rounded-full bg-blue-300/20 hover:drop-shadow-[0_0_15px_rgba(96,165,250,0.6)] reflect-image transition-all duration-300">
            <TypeScript></TypeScript>
            <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-1 bg-violet-950 border border-blue-400 text-blue-400 text-sm rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap">
              TypeScript
            </span>
          </li>
          <li className="w-8 p-2 lg:w-14 lg:p-4 skillsImg relative group rounded-full bg-purple-500/20 hover:drop-shadow-[0_0_15px_rgba(168,85,247,0.6)] reflect-image transition-all duration-300">
            <CSHARP></CSHARP>
            <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-1 bg-violet-950 border border-purple-500 text-purple-500 text-sm rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap">
              C#
            </span>
          </li>
          <li className="w-8 p-2 lg:w-14 lg:p-4 skillsImg relative group rounded-full bg-amber-500/20 hover:drop-shadow-[0_0_15px_rgba(245,158,11,0.6)] reflect-image transition-all duration-300">
            <Git></Git>
            <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-1 bg-violet-950 border border-amber-500 text-amber-500 text-sm rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap">
              Git
            </span>
          </li>
          <li className="w-8 p-2 lg:w-14 lg:p-4 skillsImg relative group rounded-full bg-pink-500/20 hover:drop-shadow-[0_0_15px_rgba(236,72,153,0.6)] reflect-image transition-all duration-300">
            <Vite></Vite>
            <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-1 bg-violet-950 border border-pink-500 text-pink-500 text-sm rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap">
              Vite
            </span>
          </li>
          <li className="w-8 p-2 lg:w-14 lg:p-4 skillsImg relative group rounded-full bg-amber-600/20 hover:drop-shadow-[0_0_15px_rgba(217,119,6,0.6)] reflect-image transition-all duration-300">
            <Cloudflare></Cloudflare>
            <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-1 bg-violet-950 border border-amber-600 text-amber-600 text-sm rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap">
              Cloudflare
            </span>
          </li>
          <li className="w-8 p-2 lg:w-14 lg:p-4 skillsImg relative group rounded-full bg-blue-500/20 hover:drop-shadow-[0_0_15px_rgba(59,130,246,0.6)] reflect-image transition-all duration-300">
            <React></React>
            <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-1 bg-violet-950 border border-blue-500 text-blue-500 text-sm rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap">
              React
            </span>
          </li>
          <li className="w-8 p-2 lg:w-14 lg:p-4 skillsImg relative group rounded-full bg-black/20 hover:drop-shadow-[0_0_15px_rgba(255,255,255,0.4)] reflect-image transition-all duration-300">
            <NextJS></NextJS>
            <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-1 bg-violet-950 border border-white text-white text-sm rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap">
              NextJS
            </span>
          </li>
          <li className="w-8 p-2 lg:w-14 lg:p-4 skillsImg relative group rounded-full bg-green-500/20 hover:drop-shadow-[0_0_15px_rgba(34,197,94,0.6)] reflect-image transition-all duration-300">
            <NodeJS></NodeJS>
            <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-1 bg-violet-950 border border-green-500 text-green-500 text-sm rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap">
              NodeJS
            </span>
          </li>
          <li className="w-8 p-2 lg:w-14 lg:p-4 skillsImg relative group rounded-full bg-orange-500/20 hover:drop-shadow-[0_0_15px_rgba(249,115,22,0.6)] reflect-image transition-all duration-300">
            <Hono></Hono>
            <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-1 bg-violet-950 border border-orange-500 text-orange-500 text-sm rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap">
              Hono
            </span>
          </li>
        </ul>
      </div>
    </section>
  );
}
