import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

export default function HeroSection() {
  return (
    <section id="hero" className="bg-card">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h1 className="font-headline text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
                Automating Design. Accelerating Innovation.
              </h1>
              <p className="max-w-[600px] text-muted-foreground md:text-xl">
                Custom CAD Automation and Design Solutions for Next-Gen Product
                Development
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Dialog>
                <DialogTrigger asChild>
                  <Button size="lg">Watch How It Works</Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[625px] p-0">
                  <div className="aspect-video">
                    <iframe
                      src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                      title="Sample Automation Workflow"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="w-full h-full rounded-lg"
                    ></iframe>
                  </div>
                </DialogContent>
              </Dialog>
              <Button size="lg" variant="outline">
                Request a Free Demo
              </Button>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <img
              src="https://placehold.co/600x400.png"
              alt="CAD Automation Visual"
              data-ai-hint="CAD design robotics"
              className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full lg:order-last"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
