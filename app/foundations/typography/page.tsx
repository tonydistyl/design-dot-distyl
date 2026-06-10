import type { Metadata } from "next";
import { CodeBlock } from "@/components/CodeBlock";

export const metadata: Metadata = {
  title: "Typography",
  description:
    "Styles for typography elements — headings, paragraphs, lists, and inline marks used within rich text. Built on the Cognition v1.2 named text styles.",
};

const api = [
  {
    cls: "text-h1",
    el: "h1",
    usage: "Page or article title. One per page. 36px / bold.",
  },
  { cls: "text-h2", el: "h2", usage: "Major section heading. 30px / semibold." },
  { cls: "text-h3", el: "h3", usage: "Sub-section heading. 24px / semibold." },
  { cls: "text-h4", el: "h4", usage: "Minor heading. 20px / semibold." },
  {
    cls: "text-lead",
    el: "p",
    usage: "Intro paragraph under a title — larger, muted.",
  },
  { cls: "text-large", el: "p / div", usage: "Emphasized body copy." },
  { cls: "text-body", el: "p", usage: "Default paragraph text." },
  { cls: "text-small", el: "p / span", usage: "Captions, helper and meta text." },
  {
    cls: "text-blockquote",
    el: "blockquote",
    usage: "Pull quotes — italic; pair with a left border.",
  },
  {
    cls: "text-list",
    el: "ul / ol",
    usage: "List text with consistent item spacing.",
  },
  {
    cls: "text-inline-code",
    el: "code",
    usage: "Inline code within prose; pair with a subtle surface.",
  },
] as const;

const elements = [
  {
    label: "Heading 1",
    code: `<h1 className="text-h1 text-text-default">Building Cognition</h1>`,
    node: <h1 className="text-h1 text-text-default">Building Cognition</h1>,
  },
  {
    label: "Heading 2",
    code: `<h2 className="text-h2 text-text-default">Why a system</h2>`,
    node: <h2 className="text-h2 text-text-default">Why a system</h2>,
  },
  {
    label: "Heading 3",
    code: `<h3 className="text-h3 text-text-default">Three layers</h3>`,
    node: <h3 className="text-h3 text-text-default">Three layers</h3>,
  },
  {
    label: "Heading 4",
    code: `<h4 className="text-h4 text-text-default">Token swap, skin swap</h4>`,
    node: (
      <h4 className="text-h4 text-text-default">Token swap, skin swap</h4>
    ),
  },
  {
    label: "Lead",
    code: `<p className="text-lead text-text-subtle">Cognition is Distyl AI's design system — the shared foundation every product sits on.</p>`,
    node: (
      <p className="text-lead text-text-subtle">
        Cognition is Distyl AI&apos;s design system — the shared foundation every
        product sits on.
      </p>
    ),
  },
  {
    label: "Large",
    code: `<p className="text-large text-text-default">A design system is not a deliverable. It is infrastructure.</p>`,
    node: (
      <p className="text-large text-text-default">
        A design system is not a deliverable. It is infrastructure.
      </p>
    ),
  },
  {
    label: "Body",
    code: `<p className="text-body">Ad hoc UI compounds. Every hardcoded hex value, every one-off spacing decision is debt that slows the next build.</p>`,
    node: (
      <p className="text-body">
        Ad hoc UI compounds. Every hardcoded hex value, every one-off spacing
        decision is debt that slows the next build.
      </p>
    ),
  },
  {
    label: "Small",
    code: `<p className="text-small">Cognition v1.2 · maintained by Research &amp; Design</p>`,
    node: (
      <p className="text-small">
        Cognition v1.2 · maintained by Research &amp; Design
      </p>
    ),
  },
  {
    label: "Blockquote",
    code: `<blockquote className="text-blockquote border-l-2 border-border-default pl-4 text-text-subtle">
  Never underestimate the cost of building the same thing twice.
</blockquote>`,
    node: (
      <blockquote className="text-blockquote border-l-2 border-border-default pl-4 text-text-subtle">
        Never underestimate the cost of building the same thing twice.
      </blockquote>
    ),
  },
  {
    label: "List",
    code: `<ul className="text-list list-disc pl-6 text-text-default">
  <li>Primitives — raw values, never used directly</li>
  <li>Semantic — purpose-named aliases, where dark mode lives</li>
  <li>Component — scoped tokens referencing semantic, never primitives</li>
</ul>`,
    node: (
      <ul className="text-list list-disc pl-6 text-text-default">
        <li>Primitives — raw values, never used directly</li>
        <li>Semantic — purpose-named aliases, where dark mode lives</li>
        <li>Component — scoped tokens referencing semantic, never primitives</li>
      </ul>
    ),
  },
  {
    label: "Inline code",
    code: `<code className="text-inline-code rounded-sm bg-background-secondary px-1.5 py-0.5 text-text-default">var(--color-chart-1)</code>`,
    node: (
      <p className="text-body">
        Reference a series color with{" "}
        <code className="text-inline-code rounded-sm bg-background-secondary px-1.5 py-0.5 text-text-default">
          var(--color-chart-1)
        </code>
        .
      </p>
    ),
  },
] as const;

