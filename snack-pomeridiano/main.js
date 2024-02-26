let randomNumber = Math.floor((Math.random() * 100) + 1);
console.log(randomNumber);
let counter = 0;

let check = true;
do {
    let chance = prompt('Scrivi un numero da 1 a 100 numero che secondo te uscirà') ;
    
    if (chance > randomNumber) {
        alert('SEI ANDATO TROPPO ALTO') ;
    } else if (chance < randomNumber){
        alert('SEI ANDATO TROPPO BASSO');
    } else{
        
        check = false;
    }

    counter++;

} while (check) ;
    document.writeln(`BRAAAAAAAVO/A CI HAI PROVATO ${counter} VOLTE`); 




