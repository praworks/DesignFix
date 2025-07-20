
import React from "react";

export default function AboutSection() {
  return (
    <section 
      id="about" 
      className="relative bg-cover bg-center bg-no-repeat"
      style={{backgroundImage: "url('https://damassets.autodesk.net/content/dam/autodesk/www/solutions/design-automation/what-is-design-automation-video-thumb-1172x660.jpg')"}}
    >
      <div className="absolute inset-0 bg-black/70 z-0"></div>
      <div className="container mx-auto px-4 md:px-6 py-12 md:py-24 relative z-10">
        <div className="flex flex-col items-center gap-8">
          <div className="space-y-4 text-white text-center max-w-4xl">
            <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl">
              About the Developer
            </h2>
          </div>

          <div className="max-w-5xl w-full bg-card/10 backdrop-blur-sm p-8 md:p-12 border border-white/10 shadow-lg rounded-lg">
            <div className="text-gray-200 text-base/7 md:columns-3 gap-8 space-y-6">
              <p>
                Hi, my name is Prashanth. I began my career as a traditional CAD designer, spending long hours refining drawings in AutoCAD and SOLIDWORKS—meticulous work where every repetitive click felt like time stolen from real innovation. Determined to reclaim that time, I set out to find better ways to design.
              </p>
              <p>
                My first breakthrough was an Excel-driven AutoCAD macro that automatically filled block attributes and generated sheets in seconds. Watching AutoCAD build drawings from a spreadsheet proved that automation could turn tedious tasks into instant results.
              </p>
              <p>
                Eager to push further, I earned four Dassault Systèmes credentials—CSWP, CSWPA-WD, CSWPA-SM, and CSWPA-DT—while teaching myself VBA, C#, and .NET. Writing macros that assembled complex models at a single keystroke showed me that code can be as powerful a design tool as any sketch line.
              </p>
              <p>
                At several engineering firms, I led automation initiatives that became game-changers: linking SOLIDWORKS PDM with ERP and SQL databases to cut release time by 60 percent; building DriveWorks-powered configurators that generate models, drawings, BOMs, and quotes in minutes; and developing custom Taskpane add-ins that collapsed multi-step rituals into single-click commands—saving thousands of engineering hours each year. These projects proved automation’s business value by streamlining operations, boosting accuracy, and multiplying team capacity.
              </p>
              <p>
                Hands-on training in DriveWorks Solo refined my rule-based skills, bringing product logic alive on-screen. Combined with a Bachelor’s in Information Technology from the University of Moratuwa, this blend of mechanical insight and software expertise solidified my path as an Automation Engineer.
              </p>
              <p>
                Today, I run my own CAD automation consultancy, partnering with engineering teams to uncover workflow bottlenecks, design and deploy bespoke CAD solutions that accelerate delivery and raise quality, and mentor in-house engineers so they can sustain and expand their automation roadmap. My mission is simple: turn every repetitive click into an opportunity for innovation.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
