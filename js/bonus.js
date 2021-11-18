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

let namess = prompt('inserisci il tuo nome: ');
console.log(namess);
let surnamez = prompt('inserisci il tuo cognnome: ');
console.log(surnamez);
let colorz = prompt('inserisci il tuo colore preferito: ');
console.log(colorz);

let numeropre = parseInt(prompt('Inserisci il tuo numero preferito'));
console.log(numeropre);
numeropresumz = numeropre + 5;
console.log(numeropresumz);

let passwordbonus = `
       ${namess}${surnamez}${colorz}${numeropresumz}
     `;

console.log(passwordbonus);
document.getElementById('passwordbonus').innerHTML = passwordbonus;
