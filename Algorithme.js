// Algorithme de somme de tous les éléments distincts des ensembles 1 et 2

// Déclaration des ensembles
let ensemble1 = [3, 1, 7, 9];
let ensemble2 = [2, 4, 1, 9, 3];

// Variable qui va stocker la somme des éléments distincts
let somme = 0;

/****************************************************
 * PARCOURS DE L'ENSEMBLE 1
 * On cherche les éléments de ensemble1
 * qui ne sont pas présents dans ensemble2
 ****************************************************/
for (let i = 0; i < ensemble1.length; i++) {

    // Variable qui indique si l'élément a été trouvé dans ensemble2
    let trouve = false;

    // Recherche de ensemble1[i] dans ensemble2
    for (let j = 0; j < ensemble2.length; j++) {
        if (ensemble1[i] === ensemble2[j]) {
            trouve = true; // élément trouvé dans les deux ensembles
        }
    }   

    // Si l'élément n'existe pas dans ensemble2
    if (trouve === false) {
        somme += ensemble1[i]; // on l'ajoute à la somme
    }
}

/****************************************************
 * PARCOURS DE L'ENSEMBLE 2
 * On cherche les éléments de ensemble2
 * qui ne sont pas présents dans ensemble1
 ****************************************************/
for (let i = 0; i < ensemble2.length; i++) {

    // Variable qui indique si l'élément a été trouvé dans ensemble1
    let trouve = false;

    // Recherche de ensemble2[i] dans ensemble1
    for (let j = 0; j < ensemble1.length; j++) {
        if (ensemble2[i] === ensemble1[j]) {
            trouve = true; // élément commun trouvé
        }
    }

    // Si l'élément n'est pas dans ensemble1
    if (trouve === false) {
        somme += ensemble2[i]; // ajout à la somme
    }
}

// Affichage du résultat final
console.log(somme);




// Fonction produit scalaire (dot_product)

function dot_product(v1, v2) {
    // Initialisation du produit scalaire à 0
    let ps = 0;

    // Compteur pour parcourir les vecteurs
    let i = 0;

    // Tant qu'on n'a pas parcouru tous les éléments
    while (i < v1.length) {
        // On multiplie les éléments de même position
        ps = ps + v1[i] * v2[i];

        // On passe à l'élément suivant
        i++;
    }

    // On retourne le résultat du produit scalaire
    return ps;
}

// Programme principal (test d’orthogonalité)

// Nombre de couples de vecteurs à tester
let n = 3;

// Liste des couples de vecteurs
let vecteurs = [
    { v1: [1, 2], v2: [2, -1] },
    { v1: [3, 4], v2: [5, 6] },
    { v1: [2, 0], v2: [0, 3] }
];

// Index pour parcourir les couples
let i = 0;

// Parcours de tous les couples de vecteurs
while (i < n) {

    // Calcul du produit scalaire pour le couple i
    let ps = dot_product(vecteurs[i].v1, vecteurs[i].v2);

    // Vérification de l'orthogonalité
    if (ps === 0) {
        console.log("Orthogonaux"); // Produit scalaire nul
    } else {
        console.log("Non orthogonaux"); // Produit scalaire non nul
    }

    // Passage au couple suivant
    i++;
}