import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table";
  
  const howItWorksData = [
    {
      stage: "1 Capture rules",
      happens:
        "Engineers translate design intent into parameters, equations, or logic (e.g., “If width > 1 m, add a third support”).",
      tools:
        "CAD configuration tables, DriveWorks rules, Excel, scripts, knowledge-based engineering (KBE) platforms",
    },
    {
      stage: "2 Create master model / template",
      happens:
        "A “gold” 3D model or drawing contains all features, equations, and suppressible elements.",
      tools:
        "SolidWorks master part/assembly, Inventor iLogic templates, Revit families",
    },
    {
      stage: "3 Input parameters",
      happens:
        "Users (or an API) enter sizes, loads, options, or choose from a form/webpage.",
      tools: "Form fields, web configurators, REST APIs, ERP callbacks",
    },
    {
      stage: "4 Automatic generation",
      happens:
        "Software regenerates geometry, drawings, BOMs, pricing, and other deliverables in minutes.",
      tools: "CAD rebuild engine, macro scripts, rule engines, CAM post-processors",
    },
    {
      stage: "5 Validation & hand-off",
      happens:
        "Built-in checks (clearance, weight, cost) flag errors; approved outputs flow to PDM/PLM, ERP, or the shop floor.",
      tools: "Design study checks, simulation rules, workflow automation",
    },
  ];
  
  export default function WhatIsDesignAutomationSection() {
    return (
      <section id="what-is-design-automation" className="bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-8 text-center">
            <div className="space-y-4">
                <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl">
                    What is design automation?
                </h2>
                <p className="mx-auto max-w-3xl text-muted-foreground md:text-xl/relaxed">
                    Design automation is the use of software (sometimes combined with
                    scripts, macros, and AI) to generate, modify, and validate designs
                    automatically instead of creating every feature or document by hand.
                    In practice it means shifting repetitive, rules-based design
                    work—from 3D models to drawings, bills of materials, cost
                    estimates, and even CNC programs—into a repeatable digital
                    workflow.
                </p>
            </div>
            <div className="w-full max-w-5xl">
                <h3 className="font-headline text-2xl font-bold tracking-tighter sm:text-3xl mb-4">
                    How it works (high level)
                </h3>
                <div className="rounded-lg border shadow-sm">
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead className="w-[150px] font-bold">Stage</TableHead>
                                <TableHead className="font-bold">What happens</TableHead>
                                <TableHead className="font-bold">Typical tools & tech</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {howItWorksData.map((row) => (
                                <TableRow key={row.stage}>
                                <TableCell className="font-medium text-left">{row.stage}</TableCell>
                                <TableCell className="text-left">{row.happens}</TableCell>
                                <TableCell className="text-left">{row.tools}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </div>
            </div>
          </div>
        </div>
      </section>
    );
  }