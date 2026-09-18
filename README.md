# collabatwork.ch — Website

Statische Website, kein Server-Code. Alle Dateien dieses Ordners ins Web-Verzeichnis
hochladen, fertig. Hosting: Infomaniak, Schweiz.

## Dateien

| Datei | Inhalt |
| --- | --- |
| `index.html` | Startseite Deutsch — Einstiegsseite von collabatwork.ch |
| `en.html` | Startseite Englisch |
| `werte.html` | Werteseite Deutsch — sechs Grundsätze der Zusammenarbeit |
| `values.html` | Werteseite Englisch |
| `agb.html` | Allgemeine Geschäftsbedingungen (DE) |
| `terms.html` | Terms and conditions (EN) |
| `rechtliches.html` | Impressum und Datenschutz (DE) |
| `legal.html` | Legal notice and privacy (EN) |
| `style.css` | Übergreifende Regeln: Grundlagen, mobiles Menü, Hover, Rechtsseiten |
| `site.js` | Mobiles Menü und Kontaktformular |
| `timo.webp` | Porträt, 533 × 800 px |
| `simpliq.png` | Logo des Partners, im Partnerabschnitt der Startseiten |
| `404.html` | Fehlerseite, zweisprachig — bei Infomaniak als ErrorDocument eintragen |
| `vorschau.png` | Vorschaubild beim Teilen des Links, 1200 × 630 px |
| `sitemap.xml` | die vier öffentlichen Seiten für Suchmaschinen |
| `robots.txt` | erlaubt alles ausser Impressum, Datenschutz und AGB |

Gesamtgrösse rund 260 KB. Keine externen Verbindungen: keine Google Fonts, kein
Analyse-Werkzeug, keine Cookies. Das ist die Grundlage für die Aussagen im
Datenschutztext — bitte beim Ergänzen von Diensten dort nachführen.

## Seitenstruktur

Deutsch und Englisch sind Zwillinge. **Jede inhaltliche Änderung gehört in beide
Dateien.** Die Sprachpaare: `index` ↔ `en`, `werte` ↔ `values`,
`agb` ↔ `terms`, `rechtliches` ↔ `legal`.

```
index.html / en.html          Startseite
  ├── werte.html / values.html    verlinkt aus dem Angebot und der Fusszeile
  ├── agb.html / terms.html       Fusszeile
  └── rechtliches.html / legal.html   Fusszeile (Datenschutz über #datenschutz / #privacy)
```

## Aufbau der Startseite

Oben im Dokument steht ein Kopfkommentar, vor jedem Abschnitt eine Marke:

1. Kopfzeile
2. Startbereich — Signet als Wasserzeichen, Schlagzeile, zwei Knöpfe, Angebotsleiste
3. Warum — Antrieb (Haarlinie oben, sonst dieselbe Fläche wie der Startbereich)
4. Kommt Ihnen bekannt vor? — drei Situationen
5. Wie — vier Schritte (Kennenlernen, Konzept, Schulung, Dranbleiben)
6. Was — Standortbestimmung, drei Angebote, Verweis auf die Werte
7. Über mich — Porträt, Werdegang, Slogan als Abschluss
8. Referenzen (noch Platzhalter in eckigen Klammern)
9. Partner — Netzwerk, dazu simpliq gmbh als Partner für die Technik
10. Kontakt — Angaben und Formular
11. Fusszeile

Die drei Angebote: **01 Teams-Grundlagen**, **02 Struktur, Ablage und Externe**,
**03 Teams-Telefonie**. Nummern und Reihenfolge hängen zusammen — wird ein Angebot
entfernt, sind die folgenden Nummern anzupassen, ebenso die Auswahl im Formular
(`<select name="thema">`).

## Aufbau der Werteseite

Sechs Zeilen, jede in drei Spalten: links Nummer, Name und Kernsatz, daneben
«Was ich einbringe» und «Was es von Ihnen braucht». Dieselbe Form wie die
Angebotszeilen der Startseite. Die erste Zeile trägt eine kräftige Haarlinie
`#1A1917`, alle weiteren `#E2DDD4`. Die Seite braucht `site.js` nicht.

## Gestaltung

- **Schrift**: Systemschrift des Geräts (San Francisco, Segoe UI, Roboto). Nichts wird geladen.
- **Farben**: Sand `#FAF7F2` als Grund, weisse Bänder `#FFFFFF` zur Gliederung,
  Text `#1A1917`, Fliesstext `#3D3B36`, leise Angaben `#8E8B84`,
  Haarlinien `#E2DDD4`, Signalfarbe der Marke `#C4653A`, dunkles Feld `#1A1917`.
