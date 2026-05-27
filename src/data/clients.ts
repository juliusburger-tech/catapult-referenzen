export type Branche =
  | "Food & Beverage"
  | "Ofenbau"
  | "Medizin"
  | "Industrie"
  | "Immobilien"
  | "Einrichtung"
  | "Handwerk"
  | "Sonstige";

export type Client = {
  id: string;
  name: string;
  branche: Branche;
  ort: string;
  lat: number;
  lng: number;
  beschreibung: string;
  erfolge: string[];
};

export const BRANCHEN_FILTER: readonly ["Alle", ...Branche[]] = [
  "Alle",
  "Food & Beverage",
  "Ofenbau",
  "Medizin",
  "Industrie",
  "Immobilien",
  "Einrichtung",
  "Handwerk",
];

export const clients: Client[] = [
  { id: "hupsi-leberkas", name: "Hupsi Leberkas", branche: "Food & Beverage", ort: "Bayern", lat: 48.14, lng: 11.58, beschreibung: "Bayerischer Leberkaese-Spezialist mit handwerklichem Anspruch", erfolge: ["42 Millionen Views in den ersten 3 Monaten", "25.000 neue Abonnenten aufgebaut", "Tagesumsatz von 13.000 EUR auf 32.000 EUR gesteigert (+146 %)", "6 Monate Zusammenarbeit - Umsatz konstant auf neuem Niveau gehalten", "160.000 EUR Investitionsbonus vom Maschinenhersteller durch Video-Erwaehnung", "Neue Produktionshalle realisiert dank gestiegener Umsaetze"] },
  { id: "burgis-gmbh", name: "Burgis GmbH", branche: "Food & Beverage", ort: "Neumarkt i.d.OPf.", lat: 49.28, lng: 11.46, beschreibung: "Groesster Knoedelhersteller Deutschlands mit rund 150 Mitarbeitern und knapp 50 Mio. EUR Jahresumsatz — deutschlandweit im LEH gelistet.", erfolge: ["2025: 76 Mio. Views erreicht", "75.000 Follower aufgebaut", "Ueber 400 Bewerbungen generiert und 7 Einstellungen realisiert", "Komplettes analoges Marketing abgeschaltet (kein Print, kein Radio, kein TV) und Fokus voll auf Social Media", "Langjaehrige, intensive Zusammenarbeit mit stabilen Umsaetzen und Gewinnen trotz schwieriger Marktlage"] },
  { id: "emmis-klossmasse", name: "Emmi's Klossmasse", branche: "Food & Beverage", ort: "Franken, Bayern", lat: 49.45, lng: 11.08, beschreibung: "Kultmarke aus dem Osten — dort extrem bekannt und seit Generationen in den Haushalten verankert.", erfolge: ["50 Mio. Views plattformuebergreifend in den ersten 6 Monaten seit Start", "20.000 Follower aufgebaut", "Gesteigerter Umsatz im LEH", "Nur 2-3 Stunden monatlicher Zeitaufwand seitens des Unternehmens"] },
  { id: "maintal-konfitueren", name: "Maintal Konfitueren", branche: "Food & Beverage", ort: "Hassfurt", lat: 50.03, lng: 10.52, beschreibung: "Groesster Konfitueren- und Marmeladenhersteller in Bayern — Familienunternehmen seit 1886, exportiert in 29 Laender weltweit.", erfolge: ["Aussenpraesenz deutlich verbessert", "Hochwertiges Videomarketing implementiert", "Reichweite innerhalb der ersten 30 Tage der Zusammenarbeit um 76 % gesteigert", "Mehr Bewerbungen durch Employer-Branding-Kampagne"] },
  { id: "metzgerei-boneberger", name: "Metzgerei Boneberger", branche: "Food & Beverage", ort: "Muenchen", lat: 48.14, lng: 11.58, beschreibung: "Eine der groessten inhabergefuehrten Metzgereiketten Bayerns — ueber 25 Filialen rund um Muenchen und ueber 500 Mitarbeiter.", erfolge: ["[PLACEHOLDER - Reichweite/Views]", "[PLACEHOLDER - Recruiting-Ergebnis]", "[PLACEHOLDER - Ergebnis]"] },
  { id: "metzgerei-walk", name: "Metzgerei Walk", branche: "Food & Beverage", ort: "Nuernberg", lat: 49.45, lng: 11.08, beschreibung: "Grosse Metzgereikette im Raum Nuernberg und Umgebung mit weit ueber 300 Mitarbeitern und 26 Filialen.", erfolge: ["[PLACEHOLDER - Reichweite/Views]", "[PLACEHOLDER - Recruiting-Ergebnis]", "[PLACEHOLDER - Ergebnis]"] },
  { id: "baecker-feihl", name: "Der Baecker Feihl", branche: "Food & Beverage", ort: "Nuernberg", lat: 49.46, lng: 11.07, beschreibung: "Mit knapp 40 Filialen und rund 400 Mitarbeitern eine der groessten Handwerksbaeckereien der Metropolregion Nuernberg.", erfolge: ["20.000 Follower aufgebaut", "Seit ueber 1 Jahr in Zusammenarbeit", "Online-Shop von rund 10 Bestellungen pro Monat auf rund 10 Bestellungen pro Tag gesteigert", "Plattformuebergreifend ueber 35 Mio. Views erreicht", "132 Bewerbungen generiert und 14 Einstellungen im Bereich Verkauf", "Nachweislich gesteigerte Umsaetze auch im Ladengeschaeft"] },
  { id: "guerilla-groestl", name: "Guerilla Groestl", branche: "Food & Beverage", ort: "Nuernberg", lat: 49.45, lng: 11.09, beschreibung: "Kultige Streetfood-Marke, Foodtruck und Restaurants in Nuernberg", erfolge: ["Im Gastro-Bereich waehrend der Zusammenarbeit deutlich mehr Ladenbesucher", "Bekanntheit stark gesteigert - auch als verhaeltnismaessig kleines Unternehmen"] },
  { id: "bistro-gourmet", name: "Bistro Gourmet (Selgros)", branche: "Food & Beverage", ort: "Deutschland", lat: 51.16, lng: 10.45, beschreibung: "Gastronomie-Erlebniskonzept der Transgourmet-Gruppe in den Selgros-Maerkten — deutschlandweit.", erfolge: ["Hochwertige Videoqualitaet fuer die Zusammenarbeit umgesetzt", "Rund 100 zusaetzliche Bistro-Gaeste pro Monat"] },
  { id: "ofenhaus-doerfler", name: "Ofenhaus Doerfler", branche: "Ofenbau", ort: "Bayern", lat: 48.5, lng: 11.5, beschreibung: "Exklusiver und renommierter Ofenbauer — setzt weltweit Projekte um und zaehlt zu den fuehrenden Adressen der Branche.", erfolge: ["Seit Mai 2025 in intensiver Zusammenarbeit", "Von 2.500 auf ueber 15.000 Abonnenten gewachsen", "Ueber 20 Mio. organische Aufrufe generiert", "Mehr als 150 qualifizierte Leads gewonnen", "Heute kommen fast 70 % aller Anfragen ueber Social Media"] },
  { id: "bachmann-kg", name: "Bachmann KG", branche: "Ofenbau", ort: "Rhein-Main / Bayern", lat: 50.11, lng: 8.68, beschreibung: "Exklusiver Ofenbauer mit Fokus auf handgefertigten Einzelanlagen und zeitlosen Designklassikern.", erfolge: ["80.000 EUR mehr Umsatz in den ersten 3 Monaten", "Von 0 auf ueber 10 Anfragen pro Monat"] },
  { id: "bk-kamin", name: "b+k Kamin- und Wohnstudio", branche: "Ofenbau", ort: "Deutschland", lat: 49.0, lng: 10.5, beschreibung: "Familiengefuehrtes Kamin- und Wohnstudio in zweiter Generation", erfolge: ["Durchschnittlich 12 Anfragen pro Monat generiert", "Rund 50.000 EUR mehr Umsatz in den ersten 3 Monaten"] },
  { id: "kerstens-kamine", name: "Kerstens Kamine", branche: "Ofenbau", ort: "Braunschweig / Gifhorn", lat: 52.26, lng: 10.52, beschreibung: "Einer der groessten unabhaengigen Kaminfachhaendler Norddeutschlands, ueber 30 Jahre Erfahrung", erfolge: ["4 Neukunden in den ersten 2 Monaten durch unser Anfragesystem", "Erfolge in einem stark umkaempften Marktumfeld"] },
  { id: "nuernberger-klinik", name: "Nuernberger Klinik", branche: "Medizin", ort: "Nuernberg", lat: 49.45, lng: 11.08, beschreibung: "Eines der fuehrenden Zentren fuer plastische Chirurgie in Bayern", erfolge: ["[PLACEHOLDER - Reichweite/Views]", "[PLACEHOLDER - Patientenanfragen]", "[PLACEHOLDER - Ergebnis]"] },
  { id: "proepster-gmbh", name: "Proepster GmbH", branche: "Industrie", ort: "Bayern", lat: 48.8, lng: 11.2, beschreibung: "Europaweit fuehrend im Blitz- und Ueberspannungsschutz — dreistellige Millionenumsaetze.", erfolge: ["[PLACEHOLDER - Reichweite/Views]", "[PLACEHOLDER - Recruiting-Ergebnis]", "[PLACEHOLDER - Ergebnis]"] },
  { id: "immovaria", name: "Immovaria", branche: "Immobilien", ort: "Nuernberg", lat: 49.45, lng: 11.08, beschreibung: "Bautraeger & Projektentwicklung - denkmalgeschuetzte Immobilien, Bilanzsumme ueber 65 Mio. EUR", erfolge: ["[PLACEHOLDER - Reichweite/Views]", "[PLACEHOLDER - Anfragen/Leads]", "[PLACEHOLDER - Ergebnis]"] },
  { id: "stocker-einrichtung", name: "Stocker Einrichtungs GmbH", branche: "Einrichtung", ort: "Erlangen", lat: 49.59, lng: 11.0, beschreibung: "Etabliertes Einrichtungshaus in Erlangen - full-service Moebel- und Einrichtungskonzept", erfolge: ["[PLACEHOLDER - Reichweite/Views]", "[PLACEHOLDER - Ergebnis]"] },
  { id: "luger-elektrotechnik", name: "Luger Elektrotechnik", branche: "Handwerk", ort: "Bayern", lat: 49.2, lng: 11.3, beschreibung: "Elektrotechnik-Fachbetrieb, regionaler Handwerksbetrieb", erfolge: ["10 Bewerbungen generiert", "1 Einstellung erfolgreich besetzt"] },
];
