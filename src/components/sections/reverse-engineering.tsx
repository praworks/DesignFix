import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import { ScanLine, Ruler, HardHat, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const solutions = [
  {
    title: "Precision Measuring",
    description: "Utilizing advanced metrology tools to capture precise dimensions from physical objects for accurate digital recreation.",
    icon: Ruler,
    image: "https://www.starrett.com/images/default-source/products/precision-hand-tools/slide-calipers/w798b-8s200e73331cusp11a0e6817e690451c9fa107218c1006f6.jpg?sfvrsn=fb9e2dfd_4",
    hint: "digital calipers",
  },
  {
    title: "High-Fidelity 3D Scanning",
    description: "Transforming complex physical parts into detailed 3D models using state-of-the-art scanning technology, perfect for legacy parts or modifications.",
    icon: ScanLine,
    image: "https://www.rapidscan3d.com/cdn/shop/files/2_5_1_1600x.jpg?v=1665443364",
    hint: "3d scanner",
  },
  {
    title: "Technical Drawings & CAD Conversion",
    description: "Creating comprehensive technical drawings from scanned data or existing parts, and converting them into production-ready CAD files.",
    icon: HardHat,
    image: "https://www.3ds.com/assets/invest/2023-04/engineering-drawing.jpg",
    hint: "cad blueprint",
  },
];

export default function ReverseEngineeringSectionContent() {
  return (
    <>
      <div className="flex flex-col items-center justify-center space-y-4 text-center">
        <h3 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl">
          Reverse Engineering Solutions
        </h3>
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
      <div className="mt-12 text-center">
        <Link href="/projects">
          <Button variant="outline">
            View Past Projects <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </Link>
      </div>
    </>
  );
}
