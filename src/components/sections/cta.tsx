import { Button } from "@/components/ui/button";
import Link from "next/link";

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
          <Link href="#contact">
            <Button size="lg" variant="secondary">
              Request a Free Demo
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
