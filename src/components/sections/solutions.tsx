import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import { 
  Workflow, 
  Code, 
  FileSpreadsheet, 
  PanelRight, 
  Settings, 
  Server, 
  Replace, 
  FileCode,
  Database,
  QrCode,
  FileSearch,
  BookCopy
} from "lucide-react";

const useCases = [
  {
    title: "DriveWorks Automation",
    description: "Rule-driven design automation for product configurators and quote generation.",
    icon: Settings,
    image: "https://placehold.co/600x400.png",
    hint: "gear rules",
  },
  {
    title: "SolidWorks API Development",
    description: "Custom macros, add-ins, and feature automation using SolidWorks API (C#, VBA).",
    icon: Code,
    image: "https://placehold.co/600x400.png",
    hint: "c-sharp code",
  },
  {
    title: "Batch File Processing",
    description: "Automating repetitive tasks across multiple CAD files (e.g., exporting, updating properties).",
    icon: Workflow,
    image: "https://placehold.co/600x400.png",
    hint: "file workflow",
  },
  {
    title: "PDM Integration",
    description: "Automating interactions with SolidWorks PDM for file management and metadata control.",
    icon: Server,
    image: "https://placehold.co/600x400.png",
    hint: "server database",
  },
  {
    title: "BOM & Drawing Automation",
    description: "Auto-generating BOMs and engineering drawings with custom annotations and standards.",
    icon: FileSpreadsheet,
    image: "https://placehold.co/600x400.png",
    hint: "technical drawing",
  },
  {
    title: "Macro-to-Add-in Conversion",
    description: "Converting VBA/SolidWorks macros to robust .NET-based add-ins.",
    icon: Replace,
    image: "https://placehold.co/600x400.png",
    hint: "code conversion",
  },
  {
    title: "Interactive Form-Based Interfaces",
    description: "Using Windows Forms or WPF to create user input-driven modeling tools.",
    icon: PanelRight,
    image: "https://placehold.co/600x400.png",
    hint: "user interface",
  },
  {
    title: "REST API Integration",
    description: "Connecting CAD tools to external systems (e.g., ERP, PLM) for end-to-end automation.",
    icon: FileCode,
    image: "https://placehold.co/600x400.png",
    hint: "api integration",
  },
  {
    title: "Database-Driven Modeling",
    description: "Populating models using SQL or NoSQL databases to support scalable product variations.",
    icon: Database,
    image: "https://placehold.co/600x400.png",
    hint: "database modeling",
  },
  {
    title: "QR Code & Barcode Embedding",
    description: "Automating rating plate generation and embedding codes for traceability.",
    icon: QrCode,
    image: "https://placehold.co/600x400.png",
    hint: "qr code",
  },
  {
    title: "Simulation Pre-Setup Automation",
    description: "Preparing FEA/simulation studies with pre-defined loads, meshes, and configurations.",
    icon: FileSearch,
    image: "https://placehold.co/600x400.png",
    hint: "fea simulation",
  },
  {
    title: "Custom Property Automation",
    description: "Auto-filling and managing custom properties across assemblies and parts.",
    icon: BookCopy,
    image: "https://placehold.co/600x400.png",
    hint: "data properties",
  },
];

export default function SolutionsSection() {
  return (
    <section id="solutions" className="bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl">
            Advanced CAD Automation Solutions
          </h2>
          <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Explore how our custom automation tools can transform your design workflows across various applications.
          </p>
        </div>
        <div className="mx-auto mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {useCases.map((useCase) => (
            <Card key={useCase.title} className="flex flex-col overflow-hidden transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-xl">
              <CardHeader className="flex flex-row items-center gap-4 p-6">
                 <useCase.icon className="h-8 w-8 text-primary shrink-0" />
                 <CardTitle className="font-headline text-xl">{useCase.title}</CardTitle>
              </CardHeader>
              <CardContent className="p-6 pt-0 flex-grow">
                <p className="text-muted-foreground">{useCase.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
