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
          <div className="sticky top-[63px] z-40 -mx-6 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="container mx-auto px-6">
              <TabsList className="grid w-full grid-cols-1 sm:grid-cols-3 h-auto bg-transparent p-0">
                <TabsTrigger value="automation" className="py-3 rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:shadow-none data-[state=active]:bg-transparent text-muted-foreground data-[state=active]:text-primary">Advanced CAD Automation</TabsTrigger>
                <TabsTrigger value="reverse-engineering" className="py-3 rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:shadow-none data-[state=active]:bg-transparent text-muted-foreground data-[state=active]:text-primary">Reverse Engineering</TabsTrigger>
                <TabsTrigger value="optimization" className="py-3 rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:shadow-none data-[state=active]:bg-transparent text-muted-foreground data-[state=active]:text-primary">SolidWorks Optimization</TabsTrigger>
              </TabsList>
            </div>
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
