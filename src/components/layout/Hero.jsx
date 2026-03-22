import Polygon from '../shared/Polygon';
import { useState, useEffect } from 'react';
import TypingEffect from '../shared/TypyingEffect.jsx';
import { FileUser, Handshake, MapPin, Globe, Code2, Clock } from 'lucide-react';
import { CodeIcon, VenezuelaFlag } from '../shared/SVG.jsx';

const AvailabilityBadge = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const timeString = time.toLocaleTimeString('es-VE', {
    hour: '2-digit',
    minute: '2-digit',
  });

  const dayString = time.toLocaleDateString('es-VE', {
    weekday: 'long',
  });

  return (
    <div className="hidden xl:flex absolute top-[15%] left-10 flex-col gap-3 z-20">
      <div className="flex items-center gap-3 bg-white/5 border border-white/10 backdrop-blur-md px-4 py-2 text-sm font-libertinus text-red-400">
        <span className="relative flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full bg-orange-400 opacity-75"></span>
          <span className="relative inline-flex h-3 w-3 bg-orange-500"></span>
        </span>
        Disponibilidad Inmediata
      </div>

      <div className="flex items-center gap-2 bg-white/5 border border-white/10 backdrop-blur-md px-4 py-2 text-xs font-fira-code text-sky-800 w-fit ml-4">
        <Clock className="w-4 h-4 text-sky-500" />
        <span className="capitalize">{dayString}</span>, {timeString} Local
      </div>
    </div>
  );
};

const FastStats = () => {
  return (
    <div className="hidden xl:flex absolute bottom-1/6 left-10 flex-col gap-4 z-20">
      <div className="group flex items-center gap-3 bg-white/5 border border-white/10 backdrop-blur-md p-2 rounded-2xl hover:bg-white/10 transition-colors w-fit duration-300">
        <div className="bg-sky-500/20 p-2.5 rounded-xl text-sky-400 group-hover:bg-sky-500/30 transition-colors">
          <Code2 className="w-5 h-5" />
        </div>
        <div className="flex flex-col pr-5">
          <span className="text-[11px] text-gray-500 font-fira-code uppercase tracking-wider">
            Experiencia
          </span>
          <span className="text-sm font-bold text-red-400">+1 Año Dev</span>
        </div>
      </div>

      <a
        className="group flex items-center gap-3 bg-white/5 border border-white/10 backdrop-blur-md p-2 rounded-2xl hover:bg-white/10 transition-colors w-fit ml-6 duration-300"
        href="https://cert.efset.org/en/4fxqHD"
        target="_blank"
        rel="noopener noreferrer"
        data-interactive="true"
        title="Ver certificado de nivel de inglés"
      >
        <div className="bg-red-500/20 p-2.5 rounded-xl text-red-500 group-hover:bg-red-500/30 transition-colors">
          <Globe className="w-5 h-5" />
        </div>
        <div className="flex flex-col pr-5">
          <span className="text-[11px] text-gray-500 font-fira-code uppercase tracking-wider">
            Inglés
          </span>
          <span className="text-sm font-bold text-red-400">B2 Intermedio</span>
        </div>
      </a>

      <div className="group flex items-center gap-3 bg-white/5 border border-white/10 backdrop-blur-md p-2 rounded-2xl hover:bg-white/10 transition-colors w-fit duration-300">
        <div className="bg-red-500/20 p-2.5 rounded-xl text-red-500 group-hover:bg-red-500/30 transition-colors">
          <MapPin className="w-5 h-5" />
        </div>
        <div className="flex flex-col pr-5">
          <span className="text-[11px] text-gray-500 font-fira-code uppercase tracking-wider">
            Ubicación
          </span>
          <span className="text-sm font-bold text-red-400 inline-flex items-center gap-x-1">
            Venezuela <VenezuelaFlag /> | Remoto
          </span>
        </div>
      </div>
    </div>
  );
};

export default function Hero() {
  const [isHovered, setIsHovered] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleContactClick = () => {
    // Copiamos el correo al portapapeles
    navigator.clipboard.writeText('almadaroy19@gmail.com');

    // Mostramos feedback visual
    setCopied(true);
    setTimeout(() => setCopied(false), 2000); // El mensaje desaparece en 2 segundos
  };

  return (
    <section
      role="Presenación"
      id="Hero"
      className="relative w-full h-screen py-10"
    >
      <AvailabilityBadge />
      <FastStats />

      <section
        role="Centro, Presentación"
        className="h-full flex flex-col justify-around items-center text-center px-5 md:px-10 relative z-10"
      >
        <Polygon
          isHovered={isHovered}
          className={`${
            isHovered
              ? 'bg-red-500 transition-all duration-1000 ease-in-out scale-110 shadow-[0_0_30px_rgba(239,68,68,0.5)]'
              : 'bg-blue-500 transition-all duration-500 ease-in-out shrink-0'
          }`}
        />

        <div className="flex flex-col items-center">
          <h2
            className="flex flex-col text-5xl lg:text-6xl items-center justify-center gap-2 font-fira-code font-bold text-red-500
                        md:flex-row"
          >
            <strong>
              <TypingEffect text={`Software Developer`} typingSpeed={100} />
            </strong>
            <CodeIcon />
          </h2>
          <p className="max-w-200 text-lg font-fira-code text-red-600 mt-10 md:mt-2">
            Autodidacta Desarrollador de Software.
          </p>
          <p className="max-w-200 text-lg font-fira-code text-red-600">
            Orientado a la Web.
          </p>
          <p className="max-w-200 text-lg md:text-xl font-libertinus text-blue-500 mt-6">
            Platón es mi amigo, pero es más amiga la verdad.
          </p>
          <p className="max-w-200 text-xl font-fira-code text-blue-500 font-bold">
            ~Aristoteles<span className="text-pink-500 text-sm">.</span>
          </p>
        </div>

        <div className="inline-flex gap-x-3 md:gap-x-8 items-center">
          <a
            href="mailto:almadaroy19@gmail.com?subject=%C2%A1Hola%20Roy!%20%C2%BFcuando%20tienes%20tiempo%20para%20una%20entrevista%3F"
            data-interactive="true"
            title="Haz clic para enviar correo o copiar dirección"
            aria-label="Enlace hacia Gmail para Contratarme"
            className={`flex justify-center items-center gap-x-2 font-inconsolata tracking-widest h-10 md:h-12 w-38 md:w-48 text-sm md:text-xl py-2 px-4 rounded-xl heroButtonAnimation transition-colors duration-300 ${
              copied
                ? 'bg-sky-700 border border-sky-700 text-white'
                : 'bg-sky-700 border border-sky-700 text-white'
            }`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onClick={handleContactClick}
          >
            {copied ? (
              'Mail Copied!'
            ) : (
              <>
                Hire Me
                <Handshake className="w-4 h-4 md:w-5 md:h-5" />
              </>
            )}
          </a>
          <a
            href="https://cv.roynadiel.workers.dev"
            target="_blank"
            rel="noopener noreferrer"
            className="w-fit md:w-40 h-10 md:h-12 inline-flex items-center justify-center gap-2 py-2 px-4 text-sm md:text-xl font-inconsolata tracking-widest rounded-xl border-2 border-sky-500 transition-colors duration-300 cursor-pointer heroButtonAnimation"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            Ver CV
            <FileUser className="w-4 h-4 md:w-5 md:h-5" />
          </a>
        </div>
      </section>
    </section>
  );
}
