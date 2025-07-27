import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Check, ArrowRight } from "lucide-react";
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
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl">
              Why Automate Your CAD Design Process?
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Investing in CAD automation isn&apos;t just about saving time. It&apos;s about transforming your entire product development lifecycle to be faster, more reliable, and more innovative.
            </p>
        </div>

        <div className="grid items-start gap-12 lg:grid-cols-2 lg:gap-16">
          <Card className="bg-background shadow-lg h-full flex flex-col">
            <CardHeader>
                <div className="relative aspect-video w-full mb-4 rounded-lg overflow-hidden">
                    <Image
                        src="https://www.driveworks.co.uk/wp-content/uploads/2024/01/DriveWorksXpress-ExampleProject-PressureVessel.jpg"
                        alt="Hydraulic cylinders"
                        fill
                        className="object-cover"
                        data-ai-hint="pressure vessel"
                    />
                </div>
                <CardTitle className="font-headline text-2xl">Use Case: Standard Product Variants Generation</CardTitle>
                <CardDescription>
                  Imagine a company that manufactures hydraulic cylinders, receiving over 250 custom requests annually for minor variations.
                </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6 text-sm flex-grow">
              <div>
                <h4 className="font-semibold text-base mb-2">Traditional Process (45-60 mins per variant)</h4>
                <ul className="space-y-1 list-disc list-inside text-muted-foreground">
                  <li>Manually modify the master model</li>
                  <li>Update associated drawings and BOMs</li>
                  <li>Recheck clearances, weights, and part numbers</li>
                  <li>Generate new PDF drawings and STEP files</li>
                  <li>Upload to server and notify production</li>
                </ul>
                <p className="font-semibold mt-2">Total annual time spent: 250 variants × 1 hour = <span className="text-primary">250 hours/year</span></p>
              </div>

              <div>
                <h4 className="font-semibold text-base mb-2">Automated Process (Under 5 mins per variant)</h4>
                 <ul className="space-y-1 list-disc list-inside text-muted-foreground">
                    <li>Customers or sales staff input key specs via a form</li>
                    <li>3D models and drawings are auto-generated</li>
                    <li>BOM and part numbers update automatically</li>
                    <li>Outputs are instantly ready for approval or production</li>
                </ul>
                 <p className="font-semibold mt-2">Result: Time per variant drops from 60 minutes to under 5 minutes. <span className="text-primary">Annual time saved: ~230 hours</span></p>
              </div>
            </CardContent>
          </Card>
          
          <div className="space-y-8">
            <div className="space-y-4">
              <h3 className="font-headline text-2xl font-bold">Key Benefits Beyond Time Savings</h3>
              <ul className="space-y-3">
                {[
                  "Faster response to customer inquiries and RFQs",
                  "Shorter lead times and quicker deliveries",
                  "Reduced risk of human error in repetitive tasks",
                  "More consistent output and documentation",
                  "Empowerment of sales and non-technical staff to generate designs"
                ].map(benefit => (
                   <li key={benefit} className="flex items-start gap-3">
                      <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary text-primary-foreground mt-0.5 shrink-0">
                          <Check className="h-4 w-4" />
                      </div>
                      <span className="text-muted-foreground">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
             <div className="flex items-center justify-center">
             <Dialog>
                <DialogTrigger asChild>
                    <div className="relative cursor-pointer overflow-hidden rounded-xl shadow-lg transition-transform hover:scale-105 w-full">
                        <div className="aspect-video">
                            <iframe
                                src="https://www.youtube.com/embed/gjjq25XW_Ro?start=8"
                                title="Why CAD Automation Matters"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                                className="absolute top-0 left-0 w-full h-full rounded-lg"
                            ></iframe>
                        </div>
                        <div className="absolute inset-0 flex items-center justify-center bg-black/20">
                            <PlayIcon className="h-20 w-20 text-white" />
                        </div>
                    </div>
                </DialogTrigger>
                <DialogContent className="max-w-3xl p-0">
                  <div className="aspect-video">
                    <iframe
                      src="https://www.youtube.com/embed/gjjq25XW_Ro?start=8&autoplay=1"
                      title="Why CAD Automation Matters"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="w-full h-full"
                    ></iframe>
                  </div>
                </DialogContent>
              </Dialog>
            </div>
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
        viewBox="0 0 24"
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
