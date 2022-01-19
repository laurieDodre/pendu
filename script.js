let btn = document.querySelector('#btnResult'); // bouton de validation du mot proposé
let revealSecretWord = document.querySelector('#result'); // affichage en temps réel du mot secret à deviner
let imgPendu = document.querySelector('#imgPendu'); // image du pendu selon les erreurs
let proposedWord = document.querySelector('input'); // input qui contient la proposition de mot
let alphabetLetters = document.querySelector('#alphabetLetter');

let numberOfStrokes = 0;
let secretWord = [
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
            //je dois comparer la valeur de mon 'td' au mot secret de ma fonction
            //si les lettres que mon utilisateur "click" est/sont présentes (une ou plusieurs)
            //alors je dois les afficher au bon emplacement
            //sinon si elles ne s'y trouvent pas
            //nombreDeCoups++
            //changer 'imgPendu'
        })
    }
    tbody.appendChild(tr);
    table.appendChild(tbody);
    alphabetLetters.appendChild(table);
}
virtualKeyboard();

function retrieveLettersSecretWord(randomWord) {
    randomWord = secretWord[Math.floor(Math.random() * secretWord.length)];
    let lettersRandomWord = randomWord.toUpperCase().split('');
    let table = document.createElement('table');        
     table.className = 'table';
    let tbody = document.createElement('tbody');
    let tr = document.createElement('tr');
    for (i = 0; i < lettersRandomWord.length; i++) {
        let td = document.createElement('td');
        td.className = 'tableSecretWord';
        tr.appendChild(td);
    }
    tbody.appendChild(tr);
    table.appendChild(tbody);
    revealSecretWord.appendChild(table);
    return lettersRandomWord;
}
console.log(retrieveLettersSecretWord(secretWord));

// function retrieveSecretWord() {
//     if(proposedWord.value == secretWord.value) {
//         retrieveLettersSecretWord();
//     }
// }
// console.log(retrieveSecretWord(secretWord));