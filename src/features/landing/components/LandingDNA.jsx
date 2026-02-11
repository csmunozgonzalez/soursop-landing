import { Brain, Globe, Star } from 'lucide-react';

export default function LandingDNA() {
    return (
        <section id="strategic" className="py-24 bg-slate-900/50 relative border-y border-white/5">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center max-w-2xl mx-auto mb-20">
                    <h2 className="text-sm font-bold text-emerald-400 uppercase tracking-[0.2em] mb-4">Módulo GENOMA</h2>
                    <h3 className="text-4xl font-bold text-white mb-6">Tu Virtual CEO: La Cereza del Pastel</h3>
                    <p className="text-slate-400">
                        No es solo software, es tu copiloto de alto rendimiento. Soursop OS te ofrece perspectivas
                        estratégicas que antes solo estaban al alcance de las grandes corporaciones.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* DNA Card 1 */}
                    <div className="group p-8 bg-white/5 border border-white/10 rounded-[32px] hover:border-emerald-500/30 transition-all">
                        <div className="w-14 h-14 bg-emerald-500/10 rounded-2xl flex items-center justify-center text-emerald-400 mb-6 group-hover:scale-110 transition-transform">
                            <Brain size={28} />
                        </div>
                        <h4 className="text-xl font-bold text-white mb-4">Copiloto Estratégico</h4>
                        <p className="text-slate-400 text-sm leading-relaxed">
                            Tu Virtual CEO refina tu propósito, alinea a tu equipo con tu visión
                            y articula tu identidad corporativa con una claridad absoluta.
                        </p>
                    </div>

                    {/* DNA Card 2 */}
                    <div className="group p-8 bg-white/5 border border-white/10 rounded-[32px] hover:border-blue-500/30 transition-all">
                        <div className="w-14 h-14 bg-blue-500/10 rounded-2xl flex items-center justify-center text-blue-400 mb-6 group-hover:scale-110 transition-transform">
                            <Globe size={28} />
                        </div>
                        <h4 className="text-xl font-bold text-white mb-4">Análisis del Entorno</h4>
                        <p className="text-slate-400 text-sm leading-relaxed">
                            Identifica oportunidades y amenazas en tu sector. Entiende el contexto
                            de tu mercado en segundos para tomar decisiones basadas en datos.
                        </p>
                    </div>

                    {/* DNA Card 3 */}
                    <div className="group p-8 bg-white/5 border border-white/10 rounded-[32px] hover:border-purple-500/30 transition-all">
                        <div className="w-14 h-14 bg-purple-500/10 rounded-2xl flex items-center justify-center text-purple-400 mb-6 group-hover:scale-110 transition-transform">
                            <Star size={28} />
                        </div>
                        <h4 className="text-xl font-bold text-white mb-4">Propósitos Masivos (MTP)</h4>
                        <p className="text-slate-400 text-sm leading-relaxed">
                            Define tu Propósito Transformativo Masivo. Aquello que hace a tu empresa
                            irreemplazable y le permite escalar su impacto global.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
