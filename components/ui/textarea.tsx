import * as React from "react";

import { cn } from "@/lib/utils";

// API mirrors fe-distillery/components/ui/textarea.tsx (a single Textarea
// spreading React.ComponentProps<'textarea'>). Raw border-input / bg-transparent
// / placeholder:text-muted-foreground / ring-ring utilities are mapped to
// Cognition v1.2 tokens, matching the Input field. No dark: classes.
const Textarea = React.forwardRef<
  HTMLTextAreaElement,
  React.ComponentProps<"textarea">
>(({ className, ...props }, ref) => {
  return (
    <textarea
      ref={ref}
      className={cn(
        "flex min-h-[60px] w-full rounded-lg border border-border-default bg-background-default px-3 py-2 text-sm text-text-default shadow-sm transition-colors",
        "placeholder:text-text-subtle",
        "focus-visible:border-border-primary focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-border-primary",
        "disabled:cursor-not-allowed disabled:opacity-50",
        "aria-invalid:border-border-danger aria-invalid:ring-1 aria-invalid:ring-border-danger",
        className,
      )}
      {...props}
    />
  );
});
Textarea.displayName = "Textarea";

export { Textarea };
