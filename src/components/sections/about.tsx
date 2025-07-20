import { CheckCircle } from "lucide-react";
import Image from "next/image";

const services = [
  "CAD design solutions",
  "SolidWorks automation using API & macros",
  "DriveWorks configuration setup",
  "Autodesk/Inventor automation",
  "Taskpane UI design and integration",
  "Design optimization workflows",
  "Custom .NET/C# CAD tools Macros",
];

export default function AboutSection() {
  return (
    <section id="about" className="bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
           <div className="relative order-last lg:order-first">
            <Image
                src="https://placehold.co/600x400.png"
                alt="About DesignFix"
                data-ai-hint="engineering team collaboration"
                width={600}
                height={400}
                className="w-full rounded-xl shadow-lg"
            />
           </div>
          <div className="space-y-6">
            <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl">
              Your Partner in Design Automation
            </h2>
            <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed">
              With over 12 years of experience in design engineering, I
              specialize in CAD automation. My focus is on helping engineering
              teams streamline and scale their workflows. From intelligent parametric
              models to advanced Taskpane UI add-ins, I develop custom tools
              that reduce manual work, minimize errors, and accelerate
              delivery.
            </p>
            <div className="mt-8">
              <h3 className="font-headline text-xl font-bold tracking-tighter">Key Services</h3>
              <ul className="mt-4 grid grid-cols-1 gap-2 sm:grid-cols-2">
                {services.map((service) => (
                  <li key={service} className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    <span>{service}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
