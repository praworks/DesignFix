'use client';

import type { PutBlobResult } from '@vercel/blob';
import { useState, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import Image from 'next/image';
import Header from '@/components/header';
import Footer from '@/components/footer';

export default function AvatarUploadPage() {
  const inputFileRef = useRef<HTMLInputElement>(null);
  const [blob, setBlob] = useState<PutBlobResult | null>(null);
  const [error, setError] = useState<string | null>(null);

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        <section className="container mx-auto px-4 md:px-6 py-12 md:py-24 lg:py-32">
          <Card className="max-w-lg mx-auto">
            <CardHeader>
              <CardTitle>Upload Your Avatar</CardTitle>
              <CardDescription>Select a JPEG, PNG, or WEBP file to upload.</CardDescription>
            </CardHeader>
            <CardContent>
              <form
                onSubmit={async (event) => {
                  event.preventDefault();
                  setError(null);
                  setBlob(null);

                  if (!inputFileRef.current?.files) {
                    setError("No file selected");
                    return;
                  }

                  const file = inputFileRef.current.files[0];

                  try {
                    const response = await fetch(
                      `/api/avatar/upload?filename=${file.name}`,
                      {
                        method: 'POST',
                        body: file,
                      },
                    );

                    if (!response.ok) {
                      const errorText = await response.text();
                      throw new Error(`Failed to upload: ${response.statusText} (${errorText})`);
                    }

                    const newBlob = (await response.json()) as PutBlobResult;
                    setBlob(newBlob);
                  } catch (e: any) {
                    setError(e.message || "An unknown error occurred.");
                  }
                }}
                className="space-y-4"
              >
                <Input name="file" ref={inputFileRef} type="file" accept="image/jpeg, image/png, image/webp" required />
                <Button type="submit">Upload</Button>
              </form>
              
              {error && (
                <div className="mt-4 text-sm text-destructive">
                  <p><strong>Error:</strong> {error}</p>
                </div>
              )}

              {blob && (
                <div className="mt-4 space-y-2">
                  <p className="text-sm font-medium">Blob URL:</p>
                  <a href={blob.url} className="text-sm text-primary hover:underline break-all" target="_blank" rel="noopener noreferrer">
                    {blob.url}
                  </a>
                   <div className="relative aspect-square w-full max-w-xs mt-4 border rounded-lg overflow-hidden">
                    <Image src={blob.url} alt={blob.pathname} fill className="object-cover" />
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        </section>
      </main>
      <Footer />
    </div>
  );
}
