"use client";

import * as React from "react";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

type Project = {
  name: string;
  images: { url: string; hint: string }[];
};

const projects: Project[] = [
  {
    name: "Machinery Manufacturing",
    images: [
      {
        url: "https://epower-bd.com/wp-content/uploads/2016/04/Distribution-Transformer.jpg",
        hint: "distribution transformer",
      },
      {
        url: "https://www.scotech-electrical.com/uploads/202027946/1000-kva-three-phase-indoor-dry-type35302456817.jpg",
        hint: "dry type transformer",
      },
       {
        url: "https://5.imimg.com/data5/SB/OD/ZY/SELLER-3264624/three-phase-oil-cooled-transformer-500x500.jpg",
        hint: "oil cooled transformer",
      },
    ],
  },
  {
    name: "Architectural Components & Building Products",
    images: [
      {
        url: "https://images.unsplash.com/photo-1556912173-35f35c448995?q=80&w=2070&auto=format&fit=crop",
        hint: "building materials",
      },
    ],
  },
  {
    name: "Furniture Manufacturing",
    images: [
      {
        url: "https://static.ikea.pr/assets/images/281/0728155_PE736115_S4.jpg",
        hint: "ikea cupboard",
      },
      {
        url: "https://www.ikea.com.hk/dairy-farm/hk/images/335/0733593_PE739546_S5.jpg",
        hint: "modern sofa",
      },
      {
        url: "https://t3.ftcdn.net/jpg/02/76/90/49/360_F_276904930_qenDFEcd7G3s59tZ5aCmtOTxidI2MruP.jpg",
        hint: "wooden chair",
      },
      {
        url: "https://www.ikea.com/gb/en/images/products/eket-cabinet-w-2-doors-and-1-shelf-brown-walnut-effect__1373669_pe960035_s5.jpg",
        hint: "walnut cabinet",
      },
      {
        url: "https://www.ikea.com/gb/en/images/products/hemnes-glass-door-cabinet-with-3-drawers-white-stain-light-brown__0805255_pe769478_s5.jpg?f=xl",
        hint: "white cabinet",
      }
    ],
  },
  {
    name: "HVAC",
    images: [
      {
        url: "https://images.unsplash.com/photo-1617935492448-13c415259955?q=80&w=2070&auto=format&fit=crop",
        hint: "air conditioner",
      },
    ],
  },
  {
    name: "Materials Handling Equipment",
    images: [
      {
        url: "https://images.unsplash.com/photo-1587293852726-70cdb1e858ce?q=80&w=2070&auto=format&fit=crop",
        hint: "forklift",
      },
    ],
  },
  {
    name: "Transportation",
    images: [
      {
        url: "https://images.unsplash.com/photo-1590212151009-3d1983533824?q=80&w=2069&auto=format&fit=crop",
        hint: "truck trailer",
      },
       {
        url: "https://www.prioritybicycles.com/cdn/shop/files/600_hero_May2024_1of1.jpg?v=1716221309&width=1500",
        hint: "bicycle",
      },
    ],
  },
  {
    name: "Sheet Metal Fabrication",
    images: [
      {
        url: "https://images.unsplash.com/photo-1621992039233-7de2e3c9a34a?q=80&w=1974&auto=format&fit=crop",
        hint: "sheet metal",
      },
    ],
  },
  {
    name: "Storage Solutions",
    images: [
      {
        url: "https://images.unsplash.com/photo-1580221374567-2dba949673cc?q=80&w=2070&auto=format&fit=crop",
        hint: "storage lockers",
      },
    ],
  },
  {
    name: "Agricultural Equipment",
    images: [
      {
        url: "https://images.unsplash.com/photo-1582996131649-f04d7321azzi?q=80&w=1964&auto=format&fit=crop",
        hint: "farm equipment",
      },
    ],
  },
];

export default function PortfolioSection() {
  const plugin = React.useRef(
    Autoplay({ delay: 3000, stopOnInteraction: true })
  );

  return (
    <section id="industries" className="bg-card">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl">
            Industries That Benefit from CAD Automation
          </h2>
          <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            From industrial machinery to consumer products, our automation
            solutions cover a wide range of applications.
          </p>
        </div>
        <div className="mx-auto mt-12 grid gap-6 sm:grid-cols-2 md:grid-cols-3">
          {projects.map((project) => (
            <Card
              key={project.name}
              className="overflow-hidden transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-xl"
            >
              <div className="aspect-square w-full relative">
                {project.images.length > 1 ? (
                  <Carousel
                    plugins={[plugin.current]}
                    className="w-full h-full"
                    onMouseEnter={plugin.current.stop}
                    onMouseLeave={plugin.current.reset}
                  >
                    <CarouselContent>
                      {project.images.map((image, index) => (
                        <CarouselItem key={index}>
                          <div className="relative aspect-square h-full">
                            <Image
                              src={image.url}
                              alt={`${project.name} image ${index + 1}`}
                              fill
                              className="object-contain"
                              data-ai-hint={image.hint}
                            />
                          </div>
                        </CarouselItem>
                      ))}
                    </CarouselContent>
                  </Carousel>
                ) : (
                  <Image
                    src={project.images[0].url}
                    alt={project.name}
                    fill
                    className="object-contain"
                    data-ai-hint={project.images[0].hint}
                  />
                )}
              </div>
              <CardContent className="p-4">
                <CardTitle className="font-headline text-lg text-center">
                  {project.name}
                </CardTitle>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
