import { LandingNavbar, LandingDNA, LandingFeatures, LandingPricing, LandingFooter } from '@/features/landing/components';
import LandingHeroCEO from '@/features/landing/components/ceo/LandingHeroCEO';
import WhatIsSoursopCEO from '@/features/landing/components/ceo/WhatIsSoursopCEO';

export default function LandingCEO() {
    return (
        <div className="min-h-screen bg-[#0F172A] text-slate-300 font-sans selection:bg-purple-500/30">
            <LandingNavbar />
            <LandingHeroCEO />
            <WhatIsSoursopCEO />
            <LandingDNA />
            <LandingFeatures />
            <LandingPricing />
            <LandingFooter />
        </div>
    );
}
