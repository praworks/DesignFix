import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Check } from "lucide-react";
import { Dialog, DialogTrigger, DialogContent } from "@/components/ui/dialog";
import Image from "next/image";

const benefits = [
  {
    title: "Faster Time-to-Market",
    description: "Drastically reduce time-to-quote and delivery.",
  },
  {
    title: "Eliminate Repetitive Work",
    description: "Automate tedious tasks to free up your engineers.",
  },
  {
    title: "Improve Quality",
    description: "Minimize costly errors and improve product consistency.",
  },
  {
    title: "Enable Mass Customization",
    description: "Scale your production for custom orders effortlessly.",
  },
];

export default function WhyAutomateSection() {
  return (
    <section id="why-automate" className="bg-card">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="space-y-6">
            <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl">
              Why Automate Your CAD Design Process?
            </h2>
            <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed">
              Investing in CAD automation isn&apos;t just about saving time. It&apos;s about transforming your entire product development lifecycle to be faster, more reliable, and more innovative.
            </p>
            <div className="grid gap-4 sm:grid-cols-2">
              {benefits.map((benefit) => (
                 <Card key={benefit.title} className="bg-background">
                  <CardHeader className="flex flex-row items-center gap-4 pb-2">
                     <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground">
                       <Check className="h-5 w-5" />
                     </div>
                     <CardTitle className="font-headline text-lg">{benefit.title}</CardTitle>
                   </CardHeader>
                   <CardContent>
                     <p className="text-muted-foreground">{benefit.description}</p>
                   </CardContent>
                 </Card>
              ))}
            </div>
          </div>
          <div className="flex items-center justify-center">
             <Dialog>
                <DialogTrigger asChild>
                    <div className="relative cursor-pointer overflow-hidden rounded-xl shadow-lg transition-transform hover:scale-105">
                        <Image
                            src="https://placehold.co/600x400.png"
                            alt="Why CAD Automation Matters Video Thumbnail"
                            data-ai-hint="CAD automation gears"
                            width={600}
                            height={400}
                            className="object-cover"
                        />
                        <div className="absolute inset-0 flex items-center justify-center bg-black/40">
                            <PlayIcon className="h-20 w-20 text-white" />
                        </div>
                    </div>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[625px] p-0">
                  <div className="aspect-video">
                    <iframe
                      src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                      title="Why CAD Automation Matters"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="w-full h-full rounded-lg"
                    ></iframe>
                  </div>
                </DialogContent>
              </Dialog>
          </div>
        </div>
      </div>
    </section>
  );
}


function PlayIcon(props: React.SVGProps<SVGSVGElement>) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <polygon points="5 3 19 12 5 21 5 3" />
      </svg>
    )
  }
