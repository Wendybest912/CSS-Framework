# Portfolio Personnel 

## Informations personnelles
**Nom :** Lin 
**Prenom :** Mathias 
**Projet :** Intégration d'un portfolio personnel web responsive avec Bootstrap

---

## 📸 Aperçu du projet

### Version Desktop
![Hero Section](./screenshots/desktop-hero.png)
![Portfolio Section](./asset_README/desktop_portfolio.gif)

### Version Mobile
![Mobile View](./screenshots/mobile-view.png)

> *Note : Les captures d'écran sont disponibles dans le dossier `/screenshots`*

---

## 🎨 Maquette Figma utilisée

**Lien vers la maquette :** [Personal Website Portfolio - Figma Community](https://www.figma.com/community/file/1014486848877637619/personal-website-portfolio)

### Captures de la maquette originale
![Maquette Desktop](./screenshots/figma-desktop.png)
![Maquette Mobile](./screenshots/figma-mobile.png)

J'ai choisi cette maquette pour son design épuré en dark mode avec des accents orange, parfait pour un portfolio UI/UX designer. La structure est claire et moderne, ce qui permet de mettre en valeur les projets et compétences.

---

## 🛠️ Technologies utilisées

### Langages
- **HTML5** - Structure sémantique du site
- **CSS3** - Styles personnalisés et animations
- **JavaScript** (Vanilla) - Interactions et smooth scroll

### Framework CSS
- **Bootstrap 5.3.2** - Framework principal pour la mise en page responsive
  - Système de grille (rows, cols)
  - Composants (navbar, cards, forms)
  - Utilities classes

### Bibliothèques externes
- **Font Awesome 6.4.0** - Icônes (réseaux sociaux, services)
- **Google Fonts** - Typographie

### Hébergement
- **GitHub Pages** - Déploiement du site en production

---

## 📋 Sections du portfolio

### ✅ Sections obligatoires implémentées

1. **Accueil (Hero)**
   - Présentation visuelle avec photo
   - Titre et sous-titre
   - Boutons d'action (Hire Me, Download CV)
   - Statistiques (5+ années d'expérience, 20+ projets, 80+ clients)
   - Liens vers réseaux sociaux

2. **Services**
   - 6 cartes de services avec icônes
   - UI/UX Design, Mobile Design, Web Design, Wireframing, Branding, Design Strategy
   - Effet hover sur les cartes

3. **À propos**
   - Section avec photo et texte de présentation
   - Description du parcours et de la philosophie de travail

4. **Compétences**
   - 4 cercles de progression (UI Design 95%, UX Research 90%, Figma 88%, Prototyping 92%)
   - Visualisation graphique avec CSS conic-gradient

5. **Portfolio**
   - Système de filtres (All, Website Design, App Mobile Design, App Desktop, Branding)
   - Grille de 9 projets minimum
   - Cards avec aperçu image + nom du projet + catégorie
   - Effet hover avec translation

6. **Contact**
   - Formulaire complet avec bordure pointillée (design original)
   - Champs : Name, Email, Phone Number, Service Of Interest, Timeline, Project Details
   - Tous les champs sont obligatoires (validation HTML5)
   - Bouton Send avec style outline

7. **Footer**
   - Logo et liens réseaux sociaux
   - Copyright

---

## 🎯 Points techniques respectés

### Responsive Design
- ✅ Smartphone (< 576px)
- ✅ Tablette (768px - 992px)
- ✅ Laptop (992px - 1200px)
- ✅ Desktop (> 1200px)
- ✅ Pas de scroll horizontal
- ✅ Menu hamburger fonctionnel sur mobile

### Accessibilité
- ✅ Balises sémantiques HTML5 (`<nav>`, `<section>`, `<footer>`)
- ✅ Attributs `alt` sur toutes les images
- ✅ Labels associés aux champs de formulaire
- ✅ Contrastes de couleurs respectés (texte blanc sur fond noir)
- ✅ Navigation au clavier possible

### Formulaire
- ✅ Validation HTML5 avec attributs `required`
- ✅ Types de champs appropriés (email, tel, text, select, textarea)
- ✅ Messages d'erreur natifs du navigateur
- ✅ Placeholder pour guider l'utilisateur

### Qualité du code
- ✅ Indentation cohérente
- ✅ Nommage des classes en anglais et explicite
- ✅ Pas de code mort ou commenté inutilement
- ✅ CSS organisé par sections
- ✅ JavaScript vanilla uniquement (pas de framework)

---

## 🚀 Installation et lancement en local

### Prérequis
- Un navigateur web moderne (Chrome, Firefox, Safari, Edge)
- Un éditeur de code (VS Code recommandé)

### Étapes d'installation

1. **Cloner le dépôt Git**
```bash
git clone https://github.com/Wendybest912/CSS-Framework.git
cd CSS-Framework
```

2. **Ouvrir le projet**
```bash
# Avec VS Code
code .

# Ou directement ouvrir index.html dans votre navigateur
```

3. **Lancer avec Live Server (recommandé)**
   - Installer l'extension "Live Server" dans VS Code
   - Clic droit sur `index.html` → "Open with Live Server"
   - Le site s'ouvre sur `http://localhost:5500`

4. **Ou simplement double-cliquer sur `index.html`**

> ⚠️ Note : Aucune installation de dépendances n'est nécessaire car Bootstrap et Font Awesome sont chargés via CDN.

---

## 📂 Structure du projet

```
CSS-Framework/
│
├── index.html              # Page principale du portfolio
├── README.md               # Documentation du projet
│
├── screenshots/            # Captures d'écran du projet
│   ├── desktop-hero.png
│   ├── desktop-portfolio.png
│   ├── mobile-view.png
│   ├── figma-desktop.png
│   └── figma-mobile.png
│
└── assets/                 # (Optionnel si fichiers locaux)
    ├── images/
    └── cv/
```

---

## 🌐 Déploiement en ligne

### Lien du site : [https://wendybest912.github.io/CSS-Framework/](https://wendybest912.github.io/CSS-Framework/)

### Méthode de déploiement
Le site est hébergé sur **GitHub Pages** :
1. Push du code sur la branche `main`
2. Activation de GitHub Pages dans les paramètres du repository
3. Le site est automatiquement déployé et accessible via l'URL ci-dessus

---

## 💡 Défis rencontrés et solutions

### 1. Fidélité pixel-perfect
**Défi :** Reproduire exactement les espacements et tailles de la maquette Figma.  
**Solution :** Utilisation des outils de mesure Figma et ajustement manuel des paddings/margins en CSS custom.

### 2. Cercles de compétences en CSS
**Défi :** Créer des cercles de progression sans bibliothèque externe.  
**Solution :** Utilisation de `conic-gradient` CSS avec variables custom properties pour les pourcentages.

### 3. Responsive du formulaire
**Défi :** Gérer la mise en page 2 colonnes → 1 colonne sur mobile.  
**Solution :** Système de grille Bootstrap avec `col-md-6` et `col-12`.

### 4. Section Portfolio avec filtres
**Défi :** Créer un système de filtres fonctionnel.  
**Solution :** JavaScript vanilla pour ajouter/retirer la classe `active` sur les boutons (filtrage visuel uniquement pour ce projet front-end).

---

## 📈 Améliorations futures possibles

- [ ] Ajouter des animations au scroll (AOS library ou Intersection Observer)
- [ ] Implémenter un vrai système de filtrage dynamique du portfolio
- [ ] Ajouter un backend pour traiter le formulaire de contact (Node.js + Nodemailer)
- [ ] Mode clair/sombre avec switch
- [ ] Intégration d'un CMS headless pour gérer les projets dynamiquement
- [ ] Optimisation SEO (meta tags, sitemap, robots.txt)
- [ ] Progressive Web App (PWA) avec Service Worker

---

## 📞 Contact

**Email :** wendy.best@example.com  
**LinkedIn :** [linkedin.com/in/wendybest](https://www.linkedin.com/in/wendybest)  
**GitHub :** [github.com/Wendybest912](https://github.com/Wendybest912)  
**Portfolio :** [wendybest912.github.io/CSS-Framework](https://wendybest912.github.io/CSS-Framework/)

---

## 📝 Licence

Ce projet est réalisé dans un cadre pédagogique pour l'École Hexagone - Formation 2FCSS.  
© 2024 Wendy Best - Tous droits réservés.

---

## 🙏 Remerciements

- **Chris Chevalier** - Formateur Framework CSS
- **Figma Community** - Pour la maquette de base
- **Bootstrap Team** - Pour le framework CSS
- **Unsplash** - Pour les images placeholder