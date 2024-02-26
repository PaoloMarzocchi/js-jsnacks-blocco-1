// FOR LOOP

/* let input = prompt('inserisci un numero di 4 cifre');
let sum = 0;
for (let i = 0; i < input.length; i++) {
    const element = Number(input[i]);
    sum += element;
}

alert(`la somma dei numeri è : ${sum}`); */

// WHILE LOOP

let input = prompt('inserisci un numero di 4 cifre');
let sum = 0;

let i = 0;
while (i < input.length) {
    const element = Number(input[i]);
    sum += element;
    i++;
}

alert(`la somma dei numeri è : ${sum}`);