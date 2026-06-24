import * as AspectRatioPrimitive from "@radix-ui/react-aspect-ratio";

// API mirrors fe-distillery/components/ui/aspect-ratio.tsx -- a thin re-export of
// the Radix AspectRatio Root. It's a layout primitive with no color, so there
// are no tokens to map; style the content you place inside it.
const AspectRatio = AspectRatioPrimitive.Root;

export { AspectRatio };
