# collabatwork.ch — Website

Statische Website, kein Server-Code. Alles im Ordner hochladen, fertig.

## Dateien

| Datei | Inhalt |
| --- | --- |
| `index.html` | Startseite Deutsch |
| `en.html` | Startseite Englisch |
| `rechtliches.html` | Impressum und Datenschutz (DE) |
| `legal.html` | Legal notice and privacy (EN) |
| `style.css` | Übergreifende Regeln: Grundlagen, mobiles Menü, Hover, Rechtsseiten |
| `site.js` | Mobiles Menü und Kontaktformular |
| `timo.webp` | Porträt, 533 × 800 px |

Gesamtgrösse rund 175 KB. Keine externen Verbindungen: keine Google Fonts, kein
Analyse-Werkzeug, keine Cookies. Das ist die Grundlage für die Aussagen im
Datenschutztext — bitte beim Ergänzen von Diensten dort nachführen.

## Wo was steht

Beide Startseiten haben denselben Aufbau, oben im Dokument als Kommentar
beschrieben, dazu eine Marke vor jedem Abschnitt:

1. Kopfzeile
2. Startbereich (Schlagzeile, zwei Knöpfe, Angebotsleiste)
3. Warum — Antrieb
4. Zitatfeld (dunkel)
5. Kommt Ihnen bekannt vor? — drei Situationen
6. Wie — vier Schritte
7. Was — drei Angebote
8. Über mich
9. Referenzen (noch Platzhalter in eckigen Klammern)
10. Partner (noch Platzhalter)
11. Kontakt
12. Fusszeile

## Gestaltung

- **Schrift**: Systemschrift des Geräts (San Francisco, Segoe UI, Roboto). Nichts wird geladen.
- **Farben**: Sand `#FAF7F2` als Grund, weisse Bänder `#FFFFFF` zur Gliederung,
  Text `#1A1917`, Fliesstext `#3D3B36`, leise Angaben `#8E8B84`,
  Haarlinien `#E2DDD4`, Signalfarbe der Marke `#C4653A`, dunkles Feld `#1A1917`.
- **Raster**: Inhaltsbreite maximal 1180 px, Seitenrand `clamp(20px,4vw,40px)`,
  Abschnittsabstand `clamp(56px,8vw,96px)`.
- **Radien**: 9 px an Feldern und Knöpfen, 12 px am Bild, 16 px an Kästen.
- **Umbruchpunkt**: 860 px. Darunter erscheint der Menüknopf, die Navigation wird ausgeblendet.

Die Stile stehen absichtlich inline im Markup. Grund: die Seite wird ohne zweite
Netzanfrage dargestellt. `style.css` enthält nur, was inline nicht geht —
Grundlagen, Zustände beim Überfahren, das mobile Menü und die Rechtsseiten.

## Kontaktformular

Kein PHP, kein Formulardienst. Beim Absenden setzt `site.js` aus den Feldern eine
Nachricht zusammen und öffnet sie über `mailto:` im E-Mail-Programm des Besuchers.
Abgeschickt wird sie erst dort. Beschriftungen für Betreff und Zeilen stehen im
Attribut `data-labels` am `<form>`-Element, die Empfängeradresse in `data-mailto`.

Ein verstecktes Feld `website` dient als Köder gegen automatische Einsendungen:
ist es gefüllt, bricht das Skript ab.

Sobald PHP verfügbar ist, kann das Formular auf einen echten Versand umgestellt
werden. Dann ist der Absatz «Kontaktformular» im Datenschutz anzupassen.

## Sprachen

Beide Seiten verweisen mit `hreflang` gegenseitig aufeinander, Deutsch ist die
Startseite. Jede inhaltliche Änderung gehört in beide Dateien.

## Offene Punkte

- Referenzen und Partner sind Platzhalter in eckigen Klammern. Solange sie stehen,
  bleibt das Entwurfsband oben sichtbar.
- Das Entwurfsband ist der erste `<div>` im `<body>`, zum Entfernen ersatzlos löschen.