- **Raster**: Inhaltsbreite maximal 1180 px, Seitenrand `clamp(20px,4vw,40px)`,
  Abschnittsabstand `clamp(56px,8vw,96px)`.
- **Radien**: 9 px an Feldern und Knöpfen, 12 px am Bild, 16 px an Kästen.
- **Gliederung**: Farbwechsel zwischen Sand und Weiss trennt die Abschnitte; keine
  zwei gleichen Flächen stossen aneinander. Reihenfolge: Sand (Start, Warum) ·
  Weiss (Situationen) · Sand (Wie) · Weiss (Angebot) · Beige `#F2E9DF` (Über mich) ·
  Sand (Partner) · Weiss (Kontakt).
  Haarlinien nur dort, wo sie etwas zusammenhalten — nicht als Dekoration.
- **Umbruchpunkt**: 860 px. Darunter erscheint der Menüknopf, die Navigation wird
  ausgeblendet, der Sprachwechsel bleibt als eigener Knopf daneben sichtbar.

Die Stile stehen absichtlich inline im Markup. Grund: die Seite wird ohne zweite
Netzanfrage dargestellt. `style.css` enthält nur, was inline nicht geht —
Grundlagen, Zustände beim Überfahren, das mobile Menü und die Rechtsseiten.

## Kontaktformular

Kein PHP, kein Formulardienst. Beim Absenden setzt `site.js` aus den Feldern eine
Nachricht zusammen und öffnet sie über `mailto:` im E-Mail-Programm des Besuchers.
Abgeschickt wird sie erst dort — darum steht der Hinweis unter dem Knopf
hervorgehoben in Rostorange `#A34E29`. Beschriftungen für Betreff und Zeilen
stehen im Attribut `data-labels` am `<form>`-Element, die Empfängeradresse in
`data-mailto`.

Ein verstecktes Feld `website` dient als Köder gegen automatische Einsendungen:
ist es gefüllt, bricht das Skript ab.

Sobald PHP verfügbar ist, kann das Formular auf einen echten Versand umgestellt
werden. Dann ist der Absatz «Kontaktformular» im Datenschutz anzupassen.

## Sprache und Ansprache

Deutsch ist die Einstiegsseite, beide Sprachen verweisen mit `hreflang`
gegenseitig aufeinander. Durchgehend Sie-Form, auch auf der Werteseite.
Schreibweise der Marke immer klein: **collabatwork**. Kontaktadresse überall
`info@collabatwork.ch`.

## Offene Punkte

- **Referenzen**: der Abschnitt ist vor dem Live-Gang entfernt worden, weil keine
  freigegebenen Zitate vorlagen. Das Markup liegt als `referenzen-de.html.txt`
  und `referenzen-en.html.txt` im Projektstamm und kann mit echten Namen wieder
  zwischen «Über mich» und «Partner» eingesetzt werden; die Nummern 05 und 06
  wandern dann auf 06 und 07.
- **AGB und Datenschutz** sollten rechtlich geprüft werden, besonders Haftung,
  Absagefristen und Gerichtsstand.
- **Handelsregister**: die Zeile «Nicht im Handelsregister eingetragen» in
  `rechtliches.html` und `legal.html` gegen Eintrag und UID tauschen, sobald
  der Auszug da ist. Firma: «collabatwork - Timo Steinlin», Sitz Köniz.
- **Auftragsbearbeiter**: der Datenschutz nennt agency-atelier für Offerten,
  Zeiterfassung und Fakturierung. Bei einem Anbieterwechsel diesen Abschnitt in
  `rechtliches.html` und `legal.html` anpassen (die AGB nennen keinen Namen).
- **Rechtsseiten** tragen `<meta name="robots" content="noindex">`, erscheinen
  also nicht in Suchergebnissen. Startseiten und Werteseiten sind indexiert.

## Arbeitsfassungen

Die Seiten entstehen aus `collabatwork DE v4.dc.html` und
`collabatwork EN v4.dc.html` im übergeordneten Projekt. Änderungen dort zuerst,
danach in dieses Paket übertragen. Beide Wege führen zum selben Markup; die
Dateien hier sind die, die hochgeladen werden.
