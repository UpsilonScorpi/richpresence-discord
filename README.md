# richpresence-discord
Programme pour avoir une RichPresence sur discord
*Nécessite d'avoir Node d'installer*

## Configuration
Il vous faut avoir un bot discord

Pour cela, rendez vous sur le [portail développeur](https://discord.com/developers/applications)

Créez une application et copier son identifiant

Ensuite, télécharger le code et rendez vous dans le fichier index.js

Coller l'identifiant dans la dernière ligne à l'emplacement indiqué

### Personalisation
Pour personalisez votre rich presence à fond, rendez vous sur la page de votre bot, allez dans "Rich Presence" -> "Art Assets" et mettez les images que vous voulez (notez bien les noms donné au image)

Rendez vous maintenant dans le fichier index.js

```js
activity : {
    details : "details",
    state : "state",
    assets : {
        large_image : "key",
        large_text : "text",
        small_image : "key",
        small_text : "text"
    },
    buttons : [
        {label : "text" , url : "url"},
        {label : "text" , url : "url"}
    ]
}
```

Maintenant, remplissez y avec ce que vous voulez en sachant que:
- Les "url" doivent être remplacer par des URL
- Les "key" doivent être remplacer avec les noms des images voulue
- Si vous ne souhaitez pas avoir quelque chose
    - Ou vous supprimer la deuxième ligne
    - Ou vous ajouter "//" devant
