import { Link } from 'react-router-dom';
import { Check, MessageSquare } from 'lucide-react';

export default function LandingPricing() {
    return (
        <section id="pricing" className="py-24 bg-slate-900/50">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center max-w-2xl mx-auto mb-20">
                    <h2 className="text-sm font-bold text-purple-400 uppercase tracking-[0.2em] mb-4">Planes</h2>
                    <h3 className="text-4xl font-bold text-white mb-6">Escala tu Empresa sin Límites</h3>
                    <p className="text-slate-400">Escoge el plan que mejor se adapte a tu etapa actual. Puedes cambiar en cualquier momento.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Starter */}
                    <div className="p-10 bg-white/5 border border-white/10 rounded-[40px] flex flex-col items-center text-center">
                        <span className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-6">STARTER</span>
                        <div className="text-4xl font-black text-white mb-2">$0 <span className="text-lg font-medium text-slate-500">/mo</span></div>
                        <p className="text-slate-500 text-sm mb-10 italic">"Para emprendedores que están comenzando"</p>
                        <ul className="space-y-4 mb-10 text-sm text-slate-400 w-full">
                            <li className="flex items-center justify-center gap-2"><Check size={16} className="text-emerald-500" /> ADN Básico</li>
                            <li className="flex items-center justify-center gap-2"><Check size={16} className="text-emerald-500" /> POS Una Terminal</li>
                            <li className="flex items-center justify-center gap-2"><Check size={16} className="text-emerald-500" /> Reportes Básicos</li>
                            <li className="opacity-30 flex items-center justify-center gap-2 text-slate-600"><Check size={16} /> IA Estratégica</li>
                        </ul>
                        <a href="https://calendly.com/soursop-ia/demo" target="_blank" rel="noopener noreferrer" className="w-full py-4 rounded-2xl border border-white/10 hover:bg-white/5 text-white font-bold transition-all mt-auto flex items-center justify-center">
                            Hablemos Primero
                        </a>
                    </div>

                    {/* Scale (Hot) */}
                    <div className="p-10 bg-gradient-to-br from-emerald-500/20 to-blue-500/20 border-2 border-emerald-500/50 rounded-[40px] flex flex-col items-center text-center relative scale-105 shadow-2xl shadow-emerald-500/10">
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-emerald-500 text-white text-[10px] font-black uppercase tracking-widest px-4 py-1.5 rounded-full">RECOMENDADO</div>
                        <span className="text-xs font-bold text-emerald-400 uppercase tracking-widest mb-6">SCALE</span>
                        <div className="text-4xl font-black text-white mb-2">$49 <span className="text-lg font-medium text-slate-500">/mo</span></div>
                        <p className="text-slate-300 text-sm mb-10 italic font-medium">"Todo el poder de la IA para tu negocio"</p>
                        <ul className="space-y-4 mb-10 text-sm text-slate-200 w-full font-medium">
                            <li className="flex items-center justify-center gap-2"><Check size={16} className="text-emerald-400" /> ADN + IA Ilimitada</li>
                            <li className="flex items-center justify-center gap-2"><Check size={16} className="text-emerald-400" /> Contabilidad Avanzada</li>
                            <li className="flex items-center justify-center gap-2"><Check size={16} className="text-emerald-400" /> Todos los Módulos</li>
                            <li className="flex items-center justify-center gap-2"><Check size={16} className="text-emerald-400" /> Prioridad de Soporte</li>
                        </ul>
                        <a href="https://calendly.com/soursop-ia/demo" target="_blank" rel="noopener noreferrer" className="w-full py-4 rounded-2xl bg-emerald-500 hover:bg-emerald-600 text-white font-bold transition-all shadow-lg shadow-emerald-500/20 mt-auto flex items-center justify-center">
                            Agendar Demo Scale
                        </a>
                    </div>

                    {/* Enterprise */}
                    <div className="p-10 bg-white/5 border border-white/10 rounded-[40px] flex flex-col items-center text-center">
                        <span className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-6">ENTERPRISE</span>
                        <div className="text-4xl font-black text-white mb-2">Custom</div>
                        <p className="text-slate-500 text-sm mb-10 italic">"Para ecosistemas y alianzas globales"</p>
                        <ul className="space-y-4 mb-10 text-sm text-slate-400 w-full">
                            <li className="flex items-center justify-center gap-2"><Check size={16} className="text-emerald-500" /> Multi-Tenant Avanzado</li>
                            <li className="flex items-center justify-center gap-2"><Check size={16} className="text-emerald-500" /> Infraestructura Dedicada</li>
                            <li className="flex items-center justify-center gap-2"><Check size={16} className="text-emerald-500" /> IA Personalizada</li>
                            <li className="flex items-center justify-center gap-2"><Check size={16} className="text-emerald-500" /> Concierge Estratégico</li>
                        </ul>
                        <button className="w-full py-4 rounded-2xl border border-white/10 hover:bg-white/5 text-white font-bold transition-all mt-auto flex items-center justify-center gap-2">
                            <MessageSquare size={18} /> Contactar Ventas
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}
