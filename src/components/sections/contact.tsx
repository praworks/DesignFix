"use client";

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

export default function ContactSection() {
  return (
    <section id="contact" className="bg-background py-12 md:py-24 lg:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center text-center">
            <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl">Ready to Innovate?</h2>
            <p className="mt-4 max-w-[600px] text-muted-foreground md:text-xl/relaxed">
                Let&apos;s discuss how we can automate your design process, save you time, and accelerate your time-to-market. Reach out directly.
            </p>
            <div className="mt-8 space-y-4 text-lg text-foreground">
                <p><strong>Email:</strong> sug.prashanth@gmail.com</p>
                <p><strong>WhatsApp:</strong> +94777816896</p>
            </div>
        </div>
      </div>
    </section>
  );
}
