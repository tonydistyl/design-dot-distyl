import { cva, type VariantProps } from "class-variance-authority";
import * as React from "react";

import { cn } from "@/lib/utils";

// Canonical Empty State. fe-distillery has no empty-state primitive yet, so this
// documents the component the audit recommends — its parts mirror shadcn's Empty
// family (Empty / EmptyHeader / EmptyMedia / EmptyTitle / EmptyDescription /
// EmptyContent), the upstream the Cognition Figma "Empty" follows. All visual
// classes are Cognition v1.2 tokens, so it themes via [data-theme="dark"] with
// no dark: classes.

const Empty = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "flex w-full flex-col items-center gap-4 rounded-lg p-6 text-center",
      className,
    )}
    {...props}
  />
));
Empty.displayName = "Empty";

const EmptyHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "flex max-w-sm flex-col items-center gap-2 text-center",
      className,
    )}
    {...props}
  />
));
EmptyHeader.displayName = "EmptyHeader";

const emptyMediaVariants = cva(
  "flex shrink-0 items-center justify-center text-text-subtle mb-2",
  {
    variants: {
      variant: {
        default: "[&_svg]:size-6",
        icon: "size-10 rounded-lg bg-background-secondary [&_svg]:size-5",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);

export interface EmptyMediaProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof emptyMediaVariants> {}

const EmptyMedia = React.forwardRef<HTMLDivElement, EmptyMediaProps>(
  ({ className, variant, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(emptyMediaVariants({ variant }), className)}
      {...props}
    />
  ),
);
EmptyMedia.displayName = "EmptyMedia";

const EmptyTitle = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("text-sm font-medium text-text-default", className)}
    {...props}
  />
));
EmptyTitle.displayName = "EmptyTitle";

const EmptyDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn("text-sm leading-relaxed text-text-subtle", className)}
    {...props}
  />
));
EmptyDescription.displayName = "EmptyDescription";

const EmptyContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "flex w-full flex-col items-center justify-center gap-2 text-sm",
      className,
    )}
    {...props}
  />
));
EmptyContent.displayName = "EmptyContent";

export {
  Empty,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
  EmptyDescription,
  EmptyContent,
};
