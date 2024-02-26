// FOR LOOP

/* let array = [];

for (let i = 0; i < 6; i++) {
    const element = array[i];
    let input = Number(prompt('Inserisci un numero'))
    
    if (!(input % 2 == 0)) {
        array.push(input)
    }
}

console.log(array); */


// WHILE LOOP

let array = [];
let i = 0;
while ( i < 6) {
    const element = array[i];
    let input = Number(prompt('Inserisci un numero'))
    
    if (!(input % 2 == 0)) {
        array.push(input)
    }

    i++;
}

console.log(array);


