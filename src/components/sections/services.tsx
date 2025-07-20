"use client";

import * as React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import SolutionsSectionContent from "@/components/sections/solutions";
import ReverseEngineeringSectionContent from "@/components/sections/reverse-engineering";
import SolidworksOptimizationSectionContent from "@/components/sections/solidworks-optimization";

export default function ServicesSection() {
  const [activeTab, setActiveTab] = React.useState("automation");
  const sectionsRef = React.useRef<Record<string, HTMLElement | null>>({});

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.getAttribute("data-section-id");
            if (id) {
              setActiveTab(id);
            }
          }
        });
      },
      {
        rootMargin: "-40% 0px -60% 0px", // Activate when section is in the middle of the viewport
        threshold: 0,
      }
    );

    const currentSections = sectionsRef.current;
    Object.values(currentSections).forEach((section) => {
      if (section) {
        observer.observe(section);
      }
    });

    return () => {
      Object.values(currentSections).forEach((section) => {
        if (section) {
          observer.unobserve(section);
        }
      });
    };
  }, []);

  const setSectionRef = (id: string) => (el: HTMLElement | null) => {
    sectionsRef.current[id] = el;
  };

  return (
    <section id="solutions" className="bg-card scroll-mt-[140px]">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl">
                Solutions
            </h2>
        </div>
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full mt-8">
          <div className="sticky top-[63px] z-40 -mx-6 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="container mx-auto px-6">
              <TabsList className="grid w-full grid-cols-1 sm:grid-cols-3 h-auto bg-transparent p-0">
                <TabsTrigger value="automation" className="py-3 rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:shadow-none data-[state=active]:bg-transparent text-muted-foreground data-[state=active]:text-primary">Advanced CAD Automation</TabsTrigger>
                <TabsTrigger value="reverse-engineering" className="py-3 rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:shadow-none data-[state=active]:bg-transparent text-muted-foreground data-[state=active]:text-primary">Reverse Engineering</TabsTrigger>
                <TabsTrigger value="optimization" className="py-3 rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:shadow-none data-[state=active]:bg-transparent text-muted-foreground data-[state=active]:text-primary">SolidWorks Optimization</TabsTrigger>
              </TabsList>
            </div>
          </div>
          <div className="mt-8 space-y-16">
            <div ref={setSectionRef("automation")} data-section-id="automation">
              <TabsContent value="automation" forceMount>
                <SolutionsSectionContent />
              </TabsContent>
            </div>
             <div ref={setSectionRef("reverse-engineering")} data-section-id="reverse-engineering">
                <TabsContent value="reverse-engineering" forceMount>
                    <ReverseEngineeringSectionContent />
                </TabsContent>
            </div>
             <div ref={setSectionRef("optimization")} data-section-id="optimization">
                <TabsContent value="optimization" forceMount>
                    <SolidworksOptimizationSectionContent />
                </TabsContent>
            </div>
          </div>
        </Tabs>
      </div>
    </section>
  );
}
