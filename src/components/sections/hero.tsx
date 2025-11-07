import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import Link from "next/link";
import { AtSign, Phone } from "lucide-react";

export default function HeroSection() {
  return (
    <section id="hero" className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center gap-8 text-center">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h1 className="font-headline text-5xl font-bold tracking-tighter sm:text-6xl md:text-7xl">
                Why waste time drawing? Automate the design.
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
                   <DialogHeader className="sr-only">
                    <DialogTitle>Watch How It Works Video</DialogTitle>
                    <DialogDescription>An embedded video demonstrating CAD automation.</DialogDescription>
                  </DialogHeader>
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
              <Dialog>
                <DialogTrigger asChild>
                  <Button size="lg" variant="secondary">
                    Request a Free Demo
                  </Button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle className="font-headline text-2xl text-center">Contact Us</DialogTitle>
                    <DialogDescription className="text-center">
                      Reach out for a free consultation and demo.
                    </DialogDescription>
                  </DialogHeader>
                  <div className="flex flex-col items-center gap-4 py-4">
                    <a href="mailto:CAD@designfix.systems" className="flex items-center gap-2 text-lg hover:underline">
                      <AtSign className="h-5 w-5" />
                      CAD@designfix.systems
                    </a>
                    <a href="tel:+94777816896" className="flex items-center gap-2 text-lg hover:underline">
                      <Phone className="h-5 w-5" />
                      +94 77 781 6896
                    </a>
                  </div>
                </DialogContent>
              </Dialog>
            </div>
          </div>
          <figure className="w-full max-w-4xl">
            <div className="w-full rounded-xl shadow-lg border bg-background overflow-hidden">
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
             <figcaption className="mt-2 text-sm text-center text-primary-foreground/80">
                Video credits to <a href="https://www.solidsolutions.co.uk/" target="_blank" rel="noopener noreferrer" className="underline hover:text-primary-foreground">https://www.solidsolutions.co.uk/</a>
            </figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
}