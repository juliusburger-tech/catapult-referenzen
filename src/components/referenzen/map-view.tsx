"use client";

import { memo, useEffect, useMemo } from "react";
import L from "leaflet";
import { CircleMarker, MapContainer, Popup, TileLayer, useMap } from "react-leaflet";

import type { Client } from "@/data/clients";

import markerIcon2x from "leaflet/dist/images/marker-icon-2x.png";
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";

type IconDefaultProto = {
  _getIconUrl?: unknown;
};

const defaultProto = L.Icon.Default.prototype as IconDefaultProto;
delete defaultProto._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: markerIcon2x.src,
  iconUrl: markerIcon.src,
  shadowUrl: markerShadow.src,
});

export type SearchLocation = {
  lat: number;
  lng: number;
  label: string;
};

type MapViewProps = {
  allClients: Client[];
  filteredClientIds: Set<string>;
  selectedClientId: string | null;
  onSelectClient: (id: string) => void;
  shouldInvalidateSize: boolean;
  searchLocation?: SearchLocation | null;
};

export function MapView({
  allClients,
  filteredClientIds,
  selectedClientId,
  onSelectClient,
  shouldInvalidateSize,
  searchLocation,
}: MapViewProps) {
  const selectedSet = useMemo(
    () => new Set(selectedClientId ? [selectedClientId] : []),
    [selectedClientId],
  );
  const selectedClient = selectedClientId
    ? allClients.find((client) => client.id === selectedClientId) ?? null
    : null;

  return (
    <MapContainer center={[51.1, 10.4]} zoom={6} className="h-full min-h-[350px] w-full rounded-xl">
      <MapResizeController shouldInvalidateSize={shouldInvalidateSize} />
      <MapFocusController selectedClient={selectedClient} searchLocation={searchLocation} />
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <ClientMarkers
        allClients={allClients}
        filteredClientIds={filteredClientIds}
        selectedSet={selectedSet}
        onSelectClient={onSelectClient}
      />
      {searchLocation && (
        <CircleMarker
          center={[searchLocation.lat, searchLocation.lng]}
          radius={10}
          pathOptions={{
            fillColor: "#111111",
            color: "#ff6f16",
            weight: 3,
            fillOpacity: 0.9,
          }}
        >
          <Popup>
            <div className="space-y-1">
              <p className="font-bold text-sm">📍 {searchLocation.label}</p>
              <p className="text-xs text-gray-500">Sucheinstiegspunkt</p>
            </div>
          </Popup>
        </CircleMarker>
      )}
    </MapContainer>
  );
}

const ClientMarkers = memo(function ClientMarkers({
  allClients,
  filteredClientIds,
  selectedSet,
  onSelectClient,
}: {
  allClients: Client[];
  filteredClientIds: Set<string>;
  selectedSet: Set<string>;
  onSelectClient: (id: string) => void;
}) {
  return (
    <>
      {allClients.map((client) => {
        const visible = filteredClientIds.has(client.id);
        const selected = selectedSet.has(client.id);
        return (
          <CircleMarker
            key={client.id}
            center={[client.lat, client.lng]}
            radius={selected ? 12 : 8}
            pathOptions={{
              fillColor: "#ff6f16",
              color: selected ? "#ff6f16" : "#ffffff",
              weight: selected ? 3 : 2,
              opacity: visible ? 1 : 0.15,
              fillOpacity: visible ? 0.95 : 0.15,
            }}
            eventHandlers={visible ? { click: () => onSelectClient(client.id) } : {}}
          >
            {visible ? (
              <Popup>
                <div className="space-y-1">
                  <p className="font-bold">{client.name}</p>
                  <p className="text-xs">{client.ort}</p>
                  <ul className="list-disc pl-4 text-xs">
                    {client.erfolge.slice(0, 2).map((erfolg) => (
                      <li key={`${client.id}-${erfolg}`}>{erfolg}</li>
                    ))}
                  </ul>
                </div>
              </Popup>
            ) : null}
          </CircleMarker>
        );
      })}
    </>
  );
});

function MapFocusController({
  selectedClient,
  searchLocation,
}: {
  selectedClient: Client | null;
  searchLocation?: SearchLocation | null;
}) {
  const map = useMap();

  useEffect(() => {
    if (searchLocation && selectedClient) {
      // Beide Punkte in den Blick nehmen
      const bounds = L.latLngBounds(
        [searchLocation.lat, searchLocation.lng],
        [selectedClient.lat, selectedClient.lng],
      );
      map.fitBounds(bounds, { padding: [60, 60], animate: true, maxZoom: 10 });
    } else if (selectedClient) {
      map.setView([selectedClient.lat, selectedClient.lng], Math.max(map.getZoom(), 8), {
        animate: true,
      });
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [map, selectedClient, searchLocation]);

  return null;
}

function MapResizeController({ shouldInvalidateSize }: { shouldInvalidateSize: boolean }) {
  const map = useMap();

  useEffect(() => {
    const resize = () => {
      map.invalidateSize();
    };

    const timer = window.setTimeout(resize, 60);
    window.addEventListener("resize", resize);

    return () => {
      window.clearTimeout(timer);
      window.removeEventListener("resize", resize);
    };
  }, [map, shouldInvalidateSize]);

  return null;
}
