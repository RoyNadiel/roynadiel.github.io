import Polygon from '../shared/Polygon';
import { useState } from 'react';
import TypingEffect from '../shared/TypyingEffect.jsx';
import { FileUser, Handshake } from 'lucide-react';
import { CodeSVG } from '../shared/SVG.jsx';

export default function Hero() {
  const [isHovered, setIsHovered] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleContactClick = (e) => {
    // Copiamos el correo al portapapeles
    navigator.clipboard.writeText('almadaroy19@gmail.com');

    // Mostramos feedback visual
    setCopied(true);
    setTimeout(() => setCopied(false), 2000); // El mensaje desaparece en 2 segundos
  };

  return (
    <section role="Presenación" id="Hero" className="w-full h-screen py-10">
      <section
        role="Centro, Presentación"
        className="h-full flex flex-col justify-around items-center text-center px-5 md:px-10"
      >
        <Polygon
          isHovered={isHovered}
          className={`${
            isHovered
              ? 'bg-[#f01caf] transition-all duration-1000 ease-in-out scale-110'
              : 'bg-blue-600 transition-all duration-500 ease-in-out shrink-0'
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
            <CodeSVG />
          </h2>
          <p className="max-w-200 text-lg font-fira-code text-red-400 mt-10 md:mt-2">
            Autodidacta y Universitario.
          </p>
          <p className="max-w-200 text-lg font-fira-code text-red-400">
            Experiencia en desarrollo web y apps de escritorio.
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
                ? 'text-white'
                : 'bg-indigo-700 border border-indigo-700 text-gray-200'
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
            href="https://cv.almadaroy19.workers.dev"
            target="_blank"
            rel="noopener noreferrer"
            className="w-fit md:w-40 h-10 md:h-12 inline-flex items-center justify-center gap-2 py-2 px-4 text-sm md:text-xl font-inconsolata tracking-widest rounded-xl border border-indigo-500 text-gray-200 transition-colors duration-300 cursor-pointer heroButtonAnimation"
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
