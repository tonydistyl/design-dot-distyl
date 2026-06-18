import type { Metadata } from "next";
import { Stack } from "@/components/ui/stack";
import { CodeBlock } from "@/components/CodeBlock";

export const metadata: Metadata = {
  title: "Stack",
  description:
    "Stack component: a flexbox layout primitive for consistent row and column composition using Cognition spacing tokens.",
};

const installCode = `import { Stack } from "@/components/ui/stack";

export function Example() {
  return (
    <Stack direction="row" gap="md" align="center">
      <span>Item one</span>
      <span>Item two</span>
      <span>Item three</span>
    </Stack>
  );
}`;

const dontCode = `// Raw flex with hardcoded utilities
<div className="flex flex-col gap-4 items-start">
  <span>Item one</span>
  <span>Item two</span>
</div>`;

const doCode = `// Stack with Cognition tokens
<Stack direction="column" gap="md" align="start">
  <span>Item one</span>
  <span>Item two</span>
</Stack>`;

export default function StackPage() {
  return (
    <div>
      <p className="mb-2 text-xs font-normal text-text-subtle">Components</p>
      <h1 className="text-h1 text-text-default">Stack</h1>
      <p className="mt-3 max-w-2xl text-body text-text-default">
        A flexbox layout primitive for row and column composition. Replaces
        inline flex utilities with named spacing tokens.
      </p>

      {/* Preview */}
      <section className="scroll-mt-8">
        <h3 className="mt-12 mb-4 text-h3 text-text-default">Preview</h3>
        <div className="flex items-center justify-center rounded-lg border border-border-default bg-background-subtle p-10">
          <Stack direction="row" gap="md" align="center">
            {["Item one", "Item two", "Item three"].map((label) => (
              <div key={label} className="rounded-md border border-border-default bg-background-default px-3 py-2">
                <p className="text-small text-text-default">{label}</p>
              </div>
            ))}
          </Stack>
        </div>
      </section>

      {/* Direction */}
      <section className="scroll-mt-8">
        <h3 className="mt-12 mb-4 text-h3 text-text-default">Direction</h3>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {(["column", "row"] as const).map((dir) => (
            <div key={dir} className="overflow-hidden rounded-lg border border-border-default">
              <div className="flex items-center justify-center bg-background-subtle p-8">
                <Stack direction={dir} gap="sm">
                  {["One", "Two", "Three"].map((l) => (
                    <div key={l} className="rounded border border-border-default bg-background-default px-3 py-1.5">
                      <p className="text-small text-text-default">{l}</p>
                    </div>
                  ))}
                </Stack>
              </div>
              <div className="border-t border-border-default p-3">
                <CodeBlock
                  code={`<Stack direction="${dir}" gap="sm">`}
                  size="sm"
                  className="rounded-md border border-border-subtle bg-background-subtle"
                />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Don't / Do */}
      <section className="scroll-mt-8">
        <h3 className="mt-12 mb-4 text-h3 text-text-default">Don&apos;t / Do</h3>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div className="overflow-hidden rounded-lg border border-border-default">
            <div className="border-b border-border-default bg-background-subtle px-4 py-2">
              <span className="text-small font-medium text-text-subtle">Don&apos;t</span>
            </div>
            <div className="p-4">
              <p className="mb-3 text-small text-text-default">
                Raw flex utilities written inline. Gap values are invisible to
                the token system and inconsistent across the codebase.
              </p>
              <CodeBlock code={dontCode} size="sm" className="rounded-md border border-border-subtle bg-background-subtle" />
            </div>
          </div>
          <div className="overflow-hidden rounded-lg border border-border-default">
            <div className="border-b border-border-default bg-background-subtle px-4 py-2">
              <span className="text-small font-medium text-text-subtle">Do</span>
            </div>
            <div className="p-4">
              <CodeBlock code={doCode} size="sm" className="rounded-md border border-border-subtle bg-background-subtle" />
            </div>
          </div>
        </div>
      </section>

      {/* API */}
      <section className="scroll-mt-8">
        <h3 className="mt-12 mb-4 text-h3 text-text-default">API</h3>
        <div className="overflow-x-auto rounded-lg border border-border-default">
          <div className="min-w-[640px]">
            <div className="grid grid-cols-[1.4fr_1.8fr_1fr_3fr] gap-4 border-b border-border-default bg-background-subtle px-4 py-2 text-xs font-medium text-text-subtle">
              <div>Prop</div><div>Type</div><div>Default</div><div>Description</div>
            </div>
            {[
              { prop: "direction", type: `"row" | "column"`, def: `"column"`, desc: "Flex direction." },
              { prop: "gap", type: `"none" | "xs" | "sm" | "md" | "lg" | "xl" | "2xl"`, def: "—", desc: "Gap between children. Maps to the Cognition spacing scale." },
              { prop: "align", type: `"start" | "center" | "end" | "stretch" | "baseline"`, def: "—", desc: "Cross-axis alignment (align-items)." },
              { prop: "justify", type: `"start" | "center" | "end" | "between" | "around" | "evenly"`, def: "—", desc: "Main-axis alignment (justify-content)." },
              { prop: "wrap", type: "boolean", def: "false", desc: "Allows children to wrap onto multiple lines." },
            ].map((row) => (
              <div key={row.prop} className="grid grid-cols-[1.4fr_1.8fr_1fr_3fr] gap-4 border-b border-border-default px-4 py-3 text-small last:border-0">
                <code className="font-mono text-text-primary">{row.prop}</code>
                <code className="font-mono text-text-subtle">{row.type}</code>
                <span className="text-text-subtle">{row.def}</span>
                <span className="text-text-default">{row.desc}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Code */}
      <section className="scroll-mt-8">
        <h3 className="mt-12 mb-4 text-h3 text-text-default">Usage</h3>
        <CodeBlock code={installCode} />
      </section>

      <p className="mt-12 text-small text-text-subtle">
        Cognition v1.3 · June 2026 · Questions? Ask Tony Yates #research-and-design
      </p>
    </div>
  );
}
