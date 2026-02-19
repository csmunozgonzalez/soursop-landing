import React from 'react';
import { LayoutDashboard, BrainCircuit, BarChart3 } from 'lucide-react';

export default function ServiceShowcase() {
    const showcases = [
        {
            title: "Control Total: Tu Negocio en una Pantalla",
            description: "Olvídate de revisar 10 excels diferentes. Mira cuánto tienes en el banco, cuánto te deben y cuánto ganas en tiempo real.",
            image: "/mockups/dashboard.png",
            icon: <LayoutDashboard className="text-emerald-400" size={24} />,
            color: "emerald"
        },
        {
            title: "Asistente IA: Respuestas Instantáneas",
            description: "No necesitas ser analista. Pregúntale a Soursop: '¿Qué productos debo reponer?' o '¿Cómo van mis gastos?' y obtén respuestas claras.",
            image: "/mockups/cortex.png",
            icon: <BrainCircuit className="text-blue-400" size={24} />,
            color: "blue"
        },
        {
            title: "Inventario Inteligente: Stock Siempre Perfecto",
            description: "Evita quedarte sin productos o tener dinero estancado en bodega. Soursop te dice exactamente qué comprar y cuándo.",
            image: "/mockups/inventory.png",
            icon: <BarChart3 className="text-purple-400" size={24} />,
            color: "purple"
        }
    ];

    return (
        <section className="py-24 bg-slate-900/10 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="text-center mb-20">
                    <h2 className="text-sm font-bold text-emerald-400 uppercase tracking-[0.2em] mb-4">Visualiza el Poder</h2>
                    <h3 className="text-4xl md:text-6xl font-extrabold text-white mb-6 tracking-tight">
                        La Experiencia <span className="text-emerald-500 italic">Soursop</span>
                    </h3>
                    <p className="text-xl text-slate-400 max-w-2xl mx-auto">
                        Diseñado para emprendedores que quieren claridad, velocidad y resultados rápidos.
                    </p>
                </div>

                <div className="space-y-32">
                    {showcases.map((item, index) => (
                        <div key={index} className={`flex flex-col ${index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-16 items-center`}>
                            <div className="flex-1 space-y-8">
                                <div className="inline-flex items-center gap-3 bg-white/5 border border-white/10 px-4 py-2 rounded-2xl">
                                    {item.icon}
                                    <span className="text-white font-bold">{item.title.split(':')[0]}</span>
                                </div>
                                <h4 className="text-3xl md:text-5xl font-bold text-white leading-tight">
                                    {item.title.split(':')[1]}
                                </h4>
                                <p className="text-xl text-slate-400 leading-relaxed">
                                    {item.description}
                                </p>
                                <div className="flex items-center gap-4 pt-4">
                                    <div className="flex -space-x-2">
                                        {[1, 2, 3].map(i => (
                                            <div key={i} className="w-8 h-8 rounded-full border-2 border-slate-900 bg-slate-800"></div>
                                        ))}
                                    </div>
                                    <span className="text-sm text-slate-500 font-medium">Empresas inteligentes ya están usando esto</span>
                                </div>
                            </div>
                            <div className="flex-1 relative group">
                                <div className={`absolute -inset-4 bg-${item.color}-500/20 rounded-[2.5rem] blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                                <div className="relative bg-slate-900/50 border border-white/10 rounded-[2rem] overflow-hidden shadow-2xl">
                                    <img
                                        src={item.image}
                                        alt={item.title}
                                        className="w-full h-auto transform group-hover:scale-105 transition-transform duration-700"
                                    />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section >
    );
}
