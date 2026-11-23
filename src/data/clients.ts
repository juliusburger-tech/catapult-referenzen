export type Branche =
  | "Food & Beverage"
  | "Ofenbau"
  | "Medizin"
  | "Industrie"
  | "Immobilien"
  | "Einrichtung"
  | "Handwerk"
  | "GaLaBau"
  | "Dienstleistung"
  | "Politik"
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
  "GaLaBau",
  "Dienstleistung",
  "Politik",
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
  // --- Neu ergänzt (Nov 2026) ---
  { id: "jw-doescher", name: "J.W. Döscher", branche: "Ofenbau", ort: "Beverstedt", lat: 53.43, lng: 8.82, beschreibung: "Traditionsreiches Ofenhaus in Norddeutschland — seit rund 210 Jahren am Markt.", erfolge: ["Über 20 Leads in den ersten 30 Tagen", "Rund 40 Anfragen in den ersten 10 Tagen der neuen Kampagne", "2 Öfen direkt verkauft"] },
  { id: "bentlage-kamine", name: "Bentlage Kamine", branche: "Ofenbau", ort: "Süddeutschland", lat: 48.4, lng: 10.0, beschreibung: "Kamin- und Ofenstudio in Süddeutschland.", erfolge: ["Über 90 Leads in 3 Monaten", "Über 40.000 EUR Auftragsvolumen"] },
  { id: "schornsteintechnik-neumarkt", name: "Schornsteintechnik Neumarkt (Rohrrino)", branche: "Ofenbau", ort: "Neumarkt i.d.OPf.", lat: 49.28, lng: 11.46, beschreibung: "Spezialist für Schornsteintechnik mit eigener Marke Rohrrino.", erfolge: ["Über 300 Leads in 3 Monaten", "Mehrfach fünfstellige Auftragsvolumen"] },
  { id: "ofenfeuer-soutschek", name: "Ofenfeuer Soutschek", branche: "Ofenbau", ort: "Deutschland", lat: 49.3, lng: 11.9, beschreibung: "Ofen- und Kaminbaubetrieb.", erfolge: ["Über 60 Anfragen in 3 Monaten", "Mehrere Ofenobjekte verkauft"] },
  { id: "edeka-rees", name: "Edeka Rees", branche: "Food & Beverage", ort: "Deutschland", lat: 51.76, lng: 6.4, beschreibung: "EDEKA-Kaufmann mit über 10 Märkten und rund 800 Mitarbeitern.", erfolge: ["Mitarbeitergewinnung und Marketing aus einer Hand", "23 Mitarbeiter eingestellt"] },
  { id: "gans-brauerei", name: "Gans Brauerei", branche: "Food & Beverage", ort: "Raum Regensburg", lat: 49.02, lng: 12.1, beschreibung: "Familienbrauerei bei Regensburg.", erfolge: ["1 Braumeister eingestellt", "1 Bürokraft eingestellt"] },
  { id: "original-berliner-doener", name: "Original Berliner Döner", branche: "Food & Beverage", ort: "Nürnberg", lat: 49.44, lng: 11.07, beschreibung: "Eine der bekanntesten Dönerketten Deutschlands.", erfolge: ["Mehrere Mio. Views erreicht", "Starke Absatzsteigerungen"] },
  { id: "he-schu", name: "He-Schu", branche: "Food & Beverage", ort: "Deutschland", lat: 50.5, lng: 10.0, beschreibung: "Familienbetrieb seit 1853 in 7. Generation — Halbfertigerzeugnisse für Konditoreien, Bäckereien und Gastronomie.", erfolge: ["Dutzende Paletten Ware an Bäckereien und Großhändler vermittelt", "Nach erfolgreicher B2B-Kampagne auf das Catapult Lead-Up-Paket erweitert"] },
  { id: "travellunch", name: "Travellunch", branche: "Food & Beverage", ort: "Deutschland", lat: 51.0, lng: 10.0, beschreibung: "Marke für Outdoor- und Expeditionsnahrung.", erfolge: ["Markenaufbau auf Social Media begleitet"] },
  { id: "metzgerei-picard", name: "Metzgerei Picard", branche: "Food & Beverage", ort: "Deutschland", lat: 50.0, lng: 9.0, beschreibung: "Inhabergeführte Metzgerei.", erfolge: ["6-monatige Zusammenarbeit gestartet"] },
  { id: "distler-vv", name: "Distler Vermögensverwaltung", branche: "Immobilien", ort: "Leipzig", lat: 51.34, lng: 12.37, beschreibung: "Vermögensverwaltung mit Fokus auf Kapitalanlageimmobilien in Leipzig.", erfolge: ["Leadpreis um 300 % gesenkt", "2,4 Mio. EUR Dealvolumen in 3 Monaten"] },
  { id: "joko-dienstleistungen", name: "Joko Dienstleistungen", branche: "GaLaBau", ort: "Nürnberg", lat: 49.47, lng: 11.1, beschreibung: "Garten- und Landschaftsbau im Raum Nürnberg.", erfolge: ["47 Bewerbungen auf die Landschaftsgärtner-Stelle"] },
  { id: "bronder-gartenbau", name: "Bronder Gartenbau", branche: "GaLaBau", ort: "Deutschland", lat: 50.2, lng: 8.5, beschreibung: "Garten- und Landschaftsbaubetrieb.", erfolge: ["3-monatige Leadgenerierung für Neukunden abgeschlossen"] },
  { id: "blaza-gartenbau", name: "Blaza Gartenbau", branche: "GaLaBau", ort: "Deutschland", lat: 49.8, lng: 9.9, beschreibung: "Garten- und Landschaftsbaubetrieb.", erfolge: ["Leadgenerierung ab Januar 2027"] },
  { id: "tuttahs-meyer", name: "TUTTAHS & MEYER Ingenieurgesellschaft", branche: "Dienstleistung", ort: "Aachen / Bochum / Berlin", lat: 50.78, lng: 6.08, beschreibung: "Ingenieurbüro für Siedlungswasserwirtschaft mit rund 84 Mitarbeitern an mehreren Standorten.", erfolge: ["Mitarbeitergewinnung für eine seit rund 2 Jahren offene Stelle (Konstrukteur/Bauzeichner)", "Seit September 2026 in Zusammenarbeit"] },
  { id: "telis-oppelt", name: "Telis Finanz — Martin Oppelt", branche: "Dienstleistung", ort: "Burgbernheim", lat: 49.45, lng: 10.32, beschreibung: "Leiter mehrerer Telis-Finanz-Standorte in Mittelfranken.", erfolge: ["Recruiting von selbstständigen Vertriebspartnern (§34d) seit November 2026", "Einzugsgebiet Nürnberg, Fürth und Würzburg"] },
  { id: "expect-leads", name: "Expect Leads GmbH", branche: "Dienstleistung", ort: "Deutschland", lat: 51.5, lng: 9.5, beschreibung: "Dienstleister im Bereich Leadgenerierung.", erfolge: ["Employer Branding mit quartalsweisem Drehtag", "Wöchentlich 1 Reel und 1 Foto"] },
  { id: "rechtsklarheit", name: "Rechtsklarheit", branche: "Dienstleistung", ort: "Deutschland", lat: 52.0, lng: 10.5, beschreibung: "Personal-Brand-Account eines Rechtsanwalts zu Recht und Steuergestaltung.", erfolge: ["Von 0 auf 15.000 Follower in rund 5 Monaten", "Rein beratende Zusammenarbeit: Strategie, Formate und Videostrukturen"] },
  { id: "neotreat", name: "neotreat", branche: "Medizin", ort: "Dortmund / Münster", lat: 51.51, lng: 7.47, beschreibung: "Anbieter von Lymphdrainage-Hosensystemen mit eigenen Bodyforming-Studios.", erfolge: ["Kundengewinnung für den deutschlandweiten Geräteverkauf gestartet"] },
  { id: "csu-neumarkt", name: "CSU Neumarkt", branche: "Politik", ort: "Neumarkt i.d.OPf.", lat: 49.29, lng: 11.47, beschreibung: "Kreisverband der CSU in Neumarkt i.d.OPf.", erfolge: ["Wahlkampf erfolgreich bis zum Sieg begleitet"] },
];
