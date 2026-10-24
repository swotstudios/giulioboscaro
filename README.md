# giulioboscaro

Sito personale statico (HTML + CSS, nessuna build).

- `index.html` — contenuti
- `styles.css` — stile
- `favicon.svg` — icona

Deploy: collega il repository GitHub a Vercel, framework "Other", nessun comando di build, output directory `.`.

## Manutenzione

Su `main` il sito è in manutenzione: `vercel.json` gira tutte le richieste su `manutenzione.html`.
Il sito vero si sviluppa sul branch `sviluppo` (Vercel ne pubblica un'anteprima protetta).

Per andare online: unire `sviluppo` in `main` ed eliminare `vercel.json` e `manutenzione.html`.
