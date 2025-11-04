import Footer from "@/components/footer";
import Header from "@/components/header";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { FileText } from 'lucide-react';

export const metadata: Metadata = {
  title: "Projects | DesignFix",
  description: "Explore a portfolio of CAD automation projects by DesignFix.",
};

const projects = [
    {
        name: "CAM",
        description: "A collection of computer-aided manufacturing projects, including 3D scans and model variations.",
        images: [
            {
                url: "https://ke4jydmc2wppgjtt.public.blob.vercel-storage.com/Portfolio-website/CAM/CAM%20TYPE%201%20-IgObqO6EUIn74M75uW8MJeLQlwRj3n.jpg",
                alt: "CAM Type 1",
                hint: "cam model",
            },
            {
                url: "https://ke4jydmc2wppgjtt.public.blob.vercel-storage.com/Portfolio-website/CAM/CAM%20TYPE%202-tDDMryO1i3QUi51fZSalaIlovkqqho.jpg",
                alt: "CAM Type 2",
                hint: "cam model"
            },
            {
                url: "https://ke4jydmc2wppgjtt.public.blob.vercel-storage.com/Portfolio-website/CAM/CAM%20TYPE%203D%20SCAN-FYJPlC3JZUJDnzMi31tmzyzU8QtYsq.jpg",
                alt: "CAM 3D Scan",
                hint: "3d scan",
            },
             {
                url: "https://ke4jydmc2wppgjtt.public.blob.vercel-storage.com/Portfolio-website/CAM/CAM%20TYPE%20PHONE%20SCAN-bXISndqpWLrvwBNBdT26OFkmdM9C5F.jpg",
                alt: "CAM Phone Scan",
                hint: "phone 3d scan"
            }
        ],
        files: [
            {
                url: "https://ke4jydmc2wppgjtt.public.blob.vercel-storage.com/Portfolio-website/CAM/CAM%20TYPE%201%20%26%202-794rgLo0rcgWumoTITy4SJDr6mAf1M.pdf",
                name: "CAM Types 1 & 2 Technical Drawing"
            }
        ]
    }
]

export default function ProjectsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 py-12 md:py-24 lg:py-32">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col items-center text-center mb-12">
            <h1 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Our Projects
            </h1>
            <p className="mt-4 max-w-[600px] text-muted-foreground md:text-xl/relaxed">
              Explore a selection of our CAD automation and reverse engineering work.
            </p>
          </div>

          <div className="space-y-16">
            {projects.map((project) => (
              <Card key={project.name} className="overflow-hidden">
                <CardHeader>
                  <CardTitle className="font-headline text-2xl">{project.name}</CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                        {project.images.map((image, index) => (
                            <div key={index} className="relative aspect-square w-full overflow-hidden rounded-lg border shadow-sm transition-transform duration-300 ease-in-out hover:scale-105">
                                <Image
                                    src={image.url}
                                    alt={image.alt}
                                    fill
                                    className="object-contain"
                                    data-ai-hint={image.hint}
                                />
                            </div>
                        ))}
                    </div>
                    {project.files && project.files.length > 0 && (
                        <div className="mt-8">
                            <h4 className="font-headline text-lg font-semibold mb-4">Project Documents</h4>
                            <div className="flex flex-col gap-4">
                                {project.files.map((file, index) => (
                                    <Link key={index} href={file.url} target="_blank" rel="noopener noreferrer">
                                        <Button variant="outline" className="w-full justify-start">
                                            <FileText className="mr-2 h-4 w-4" />
                                            {file.name}
                                        </Button>
                                    </Link>
                                ))}
                            </div>
                        </div>
                    )}
                </CardContent>
              </Card>
            ))}
          </div>

        </div>
      </main>
      <Footer />
    </div>
  );
}
