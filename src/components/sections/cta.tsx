import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { AtSign, Phone } from "lucide-react";

export default function CtaSection() {
  return (
    <section id="cta" className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center gap-6 text-center">
          <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl">
            Automate CAD. Eliminate Errors. Deliver Faster.
          </h2>
          <p className="max-w-[600px] text-primary-foreground/80 md:text-lg">
            Ready to transform your design process? Get in touch for a free consultation and see how automation can drive your success.
          </p>
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
    </section>
  );
}
