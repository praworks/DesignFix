
export default function AboutSection() {
  return (
    <section id="about" className="bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
           <div className="relative order-last lg:order-first">
             <div className="aspect-video w-full rounded-xl shadow-lg overflow-hidden">
                <iframe
                    src="https://www.youtube.com/embed/S2aC_84AnA4"
                    title="DriveWorks Solo Quick Start"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full"
                ></iframe>
              </div>
           </div>
          <div className="space-y-6">
            <h2 className="font-headline text-2xl font-bold tracking-tighter sm:text-3xl">
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
          </div>
        </div>
      </div>
    </section>
  );
}
