import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";

const projects = [
  { name: "Cupboards", image: "https://www.ikea.com.hk/dairyfarm/hk/images/814/1281447_PE931867_S4.jpg" },
  { name: "Agricultural trailers", image: "https://www.otiumfarm.eu/images/cache/7f53182ea0dbf56f4e2fbcfbfb40122c_w900.jpg" },
  { name: "Pressure vessels", image: "https://upload.wikimedia.org/wikipedia/commons/e/e9/Pressure_vessel_%288466691960%29.jpg" },
  { name: "Wheelchairs", image: "https://upload.wikimedia.org/wikipedia/commons/9/9a/Wheelchair.jpg" },
  { name: "Solar heaters", image: "https://upload.wikimedia.org/wikipedia/commons/a/a7/Solar_water_heater.jpg" },
  { name: "Medical trolleys", image: "https://upload.wikimedia.org/wikipedia/commons/2/27/Crash_Cart.jpg" },
  { name: "Machine guards", image: "https://upload.wikimedia.org/wikipedia/commons/a/a2/Machine_guarding.jpg" },
  { name: "Lockers", image: "https://upload.wikimedia.org/wikipedia/commons/0/0e/Locker.JPG" },
  { name: "Lifting beams", image: "https://upload.wikimedia.org/wikipedia/commons/2/22/Albion_Mill%2C_Hazel_Grove_-_geograph.org.uk_-_377456.jpg" },
  { name: "Hydraulic cylinders", image: "https://upload.wikimedia.org/wikipedia/commons/7/7e/Hydraulic_cylinder.JPG" },
  { name: "Flanges", image: "https://upload.wikimedia.org/wikipedia/commons/b/b3/Conflat_Flange.jpg" },
  { name: "Agricultural silos", image: "https://upload.wikimedia.org/wikipedia/commons/0/01/Grain_silo.jpg" },
  { name: "Conveyors", image: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Belt-conveyor-handling.jpg" },
  { name: "Toolboxes", image: "https://upload.wikimedia.org/wikipedia/commons/e/e5/20060513_toolbox.jpg" },
  { name: "Truck trailers", image: "https://upload.wikimedia.org/wikipedia/commons/4/44/07-11-1947_02099_Vrachtwagen_Zijlstra_%2814950046230%29.jpg" },
  { name: "Industrial stairs", image: "https://upload.wikimedia.org/wikipedia/commons/e/e4/2003-09-30_Looking_down_metal_staircase.jpg" },
  { name: "Wooden doors", image: "https://upload.wikimedia.org/wikipedia/commons/2/20/Wooden_door.jpg" },
  { name: "Canopies", image: "https://upload.wikimedia.org/wikipedia/commons/9/96/Restaurant_Entrance_Canopy_%283207249778%29.jpg" },
  { name: "Fans", image: "https://upload.wikimedia.org/wikipedia/commons/8/87/2008-08-05_Industrial_heavy_duty_air_circulator.jpg" },
  { name: "Bi-fold doors", image: "https://upload.wikimedia.org/wikipedia/commons/5/52/Drawing_Room_Bifold_Door%2C_Mark_Twain_House%2C_by_Louis_Comfort_Tiffany_%26_Co.%2C_c._1881%2C_bronze_powder_paint%2C_silver_plated_hardware%2C_walnut_-_New_Britain_Museum_of_American_Art_-_DSC09662.JPG" },
  { name: "Steel doors", image: "https://upload.wikimedia.org/wikipedia/commons/3/30/13-08-11-hongkong-chungking-mansions-03.jpg" },
  { name: "Utility vehicles", image: "https://upload.wikimedia.org/wikipedia/commons/2/23/The_Utility_Vehicle_-_Flickr_-_Stradablog.jpg" },
  { name: "Play systems", image: "https://upload.wikimedia.org/wikipedia/commons/f/f9/Playground_Slide_Metal.jpg" },
  { name: "Power packs", image: "https://upload.wikimedia.org/wikipedia/commons/3/33/Hydraulic_power_package_hg.jpg" },
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
                        className="object-contain"
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
