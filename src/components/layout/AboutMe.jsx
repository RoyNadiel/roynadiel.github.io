import { Brain } from 'lucide-react';
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
  Astro,
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
  User,
  Heart,
  Cpu,
} from 'lucide-react';

export default function AboutMe() {
  const interests = [
    {
      title: 'Diseño UI/UX y Animaciones',
      icon: <Palette className="w-4 h-4 text-pink-500" />,
    },
    {
      title: 'Open Source y Comunidades',
      icon: <Users className="w-4 h-4 text-cyan-600" />,
    },
    {
      title: 'Performance y Escalabilidad',
      icon: <Zap className="w-4 h-4 text-amber-500" />,
    },
    {
      title: 'Edge Computing & APIs Ligeras',
      icon: <Rocket className="w-4 h-4 text-purple-500" />,
    },
    {
      title: 'Resolución de Problemas Lógicos',
      icon: <GraduationCap className="w-4 h-4 text-emerald-600" />,
    },
    {
      title: 'IoT / Hardware & Software',
      icon: <Cpu className="w-4 h-4 text-emerald-600" />,
    },
    {
      title: 'IA / Machine Learning (Explorando)',
      icon: <Brain className="w-4 h-4 text-emerald-600" />,
    },
  ];

  const technologies = [
    { name: 'HTML5', icon: <HTML /> },
    { name: 'CSS3', icon: <CSS /> },
    { name: 'TailwindCSS', icon: <TailwindCSS /> },
    { name: 'JavaScript', icon: <JS /> },
    { name: 'TypeScript', icon: <TypeScript /> },
    { name: 'C#', icon: <CSHARP /> },
    { name: 'Git', icon: <Git /> },
    { name: 'Astro', icon: <Astro /> },
    { name: 'React', icon: <React /> },
    { name: 'Next.js', icon: <NextJS /> },
    { name: 'Node.js', icon: <NodeJS /> },
    { name: 'Hono', icon: <Hono /> },
    { name: 'Vite', icon: <Vite /> },
    { name: 'Cloudflare', icon: <Cloudflare /> },
  ];

  return (
    <section
      id="Sobre-Mi"
      className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14"
    >
      {/* Section Header */}
      <div className="flex flex-col items-center text-center mb-16 space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-slate-700 text-xs font-mono">
          <User className="w-3.5 h-3.5 text-pink-500" />
          <span>PERFIL & HABILIDADES</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-sans font-extrabold tracking-tight text-slate-900">
          Sobre Mí
        </h2>
        <p className="text-slate-600 text-sm sm:text-base max-w-lg font-sans">
          Curiosidad continua, disciplina autodidacta y atención a los detalles.
        </p>
      </div>

      <div className="space-y-12">
        {/* Bio Card */}
        <div className="p-8 md:p-10 rounded-2xl bg-white/80 backdrop-blur-md border border-slate-200/80 shadow-xs">
          <p className="text-slate-700 font-sans text-base sm:text-lg leading-relaxed">
            Nací en 1999. Me inicié en el mundo de la programación en la
            universidad realizando proyectos en C y C#. Más adelante descubrí la
            ingeniería web y el ecosistema moderno de JavaScript/TypeScript, al
            cual le dedico apasionadamente la mayor parte de mi tiempo libre
            creando herramientas, optimizando flujos y refinando productos.
          </p>
        </div>

        {/* Hobbies Grid (ACME clean card style) */}
        <div>
          <h3 className="text-lg font-bold font-sans text-slate-900 mb-6 flex items-center gap-2">
            <Heart className="w-4 h-4 text-pink-500" />
            <span>Pasatiempos & Disciplinas</span>
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Escritura */}
            <div className="p-6 rounded-xl bg-white/80 border border-slate-200/80 hover:border-slate-300 shadow-xs hover:shadow-md transition duration-300">
              <div className="w-10 h-10 rounded-lg bg-pink-50 text-pink-600 flex items-center justify-center mb-4">
                <PenTool className="w-5 h-5" />
              </div>
              <h4 className="text-base font-bold font-sans text-slate-900 mb-2">
                Escritura
              </h4>
              <p className="text-slate-600 font-sans text-sm leading-relaxed">
                Me gusta escribir para estructurar pensamientos complejos,
                expresar ideas en verso y sintetizar conceptos técnicos.
              </p>
            </div>

            {/* Música */}
            <div className="p-6 rounded-xl bg-white/80 border border-slate-200/80 hover:border-slate-300 shadow-xs hover:shadow-md transition duration-300">
              <div className="w-10 h-10 rounded-lg bg-cyan-50 text-cyan-600 flex items-center justify-center mb-4">
                <Music className="w-5 h-5" />
              </div>
              <h4 className="text-base font-bold font-sans text-slate-900 mb-2">
                Música
              </h4>
              <p className="text-slate-600 font-sans text-sm leading-relaxed">
                Amo la música en todas sus facetas; es el motor creativo de mi
                día a día y concentración constante.
              </p>
            </div>

            {/* Calistenia */}
            <div className="p-6 rounded-xl bg-white/80 border border-slate-200/80 hover:border-slate-300 shadow-xs hover:shadow-md transition duration-300">
              <div className="w-10 h-10 rounded-lg bg-amber-50 text-amber-600 flex items-center justify-center mb-4">
                <Dumbbell className="w-5 h-5" />
              </div>
              <h4 className="text-base font-bold font-sans text-slate-900 mb-2">
                Calistenia
              </h4>
              <p className="text-slate-600 font-sans text-sm leading-relaxed">
                Entrenamiento físico consistente. La constancia corporal
                complementa la resistencia mental al resolver código.
              </p>
            </div>
          </div>
        </div>

        {/* Intereses (Pill Tags) */}
        <div>
          <h3 className="text-lg font-bold font-sans text-slate-900 mb-6 flex items-center gap-2">
            <Cpu className="w-4 h-4 text-cyan-600" />
            <span>Áreas de Interés</span>
          </h3>
          <div className="flex items-center justify-center flex-wrap gap-3">
            {interests.map((item, idx) => (
              <div
                key={idx}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-white/90 border border-slate-200/80 hover:border-slate-300 shadow-xs text-xs sm:text-sm font-sans font-medium text-slate-700 transition"
              >
                {item.icon}
                <span>{item.title}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Tech Stack Continuous Carousel */}
        <div className="pt-8 border-t border-slate-200/80 pb-6 overflow-hidden">
          <h3 className="text-center text-sm font-mono uppercase tracking-widest text-slate-500">
            Tecnologías & Herramientas
          </h3>

          {/* Marquee Container with edge fade masks */}
          <div className="relative w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)] pt-14 pb-16">
            <div className="animate-marquee flex items-center gap-8 py-2">
              {/* Duplicar la lista para un loop infinito sin cortes */}
              {[...technologies, ...technologies].map((tech, index) => (
                <div
                  key={index}
                  className="w-14 h-14 lg:w-16 lg:h-16 p-2.5 lg:p-3 skillsImg relative group rounded-2xl bg-white/90 border border-slate-200/80 shadow-xs flex items-center justify-center transition-all duration-300 reflect-image hover:scale-110 hover:-translate-y-1 hover:border-pink-300 hover:shadow-lg cursor-pointer shrink-0"
                >
                  <div className="w-full h-full flex items-center justify-center relative z-10 shrink-0">
                    {tech.icon}
                  </div>

                  {/* Tooltip */}
                  <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-3 opacity-0 group-hover:opacity-100 transition-all duration-200 pointer-events-none z-50">
                    <div className="px-3 py-1 bg-slate-900/90 backdrop-blur-md rounded-lg shadow-md border border-slate-700">
                      <span className="text-[11px] font-mono font-semibold text-white uppercase whitespace-nowrap">
                        {tech.name}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
