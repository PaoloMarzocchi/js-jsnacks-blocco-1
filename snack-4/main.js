const list = ['gigio', 'massimo', 'sandro', 'peppino', 'asdrubale'];
const userName = prompt('Inserisci il tuo nome');
let check = false;

for (let i = 0; i < list.length; i++) {
    const element = list[i];
    if (userName === element) {
        check = true;
        break;
    }
}

if (check === true) {
    alert('Complimenti sei ricco e puoi entrare');
} else{
    alert('Mi spiace, sei troppo povero');
}