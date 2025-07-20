import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  RefreshCw,
  ClipboardList,
  BrainCircuit,
  PanelRight,
  Library,
  Link2,
  ShieldCheck,
  CheckCircle,
} from "lucide-react";

const solutions = [
  {
    icon: <RefreshCw className="h-8 w-8 text-accent" />,
    title: "Automated Part & Assembly Generators",
    description: "Instantly generate complex models from simple inputs using parametric logic.",
  },
  {
    icon: <ClipboardList className="h-8 w-8 text-accent" />,
    title: "BOM & Drawing Automation",
    description: "Auto-generate drawings, bills of materials, and documentation with a single click.",
  },
  {
    icon: <BrainCircuit className="h-8 w-8 text-accent" />,
    title: "Rule-Based Design Tools",
    description: "Implement DriveWorks or custom rule engines to handle variations and configurations automatically.",
  },
  {
    icon: <PanelRight className="h-8 w-8 text-accent" />,
    title: "Taskpane Add-ins",
    description: "Provide intuitive UIs within SolidWorks for repetitive tasks like file naming, revisioning, and export.",
  },
  {
    icon: <Library className="h-8 w-8 text-accent" />,
    title: "Template & Macro Libraries",
    description: "Create reusable templates and macro sets to reduce modeling and drafting time.",
  },
  {
    icon: <Link2 className="h-8 w-8 text-accent" />,
    title: "Integration with PLM/ERP",
    description: "Sync design outputs with production systems to avoid duplicate entry and ensure consistency.",
  },
  {
    icon: <ShieldCheck className="h-8 w-8 text-accent" />,
    title: "Error-Prevention Workflows",
    description: "Automate checks for design intent, standards compliance, and interferences before finalizing.",
  },
];

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
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              About DesignFix
            </h2>
            <p className="mt-4 max-w-[700px] text-muted-foreground md:text-xl/relaxed">
              With over 12 years of experience in design engineering firms, I
              specialize in CAD design automation. I&apos;m currently building a
              startup focused on helping engineering teams streamline and scale
              their design workflows. From intelligent parametric models to
              advanced Taskpane UI add-ins, I develop custom automation tools
              that reduce manual work, minimize errors, and accelerate time to
              delivery.
            </p>
            <div className="mt-8">
              <h3 className="font-headline text-2xl font-bold tracking-tighter">Key Services</h3>
              <ul className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-2">
                {services.map((service) => (
                  <li key={service} className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    <span>{service}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="flex flex-col gap-4">
             <h3 className="font-headline text-2xl font-bold tracking-tighter">Solutions I Offer to Save Design Time</h3>
            <div className="grid gap-4">
              {solutions.slice(0, 3).map((solution) => (
                <Card key={solution.title}>
                  <CardHeader className="flex flex-row items-center gap-4">
                    {solution.icon}
                    <CardTitle className="font-headline text-xl">{solution.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{solution.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
