import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Gauge, Feather, BookCheck } from "lucide-react";
import Image from "next/image";

const optimizations = [
  {
    title: "Performance Tuning",
    description: "We analyze and optimize your SolidWorks settings and hardware configurations to ensure maximum performance and stability.",
    icon: Gauge,
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop",
    hint: "dashboard computer",
  },
  {
    title: "Large Assembly Management",
    description: "Implement strategies like lightweight modes, configurations, and SpeedPak to make working with large assemblies seamless and efficient.",
    icon: Feather,
    image: "https://images.unsplash.com/photo-1620325867510-537903d38c11?q=80&w=1972&auto=format&fit=crop",
    hint: "engine assembly",
  },
  {
    title: "Best Practice & Template Creation",
    description: "We establish standardized templates and best-practice modeling techniques to ensure consistency and improve model rebuild times across your team.",
    icon: BookCheck,
    image: "https://images.unsplash.com/photo-1581092916376-29a53123863a?q=80&w=2070&auto=format&fit=crop",
    hint: "technical manual",
  },
];

export default function SolidworksOptimizationSection() {
  return (
    <section id="solidworks-optimization" className="bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl">
            SolidWorks Optimization Solutions
          </h2>
          <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Unlock the full potential of your SolidWorks environment. We fine-tune your setup and workflows for maximum speed and efficiency.
          </p>
        </div>
        <div className="mx-auto mt-12 grid gap-8 sm:grid-cols-1 md:grid-cols-3">
          {optimizations.map((solution) => (
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
