import { TrendingUp, ShoppingBag, LayoutDashboard, ChevronRight, ShieldCheck, Zap } from 'lucide-react';

export default function LandingFeatures() {
    return (
        <section id="features" className="py-24 overflow-hidden">
            <div className="max-w-7xl mx-auto px-6">
                <div className="flex flex-col lg:flex-row items-center gap-20">
                    <div className="lg:w-1/2">
                        <h2 className="text-sm font-bold text-blue-400 uppercase tracking-[0.2em] mb-4">Control Operativo Avanzado</h2>
                        <h3 className="text-4xl font-bold text-white mb-8">Gestión de Nueva Generación</h3>

                        <div className="space-y-8">
                            <div className="flex gap-6">
                                <div className="flex-shrink-0 w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center text-emerald-400 border border-white/10">
                                    <TrendingUp size={22} />
                                </div>
                                <div>
                                    <h5 className="text-lg font-bold text-white mb-2">Módulo MOTOR: Producción Rentable</h5>
                                    <p className="text-slate-400 text-sm">Gestiona tus recetas y procesos por lotes. Calcula automáticamente el margen real de cada producto incluyendo costos directos e indirectos.</p>
                                </div>
                            </div>
                            <div className="flex gap-6">
                                <div className="flex-shrink-0 w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center text-blue-400 border border-white/10">
                                    <ShoppingBag size={22} />
                                </div>
                                <div>
                                    <h5 className="text-lg font-bold text-white mb-2">Módulo NEXUS: Flujo de Caja Maestro</h5>
                                    <p className="text-slate-400 text-sm">Sincronización instantánea entre compras, ventas y bancos. Toma decisiones basadas en liquidez real, no en estimaciones.</p>
                                </div>
                            </div>
                            <div className="flex gap-6">
                                <div className="flex-shrink-0 w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center text-purple-400 border border-white/10">
                                    <Zap size={22} />
                                </div>
                                <div>
                                    <h5 className="text-lg font-bold text-white mb-2">Módulo FLUJO: Empatía de la Automatización</h5>
                                    <p className="text-slate-400 text-sm">Define reglas que trabajen por ti. Si ocurre un evento, el sistema reacciona automáticamente, eliminando errores humanos y liberando tu tiempo.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Interactive UI Preview Placeholder */}
                    <div className="lg:w-1/2 relative">
                        <div className="bg-gradient-to-br from-emerald-500/20 to-blue-500/20 rounded-3xl p-1 border border-white/10">
                            <div className="bg-slate-900 rounded-[22px] overflow-hidden shadow-2xl">
                                <div className="h-8 bg-slate-800/50 border-b border-white/5 flex items-center px-4 gap-1.5">
                                    <div className="w-2.5 h-2.5 rounded-full bg-red-500/30"></div>
                                    <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/30"></div>
                                    <div className="w-2.5 h-2.5 rounded-full bg-green-500/30"></div>
                                </div>
                                <div className="p-6">
                                    {/* Mock UI */}
                                    <div className="flex justify-between items-end mb-8">
                                        <div>
                                            <div className="text-[10px] text-slate-500 uppercase font-black tracking-widest mb-1">CASHFLOW MENSUAL</div>
                                            <div className="text-2xl font-bold font-mono text-emerald-400">$124,500,000</div>
                                        </div>
                                        <div className="flex items-center gap-1 text-[10px] text-emerald-500 font-bold bg-emerald-500/10 px-2 py-0.5 rounded-full">
                                            +12.5% <ChevronRight size={10} className="-rotate-90" />
                                        </div>
                                    </div>
                                    <div className="space-y-4">
                                        {[1, 2, 3].map(i => (
                                            <div key={i} className="flex items-center justify-between p-3 bg-white/5 rounded-xl border border-white/5">
                                                <div className="flex items-center gap-3">
                                                    <div className="w-8 h-8 rounded-lg bg-slate-800"></div>
                                                    <div className="w-24 h-2.5 bg-slate-800 rounded-full"></div>
                                                </div>
                                                <div className="w-12 h-2.5 bg-slate-800 rounded-full"></div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Floating Card */}
                        <div className="absolute -bottom-10 -left-10 bg-white p-6 rounded-2xl shadow-xl hidden md:block">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600">
                                    <ShieldCheck size={24} />
                                </div>
                                <div>
                                    <div className="text-xs font-black text-gray-400 uppercase tracking-widest">SISTEMA SEGURO</div>
                                    <div className="text-sm font-bold text-gray-900">Datos Encriptados</div>
                                </div>
                            </div>
                            <div className="flex items-center -space-x-2">
                                {[1, 2, 3, 4].map(i => (
                                    <div key={i} className="w-8 h-8 rounded-full border-2 border-white bg-slate-200 overflow-hidden shadow-sm">
                                        <img
                                            src={`/avatars/avatar${i}.png`}
                                            alt={`Usuario ${i}`}
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                ))}
                                <div className="pl-4 text-[10px] font-bold text-gray-500 tracking-tight">+250 LÍDERES USANDO SOURSOP</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
