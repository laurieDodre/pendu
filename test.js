let bouton = document.querySelector('#btnResult'); // bouton de validation du mot proposé
let motAReveler = document.querySelector('#result'); // contient le mot secret à deviner
let imgPendu = document.querySelector('#imgPendu'); // image du pendu selon les erreurs
let motPropose = document.querySelector('input'); // input qui contient la proposition de mot
let lettresClavierVirtuel = document.querySelector('#alphabetLetter'); //contient le clavier virtuel

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

function recupererMotSecret() {
    let motAleatoire = tableauMotsSecret[Math.floor(Math.random() * tableauMotsSecret.length)];
    let lettresMotAleatoire = motAleatoire.toUpperCase().split('');
    let table = document.createElement('table');
    table.className = 'table';
    let tbody = document.createElement('tbody');
    let tr = document.createElement('tr');
    for (i = 0; i < lettresMotAleatoire.length; i++) {
        let td = document.createElement('td');
        td.className = 'tableSecretWord';
        tr.appendChild(td);
    }
    tbody.appendChild(tr);
    table.appendChild(tbody);
    motAReveler.appendChild(table);
    return lettresMotAleatoire;
}

let motAleatoireGenerer = recupererMotSecret(tableauMotsSecret);
console.log(motAleatoireGenerer);

// function checkGame(letter) {
//     if (lettersRandomWord.includes(letter)) {
//         let playerWord = [];
//         playerWord.push(letter);
//         afficher toutes les lettres "letter" contenu dans lettersRandomWord;
//         if (playerWord == lettersRandomWord) {
//             let messageSucces = document.createElement('div');
//             messageSucces.style.backgroundColor = 'green';
//             messageSucces.style.color = 'white';
//             messageSucces.textContent = `Bravo ! Vous venez de dévoiler la lettre ${playerWord} du mot secret.`;
//             motAReveler.appendChild(messageSucces);
//         } else if (nombreDeCoups < 10) {
//              afficher une partie de la potence
//             faire une boucle for qui à chaque tour change l'image
//         }
//     } else {
//           sinon le joueur 1 a gagné afficher le menu/les scores ???
//           finDeSi 
//     }
//       finDeSi            
//     nombreDeCoups++;
// }

// function retrieveLetterClickHandler(event) {
//     const td = event.currentTarget;
//     const letter = td.innerText;
//     checkGame(letter);
// }

