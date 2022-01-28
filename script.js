let bouton = document.querySelector('#btnResult'); // bouton de validation du mot proposé
let motAReveler = document.querySelector('#result'); // contient le mot secret à deviner
let imgPendu = document.querySelector('#imgPendu'); // image du pendu selon les erreurs
let motPropose = document.querySelector('input'); // input qui contient la proposition de mot
let lettresClavier = document.querySelector('#alphabetLetter'); //contient le clavier virtuel
let message = document.querySelector('#message'); //contient le message d'erreur ou de succes

let motAleatoire;
let lettresMotAleatoire;
let lettre;
let lettreExacte;
let div;

let nombreDeCoups = 0;

let images = [
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

// function debutPartie() {

function verificationLettresClavierVirtuel() {
    for (const lettres of tableauLettres) {
        lettre = document.createElement('div');
        lettre.className = 'tableAlphabet';
        lettre.innerHTML = lettres;
        lettresClavier.appendChild(lettre);
        lettre.addEventListener('click', () => {
            console.log(lettres);
            if (motAleatoire.includes(lettres)) {
                console.log('ok');
                lettreExacte = [];
                lettreExacte.push(lettres);
                div.innerText = lettreExacte;
            }
        })
    }
}
verificationLettresClavierVirtuel();

function recupererMotSecret() {
    motAleatoire = tableauMotsSecret[Math.floor(Math.random() * tableauMotsSecret.length)];
    motAleatoire = motAleatoire.toUpperCase();
    for (i = 0; i < motAleatoire.length; i++) {
        div = document.createElement('div');
        div.className = 'tableSecretWord';
        motAReveler.appendChild(div);
    }
    return motAleatoire;
}
console.log(recupererMotSecret(tableauMotsSecret));

function finDePartie() {
    if (nombreDeCoups >= 11) {
        imgPendu.src = "images/pendu11.png";
        message.innerText = `Oh non! Vous avez perdu. Le mot à trouvé était : ${motAleatoire}`
        // Mettre fin à la partie
        // Proposez une nouvelle partie
    }
}
finDePartie();