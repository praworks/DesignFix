import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";

const projects = [
  { name: "Cupboards", image: "https://images.unsplash.com/photo-1595428774236-139545b53953?q=80&w=1600" },
  { name: "Agricultural trailers", image: "https://images.unsplash.com/photo-1621243552258-c39059049071?q=80&w=1600" },
  { name: "Pressure vessels", image: "https://images.unsplash.com/photo-1605152274216-95680653554e?q=80&w=1600" },
  { name: "Wheelchairs", image: "https://images.unsplash.com/photo-1599493356641-6d80a4c5145b?q=80&w=1600" },
  { name: "Solar heaters", image: "https://images.unsplash.com/photo-1533089458356-6444a42d87a5?q=80&w=1600" },
  { name: "Medical trolleys", image: "https://images.unsplash.com/photo-1628290949984-b9d0e7a75069?q=80&w=1600" },
  { name: "Machine guards", image: "https://images.unsplash.com/photo-1567362323388-a284c4a63f73?q=80&w=1600" },
  { name: "Lockers", image: "https://images.unsplash.com/photo-1580246750914-18a66f7f6a73?q=80&w=1600" },
  { name: "Lifting beams", image: "https://images.unsplash.com/photo-1590799423588-442436f3c179?q=80&w=1600" },
  { name: "Hydraulic cylinders", image: "https://images.unsplash.com/photo-1618037249485-703399475193?q=80&w=1600" },
  { name: "Flanges", image: "https://images.unsplash.com/photo-1618037249485-703399475193?q=80&w=1600" },
  { name: "Agricultural silos", image: "https://images.unsplash.com/photo-1598868349232-4663c69e6e87?q=80&w=1600" },
  { name: "Conveyors", image: "https://images.unsplash.com/photo-1587397274154-82ab85a8a107?q=80&w=1600" },
  { name: "Toolboxes", image: "https://images.unsplash.com/photo-1589921503714-9c5421c43f7d?q=80&w=1600" },
  { name: "Truck trailers", image: "https://images.unsplash.com/photo-1590345330364-e1d99691c28c?q=80&w=1600" },
  { name: "Industrial stairs", image: "https://images.unsplash.com/photo-1552573212-00b84f3506ac?q=80&w=1600" },
  { name: "Wooden doors", image: "https://images.unsplash.com/photo-1600122216894-399c537d8065?q=80&w=1600" },
  { name: "Canopies", image: "https://images.unsplash.com/photo-1588621434075-8a24535357a7?q=80&w=1600" },
  { name: "Fans", image: "https://images.unsplash.com/photo-1572417242343-98357a89c13b?q=80&w=1600" },
  { name: "Bi-fold doors", image: "https://images.unsplash.com/photo-1616047006789-b7af5afb8c20?q=80&w=1600" },
  { name: "Steel doors", image: "https://images.unsplash.com/photo-1521744151268-283187c3a7a4?q=80&w=1600" },
  { name: "Utility vehicles", image: "https://images.unsplash.com/photo-1581459423174-8d14b4a1127a?q=80&w=1600" },
  { name: "Play systems", image: "https://images.unsplash.com/photo-1599282928549-354955a1d0de?q=80&w=1600" },
  { name: "Power packs", image: "https://images.unsplash.com/photo-1608629138618-999331f4a974?q=80&w=1600" },
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
