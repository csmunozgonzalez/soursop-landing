import { Link } from 'react-router-dom';
import { ChevronRight, Database, Target, Users } from 'lucide-react';
import SoursopLogo from '@/components/ui/SoursopLogo';
import { useAnalytics } from '../../../hooks/useAnalytics';

export default function LandingHeroBOS() {
    const { trackEvent } = useAnalytics();
    return (
        <section className="relative pt-6 pb-20 lg:pt-10 lg:pb-32 overflow-hidden">
            <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-blue-500/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-emerald-500/5 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2 pointer-events-none"></div>

            <div className="max-w-7xl mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-12 items-center">
                <div className="max-w-3xl">
                    <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 px-3 py-1 rounded-full text-blue-400 text-xs font-bold uppercase tracking-widest mb-10 animate-pulse">
                        <Database size={14} /> El Sistema Operativo para PyMEs
                    </div>
                    <div className="mb-6">
                        <SoursopLogo mode="light" className="scale-[1.8] origin-left translate-y-2" />
                    </div>
                    <h1 className="text-5xl lg:text-7xl font-extrabold text-white leading-[1.05] mb-8 tracking-tight max-w-2xl">
                        <span className="bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent italic">Recupera el Control</span> <br />
                        <span>de tu Empresa</span>
                    </h1>
                    <p className="text-xl text-slate-400 mb-10 leading-relaxed max-w-xl">
                        ¿Frustrado por tener ventas y finanzas en Excel, y un software contable desconectado? <span className="text-white font-bold">Soursop BOS</span> centraliza toda tu operación diaria en un solo sistema en la nube.
                    </p>
                    <p className="text-lg text-slate-500 mb-10 -mt-6">
                        Diseñado para PyMEs en Colombia (10 a 50 empleados) que necesitan dejar el papel y escalar su negocio sin caos operativo.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4">
                        <a
                            href="https://calendly.com/soursop-ia/demo"
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={() => trackEvent('agenda_demo_click', { location: 'hero_bos' })}
                            className="group bg-blue-500 hover:bg-blue-600 text-white px-8 py-4 rounded-2xl font-bold text-lg transition-all flex items-center justify-center gap-2 shadow-xl shadow-blue-500/20"
                        >
                            Agendar Demo <ChevronRight className="group-hover:translate-x-1 transition-transform" />
                        </a>
                        <a
                            href="#features"
                            onClick={() => trackEvent('view_features_click', { location: 'hero_bos' })}
                            className="bg-white/5 hover:bg-white/10 border border-white/10 text-white px-8 py-4 rounded-2xl font-bold text-lg transition-all flex items-center justify-center gap-2 underline-offset-4 decoration-blue-500/50"
                        >
                            Ver cómo funciona
                        </a>
                    </div>

                    <div className="mt-16 pt-10 border-t border-white/5 flex flex-wrap items-center gap-8 opacity-50">
                        <span className="text-xs font-bold uppercase tracking-widest text-slate-500">Transformando empresas colombianas</span>
                        <div className="flex items-center gap-6 saturate-0 grayscale opacity-80">
                            <span className="font-fredoka font-bold text-2xl tracking-tight uppercase">GLOWFIT</span>
                            <span className="font-black text-xl tracking-widest uppercase">TECNO-ONLINE</span>
                            <span className="font-black text-xl italic tracking-tighter">GENOMA-X</span>
                        </div>
                    </div>
                </div>

                <div className="hidden lg:block relative h-[550px] w-full">
                    {/* Insight Card 1: Centralización */}
                    <div className="absolute top-0 right-4 w-[340px] min-w-[340px] bg-white/5 backdrop-blur-xl border border-white/10 p-6 rounded-3xl shadow-2xl animate-float" style={{ animationDelay: '0s' }}>
                        <div className="flex items-start gap-4">
                            <div className="w-10 h-10 bg-blue-500/20 rounded-xl flex items-center justify-center text-blue-400 shrink-0">
                                <Database size={20} />
                            </div>
                            <div>
                                <h4 className="text-white font-bold text-sm">Operación 100% Centralizada</h4>
                                <p className="text-slate-400 text-xs mt-1">Ventas, Inventario y Contabilidad conectados en tiempo real. Adiós a los Excel manuales.</p>
                            </div>
                        </div>
                    </div>

                    {/* Insight Card 2: BOS Core */}
                    <div className="absolute top-[45%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[340px] min-w-[340px] bg-slate-800/80 backdrop-blur-2xl border border-blue-500/50 p-7 rounded-[2rem] shadow-2xl z-20 animate-float" style={{ animationDelay: '1s' }}>
                        <div className="flex items-center gap-4 mb-4">
                            <div className="w-12 h-12 bg-emerald-500/20 rounded-2xl flex items-center justify-center text-emerald-400">
                                <Target size={24} />
                            </div>
                            <div className="flex-1">
                                <div className="h-2 w-full bg-slate-700/50 rounded-full overflow-hidden">
                                    <div className="h-full bg-emerald-400 w-[100%]"></div>
                                </div>
                            </div>
                        </div>
                        <h4 className="text-white font-bold text-lg">Reporte Tiempos Muertos</h4>
                        <p className="text-slate-400 text-sm mt-1">Con el nuevo Business Operating System has recuperado 15 horas de conciliación esta semana.</p>
                    </div>

                    {/* Insight Card 3: CRM / Team */}
                    <div className="absolute bottom-8 left-4 w-[340px] min-w-[340px] bg-white/5 backdrop-blur-xl border border-white/10 p-6 rounded-3xl shadow-2xl animate-float" style={{ animationDelay: '2s' }}>
                        <div className="flex items-start gap-4">
                            <div className="w-10 h-10 bg-amber-500/20 rounded-xl flex items-center justify-center text-amber-400 shrink-0">
                                <Users size={20} />
                            </div>
                            <div>
                                <h4 className="text-white font-bold text-sm">Equipo Conectado</h4>
                                <p className="text-slate-400 text-xs mt-1">El vendedor ya registró la orden, inventario la descontó, y contabilidad tiene el asiento listo.</p>
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