const installCode = `<article className="max-w-2xl">
  <h1 className="text-h1 text-text-default">Building Cognition</h1>
  <p className="text-lead mt-3 text-text-subtle">
    Cognition is Distyl AI's design system — the shared foundation every
    product implementation sits on.
  </p>
  <h2 className="text-h2 mt-10 text-text-default">Why a system</h2>
  <p className="text-body mt-4">
    A design system is not a deliverable. It is infrastructure.
  </p>
  <blockquote className="text-blockquote mt-6 border-l-2 border-border-default pl-4 text-text-subtle">
    Never underestimate the cost of building the same thing twice.
  </blockquote>
</article>`;

export default function TypographyDocsPage() {
  return (
    <div>
      <p className="mb-2 text-xs font-normal text-text-subtle">Foundations</p>
      <h1 className="text-h1 text-text-default">Typography</h1>
      <p className="mt-3 max-w-2xl text-body text-text-subtle">
        Styles for typography elements — headings, paragraphs, lists, and inline
        marks used within rich text. Each maps to a Cognition v1.2 named text
        style; apply the <code className="font-mono">text-*</code> class to the
        semantic element.
      </p>

      {/* Preview */}
      <section id="preview" className="scroll-mt-8">
        <h3 className="mt-12 mb-4 text-h3 text-text-default">Preview</h3>
        <div className="rounded-lg border border-border-default bg-background-subtle p-8">
          <div className="max-w-xl">
            <h2 className="text-h2 text-text-default">Building Cognition</h2>
            <p className="text-lead mt-3 text-text-subtle">
              Cognition is Distyl AI&apos;s design system — the shared foundation
              every product implementation sits on.
            </p>
            <p className="text-body mt-4">
              It exists so engineers ship faster, interfaces stay consistent, and
              the cost of a rebrand is one token file — like{" "}
              <code className="text-inline-code rounded-sm bg-background-secondary px-1.5 py-0.5 text-text-default">
                var(--color-chart-1)
              </code>{" "}
              — not a codebase.
            </p>
          </div>
        </div>
        <p className="mt-2 text-small">
          Rendered with the live Cognition text styles — sizes, weights, and
          color remap on theme change, no{" "}
          <code className="font-mono">dark:</code> classes. The named styles set
          font, size, weight, and line-height; you supply the color token.
        </p>
      </section>

      {/* Elements */}
      <section id="variants" className="scroll-mt-8">
        <h3 className="mt-12 mb-4 text-h3 text-text-default">Elements</h3>
        <div className="grid grid-cols-1 gap-4">
          {elements.map((e) => (
            <div
              key={e.label}
              className="overflow-hidden rounded-lg border border-border-default"
            >
              <div className="flex min-h-[88px] items-center bg-background-subtle p-6">
                <div className="w-full">{e.node}</div>
              </div>
              <div className="border-t border-border-default p-3">
                <CodeBlock
                  code={e.code}
                  size="sm"
                  className="rounded-md border border-border-subtle bg-background-subtle"
                />
              </div>
            </div>
          ))}
        </div>
        <p className="mt-2 text-small">
          Apply the class to the matching semantic element —{" "}
          <code className="font-mono">text-h2</code> on an{" "}
          <code className="font-mono">h2</code>, not a styled{" "}
          <code className="font-mono">div</code>. Blockquotes and lists pair the
          text style with a border or list marker.
        </p>
      </section>

      {/* In context */}
      <section id="states" className="scroll-mt-8">
        <h3 className="mt-12 mb-4 text-h3 text-text-default">In context</h3>
        <div className="rounded-lg border border-border-default bg-background-subtle p-8">
          <article className="mx-auto max-w-2xl">
            <h1 className="text-h1 text-text-default">Building Cognition</h1>
            <p className="text-lead mt-3 text-text-subtle">
              Cognition is Distyl AI&apos;s design system — the shared foundation
              every product implementation sits on. It exists so engineers ship
              faster, interfaces stay consistent, and the cost of a rebrand is one
              token file, not a codebase.
            </p>

            <h2 className="text-h2 mt-10 text-text-default">Why a system</h2>
            <p className="text-body mt-4">
              Ad hoc UI compounds. Every hardcoded hex value, every one-off
              spacing decision, every parallel component is debt that slows the
              next build and the one after that.
            </p>
            <p className="text-body mt-4">
              A design system is not a deliverable. It is infrastructure. It earns
              its place the same way a database does — by making everything built
              on top of it faster and more reliable.
            </p>

            <h3 className="text-h3 mt-8 text-text-default">Three layers</h3>
            <ul className="text-list mt-4 list-disc pl-6 text-text-default">
              <li>Primitives — raw values, never used directly</li>
              <li>Semantic — purpose-named aliases, where dark mode lives</li>
              <li>
                Component — scoped tokens referencing semantic, never primitives
              </li>
            </ul>

            <h3 className="text-h3 mt-8 text-text-default">
              Token swap, skin swap
            </h3>
            <div className="mt-4 overflow-x-auto">
              <table className="w-full border-collapse text-left text-sm">
                <thead>
                  <tr className="border-b border-border-default">
                    <th className="py-2 pr-4 font-semibold text-text-default">
                      Surface
                    </th>
                    <th className="py-2 pr-4 font-semibold text-text-default">
                      Token layer
                    </th>
                    <th className="py-2 font-semibold text-text-default">
                      Result
                    </th>
                  </tr>
                </thead>
                <tbody className="text-text-subtle">
                  <tr className="border-b border-border-default">
                    <td className="py-2 pr-4">Distyl platform</td>
                    <td className="py-2 pr-4">Default semantic</td>
                    <td className="py-2">Purple, dark mode</td>
                  </tr>
                  <tr className="border-b border-border-default">
                    <td className="py-2 pr-4">Hoover impl</td>
                    <td className="py-2 pr-4">Remapped semantic</td>
                    <td className="py-2">Custom brand</td>
                  </tr>
                  <tr>
                    <td className="py-2 pr-4">Toolkit app</td>
                    <td className="py-2 pr-4">Remapped semantic</td>
                    <td className="py-2">Neutral theme</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-body mt-4">
              The component layer never changes. Only the semantic values swap.
            </p>
            <p className="text-body mt-4">
              Use <code className="font-mono">font-mono</code> for inline
              technical values like{" "}
              <code className="text-inline-code rounded-sm bg-background-secondary px-1.5 py-0.5 text-text-default">
                --color-background-primary
              </code>{" "}
              and{" "}
              <code className="text-inline-code rounded-sm bg-background-secondary px-1.5 py-0.5 text-text-default">
                var(--color-chart-1)
              </code>
              .
            </p>

            <h2 className="text-h2 mt-10 text-text-default">The moral</h2>
            <blockquote className="text-blockquote mt-4 border-l-2 border-border-default pl-4 text-text-subtle">
              Never underestimate the cost of building the same thing twice.
            </blockquote>
          </article>
        </div>
        <p className="mt-2 text-small">
          Composed in a <code className="font-mono">max-w-2xl</code> article —
          headings, lead, body, list, blockquote, and a table working together.
          Vertical rhythm comes from margin utilities, not the text styles.
        </p>
      </section>

      {/* API */}
      <section id="api" className="scroll-mt-8">
        <h3 className="mt-12 mb-4 text-h3 text-text-default">API</h3>
        <div className="overflow-x-auto rounded-lg border border-border-default">
          <div className="min-w-[560px]">
            <div className="grid grid-cols-[1.4fr_1fr_3fr] gap-4 border-b border-border-default bg-background-subtle px-4 py-2 text-xs font-medium text-text-subtle">
              <div>Class</div>
              <div>Element</div>
              <div>Usage</div>
            </div>
            <div className="divide-y divide-border-default">
              {api.map((r) => (
                <div
                  key={r.cls}
                  className="grid grid-cols-[1.4fr_1fr_3fr] gap-4 px-4 py-3"
                >
                  <div className="font-mono text-sm text-text-default">
                    {r.cls}
                  </div>
                  <div className="font-mono text-xs text-text-subtle">
                    {r.el}
                  </div>
                  <div className="text-sm text-text-subtle">{r.usage}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <p className="mt-2 text-small">
          The named styles live in{" "}
          <code className="font-mono">globals.css</code> and carry the canonical
          Cognition v1.2 font, size, weight, and line-height. The full scale and
          weights are documented under{" "}
          <a
            href="/tokens#typescale"
            className="font-medium text-text-primary underline underline-offset-2 hover:opacity-80"
          >
            Tokens → Type Scale
          </a>
          .
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
              Don&apos;t hardcode font sizes or weights (
              <code className="font-mono">text-[28px]</code>,{" "}
              <code className="font-mono">font-bold</code>) — use the named text
              styles. And don&apos;t reach for a heading class just to make text
              big; pick the class that matches the element&apos;s role.
            </p>
          </div>
          <div className="rounded-lg border border-border-success bg-background-success p-5">
            <div className="mb-2 text-sm font-bold text-text-success">Do</div>
            <pre className="overflow-x-auto">
              <code className="font-mono text-xs leading-6 text-text-default">
                {`<h2 className="text-h2 text-text-default">Section</h2>
<p className="text-body">Paragraph copy.</p>`}
              </code>
            </pre>
          </div>
        </div>
      </section>

      {/* Copy-paste */}
      <section id="copy-paste" className="mt-12 scroll-mt-8">
        <CodeBlock
          code={installCode}
          className="rounded-lg border border-border-default bg-background-subtle"
        />
      </section>

      <footer className="mt-16 border-t border-border-default pt-6 text-small">
        Prose styles are the Cognition v1.2 named text styles —{" "}
        <code className="font-mono text-text-default">text-h1</code> through{" "}
        <code className="font-mono text-text-default">text-h4</code>,{" "}
        <code className="font-mono text-text-default">text-lead</code>,{" "}
        <code className="font-mono text-text-default">text-body</code>,{" "}
        <code className="font-mono text-text-default">text-blockquote</code>,{" "}
        <code className="font-mono text-text-default">text-list</code>, and more.
        They set type only; color comes from a{" "}
        <code className="font-mono text-text-default">text-*</code> token. The
        full scale lives under{" "}
        <a
          href="/tokens#typescale"
          className="font-medium text-text-primary underline underline-offset-2 hover:opacity-80"
        >
          Tokens → Type Scale
        </a>
        .
      </footer>
    </div>
  );
}
