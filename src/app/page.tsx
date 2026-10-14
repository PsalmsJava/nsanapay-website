// src/app/page.tsx
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { ProblemSection } from "@/components/ProblemSection";
import { CircularLoop } from "@/components/CircularLoop";
import { AudiencePillars } from "@/components/AudiencePillars";
import { WhyNsanaPay } from "@/components/WhyNsanaPay";
import { Steps } from "@/components/Steps";
import { AboutUs } from "@/components/AboutUs";
import { Team } from "@/components/Team";
import { PartnershipBand } from "@/components/PartnershipBand";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";

export default function Home() {
    return (
        <main className="min-h-screen bg-white dark:bg-[#0A0F1A] text-slate-900 dark:text-slate-100 selection:bg-brand selection:text-white overflow-x-hidden">
            <Navbar />
            <Hero />
            <ProblemSection />
            <CircularLoop />
            <AudiencePillars />
            <WhyNsanaPay />
            <Steps />
            <AboutUs />
            <Team />
            <PartnershipBand />
            <ContactSection />
            <Footer />
        </main>
    );
}