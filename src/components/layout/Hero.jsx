import Polygon from '../shared/Polygon';
import { useState } from 'react';
import TypingEffect from '../shared/TypyingEffect.jsx';
import { File } from 'lucide-react';
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
          className={`${isHovered ? 'bg-[#f01cff] transition-all duration-500 ease-in-out scale-110' : 'bg-indigo-800 transition-all duration-500 ease-in-out shrink-0'}`}
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

        <div className="inline-flex gap-5 items-center">
          <a
            href="mailto:almadaroy19@gmail.com?subject=%C2%A1Hola%20Roy!%20%C2%BFcuando%20tienes%20tiempo%20para%20una%20entrevista%3F"
            data-interactive="true"
            title="Haz clic para enviar correo o copiar dirección"
            aria-label="Enlace hacia Gmail para Contratarme"
            className={`flex justify-center items-center font-inconsolata tracking-widest h-10 md:h-12 w-fit md:w-52 text-base md:text-xl py-2 px-4 rounded-xl hireMeButtonAnimation transition-colors duration-300 ${
              copied
                ? 'bg-indigo-700 text-white'
                : 'bg-indigo-700 text-gray-200'
            }`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onClick={handleContactClick}
          >
            {copied ? 'Mail Copied!' : 'Hire Me!'}
          </a>
          <a
            href="https://cv.almadaroy19.workers.dev"
            target="_blank"
            rel="noopener noreferrer"
            className="w-fit md:w-52 h-10 md:h-12 inline-flex items-center gap-2 py-2 px-4 text-base md:text-xl font-inconsolata tracking-widest rounded-xl bg-indigo-800 text-gray-200 hover:bg-indigo-600 hover:text-white transition-colors duration-300 cursor-pointer hireMeButtonAnimation"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <File />
            Descargar CV
          </a>
        </div>
      </section>
    </section>
  );
}
