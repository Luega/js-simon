// Visualizzare in pagina 5 numeri casuali poi fateli sparire.
//  Da lì parte un timer di 30 secondi.
// Dopo 30 secondi l’utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.

// creo array vuoti e per numeri random e numeri utente
let randomNumbers = [];
let userNumbers = [];

// creo un ciclo for per popolare l´array con 5 numeri randomici 
for (let i = 0; randomNumbers.length < 5; i++) {
    let number = Math.floor(Math.random() * 100); 
    if (randomNumbers.includes(number)) {
        i--
    } else {
        randomNumbers.push(number);
        // stampo i numeri nel body
        document.getElementById("container").innerHTML += `${number} `;
    }
}

// creo il timer per far sperire i numeri
setTimeout(function() {
    document.getElementById("container").innerHTML = "";
}, 3000);

// chiedo all´utente i numeri visti in precedenza
setTimeout(function() {
    for (let i = 0; i < 5; i++) {
        let userNumber = parseInt(prompt("Scrivi uno dei numeri apparsi prima"));
        if (randomNumbers.includes(userNumber)) {
            userNumbers.push(userNumber);
        }     
    }
}, 4000);

// stampo il risultato
setTimeout(function() {
    document.getElementById("container").innerHTML = 
    `
    <div>Hai indovinato ${userNumbers.length} numeri.</div> 
    <div>Numeri indovinati:</div>
    <div>${userNumbers}</div>
    `;
}, 4000);

console.log(userNumbers);
console.log(randomNumbers);

