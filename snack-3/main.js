let input;
let numbers = [];
let sum = 0;

/* for (let i = 1; i <= 10; i++) {
    input = Number(prompt(`Inserisci il numero per 10 volte (${i}) `));
    numbers.push(input)
    sum += input;
}

console.log(sum); */
let i = 1;
while ( i <= 10) {
    input = Number(prompt(`Inserisci il numero per 10 volte (${i}) `));
    numbers.push(input)
    sum += input;
    i++;
}

console.log(sum);