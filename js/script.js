// Descrizione:
// Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 30 secondi.
// Dopo 30 secondi i numeri scompaiono e appaiono invece 5 input in cui l'utente deve inserire i numeri che ha visto precedentemente, nell'ordine che preferisce.

// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.

// NOTA: non è importante l'ordine con cui l'utente inserisce i numeri, basta che ne indovini il più possibile.

// BONUS:
// Inseriamo la validazione: se l'utente mette due numeri uguali o inserisce cose diverse da numeri lo blocchiamo in qualche modo.
// Se l’utente ha inserito qualcosa di non valido, segnaliamolo visivamente nel form.





//selezioniamo l'elemento per il contdown della pagina
const countDownPage = document.getElementById("countdown");

//selezioniamo la lista dove usciranno in output i 5 numeri casuali
const numberList = document.getElementById("numbers-list");

//selezioniamo il form della pagina per le risposte allo scadere del timer
const formRisposte = document.getElementById("answers-form");

//selezioniamo il P dal DOM per il result
const mioP = document.getElementById("message");

//creo una variabile di riferimento per il timer del contdown
let timer;

//richiamiamo la funzione per il contdown 
contdownStart(countDownPage);

//ARRAY numeri casuali
//creiamo una variabile array per i li
let arrayLi = [];

// inseriamo i tag li all interno della lista con un ciclo for
for(let i = 0; i < 5; i++){
    //creiamo una variabile con un numero casuale al suo interno
    const random = randomNum(1,50);
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

//FORM RISPOSTE
//gestione bottone conferma
formRisposte.addEventListener("submit",
    (event) => {

        //blocco invio del form
        event.preventDefault();

        //richiamiamo gli input
        const inputElement = document.querySelectorAll(".form-control");
        // console.log(inputElement);

        //creiamo un array vuoto per gli input inseriti
        let arrayRisp = [];
        for(let i = 0; i < 5; i++){
            // inseriamo gli input all interno del nuovo arrayRisp
            let currentNum = parseInt(inputElement[i].value);
            //pushamo all interno del nuovo array solo i numeri con esito true al confronto con l arrayLi (nRandom)
            if(arrayLi.includes(currentNum)){
                arrayRisp.push(currentNum);
            }
        }
        //stabiliamo quali e quanti numeri ha indovinato l'utente
        if(arrayRisp.length === 5){
            mioP.innerHTML = `Bravo! Hai indovinato tutti i numeri! e sono: ${arrayRisp}`;
        } else if(arrayRisp.length === 0){
            mioP.innerHTML = `Non hai indovinato neanche un numero!`
        } else
            mioP.innerHTML = `Hai indovinato ${arrayRisp.length} numeri! e sono: ${arrayRisp}`;
        
    }
);

//FUNZIONI

//creiamo una funzione per il contdown in pagina
function contdownStart(contatore){
    //variabile di conteggio
    let count = 30;

    //incrementiamo la variabile count e facciamo l'output in pagina
    timer = setInterval(()=> {
        countDownPage.innerHTML = count--;
        if(count === -1){
            clearInterval(timer);
            countDownPage.classList.add("d-none");
            numberList.classList.add("d-none");
            formRisposte.classList.remove("d-none");
        }
    }, 1000);
}

//creiamo una funzione per generare un numero random da 1 a 100
function randomNum(min,max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}








