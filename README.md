# Site RISO

Site web du **Réseau Ivoirien des Spécialistes de l'Orientation** — React, Vite et React Router.

Le code source est dans le dossier `riso-react/`. 
## Prérequis

- **Node.js 20 ou plus récent** ([nodejs.org](https://nodejs.org/)) — vérifiez avec `node -v`
- **npm** (inclus avec Node.js) — vérifiez avec `npm -v`
- Aucun fichier `.env` ni clé API n'est nécessaire

## Installation

```powershell
git clone https://github.com/yaoemma/projet_RISO1.git
cd projet_RISO1/riso-react
npm install
npm run dev
```

Sous macOS ou Linux, remplacez les commandes par l'équivalent dans votre terminal (`cd riso-react` depuis la racine du dépôt cloné).

Site local : [http://localhost:5173](http://localhost:5173)

Pour arrêter le serveur : `Ctrl + C` dans le terminal.

## Vérifier que tout fonctionne

```powershell
npm run build
npm run preview
```

Le build doit se terminer sans erreur. `preview` ouvre le site compilé (port affiché dans le terminal, souvent 4173).

## Scripts

| Commande | Description |
|----------|-------------|
| `npm run dev` | Serveur de développement |
| `npm run build` | Build de production (`dist/`) |
| `npm run preview` | Prévisualiser le build |
| `npm run lint` | Vérification du code (Oxlint) |

## Structure

```
└── riso-react/
    ├── public/images/        # Images et médias
    ├── src/
    │   ├── App.jsx           # Routes de l'application
    │   ├── pages/            # Pages (une par URL)
    │   ├── components/       # Blocs UI (layout, accueil, forum…)
    │   ├── data/             # Données écoles, universités, forum
    │   ├── hooks/            # Hooks React (carrousel, forum, scroll)
    │   ├── utils/            # Helpers (couleurs, initiales)
    │   └── styles/           # CSS global et forum
    └── .oxlintrc.json        # Configuration Oxlint
```

## Pages

| Route | Fichier | Contenu |
|-------|---------|---------|
| `/` | `pages/Home.jsx` | Accueil |
| `/apropos` | `pages/AproposPage.jsx` | À propos |
| `/membres` | `pages/MembresPage.jsx` | Membres |
| `/histoire` | `pages/HistoirePage.jsx` | Histoire |
| `/valeurs` | `pages/ValeursPage.jsx` | Valeurs |
| `/activites` | `pages/ActivitesPage.jsx` | Activités |
| `/nos-services` | `pages/NosServicesPage.jsx` | Services |
| `/actualites` | `pages/ActualitesPage.jsx` | Actualités |
| `/contact` | `pages/ContactPage.jsx` | Contact |
| `/ecoles-universites` | `pages/EcolesUniversitesPage.jsx` | Annuaire établissements |
| `/temoignages` | `pages/TemoignagesPage.jsx` | Témoignages |
| `/forum` | `pages/ForumEchange.jsx` | Forum d'échange |
| `/assemblee-generale` | `pages/AssembleeGenerale.jsx` | Assemblée générale |
| `/formation-esatic` | `pages/FormationEsatic.jsx` | Formation ESATIC |
| `/forum-emploi` | `pages/ForumEmploi.jsx` | Forum emploi |
| `/formation-ena` | `pages/FormationEna.jsx` | Formation ENA |

## Annuaire écoles & universités

Page : `/ecoles-universites` — composant `components/home/SchoolsPartners.jsx`.

**Onglets** : Universités · Primaire · Collège · Lycée

**Primaire / collège / lycée**
- 10 établissements affichés sur la grille
- Le reste dans « Voir plus » (liste paginée)
- Filtres : type (public, privé, catholique), ville, recherche
- Visuels générés (initiales + couleur) faute de logo officiel

**Universités**
- Données dans `data/ivorianInstitutions.js`
- Logos dans `public/images/schools/logos/`

**Données**

| Fichier | Rôle |
|---------|------|
| `data/ivorianSchools.js` | Fusion et listes (grille + « Voir plus ») |
| `data/excellenceSchools.js` | Établissements publics d'excellence |
| `data/primarySchools.js` | Écoles primaires privées et catholiques |
| `data/secondarySchools.js` | Collèges et lycées privés / catholiques |
| `data/menaSecondarySchools.json` | Collèges publics (source MENA) |
| `utils/schoolVisuals.js` | Couleurs et initiales des cartes écoles |

Sources officielles référencées sur la page : [MENA](https://rea.mendob.ci/sygdob/public/schoollocation), [data.gouv.ci](https://data.gouv.ci/).

## Déploiement

Depuis `riso-react/` :

```powershell
npm run build
```

Le dossier `dist/` contient les fichiers statiques à héberger. Configurez une redirection vers `index.html` pour les routes React (SPA).
