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
  pitch?: string;
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
  { id: "hupsi-leberkas", name: "Hupsi Leberkas", branche: "Food & Beverage", ort: "Bayern", lat: 48.14, lng: 11.58, beschreibung: "Bayerischer Leberkäse-Spezialist mit handwerklichem Anspruch", erfolge: ["42 Millionen Views in den ersten 3 Monaten", "25.000 neue Abonnenten aufgebaut", "Umsatz stark gesteigert — konstant auf neuem Niveau gehalten", "Neue Produktionshalle realisiert dank gestiegener Nachfrage"], pitch: "Einer unserer Kunden ist Hupsi Leberkas — ein traditioneller bayerischer Leberkäse-Spezialist mit echtem handwerklichem Anspruch. Innerhalb der ersten drei Monate haben wir gemeinsam unglaubliche 42 Millionen Aufrufe erzielt und über 25.000 neue Abonnenten aufgebaut. Der Umsatz ist so explosionsartig gestiegen, dass der Inhaber kaum mehr mit der Produktion hinterhergekommen ist — und mittlerweile hat er sogar eine komplett neue Produktionshalle gebaut." },
  { id: "burgis-gmbh", name: "Burgis GmbH", branche: "Food & Beverage", ort: "Neumarkt i.d.OPf.", lat: 49.28, lng: 11.46, beschreibung: "Größter Knödelhersteller Deutschlands mit rund 150 Mitarbeitern und knapp 50 Mio. EUR Jahresumsatz — deutschlandweit im LEH gelistet.", erfolge: ["2025: 76 Mio. Views erreicht", "75.000 Follower aufgebaut", "Über 400 Bewerbungen generiert und 7 Einstellungen realisiert", "Komplettes analoges Marketing abgeschaltet (kein Print, kein Radio, kein TV) und Fokus voll auf Social Media", "Langjährige, intensive Zusammenarbeit mit stabilen Umsätzen und Gewinnen trotz schwieriger Marktlage"] },
  { id: "emmis-klossmasse", name: "Emmi's Kloßmasse", branche: "Food & Beverage", ort: "Franken, Bayern", lat: 49.45, lng: 11.08, beschreibung: "Kultmarke aus dem Osten — dort extrem bekannt und seit Generationen in den Haushalten verankert.", erfolge: ["50 Mio. Views plattformübergreifend in den ersten 6 Monaten seit Start", "20.000 Follower aufgebaut", "Gesteigerter Umsatz im LEH", "Nur 2–3 Stunden monatlicher Zeitaufwand seitens des Unternehmens"] },
  { id: "maintal-konfitueren", name: "Maintal Konfitüren", branche: "Food & Beverage", ort: "Haßfurt", lat: 50.03, lng: 10.52, beschreibung: "Größter Konfitüren- und Marmeladenhersteller in Bayern — Familienunternehmen seit 1886, exportiert in 29 Länder weltweit.", erfolge: ["Außenpräsenz deutlich verbessert", "Hochwertiges Videomarketing implementiert", "Reichweite innerhalb der ersten 30 Tage der Zusammenarbeit um 76 % gesteigert", "Mehr Bewerbungen durch Employer-Branding-Kampagne"] },
  { id: "metzgerei-boneberger", name: "Metzgerei Boneberger", branche: "Food & Beverage", ort: "München", lat: 48.14, lng: 11.58, beschreibung: "Eine der größten inhabergeführten Metzgereiketten Bayerns — über 25 Filialen rund um München und über 500 Mitarbeiter.", erfolge: ["7 Fachverkäufer besetzt", "3 Fleischer besetzt", "Gesamte Besetzung in nur 4 Monaten abgeschlossen"] },
  { id: "metzgerei-walk", name: "Metzgerei Walk", branche: "Food & Beverage", ort: "Nürnberg", lat: 49.45, lng: 11.08, beschreibung: "Große Metzgereikette im Raum Nürnberg und Umgebung mit weit über 300 Mitarbeitern und 26 Filialen.", erfolge: ["7 Fachverkäufer für neu eröffnete Filiale besetzt"] },
  { id: "baecker-feihl", name: "Der Bäcker Feihl", branche: "Food & Beverage", ort: "Nürnberg", lat: 49.46, lng: 11.07, beschreibung: "Mit knapp 40 Filialen und rund 400 Mitarbeitern eine der größten Handwerksbäckereien der Metropolregion Nürnberg.", erfolge: ["20.000 Follower aufgebaut", "Seit über 1 Jahr in Zusammenarbeit", "Online-Shop von rund 10 Bestellungen pro Monat auf rund 10 Bestellungen pro Tag gesteigert", "Plattformübergreifend über 35 Mio. Views erreicht", "132 Bewerbungen generiert und 14 Einstellungen im Bereich Verkauf", "Nachweislich gesteigerte Umsätze auch im Ladengeschäft"] },
  { id: "guerilla-groestl", name: "Guerilla Gröstl", branche: "Food & Beverage", ort: "Nürnberg", lat: 49.45, lng: 11.09, beschreibung: "Kultige Streetfood-Marke, Foodtruck und Restaurants in Nürnberg", erfolge: ["Im Gastro-Bereich während der Zusammenarbeit deutlich mehr Ladenbesucher", "Bekanntheit stark gesteigert — auch als verhältnismäßig kleines Unternehmen"] },
  { id: "bistro-gourmet", name: "Bistro Gourmet (Selgros)", branche: "Food & Beverage", ort: "Deutschland", lat: 51.16, lng: 10.45, beschreibung: "Gastronomie-Erlebniskonzept der Transgourmet-Gruppe in den Selgros-Märkten — deutschlandweit.", erfolge: ["Hochwertige Videoqualität für die Zusammenarbeit umgesetzt", "Rund 100 zusätzliche Bistro-Gäste pro Monat"] },
  { id: "ofenhaus-doerfler", name: "Ofenhaus Dörfler", branche: "Ofenbau", ort: "Bayern", lat: 48.5, lng: 11.5, beschreibung: "Exklusiver und renommierter Ofenbauer — setzt weltweit Projekte um und zählt zu den führenden Adressen der Branche.", erfolge: ["Seit Mai 2025 in intensiver Zusammenarbeit", "Von 2.500 auf über 15.000 Abonnenten gewachsen", "Über 20 Mio. organische Aufrufe generiert", "Mehr als 150 qualifizierte Leads gewonnen", "Heute kommen fast 70 % aller Anfragen über Social Media"] },
  { id: "bachmann-kg", name: "Bachmann KG", branche: "Ofenbau", ort: "Rhein-Main / Bayern", lat: 50.11, lng: 8.68, beschreibung: "Exklusiver Ofenbauer mit Fokus auf handgefertigten Einzelanlagen und zeitlosen Designklassikern.", erfolge: ["80.000 EUR mehr Umsatz in den ersten 3 Monaten", "Von 0 auf über 10 Anfragen pro Monat"] },
  { id: "bk-kamin", name: "b+k Kamin- und Wohnstudio", branche: "Ofenbau", ort: "Deutschland", lat: 49.0, lng: 10.5, beschreibung: "Familiengeführtes Kamin- und Wohnstudio in zweiter Generation", erfolge: ["Durchschnittlich 12 Anfragen pro Monat generiert", "Rund 50.000 EUR mehr Umsatz in den ersten 3 Monaten"] },
  { id: "kerstens-kamine", name: "Kerstens Kamine", branche: "Ofenbau", ort: "Braunschweig / Gifhorn", lat: 52.26, lng: 10.52, beschreibung: "Einer der größten unabhängigen Kaminfachhändler Norddeutschlands, über 30 Jahre Erfahrung", erfolge: ["4 Neukunden in den ersten 2 Monaten durch unser Anfragesystem", "Erfolge in einem stark umkämpften Marktumfeld"] },
  { id: "nuernberger-klinik", name: "Nürnberger Klinik", branche: "Medizin", ort: "Nürnberg", lat: 49.45, lng: 11.08, beschreibung: "Eines der führenden Zentren für plastische Chirurgie in Bayern", erfolge: ["Dutzende Patienten über Werbeanzeigen gewonnen", "Sogar ein qualifizierter Arzt erfolgreich eingestellt — in dieser Marktlage extrem schwierig", "Bereits sechsstelliges Auftragsvolumen über gewonnene Patienten"] },
  { id: "proepster-gmbh", name: "Pröpster GmbH", branche: "Industrie", ort: "Bayern", lat: 48.8, lng: 11.2, beschreibung: "Europaweit führend im Blitz- und Überspannungsschutz — dreistellige Millionenumsätze.", erfolge: ["Diverse Feinwerkmechaniker, Industriemechaniker und Betriebselektriker erfolgreich besetzt"] },
  { id: "immovaria", name: "Immovaria", branche: "Immobilien", ort: "Nürnberg", lat: 49.45, lng: 11.08, beschreibung: "Bauträger & Projektentwicklung — denkmalgeschützte Immobilien, Bilanzsumme über 65 Mio. EUR", erfolge: ["[PLACEHOLDER - Reichweite/Views]", "[PLACEHOLDER - Anfragen/Leads]", "[PLACEHOLDER - Ergebnis]"] },
  { id: "stocker-einrichtung", name: "Stocker Einrichtungs GmbH", branche: "Einrichtung", ort: "Erlangen", lat: 49.59, lng: 11.0, beschreibung: "Exklusives Möbelhaus in Erlangen — Full-Service Möbel- und Einrichtungskonzept.", erfolge: ["Über 70 Leads in 6 Monaten generiert", "Mehrfach Abschlüsse im fünfstelligen Bereich", "Diverse hochwertige Sofas und teilweise ganze Hausausstattungen verkauft"] },
  { id: "luger-elektrotechnik", name: "Luger Elektrotechnik", branche: "Handwerk", ort: "Bayern", lat: 49.2, lng: 11.3, beschreibung: "Elektrotechnik-Fachbetrieb, regionaler Handwerksbetrieb", erfolge: ["10 Bewerbungen generiert", "1 Einstellung erfolgreich besetzt"] },
];
