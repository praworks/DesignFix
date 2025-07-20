"use client";

import { useActionState, useEffect } from "react";
import { useFormStatus } from "react-dom";
import { enhanceContentAction, type EnhanceState } from "@/app/enhance/actions";
import { Button } from "./ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "./ui/card";
import { Textarea } from "./ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Alert, AlertDescription, AlertTitle } from "./ui/alert";
import { Terminal } from "lucide-react";

const initialState: EnhanceState = {
  message: null,
  enhancedContent: null,
  errors: null,
};

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending} className="w-full">
      {pending ? "Enhancing..." : "Enhance Content"}
    </Button>
  );
}

export default function ContentEnhancerForm() {
  const [state, formAction] = useActionState(enhanceContentAction, initialState);
  const { toast } = useToast();

  useEffect(() => {
    if (state.message) {
      if (state.errors) {
        toast({
          title: "Error",
          description: state.message,
          variant: "destructive",
        });
      }
    }
  }, [state, toast]);

  return (
    <div className="grid gap-8 lg:grid-cols-2">
      <Card>
        <CardHeader>
          <CardTitle>Original Content</CardTitle>
          <CardDescription>Enter the text you want to improve.</CardDescription>
        </CardHeader>
        <CardContent>
          <form action={formAction} className="space-y-4">
            <Textarea
              name="content"
              placeholder="Paste your website copy here..."
              className="min-h-[300px] resize-y"
              required
            />
            {state.errors?.content && (
              <p className="text-sm font-medium text-destructive">
                {state.errors.content[0]}
              </p>
            )}
            <SubmitButton />
          </form>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Enhanced Content</CardTitle>
          <CardDescription>
            AI-powered suggestions for better marketing impact.
          </CardDescription>
        </CardHeader>
        <CardContent>
            {state.enhancedContent ? (
                <div className="prose prose-sm dark:prose-invert max-w-none p-4 bg-muted rounded-md min-h-[300px] whitespace-pre-wrap">
                    {state.enhancedContent}
                </div>
            ) : (
                <div className="flex min-h-[300px] items-center justify-center rounded-md border border-dashed">
                    <div className="text-center text-muted-foreground">
                        <p>Your enhanced content will appear here.</p>
                    </div>
                </div>
            )}
            {state.message && !state.errors && !state.enhancedContent && (
                 <Alert variant="destructive" className="mt-4">
                    <Terminal className="h-4 w-4" />
                    <AlertTitle>Error</AlertTitle>
                    <AlertDescription>{state.message}</AlertDescription>
                </Alert>
            )}
        </CardContent>
      </Card>
    </div>
  );
}
