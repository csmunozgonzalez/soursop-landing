import { Star, Quote } from 'lucide-react';

export default function LandingTestimonials() {
    return (
        <section className="py-24 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div>
                        <h2 className="text-sm font-bold text-purple-400 uppercase tracking-[0.2em] mb-4">Impacto Real</h2>
                        <h3 className="text-4xl font-bold text-white mb-8">Enamora con Datos y Resultados</h3>

                        <div className="space-y-6">
                            <div className="p-6 bg-white/5 border border-white/10 rounded-2xl">
                                <div className="text-3xl font-bold text-emerald-400 mb-2">+25%</div>
                                <p className="text-slate-400 text-sm">"Las PyMEs que digitalizan su gestión aumentan su rentabilidad un 25% en el primer año." (Dato de industria).</p>
                            </div>
                            <div className="p-6 bg-white/5 border border-white/10 rounded-2xl">
                                <div className="text-3xl font-bold text-blue-400 mb-2">-40%</div>
                                <p className="text-slate-400 text-sm">Reduzca en un 40% el tiempo administrativo manual, permitiendo a su equipo enfocarse en lo que importa.</p>
                            </div>
                        </div>
                    </div>

                    <div className="relative">
                        <div className="absolute -top-10 -left-10 text-emerald-500/20">
                            <Quote size={120} />
                        </div>
                        <div className="relative z-10 p-10 bg-gradient-to-br from-emerald-500/10 to-blue-500/10 border border-white/10 rounded-[40px] shadow-2xl">
                            <div className="flex gap-1 mb-6">
                                {[1, 2, 3, 4, 5].map(i => <Star key={i} size={18} className="fill-emerald-400 text-emerald-400" />)}
                            </div>
                            <p className="text-xl text-white italic leading-relaxed mb-8">
                                "Antes no sabía cuánto ganaba realmente en mi negocio. Con Soursop, tengo el control total de mi margen."
                            </p>
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-full bg-slate-700 flex items-center justify-center text-white font-bold">JP</div>
                                <div>
                                    <div className="text-white font-bold text-lg">Juan P.</div>
                                    <div className="text-slate-500 text-sm">Gerente de Manufacturas SAS (Piloto)</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
