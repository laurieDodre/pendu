let bouton = document.querySelector('#btnResult'); // bouton de validation du mot proposé
let motAReveler = document.querySelector('#result'); // contient le mot secret à deviner
let imgPendu = document.querySelector('#imgPendu'); // image du pendu selon les erreurs
let motPropose = document.querySelector('input'); // input qui contient la proposition de mot
let lettresClavierVirtuel = document.querySelector('#alphabetLetter'); //contient le clavier virtuel
let message = document.querySelector('#message'); //contient le message d'erreur ou de succes

let motAleatoire;
let lettresMotAleatoire;
let nombreDeCoups = 0;

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

// function debutPartie() {

function genererClavierVirtuel() {
    for (const lettres of tableauLettres) {
        let lettre = document.createElement('div');
        lettre.className = 'tableAlphabet';
        lettre.innerText = lettres;
        lettresClavierVirtuel.appendChild(lettre);
    }
}
genererClavierVirtuel();

function recupererLettreAuClic() {
    for (const lettres of tableauLettres) {
        let lettrePush = lettres;
        lettrePush.addEventListener('click', () => {
            console.log(`Je suis la lettre ${lettrePush}`);
        })
    }
}
recupererLettreAuClic();

function recupererMotSecret() {
    motAleatoire = tableauMotsSecret[Math.floor(Math.random() * tableauMotsSecret.length)];
    for (i = 0; i < motAleatoire.length; i++) {
        let div = document.createElement('div');
        div.className = 'tableSecretWord';
        motAReveler.appendChild(div);
    }
    return motAleatoire;
}
let motAleatoireGenerer = recupererMotSecret(tableauMotsSecret);
console.log(motAleatoireGenerer);




function finDePartie() {
    if (nombreDeCoups >= 11) {
        imgPendu.src = "images/pendu11.png";
        message.innerText = "Oh non! Vous avez perdu. Le mot à trouvé était :"
        // Mettre fin à la partie
        // Proposez une nouvelle partie
    }
}
finDePartie();