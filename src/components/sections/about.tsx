
import Image from "next/image";

export default function AboutSection() {
  return (
    <section 
      id="about" 
      className="relative bg-cover bg-center bg-no-repeat"
      style={{backgroundImage: "url('https://damassets.autodesk.net/content/dam/autodesk/www/solutions/design-automation/what-is-design-automation-video-thumb-1172x660.jpg')"}}
    >
      <div className="absolute inset-0 bg-black/60 z-0"></div>
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col items-center gap-12">
          <div className="space-y-6 text-white text-center">
            <h2 className="font-headline text-2xl font-bold tracking-tighter sm:text-3xl">
              Your Partner in Design Automation
            </h2>
            <p className="max-w-[700px] mx-auto text-gray-200 md:text-xl/relaxed">
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
