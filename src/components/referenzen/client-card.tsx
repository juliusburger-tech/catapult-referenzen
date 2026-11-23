import { memo } from "react";
import { MapPin } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import type { Branche, Client } from "@/data/clients";
import { cn } from "@/lib/utils";

const NUMBER_REGEX = /(\d[\d.,]*\s*[€%]?(?:\s*Mio\.?)?(?:\s*Mrd\.?)?)/g;
const NUMBER_CHUNK_REGEX = /^\d[\d.,]*\s*[€%]?(?:\s*Mio\.?)?(?:\s*Mrd\.?)?$/;

const badgeColors: Record<Branche, string> = {
  "Food & Beverage": "#16a34a",
  Ofenbau: "#b45309",
  Medizin: "#2563eb",
  Industrie: "#6b7280",
  Immobilien: "#7c3aed",
  Einrichtung: "#0891b2",
  Handwerk: "#ea580c",
  GaLaBau: "#65a30d",
  Dienstleistung: "#0f766e",
  Politik: "#1e3a8a",
  Architektur: "#9333ea",
  Sonstige: "#374151",
};

type ClientCardProps = {
  client: Client;
  isActive: boolean;
  onSelect: (id: string) => void;
};

export const ClientCard = memo(function ClientCard({ client, isActive, onSelect }: ClientCardProps) {
  return (
    <button
      type="button"
      onClick={() => onSelect(client.id)}
      className={cn(
        "w-full rounded-[var(--radius-container-token)] border border-[var(--color-border-token)] bg-[var(--color-surface)] p-5 text-left transition-colors hover:border-[var(--color-primary)]",
        isActive && "ring-2 ring-[var(--color-primary)]",
      )}
      style={{ boxShadow: "var(--shadow-card-token)" }}
    >
      <div className="flex items-start justify-between gap-3">
        <h3 className="text-base font-extrabold text-[var(--color-text)]">{client.name}</h3>
        <Badge
          className="border-current"
          style={{ color: badgeColors[client.branche], borderColor: badgeColors[client.branche] }}
        >
          {client.branche}
        </Badge>
      </div>
      <p className="mt-1 flex items-center gap-1 text-xs text-[var(--color-text-subtle)]">
        <MapPin size={12} />
        <span>{client.ort}</span>
      </p>
      {client.beschreibung && (
        <p className="mt-2 text-xs leading-relaxed text-[var(--color-text-muted)]">
          {client.beschreibung}
        </p>
      )}
      <div className="my-3 border-t border-[var(--color-border-token)]" />
      <ul className="space-y-1.5 pl-5">
        {client.erfolge.map((erfolg) => {
          const placeholder = erfolg.includes("[PLACEHOLDER");
          const chunks = erfolg.split(NUMBER_REGEX);
          return (
            <li
              key={`${client.id}-${erfolg}`}
              className={cn(
                "list-disc text-sm leading-relaxed text-[var(--color-text-muted)]",
                placeholder && "italic opacity-40",
              )}
            >
              {chunks.map((chunk, idx) =>
                NUMBER_CHUNK_REGEX.test(chunk) ? (
                  <span key={`${chunk}-${idx}`} className="font-semibold text-[var(--color-primary)]">
                    {chunk}
                  </span>
                ) : (
                  <span key={`${chunk}-${idx}`}>{chunk}</span>
                ),
              )}
            </li>
          );
        })}
      </ul>
    </button>
  );
});
