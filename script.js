import { dossierPrincipal } from "./constant.js";

//console.log (dossierPrincipal);

//Etape 1
//Crée une fonction afficherDossier qui va afficher le nom du dossier principal en utilisant la variable dossierPrincipal

function afficherDossier(dossier) {
    console.log(`🗂️  ${dossier.nom}`);
}

//Etape 2
//Tu vas créer deux fonctions : afficherDossierIteratif (l’utilisation des instructions for… est autorisée)
// et afficherDossierRecursif (il faut que cette fonction s’appelle elle-même!)
//Ces deux fonctions afficheront les dossiers et le fichier que contient le dossier Ada.

function afficherFichier(fichier){
    console.log(`📑 ${fichier.nom}`);
}

function afficherDossierIteratif(){
    afficherDossier(dossierPrincipal)
    const contenuDossier = dossierPrincipal.contenu;
    for (const element in contenuDossier){
        if (contenuDossier[element].contenu){
            afficherDossier(contenuDossier[element]);
        } else {
            afficherFichier(contenuDossier[element]);
        }     
    }
}


afficherDossierIteratif()



