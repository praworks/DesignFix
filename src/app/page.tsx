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

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <WhyAutomateSection />
        <SolutionsSection />
        <ReverseEngineeringSection />
        <SolidworksOptimizationSection />
        <PortfolioSection />
        <TechStackSection />
        <AboutSection />
        <section className="bg-background">
          <div className="container mx-auto px-4 md:px-6">
            <div className="relative w-full max-w-4xl mx-auto">
              <div className="aspect-video w-full rounded-xl shadow-lg overflow-hidden">
                <video
                  src="https://videos.autodesk.com/zencoder/content/dam/autodesk/www/solutions/design-automation/what-is-design-automation-video-1920x817.mp4"
                  title="Design Automation"
                  controls
                  autoPlay
                  muted
                  loop
                  className="w-full h-full object-cover"
                ></video>
              </div>
            </div>
          </div>
        </section>
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
