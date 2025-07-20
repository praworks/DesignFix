import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import SolutionsSectionContent from "@/components/sections/solutions";
import ReverseEngineeringSectionContent from "@/components/sections/reverse-engineering";
import SolidworksOptimizationSectionContent from "@/components/sections/solidworks-optimization";

export default function ServicesSection() {
  return (
    <section id="solutions" className="bg-background">
      <div className="container mx-auto px-4 md:px-6 py-12 md:py-24 lg:py-32">
        <Tabs defaultValue="automation" className="w-full">
          <TabsList className="grid w-full grid-cols-1 sm:grid-cols-3 h-auto">
            <TabsTrigger value="automation" className="py-2">Advanced CAD Automation</TabsTrigger>
            <TabsTrigger value="reverse-engineering" className="py-2">Reverse Engineering</TabsTrigger>
            <TabsTrigger value="optimization" className="py-2">SolidWorks Optimization</TabsTrigger>
          </TabsList>
          <TabsContent value="automation" className="mt-8">
            <SolutionsSectionContent />
          </TabsContent>
          <TabsContent value="reverse-engineering" className="mt-8">
            <ReverseEngineeringSectionContent />
          </TabsContent>
          <TabsContent value="optimization" className="mt-8">
            <SolidworksOptimizationSectionContent />
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}