import {
  Briefcase,
  Database,
  ShieldCheck,
  Server,
  Cpu,
  Target,
  Rocket,
} from 'lucide-react';

export default function Experience() {
  return (
    <section
      role="Experience"
      id="Experiencia"
      className="w-full relative min-h-screen flex flex-col items-center justify-center px-4 md:px-8 lg:px-16 py-24 z-10"
    >
      <div className="inline-flex items-center gap-4 mb-16 group">
        <Briefcase
          className="w-10 h-10 md:w-12 md:h-12 text-red-500 transition-transform duration-500"
          strokeWidth={2.5}
        />
        <h4 className="text-center bg-gradient-to-r from-red-500 via-rose-500 to-orange-500 text-transparent bg-clip-text text-4xl font-montserrat-alt tracking-widest md:text-5xl drop-shadow-sm">
          EXPERIENCIA
        </h4>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 max-w-6xl w-full">
        {/* Bloque 1: Intro / Filosofía (Span 7) */}
        <div className="md:col-span-12 lg:col-span-7 p-8 md:p-10 rounded-[2.5rem] bg-white/60 backdrop-blur-xl border border-white/80 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-xl transition-all duration-500 flex flex-col justify-center relative overflow-hidden group">
          <div className="absolute -right-10 -top-10 w-40 h-40 bg-blue-100/50 rounded-full blur-3xl pointer-events-none group-hover:bg-blue-200/70 transition-colors duration-500" />
          <Rocket className="absolute -right-4 -bottom-4 w-32 h-32 text-slate-200/70" />

          <h5 className="text-2xl font-black text-slate-800 mb-4 tracking-tight relative z-10">
            Productos reales, de principio a fin.
          </h5>
          <p className="text-slate-600 text-base md:text-lg leading-relaxed font-medium relative z-10">
            No solo escribo código; diseño arquitecturas, modelo bases de datos
            y aseguro que cada pieza funcione de manera segura en producción. A
            través de proyectos como{' '}
            <strong className="text-slate-800">VeteranOps</strong> y{' '}
            <strong className="text-slate-800">Tasa Actual</strong>, he
            implementado soluciones a problemas complejos manejando usuarios,
            seguridad y escalabilidad real.
          </p>
        </div>

        {/* Bloque 2: Bases de Datos (Span 5) */}
        <div className="md:col-span-6 lg:col-span-5 p-8 rounded-[2.5rem] bg-gradient-to-br from-emerald-50/80 to-teal-100/50 backdrop-blur-xl border border-emerald-200/50 shadow-lg hover:shadow-emerald-200/50 transition-all duration-500 hover:-translate-y-1 relative overflow-hidden group">
          <Database className="absolute -right-8 -bottom-8 w-48 h-48 text-emerald-500/10" />
          <div className="relative z-10">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-emerald-100 text-emerald-600 flex items-center justify-center shadow-sm border border-emerald-200 transition-transform shrink-0">
                <Database className="w-6 h-6 md:w-7 md:h-7" />
              </div>
              <h5 className="text-lg md:text-xl font-bold text-slate-800 tracking-tight leading-tight">
                Bases de Datos Relacionales
              </h5>
            </div>
            <p className="text-emerald-950/70 text-sm md:text-base font-medium leading-relaxed">
              Diseño de BD escalables en{' '}
              <strong className="text-emerald-800">
                SQL (PostgreSQL, MySQL, SQLite) | ORMs (Prisma, Drizzle).
              </strong>
              <br />
              <div className="mt-2">
                Actualmente estudiando en profundidad:
                <br />
                <strong className="text-emerald-950">
                  DQL, DML, DDL y DCL.
                </strong>
              </div>
            </p>
          </div>
        </div>

        {/* Bloque 3: Full-Stack (Span 8) */}
        <div className="md:col-span-12 lg:col-span-8 p-8 md:p-10 rounded-[2.5rem] bg-gradient-to-br from-blue-50/80 to-indigo-100/50 backdrop-blur-xl border border-blue-200/50 shadow-lg hover:shadow-blue-200/50 transition-all duration-500 hover:-translate-y-1 relative overflow-hidden group">
          <Server className="absolute right-0 -bottom-12 md:top-10 w-36 h-36 md:w-64 md:h-64 text-blue-500/10" />
          <div className="relative z-10 md:w-3/4">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-blue-100 text-blue-600 flex items-center justify-center shadow-sm border border-blue-200 shrink-0">
                <Server className="w-6 h-6 md:w-7 md:h-7" />
              </div>
              <h5 className="text-xl md:text-2xl font-bold text-slate-800 tracking-tight leading-tight">
                Desarrollo Full-Stack & Edge Computing
              </h5>
            </div>
            <p className="text-blue-950/70 text-base font-medium leading-relaxed">
              Construcción de interfaces modernas con{' '}
              <strong className="text-blue-800">React y TypeScript</strong>.
              Despliegue de APIs y backends ultraligeros usando{' '}
              <strong className="text-blue-800">
                Cloudflare Workers y Hono
              </strong>
              , asegurando latencia mínima a nivel global.
            </p>
          </div>
        </div>

        {/* Bloque 4: Hardware (Span 4) */}
        <div className="md:col-span-6 lg:col-span-4 p-8 rounded-[2.5rem] bg-gradient-to-br from-purple-50/80 to-fuchsia-100/50 backdrop-blur-xl border border-purple-200/50 shadow-lg hover:shadow-purple-200/50 transition-all duration-500 hover:-translate-y-1 relative overflow-hidden group">
          <Cpu className="absolute -right-4 -bottom-4 w-26 h-26 text-purple-500/10" />
          <div className="relative z-10">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-purple-100 text-purple-600 flex items-center justify-center shadow-sm border border-purple-200 transition-transform shrink-0">
                <Cpu className="w-6 h-6 md:w-7 md:h-7" />
              </div>
              <h5 className="text-lg md:text-xl font-bold text-slate-800 tracking-tight leading-tight">
                Hardware & APIs
              </h5>
            </div>
            <p className="text-purple-950/70 text-sm font-medium leading-relaxed">
              Integración de interfaces web en local (offline) con hardware real
              mediante{' '}
              <strong className="text-purple-800">
                Microcontroladores (Familia ESP de Espressif) y C++.
              </strong>
            </p>
          </div>
        </div>

        {/* Bloque 5: Seguridad (Span 5) */}
        <div className="md:col-span-6 lg:col-span-5 p-8 rounded-[2.5rem] bg-gradient-to-br from-rose-50/80 to-pink-100/50 backdrop-blur-xl border border-rose-200/50 shadow-lg hover:shadow-rose-200/50 transition-all duration-500 hover:-translate-y-1 relative overflow-hidden group">
          <ShieldCheck className="absolute -right-8 -bottom-8 w-40 h-40 text-rose-500/10" />
          <div className="relative z-10">
            <div className="w-12 h-12 md:w-20 md:h-20 rounded-2xl bg-rose-100 text-rose-600 flex items-center justify-center shadow-sm border border-rose-200 transition-transform shrink-0">
              <ShieldCheck className="w-6 h-6 md:w-10 md:h-10" />
            </div>
            <h5 className="text-lg mt-5 md:text-xl font-bold text-slate-800 tracking-tight leading-tight">
              Seguridad & Finanzas
            </h5>
            <p className="text-rose-950/70 mt-2 text-sm font-medium leading-relaxed">
              Gestión de Autenticación (Google OAuth), roles (Role Based Access
              Control) y políticas de seguridad a nivel de fila (
              <strong className="text-rose-800">RLS</strong>). Experiencia
              manejando carteras y transacciones de usuarios en plataformas como
              VeteranOps.
            </p>
          </div>
        </div>

        {/* Bloque 6: Transparencia (Span 7) */}
        <div className="md:col-span-12 lg:col-span-7 p-8 rounded-[2.5rem] bg-slate-900 border border-slate-700 shadow-2xl hover:shadow-indigo-500/20 transition-all duration-500 hover:-translate-y-1 relative overflow-hidden group flex flex-col justify-center">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-indigo-900/40 via-slate-900 to-slate-900" />

          <div className="relative z-10">
            <h5 className="text-xl md:text-2xl font-bold text-white mb-4 flex items-center gap-3">
              <Target className="w-8 h-8 text-rose-500" />
              Transparencia: ¿Qué NO hago?
            </h5>
            <p className="text-slate-400 text-sm md:text-base leading-relaxed font-medium">
              Actualmente mi enfoque principal{' '}
              <strong className="text-slate-200">no incluye</strong> el
              desarrollo móvil nativo puro (Swift/Kotlin), la creación de
              motores gráficos 3D (C++/Rust) ni el entrenamiento de modelos
              fundacionales de IA desde cero. Mi fortaleza absoluta está en el
              desarrollo Full-Stack, la infraestructura moderna y Edge
              Computing.
              <br />
              <br />
              Sin embargo, mi mayor habilidad es la{' '}
              <strong className="text-indigo-400">adaptabilidad técnica</strong>
              : si un desafío requiere aprender algo completamente nuevo, puedo
              asimilarlo y aplicarlo rápidamente.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
