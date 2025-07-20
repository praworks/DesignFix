import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";

const useCases = [
  {
    title: "Automated Enclosure Design",
    description: "A custom add-in that generates complex electronic enclosures based on user-defined parameters, saving hours of manual modeling.",
    image: "https://placehold.co/600x400.png",
    aiHint: "circuit board enclosure"
  },
  {
    title: "DriveWorks Frame Generator",
    description: "A DriveWorks-powered tool that configures and generates structural frames automatically, ideal for custom machinery and modular construction.",
    image: "https://placehold.co/600x400.png",
    aiHint: "metal frame"
  },
  {
    title: "Taskpane Part Library UI",
    description: "An intuitive Taskpane UI for browsing, configuring, and inserting standard parts from a library, ensuring consistency and speed.",
    image: "https://placehold.co/600x400.png",
    aiHint: "ui design"
  },
  {
    title: "API-Based PDF & BOM Automation",
    description: "An API-driven solution that automates the creation and export of manufacturing drawings, PDFs, and Bills of Materials.",
    image: "https://placehold.co/600x400.png",
    aiHint: "technical drawing"
  },
  {
    title: "SolidWorks Model Optimization",
    description: "A custom tool that analyzes SolidWorks models for performance issues and applies optimizations to improve loading and rebuild times.",
    image: "https://placehold.co/600x400.png",
    aiHint: "3d model wireframe"
  },
];

export default function SolutionsSection() {
  return (
    <section id="solutions" className="bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Real-World Automation Solutions
          </h2>
          <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Explore how our custom automation tools have transformed design workflows for clients across various industries.
          </p>
        </div>
        <div className="mx-auto mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {useCases.map((useCase) => (
            <Card key={useCase.title} className="overflow-hidden transition-transform hover:scale-105 hover:shadow-lg">
              <CardHeader className="p-0">
                <Image
                  src={useCase.image}
                  alt={useCase.title}
                  width={600}
                  height={400}
                  data-ai-hint={useCase.aiHint}
                  className="w-full h-48 object-cover"
                />
              </CardHeader>
              <CardContent className="p-6">
                <CardTitle className="font-headline text-xl mb-2">{useCase.title}</CardTitle>
                <p className="text-muted-foreground">{useCase.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
