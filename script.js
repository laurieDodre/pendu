let btn = document.querySelector('#btnResult'); // bouton de validation du mot proposé
let revealSecretWord = document.querySelector('#result'); // affichage en temps réel du mot secret à deviner
let imgPendu = document.querySelector('#imgPendu'); // image du pendu selon les erreurs
let proposedWord = document.querySelector('input'); // input qui contient la proposition de mot
let alphabetLetters = document.querySelector('#alphabetLetter');

function generatorSecretWord(word) { // fonction  pour générer un mot aléatoire
    return Math.floor(Math.random() * Math.floor(word));
}

let secretWord = [
    'chocolat',
    'maison',
    'believemy',
    'opportunité',
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
    'pharmacie'
]

let tableau = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

function virtualKeyboard() {
    let table = document.createElement('table');
    table.className = 'table';
    let tbody = document.createElement('tbody');
    let tr = document.createElement('tr');

    for (const letters of tableau) {
        let td = document.createElement('td');
        td.className = 'tableTd';
        td.innerText = letters;
        tr.appendChild(td);
        td.addEventListener('click', () => {
            console.log(td.innerText);
        })
    }

    tbody.appendChild(tr);
    table.appendChild(tbody);
    alphabetLetters.appendChild(table);
}

virtualKeyboard();