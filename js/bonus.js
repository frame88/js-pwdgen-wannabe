/* esercizio bonus 
let namez = prompt('inserisci il tuo nome: ');
console.log(namez);

let surname = prompt('inserisci il tuo cognnome: ');
console.log(surname);

let color = prompt('inserisci il tuo colore preferito: ');
console.log(color);

let numeropre = parseInt(prompt('Inserisci il tuo numero preferito'));
console.log(numeropre);
numeropresum = numeropre + 5;
console.log(numeropresum);

let passwordbonus = `
       ${namez}${surname}${color}${numeropresum}
     `;

console.log(passwordbonus);

document.getElementById('passwordbonus').innerHTML = passwordbonus;
*/

let namez = prompt('inserisci il tuo nome: ');
console.log(namez);
let surname = prompt('inserisci il tuo cognnome: ');
console.log(surname);
let color = prompt('inserisci il tuo colore preferito: ');
console.log(color);

let numeropre = parseInt(prompt('Inserisci il tuo numero preferito'));
console.log(numeropre);
numeropresum = numeropre + 5;
console.log(numeropresum);

let passwordbonus = `
       ${namez}${surname}${color}${numeropresum}
     `;

console.log(passwordbonus);
document.getElementById('passwordbonus').innerHTML = passwordbonus;
