const firstWord = prompt('Inserisci la prima parola');
const secondWord = prompt('Inserisci la seconda parola');

const outputElement = document.querySelector('h1');

//console.log(firstWord[0]);
if (firstWord.length > secondWord.length) {
    outputElement.innerHTML = firstWord + secondWord;
} else if (firstWord.length < secondWord.length) {
    outputElement.innerHTML = secondWord + firstWord;
} else {
    outputElement.innerHTML = 'Le due parole sono di lunghezza uguale';
}