// FOR LOOP

/* let output =[];
let input = Number(prompt('inserisci un numero'));

for (let i = 0; i < input; i++) {
    let cube = Math.pow(i,3);
    output.push(cube);
}

alert(`i cubi dei primi numeri fino a ${input} sono questi: ${output}`); */


// WHILE LOOP

let output =[];
let input = Number(prompt('inserisci un numero'));

let i = 0;
while(i < input) {
    let cube = Math.pow(i,3);
    output.push(cube);
    i++
}

alert(`i cubi dei primi numeri fino a ${input} sono questi: ${output}`);