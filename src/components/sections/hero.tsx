import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

export default function HeroSection() {
  return (
    <section id="hero" className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center gap-8 text-center">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h1 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl">
                Automate CAD. Eliminate Errors. Deliver Faster.
              </h1>
              <p className="mx-auto max-w-[700px] text-primary-foreground/80 md:text-xl">
                Eliminate repetitive tasks, reduce design errors, and speed up delivery. Discover how CAD automation can transform your workflow and boost productivity. Your workflow—supercharged.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row justify-center">
              <Dialog>
                <DialogTrigger asChild>
                  <Button size="lg" variant="secondary">Watch How It Works</Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[625px] p-0">
                  <div className="aspect-video">
                    <iframe
                      src="https://www.youtube.com/embed/KD336dxw4-A"
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
          <div className="w-full max-w-4xl rounded-xl shadow-lg border bg-background overflow-hidden">
            <div className="aspect-video">
                <iframe
                    src="https://www.youtube.com/embed/KD336dxw4-A"
                    title="CAD Automation Visual"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full"
                ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
