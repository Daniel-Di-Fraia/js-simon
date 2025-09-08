// Descrizione:
// Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 30 secondi.
// Dopo 30 secondi i numeri scompaiono e appaiono invece 5 input in cui l'utente deve inserire i numeri che ha visto precedentemente, nell'ordine che preferisce.

// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.

// NOTA: non è importante l'ordine con cui l'utente inserisce i numeri, basta che ne indovini il più possibile.

// BONUS:
// Inseriamo la validazione: se l'utente mette due numeri uguali o inserisce cose diverse da numeri lo blocchiamo in qualche modo.
// Se l’utente ha inserito qualcosa di non valido, segnaliamolo visivamente nel form.



//COUNTDOWN

//selezioniamo l'elemento per il contdown della pagina
const countDownPage = document.getElementById("countdown");

//creo una variabile di riferimento per il timer del contdown
let timer;

//richiamiamo la funzione per il contdown 
contdownStart(countDownPage);

//creiamo una funzione per il contdown in pagina
function contdownStart(contatore){
    //variabile di conteggio
    let count = 30;

    //incrementiamo la variabile count e facciamo l'output in pagina
    timer = setInterval(()=> {
        countDownPage.innerHTML = count--;
        if(count === -1){
            clearInterval(timer);
        }
    }, 1000);
}

//ARRAY numeri casuali

//selezioniamo la lista dove usciranno in output i 5 numeri casuali
const numberList = document.getElementById("numbers-list");

//creiamo una variabile array per i li
arrayLi = [];

// inseriamo i tag li all interno della lista con un ciclo for
for(let i = 0; i < 5; i++){
    //creiamo una variabile con un numero casuale al suo interno
    const random = randomNum(0,100);
    //condizione per pushare il numero random nell'array, se gia presente ripete il ciclo per farne un altro
    if (!arrayLi.includes(random)){
        arrayLi.push(random);
        //creiamo i li nella lista con i numeri random
        const newLi = document.createElement('li');
        newLi.innerHTML = random;
        numberList.appendChild(newLi);
        //ALTRIMENTI ripeti il ciclo
    } else {
        i--;
    }   
}

//creiamo una funzione per generare un numero random da 1 a 100
function randomNum(min,max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}





