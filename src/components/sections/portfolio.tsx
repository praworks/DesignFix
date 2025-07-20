"use client";

import * as React from "react";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
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
        url: "https://www.scotech-electrical.com/uploads/202027946/1000-kva-three-phase-indoor-dry-type35302456817.jpg",
        hint: "dry type transformer",
      },
      {
        url: "https://sc04.alicdn.com/kf/H1200f2c274e9466d817cd3f5d9860a8cL.png",
        hint: "submersible pump",
      },
      {
        url: "https://cdn.salla.sa/rKAOO/pTcxXZpKKFsGxq9iRuX24v9tu8S5cUr4uRexEFQt.jpg",
        hint: "water pump",
      },
    ],
  },
  {
    name: "Architectural Components & Building Products",
    images: [
      {
        url: "https://ahlada.com/wp-content/uploads/2024/04/1Q1A1746-copy-scaled.jpg",
        hint: "fire exit door",
      },
      {
        url: "https://www.feneste.com/wp-content/uploads/feneste-products-windows-alu-opened.webp",
        hint: "aluminum window",
      },
      {
        url: "https://img.freepik.com/premium-photo/kitchen-furniture-kitchen-equipment-white-background-3d-rendering_578102-2738.jpg",
        hint: "kitchen furniture",
      }
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
        url: "https://www.ikea.com/gb/en/images/products/hemnes-glass-door-cabinet-with-3-drawers-white-stain-light-brown__0805255_pe769478_s5.jpg?f=xl",
        hint: "white cabinet",
      },
      {
        url: "https://www.nilkamaledge.com/cdn/shop/files/OPTIMIZECUSTOMCurvilinear-1.jpg?v=1703656726",
        hint: "office desk",
      },
      {
        url: "https://www.ikea.com/us/en/images/products/trotten-desk-sit-stand-beige-anthracite__1020760_pe831986_s5.jpg?f=xl",
        hint: "sit stand desk",
      },
      {
        url: "https://www.ikea.com/us/en/images/products/tonstad-sideboard-oak-veneer__1186256_pe898738_s5.jpg?f=xl",
        hint: "oak sideboard",
      }
    ],
  },
  {
    name: "HVAC",
    images: [
      {
        url: "https://5.imimg.com/data5/QG/XJ/MY-9806775/gi-duct-500x500-1.jpg",
        hint: "air duct",
      },
      {
        url: "https://assets.unitedstatesfittings.com/hero/1920x1080/flanged-fittings-2.jpg",
        hint: "pipe fittings",
      },
    ],
  },
  {
    name: "Materials Handling Equipment",
    images: [
      {
        url: "https://img.uline.com/is/image/uline/H-1784?$ZoomHD$",
        hint: "pallet jack"
      },
      {
        url: "https://www.swc.co.nz/cdn/shop/files/GN40-HAND-TRUCK.jpg?v=1711396574",
        hint: "hand truck"
      }
    ],
  },
  {
    name: "Transportation",
    images: [
       {
        url: "https://www.prioritybicycles.com/cdn/shop/files/600_hero_May2024_1of1.jpg?v=1716221309&width=1500",
        hint: "bicycle",
      },
      {
        url: "https://jeewakapharmacy.lk/wp-content/uploads/2020/12/Wheel-Chair-With-Commode-YJ-8100-C.jpg",
        hint: "commode wheelchair"
      },
      {
        url: "https://www.australiahoverboards.com.au/wp-content/uploads/2023/08/Image1_800x.webp",
        hint: "hoverboard"
      }
    ],
  },
  {
    name: "Sheet Metal Fabrication",
    images: [
      {
        url: "https://5.imimg.com/data5/OG/KV/AN/SELLER-90855508/sheet-metal-electrical-enclosure-500x500.jpg",
        hint: "electrical enclosure",
      },
      {
        url: "https://www.atanistank.com/akv/galvanized-steel-water-tank/Hot-dipped-Galvanized-Steel-Square-Water.jpg",
        hint: "steel tank",
      },
    ],
  },
  {
    name: "Storage Solutions",
    images: [
      {
        url: "https://www.ikea.com/us/en/images/products/billy-bookcase-brown-walnut-effect__1097082_pe864710_s5.jpg?f=xl",
        hint: "bookcase walnut",
      },
      {
        url: "https://www.alpha.lk/wp-content/uploads/2020/12/STD-Workman-Locker-6-Units-324x324.jpg",
        hint: "storage locker"
      }
    ],
  },
  {
    name: "Agricultural Equipment",
    images: [
      {
        url: "https://s.alicdn.com/@sc04/kf/He9c5b85d2e0f441da9f9a048ab2ff420W/Names-Agricultural-Tools.png_300x300.jpg",
        hint: "agricultural tools",
      },
    ],
  },
];

export default function PortfolioSection() {
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
              <div className="aspect-square w-full relative group">
                {project.images.length > 1 ? (
                  <Carousel
                    plugins={[
                      Autoplay({
                        delay: 3000 + Math.floor(Math.random() * 1000),
                        stopOnInteraction: true,
                      }),
                    ]}
                    className="w-full h-full"
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
                    <CarouselPrevious className="absolute top-1/2 left-4 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity" />
                    <CarouselNext className="absolute top-1/2 right-4 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity" />
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
