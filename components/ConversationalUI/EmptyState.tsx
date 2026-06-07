"use client";

interface EmptyStateProps {
  onChipClick: (text: string) => void;
}

const chips = [
  "Summarize key entities",
  "What are the risk signals?",
  "Show me a code example",
  "Explain the token system",
];

export function EmptyState({ onChipClick }: EmptyStateProps) {
  return (
    <div className="flex flex-1 flex-col items-center justify-center gap-4 px-6 py-16 text-center">
      <div className="flex h-9 w-9 items-center justify-center rounded-full bg-background-primary">
        <div className="h-3 w-3 rounded-full bg-text-inverse opacity-90" />
      </div>
      <p className="text-sm font-medium text-text-default">
        Ask anything about this context
      </p>
      <p className="max-w-xs text-sm leading-relaxed text-text-subtle">
        Summarize, explore, or dig into the data.
      </p>
      <div className="mt-1 flex flex-wrap justify-center gap-2">
        {chips.map((chip) => (
          <button
            key={chip}
            type="button"
            onClick={() => onChipClick(chip)}
            className="rounded-full border border-border-default bg-background-default px-4 py-1.5 text-xs text-text-subtle transition-colors hover:border-border-primary hover:text-text-default"
          >
            {chip}
          </button>
        ))}
      </div>
    </div>
  );
}
