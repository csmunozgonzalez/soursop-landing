import React from 'react';
import { Link2, Sparkles, Rocket, ChevronRight } from 'lucide-react';

export default function HowItWorks() {
    const steps = [
        {
            title: "Conexión Inteligente",
            subtitle: "El fin de la fragmentación",
            description: "En minutos, vinculamos tus bancos, software contable (Siigo) e inventarios. Soursop OS se convierte en la única fuente de verdad para tu empresa.",
            icon: <Link2 size={24} />,
            color: "emerald"
        },
        {
            title: "Activación de Cortex IA",
            subtitle: "Tu cerebro digital despierta",
            description: "No solo guardamos datos, los entendemos. Cortex IA analiza cada transacción para detectar fugas de dinero, predecir demanda y sugerir optimizaciones.",
            icon: <Sparkles size={24} />,
            color: "blue"
        },
        {
            title: "Escalamiento Confidente",
            subtitle: "Decisiones con claridad total",
            description: "Recibe alertas proactivas y dashboards en tiempo real. Deja de apagar incendios y empieza a ejecutar estrategias que multiplican tu rentabilidad.",
            icon: <Rocket size={24} />,
            color: "emerald"
        }
    ];

    return (
        <section className="py-24 bg-[#0F172A] relative overflow-hidden">
            {/* Background elements */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-emerald-500/5 rounded-full blur-[120px] pointer-events-none translate-x-1/2 -translate-y-1/2"></div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="text-center mb-20">
                    <h2 className="text-sm font-bold text-emerald-400 uppercase tracking-[0.2em] mb-4">El Camino a la Inteligencia</h2>
                    <h3 className="text-4xl md:text-6xl font-extrabold text-white mb-6 tracking-tight">
                        ¿Cómo funciona <span className="text-emerald-500 italic">Soursop OS</span>?
                    </h3>
                    <p className="text-xl text-slate-400 max-w-2xl mx-auto">
                        De la fragmentación operativa al control absoluto en tres pasos estratégicos.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
                    {/* Connecting line for desktop */}
                    <div className="hidden md:block absolute top-24 left-0 w-full h-px bg-gradient-to-r from-transparent via-emerald-500/20 to-transparent"></div>

                    {steps.map((step, index) => (
                        <div key={index} className="relative group">
                            <div className="flex flex-col items-center text-center">
                                {/* Icon Circle */}
                                <div className={`w-20 h-20 bg-slate-900 border-2 ${index === 1 ? 'border-blue-500/30' : 'border-emerald-500/30'} rounded-3xl flex items-center justify-center mb-8 relative z-20 group-hover:scale-110 transition-transform duration-500 shadow-xl shadow-black/50`}>
                                    <div className={`${index === 1 ? 'text-blue-400' : 'text-emerald-400'}`}>
                                        {step.icon}
                                    </div>
                                    {/* Number Badge */}
                                    <div className={`absolute -top-3 -right-3 w-8 h-8 rounded-full ${index === 1 ? 'bg-blue-500' : 'bg-emerald-500'} text-slate-900 text-sm font-black flex items-center justify-center`}>
                                        {index + 1}
                                    </div>
                                </div>

                                <div className="space-y-4">
                                    <h4 className={`text-xs font-black uppercase tracking-widest ${index === 1 ? 'text-blue-400' : 'text-emerald-400'}`}>
                                        {step.subtitle}
                                    </h4>
                                    <h5 className="text-2xl font-bold text-white">
                                        {step.title}
                                    </h5>
                                    <p className="text-slate-400 leading-relaxed text-sm lg:text-base">
                                        {step.description}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Vision Statement */}
                <div className="mt-24 p-8 md:p-12 rounded-[2.5rem] bg-gradient-to-br from-slate-900 to-slate-800 border border-white/5 relative overflow-hidden text-center max-w-4xl mx-auto">
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-emerald-500/50 to-transparent"></div>
                    <h6 className="text-2xl md:text-3xl font-bold text-white mb-6">Nuestra Visión</h6>
                    <p className="text-xl text-slate-300 italic mb-8">
                        "Convertir tu empresa en un organismo inteligente que aprende de sus datos para prosperar en la era digital."
                    </p>
                    <div className="flex flex-col md:flex-row justify-center items-center gap-6">
                        <div className="flex items-center gap-2 text-emerald-400 font-bold">
                            <ChevronRight size={20} />
                            <span>Automatización Real</span>
                        </div>
                        <div className="w-1.5 h-1.5 rounded-full bg-slate-700 hidden md:block"></div>
                        <div className="flex items-center gap-2 text-blue-400 font-bold">
                            <ChevronRight size={20} />
                            <span>Decisiones Predictivas</span>
                        </div>
                        <div className="w-1.5 h-1.5 rounded-full bg-slate-700 hidden md:block"></div>
                        <div className="flex items-center gap-2 text-purple-400 font-bold">
                            <ChevronRight size={20} />
                            <span>Escalamiento Sin Caos</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
