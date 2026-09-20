"use client";

import { useCallback, useMemo, useState } from "react";
import dynamic from "next/dynamic";

import { ClientGrid } from "@/components/referenzen/client-grid";
import { FilterBar } from "@/components/referenzen/filter-bar";
import { clients, type Branche } from "@/data/clients";
import type { SearchLocation } from "@/components/referenzen/map-view";

const MapView = dynamic(() => import("@/components/referenzen/map-view").then((m) => m.MapView), {
  ssr: false,
});

type ActiveTab = "referenzen" | "karte";

// Haversine-Distanz in km
function haversineKm(lat1: number, lng1: number, lat2: number, lng2: number): number {
  const R = 6371;
  const dLat = ((lat2 - lat1) * Math.PI) / 180;
  const dLng = ((lng2 - lng1) * Math.PI) / 180;
  const a =
    Math.sin(dLat / 2) ** 2 +
    Math.cos((lat1 * Math.PI) / 180) * Math.cos((lat2 * Math.PI) / 180) * Math.sin(dLng / 2) ** 2;
  return R * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
}

export default function ReferenzenPage() {
  const [selectedClientId, setSelectedClientId] = useState<string | null>(null);
  const [activeFilter, setActiveFilter] = useState<Branche | "Alle">("Alle");
  const [activeTab, setActiveTab] = useState<ActiveTab>("referenzen");

  // Karten-Suche (nächster Kunde)
  const [locationInput, setLocationInput] = useState("");
  const [searchLocation, setSearchLocation] = useState<SearchLocation | null>(null);
  const [nearestInfo, setNearestInfo] = useState<{ name: string; km: number } | null>(null);
  const [geoLoading, setGeoLoading] = useState(false);
  const [geoError, setGeoError] = useState<string | null>(null);

  const handleLocationSearch = useCallback(async () => {
    const query = locationInput.trim();
    if (!query) return;
    setGeoLoading(true);
    setGeoError(null);
    setNearestInfo(null);

    try {
      const url = `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(query)}&limit=1&countrycodes=de&accept-language=de`;
      const res = await fetch(url, { headers: { "Accept-Language": "de" } });
      const data = (await res.json()) as { lat: string; lon: string; display_name: string }[];

      if (!data.length) {
        setGeoError("Ort nicht gefunden — bitte anders eingeben.");
        return;
      }

      const { lat, lon, display_name } = data[0];
      const searchLat = parseFloat(lat);
      const searchLng = parseFloat(lon);
      const shortLabel = display_name.split(",")[0];

      setSearchLocation({ lat: searchLat, lng: searchLng, label: shortLabel });

      // Nächsten Kunden berechnen
      let nearest = clients[0];
      let minDist = haversineKm(searchLat, searchLng, nearest.lat, nearest.lng);
      for (const client of clients.slice(1)) {
        const dist = haversineKm(searchLat, searchLng, client.lat, client.lng);
        if (dist < minDist) {
          minDist = dist;
          nearest = client;
        }
      }

      setSelectedClientId(nearest.id);
      setNearestInfo({ name: nearest.name, km: Math.round(minDist) });
    } catch {
      setGeoError("Fehler bei der Suche — bitte erneut versuchen.");
    } finally {
      setGeoLoading(false);
    }
  }, [locationInput]);

  const filteredClients = useMemo(() => {
    return clients.filter(
      (client) => activeFilter === "Alle" || client.branche === activeFilter,
    );
  }, [activeFilter]);

  const filteredIds = useMemo(() => new Set(filteredClients.map((client) => client.id)), [filteredClients]);
  // Auf der Karte immer alle Kunden sichtbar und klickbar — unabhängig vom Referenzen-Filter
  const allClientIds = useMemo(() => new Set(clients.map((c) => c.id)), []);
  // Ausgewählter Kunde für die Detailkarte
  const selectedClient = useMemo(
    () => (selectedClientId ? clients.find((c) => c.id === selectedClientId) ?? null : null),
    [selectedClientId],
  );
  const handleSelectClient = useCallback((id: string) => {
    setSelectedClientId(id);
  }, []);

  return (
    <div className="mx-auto flex w-full max-w-[1400px] flex-col gap-5">

      {/* Header + Tabs in einer Zeile */}
      <div className="flex items-end justify-between gap-4">
        <header className="flex flex-col gap-1">
          <p className="text-xs font-semibold tracking-wide text-[var(--color-primary)]">
            <span className="text-[var(--color-text-subtle)]">— </span>
            Referenzen
            <span className="text-[var(--color-text-subtle)]"> —</span>
          </p>
          <h1 className="text-3xl font-black tracking-tight text-[var(--color-text)]">Referenz-Dashboard</h1>
        </header>

        {/* Tab-Reiter */}
        <div className="flex items-center rounded-[999px] border border-[var(--color-border-token)] bg-[var(--color-surface)] p-1 gap-1 flex-shrink-0">
          <button
            onClick={() => setActiveTab("referenzen")}
            className={[
              "rounded-[999px] px-5 py-1.5 text-sm font-semibold transition-all",
              activeTab === "referenzen"
                ? "bg-[var(--color-primary)] text-white shadow-sm"
                : "text-[var(--color-text-muted)] hover:text-[var(--color-text)]",
            ].join(" ")}
          >
            Referenzen
          </button>
          <button
            onClick={() => setActiveTab("karte")}
            className={[
              "rounded-[999px] px-5 py-1.5 text-sm font-semibold transition-all",
              activeTab === "karte"
                ? "bg-[var(--color-primary)] text-white shadow-sm"
                : "text-[var(--color-text-muted)] hover:text-[var(--color-text)]",
            ].join(" ")}
          >
            Karte
          </button>
        </div>
      </div>

      {/* Filter — nur bei Referenzen-Tab sichtbar */}
      {activeTab === "referenzen" && (
        <FilterBar
          activeFilter={activeFilter}
          onFilterChange={setActiveFilter}
        />
      )}

      {/* Referenzen-Tab */}
      {activeTab === "referenzen" && (
        <div className="max-h-[calc(100vh-220px)] overflow-y-auto pr-1">
          <ClientGrid
            clients={filteredClients}
            selectedClientId={selectedClientId}
            onSelectClient={handleSelectClient}
          />
        </div>
      )}

      {/* Karten-Tab */}
      {activeTab === "karte" && (
        <div className="flex h-[calc(100vh-160px)] flex-col gap-3">

          {/* Standort-Suche */}
          <div className="flex flex-shrink-0 flex-col gap-2">
            <div className="flex gap-2">
              <input
                type="text"
                value={locationInput}
                onChange={(e) => setLocationInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleLocationSearch()}
                placeholder="Stadt oder Postleitzahl eingeben…"
                className="flex-1 rounded-[999px] border border-[var(--color-border-token)] bg-[var(--color-surface)] px-4 py-2 text-sm text-[var(--color-text)] placeholder:text-[var(--color-text-subtle)] outline-none transition-colors focus:border-[var(--color-primary)]"
              />
              <button
                onClick={handleLocationSearch}
                disabled={geoLoading}
                className="rounded-[999px] bg-[var(--color-primary)] px-5 py-2 text-sm font-semibold text-white transition-opacity hover:opacity-90 disabled:opacity-50"
              >
                {geoLoading ? "Suche…" : "Nächster Kunde"}
              </button>
            </div>
            {geoError && (
              <p className="px-1 text-xs text-[#ef4444]">{geoError}</p>
            )}
          </div>

          {/* Detailkarte — erscheint sobald ein Kunde ausgewählt ist */}
          {selectedClient && (
            <div className="flex-shrink-0 rounded-[var(--radius-container-token)] border border-[var(--color-border-token)] bg-[var(--color-surface)] p-4">
              <div className="flex items-start justify-between gap-3">
                <div className="min-w-0">
                  <p className="text-xs font-semibold tracking-wide text-[var(--color-primary)]">
                    <span className="text-[var(--color-text-subtle)]">— </span>
                    {selectedClient.branche}
                    <span className="text-[var(--color-text-subtle)]"> —</span>
                  </p>
                  <h2 className="text-lg font-black tracking-tight text-[var(--color-text)]">
                    {selectedClient.name}
                  </h2>
                  <p className="text-xs text-[var(--color-text-subtle)]">{selectedClient.ort}</p>
                </div>
                {nearestInfo && nearestInfo.name === selectedClient.name && (
                  <span className="flex-shrink-0 rounded-[999px] bg-[var(--color-primary)] px-3 py-1 text-xs font-bold text-white">
                    ~{nearestInfo.km} km entfernt
                  </span>
                )}
              </div>

              <div className="mt-3 flex gap-4">
                {/* Pitch-Text für den Cold Call */}
                {selectedClient.pitch && (
                  <div className="flex-1 rounded-[10px] bg-[var(--color-bg)] p-3">
                    <p className="mb-1.5 text-[10px] font-semibold uppercase tracking-widest text-[var(--color-text-subtle)]">
                      Cold Call Pitch
                    </p>
                    <p className="text-xs leading-relaxed text-[var(--color-text)]">
                      {selectedClient.pitch}
                    </p>
                  </div>
                )}
                {/* Erfolge */}
                <ul className="flex-shrink-0 space-y-1">
                  {selectedClient.erfolge.map((e) => (
                    <li key={e} className="flex items-start gap-1.5 text-xs text-[var(--color-text-secondary,var(--color-text-muted))]">
                      <span className="mt-0.5 flex-shrink-0 text-[8px] text-[var(--color-primary)]">●</span>
                      {e}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}

          {/* Karte — füllt den restlichen Platz */}
          <div className="min-h-0 flex-1 overflow-hidden rounded-[var(--radius-container-token)] border border-[var(--color-border-token)] bg-[var(--color-surface)]">
            <MapView
              allClients={clients}
              filteredClientIds={allClientIds}
              selectedClientId={selectedClientId}
              onSelectClient={handleSelectClient}
              shouldInvalidateSize={activeTab === "karte"}
              searchLocation={searchLocation}
            />
          </div>

        </div>
      )}

    </div>
  );
}
