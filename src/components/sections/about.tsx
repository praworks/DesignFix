
import Image from "next/image";

export default function AboutSection() {
  return (
    <section 
      id="about" 
      className="relative bg-cover bg-center bg-no-repeat"
      style={{backgroundImage: "url('https://damassets.autodesk.net/content/dam/autodesk/www/solutions/design-automation/what-is-design-automation-video-thumb-1172x660.jpg')"}}
    >
      <div className="absolute inset-0 bg-black/60 z-0"></div>
      <div className="container mx-auto px-4 md:px-6 py-12 md:py-24 relative z-10">
        <div className="flex flex-col items-center gap-12">
          <div className="space-y-4 text-white text-center max-w-3xl">
            <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl">
              About the Developer
            </h2>
            <div className="space-y-2 text-left text-gray-200 text-base/6">
              <p>Hi, my name is Prashanth. I began my career as a traditional CAD designer, spending long hours refining drawings in AutoCAD and SOLIDWORKS. The work was meticulous—but every repetitive click felt like time stolen from real innovation. Determined to reclaim that time, I searched for better ways to design.</p>
              
              <h4 className="font-headline text-xl font-semibold pt-2">Stage 1 – Discovering Automation</h4>
              <p>My first breakthrough was an Excel-driven AutoCAD macro: block attributes filled automatically, sheets generated in seconds. Watching AutoCAD build drawings from a spreadsheet proved that automation could turn tedious tasks into instant results.</p>
              
              <h4 className="font-headline text-xl font-semibold pt-2">Stage 2 – Diving Deeper into SOLIDWORKS</h4>
              <p>I earned four Dassault Systèmes credentials—CSWP, CSWPA-WD, CSWPA-SM, and CSWPA-DT—while teaching myself VBA, C#, and .NET. Writing macros that assembled complex models at a single keystroke showed me that code could be as powerful a design tool as any sketch line.</p>

              <h4 className="font-headline text-xl font-semibold pt-2">Stage 3 – Automating Key Projects for Industry Employers</h4>
              <p>At several engineering firms, I spearheaded automation initiatives that became game-changers:</p>
              <ul className="list-disc list-inside space-y-1 pl-4">
                <li><strong>End-to-End PDM Automation</strong> – linked SOLIDWORKS PDM with ERP and SQL databases, cutting release time by 60%.</li>
                <li><strong>DriveWorks-Powered Configurators</strong> – created sales-to-production workflows that generate models, drawings, BOMs, and quotes in minutes.</li>
                <li><strong>Custom Taskpane Add-ins</strong> – collapsed multi-step rituals into single-click commands, saving thousands of engineering hours each year.</li>
              </ul>
              <p>These projects proved automation’s business value—streamlining operations, boosting accuracy, and multiplying team capacity.</p>

              <h4 className="font-headline text-xl font-semibold pt-2">Stage 4 – Professional Automation Engineering</h4>
              <p>Hands-on training in DriveWorks Solo (Bengaluru) refined my rule-based skills, letting product logic come alive on-screen. Armed with a Bachelor’s in Information Technology from the University of Moratuwa, I combined mechanical insight with software expertise and stepped fully into the role of Automation Engineer.</p>

              <h4 className="font-headline text-xl font-semibold pt-2">Stage 5 – Launching My Own CAD Automation Consultancy</h4>
              <p>After witnessing automation’s transformative impact, I founded my own consultancy to help organisations unlock their hidden potential. Now I partner with engineering teams to:</p>
              <ul className="list-disc list-inside space-y-1 pl-4">
                  <li>Identify workflow bottlenecks and automation opportunities</li>
                  <li>Design and deploy bespoke CAD solutions that accelerate delivery and raise quality</li>
                  <li>Mentor in-house engineers so they can sustain and expand their automation roadmap</li>
              </ul>

              <h4 className="font-headline text-xl font-semibold pt-2">Mission</h4>
              <p className="italic">Transform every repetitive click into a springboard for innovation—letting automation write the mundane chapters so engineers can author the breakthroughs. And share that knowledge widely, empowering every team to master better software and work smarter.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
