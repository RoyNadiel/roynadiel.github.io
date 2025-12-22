import './Shapes.css';
import { GitHubSVG } from './SVG';

export default function Card({
  name,
  src,
  description,
  skills,
  skillUsed,
  imageWidth,
  projectUrl,
  onMouseEnter,
  onMouseLeave,
}) {
  return (
    <article className="relative w-fit h-fit scaleSmoothly">
      <a href={projectUrl} target="_blank">
        <h3
          className="absolute inline-flex items-center gap-2 mt-2 text-center left-1/8 text-red-500 text-2xl font-fira-code tracking-wider
                    md:text-2xl 
                    xl:text-3xl"
          data-interactive="true"
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
        >
          {name}

          <GitHubSVG />
        </h3>
      </a>
      <p
        className="absolute w-fit h-fit right-0 z-10 mt-2 px-6 text-2xl text-amber-500 font-fira-code
            xl:text-3xl xl:px-7.5"
      >
        {skillUsed}
      </p>

      <article
        className="w-80 h-130 pt-20 pb-6 px-8 flex flex-col items-center justify-between gap-2 bg-indigo-900 shape            
            xl:w-95"
      >
        <div className="w-fit h-fit border-2 rounded-lg border-indigo-500 p-0.5">
          <video
            autoPlay
            loop
            muted
            src={src}
            alt={name}
            className={`max-w-${imageWidth} object-contain 2xl:max-w-${imageWidth + 20}`}
            width={imageWidth + 20}
          />
        </div>

        <p className="text-gray-300 text-xl font-league-spartan text-balance">
          {description}
        </p>

        <div className="w-full max-h-fit flex justify-center items-center">
          <ul className="inline-flex flex-wrap items-center justify-center gap-2">
            {skills.map((skill, index) => (
              <li
                key={index}
                className="text-indigo-300 text-sm bg-indigo-950 px-2 py-1 rounded"
              >
                {skill}
              </li>
            ))}
          </ul>
        </div>
      </article>
    </article>
  );
}
