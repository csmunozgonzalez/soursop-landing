import React from 'react';
import { HelpCircle } from 'lucide-react';

export default function WhatIsSoursop() {
    return (
        <section className="py-24 bg-slate-900/20 relative border-t border-white/5 overflow-hidden">
            {/* Background Glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-emerald-500/5 rounded-full blur-[120px] pointer-events-none"></div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="text-center max-w-4xl mx-auto">
                    <div className="flex justify-center mb-6">
                        <div className="w-12 h-12 bg-emerald-500/10 rounded-2xl flex items-center justify-center text-emerald-400 border border-emerald-500/20">
                            <HelpCircle size={24} />
                        </div>
                    </div>
                    <h2 className="text-sm font-bold text-emerald-400 uppercase tracking-[0.2em] mb-4">
                        ¿Qué es Soursop OS?
                    </h2>
                    <h3 className="text-3xl md:text-5xl font-bold text-white mb-8 leading-tight tracking-tight">
                        Tu Negocio en <span className="bg-gradient-to-r from-emerald-400 to-blue-400 bg-clip-text text-transparent italic">Piloto Automático</span>
                    </h3>
                    <p className="text-xl md:text-2xl font-medium text-slate-400 leading-relaxed">
                        Es el sistema operativo que cruza tus datos por ti. Pregúntale a nuestra IA lo que necesitas saber y toma decisiones de crecimiento sin perder tiempo en hojas de cálculo.
                    </p>
                </div>
            </div>
        </section>
    );
}

