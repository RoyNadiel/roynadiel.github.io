import VerticalCard from '../shared/VerticalCard';
import { Layers } from 'lucide-react';

export default function Projects() {
  const Projects = [
    {
      id: 1,
      name: 'Tasa Actual',
      src: './projects/TasaActual.mp4',
      description:
        'Aplicación web de conversión de divisas en tiempo real para el mercado Venezolano. Consulta tasas de cambio actualizadas del par Bolívar/Dólar mediante integración con API propia, ofreciendo cálculos precisos e interfaz moderna.',
      skillsUsed: [
        'React',
        'TypeScript',
        'Axios',
        'Cloudflare',
        'Supabase',
        'API',
        '¡PlayStore!',
      ],
      mainSkill: 'TypeScript',
      projectUrl: 'https://tasaactual.com/',
      playStoreUrl:
        'https://play.google.com/store/apps/details?id=com.tasaactual.twa&hl=es_419',
      status: 'Completado',
      duration: 'MVP - 1 Mes',
      complexity: 'medium',
      targetAudience: 'Venezolanos',
    },
    {
      id: 2,
      name: 'Syntax',
      src: './projects/Syntax.webp',
      description:
        'Playground de JavaScript & TypeScript inspirado en RunJS. Incluye editor de código con Monaco Editor, ejecución en tiempo real, y validaciones de sintaxis seguras.',
      skillsUsed: [
        'TypeScript',
        'React',
        'Electron',
        'AcornEST',
        'Sucrase',
        'Monaco Editor',
      ],
      mainSkill: 'TypeScript',
      githubUrl: 'https://github.com/RoyNadiel/Syntax',
      projectUrl: 'https://syntax.roynadiel.workers.dev/',
      releaseUrl: 'https://github.com/RoyNadiel/Syntax/releases',
      status: 'Escalable',
      duration: '3 Meses',
      complexity: 'medium',
      targetAudience: 'Devs JS/TS',
    },
    {
      id: 3,
      name: 'Deshi',
      src: './projects/Deshi.mp4',
      description:
        'Interfaz Web para el control de una Deshidratadora Eléctrica construida alrededor del ESP8266 (Wemos D1 Mini). Control de temperatura (30°C - 70°C), timers y velocidad de ventiladores vía PWM.',
      skillsUsed: [
        'ESP8266',
        'Arduino IDE',
        'C++',
        'HTML',
        'CSS',
        'JavaScript',
      ],
      mainSkill: 'C++',
      githubUrl: 'https://github.com/RoyNadiel/Deshi',
      projectUrl: '',
      status: 'Completado',
      duration: '1 Mes',
      complexity: 'medium',
      targetAudience: 'Mecatrónica / IoT',
    },
    {
      id: 4,
      name: 'Quote Creator',
      src: './projects/QuoteCreator.png',
      description:
        'Plataforma web interactiva para la creación y personalización de citas inspiradoras con fuentes y fondos atractivos listos para exportar y compartir.',
      skillsUsed: ['React', 'TypeScript', 'TailwindCSS', 'HTML2CANVAS'],
      mainSkill: 'TypeScript',
      githubUrl: 'https://github.com/RoyNadiel/QuoteCreator',
      projectUrl: 'https://quotecreator.roynadiel.workers.dev/',
      status: 'Escalable',
      duration: '10 Días',
      complexity: 'medium',
      targetAudience: 'Creadores',
    },
    {
      id: 5,
      name: 'CV Interactivo',
      src: './projects/CV.mp4',
      description:
        'Currículum vitae interactivo renderizado en el navegador con Hono y desplegado sobre Cloudflare Workers para máxima velocidad y disponibilidad global.',
      skillsUsed: ['React', 'TypeScript', 'Hono', 'Cloudflare Workers'],
      mainSkill: 'TypeScript',
      githubUrl: 'https://github.com/RoyNadiel/CV',
      projectUrl: 'https://cv.roynadiel.workers.dev',
      status: 'Completado',
      duration: '1 Mes',
      complexity: 'medium',
      targetAudience: 'Reclutadores',
    },
  ];

  return (
    <section
      id="Proyectos"
      className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14"
    >
      {/* Section Header */}
      <div className="flex flex-col items-center text-center mb-16 space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-slate-700 text-xs font-mono">
          <Layers className="w-3.5 h-3.5 text-pink-500" />
          <span>PROYECTOS SELECCIONADOS</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-sans font-extrabold tracking-tight text-slate-900">
          Trabajo & Aplicaciones
        </h2>
        <p className="text-slate-600 text-sm sm:text-base max-w-lg font-sans">
          Proyectos reales enfocados en rendimiento, interfaces pulidas y experiencia de usuario.
        </p>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
        {Projects.map((project) => (
          <VerticalCard key={project.id} {...project} />
        ))}
      </div>
    </section>
  );
}

