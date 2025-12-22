import { ExternalLink, Star, Code2, Zap, Users, Clock } from 'lucide-react';
import { GitHubSVG } from './SVG';
import { useState } from 'react';

function ProjectCard({
  name,
  src,
  description,
  mainSkill,
  skillsUsed,
  projectUrl,
  githubUrl,
  status = 'completed',
  duration = '3 months',
  complexity = 'high',
  targetAudience = 'Todos',
}) {
  const [isHovered, setIsHovered] = useState(false);

  const complexityColor = {
    low: 'bg-green-50 text-green-700 border-green-200',
    medium: 'bg-yellow-50 text-yellow-700 border-yellow-200',
    high: 'bg-red-50 text-red-700 border-red-200',
  };

  const complexityLabel = {
    low: 'Baja',
    medium: 'Media',
    high: 'Alta',
  };

  return (
    <div
      className="group relative bg-indigo-900 rounded-2xl overflow-hidden w-full mx-auto transition-all duration-500 border-2 border-indigo-400/70"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        boxShadow: isHovered
          ? '0 25px 50px -12px rgba(0, 0, 0, 0.15), 0 0 60px 0 rgba(59, 130, 246, 0.15)'
          : '0 10px 30px -5px rgba(0, 0, 0, 0.1)',
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 via-transparent to-purple-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

      <div className="flex flex-col md:flex-row relative z-10">
        {/*VIDEO*/}
        <div className="relative w-full md:w-1/2 overflow-hidden bg-transparent group/video">
          <video
            src={src}
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-fill group-hover/video:scale-110 transition-transform duration-700"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover/video:opacity-100 transition-opacity duration-500" />

          <div className="absolute inset-0 opacity-0 group-hover/video:opacity-100 transition-opacity duration-500 flex items-center justify-center">
            <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/30 group-hover/video:scale-110 transition-transform duration-500">
              <Zap className="w-8 h-8 text-white fill-white" />
            </div>
          </div>

          <div className="absolute top-4 left-4 flex gap-2">
            <span
              className={`text-xs font-bold px-3 py-1.5 rounded-full border ${
                status === 'Completado'
                  ? 'bg-green-50 text-green-700 border-green-200'
                  : status === 'Escalable'
                    ? 'bg-blue-50 text-blue-700 border-blue-200'
                    : 'bg-blue-50 text-blue-700 border-blue-200'
              }`}
            >
              {status === 'Completado'
                ? '✅ Completado'
                : status === 'Escalable'
                  ? '🚀 Escalable'
                  : '⚡ En Progreso'}
            </span>
          </div>
        </div>

        <div className="flex-1 p-8 md:p-10 flex flex-col justify-between">
          <div>
            <div className="flex items-start justify-between mb-2">
              <div className="flex-1">
                <div className="flex items-baseline gap-3 mb-3">
                  <h3 className="text-3xl font-bold text-red-600">{name}</h3>
                </div>

                <div className="flex flex-wrap items-center gap-3 mb-5">
                  <div className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-amber-50 to-orange-50 rounded-lg border border-amber-100 group-hover:shadow-lg transition-all duration-300">
                    <Star className="w-4 h-4 text-amber-500 fill-amber-500" />
                    <span className="text-sm font-semibold text-amber-700">
                      {mainSkill}
                    </span>
                  </div>

                  <div
                    className={`flex items-center gap-1.5 px-4 py-2 rounded-lg border text-sm font-semibold transition-all duration-300 ${complexityColor[complexity]}`}
                  >
                    <Code2 className="w-4 h-4" />
                    Complejidad: {complexityLabel[complexity]}
                  </div>
                </div>
              </div>

              {githubUrl && (
                <a
                  href={githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ml-4 p-3 rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 text-white hover:shadow-lg hover:shadow-blue-500/50 transition-all duration-300 transform hover:scale-110 flex-shrink-0"
                  aria-label="Ver proyecto"
                >
                  <GitHubSVG className="w-5 h-5" />
                </a>
              )}

              {projectUrl && (
                <a
                  href={projectUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ml-2 p-3 rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 text-white hover:shadow-lg hover:shadow-blue-500/50 transition-all duration-300 transform hover:scale-110 flex-shrink-0"
                  aria-label="Ver proyecto"
                >
                  <ExternalLink className="w-5 h-5" />
                </a>
              )}
            </div>

            <p className="font-league-spartan text-gray-100 leading-relaxed mb-8 text-base md:text-xl">
              {description}
            </p>
          </div>

          <div className="space-y-6 border-t border-gray-100 pt-6">
            <div className="grid grid-cols-3 gap-4">
              <div className="text-center p-3 rounded-lg bg-gradient-to-br from-blue-100 to-blue-200 group-hover:shadow-md transition-all duration-300">
                <div className="text-xs text-gray-600 uppercase font-semibold tracking-wider mb-1">
                  <Clock className="w-4 h-4 mx-auto text-blue-600 mb-1" />
                  Duración
                </div>
                <div className="text-sm font-bold text-gray-900">
                  {duration}
                </div>
              </div>

              <div className="text-center p-3 rounded-lg bg-gradient-to-br from-purple-100 to-purple-200 group-hover:shadow-md transition-all duration-300">
                <Users className="w-4 h-4 mx-auto text-purple-600 mb-1" />
                <div className="text-xs text-gray-600 uppercase font-semibold tracking-wider mb-1">
                  Audiencia
                </div>
                <div className="text-sm font-bold text-gray-900">
                  {targetAudience}
                </div>
              </div>

              <div className="text-center p-3 rounded-lg bg-gradient-to-br from-red-100 to-red-200  group-hover:shadow-md transition-all duration-300">
                <Code2 className="w-4 h-4 mx-auto text-red-600 mb-1" />
                <div className="text-xs text-gray-600 uppercase font-semibold tracking-wider mb-1">
                  Stack
                </div>
                <div className="text-sm font-bold text-gray-900">
                  {skillsUsed.length} Tecnologías
                </div>
              </div>
            </div>

            <div>
              <h4 className="text-xs font-bold text-gray-100 uppercase tracking-widest mb-4">
                Tecnologías Utilizadas
              </h4>
              <div className="flex flex-wrap gap-2">
                {skillsUsed.map((skill, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 bg-gradient-to-r from-gray-50 to-gray-100 text-gray-700 text-xs font-semibold rounded-lg border border-gray-200 hover:border-blue-300 hover:shadow-md hover:from-blue-50 hover:to-blue-100 transition-all duration-300 cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
