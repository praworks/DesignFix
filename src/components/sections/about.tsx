
import { HardHat, Rocket, Code, Settings, Briefcase, GraduationCap, Building } from "lucide-react";
import React from "react";

const timelineEvents = [
  {
    icon: HardHat,
    title: "Stage 1 – Discovering Automation",
    description:
      "My first breakthrough was an Excel-driven AutoCAD macro: block attributes filled automatically, sheets generated in seconds. Watching AutoCAD build drawings from a spreadsheet proved that automation could turn tedious tasks into instant results.",
  },
  {
    icon: Code,
    title: "Stage 2 – Diving Deeper into SOLIDWORKS",
    description:
      "I earned four Dassault Systèmes credentials—CSWP, CSWPA-WD, CSWPA-SM, and CSWPA-DT—while teaching myself VBA, C#, and .NET. Writing macros that assembled complex models at a single keystroke showed me that code could be as powerful a design tool as any sketch line.",
  },
  {
    icon: Building,
    title: "Stage 3 – Automating Key Projects for Industry Employers",
    description:
      "At several engineering firms, I spearheaded automation initiatives that became game-changers:",
    points: [
      "End-to-End PDM Automation – linked SOLIDWORKS PDM with ERP and SQL databases, cutting release time by 60%.",
      "DriveWorks-Powered Configurators – created sales-to-production workflows that generate models, drawings, BOMs, and quotes in minutes.",
      "Custom Taskpane Add-ins – collapsed multi-step rituals into single-click commands, saving thousands of engineering hours each year.",
    ],
    outro: "These projects proved automation’s business value—streamlining operations, boosting accuracy, and multiplying team capacity.",
  },
  {
    icon: GraduationCap,
    title: "Stage 4 – Professional Automation Engineering",
    description:
      "Hands-on training in DriveWorks Solo (Bengaluru) refined my rule-based skills, letting product logic come alive on-screen. Armed with a Bachelor’s in Information Technology from the University of Moratuwa, I combined mechanical insight with software expertise and stepped fully into the role of Automation Engineer.",
  },
  {
    icon: Briefcase,
    title: "Stage 5 – Launching My Own CAD Automation Consultancy",
    description:
      "After witnessing automation’s transformative impact, I founded my own consultancy to help organisations unlock their hidden potential. Now I partner with engineering teams to:",
    points: [
      "Identify workflow bottlenecks and automation opportunities",
      "Design and deploy bespoke CAD solutions that accelerate delivery and raise quality",
      "Mentor in-house engineers so they can sustain and expand their automation roadmap",
    ],
  },
  {
    icon: Rocket,
    title: "Mission",
    description:
      "Transform every repetitive click into a springboard for innovation—letting automation write the mundane chapters so engineers can author the breakthroughs. And share that knowledge widely, empowering every team to master better software and work smarter.",
  },
];

export default function AboutSection() {
  return (
    <section 
      id="about" 
      className="relative bg-cover bg-center bg-no-repeat"
      style={{backgroundImage: "url('https://damassets.autodesk.net/content/dam/autodesk/www/solutions/design-automation/what-is-design-automation-video-thumb-1172x660.jpg')"}}
    >
      <div className="absolute inset-0 bg-black/70 z-0"></div>
      <div className="container mx-auto px-4 md:px-6 py-12 md:py-24 relative z-10">
        <div className="flex flex-col items-center gap-12">
          <div className="space-y-4 text-white text-center max-w-3xl">
            <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl">
              About the Developer
            </h2>
             <p className="text-gray-200 text-base/6 max-w-2xl mx-auto">
              Hi, my name is Prashanth. I began my career as a traditional CAD designer, spending long hours refining drawings in AutoCAD and SOLIDWORKS. The work was meticulous—but every repetitive click felt like time stolen from real innovation. Determined to reclaim that time, I searched for better ways to design.
            </p>
          </div>

          <div className="max-w-3xl w-full">
            <div className="relative pl-8">
              {/* Vertical line */}
              <div className="absolute left-0 top-0 h-full w-0.5 bg-primary/50"></div>

              {timelineEvents.map((event, index) => (
                <div key={index} className="relative mb-10 pl-8">
                  {/* Icon */}
                  <div className="absolute -left-4 top-1 flex h-8 w-8 items-center justify-center rounded-full bg-primary ring-8 ring-background/10 backdrop-blur-sm">
                    <event.icon className="h-5 w-5 text-primary-foreground" />
                  </div>
                  
                  <div className="rounded-lg bg-card/10 backdrop-blur-sm p-6 border border-white/10 shadow-lg">
                    <h4 className="font-headline text-xl font-semibold text-accent mb-2">{event.title}</h4>
                    <p className="text-gray-200 text-base/6">{event.description}</p>
                    {event.points && (
                      <ul className="mt-2 list-disc list-inside space-y-1 text-gray-200 text-base/6">
                        {event.points.map((point, i) => <li key={i}>{point}</li>)}
                      </ul>
                    )}
                    {event.outro && (
                        <p className="mt-2 text-gray-200 text-base/6">{event.outro}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
