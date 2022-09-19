/*Faça um algoritmo que calcule e apresente o valor do volume de uma lata de óleo, dado
seu raio e sua altura.*/

let raio = Number(prompt("Digite o raio de uma lata de óleo"));
let altura = Number(prompt("Digite a altura de uma lata de óleo"));

let volume = 3.14 * (raio * raio) * altura;

alert("O volume da lata de óleo é " + volume);


