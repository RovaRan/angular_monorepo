# Documentation
## Typescript
### Sur les libs
`ng-packagr`: outils utiliser par angular CLI pour créer des packages à partir d'un code compilé.

Pour créer sa propre lib, lancer la commande :
```powershell 
ng generate library my-lib
```

Le fichier angular.json sera mis à jour avec un nouveau projet:
```json
"projects": {
    // ... 
    "my-lib": {
        // ...
    }
}
```
Pour compiler et tester la lib:
```powershell
ng build my-lib --configuration development
ng test my-lib
ng lint my-lib
```
Les commandes créeront un dossier `dist/my-lib`

Plusieurs points sont à prendre en compte pour factoriser des parties d'une application en bibliothèque. 
(Plus de détails dans le lien de l'article)

Pour publier la bibliothèque:
```powershell
ng build my-lib
cd dist/my-lib
npm publish
```

Une lib non construite (builder) ne peut pas être utiliser.
Pour l'importer:
```Typescript
import { myExport } from 'my-lib';
```

Pour un build incrémentiels, chaque fois qu'un fichier est modifié, une construction partielle est effectuée qui émet les fichiers modifiés: 
```powershell
ng build my-lib --watch
```

Source: [Création d'une lib](https://angular.io/guide/creating-libraries)

## Monorepo
`// todo`
