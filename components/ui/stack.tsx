import * as React from "react";
import { cn } from "@/lib/utils";

const spaceMap = {
  none: "0",
  xs: "1",
  sm: "2",
  md: "4",
  lg: "6",
  xl: "8",
  "2xl": "12",
} as const;

type Space = keyof typeof spaceMap;

export interface StackProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Stack direction */
  direction?: "row" | "column";
  /** Gap between children */
  gap?: Space;
  /** Horizontal alignment (align-items) */
  align?: "start" | "center" | "end" | "stretch" | "baseline";
  /** Vertical alignment (justify-content) */
  justify?: "start" | "center" | "end" | "between" | "around" | "evenly";
  /** Wrap children */
  wrap?: boolean;
}

// Full class names so Tailwind generates them (a `gap-${spaceMap[gap]}` template
// is invisible to the scanner). spaceMap defines the scale and the Space type.
const gapMap: Record<Space, string> = {
  none: "gap-0",
  xs: "gap-1",
  sm: "gap-2",
  md: "gap-4",
  lg: "gap-6",
  xl: "gap-8",
  "2xl": "gap-12",
};

const alignMap: Record<NonNullable<StackProps["align"]>, string> = {
  start: "items-start",
  center: "items-center",
  end: "items-end",
  stretch: "items-stretch",
  baseline: "items-baseline",
};

const justifyMap: Record<NonNullable<StackProps["justify"]>, string> = {
  start: "justify-start",
  center: "justify-center",
  end: "justify-end",
  between: "justify-between",
  around: "justify-around",
  evenly: "justify-evenly",
};

function Stack({
  direction = "column",
  gap,
  align,
  justify,
  wrap = false,
  className,
  children,
  ...props
}: StackProps) {
  return (
    <div
      className={cn(
        "flex",
        direction === "row" ? "flex-row" : "flex-col",
        gap && gapMap[gap],
        align && alignMap[align],
        justify && justifyMap[justify],
        wrap && "flex-wrap",
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
}

export { Stack };
