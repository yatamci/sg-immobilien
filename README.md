# SG Immobilien – Sven Gubernator

Offizielle Website für Sven Gubernator Immobilien.

## Projektstruktur

```
sg-immobilien/
├── index.html          # Haupt-HTML-Datei (alle Tabs integriert)
├── assets/
│   ├── style.css       # Alle Stile
│   ├── main.js         # Tab-Navigation & Interaktivität
│   ├── logo.jpg        # SG-Logo
│   └── favicon.png     # Browser-Favicon
├── vercel.json         # Vercel-Konfiguration
└── README.md
```

## Deployment via Vercel

1. Repository auf GitHub pushen
2. Auf [vercel.com](https://vercel.com) einloggen
3. „Add New Project" → GitHub-Repo auswählen
4. Framework: **Other** (kein Build-Schritt nötig)
5. Root Directory: `/` (Standard)
6. Deploy klicken – fertig

## Eigene Domain einrichten

In Vercel unter **Settings → Domains** die gewünschte Domain eintragen,
z.B. `sg-immobilien.de`. Die DNS-Einträge werden dort angezeigt.

## Inhalte anpassen

- **Objekte:** In `index.html` die `.property-card-full`-Blöcke bearbeiten
- **Kontaktdaten:** Telefon, E-Mail und Adresse in Tab `#tab-contact` und `#tab-impressum` aktualisieren
- **Bilder:** Platzhalter durch echte Immobilienfotos ersetzen (`<div class="property-img">`)
- **Fotos:** Foto von Sven Gubernator in Tab `#tab-about` im `<div class="about-img-box">` einfügen
