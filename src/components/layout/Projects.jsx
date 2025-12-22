import Card from '../shared/Card';
import '../shared/Shapes.css';
import { CodeIcon } from '../shared/SVG.jsx';
import HorizontalCard from '../shared/HorizontalCard';

export default function Projects() {
  const Projects = [
    {
      id: 1,
      name: 'Tasa Actual',
      src: './projects/TasaActual.mp4',
      description:
        'Aplicación web de conversión de divisas en tiempo real para el mercado venezolano. Consulta tasas de cambio actualizadas del par Bolívar/Dólar mediante integración con APIs externas, ofreciendo cálculos precisos y una interfaz intuitiva para usuarios que necesitan información cambiaria confiable.',
      skillsUsed: ['Vite', 'React', 'TailwindCSS', 'TypeScript', 'Api Rest'],
      mainSkill: 'TS',
      projectUrl: 'https://tasaactual.com/',
      status: 'Escalable',
      duration: 'MVP - 1 Mes',
      complexity: 'medium',
      targetAudience: 'Venezolanos',
    },
    {
      id: 2,
      name: 'WrittingJS',
      src: './projects/WrittingJS.mp4',
      description:
        'Entorno de desarrollo interactivo para JavaScript inspirado en RunJS. Incluye editor de código con Monaco Editor, ejecución en tiempo real, y validaciones estrictas que fomentan las mejores prácticas de programación. Ideal para aprender, experimentar y prototipar código JavaScript de forma rápida y segura.',
      skillsUsed: ['Vanilla', 'JavaScript', 'HTML', 'CSS', 'Monaco Editor'],
      mainSkill: 'JS',
      projectUrl: 'https://writtingjs.pages.dev/',
      status: 'Escalable',
      duration: '3 Meses',
      complexity: 'medium',
      targetAudience: 'Estudiantes de JS',
    },
    {
      id: 3,
      name: 'Chess Game',
      src: './projects/Chess.mp4',
      description:
        'Implementación completa del juego de ajedrez para dos jugadores desarrollada en WPF. Incluye validación de movimientos legales, detección de jaque y jaque mate, y una interfaz gráfica elegante. En desarrollo: modo multijugador en línea mediante sockets TCP para partidas remotas en tiempo real.',
      skillsUsed: ['.NET', 'C#', 'WPF', 'XAML'],
      mainSkill: 'C#',
      githubUrl: 'https://github.com/RoyNadiel/Chess',
      status: 'En Progreso',
      duration: '2 Meses',
      complexity: 'high',
      targetAudience: 'Todos',
    },
    {
      id: 4,
      name: 'Island Store',
      src: './projects/IslandStore.mp4',
      description:
        'Plataforma de comercio electrónico full-stack con arquitectura moderna. Presenta catálogo de productos organizado por categorías, sistema de búsqueda y filtrado, y renderizado del lado del servidor (SSR) para optimizar SEO y rendimiento. Integra APIs REST para gestión de inventario y procesamiento de pedidos.',
      skillsUsed: ['NextJS', 'TypeScript', 'TailwindCSS', 'Api Rest', 'SSR'],
      mainSkill: 'TS',
      githubUrl: 'https://github.com/RoyNadiel/ECommerce',
      projectUrl: 'https://islandstore.vercel.app/',
      status: 'Completado',
      duration: '1 Mes',
      complexity: 'low',
      targetAudience: 'Consumidores',
    },
    {
      id: 5,
      name: 'CV',
      src: './projects/CV.mp4',
      description:
        'Currículum vitae interactivo renderizado como PDF en el navegador. Desarrollado con React y TypeScript, desplegado en Cloudflare Workers para máxima velocidad y disponibilidad global. Utiliza Hono como framework backend ligero, ofreciendo una presentación profesional de habilidades y experiencia con carga instantánea.',
      skillsUsed: ['React', 'TypeScript', 'Hono', 'Cloudflare Workers'],
      mainSkill: 'TS',
      githubUrl: 'https://github.com/RoyNadiel/CV',
      projectUrl: 'https://curriculum.almadaroy19.workers.dev',
      status: 'Completado',
      duration: '1 Mes',
      complexity: 'medium',
      targetAudience: 'Todos',
    },
    {
      id: 6,
      name: 'Writer',
      src: './projects/Writer.mp4',
      description:
        'Editor de texto de escritorio inspirado en el Bloc de Notas de Windows, desarrollado con tecnologías .NET. Ofrece funcionalidades esenciales como crear, abrir, editar y guardar archivos de texto, con una interfaz limpia y familiar. Implementa operaciones de sistema de archivos nativas para una experiencia fluida.',
      skillsUsed: ['.NET', 'C#', 'WPF', 'XAML', 'File System'],
      mainSkill: 'C#',
      githubUrl: 'https://github.com/RoyNadiel/Notes',
      status: 'Completado',
      duration: '1 Mes',
      complexity: 'low',
      targetAudience: 'Escritores',
    },
  ];

  console.log(Projects);

  return (
    <section
      role="Projects"
      id="Proyectos"
      className="w-full relative min-h-screen grid grid-cols-1 grid-rows-[auto_1fr] place-items-center gap-15 px-4 md:px-14
                md:grid-cols-1 md:grid-rows-[auto_1fr] md:gap-5"
    >
      <h4
        className="col-span-full inline-flex items-center gap-2 mt-25 text-center text-red-500 text-4xl font-montserrat-alt tracking-widest
                 md:text-5xl"
      >
        PROYECTOS
        <CodeIcon />
      </h4>

      {Projects.map((project) => (
        <HorizontalCard key={project.id} {...project} />
      ))}
    </section>
  );
}
