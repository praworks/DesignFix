import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";

const projects = [
  { name: "Cupboards", image: "https://www.ikea.com.hk/dairyfarm/hk/images/593/0759318_PE750241_S5.jpg", hint: "kitchen cupboards" },
  { name: "Agricultural trailers", image: "https://www.otiumfarm.eu/wp-content/uploads/2021/04/Zaslaw-D-737-12-ton-tandem-trailer-pronar-t680-joskin-wielton-metal-fach-agco-fendt-massey-ferguson-valtra-john-deere-new-holland-case-claas-deutz-fahr-same-lamborghini-kubota-1-1.jpg", hint: "farm trailer" },
  { name: "Pressure vessels", image: "https://t3.ftcdn.net/jpg/05/73/42/86/360_F_573428628_xRABo02TgpB0KajS0iS2I3p219ncoY2k.jpg", hint: "industrial tanks" },
  { name: "Wheelchairs", image: "https://www.vermeiren.com/wp-content/web-product-images/TRIGO-S-TETRA-2-scaled.jpg", hint: "modern wheelchair" },
  { name: "Solar heaters", image: "https://images.unsplash.com/photo-1563412300262-6b583f7422a7?q=80&w=2070&auto=format&fit=crop", hint: "solar panels" },
  { name: "Medical trolleys", image: "https://images.unsplash.com/photo-1538108149393-fbbd81895907?q=80&w=2128&auto=format&fit=crop", hint: "hospital equipment" },
  { name: "Machine guards", image: "https://www.driveworks.co.uk/hubfs/Industries/Industrial_Machinery_and_Equipment/MachineGuarding-Single-Large.jpg", hint: "industrial robot" },
  { name: "Lockers", image: "https://www.driveworks.co.uk/hubfs/Industries/Furniture/Metal_Locker_and_Storage_Solutions_Single_Image.jpg", hint: "gym lockers" },
  { name: "Lifting beams", image: "https://www.driveworks.co.uk/hubfs/Industries/Material_Handling_and_Lifting_Equipment/LiftingBeams-Single.jpg", hint: "construction crane" },
  { name: "Hydraulic cylinders", image: "https://www.driveworks.co.uk/hubfs/Industries/Valves_and_Cylinders/Cylinders-Config-Large-1.jpg", hint: "hydraulic machine" },
  { name: "Flanges", image: "https://images.unsplash.com/photo-1619379017839-847b72c575a0?q=80&w=2070&auto=format&fit=crop", hint: "pipe flanges" },
  { name: "Agricultural silos", image: "https://images.unsplash.com/photo-1582996131649-f04d7321azzi?q=80&w=1964&auto=format&fit=crop", hint: "grain silo" },
  { name: "Conveyors", image: "https://www.driveworks.co.uk/hubfs/Industries/Conveyors/conveyor-configurator-driveworks-2.jpg", hint: "conveyor belt" },
  { name: "Toolboxes", image: "https://www.driveworks.co.uk/hubfs/Customer-Stories/Excel-industries/excel-industries-toolboxes-1.jpg", hint: "red toolbox" },
  { name: "Truck trailers", image: "https://www.driveworks.co.uk/hubfs/Industries/Transportation_and_Automotive/Trailer-Config-Large.jpg", hint: "semi truck" },
  { name: "Industrial stairs", image: "https://www.driveworks.co.uk/hubfs/Industries/Construction_and_Building_Products/Stairs-Single-Large-1.jpg", hint: "metal staircase" },
  { name: "Wooden doors", image: "https://www.driveworks.co.uk/hubfs/Industries/Construction_and_Building_Products/Doors-and-Windows-Config-Large.jpg", hint: "ornate door" },
  { name: "Canopies", image: "https://www.driveworks.co.uk/hubfs/Industries/Construction_and_Building_Products/Canopies-Single-Large.jpg", hint: "outdoor canopy" },
  { name: "Fans", image: "https://images.unsplash.com/photo-1545894136-b601f78a1622?q=80&w=2070&auto=format&fit=crop", hint: "industrial fan" },
  { name: "Bi-fold doors", image: "https://images.unsplash.com/photo-1616046229478-9901c5536a45?q=80&w=2070&auto=format&fit=crop", hint: "patio doors" },
  { name: "Steel doors", image: "https://www.driveworks.co.uk/hubfs/Industries/Construction_and_Building_Products/Industrial_Doors_Single_Image.jpg", hint: "metal door" },
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
