import { LandingNavbar, LandingDNA, LandingFeatures, LandingPricing, LandingFooter } from '@/features/landing/components';
import LandingHeroBOS from '@/features/landing/components/pymes/LandingHeroBOS';
import WhatIsSoursopBOS from '@/features/landing/components/pymes/WhatIsSoursopBOS';

export default function LandingBOS() {
    return (
        <div className="min-h-screen bg-[#0F172A] text-slate-300 font-sans selection:bg-blue-500/30">
            <LandingNavbar />
            <LandingHeroBOS />
            <WhatIsSoursopBOS />
            <LandingDNA />
            <LandingFeatures />
            <LandingPricing />
            <LandingFooter />
        </div>
    );
}
