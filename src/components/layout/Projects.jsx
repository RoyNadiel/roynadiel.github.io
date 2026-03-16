import Card from '../shared/Card';
import '../shared/Shapes.css';
import { CodeIcon } from '../shared/SVG.jsx';
import VerticalCard from '../shared/VerticalCard';

export default function Projects() {
  const Projects = [
    {
      id: 1,
      name: 'Tasa Actual',
      src: './projects/TasaActual.mp4',
      description:
        'Aplicación web de conversión de divisas en tiempo real para el mercado venezolano. Consulta tasas de cambio actualizadas del par Bolívar/Dólar mediante integración con APIs externas, ofreciendo cálculos precisos y una interfaz intuitiva para usuarios que necesitan información cambiaria confiable.',
      skillsUsed: [
        'Vite',
        'React',
        'TailwindCSS',
        'TypeScript',
        'Api Rest',
        '¡PlayStore!',
      ],
      mainSkill: 'TS',
      projectUrl: 'https://tasaactual.com/',
      playStoreUrl:
        'https://play.google.com/store/apps/details?id=com.tasaactual.twa&hl=es_419',
      status: 'Escalable',
      duration: 'MVP - 1 Mes',
      complexity: 'medium',
      targetAudience: 'Venezolanos',
    },
    {
      id: 2,
      name: 'WrittingJS',
      src: './projects/Writtingjs.webp',
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
      name: 'Deshi',
      src: './projects/Deshi.mp4',
      description:
        'Interfaz Web para el control de una Deshidratadora Electrica construida al rededor del Microcontrolador Wemos D1 Mini. Es posible controlar el tiempo de Deshidratacion (15min - 24h), la temperatura objetivo (30°C - 70°C). Accionar ventiladores y controlar su velocidad via PWM a través de un Mosfet según se necesite. Componentes para el desarrollo de la Deshiratadora en Github.',
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
      targetAudience: 'Todos',
    },
    {
      id: 4,
      name: 'QuoteCreator',
      src: './projects/QuoteCreator.png',
      description:
        'Plataforma web interactiva para la creación y personalización de citas inspiradoras. Permite a los usuarios generar imágenes de citas con estilos personalizables, fuentes variadas y fondos atractivos. Ideal para compartir contenido en redes sociales con un diseño profesional y moderno.',
      skillsUsed: ['React', 'TypeScript', 'TailwindCSS', 'HTML2CANVAS'],
      mainSkill: 'TS',
      githubUrl: 'https://github.com/RoyNadiel/QuoteCreator',
      projectUrl: 'https://quotecreator.roynadiel.workers.dev/',
      status: 'Escalable',
      duration: 'MVP in 3 Days',
      complexity: 'medium',
      targetAudience: 'Todos',
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
      projectUrl: 'https://cv.almadaroy19.workers.dev',
      status: 'Completado',
      duration: '1 Mes',
      complexity: 'medium',
      targetAudience: 'Todos',
    },
    // {
    //   id: 6,
    //   name: 'WemosRC',
    //   src: './projects/WemosRC.mp4',
    //   description:
    //     'Interfaz Web para el control de un carro a control remoto. Se inserta en el firmware de la placa de desarollo Wemos D1 Mini, la cual emitirá una red Wi-Fi (Nombre y Contraseña editables en el código disponible en github) para acceder a ella desde cualquier dispositivo con conexión a Wi-Fi y un navegador. ',
    //   skillsUsed: [
    //     'ESP8266',
    //     'Arduino IDE',
    //     'C++',
    //     'HTML',
    //     'CSS',
    //     'JavaScript',
    //   ],
    //   mainSkill: 'C++',
    //   status: 'Escalable',
    //   duration: '1 Mes',
    //   complexity: 'medium',
    //   targetAudience: 'Todos',
    // },
  ];

  return (
    <section
      role="Projects"
      id="Proyectos"
      className="w-full relative min-h-screen grid grid-cols-1 grid-rows-[auto_1fr] place-items-center gap-15 px-4 md:px-16 
                lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-5"
    >
      <h4
        className="col-span-full inline-flex items-center gap-2 mt-25 text-center text-red-500 text-4xl font-montserrat-alt tracking-widest
                 md:text-5xl"
      >
        PROYECTOS
        <CodeIcon />
      </h4>

      {Projects.map((project) => (
        <VerticalCard key={project.id} {...project} />
      ))}
    </section>
  );
}
