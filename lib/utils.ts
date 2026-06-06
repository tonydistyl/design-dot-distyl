import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

// Matches fe-distillery's @/lib/utils cn: clsx + tailwind-merge.
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
