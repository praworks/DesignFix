import Header from "@/components/header";
import HeroSection from "@/components/sections/hero";
import AboutSection from "@/components/sections/about";
import WhyAutomateSection from "@/components/sections/why-automate";
import SolutionsSection from "@/components/sections/solutions";
import TechStackSection from "@/components/sections/tech-stack";
import ContactSection from "@/components/sections/contact";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <AboutSection />
        <WhyAutomateSection />
        <SolutionsSection />
        <TechStackSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
