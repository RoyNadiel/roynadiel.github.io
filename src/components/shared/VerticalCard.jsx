import { ExternalLink, Star, Code2, Users, Clock, Download } from 'lucide-react';
import { GitHubSVG } from './SVG';

function ProjectCard({
  name,
  src,
  description,
  mainSkill,
  skillsUsed,
  projectUrl,
  githubUrl,
  playStoreUrl,
  releaseUrl = null,
  status = 'completed',
  duration = '3 months',
  complexity = 'high',
  targetAudience = 'Todos',
}) {
  const isVideo = (src) => {
    if (!src) return false;
    const extension = src.split('.').pop().toLowerCase();
    return ['mp4', 'webm', 'ogg', 'mov'].includes(extension);
  };

  return (
    <div className="group relative flex flex-col w-full h-full bg-white/80 backdrop-blur-md rounded-2xl border border-slate-200/80 hover:border-slate-300 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden">
      {/* Media Preview / Screen container */}
      <div className="relative w-full aspect-video bg-slate-100/80 overflow-hidden border-b border-slate-100 flex items-center justify-center">
        {isVideo(src) ? (
          <video
            src={src}
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        ) : (
          <img
            src={src}
            alt={name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        )}

        {/* Status Badge */}
        <div className="absolute top-3 left-3">
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-mono font-medium bg-white/90 backdrop-blur-md text-slate-800 border border-slate-200 shadow-xs">
            <span className={`w-2 h-2 rounded-full ${status === 'Completado' ? 'bg-emerald-500' : 'bg-pink-500'}`} />
            {status}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 p-6 flex flex-col justify-between space-y-6">
        <div>
          {/* Header & Action Icons */}
          <div className="flex items-center justify-between gap-2 mb-3">
            <h3 className="text-xl font-bold font-sans tracking-tight text-slate-900 group-hover:text-pink-600 transition-colors">
              {name}
            </h3>

            <div className="flex items-center gap-1.5">
              {githubUrl && (
                <a
                  href={githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 transition cursor-pointer"
                  aria-label="GitHub Repository"
                  title="Ver código en GitHub"
                >
                  <GitHubSVG className="w-4 h-4 fill-slate-800" />
                </a>
              )}
              {projectUrl && (
                <a
                  href={projectUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-white transition cursor-pointer"
                  aria-label="Live Demo"
                  title="Abrir proyecto en vivo"
                >
                  <ExternalLink className="w-4 h-4" />
                </a>
              )}
              {releaseUrl && (
                <a
                  href={releaseUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-cyan-600 hover:bg-cyan-700 text-white transition cursor-pointer"
                  aria-label="Releases"
                  title="Descargar versión"
                >
                  <Download className="w-4 h-4" />
                </a>
              )}
            </div>
          </div>

          {/* Quick Metrics Bar */}
          <div className="flex flex-wrap items-center gap-2 mb-4 text-xs font-mono text-slate-500">
            <span className="px-2 py-0.5 rounded-md bg-pink-50 text-pink-700 border border-pink-100 font-semibold">
              {mainSkill}
            </span>
            <span>•</span>
            <span className="flex items-center gap-1">
              <Clock className="w-3.5 h-3.5 text-slate-400" />
              {duration}
            </span>
            <span>•</span>
            <span className="flex items-center gap-1">
              <Users className="w-3.5 h-3.5 text-slate-400" />
              {targetAudience}
            </span>
          </div>

          <p className="text-slate-600 font-sans text-sm leading-relaxed line-clamp-4">
            {description}
          </p>
        </div>

        {/* Tech Tags / Badges */}
        <div className="pt-4 border-t border-slate-100">
          <div className="flex flex-wrap gap-1.5">
            {skillsUsed.map((skill, index) =>
              skill === '¡PlayStore!' ? (
                <a
                  key={index}
                  className="px-2.5 py-1 bg-gradient-to-r from-emerald-50 to-teal-50 hover:from-emerald-100 text-emerald-800 text-xs font-mono font-medium rounded-md border border-emerald-200 transition cursor-pointer"
                  href={playStoreUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Google Play
                </a>
              ) : (
                <span
                  key={index}
                  className="px-2.5 py-1 text-slate-600 bg-slate-50 hover:bg-slate-100 text-xs font-mono rounded-md border border-slate-200/80 transition"
                >
                  {skill}
                </span>
              )
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;

