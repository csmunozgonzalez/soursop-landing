import SoursopLogo from '@/components/ui/SoursopLogo';

export default function LandingFooter() {
    return (
        <footer className="py-20 border-t border-white/5 bg-slate-900">
            <div className="max-w-7xl mx-auto px-6 mb-20 text-center">
                <h3 className="text-3xl font-bold text-white mb-6">¿Listo para dejar de apagar incendios?</h3>
                <p className="text-slate-400 mb-8 max-w-xl mx-auto">Su competencia ya está automatizando. Tome la delantera con Soursop OS.</p>
                <a
                    href="https://calendly.com/soursop-ia/demo"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-emerald-500 hover:bg-emerald-600 text-white px-8 py-4 rounded-2xl font-bold text-lg transition-all shadow-xl shadow-emerald-500/20"
                >
                    Agendar Llamada
                </a>
            </div>
            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12">
                <div className="md:col-span-2">
                    <SoursopLogo mode="light" className="mb-6" />
                    <p className="max-w-xs text-slate-500 text-sm">
                        El sistema operativo diseñado para la transparencia, el control y la libertad estratégica.
                        Hecho por visionarios, para visionarios.
                    </p>
                </div>
                <div>
                    <h6 className="text-white font-bold mb-6">Plataforma</h6>
                    <ul className="space-y-4 text-sm text-slate-500">
                        <li><a href="#features" className="hover:text-emerald-400 transition-colors">Seguridad</a></li>
                        <li><a href="#features" className="hover:text-emerald-400 transition-colors">Infraestructura</a></li>
                        <li><a href="mailto:soporte@soursop-ia.com" className="hover:text-emerald-400 transition-colors">Soportes</a></li>
                    </ul>
                </div>
                <div>
                    <h6 className="text-white font-bold mb-6">Compañía</h6>
                    <ul className="space-y-4 text-sm text-slate-500">
                        <li><a href="#strategic" className="hover:text-emerald-400 transition-colors">Visión</a></li>
                        <li><a href="https://docs.soursop-ia.com" className="hover:text-emerald-400 transition-colors">Documentación</a></li>
                        <li><a href="https://app.soursop-ia.com/login" className="hover:text-emerald-400 transition-colors">Acceso Clientes</a></li>
                    </ul>
                </div>
            </div>
            <div className="max-w-7xl mx-auto px-6 mt-20 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] uppercase font-black tracking-widest text-slate-600">
                <div>© 2026 SOURSOP OS. ALL RIGHTS RESERVED.</div>
                <div className="flex gap-8">
                    <a href="#" className="hover:text-white transition-colors">Terms</a>
                    <a href="#" className="hover:text-white transition-colors">Privacy</a>
                </div>
            </div>
        </footer>
    );
}
