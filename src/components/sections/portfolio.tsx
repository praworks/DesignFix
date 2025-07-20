import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";

const projects = [
  { name: "Cupboards", image: "https://source.unsplash.com/1600x900/?cupboards" },
  { name: "Agricultural trailers", image: "https://source.unsplash.com/1600x900/?agricultural-trailer" },
  { name: "Pressure vessels", image: "https://source.unsplash.com/1600x900/?pressure-vessel" },
  { name: "Wheelchairs", image: "https://source.unsplash.com/1600x900/?wheelchair" },
  { name: "Solar heaters", image: "https://source.unsplash.com/1600x900/?solar-heater" },
  { name: "Medical trolleys", image: "https://source.unsplash.com/1600x900/?medical-trolley" },
  { name: "Machine guards", image: "https://source.unsplash.com/1600x900/?machine-guard" },
  { name: "Lockers", image: "https://source.unsplash.com/1600x900/?locker" },
  { name: "Lifting beams", image: "https://source.unsplash.com/1600x900/?lifting-beam" },
  { name: "Hydraulic cylinders", image: "https://source.unsplash.com/1600x900/?hydraulic-cylinder" },
  { name: "Flanges", image: "https://source.unsplash.com/1600x900/?flange" },
  { name: "Agricultural silos", image: "https://source.unsplash.com/1600x900/?silo" },
  { name: "Conveyors", image: "https://source.unsplash.com/1600x900/?conveyor" },
  { name: "Toolboxes", image: "https://source.unsplash.com/1600x900/?toolbox" },
  { name: "Truck trailers", image: "https://source.unsplash.com/1600x900/?truck-trailer" },
  { name: "Industrial stairs", image: "https://source.unsplash.com/1600x900/?industrial-stairs" },
  { name: "Wooden doors", image: "https://source.unsplash.com/1600x900/?wooden-door" },
  { name: "Canopies", image: "https://source.unsplash.com/1600x900/?canopy" },
  { name: "Fans", image: "https://source.unsplash.com/1600x900/?industrial-fan" },
  { name: "Bi-fold doors", image: "https://source.unsplash.com/1600x900/?bifold-door" },
  { name: "Steel doors", image: "https://source.unsplash.com/1600x900/?steel-door" },
  { name: "Utility vehicles", image: "https://source.unsplash.com/1600x900/?utility-vehicle" },
  { name: "Play systems", image: "https://source.unsplash.com/1600x900/?playground" },
  { name: "Power packs", image: "https://source.unsplash.com/1600x900/?power-pack" },
];

export default function PortfolioSection() {
  return (
    <section id="portfolio" className="bg-card">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl">
            Portfolio Projects
          </h2>
          <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            From industrial machinery to consumer products, our automation solutions cover a wide range of applications.
          </p>
        </div>
        <div className="mx-auto mt-12 grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {projects.map((project) => (
            <Card key={project.name} className="overflow-hidden transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-xl">
                <div className="aspect-video w-full relative">
                    <Image
                        src={project.image}
                        alt={project.name}
                        fill
                        className="object-cover"
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
