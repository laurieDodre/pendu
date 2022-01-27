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

function genererClavierVirtuel() {
    let table = document.createElement('table');
    table.className = 'table';
    let tbody = document.createElement('tbody');
    let tr = document.createElement('tr');
    for (const lettres of tableauLettres) {
        let td = document.createElement('td');
        td.className = 'tableTd';
        td.innerText = lettres;
        tr.appendChild(td);
    }
    tbody.appendChild(tr);
    table.appendChild(tbody);
    lettresClavierVirtuel.appendChild(table);
}
genererClavierVirtuel();

function finDePartie() {
    if (nombreDeCoups >= 11) {
        imgPendu.src = "images/pendu11.png";
        message.innerText = "Oh non! Vous avez perdu. Le mot à trouvé était :"
        // Mettre fin à la partie
        // Proposez une nouvelle partie
    }
}
finDePartie();

function recupererMotSecret() {
    motAleatoire = tableauMotsSecret[Math.floor(Math.random() * tableauMotsSecret.length)];
    lettresMotAleatoire = motAleatoire.toUpperCase().split('');
    for (i = 0; i < lettresMotAleatoire.length; i++) {
        let div = document.createElement('div');
        div.className = 'tableSecretWord';
        motAReveler.appendChild(div);
    }
    return lettresMotAleatoire;
}
let motAleatoireGenerer = recupererMotSecret(tableauMotsSecret);
console.log(motAleatoireGenerer);