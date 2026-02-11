import { Link } from 'react-router-dom';
import { ChevronRight, Zap } from 'lucide-react';
import SoursopLogo from '@/components/ui/SoursopLogo';
import { useAnalytics } from '../../../hooks/useAnalytics';

export default function LandingHero() {
    const { trackEvent } = useAnalytics();
    return (
        <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
            {/* Background Glows */}
            <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-emerald-500/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2 pointer-events-none"></div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="max-w-3xl">
                    <div className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/20 px-3 py-1 rounded-full text-emerald-400 text-xs font-bold uppercase tracking-widest mb-6 animate-pulse">
                        <Zap size={14} /> El Futuro de la Gestión Empresarial
                    </div>
                    <h1 className="text-5xl lg:text-7xl font-extrabold text-white leading-[1.1] mb-8 tracking-tight">
                        El Sistema Operativo para <br />
                        <span className="bg-gradient-to-r from-emerald-400 to-blue-400 bg-clip-text text-transparent">Líderes Visionarios</span>
                    </h1>
                    <p className="text-xl text-slate-400 mb-10 leading-relaxed">
                        Organiza tu ADN estratégico con tu <span className="text-white font-bold">Virtual CEO</span>, controla tus finanzas en tiempo real
                        y escala tu operación con un cerebro digital diseñado para la independencia y el alto rendimiento.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4">
                        <a
                            href="https://app.soursop-ia.com/register"
                            onClick={() => trackEvent('register_click', { location: 'hero' })}
                            className="group bg-emerald-500 hover:bg-emerald-600 text-white px-8 py-4 rounded-2xl font-bold text-lg transition-all flex items-center justify-center gap-2 shadow-xl shadow-emerald-500/20"
                        >
                            Comenzar ahora <ChevronRight className="group-hover:translate-x-1 transition-transform" />
                        </a>
                        <a
                            href="#features"
                            onClick={() => trackEvent('view_features_click', { location: 'hero' })}
                            className="bg-white/5 hover:bg-white/10 border border-white/10 text-white px-8 py-4 rounded-2xl font-bold text-lg transition-all flex items-center justify-center gap-2 underline-offset-4 decoration-emerald-500/50"
                        >
                            Ver características
                        </a>
                    </div>

                    {/* Social Proof Placeholder */}
                    <div className="mt-16 pt-10 border-t border-white/5 flex flex-wrap items-center gap-8 opacity-50">
                        <span className="text-xs font-bold uppercase tracking-widest text-slate-500">Impulsando empresas de alto impacto</span>
                        <div className="flex items-center gap-6 saturate-0 grayscale opacity-80">
                            <span className="font-fredoka font-bold text-2xl tracking-tight uppercase">GLOWFIT</span>
                            <span className="font-black text-xl tracking-widest uppercase">TECNO-ONLINE</span>
                            <span className="font-black text-xl italic tracking-tighter">GENOMA-X</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
