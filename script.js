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

function afficherDossierIteratif(dossier){
    afficherDossier(dossier)
    const contenuDossier = dossier.contenu;
    for (const element in contenuDossier){
        if (contenuDossier[element].contenu){
            afficherDossier(contenuDossier[element]);
        } else {
            afficherFichier(contenuDossier[element]);
        }     
    }
}

//afficherDossierIteratif(dossierPrincipal)

function afficherDossierIteratif2(dossier){
    afficherDossier(dossier)
    const contenuDossier = dossier.contenu;
    for (const element of contenuDossier){   
        if (element.contenu){
            afficherDossier(element)
        } else {
            afficherFichier(element);
        }
        
    }
}
//afficherDossierIteratif2(dossierPrincipal)

//Etape 3 : Complète la fonction pour afficher les dossiers de troisième niveau 
// (ex: les dossiers “Pico 8” et “Dataviz” sont des dossiers de troisième niveau car ils se trouvent dans 
// un dossier “Projets collectifs, lui-même dans le dossier “Ada”).

function afficherDossierRecursif(dossier){
    if (Array.isArray(dossier)){
        dossier.forEach( element => afficherDossierRecursif(element))
    }
    else if (typeof dossier === "object"){
        //console.log("je suis un objet")
        const clesDossier = Object.keys(dossier);
        if(clesDossier.includes("contenu")){
            afficherDossier(dossier);
            const contenu =  dossier.contenu;
            afficherDossierRecursif(contenu)
        } else {afficherFichier(dossier)
        } 
    }
}

//afficherDossierRecursif(dossierPrincipal)

function afficherDossierRecursif2(dossierOuFichier){
    if (dossierOuFichier.contenu == null){
        afficherFichier(dossierOuFichier);
    } else {
        afficherDossier(dossierOuFichier);
        for (const element of dossierOuFichier.contenu){
            afficherDossierRecursif2(element)
        }
    }
}

afficherDossierRecursif2(dossierPrincipal)