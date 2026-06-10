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
    code: `<h1 className="text-h1 text-text-default">The Joke Tax Chronicles</h1>`,
    node: (
      <h1 className="text-h1 text-text-default">The Joke Tax Chronicles</h1>
    ),
  },
  {
    label: "Heading 2",
    code: `<h2 className="text-h2 text-text-default">The King's Plan</h2>`,
    node: <h2 className="text-h2 text-text-default">The King&apos;s Plan</h2>,
  },
  {
    label: "Heading 3",
    code: `<h3 className="text-h3 text-text-default">The Joke Tax</h3>`,
    node: <h3 className="text-h3 text-text-default">The Joke Tax</h3>,
  },
  {
    label: "Heading 4",
    code: `<h4 className="text-h4 text-text-default">People's Rebellion</h4>`,
    node: (
      <h4 className="text-h4 text-text-default">People&apos;s Rebellion</h4>
    ),
  },
  {
    label: "Lead",
    code: `<p className="text-lead text-text-subtle">A modal dialog that interrupts the user with important content.</p>`,
    node: (
      <p className="text-lead text-text-subtle">
        A modal dialog that interrupts the user with important content.
      </p>
    ),
  },
  {
    label: "Large",
    code: `<p className="text-large text-text-default">Are you absolutely sure?</p>`,
    node: (
      <p className="text-large text-text-default">Are you absolutely sure?</p>
    ),
  },
  {
    label: "Body",
    code: `<p className="text-body">The king thought long and hard, and finally came up with a brilliant plan: he would tax the jokes in the kingdom.</p>`,
    node: (
      <p className="text-body">
        The king thought long and hard, and finally came up with a brilliant
        plan: he would tax the jokes in the kingdom.
      </p>
    ),
  },
  {
    label: "Small",
    code: `<p className="text-small">Last updated 3 minutes ago</p>`,
    node: <p className="text-small">Last updated 3 minutes ago</p>,
  },
  {
    label: "Blockquote",
    code: `<blockquote className="text-blockquote border-l-2 border-border-default pl-4 text-text-subtle">
  "After all," he said, "everyone enjoys a good joke, so it's only fair that they should pay for the privilege."
</blockquote>`,
    node: (
      <blockquote className="text-blockquote border-l-2 border-border-default pl-4 text-text-subtle">
        &quot;After all,&quot; he said, &quot;everyone enjoys a good joke, so
        it&apos;s only fair that they should pay for the privilege.&quot;
      </blockquote>
    ),
  },
  {
    label: "List",
    code: `<ul className="text-list list-disc pl-6 text-text-default">
  <li>1st level of puns: 5 gold coins</li>
  <li>2nd level of jokes: 10 gold coins</li>
  <li>3rd level of one-liners: 20 gold coins</li>
</ul>`,
    node: (
      <ul className="text-list list-disc pl-6 text-text-default">
        <li>1st level of puns: 5 gold coins</li>
        <li>2nd level of jokes: 10 gold coins</li>
        <li>3rd level of one-liners: 20 gold coins</li>
      </ul>
    ),
  },
  {
    label: "Inline code",
    code: `<code className="text-inline-code rounded-sm bg-background-secondary px-1.5 py-0.5 text-text-default">@radix-ui/react-alert-dialog</code>`,
    node: (
      <p className="text-body">
        Install{" "}
        <code className="text-inline-code rounded-sm bg-background-secondary px-1.5 py-0.5 text-text-default">
          @radix-ui/react-alert-dialog
        </code>{" "}
        to get started.
      </p>
    ),
  },
] as const;

const installCode = `<article className="max-w-2xl">
  <h1 className="text-h1 text-text-default">The Joke Tax Chronicles</h1>
  <p className="text-lead mt-3 text-text-subtle">
    Once upon a time, in a far-off land…
  </p>
  <h2 className="text-h2 mt-10 text-text-default">The King's Plan</h2>
  <p className="text-body mt-4">He would tax the jokes in the kingdom.</p>
  <blockquote className="text-blockquote mt-6 border-l-2 border-border-default pl-4 text-text-subtle">
    "After all," he said, "everyone enjoys a good joke."
  </blockquote>
</article>`;

export default function TypographyDocsPage() {
  return (
    <div>
      <p className="mb-2 text-xs font-normal text-text-subtle">Components</p>
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
            <h2 className="text-h2 text-text-default">The Joke Tax Chronicles</h2>
            <p className="text-lead mt-3 text-text-subtle">
              Once upon a time, in a far-off land, there was a very lazy king
              who spent all day lounging on his throne.
            </p>
            <p className="text-body mt-4">
              The king thought long and hard, and finally came up with a{" "}
              <code className="text-inline-code rounded-sm bg-background-secondary px-1.5 py-0.5 text-text-default">
                brilliant
              </code>{" "}
              plan: he would tax the jokes in the kingdom.
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
            <h1 className="text-h1 text-text-default">
              The Joke Tax Chronicles
            </h1>
            <p className="text-lead mt-3 text-text-subtle">
              Once upon a time, in a far-off land, there was a very lazy king
              who spent all day lounging on his throne.
            </p>
            <h2 className="text-h2 mt-10 text-text-default">
              The King&apos;s Plan
            </h2>
            <p className="text-body mt-4">
              The king thought long and hard, and finally came up with a
              brilliant plan: he would tax the jokes in the kingdom.
            </p>
            <h3 className="text-h3 mt-8 text-text-default">The Joke Tax</h3>
            <p className="text-body mt-4">
              The king&apos;s subjects were not amused. They grumbled and
              complained, but the king was firm:
            </p>
            <ul className="text-list mt-4 list-disc pl-6 text-text-default">
              <li>1st level of puns: 5 gold coins</li>
              <li>2nd level of jokes: 10 gold coins</li>
              <li>3rd level of one-liners: 20 gold coins</li>
            </ul>
            <blockquote className="text-blockquote mt-6 border-l-2 border-border-default pl-4 text-text-subtle">
              &quot;After all,&quot; he said, &quot;everyone enjoys a good joke,
              so it&apos;s only fair that they should pay for the privilege.&quot;
            </blockquote>
            <h4 className="text-h4 mt-8 text-text-default">
              The People&apos;s Rebellion
            </h4>
            <p className="text-body mt-4">
              The people of the kingdom, feeling uplifted by the laughter,
              started to tell jokes and puns again.
            </p>
            <div className="mt-6 overflow-x-auto">
              <table className="w-full border-collapse text-left text-sm">
                <thead>
                  <tr className="border-b border-border-default">
                    <th className="py-2 pr-4 font-semibold text-text-default">
                      King&apos;s Treasury
                    </th>
                    <th className="py-2 font-semibold text-text-default">
                      People&apos;s Happiness
                    </th>
                  </tr>
                </thead>
                <tbody className="text-text-subtle">
                  <tr className="border-b border-border-default">
                    <td className="py-2 pr-4">Empty</td>
                    <td className="py-2">Overflowing</td>
                  </tr>
                  <tr className="border-b border-border-default">
                    <td className="py-2 pr-4">Modest</td>
                    <td className="py-2">Satisfied</td>
                  </tr>
                  <tr>
                    <td className="py-2 pr-4">Full</td>
                    <td className="py-2">Ecstatic</td>
                  </tr>
                </tbody>
              </table>
            </div>
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
            href="/tokens#typography"
            className="font-medium text-text-primary underline underline-offset-2 hover:opacity-80"
          >
            Tokens → Typography
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
        <code className="font-mono text-text-default">text-*</code> token.
      </footer>
    </div>
  );
}
