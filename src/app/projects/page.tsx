import Footer from "@/components/footer";
import Header from "@/components/header";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { FileText, Video } from 'lucide-react';

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
                name: "CAM Types 1 & 2 Technical Drawing",
                icon: FileText,
            }
        ]
    },
    {
        name: "Drive sprockets",
        description: "An example of drive sprockets with detailed schematics.",
        images: [
            {
                url: "https://ke4jydmc2wppgjtt.public.blob.vercel-storage.com/Portfolio-website/Drive%20sprockets/Drive%20sprockets-09c0g6iK0RCmxGvlL3gBK5KvNexJyO.jpg",
                alt: "Drive Sprocket 1",
                hint: "drive sprocket",
            },
            {
                url: "https://ke4jydmc2wppgjtt.public.blob.vercel-storage.com/Portfolio-website/Drive%20sprockets/Drive%20sprockets-pX2X6yTBC2jqHDYEQ7yWuQZP24lErD.PNG",
                alt: "Drive Sprocket 2",
                hint: "drive sprocket technical drawing"
            }
        ],
        files: [
            {
                url: "https://ke4jydmc2wppgjtt.public.blob.vercel-storage.com/Portfolio-website/Drive%20sprockets/Drive%20sprockets-RbDn3NMo1EjC9LzlpYy2wS13LvXaNP.pdf",
                name: "Drive Sprockets Technical Drawing",
                icon: FileText,
            }
        ]
    },
    {
        name: "Guide",
        description: "A guide mechanism with multiple views, a video, and technical drawing.",
        images: [
            {
                url: "https://ke4jydmc2wppgjtt.public.blob.vercel-storage.com/Portfolio-website/Guide/1402104602-1-2oQZAaFvDOjMV2IqsuwDez2ly34VIT.jpg",
                alt: "Guide View 1",
                hint: "guide mechanism",
            },
            {
                url: "https://ke4jydmc2wppgjtt.public.blob.vercel-storage.com/Portfolio-website/Guide/1402104602-2-dqvH8Nsay3pZ8WxzI0Voutb9bwORWX.jpg",
                alt: "Guide View 2",
                hint: "guide mechanism side view",
            },
            {
                url: "https://ke4jydmc2wppgjtt.public.blob.vercel-storage.com/Portfolio-website/Guide/1402104602-hi1oEAjoYfaG9TcibK1co4jmBnPcfE.png",
                alt: "Guide Technical Drawing",
                hint: "guide mechanism drawing",
            }
        ],
        files: [
            {
                url: "https://ke4jydmc2wppgjtt.public.blob.vercel-storage.com/Portfolio-website/Guide/1402104602-rEqrM5lxReAtkwRJjx2VUzbB0zBErh.pdf",
                name: "Guide Technical Drawing PDF",
                icon: FileText,
            },
            {
                url: "https://ke4jydmc2wppgjtt.public.blob.vercel-storage.com/Portfolio-website/Guide/1402104602-eDh22iT1ScKvrnXdXnxHRy4MbE5iuY.mp4",
                name: "Guide Mechanism Video",
                icon: Video,
            }
        ]
    },
    {
        name: "Twist Lock",
        description: "A detailed look at a RAM spreader twist lock mechanism, including multiple 3D views and technical documentation.",
        images: [
            {
                url: "https://ke4jydmc2wppgjtt.public.blob.vercel-storage.com/Portfolio-website/RAM%20SPREADER%20TWIST%20LOCK/RAM%20SPREADER%20TWIST%20LOCK-1-TB0QcxfqZK0pOrss0YSeookHKhUyQM.jpg",
                alt: "Twist Lock View 1",
                hint: "twist lock",
            },
            {
                url: "https://ke4jydmc2wppgjtt.public.blob.vercel-storage.com/Portfolio-website/RAM%20SPREADER%20TWIST%20LOCK/RAM%20SPREADER%20TWIST%20LOCK-3-1hBQIY33KvmeBSW0n5lBjj5jpTpV6U.jpg",
                alt: "Twist Lock View 2",
                hint: "twist lock",
            },
            {
                url: "https://ke4jydmc2wppgjtt.public.blob.vercel-storage.com/Portfolio-website/RAM%20SPREADER%20TWIST%20LOCK/RAM%20SPREADER%20TWIST%20LOCK-4-gVIEBy5wcGTU8ERCKluUBHLcya6nZm.jpg",
                alt: "Twist Lock View 3",
                hint: "twist lock",
            },
            {
                url: "https://ke4jydmc2wppgjtt.public.blob.vercel-storage.com/Portfolio-website/RAM%20SPREADER%20TWIST%20LOCK/RAM%20SPREADER%20TWIST%20LOCK-vMt1kFOMYTaq33BfomciLKe8SC3Z5i.jpeg",
                alt: "Twist Lock View 4",
                hint: "twist lock",
            },
            {
                url: "https://ke4jydmc2wppgjtt.public.blob.vercel-storage.com/Portfolio-website/RAM%20SPREADER%20TWIST%20LOCK/RAM%20SPREADER%20TWIST%20LOCK%20SC1-C1urbub7ae95e4FMvUUuQhMtgZ1Oh2.JPG",
                alt: "Twist Lock SC1",
                hint: "twist lock mechanism",
            },
            {
                url: "https://ke4jydmc2wppgjtt.public.blob.vercel-storage.com/Portfolio-website/RAM%20SPREADER%20TWIST%20LOCK/RAM%20SPREADER%20TWIST%20LOCK%20SC2-1Cet0hRVFsAvwTsA33SHH0ECrgVDSU.JPG",
                alt: "Twist Lock SC2",
                hint: "twist lock mechanism",
            }
        ],
        files: [
            {
                url: "https://ke4jydmc2wppgjtt.public.blob.vercel-storage.com/Portfolio-website/RAM%20SPREADER%20TWIST%20LOCK/RAM%20SPREADER%20TWIST%20LOCK-2-NFiOpi8pIf8t81JRn6lV8724GLPvzl.pdf",
                name: "Twist Lock Technical Drawing 1",
                icon: FileText,
            },
            {
                url: "https://ke4jydmc2wppgjtt.public.blob.vercel-storage.com/Portfolio-website/RAM%20SPREADER%20TWIST%20LOCK/RAM%20SPREADER%20TWIST%20LOCK-jqDykjTkdgR2zW9cdHgTDmnlCLbdSk.pdf",
                name: "Twist Lock Technical Drawing 2",
                icon: FileText,
            }
        ]
    },
    {
        name: "Sheaves",
        description: "A detailed look at sheaves, complete with 3D models and technical drawings.",
        images: [
            {
                url: "https://ke4jydmc2wppgjtt.public.blob.vercel-storage.com/Portfolio-website/Sheaves/Sheaves%20750%20x%2022.4-iCcbBHiF1CSOwiCO21sJcFtRcZWtFU.jpg",
                alt: "Sheave 3D Model",
                hint: "sheave 3d model",
            },
            {
                url: "https://ke4jydmc2wppgjtt.public.blob.vercel-storage.com/Portfolio-website/Sheaves/Sheaves%20750%20x%2022.4-YI4DTbVS7KjzsLqQP1GM0GVtIi5iFG.png",
                alt: "Sheave Technical Drawing",
                hint: "sheave drawing"
            }
        ],
        files: [
            {
                url: "https://ke4jydmc2wppgjtt.public.blob.vercel-storage.com/Portfolio-website/Sheaves/Sheaves%20750%20x%2022.4-DDqZe6fKBJz4ceFTjXEeKFZjBPUAd3.pdf",
                name: "Sheaves Technical Drawing",
                icon: FileText,
            }
        ]
    },
    {
        name: "Spreader Twist Lock Assembly",
        description: "Assembly views and technical drawings for a spreader twist lock mechanism.",
        images: [
            {
                url: "https://ke4jydmc2wppgjtt.public.blob.vercel-storage.com/Portfolio-website/Twistlock/Spreader%20Twist%20Lock%20AS-1-iSh33lMgNFcMdJFMEe9DOghQBBe1qV.jpg",
                alt: "Spreader Twist Lock Assembly View 1",
                hint: "spreader twist lock",
            },
            {
                url: "https://ke4jydmc2wppgjtt.public.blob.vercel-storage.com/Portfolio-website/Twistlock/Spreader%20Twist%20Lock%20AS-2-3V6MCToMiXFW8isbUnfLKKIo9uRGBp.jpg",
                alt: "Spreader Twist Lock Assembly View 2",
                hint: "spreader twist lock",
            },
            {
                url: "https://ke4jydmc2wppgjtt.public.blob.vercel-storage.com/Portfolio-website/Twistlock/Spreader%20Twist%20Lock%20AS-3-dbIfZmOXZbPHEzNAJf4jmTjsNJmzcV.jpg",
                alt: "Spreader Twist Lock Assembly View 3",
                hint: "spreader twist lock",
            },
            {
                url: "https://ke4jydmc2wppgjtt.public.blob.vercel-storage.com/Portfolio-website/Twistlock/Spreader%20Twist%20Lock%20AS-LV3eSgO9TmJVEyarPoCZ2fP76E7eRZ.PNG",
                alt: "Spreader Twist Lock Assembly Drawing",
                hint: "spreader twist lock drawing",
            }
        ],
        files: [
            {
                url: "https://ke4jydmc2wppgjtt.public.blob.vercel-storage.com/Portfolio-website/Twistlock/Spreader%20Twist%20Lock%20AS-PzH4dwue5Nq1Em11iL1E74dcIjpM6U.pdf",
                name: "Spreader Twist Lock Assembly PDF",
                icon: FileText,
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
                                            <file.icon className="mr-2 h-4 w-4" />
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
