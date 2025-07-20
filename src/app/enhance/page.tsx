import ContentEnhancerForm from "@/components/content-enhancer-form";
import Footer from "@/components/footer";
import Header from "@/components/header";

export default function EnhancePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        <section className="container mx-auto px-4 md:px-6 py-12">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="font-headline text-4xl font-bold tracking-tighter sm:text-5xl">
              AI-Powered Content Enhancement
            </h1>
            <p className="mt-4 text-muted-foreground md:text-xl">
              Improve your website content for clarity, engagement, and marketing
              effectiveness. Paste your text below and let our AI do the rest.
            </p>
          </div>
          <div className="mx-auto mt-12 max-w-4xl">
            <ContentEnhancerForm />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
