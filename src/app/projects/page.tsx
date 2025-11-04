import Footer from "@/components/footer";
import Header from "@/components/header";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects | DesignFix",
  description: "Explore a portfolio of CAD automation projects by DesignFix.",
};

export default function ProjectsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 py-12 md:py-24 lg:py-32">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col items-center text-center">
            <h1 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Our Projects
            </h1>
            <p className="mt-4 max-w-[600px] text-muted-foreground md:text-xl/relaxed">
              A showcase of our work is coming soon.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
