import { LandingNavbar, LandingHero, LandingDNA, LandingFeatures, LandingPricing, LandingBlog, LandingFooter, LandingTestimonials, FloatingCTA } from '@/features/landing/components';

export default function Landing() {
    return (
        <div className="min-h-screen bg-[#0F172A] text-slate-300 font-sans selection:bg-emerald-500/30">
            <LandingHero />
            <LandingDNA />
            <LandingFeatures />
            <LandingTestimonials />
            <LandingBlog />
            <LandingPricing />
            <LandingFooter />
            <FloatingCTA />
        </div>
    );
}
