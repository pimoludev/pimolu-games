# NEXUS · Pimolu Games

Template de site FPS en français, construit avec **Next.js 16**, **React 19**, **Pimolu UI** et **Lucide**. Direction artistique sombre, accents vert électrique, typographie Barlow Condensed et visuels cinématiques.

## Démarrer

```sh
npm install
npm run dev
```

Ouvrir http://localhost:3000. Pour la production : `npm run build`, puis `npm start`.

## Vérifications

`npm test` exécute quatre tests DOM : validation et persistance du profil, pistes du Battle Pass, galerie avec fermeture clavier, et transfert du mode choisi vers la configuration. `npx tsc --noEmit` vérifie les types et `npm run build` génère la version de production.

Les tests DOM ne remplacent pas une validation visuelle dans un navigateur. Cette dernière reste à effectuer sur les formats mobile, tablette et ordinateur.

## Expérience

- Navigation responsive avec menu mobile.
- Trois modes : Battle Royale, Multijoueur et Arène classée, avec fiches détaillées.
- Battle Pass Fracture avec comparaison des pistes gratuite et premium.
- Galerie de six images, navigation circulaire et visionneuse plein écran.
- Dossiers éditoriaux consultables et FAQ accessible au clavier.
- Configuration de joueur : validation du pseudo, plateforme et mode préféré, sauvegarde locale et restauration à la réouverture.
- Respect de `prefers-reduced-motion`, noms accessibles et fenêtres gérées par Pimolu UI.

Les éléments d’interface utilisent Pimolu UI : `Navbar`, `Button`, `Card`, `Badge`, `Dialog`, `Tabs`, `SegmentedControl`, `Input`, `Alert`, `Accordion`, `Lightbox`, `Image`, `Footer`, `Box`, `Heading`, `Paragraph`, `Text` et `Link`. Tous les contrôles interactifs proviennent de la bibliothèque ; la CSS ajoute la composition et la direction artistique. Les icônes sont fournies par Lucide. Aucun composant concurrent n’est utilisé.

## Personnaliser

- `app/game-data.ts` : modes, récompenses, galerie et dossiers.
- `app/page.tsx` : sections et interactions.
- `app/globals.css` : thème, composition et adaptations mobile/tablette/desktop.
- `public/images/` : visuels, conservés localement pour éviter le hotlinking.
- `app/layout.tsx` : polices et métadonnées. Définir `NEXT_PUBLIC_SITE_URL` avec l’URL réelle du déploiement pour les métadonnées Open Graph.

## Périmètre

NEXUS est un jeu fictif et ce dépôt est un **template de site**, sans moteur de jeu, matchmaking, téléchargement, authentification ou paiement. Les profils de démonstration sont enregistrés uniquement sous la clé `nexus-player` du `localStorage`. Aucune information n’est envoyée à un serveur.

Les images de Halo Infinite servent de références visuelles et ne sont pas des assets libres. Sources et conditions de réutilisation : [ASSETS.md](./ASSETS.md).
