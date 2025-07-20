import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";

const projects = [
  { name: "Machinery Manufacturing", image: "https://images.unsplash.com/photo-1567789884554-0b844b597180?q=80&w=2070&auto=format&fit=crop", hint: "industrial machinery" },
  { name: "Architectural Components & Building Products", image: "https://images.unsplash.com/photo-1556912173-35f35c448995?q=80&w=2070&auto=format&fit=crop", hint: "building materials" },
  { name: "Furniture Manufacturing", image: "https://images.unsplash.com/photo-1596205252519-2947115b914c?q=80&w=2070&auto=format&fit=crop", hint: "modern furniture" },
  { name: "HVAC", image: "https://images.unsplash.com/photo-1617935492448-13c415259955?q=80&w=2070&auto=format&fit=crop", hint: "air conditioner" },
  { name: "Materials Handling Equipment", image: "https://images.unsplash.com/photo-1587293852726-70cdb1e858ce?q=80&w=2070&auto=format&fit=crop", hint: "forklift" },
  { name: "Transportation", image: "https://images.unsplash.com/photo-1590212151009-3d1983533824?q=80&w=2069&auto=format&fit=crop", hint: "truck trailer" },
  { name: "Sheet Metal Fabrication", image: "https://images.unsplash.com/photo-1621992039233-7de2e3c9a34a?q=80&w=1974&auto=format&fit=crop", hint: "sheet metal" },
  { name: "Storage Solutions", image: "https://images.unsplash.com/photo-1580221374567-2dba949673cc?q=80&w=2070&auto=format&fit=crop", hint: "storage lockers" },
  { name: "Agricultural Equipment", image: "https://images.unsplash.com/photo-1582996131649-f04d7321azzi?q=80&w=1964&auto=format&fit=crop", hint: "farm equipment" },
];

export default function PortfolioSection() {
  return (
    <section id="industries" className="bg-card">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl">
            Industries That Benefit from CAD Automation
          </h2>
          <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            From industrial machinery to consumer products, our automation solutions cover a wide range of applications.
          </p>
        </div>
        <div className="mx-auto mt-12 grid gap-6 sm:grid-cols-2 md:grid-cols-3">
          {projects.map((project) => (
            <Card key={project.name} className="overflow-hidden transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-xl">
                <div className="aspect-square w-full relative">
                    <Image
                        src={project.image}
                        alt={project.name}
                        fill
                        className="object-cover"
                        data-ai-hint={project.hint}
                    />
                </div>
              <CardContent className="p-4">
                <CardTitle className="font-headline text-lg text-center">{project.name}</CardTitle>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
