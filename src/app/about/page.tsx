import Footer from "@/components/footer";
import Header from "@/components/header";
import { Metadata } from "next";
import Image from "next/image";
import React from "react";

export const metadata: Metadata = {
  title: "About S. Prashanth - CAD Automation Expert | DesignFix",
  description: "Learn about S. Prashanth, the founder of DesignFix and a seasoned CAD automation engineer with expertise in SolidWorks, DriveWorks, and custom .NET solutions.",
};

export default function AboutPage() {
  return (
    <>
      <Header />
      <main>
        <section 
          id="about" 
          className="relative bg-cover bg-center bg-no-repeat py-12 md:py-24 lg:py-32"
          style={{backgroundImage: "url('https://damassets.autodesk.net/content/dam/autodesk/www/solutions/design-automation/what-is-design-automation-video-thumb-1172x660.jpg')"}}
        >
          <div className="absolute inset-0 bg-black/70 z-0"></div>
          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <div className="flex flex-col items-center gap-8">
              <div className="flex flex-col items-center text-center space-y-6">
                <Image 
                  src="https://storage.googleapis.com/aif-stg-testing-public-file-upload/2024-07-31/16-24-30-588145_original.png"
                  alt="S. Prashanth"
                  width={160}
                  height={160}
                  className="rounded-full border-4 border-white shadow-lg object-cover"
                  data-ai-hint="man portrait"
                />
                <div className="space-y-2 text-white">
                    <h1 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                      About the Developer
                    </h1>
                    <p className="text-xl text-gray-300">S. Prashanth</p>
                </div>
              </div>

              <div className="max-w-5xl w-full p-8 md:p-12">
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
      </main>
      <Footer />
    </>
  );
}
