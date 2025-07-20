import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import { ScanLine, Ruler, HardHat } from "lucide-react";

const solutions = [
  {
    title: "Precision Measuring",
    description: "Utilizing advanced metrology tools to capture precise dimensions from physical objects for accurate digital recreation.",
    icon: Ruler,
    image: "https://images.unsplash.com/photo-1619279585531-313b485f7c22?q=80&w=2070&auto=format&fit=crop",
    hint: "digital calipers",
  },
  {
    title: "High-Fidelity 3D Scanning",
    description: "Transforming complex physical parts into detailed 3D models using state-of-the-art scanning technology, perfect for legacy parts or modifications.",
    icon: ScanLine,
    image: "https://images.unsplash.com/photo-1683446059123-956f51a2f643?q=80&w=1974&auto=format&fit=crop",
    hint: "3d scanner",
  },
  {
    title: "Technical Drawings & CAD Conversion",
    description: "Creating comprehensive technical drawings from scanned data or existing parts, and converting them into production-ready CAD files.",
    icon: HardHat,
    image: "https://images.unsplash.com/photo-1542382494-099132338014?q=80&w=1974&auto=format&fit=crop",
    hint: "cad blueprint",
  },
];

export default function ReverseEngineeringSection() {
  return (
    <section id="reverse-engineering" className="bg-card">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl">
            Reverse Engineering Solutions
          </h2>
          <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            From physical object to digital design. We provide comprehensive reverse engineering services to replicate, analyze, and improve existing components.
          </p>
        </div>
        <div className="mx-auto mt-12 grid gap-8 sm:grid-cols-1 md:grid-cols-3">
          {solutions.map((solution) => (
            <Card key={solution.title} className="flex flex-col overflow-hidden transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-xl">
               <CardHeader className="p-0">
                 <div className="aspect-video w-full h-48 relative">
                    <Image
                        src={solution.image}
                        alt={solution.title}
                        fill
                        className="object-cover"
                        data-ai-hint={solution.hint}
                    />
                </div>
              </CardHeader>
              <CardContent className="p-6 flex-grow">
                <div className="flex items-center gap-4 mb-2">
                    <solution.icon className="h-8 w-8 text-primary" />
                    <CardTitle className="font-headline text-xl">{solution.title}</CardTitle>
                </div>
                <p className="text-muted-foreground">{solution.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
