import type { Metadata } from "next";
import { Textarea } from "@/components/ui/textarea";
import { CodeBlock } from "@/components/CodeBlock";

export const metadata: Metadata = {
  title: "Textarea",
  description:
    "Textarea component — a multi-line text input. API matches fe-distillery components/ui/textarea.tsx.",
};

const states = [
  {
    key: "default",
    label: "Default",
    code: `<Textarea placeholder="Type your message here" />`,
    node: <Textarea placeholder="Type your message here" />,
  },
  {
    key: "invalid",
    label: "Invalid",
    code: `<Textarea aria-invalid defaultValue="Too short" />`,
    node: <Textarea aria-invalid defaultValue="Too short" />,
  },
  {
    key: "disabled",
    label: "Disabled",
    code: `<Textarea disabled placeholder="Type your message here" />`,
    node: <Textarea disabled placeholder="Type your message here" />,
  },
] as const;

const installCode = `import { Textarea } from "@/components/ui/textarea";

export function Message() {
  return <Textarea placeholder="Type your message here" rows={4} />;
}`;

export default function TextareaPage() {
  return (
    <div>
      <p className="mb-2 text-xs font-normal text-text-subtle">Components</p>
      <h1 className="text-h1 text-text-default">Textarea</h1>
      <p className="mt-3 max-w-2xl text-body text-text-subtle">
        Displays a form textarea or a component that looks like a textarea. Use
        it for multi-line text such as messages, comments, and descriptions.
      </p>

      {/* Preview */}
      <section id="preview" className="scroll-mt-8">
        <h3 className="mt-12 mb-4 text-h3 text-text-default">Preview</h3>
        <div className="flex items-center justify-center rounded-lg border border-border-default bg-background-subtle p-10">
          <div className="flex w-full max-w-sm flex-col gap-2">
            <label
              htmlFor="message"
              className="text-sm font-medium text-text-default"
            >
              Your message
            </label>
            <Textarea id="message" placeholder="Type your message here" />
          </div>
        </div>
        <p className="mt-2 text-small">
          Rendered with live Cognition tokens — surface, border, and focus ring
          remap on theme change, no <code className="font-mono">dark:</code>{" "}
          classes. It matches the Input field, just multi-line.
        </p>
      </section>

      {/* States */}
      <section id="states" className="scroll-mt-8">
        <h3 className="mt-12 mb-4 text-h3 text-text-default">States</h3>
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
          {states.map((s) => (
            <div
              key={s.key}
              className="overflow-hidden rounded-lg border border-border-default"
            >
              <div className="bg-background-subtle p-8">{s.node}</div>
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
          Invalid styling keys off the native{" "}
          <code className="font-mono">aria-invalid</code> attribute, so it stays
          in sync with form validation.
        </p>
      </section>

      {/* Don't and Do */}
      <section id="do-dont" className="scroll-mt-8">
        <h3 className="mt-12 mb-4 text-h3 text-text-default">Don&apos;t and Do</h3>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div className="rounded-lg border border-border-danger bg-background-danger p-5">
            <div className="mb-2 text-sm font-bold text-text-danger">
              Don&apos;t
            </div>
            <p className="text-small text-text-default">
              Don&apos;t use a Textarea for a single line of input — that&apos;s
              an Input. And don&apos;t hardcode{" "}
              <code className="font-mono">border-gray-300</code>; the variant is
              token-driven.
            </p>
          </div>
          <div className="rounded-lg border border-border-success bg-background-success p-5">
            <div className="mb-2 text-sm font-bold text-text-success">Do</div>
            <pre className="overflow-x-auto">
              <code className="font-mono text-xs leading-6 text-text-default">
                {`<label htmlFor="bio">Bio</label>
<Textarea id="bio" rows={4} />`}
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
          Drop-in ready. It spreads every native{" "}
          <code className="font-mono">textarea</code> prop (
          <code className="font-mono">rows</code>,{" "}
          <code className="font-mono">value</code>,{" "}
          <code className="font-mono">onChange</code>, …).
        </p>
      </section>

      <footer className="mt-16 border-t border-border-default pt-6 text-small">
        API matches{" "}
        <code className="font-mono text-text-default">
          fe-distillery/components/ui/textarea.tsx
        </code>{" "}
        — a single <code className="font-mono text-text-default">Textarea</code>{" "}
        spreading{" "}
        <code className="font-mono text-text-default">
          React.ComponentProps&lt;&quot;textarea&quot;&gt;
        </code>
        . Raw Tailwind utilities are replaced with Cognition tokens.
      </footer>
    </div>
  );
}
