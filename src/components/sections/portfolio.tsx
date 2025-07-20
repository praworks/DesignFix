import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";

const projects = [
  { name: "Cupboards", image: "https://images.unsplash.com/photo-1596205252519-2947115b914c?q=80&w=2070&auto=format&fit=crop", hint: "kitchen cupboards" },
  { name: "Agricultural trailers", image: "https://images.unsplash.com/photo-1620352751093-313fe8a68b75?q=80&w=2070&auto=format&fit=crop", hint: "farm trailer" },
  { name: "Pressure vessels", image: "https://images.unsplash.com/photo-1616091093943-4858ac709e36?q=80&w=1974&auto=format&fit=crop", hint: "industrial tanks" },
  { name: "Wheelchairs", image: "https://images.unsplash.com/photo-1506796843339-3a38a83415c9?q=80&w=1974&auto=format&fit=crop", hint: "modern wheelchair" },
  { name: "Solar heaters", image: "https://images.unsplash.com/photo-1563412300262-6b583f7422a7?q=80&w=2070&auto=format&fit=crop", hint: "solar panels" },
  { name: "Medical trolleys", image: "https://images.unsplash.com/photo-1538108149393-fbbd81895907?q=80&w=2128&auto=format&fit=crop", hint: "hospital equipment" },
  { name: "Machine guards", image: "https://www.driveworks.co.uk/hubfs/Industries/Industrial_Machinery_and_Equipment/MachineGuarding-Single-Large.jpg", hint: "industrial robot" },
  { name: "Lockers", image: "https://images.unsplash.com/photo-1580221374567-2dba949673cc?q=80&w=2070&auto=format&fit=crop", hint: "gym lockers" },
  { name: "Lifting beams", image: "https://www.driveworks.co.uk/hubfs/Industries/Material_Handling_and_Lifting_Equipment/LiftingBeams-Single.jpg", hint: "construction crane" },
  { name: "Hydraulic cylinders", image: "https://www.driveworks.co.uk/hubfs/Industries/Valves_and_Cylinders/Cylinders-Config-Large-1.jpg", hint: "hydraulic machine" },
  { name: "Flanges", image: "https://images.unsplash.com/photo-1619379017839-847b72c575a0?q=80&w=2070&auto=format&fit=crop", hint: "pipe flanges" },
  { name: "Agricultural silos", image: "https://images.unsplash.com/photo-1582996131649-f04d7321azzi?q=80&w=1964&auto=format&fit=crop", hint: "grain silo" },
  { name: "Conveyors", image: "https://images.unsplash.com/photo-1675276609711-b3b44254c728?q=80&w=2070&auto=format&fit=crop", hint: "conveyor belt" },
  { name: "Toolboxes", image: "https://images.unsplash.com/photo-1603466488390-95e2a281e058?q=80&w=1974&auto=format&fit=crop", hint: "red toolbox" },
  { name: "Truck trailers", image: "https://images.unsplash.com/photo-1590212151009-3d1983533824?q=80&w=2069&auto=format&fit=crop", hint: "semi truck" },
  { name: "Industrial stairs", image: "https://images.unsplash.com/photo-1521994135948-443213501904?q=80&w=1974&auto=format&fit=crop", hint: "metal staircase" },
  { name: "Wooden doors", image: "https://images.unsplash.com/photo-1520016421079-5e8d8c221a69?q=80&w=1974&auto=format&fit=crop", hint: "ornate door" },
  { name: "Canopies", image: "https://images.unsplash.com/photo-1601493700431-21a43415494d?q=80&w=2070&auto=format&fit=crop", hint: "outdoor canopy" },
  { name: "Fans", image: "https://images.unsplash.com/photo-1545894136-b601f78a1622?q=80&w=2070&auto=format&fit=crop", hint: "industrial fan" },
  { name: "Bi-fold doors", image: "https://images.unsplash.com/photo-1616046229478-9901c5536a45?q=80&w=2070&auto=format&fit=crop", hint: "patio doors" },
  { name: "Steel doors", image: "https://images.unsplash.com/photo-1527376662433-a3ab4b604bce?q=80&w=1974&auto=format&fit=crop", hint: "metal door" },
  { name: "Utility vehicles", image: "https://images.unsplash.com/photo-1599836481977-cbfd8bf24458?q=80&w=2070&auto=format&fit=crop", hint: "utility truck" },
  { name: "Play systems", image: "https://images.unsplash.com/photo-1598822497041-3561959775a7?q=80&w=2070&auto=format&fit=crop", hint: "playground slide" },
  { name: "Power packs", image: "https://www.driveworks.co.uk/hubfs/Industries/Valves_and_Cylinders/PowerPacks-Single-Large.jpg", hint: "hydraulic power" },
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
