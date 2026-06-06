"use client";

import { useEffect, useState } from "react";
import { Check, Copy } from "lucide-react";

import { cn } from "@/lib/utils";

// Icon-only copy button. Rest = text-subtle, success = text-primary, 2s reset.
export function CopyButton({
  value,
  className,
}: {
  value: string;
  className?: string;
}) {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (!copied) return;
    const timer = setTimeout(() => setCopied(false), 2000);
    return () => clearTimeout(timer);
  }, [copied]);

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(true);
    } catch {
      // clipboard unavailable (e.g. insecure context) — no-op
    }
  }

  return (
    <button
      type="button"
      onClick={handleCopy}
      aria-label={copied ? "Copied" : "Copy code"}
      className={cn(
        "rounded-md p-1.5 text-text-subtle transition-colors hover:text-text-default",
        className,
      )}
    >
      {copied ? (
        <Check className="size-4 text-text-primary" aria-hidden />
      ) : (
        <Copy className="size-4" aria-hidden />
      )}
    </button>
  );
}

// Code container with a copy button pinned to the top-right corner.
export function CodeBlock({
  code,
  size = "md",
  className,
}: {
  code: string;
  size?: "sm" | "md";
  className?: string;
}) {
  const pad = size === "sm" ? "px-3 py-2 text-xs" : "p-4 text-sm";
  return (
    <div className={cn("relative", className)}>
      <CopyButton value={code} className="absolute right-2 top-2" />
      <pre className={cn("overflow-x-auto pr-10", pad)}>
        <code className="font-mono text-text-default">{code}</code>
      </pre>
    </div>
  );
}
