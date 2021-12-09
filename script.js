// Visualizzare in pagina 5 numeri casuali poi fateli sparire.
//  Da lì parte un timer di 30 secondi.
// Dopo 30 secondi l’utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.

// creo array vuoto
let randomNumbers = [];

// creo un ciclo for per popolare l´array con 5 numeri randomici 
for (let i = 0; randomNumbers.length < 5; i++) {
    let number = Math.floor(Math.random() * 100); 
    randomNumbers.push(number);
    // stampo i numeri nel body
    document.getElementById("container").innerHTML += `${number} `;
}

