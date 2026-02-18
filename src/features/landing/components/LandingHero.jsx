import { Link } from 'react-router-dom';
import { ChevronRight, Zap, TrendingUp, Package } from 'lucide-react';
import SoursopLogo from '@/components/ui/SoursopLogo';
import { useAnalytics } from '../../../hooks/useAnalytics';

export default function LandingHero() {
    const { trackEvent } = useAnalytics();
    return (
        <section className="relative pt-6 pb-20 lg:pt-10 lg:pb-32 overflow-hidden">
            {/* Background Glows */}
            <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-emerald-500/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2 pointer-events-none"></div>

            <div className="max-w-7xl mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-12 items-center">
                <div className="max-w-3xl">
                    <div className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/20 px-3 py-1 rounded-full text-emerald-400 text-xs font-bold uppercase tracking-widest mb-10 animate-pulse">
                        <Zap size={14} /> El Futuro de la Gestión Empresarial
                    </div>
                    <div className="mb-6">
                        <SoursopLogo mode="light" className="scale-[1.8] origin-left translate-y-2" />
                    </div>
                    <h1 className="text-5xl lg:text-7xl font-extrabold text-white leading-[1.05] mb-8 tracking-tight max-w-2xl">
                        <span className="bg-gradient-to-r from-emerald-400 to-blue-400 bg-clip-text text-transparent italic">El Sistema Operativo</span> <br />
                        <span>para Empresas Inteligentes</span>
                    </h1>
                    <p className="text-xl text-slate-400 mb-10 leading-relaxed max-w-xl">
                        Deja de operar a ciegas. Instale un <span className="text-white font-bold">Cerebro Digital</span> que unifica su contabilidad, inventario y estrategia en una sola plataforma.
                    </p>
                    <p className="text-lg text-slate-500 mb-10 -mt-6">
                        No somos otro software contable. Somos su analista de negocios 24/7.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4">
                        <a
                            href="https://app.soursop-ia.com/register"
                            onClick={() => trackEvent('register_click', { location: 'hero' })}
                            className="group bg-emerald-500 hover:bg-emerald-600 text-white px-8 py-4 rounded-2xl font-bold text-lg transition-all flex items-center justify-center gap-2 shadow-xl shadow-emerald-500/20"
                        >
                            Pruebalo Gratis <ChevronRight className="group-hover:translate-x-1 transition-transform" />
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

                {/* Right Side: Floating Cards */}
                <div className="hidden lg:block relative h-[550px] w-full">
                    {/* Insight Card 1: Cashflow */}
                    <div className="absolute top-0 right-4 w-[340px] min-w-[340px] bg-white/5 backdrop-blur-xl border border-white/10 p-6 rounded-3xl shadow-2xl animate-float" style={{ animationDelay: '0s' }}>
                        <div className="flex items-start gap-4">
                            <div className="w-10 h-10 bg-emerald-500/20 rounded-xl flex items-center justify-center text-emerald-400 shrink-0">
                                <TrendingUp size={20} />
                            </div>
                            <div>
                                <h4 className="text-white font-bold text-sm">Flujo de Caja Maestro</h4>
                                <p className="text-slate-400 text-xs mt-1">+15% de liquidez proyectada para el próximo mes.</p>
                            </div>
                        </div>
                    </div>

                    {/* Insight Card 2: Cortex IA Central */}
                    <div className="absolute top-[45%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[340px] min-w-[340px] bg-white/10 backdrop-blur-2xl border border-white/20 p-7 rounded-[2rem] shadow-2xl z-20 animate-float" style={{ animationDelay: '1s' }}>
                        <div className="flex items-center gap-4 mb-4">
                            <div className="w-12 h-12 bg-blue-500/20 rounded-2xl flex items-center justify-center text-blue-400">
                                <Zap size={24} />
                            </div>
                            <div className="flex-1">
                                <div className="h-2 w-full bg-slate-700/50 rounded-full overflow-hidden">
                                    <div className="h-full bg-blue-400 w-[85%]"></div>
                                </div>
                            </div>
                        </div>
                        <h4 className="text-white font-bold">Cortex IA: Operación Activa</h4>
                        <p className="text-slate-400 text-sm mt-1">"He detectado una fuga de $2.5M en costos de producción por desperdicios."</p>
                    </div>

                    {/* Insight Card 3: Inventory */}
                    <div className="absolute bottom-8 left-4 w-[340px] min-w-[340px] bg-white/5 backdrop-blur-xl border border-white/10 p-6 rounded-3xl shadow-2xl animate-float" style={{ animationDelay: '2s' }}>
                        <div className="flex items-start gap-4">
                            <div className="w-10 h-10 bg-purple-500/20 rounded-xl flex items-center justify-center text-purple-400 shrink-0">
                                <Package size={20} />
                            </div>
                            <div>
                                <h4 className="text-white font-bold text-sm">Stock Inteligente</h4>
                                <p className="text-slate-400 text-xs mt-1">Alerta: Reponer 50 unds. de SKU-004 para evitar quiebre de stock.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <style>{`
                @keyframes float {
                    0%, 100% { transform: translateY(0) rotate(0); }
                    50% { transform: translateY(-30px) rotate(1deg); }
                }
                .animate-float {
                    animation: float 6s ease-in-out infinite;
                }
            `}</style>
        </section>
    );
}
