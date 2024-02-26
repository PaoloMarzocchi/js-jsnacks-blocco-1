// FOR LOOP

let output =[];
let input = Number(prompt('inserisci un numero'));

for (let i = 0; i < input; i++) {
    let cube = Math.pow(i,3);
    output.push(cube);
}

alert(`i cubi dei primi numeri fino a ${input} sono questi: ${output}`);