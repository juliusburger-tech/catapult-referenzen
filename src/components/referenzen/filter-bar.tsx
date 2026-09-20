"use client";

import { BRANCHEN_FILTER, type Branche } from "@/data/clients";
import { cn } from "@/lib/utils";

type FilterBarProps = {
  activeFilter: Branche | "Alle";
  onFilterChange: (filter: Branche | "Alle") => void;
};

export function FilterBar({ activeFilter, onFilterChange }: FilterBarProps) {
  return (
    <div className="flex flex-wrap gap-2">
      {BRANCHEN_FILTER.map((filter) => {
        const active = filter === activeFilter;
        return (
          <button
            key={filter}
            type="button"
            onClick={() => onFilterChange(filter)}
            className={cn(
              "rounded-full px-4 py-1.5 text-sm",
              active
                ? "bg-[var(--color-primary)] font-semibold text-white"
                : "border border-[var(--color-border-token)] bg-[var(--color-surface)] text-[var(--color-text-muted)] hover:bg-[var(--color-surface-raised)]",
            )}
          >
            {filter}
          </button>
        );
      })}
    </div>
  );
}
