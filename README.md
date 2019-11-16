# calculatrice-jvd
Calculatrice digitalisée, responsive et accessible

## Contexte
- Diplôme : Master Développement Web
- Ecole : ECV Digital
- Année : 2017
- Lieu : Carrefour du Numérique, Cité des sciences et de l'industrie

## Collaboration
Equipe 1+1=11 : Vincent BANCQUART & Renaud BOURLON
![exemple](https://github.com/marinesl/calculatrice-jcvd/blob/master/capture-1.png)

## Préface :

### La calculatrice digitale
La calculatrice digitale fonctionne comme n’importe quelle calculatrice mais elle n’est disponible que sur un écran. Il faut travailler sur la dématérialisation et trouver les avantages qui en découlent : puissance de calcul, design, ...

### Skills :
- Algorithmie
- UX
- Programmation : utilisation des langages

## Les recherches :
- La documentation Bootstrap : [lien](http://getbootstrap.com/)
- Code des caractères pour la fonction keypress() : [lien](http://keycode.info/)
- Documentation du plugins JS -prefix-free : [lien](https://www.alsacreations.com/article/lire/1306-prefix-free-prefixes-CSS3.html)
- Tuto de réalisation d’une calculatrice en HTML / CSS / Jquery : [lien](https://www.codecademy.com/courses/web-intermediate-en-jfhjJ/0/1)
- Documentation sur l’interface d’une calculatrice : [lien](http://uxmovement.com/thinking/why-calculators-need-a-better-user-interface/
- Tuto de réalisation d’une calculatrice en Java : [lien](https://openclassrooms.com/courses/apprenez-a-programmer-en-java/tp-une-calculatrice)
- Tuto de réalisation d’une calculatrice en R Program :[lien](https://www.programiz.com/r-programming/examples/simple-calculator)
- Tuto de réalisation d’une calculatrice en Python : [lien](https://www.programiz.com/python-programming/examples/calculator)
- Documentation W3C WAI ARIA : [lien](https://www.w3.org/TR/wai-aria/)
- Documentation Mozilla WAI ARIA : [lien](https://developer.mozilla.org/fr/docs/Accessibilit%C3%A9/ARIA/Guides_ARIA)
- Documentation Opéra WAI ARIA : [lien](https://dev.opera.com/articles/introduction-to-wai-aria/)
- Comment utiliser ARIA de façon optimale : [lien](https://www.sitepoint.com/how-to-use-aria-effectively-with-html5/)

## La technologie :
Les technologies choisies sont HTML / CSS / JavaScript.

Les raisons : 
- Bonne maîtrise des langages ;
- Plus de possibilités pour l’organisation de l’information, style de l’interface ;
- Une accessibilité plus poussée ;
- Utilisation de librairies pour les différentes fonctions mathématiques : cos (), sin(), tan() ; random ; pi ; … 

## Le design / UX :
Pour une meilleure utilisation de la calculatrice standard, les éléments suivants sont envisagés :
- Afficher de la dernière opération effectuée, peut-être un historique ;
- Afficher l’opération en cours : 
![exemple](https://github.com/marinesl/calculatrice-jcvd/blob/master/capture-2.png)
- Remplacer les boutons « C » et « CE » par quelque chose de plus intuitif (comme le retour arrière ou supprimer de Windows) :
![exemple](https://github.com/marinesl/calculatrice-jcvd/blob/master/capture-3.png)
- Avoir les outils « flèches » pour naviguer facilement entre les chiffres ;
- Adapter les éléments à la taille de l’écran.

### Les solutions :
L’utilisation de Bootstrap sera nécessaire pour réaliser le responsive.

### Réalisation des maquettes :
![exemple](https://github.com/marinesl/calculatrice-jcvd/blob/master/capture-4.png)
![exemple](https://github.com/marinesl/calculatrice-jcvd/blob/master/capture-5.png)

## Accessibilité : 
Pour faciliter l’utilisation de la calculatrice par les personnes atteintes d’un handicap, les éléments suivants sont envisagés :
- Entrer les données avec le clavier ;
- Utilisation de l’audio au clic de chaque touche et à l’affichage du résultat ;
- Choix des couleurs pour les daltoniens ;
- Typo plus grosse pour la lisibilité
- Placer les chiffres dans l’ordre pour faciliter l’apprentissage des enfants.
![exemple](https://github.com/marinesl/calculatrice-jcvd/blob/master/capture-6.png)

### Les solutions :
L’utilisation des rôles ARIA et ajout des attributs ALT.

L’installation d’un lecteur d’écran pour tester (ex : [JAWS](www.freedomscientific.com/fs_products/software_jaws.asp) par Freedom Scientific ; [Window-Eyes](www.gwmicro.com/Window-Eyes/) de GW Micro ; [NVDA](www.nvda-project.org/) ; [Juicy Studio Accessibility Toolbar](https://addons.mozilla.org/fr/firefox/addon/juicy-studio-accessibility-too/) pour Firefox )

### Quelques exemples de rôles :
| Marqueur HTML5 |   Rôle ARIA   |
|:--------------:|:-------------:|
|    <article>   |    article    |
|     <aside>    | complementary |
|    <footer>    |  contentinfo  |
|     <form>     |      form     |
|    <header>    |     banner    |
|     <main>     |      main     |
|      <nav>     |   navigation  |
|    <section>   |     region    |

## Les avantages et les inconvénients d’avoir une calculatrice sur pc plutôt que physique

### Les avantages :
- Le design ;
- La lisibilité ; 
- Le responsive ;
- Permettre l’accessibilité ;
- Les différents modules séparés (standard, scientifique…) ;
- La puissance de calcul ;
- L’accès à l’outil plus rapidement, toujours disponible ;
- Permettre le copier-coller vers le document de travail ;
- Plus facile d’utilisation.

### Les inconvénients :
- La non portabilité ;
- Pas de mémoire sauf en cas de base de données ;
- Pas facile d’utilisation sans pavé numérique.

## Les améliorations apportées :
Le code de départ permettait d’afficher les zéros en début de chiffres (ex : 001 + 004 = 5). Ce qui n’est pas mathématique et absolument inutile.   
Solution : Si le premier chiffre entré par l’utilisateur est un zéro, on ne l’affiche pas. Si le premier chiffre entré par l’utilisateur après un opérateur est un zéro, on ne l’affiche pas.

Le code de départ permettait d’effacer toute l’opération. Il faudrait pouvoir effacer le dernier chiffre (ex : 1234 -> 123).  
Solution : Ajout d’un bouton qui supprime le dernier caractère avec la fonction slice.

Le code de départ permettait l’ajout d’un deuxième point pour la décimale lors de l’affichage du résultat (ex : 1.2 + 1.4 = 2.6.). Il faudrait interdire l’ajout d’un point pour la décimale s’il y en a déjà un.  
Solution : Utilisation d’un variable appelée « decimalAdded » à false par défaut et mise à true si l’utilisateur a cliqué sur la touche point ou si le résultat contient un point.

Le code de départ ne permettait pas d’utiliser la calculatrice avec le clavier.   
Solution : A un événement keypress, on récupère le code de la touche pour actionner la touche correspondante de la calculatrice.

En plus : Calculer à la Van Damme  
Si l’utilisateur entre « 1+1 », le résultat est « 11 , et ça c’est beau ! ».