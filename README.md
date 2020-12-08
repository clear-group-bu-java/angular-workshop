# Angular Workshop

### Vorab installierte Software

- NodeJS (https://nodejs.org/en/): bitte aktuelle LTS Version 14.x installieren
  - danach `npm install -g nx`
- VSCode (https://code.visualstudio.com/): Fragen zu / Probleme bei anderen IDEs werden im Workshop nicht beantwortet :)
  - Wenn das unten genannte Projekt zum ersten Mal in VSCode geöffnet wird, schlägt es die Installation diverser PLugins vor - bitte "Ja" sagen
- Stoplight Studio (https://stoplight.io/studio/): Verwenden wir zur Verwaltung der OpenAPI Spec
- Ein vernünftiges Terminal, vorzugsweise mit Tabs, alternativ das Terminal in VSCode. Wir werden mehrere Tabs offen haben.
- Aktueller Chrome und/oder aktueller Edge (Chromium Edge)

## Installation

- Git Repo auschecken
- im ausgecheckten Ordner
  - `npm install`
  - `nx serve`
  - auf zweitem Terminal: `npm run api:people:serve`
  - http://localhost:4200/ im Browser öffnen
  - Prüfen ob die Anwendung läuft und Daten angezeigt werden (Navigation: Addresses)
  - Bitte nicht verunsichern lassen, die gestartete fake API ignoriert was man ihr schickt und liefert zufällige Werte zurück. Falls jemand versucht eine Adresse anzulegen ...

## Vorwissen

Bitte die folgenden Bibliotheken/ Tools / Konzepte vor dem Workshop ansehen.
Sofern nichts anderes angegeben, sollten ihr zumindest wissen, worum es sich dabei handelt und wofür man es braucht.

- https://ngrx.io/ Zentrale Bibliothek, die wir für die Datenschicht verwenden. Wer damit noch gar nicht gearbeitet hat, bitte zumindest das Tutorial unter https://ngrx.io/guide/store durcharbeiten (Leere ng app, Installation von NGRX, dann Tutorial).
  - Wer ngrx schon beherrscht, kann sich gerne noch optional https://immerjs.github.io/immer/docs/introduction ansehen.
- https://angular.io/guide/router wir werden im Workshop einige fortgeschrittene Funktionen des Angular Routers besprechen. Grundlagen wie eine Route mit Komponente anlegen oder Links im Template werden vorausgesetzt.
- https://nx.dev/ Statt der reinen @angular/cli verwenden wir NX zur Verwaltung des Monorepos. Bitte https://nx.dev/latest/angular/cli/overview durchlesen, die NX CLI installieren und die wichtigsten Kommandos ansehen.
- OpenAPI Spec: Einen grober Überblick, was das eigentlich ist wäre gut. Gute Intro: https://medium.com/@amirm.lavasani/restful-apis-tutorial-of-openapi-specification-eeada0e3901d
- https://material.angular.io/ wir werden uns nicht groß um Komponenten Bibliotheken kümmern, sondern uns auf die Datenschicht und Architektur konzentrieren. Um überhaupt etwas vernünftig anzeigen zu können (Navi, Tabellen, Formulare ...) verwenden wir Angular Material.
