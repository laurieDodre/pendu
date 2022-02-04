let bouton = document.querySelector('#btnResult'); // bouton de validation du mot proposé
let motAReveler = document.querySelector('#result'); // contient le mot secret à deviner
let imagePendu = document.querySelector('#imgPendu'); // image du pendu selon les erreurs
let motPropose = document.querySelector('input'); // input qui contient la proposition de mot
let lettresClavier = document.querySelector('#alphabetLetter'); //contient le clavier virtuel
let message = document.querySelector('#message'); //contient le message d'erreur ou de succes

let motAleatoire;
let motDuJoueur = "";
let nombreDeLettreRestanteATrouver = 0;
let casesLettreATrouver = null;
let nombreDeCoups = 0;
let maxCoups = 11;

let imagePenduParCoup = [
    'pendu1', 'pendu2', 'pendu3', 'pendu4', 'pendu5', 'pendu7', 'pendu8', 'pendu9', 'pendu10', 'pendu11'
]

let tableauMotsSecret = [
    'chocolat',
    'maison',
    'believemy',
    'opportunite',
    'odeur',
    'gymnaste',
    'horizon',
    'intelligent',
    'caillot',
    'bataillon',
    'bride',
    'frousse',
    'porcelaine',
    'roman',
    'histoire',
    'thermometre',
    'ecole',
    'fleuriste',
    'pharmacie',
    'bijoux',
    'coronavirus',
    'dent'
]
let tableauLettres = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

function creationEtVerificationLettresClavierVirtuel() {
    for (const lettre of tableauLettres) {
        const caseLettre = document.createElement('div');
        caseLettre.className = 'tableAlphabet';
        caseLettre.textContent = lettre;
        lettresClavier.appendChild(caseLettre);
        caseLettre.addEventListener('click', () => {
            const lettreCase = caseLettre.textContent;
            console.log(caseLettre);
            verificationLettre(lettreCase);
        })
    }            
}
creationEtVerificationLettresClavierVirtuel();

function recupererMotSecret() {
    motAleatoire = tableauMotsSecret[Math.floor(Math.random() * tableauMotsSecret.length)];
    motAleatoire = motAleatoire.toUpperCase();
    let longueurDuMotAleatoire = motAleatoire.length;
    motDuJoueur = ''.repeat(longueurDuMotAleatoire);
    nombreDeLettreRestanteATrouver = longueurDuMotAleatoire;
    return motAleatoire;
}
console.log(recupererMotSecret(tableauMotsSecret));
// recupererMotSecret(tableauMotsSecret);

function afficherCaseVide() {
    const div = document.createElement('div');
    div.className = 'tableSecretWord';
    motAReveler.appendChild(div);
}

function afficherCasesLettresATrouver(motAleatoire) {
    for (i = 0; i < motAleatoire.length; i++) {
        afficherCaseVide();
    }
    casesLettreATrouver = document.querySelectorAll('.tableSecretWord');
}
afficherCasesLettresATrouver(motAleatoire);

function afficherLettreCorrecte(lettre, position) {
    casesLettreATrouver[position].textContent = lettre;
}

function remplaceLettre(str, index, nouvelleLettre) {
    return str.substring(0, index) + nouvelleLettre + str.substring(index + nouvelleLettre.lenght);
}

//Revoir cette fonction car elle ne fonctionne pas comme je le souhaite
function afficherPartiePendu(coups) {
    if (coups >= maxCoups) {
        message.innerText = `Fin de la partie. Le mot à trouvé était : ${motAleatoire} !`;
        imgPendu.src = `images/pendu11.png`;
    } else {
        let coupRestant = maxCoups - coups;
        message.innerText = `Vous avez effectuée ${coups} coups, il ne vous reste plus que ${coupRestant} coups pour trouver le bon mot.`;
        nomImagePendu = `images/${imagePenduParCoup[coups - 1]}.png`;        
        imgPendu.src = nomImagePendu;
    }
}

function afficherPartieGagnee() {
    message.innerText = ` Vous avez gagnée. Le mot à trouvé est bien ${motAleatoire} !`;
}

function verificationLettre(lettre) {
    let ok = false;
    for (let i = 0; i < motAleatoire.length; i++) {
        let c = motAleatoire.charAt(i);
        if ((lettre == c) && (motDuJoueur.charAt(i) == '')) {
            ok = true;
            afficherLettreCorrecte(lettre, i);
            motDuJoueur == remplaceLettre(motDuJoueur, i, lettre);
        }
    }
    if ((ok && (nombreDeLettreRestanteATrouver == 0))) {
        afficherPartieGagnee();
    } else {
        afficherPartiePendu(nombreDeCoups);
        nombreDeCoups++;
        console.log(nombreDeCoups);
    }
}







