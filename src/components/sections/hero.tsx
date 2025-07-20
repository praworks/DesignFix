import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

export default function HeroSection() {
  return (
    <section id="hero" className="bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center gap-8 text-center">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h1 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Struggling with slow CAD processes, repetitive workflows, and recurring design errors?
              </h1>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                It's time to discover how design automation can transform your workflow—saving time, reducing mistakes, and boosting productivity.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row justify-center">
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
          <div className="w-full max-w-4xl rounded-xl shadow-lg border">
            <img
              src="https://placehold.co/600x400.png"
              alt="CAD Automation Visual"
              data-ai-hint="CAD design robotics"
              className="mx-auto aspect-video overflow-hidden rounded-xl object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
