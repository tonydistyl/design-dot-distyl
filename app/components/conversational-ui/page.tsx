import type { Metadata } from "next";
import { ChatShell } from "@/components/ConversationalUI";
import { CodeBlock } from "@/components/CodeBlock";

export const metadata: Metadata = {
  title: "Conversational UI",
  description:
    "The canonical AI conversation surface for Distyl products — ChatShell, MessageBubble, ChatInput, and LoadingBubble composed from Cognition components.",
};

const props = [
  {
    name: "systemPrompt",
    type: "string",
    def: "undefined",
    desc: "System prompt forwarded to the API route. Each product context should override this.",
  },
  {
    name: "placeholder",
    type: "string",
    def: '"Ask the context view…"',
    desc: "Input placeholder text.",
  },
  {
    name: "onSend",
    type: "(messages, userMessage) => Promise<string>",
    def: "undefined",
    desc: "Optional escape hatch. If provided, ChatShell calls this instead of /api/chat. Use for products with their own API layer.",
  },
];

const parts = [
  {
    name: "ChatShell",
    desc: "Composes all sub-components. Owns message state, API call, and auto-scroll.",
  },
  {
    name: "MessageBubble",
    desc: "Renders a single user or assistant turn. Parses markdown and fenced code blocks.",
  },
  {
    name: "ChatInput",
    desc: "Auto-resizing Textarea with send Button. Handles Enter-to-send and Shift+Enter newline.",
  },
  {
    name: "LoadingBubble",
    desc: "Assistant thinking state. Uses the Distyl Spinner.",
  },
  {
    name: "EmptyState",
    desc: "Zero-message state with prompt chips.",
  },
];

const doCode = `// Panel — does not block the canvas
<div className="w-96 border-l border-border-default">
  <ChatShell
    systemPrompt="You are analyzing Tower pipeline data."
    placeholder="Ask about this pipeline…"
  />
</div>

// With custom API layer (Tower, Platform)
<ChatShell
  onSend={async (messages, userMessage) => {
    const res = await myProductApi.chat(messages);
    return res.reply;
  }}
/>`;

const installCode = `import { ChatShell } from "@/components/ConversationalUI";

export function ContextPanel() {
  return (
    <div className="flex h-full flex-col border-l border-border-default">
      <ChatShell
        systemPrompt="You are analyzing Distyl pipeline data."
        placeholder="Ask about this context…"
      />
    </div>
  );
}`;

export default function ConversationalUIPage() {
  return (
    <div>
      <p className="mb-2 text-xs font-normal text-text-subtle">Components</p>
      <h1 className="text-h1 text-text-default">Conversational UI</h1>
      <p className="mt-3 max-w-2xl text-body text-text-subtle">
        The canonical AI conversation surface for Distyl products. Composed from
        ChatShell, MessageBubble, ChatInput, and LoadingBubble — each
        independently usable. Not a modal or a drawer. A panel or inline surface
        that supports a full turn-based AI exchange.
      </p>

      <div className="mt-4 rounded-lg border border-border-default bg-background-accent p-4">
        <p className="text-small text-text-default">
          <span className="font-bold">Proposed.</span> fe-distillery has no
          first-class chat component, is not in the design library nor has a
          Figma counterpart yet. It documents the canonical pattern for AI chat
          surfaces across Distyl products like Platform, Tower, and future
          implementations.
        </p>
      </div>

      {/* Preview */}
      <section id="preview" className="scroll-mt-8">
        <h3 className="mt-12 mb-4 text-h3 text-text-default">Preview</h3>
        <div className="overflow-hidden rounded-lg border border-border-default">
          <ChatShell />
        </div>
        <p className="mt-2 text-small">
          Live — type a message and send. Toggle the theme from the sidebar and
          the token layer remaps automatically. No{" "}
          <code className="font-mono">dark:</code> classes anywhere in this
          component.
        </p>
      </section>

      {/* Anatomy */}
      <section id="anatomy" className="scroll-mt-8">
        <h3 className="mt-12 mb-4 text-h3 text-text-default">Anatomy</h3>

        <div className="overflow-x-auto rounded-lg border border-border-default">
          <div className="min-w-[640px]">
            <div className="grid grid-cols-[1.2fr_2fr_1.2fr_3fr] gap-4 border-b border-border-default bg-background-subtle px-4 py-2 text-xs font-medium text-text-subtle">
              <div>Prop</div>
              <div>Type</div>
              <div>Default</div>
              <div>Description</div>
            </div>
            <div className="divide-y divide-border-default">
              {props.map((p) => (
                <div
                  key={p.name}
                  className="grid grid-cols-[1.2fr_2fr_1.2fr_3fr] gap-4 px-4 py-3"
                >
                  <div className="font-mono text-sm text-text-default">
                    {p.name}
                  </div>
                  <div className="font-mono text-xs text-text-subtle">
                    {p.type}
                  </div>
                  <div className="font-mono text-xs text-text-subtle">
                    {p.def}
                  </div>
                  <div className="text-sm text-text-subtle">{p.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-4 divide-y divide-border-default rounded-lg border border-border-default">
          {parts.map((p) => (
            <div key={p.name} className="px-4 py-3">
              <span className="font-mono text-sm text-text-default">
                {p.name}
              </span>
              <span className="ml-2 text-sm text-text-subtle">— {p.desc}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Don't and Do */}
      <section id="do-dont" className="scroll-mt-8">
        <h3 className="mt-12 mb-4 text-h3 text-text-default">
          Don&apos;t and Do
        </h3>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div className="rounded-lg border border-border-danger bg-background-danger p-5">
            <div className="mb-2 text-sm font-bold text-text-danger">
              Don&apos;t
            </div>
            <p className="text-small text-text-default">
              Don&apos;t render ChatShell inside a Dialog or Sheet. It is a panel
              or inline surface — it does not block the canvas behind it.
              Don&apos;t hardcode a system prompt in the call site — pass it as
              the systemPrompt prop so each context owns its own behaviour.
            </p>
          </div>
          <div className="rounded-lg border border-border-success bg-background-success p-5">
            <div className="mb-2 text-sm font-bold text-text-success">Do</div>
            <pre className="overflow-x-auto">
              <code className="font-mono text-xs leading-6 text-text-default">
                {doCode}
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
        Distyl-specific — no fe-distillery counterpart yet. API route lives at{" "}
        <code className="font-mono text-text-default">
          app/api/chat/route.ts
        </code>{" "}
        and requires{" "}
        <code className="font-mono text-text-default">ANTHROPIC_API_KEY</code> in
        the environment. Model is{" "}
        <code className="font-mono text-text-default">
          claude-sonnet-4-20250514
        </code>{" "}
        with a 1000-token max. Override the API call entirely via the{" "}
        <code className="font-mono text-text-default">onSend</code> prop.
      </footer>
    </div>
  );
}
