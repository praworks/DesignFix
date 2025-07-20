import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import SolutionsSectionContent from "@/components/sections/solutions";
import ReverseEngineeringSectionContent from "@/components/sections/reverse-engineering";
import SolidworksOptimizationSectionContent from "@/components/sections/solidworks-optimization";

export default function ServicesSection() {
  return (
    <section id="solutions" className="bg-card">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl">
                Solutions
            </h2>
        </div>
        <Tabs defaultValue="automation" className="w-full mt-8">
          <div className="sticky top-[63px] z-40 bg-card/80 backdrop-blur-lg -mx-6 px-6 py-2 border-b">
            <TabsList className="grid w-full grid-cols-1 sm:grid-cols-3 h-auto bg-primary/20 backdrop-blur-sm border border-primary/30 text-primary-foreground">
              <TabsTrigger value="automation" className="py-2 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=active]:shadow-lg">Advanced CAD Automation</TabsTrigger>
              <TabsTrigger value="reverse-engineering" className="py-2 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=active]:shadow-lg">Reverse Engineering</TabsTrigger>
              <TabsTrigger value="optimization" className="py-2 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=active]:shadow-lg">SolidWorks Optimization</TabsTrigger>
            </TabsList>
          </div>
          <div className="mt-8">
            <TabsContent value="automation">
              <SolutionsSectionContent />
            </TabsContent>
            <TabsContent value="reverse-engineering">
              <ReverseEngineeringSectionContent />
            </TabsContent>
            <TabsContent value="optimization">
              <SolidworksOptimizationSectionContent />
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </section>
  );
}
