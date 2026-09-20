"use client";

import { useEffect, useRef } from "react";

import type { Client } from "@/data/clients";

import { ClientCard } from "./client-card";

type ClientGridProps = {
  clients: Client[];
  selectedClientId: string | null;
  onSelectClient: (id: string) => void;
};

export function ClientGrid({ clients, selectedClientId, onSelectClient }: ClientGridProps) {
  const refs = useRef<Record<string, HTMLDivElement | null>>({});

  useEffect(() => {
    if (!selectedClientId) return;
    refs.current[selectedClientId]?.scrollIntoView({ behavior: "smooth", block: "center" });
  }, [selectedClientId]);

  return (
    <div className="grid gap-4 pb-2">
      {clients.map((client) => (
        <div key={client.id} ref={(el) => void (refs.current[client.id] = el)}>
          <ClientCard
            client={client}
            isActive={selectedClientId === client.id}
            onSelect={onSelectClient}
          />
        </div>
      ))}
      {clients.length === 0 ? (
        <div className="rounded-[var(--radius-container-token)] border border-[var(--color-border-token)] bg-[var(--color-surface)] p-6 text-sm text-[var(--color-text-muted)]">
          Keine Referenzen fuer die aktuelle Kombination aus Filter und Suche gefunden.
        </div>
      ) : null}
    </div>
  );
}
