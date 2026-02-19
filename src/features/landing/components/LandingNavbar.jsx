import { Link } from 'react-router-dom';
import SoursopLogo from '@/components/ui/SoursopLogo';

export default function LandingNavbar() {
    return (
        <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/5 bg-slate-900/80 backdrop-blur-xl">
            <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
                <div className="flex items-center gap-10">
                    <SoursopLogo mode="light" className="" />
                    <div className="hidden md:flex items-center gap-8">
                        <a href="#features" className="text-sm font-medium hover:text-white transition-colors">Características</a>
                        <a href="#strategic" className="text-sm font-medium hover:text-white transition-colors">ADN Estratégico</a>
                        <a href="#blog" className="text-sm font-medium hover:text-white transition-colors">Blog</a>
                        <a href="#pricing" className="text-sm font-medium hover:text-white transition-colors">Planes</a>
                    </div>
                </div>
                <div className="flex items-center gap-3 md:gap-4 h-full">
                    <a href="https://app.soursop-ia.com/login" className="flex items-center h-full px-2 text-xs md:text-sm font-bold text-white hover:text-soursop-400 transition-colors whitespace-nowrap">
                        <span className="hidden md:inline">Iniciar Sesión</span>
                        <span className="md:hidden">Entrar</span>
                    </a>
                    <a href="https://calendly.com/soursop-ia/demo" target="_blank" rel="noopener noreferrer" className="flex items-center bg-soursop-500 hover:bg-soursop-600 text-white px-4 py-2 md:px-6 md:py-2.5 rounded-xl text-xs md:text-sm font-bold transition-all shadow-lg shadow-soursop-500/20 whitespace-nowrap">
                        Agendar Demo
                    </a>
                </div>
            </div>
        </nav>
    );
}
