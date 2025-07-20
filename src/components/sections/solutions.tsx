import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const useCases = [
  {
    title: "Automated Enclosure Design",
    description: "A custom add-in that generates complex electronic enclosures based on user-defined parameters, saving hours of manual modeling.",
    video: "https://www.youtube.com/embed/7QkG5i-8y6E",
  },
  {
    title: "DriveWorks Frame Generator",
    description: "A DriveWorks-powered tool that configures and generates structural frames automatically, ideal for custom machinery and modular construction.",
    video: "https://www.youtube.com/embed/n4aB8rV0q6w",
  },
  {
    title: "Taskpane Part Library UI",
    description: "An intuitive Taskpane UI for browsing, configuring, and inserting standard parts from a library, ensuring consistency and speed.",
    video: "https://www.youtube.com/embed/yvj-dKc-4P4",
  },
];

export default function SolutionsSection() {
  return (
    <section id="solutions" className="bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <h2 className="font-headline text-2xl font-bold tracking-tighter sm:text-3xl">
            Real-World Automation Solutions
          </h2>
          <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Explore how our custom automation tools have transformed design workflows for clients across various industries.
          </p>
        </div>
        <div className="mx-auto mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {useCases.map((useCase) => (
            <Card key={useCase.title} className="overflow-hidden transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-xl">
              <CardHeader className="p-0">
                 <div className="aspect-video w-full h-48">
                    <iframe
                        src={useCase.video}
                        title={useCase.title}
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        className="w-full h-full"
                    ></iframe>
                </div>
              </CardHeader>
              <CardContent className="p-6">
                <CardTitle className="font-headline text-lg mb-2">{useCase.title}</CardTitle>
                <p className="text-muted-foreground">{useCase.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
