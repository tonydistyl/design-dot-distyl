"use client";

import * as SliderPrimitive from "@radix-ui/react-slider";
import * as React from "react";

import { cn } from "@/lib/utils";

// Based on fe-distillery/components/ui/slider.tsx (Radix Slider). The raw
// bg-primary track/range, border-primary thumb, and bg-background are mapped to
// Cognition tokens (focus ring matches the project's Input), so it themes via
// [data-theme="dark"] with no dark: classes. Extended to the canonical shadcn
// form -- thumbs render from the value array (so range works) and the track is
// orientation-aware (so vertical works) -- both shown in the Figma.
const Slider = React.forwardRef<
  React.ElementRef<typeof SliderPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof SliderPrimitive.Root>
>(
  (
    { className, defaultValue, value, min = 0, max = 100, ...props },
    ref,
  ) => {
    const thumbs = React.useMemo(
      () =>
        Array.isArray(value)
          ? value
          : Array.isArray(defaultValue)
            ? defaultValue
            : [min, max],
      [value, defaultValue, min, max],
    );

    return (
      <SliderPrimitive.Root
        ref={ref}
        defaultValue={defaultValue}
        value={value}
        min={min}
        max={max}
        className={cn(
          "relative flex w-full touch-none select-none items-center data-[orientation=vertical]:h-full data-[orientation=vertical]:w-auto data-[orientation=vertical]:flex-col",
          className,
        )}
        {...props}
      >
        <SliderPrimitive.Track className="relative grow overflow-hidden rounded-full bg-background-primary/20 data-[orientation=horizontal]:h-1.5 data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full data-[orientation=vertical]:w-1.5">
          <SliderPrimitive.Range className="absolute bg-background-primary data-[orientation=horizontal]:h-full data-[orientation=vertical]:w-full" />
        </SliderPrimitive.Track>
        {thumbs.map((_, i) => (
          <SliderPrimitive.Thumb
            key={i}
            className="block size-4 shrink-0 rounded-full border border-border-primary/50 bg-background-default shadow transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-border-primary disabled:pointer-events-none disabled:opacity-50"
          />
        ))}
      </SliderPrimitive.Root>
    );
  },
);
Slider.displayName = SliderPrimitive.Root.displayName;

export { Slider };
