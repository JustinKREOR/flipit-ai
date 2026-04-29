# FlipIt AI — Site

Landing page de FlipIt AI : un site statique multilingue (FR/EN) avec versions standalone autonomes pour chaque page légale.

## Structure

- `flipit-landing-standalone.html` — landing principale, totalement autonome (servie sur `/`)
- `landing.html` + `src/*.jsx` — version composable React, compilée côté navigateur via Babel-standalone
- `*-standalone.html` — pages legal (privacy, terms, cookies, mentions légales) entièrement autonomes
- `uploads/` — PDFs des Conditions Générales et de la Politique de Confidentialité
- `vercel.json` — routes propres (`/privacy`, `/terms`, etc.) et headers de cache

## Routes (après déploiement Vercel)

| URL | Fichier servi |
|---|---|
| `/` | `flipit-landing-standalone.html` |
| `/landing` | `landing.html` (version React + Babel) |
| `/privacy` | `privacy-standalone.html` |
| `/terms` | `terms-standalone.html` |
| `/cookies` | `cookies-standalone.html` |
| `/mentions-legales` | `mentions-legales-standalone.html` |
| `/conditions-generales` | `terms-standalone.html` |
| `/politique-de-confidentialite` | `privacy-standalone.html` |

## Développement local

Aucun build n'est nécessaire — c'est un site purement statique. Pour le servir en local :

```bash
python3 -m http.server 8000
# puis ouvrir http://localhost:8000/flipit-landing-standalone.html
```

Ou avec Node :

```bash
npx serve .
```

## Déploiement

Le site est déployé automatiquement sur Vercel à chaque push sur la branche principale.

## Stack

- HTML/CSS/JS vanilla pour les pages standalone
- React 18 + Babel-standalone côté navigateur pour la version composable
- Pas de bundler, pas de Node requis en production
