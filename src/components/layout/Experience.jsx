import {
  Briefcase,
  Database,
  ShieldCheck,
  Server,
  Cpu,
  Target,
  Sparkles,
  CheckCircle2,
} from 'lucide-react';

export default function Experience() {
  return (
    <section
      id="Experiencia"
      className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-28"
    >
      {/* Section Header */}
      <div className="flex flex-col items-center text-center mb-16 space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-slate-700 text-xs font-mono">
          <Briefcase className="w-3.5 h-3.5 text-cyan-600" />
          <span>EXPERIENCIA & ENFOQUE</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-sans font-extrabold tracking-tight text-slate-900">
          Arquitectura & Capacidades
        </h2>
        <p className="text-slate-600 text-sm sm:text-base max-w-lg font-sans">
          Construcción de software de extremo a extremo, desde bases de datos hasta el Edge.
        </p>
      </div>

      {/* Bento Grid */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
        {/* Card 1: Filosofía de Producto (Span 7) */}
        <div className="md:col-span-12 lg:col-span-7 p-8 rounded-2xl bg-white/80 backdrop-blur-md border border-slate-200/80 hover:border-slate-300 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between">
          <div>
            <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-md bg-pink-50 border border-pink-100 text-pink-700 text-xs font-mono mb-4">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Full Lifecycle</span>
            </div>
            <h3 className="text-2xl font-bold font-sans text-slate-900 mb-3 tracking-tight">
              Productos reales, de principio a fin.
            </h3>
            <p className="text-slate-600 font-sans text-base leading-relaxed">
              No solo escribo código; diseño arquitecturas, modelo bases de datos y aseguro que cada pieza funcione de manera óptima en producción. A través de proyectos como <strong className="text-slate-800">VenLedger</strong> y <strong className="text-slate-800">Tasa Actual</strong>, resuelvo problemas complejos manejando autenticación, seguridad y rendimiento real.
            </p>
          </div>

          <div className="mt-6 flex flex-wrap gap-2 pt-4 border-t border-slate-100 text-xs font-mono text-slate-500">
            <span className="flex items-center gap-1"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" /> Modelado de Datos</span>
            <span className="flex items-center gap-1"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" /> UI/UX Engineering</span>
            <span className="flex items-center gap-1"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" /> Edge APIs</span>
          </div>
        </div>

        {/* Card 2: Bases de Datos (Span 5) */}
        <div className="md:col-span-6 lg:col-span-5 p-8 rounded-2xl bg-white/80 backdrop-blur-md border border-slate-200/80 hover:border-slate-300 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between">
          <div>
            <div className="w-10 h-10 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-600 flex items-center justify-center mb-5">
              <Database className="w-5 h-5" />
            </div>
            <h3 className="text-xl font-bold font-sans text-slate-900 mb-2">
              Bases de Datos & SQL
            </h3>
            <p className="text-slate-600 font-sans text-sm leading-relaxed">
              Diseño relacional escalable en <strong>PostgreSQL, MySQL y SQLite</strong> utilizando ORMs modernos como <strong>Prisma</strong> y <strong>Drizzle</strong>, asegurando consistencia y normalización.
            </p>
          </div>
          <div className="mt-4 pt-4 border-t border-slate-100 text-xs font-mono text-emerald-700">
            DQL • DML • DDL • Migraciones
          </div>
        </div>

        {/* Card 3: Full-Stack & Edge (Span 8) */}
        <div className="md:col-span-12 lg:col-span-8 p-8 rounded-2xl bg-white/80 backdrop-blur-md border border-slate-200/80 hover:border-slate-300 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between">
          <div>
            <div className="w-10 h-10 rounded-xl bg-cyan-50 border border-cyan-200 text-cyan-600 flex items-center justify-center mb-5">
              <Server className="w-5 h-5" />
            </div>
            <h3 className="text-xl font-bold font-sans text-slate-900 mb-2">
              Desarrollo Full-Stack & Edge Computing
            </h3>
            <p className="text-slate-600 font-sans text-base leading-relaxed">
              Construcción de aplicaciones reactivas con <strong>React 19 y TypeScript</strong>. Despliegue de backends ultrarrápidos sobre <strong>Cloudflare Workers</strong> y <strong>Hono</strong>, logrando tiempos de respuesta inferiores a 50ms a nivel global.
            </p>
          </div>
          <div className="mt-4 pt-4 border-t border-slate-100 flex flex-wrap gap-2 text-xs font-mono text-slate-600">
            <span className="bg-slate-50 px-2 py-0.5 rounded border border-slate-200">React 19</span>
            <span className="bg-slate-50 px-2 py-0.5 rounded border border-slate-200">TypeScript</span>
            <span className="bg-slate-50 px-2 py-0.5 rounded border border-slate-200">Cloudflare Workers</span>
            <span className="bg-slate-50 px-2 py-0.5 rounded border border-slate-200">Hono</span>
          </div>
        </div>

        {/* Card 4: Hardware & IoT (Span 4) */}
        <div className="md:col-span-6 lg:col-span-4 p-8 rounded-2xl bg-white/80 backdrop-blur-md border border-slate-200/80 hover:border-slate-300 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between">
          <div>
            <div className="w-10 h-10 rounded-xl bg-purple-50 border border-purple-200 text-purple-600 flex items-center justify-center mb-5">
              <Cpu className="w-5 h-5" />
            </div>
            <h3 className="text-xl font-bold font-sans text-slate-900 mb-2">
              Hardware & IoT
            </h3>
            <p className="text-slate-600 font-sans text-sm leading-relaxed">
              Conexión de interfaces web directas con microcontroladores (familia <strong>ESP8266 / ESP32</strong> de Espressif) y programación en <strong>C++</strong> para aplicaciones físicas y automatización.
            </p>
          </div>
          <div className="mt-4 pt-4 border-t border-slate-100 text-xs font-mono text-purple-700">
            ESP8266 • WebSockets • PWM
          </div>
        </div>

        {/* Card 5: Seguridad (Span 5) */}
        <div className="md:col-span-6 lg:col-span-5 p-8 rounded-2xl bg-white/80 backdrop-blur-md border border-slate-200/80 hover:border-slate-300 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between">
          <div>
            <div className="w-10 h-10 rounded-xl bg-rose-50 border border-rose-200 text-rose-600 flex items-center justify-center mb-5">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h3 className="text-xl font-bold font-sans text-slate-900 mb-2">
              Seguridad & Auth
            </h3>
            <p className="text-slate-600 font-sans text-sm leading-relaxed">
              Implementación de autenticación OAuth, control de acceso basado en roles (RBAC) y políticas de seguridad Row Level Security (<strong>RLS</strong>) para protección integral de datos.
            </p>
          </div>
          <div className="mt-4 pt-4 border-t border-slate-100 text-xs font-mono text-rose-700">
            OAuth • Supabase RLS • JWT
          </div>
        </div>

        {/* Card 6: Transparencia (Span 7) */}
        <div className="md:col-span-12 lg:col-span-7 p-8 rounded-2xl bg-slate-900 border border-slate-800 text-white shadow-xl flex flex-col justify-between">
          <div>
            <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-md bg-slate-800 border border-slate-700 text-slate-300 text-xs font-mono mb-4">
              <Target className="w-3.5 h-3.5 text-rose-400" />
              <span>Transparencia Profesional</span>
            </div>
            <h3 className="text-xl font-bold font-sans text-white mb-2">
              ¿Dónde genero mayor impacto?
            </h3>
            <p className="text-slate-300 font-sans text-sm leading-relaxed">
              Mi fuerte absoluto es el desarrollo <strong>Full-Stack, infraestructura Edge y Web Apps de alta velocidad</strong>. No me especializo en desarrollo móvil nativo puro (Swift/Kotlin) ni desarrollo de videojuegos 3D.
            </p>
          </div>
          <p className="mt-4 pt-4 border-t border-slate-800 text-xs font-mono text-slate-400">
            ✨ Enfoque principal: Entregar valor real, código limpio y software mantenible.
          </p>
        </div>
      </div>
    </section>
  );
}

