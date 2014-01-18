Ce projet propose un simple serveur NODE JS tournant sur le port 3000 et disposant d'une simple route associée à l'uri "/".

Un paramètre de requête HTTP "nom" est attendu pour desservir une réponse en JSON sous le format :
`{result : 'hello Pierre'}`
si l'adresse appelée était http://127.0.0.1:3000?nom=Pierre

Pré-requis
----------------
Node JS doit être installé sur votre poste et le répertoire d'exécutables de NODE JS doit être ajouté à votre path.

Pour vérifier, taper dans une console : 
`node --version`

Installation et lancement du serveur
----------------

Télécharger le fichier ([hello.js](https://raw.github.com/pilerou/masterdosi-helloworld-nodejs/master/hello.js)) dans un répertoire local `[LOCALHELLONODE_DIR]`

Ouvrir une console :
`cd [LOCALHELLONODE_DIR]`

Installer les librairies nécessaires :
`npm install express`

Lancer le serveur :
`node hello.js`

La console devrait écrire 
> Server running at http://127.0.0.1:3000

Test de l'application
----------------
Ouvrir un navigateur et saisir l'adresse http://127.0.0.1:3000/?nom=Pierre
Le navigateur affiche 
> {
  "result": "hello Pierre"
}








