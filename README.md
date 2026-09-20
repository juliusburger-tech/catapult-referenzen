# Catapult Referenz-Plattform

Interne Cold-Call-Web-App fuer Catapult Content.

Ziel: Im Akquise-Gespraech schnell passende Referenzen nach Branche und Region finden und konkrete Erfolgszahlen nennen.

## Schnellstart

```bash
npm install
npm run dev
```

App oeffnen unter [http://localhost:3000](http://localhost:3000).

## Nutzung im Cold Call

- Branche per Pill-Filter auswaehlen (`Alle`, `Food & Beverage`, `Ofenbau`, usw.).
- Optional im Suchfeld frei suchen (Kundenname, Ort, Erfolge).
- Passende Kundenkarten werden links angezeigt, Karte synchronisiert rechts.
- Klick auf Karte -> Marker fokussiert und ClientCard hervorgehoben.
- Klick auf Marker -> zugehoerige Karte wird markiert und in den Fokus gescrollt.

## Datenpflege

Alle Referenzen werden statisch gepflegt in:

- `src/data/clients.ts`

Wichtige Typen:

- `Branche`: Erlaubte Branchenwerte
- `Client`: Datensatz pro Referenzkunde

Pflichtfelder pro Kunde:

- `id`: Eindeutige slug-artige ID (z. B. `hupsi-leberkas`)
- `name`: Kundenname
- `branche`: Muss ein gueltiger `Branche`-Wert sein
- `ort`: Region/Ort fuer Suche und Anzeige
- `lat`, `lng`: Koordinaten fuer Kartenmarker
- `beschreibung`: Kurzbeschreibung
- `erfolge`: Liste der Erfolge als Strings

Hinweise fuer Erfolge:

- Zahlen werden im UI automatisch orange hervorgehoben.
- Unklare Inhalte koennen vorerst als `[PLACEHOLDER - ...]` eingetragen werden (werden visuell abgeschwaecht dargestellt).

## Qualitaets- und Design-Standards

- Next.js App Router + TypeScript, keine `any`-Typen.
- Design an Catapult Finance Hub angelehnt (Tokens, Abstaende, Kartenstil).
- Leaflet/OpenStreetMap ohne API-Key.

## Verifikation

```bash
npm run lint
npm run build
```
