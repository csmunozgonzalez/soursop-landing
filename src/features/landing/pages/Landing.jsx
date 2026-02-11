import { LandingNavbar, LandingHero, LandingDNA, LandingFeatures, LandingPricing, LandingBlog, LandingFooter } from '@/features/landing/components';

export default function Landing() {
    return (
        <div className="min-h-screen bg-[#0F172A] text-slate-300 font-sans selection:bg-emerald-500/30">
            <LandingNavbar />
            <LandingHero />
            <LandingDNA />
            <LandingFeatures />
            <LandingBlog />
            <LandingPricing />
            <LandingFooter />
        </div>
    );
}
