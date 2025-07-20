
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
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="space-y-6 text-white">
            <h2 className="font-headline text-2xl font-bold tracking-tighter sm:text-3xl">
              Your Partner in Design Automation
            </h2>
            <p className="max-w-[700px] text-gray-200 md:text-xl/relaxed">
              With over 12 years of experience in design engineering, I
              specialize in CAD automation. My focus is on helping engineering
              teams streamline and scale their workflows. From intelligent parametric
              models to advanced Taskpane UI add-ins, I develop custom tools
              that reduce manual work, minimize errors, and accelerate
              delivery.
            </p>
          </div>
           <div className="relative order-first lg:order-last">
             <div className="aspect-video w-full rounded-xl shadow-lg overflow-hidden">
                <video
                    src="https://videos.autodesk.com/zencoder/content/dam/autodesk/www/solutions/design-automation/what-is-design-automation-video-1920x817.mp4"
                    title="Design Automation"
                    controls
                    autoPlay
                    muted
                    loop
                    className="w-full h-full object-cover"
                ></video>
              </div>
           </div>
        </div>
      </div>
    </section>
  );
}
