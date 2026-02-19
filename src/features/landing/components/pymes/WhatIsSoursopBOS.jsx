import React from 'react';
import { Database } from 'lucide-react';

export default function WhatIsSoursopBOS() {
    return (
        <section className="py-24 bg-slate-900/20 relative border-t border-white/5 overflow-hidden">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-blue-500/5 rounded-full blur-[120px] pointer-events-none"></div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="text-center max-w-4xl mx-auto">
                    <div className="flex justify-center mb-6">
                        <div className="w-12 h-12 bg-blue-500/10 rounded-2xl flex items-center justify-center text-blue-400 border border-blue-500/20">
                            <Database size={24} />
                        </div>
                    </div>
                    <h2 className="text-sm font-bold text-blue-400 uppercase tracking-[0.2em] mb-4">
                        ¿Qué es un BOS (Business Operating System)?
                    </h2>
                    <h3 className="text-3xl md:text-5xl font-bold text-white mb-8 leading-tight tracking-tight">
                        La Evolución del Software Contable <br /><span className="bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent italic">Hecho Operativo</span>
                    </h3>
                    <p className="text-xl md:text-2xl font-medium text-slate-400 leading-relaxed">
                        Es el verdadero gestor de tu empresa. A diferencia de los software contables básicos y Excel que solo archivan, un BOS organiza tu inventario, ventas y finanzas en una sola nube interactiva; ahorrando dinero, evitando pérdidas y permitiendo que te concentres en vender.
                    </p>
                </div>
            </div>
        </section>
    );
}
