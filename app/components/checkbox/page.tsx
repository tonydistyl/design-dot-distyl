import type { Metadata } from "next";
import { Checkbox } from "@/components/ui/checkbox";
import { CodeBlock } from "@/components/CodeBlock";

export const metadata: Metadata = {
  title: "Checkbox",
  description:
    "Checkbox component — a control that toggles between checked, unchecked, and indeterminate. API matches fe-distillery components/ui/checkbox.tsx.",
};

const states = [
  { key: "unchecked", label: "Unchecked", code: `<Checkbox />`, node: <Checkbox /> },
  {
    key: "checked",
    label: "Checked",
    code: `<Checkbox defaultChecked />`,
    node: <Checkbox defaultChecked />,
  },
  {
    key: "indeterminate",
    label: "Indeterminate",
    code: `<Checkbox checked="indeterminate" />`,
    node: <Checkbox checked="indeterminate" />,
  },
  {
    key: "disabled",
    label: "Disabled",
    code: `<Checkbox disabled defaultChecked />`,
    node: <Checkbox disabled defaultChecked />,
  },
] as const;

const installCode = `import { Checkbox } from "@/components/ui/checkbox";

export function Terms() {
  return (
    <label className="flex items-center gap-2 text-sm">
      <Checkbox /> Accept terms and conditions
    </label>
  );
}`;

export default function CheckboxPage() {
  return (
    <div>
      <p className="mb-2 text-xs font-normal text-text-subtle">Components</p>
      <h1 className="text-h1 text-text-default">Checkbox</h1>
      <p className="mt-3 max-w-2xl text-body text-text-subtle">
        A control that toggles between checked, unchecked, and indeterminate.
        Use it for multi-select options and opt-ins.
      </p>

      {/* Preview */}
      <section id="preview" className="scroll-mt-8">
        <h3 className="mt-12 mb-4 text-h3 text-text-default">Preview</h3>
        <div className="flex items-center justify-center rounded-lg border border-border-default bg-background-subtle p-10">
          <label className="flex items-center gap-2 text-sm text-text-default">
            <Checkbox defaultChecked />
            Accept terms and conditions
          </label>
        </div>
        <p className="mt-2 text-small">
          Rendered with live Cognition tokens — the box, check, and focus ring
          remap on theme change, no <code className="font-mono">dark:</code>{" "}
          classes. Clicking the label toggles it.
        </p>
      </section>

      {/* States */}
      <section id="states" className="scroll-mt-8">
        <h3 className="mt-12 mb-4 text-h3 text-text-default">States</h3>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {states.map((s) => (
            <div
              key={s.key}
              className="overflow-hidden rounded-lg border border-border-default"
            >
              <div className="flex items-center justify-center bg-background-subtle p-8">
                {s.node}
              </div>
              <div className="border-t border-border-default p-3">
                <CodeBlock
                  code={s.code}
                  size="sm"
                  className="rounded-md border border-border-subtle bg-background-subtle"
                />
              </div>
            </div>
          ))}
        </div>
        <p className="mt-2 text-small">
          <code className="font-mono">indeterminate</code> is a third visual
          state for &ldquo;some but not all&rdquo; — set{" "}
          <code className="font-mono">checked=&quot;indeterminate&quot;</code>{" "}
          (e.g. a select-all header).
        </p>
      </section>

      {/* Don't and Do */}
      <section id="do-dont" className="scroll-mt-8">
        <h3 className="mt-12 mb-4 text-h3 text-text-default">Don&apos;t and Do</h3>
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="rounded-lg border border-border-danger bg-background-danger p-5">
            <div className="mb-2 text-sm font-bold text-text-danger">
              Don&apos;t
            </div>
            <p className="text-small text-text-default">
              Don&apos;t use a Checkbox for mutually exclusive choices (that&apos;s
              a Radio Group) or for an on/off setting that applies immediately
              (that&apos;s a Switch).
            </p>
          </div>
          <div className="rounded-lg border border-border-success bg-background-success p-5">
            <div className="mb-2 text-sm font-bold text-text-success">Do</div>
            <pre className="overflow-x-auto">
              <code className="font-mono text-xs leading-6 text-text-default">
                {`// Tie it to a label for an accessible hit target
<label className="flex items-center gap-2">
  <Checkbox /> Email me updates
</label>`}
              </code>
            </pre>
          </div>
        </div>
      </section>

      {/* Install */}
      <section id="copy-paste" className="mt-12 scroll-mt-8">
        <CodeBlock
          code={installCode}
          className="rounded-lg border border-border-default bg-background-subtle"
        />
        <p className="mt-2 text-small">
          Built on Radix Checkbox — keyboard toggle and the indeterminate state
          come for free. Pass <code className="font-mono">checked</code> /{" "}
          <code className="font-mono">onCheckedChange</code> for controlled use.
        </p>
      </section>

      <footer className="mt-16 border-t border-border-default pt-6 text-small">
        API matches{" "}
        <code className="font-mono text-text-default">
          fe-distillery/components/ui/checkbox.tsx
        </code>
        . The raw <code className="font-mono text-text-default">border-primary</code>{" "}
        / <code className="font-mono text-text-default">bg-primary</code>{" "}
        utilities are replaced with Cognition tokens.
      </footer>
    </div>
  );
}
