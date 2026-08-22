import Polygon from '../shared/Polygon';
import { useState, useEffect } from 'react';
import TypingEffect from '../shared/TypyingEffect.jsx';
import {
  FileUser,
  Handshake,
  MapPin,
  Code2,
  Clock,
  Sparkles,
  ArrowRight,
  ExternalLink,
} from 'lucide-react';
import { VenezuelaFlag } from '../shared/SVG.jsx';

const AvailabilityBadge = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const timeString = time.toLocaleTimeString('es-VE', {
    hour: '2-digit',
    minute: '2-digit',
    timeZone: 'America/Caracas',
  });

  const dayString = time.toLocaleDateString('es-VE', {
    weekday: 'long',
    timeZone: 'America/Caracas',
  });

  return (
    <div className="inline-flex flex-wrap items-center justify-center gap-2 mb-6">
      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200/80 text-emerald-800 text-xs font-mono font-medium shadow-xs">
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
        </span>
        <span>Disponible para nuevos proyectos</span>
      </div>

      <div className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-50 border border-slate-200/80 text-slate-600 text-xs font-mono">
        <Clock className="w-3.5 h-3.5 text-slate-400" />
        <span className="capitalize">{dayString}</span>, {timeString} Local (VE)
      </div>
    </div>
  );
};

export default function Hero() {
  const [isHovered, setIsHovered] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleContactClick = () => {
    navigator.clipboard.writeText('almadaroy19@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section
      id="Hero"
      className="relative w-full min-h-[90vh] pt-18 sm:pt-32 pb-18 flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8 text-center"
    >
      {/* Background Decorative Glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-pink-200/30 rounded-full blur-3xl pointer-events-none -z-10" />

      {/* Availability & Time */}
      <AvailabilityBadge />

      {/* Polygon Interactive Element */}
      <div className="my-6">
        <Polygon
          isHovered={isHovered}
          className={`${
            isHovered
              ? 'bg-pink-500 transition-all duration-700 ease-out scale-110 shadow-[0_0_40px_rgba(236,72,153,0.35)]'
              : 'bg-cyan-600 transition-all duration-500 ease-in-out shrink-0'
          }`}
        />
      </div>

      {/* Main Title & Subtitles */}
      <div className="max-w-4xl mx-auto space-y-4">
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-sans font-extrabold tracking-tight text-slate-900 leading-[1.1]">
          <span>Roy Nadiel</span> <span className="text-pink-500">H.</span>
          <span className="block text-2xl sm:text-4xl lg:text-5xl font-serif italic font-normal text-slate-600 mt-2">
            <TypingEffect text="Software Developer" typingSpeed={100} />
          </span>
        </h1>

        <p className="max-w-xl mx-auto text-base sm:text-lg text-slate-600 font-sans leading-relaxed">
          Especializado en interfaces modernas, Edge Computing y arquitecturas
          web de alto rendimiento.
        </p>

        <blockquote className="pt-2 text-xs sm:text-sm font-mono text-slate-500">
          <p>«Platón es mi amigo, pero es más amiga la verdad»</p>
          <span className="block mt-1 font-semibold text-slate-700">
            ~ Aristóteles
          </span>
        </blockquote>
      </div>

      {/* CTA Buttons - ACME / VenDevs Style */}
      <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
        <a
          href="mailto:almadaroy19@gmail.com?subject=%C2%A1Hola%20Roy!%20%C2%BFcuando%20tienes%20tiempo%20para%20una%20entrevista%3F"
          title="Haz clic para enviar correo o copiar dirección"
          aria-label="Contratar a Roy Nadiel"
          className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-slate-900 hover:bg-slate-800 text-white font-sans font-semibold text-sm shadow-md hover:shadow-lg transition-all duration-200 cursor-pointer"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onClick={handleContactClick}
        >
          {copied ? (
            '¡Correo copiado!'
          ) : (
            <>
              Contáctame
              <Handshake className="w-4 h-4" />
            </>
          )}
        </a>

        <a
          href="https://cv.roynadiel.workers.dev"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-white hover:bg-slate-50 text-slate-800 font-sans font-semibold text-sm border border-slate-200 shadow-xs hover:border-slate-300 transition-all duration-200 cursor-pointer"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          Ver CV
          <FileUser className="w-4 h-4 text-slate-500" />
        </a>
      </div>

      {/* Fast Stats Bar (ACME pill style) */}
      <div className="mt-12 flex flex-wrap items-center justify-center gap-3 max-w-2xl mx-auto">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white/70 backdrop-blur-md border border-slate-200/80 text-slate-700 text-xs font-mono shadow-xs">
          <Code2 className="w-4 h-4 text-cyan-600" />
          <span>
            <strong>+2 Años</strong> de Experiencia
          </span>
        </div>

        <a
          href="https://cert.efset.org/en/4fxqHD"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white/70 backdrop-blur-md border border-slate-200/80 text-slate-700 text-xs font-mono shadow-xs hover:border-slate-300 transition"
        >
          <ExternalLink className="w-3.5 h-3.5 text-pink-500" />
          <span>
            Inglés: <strong>B2 Intermedio</strong>
          </span>
        </a>

        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white/70 backdrop-blur-md border border-slate-200/80 text-slate-700 text-xs font-mono shadow-xs">
          <MapPin className="w-3.5 h-3.5 text-rose-500" />
          <span className="inline-flex items-center gap-1.5">
            Venezuela <VenezuelaFlag /> | Remoto
          </span>
        </div>
      </div>
    </section>
  );
}
