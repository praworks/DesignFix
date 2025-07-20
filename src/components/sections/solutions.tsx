import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import { Workflow, Code, FileSpreadsheet, PanelRight } from "lucide-react";

const useCases = [
  {
    title: "Rule-Based 3D Modeling",
    description: "Automate the creation of complex 3D models using predefined rules and logic, ensuring consistency and reducing manual modeling time.",
    icon: Workflow,
    image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=2070&auto=format&fit=crop",
    hint: "3d model wireframe",
  },
  {
    title: ".NET/C# Based Automations",
    description: "Develop powerful, custom SolidWorks add-ins and macros using .NET and C# to automate repetitive tasks and integrate with other systems.",
    icon: Code,
    image: "https://images.unsplash.com/photo-1587620962725-abab7fe55159?q=80&w=1931&auto=format&fit=crop",
    hint: "c-sharp code",
  },
  {
    title: "Excel-Based Automation",
    description: "Drive your CAD models from Excel. Manage thousands of variations of your designs by simply changing values in a spreadsheet.",
    icon: FileSpreadsheet,
    image: "https://images.unsplash.com/photo-1611984534723-6a563a6f7992?q=80&w=2070&auto=format&fit=crop",
    hint: "excel spreadsheet",
  },
  {
    title: "Taskpane UI Automations",
    description: "Create intuitive, user-friendly Taskpane UIs for your SolidWorks add-ins, making complex automations accessible to your entire team.",
    icon: PanelRight,
    image: "https://images.unsplash.com/photo-1555949963-ff980e62553b?q=80&w=1964&auto=format&fit=crop",
    hint: "user interface",
  },
];

export default function SolutionsSection() {
  return (
    <section id="solutions" className="bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl">
            CAD Automation Solutions
          </h2>
          <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Explore how our custom automation tools can transform your design workflows across various applications.
          </p>
        </div>
        <div className="mx-auto mt-12 grid gap-8 md:grid-cols-2">
          {useCases.map((useCase) => (
            <Card key={useCase.title} className="flex flex-col overflow-hidden transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-xl">
               <CardHeader className="p-0">
                 <div className="aspect-video w-full h-48 relative">
                    <Image
                        src={useCase.image}
                        alt={useCase.title}
                        fill
                        className="object-cover"
                        data-ai-hint={useCase.hint}
                    />
                </div>
              </CardHeader>
              <CardContent className="p-6 flex-grow">
                 <div className="flex items-center gap-4 mb-2">
                    <useCase.icon className="h-8 w-8 text-primary" />
                    <CardTitle className="font-headline text-xl">{useCase.title}</CardTitle>
                </div>
                <p className="text-muted-foreground">{useCase.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
