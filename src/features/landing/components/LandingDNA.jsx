import { Brain, Globe, Star } from 'lucide-react';

export default function LandingDNA() {
    return (
        <section id="strategic" className="py-24 bg-slate-900/50 relative border-y border-white/5">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center max-w-2xl mx-auto mb-20">
                    <h2 className="text-sm font-bold text-emerald-400 uppercase tracking-[0.2em] mb-4">El Desafío Gerencial</h2>
                    <h3 className="text-4xl font-bold text-white mb-6">Toma el Control de tu Operación</h3>
                    <p className="text-slate-400">
                        La mayoría de las PyMEs operan con datos fragmentados y desactualizados. Es hora de dejar de conducir mirando por el retrovisor.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                    {/* DNA Card 1 - Fragmentation */}
                    <div className="group p-8 bg-white/5 border border-white/10 rounded-[32px] hover:border-emerald-500/30 transition-all">
                        <div className="w-14 h-14 bg-emerald-500/10 rounded-2xl flex items-center justify-center text-emerald-400 mb-6 group-hover:scale-110 transition-transform">
                            <Brain size={28} />
                        </div>
                        <h4 className="text-xl font-bold text-white mb-4">¿Caos Administrativo?</h4>
                        <p className="text-slate-400 text-base leading-relaxed">
                            ¿Su contabilidad vive en Siigo, su inventario en Excel y sus tareas en WhatsApp? La fragmentación es el enemigo silencioso de su crecimiento.
                        </p>
                    </div>

                    {/* DNA Card 2 - Blindness */}
                    <div className="group p-8 bg-white/5 border border-white/10 rounded-[32px] hover:border-blue-500/30 transition-all">
                        <div className="w-14 h-14 bg-blue-500/10 rounded-2xl flex items-center justify-center text-blue-400 mb-6 group-hover:scale-110 transition-transform">
                            <Globe size={28} />
                        </div>
                        <h4 className="text-xl font-bold text-white mb-4">Ceguera Gerencial</h4>
                        <p className="text-slate-400 text-base leading-relaxed">
                            Toma decisiones con datos de hace 30 días. Eso es conducir mirando por el retrovisor. Soursop le da visibilidad en tiempo real.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
