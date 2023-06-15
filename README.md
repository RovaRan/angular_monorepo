ng-packagr: outils utiliser par angular CLI pour créer des packages à partir de votre code compilé.

Pour créer sa propre lib, lancer la commande :
ng generate library my-lib

Le fichier angular.json sera mis à jour avec un nouveau projet:
"projects": {
    // ... 
    "my-lib": {
        // ...
    }
}

Pour compiler et tester la lib:
ng build my-lib --configuration development
ng test my-lib
ng lint my-lib
Les commandes créeront un dossier dist/my-lib

Plusieurs points sont à prendre en compte pour factorier des parties d'une application en bibliothèque. 
(Plus de détails dans le lien de l'article)

Pour publier la bibliothèque:
ng build my-lib
cd dist/my-lib
npm publish

Pour utiliser la lib: 
ng build my-lib
Une lib non construite (builder) ne peut pas être utiliser.
Et dans l'application:
import { myExport } from 'my-lib';





ng build rv-lib
cd dist/rv-lib
npm publish

Build incrémentiels: 
ng build my-lib --watch
"Chaque fois qu'un fichier est modifié, une construction partielle est effectuée qui émet les fichiers modifiés."






Source: https://angular.io/guide/creating-libraries

Sur le meme sujet:
https://dev.to/younup/a-quoi-servent-les-peerdependencies-dans-le-package-json-3g29
https://angular.io/guide/singleton-services
https://angular.io/guide/schematics-for-libraries
https://angular.io/guide/file-structure
https://angular.io/guide/file-structure#multiple-projects