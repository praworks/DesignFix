import Header from "@/components/header";
import HeroSection from "@/components/sections/hero";
import AboutSection from "@/components/sections/about";
import WhyAutomateSection from "@/components/sections/why-automate";
import SolutionsSection from "@/components/sections/solutions";
import PortfolioSection from "@/components/sections/portfolio";
import TechStackSection from "@/components/sections/tech-stack";
import ContactSection from "@/components/sections/contact";
import Footer from "@/components/footer";
import ReverseEngineeringSection from "@/components/sections/reverse-engineering";
import SolidworksOptimizationSection from "@/components/sections/solidworks-optimization";
import WhatIsDesignAutomationSection from "@/components/sections/what-is-design-automation";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <WhatIsDesignAutomationSection />
        <WhyAutomateSection />
        <SolutionsSection />
        <ReverseEngineeringSection />
        <SolidworksOptimizationSection />
        <PortfolioSection />
        <TechStackSection />
        <AboutSection />
        <section className="bg-background py-12 md:py-24 lg:py-32">
          <div className="container mx-auto px-4 md:px-6">
            <div className="relative w-full max-w-4xl mx-auto">
              <figure>
                <div className="aspect-video w-full rounded-xl shadow-lg overflow-hidden border">
                  <Image
                    src="https://cdn.goengineer.com/input-new-dimensions-solidworks-macro.gif"
                    alt="SolidWorks macro in action"
                    width={800}
                    height={450}
                    unoptimized
                    className="w-full h-full object-cover"
                  />
                </div>
                <figcaption className="mt-4 text-center text-sm text-muted-foreground">
                  A simple macro automates cube modeling in SolidWorks.
                </figcaption>
              </figure>
            </div>
          </div>
        </section>
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
