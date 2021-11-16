/* Chiedi all’utente il suo nome,
poi chiedi il suo cognome,
poi chiedi il suo colore preferito
Infine scrivi sulla pagina “La password assegnata è: ” nomecognomecolorepreferito21  */

// i ask the user for his name "chiedo all'utente il suo nome"
const name = prompt("Dimmi il tuo nome");

// i ask the user for his surname "chiedo all'utente il suo cognome"
const surname = prompt("Dimmi il tuo cognome");

// i ask for his favorite color "chiedo il suo colore preferito"
const favoriteColor = prompt("Dimmi il tuo colore preferito");

// i write on the page "la password assegnata é: " namesurnamefavoritecolor21
let password = `${name}${surname}${favoriteColor}`;
document.getElementById("generatore-password")
.innerHTML= `La password assegnata é: ${password}21`;