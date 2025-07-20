import Image from "next/image";

export default function WhatIsDesignAutomationSection() {
  return (
    <section id="what-is-design-automation" className="bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div className="space-y-4">
            <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl">
              What is design automation?
            </h2>
            <p className="text-muted-foreground md:text-lg/relaxed">
              Design automation embeds an engineer’s rules, parameters, and
              decision logic into software so that 3D models, drawings, BOMs,
              and even cost estimates spring automatically from a handful of
              inputs rather than hours of manual work. By housing all
              dimensions, formulas, and option-dependent features in a master
              template, the system scales parts, adds or suppresses components,
              renames files, and runs checks in seconds—transforming what was
              once time-consuming “click work” into a push-button routine.
            </p>
             <p className="text-muted-foreground md:text-lg/relaxed">
              The result is a triple win: lead times and labor costs plummet,
              error-prone steps vanish, and skilled staff are freed to focus on
              higher-value tasks like concept development or client
              collaboration, turning accuracy from a hope into a guarantee.
            </p>
          </div>
          <div className="flex justify-center">
            <Image
              src="https://cdn.goengineer.com/input-new-dimensions-solidworks-macro.gif"
              alt="Design Automation GIF"
              width={550}
              height={310}
              className="rounded-xl shadow-lg"
              unoptimized
            />
          </div>
        </div>
      </div>
    </section>
  );
}
